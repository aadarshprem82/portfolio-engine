import { searchKnowledge } from "@/lib/search";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { query } = body;

    if (!query) {
      return Response.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }

    const result = searchKnowledge(query);
    // console.log(result);
    return Response.json({ result });
  } catch (error) {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}