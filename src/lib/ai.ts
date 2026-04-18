import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateFallbackAnswer(query: string, context?: any) {
  console.log("Getting response from AI")
  // const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
  const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });

  const prompt = `
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

  const result = await model.generateContent(prompt);
  const response = await result.response;

  console.log("Response from AI: " + response.text())
  return response.text();
}