import { searchKnowledge } from "@/lib/search";
import { generateFallbackAnswer } from "@/lib/ai";

// const relatedSuggestion = [
//   "ui ux", "web apps", "fullstack", "system reliability", "performance tuning", "project management", "team leadership", "delivery", "machine learning", "data visualization", "analytics", "performance optimization", "real-time systems", "software architecture", "data processing", "automation frameworks", "scripting", "system design", "database optimization", "api validation", "cloud", "automation", "infrastructure", "quality engineering", "api testing", "test frameworks", "quality_engineering", "debugging_problem_solving", "agile_collaboration", "team_leadership", "data_analytics", "machine_learning", "data_analytics", "data_visualization", "system_design", "performance_optimization", "game_development", "performance_optimization", "debugging_problem_solving", "system_reliability", "test_automation_engineering", "system_design", "devops_ci_cd", "infrastructure", "backend_api_engineering", "quality_engineering", "test_automation_engineering", "api_testing", "system_design", "backend_api_engineering", "backend_api_engineering", "database_optimization"
// ]


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
      "ui ux", "web apps", "fullstack", "system reliability",
    ]
    const aiAnswer = await generateFallbackAnswer(query, bestMatch.data);

    return Response.json({
      type: "ai",
      answer: aiAnswer,
      related: relatedSuggestions,
    })

  } catch (error) {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}