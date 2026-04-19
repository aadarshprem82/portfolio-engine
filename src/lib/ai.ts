import { GoogleGenerativeAI } from "@google/generative-ai";
import { normalizeKey, getCache, setCache, getInFlight, setInFlight, clearInFlight } from "./cache";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const MODELS = ["gemini-3.1-flash-lite-preview", "gemini-3-flash-preview", "gemini-2.5-flash"]

function is429(err: any) {
  const msg = String(err?.message || "");
  return msg.includes("429");
}

function is503(err: any) {
  const msg = String(err?.message || "");
  return msg.includes("503");
}

function buildPrompt(query: string, context?: any) {
  return `
  You are a developer answering questions about your own experience.

  If context is available, base your answer on it.
  If context is weak or missing, still answer intelligently but do NOT say you lack data.

  Instead say something like:
  "I haven't worked directly on this, but based on my experience with X..."

  If the question does not exactly match the experience,
  use the closest relevant experience provided.

  DO NOT say "I don't have data".
  Always relate your answer to the given context.
  
  You are generating structured portfolio responses.

  Return ONLY valid JSON matching this schema:
  
  {
    id: string;
    keywords: string[];
    data: {
      title: string;
      experiences: string[];
      projects: {
        name: string;
        impact: string;
      }[];
      thoughts: string;
      confidence: {
        level: "low" | "medium" | "high";
        reason: string;
      };
    };
  }

  ---

  User Question:
  ${query}

  ---

  Relevant Experience (if any):
  ${context ? JSON.stringify(context) : "None"}

  Answer in a professional tone.
  `
}

export async function generateFallbackAnswer(query: string, context?: any) {
  console.log("Getting response from AI")

  const key = normalizeKey(query, context);

  const cached = getCache(key);
  if (cached) {
    console.log("Cache hit!!");
    return cached;
  }

  const existing = getInFlight(key);
  if (existing) {
    console.log('Deduped request');
    return existing;
  }

  const promise = (async () => {
    const prompt = buildPrompt(query, context);

    let lastError;

    for (const modelName of MODELS) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName, });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const ttl = context ? 1000 * 60 * 60 : 1000 * 60 * 15;

        setCache(key, text, ttl);

        return text;
      } catch (err) {
        lastError = err;

        if (is429(err)) continue;
        if (is503(err)) continue;

        throw err;
      }
    }
    throw lastError;
  })();

  setInFlight(key, promise);

  try {
    return await promise;
  } finally {
    clearInFlight(key);
  }

  // const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
  // const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });

  // const prompt = `
  // You are a developer answering questions about your own experience.

  // If context is available, base your answer on it.
  // If context is weak or missing, still answer intelligently but do NOT say you lack data.

  // Instead say something like:
  // "I haven't worked directly on this, but based on my experience with X..."

  // If the question does not exactly match the experience,
  // use the closest relevant experience provided.

  // DO NOT say "I don't have data".
  // Always relate your answer to the given context.

  // You are generating structured portfolio responses.

  // Return ONLY valid JSON matching this schema:

  // {
  //   id: string;
  //   keywords: string[];
  //   data: {
  //     title: string;
  //     experiences: string[];
  //     projects: {
  //       name: string;
  //       impact: string;
  //     }[];
  //     thoughts: string;
  //     confidence: {
  //       level: "low" | "medium" | "high";
  //       reason: string;
  //     };
  //   };
  // }

  // ---

  // User Question:
  // ${query}

  // ---

  // Relevant Experience (if any):
  // ${context ? JSON.stringify(context) : "None"}

  // Answer in a professional tone.
  // `

  // const result = await model.generateContent(prompt);
  // const response = await result.response;

  // console.log("Response from AI: " + response.text())
  // return response.text();
}