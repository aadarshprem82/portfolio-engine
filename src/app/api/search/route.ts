import { searchKnowledge } from "@/lib/search";
import { generateFallbackAnswer } from "@/lib/ai";


export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    
    if (!query) {
      return Response.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }

    const { bestMatch, score } = searchKnowledge(query);
    // console.log(result);

    if (bestMatch && score >= 1) {
      return Response.json({
        type: "knowledge",
        result: bestMatch,
      });
    }
    console.log("Best Match", bestMatch);
    
    const relatedSuggestions = bestMatch?.data?.related || [
      "system reliability", "ui ux", "web apps", "fullstack"
    ]
    const aiAnswer = await generateFallbackAnswer(query, bestMatch.data);
    const aiAnswerResult = JSON.parse(aiAnswer);

    return Response.json({
      type: "ai",
      answer: aiAnswerResult,
      related: relatedSuggestions,
    });

  } catch (error) {
    return Response.json(
      { error: "Something went wrong "+ error },
      { status: 500 }
    );
  }
}