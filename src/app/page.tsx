"use client";

import { useState } from "react";
import ResponsePanel from "@/components/ResponsePanel";


export default function Home() {
  const [mode, setMode] = useState<"recruiter" | "engineer">("recruiter");
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [responseType, setResponseType] = useState<"knowledge" | "ai" | null>(null);
  const [related, setRelated] = useState<string[]>([]);

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);

    setResponseType(null);

    const res = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    if (data.type === "knowledge") {
      setResponseType("knowledge");
      setResult(data.result);
      setAiAnswer(null);
      setRelated(data.result.data.related || []);
    }
    else {
      setResponseType("ai");
      setAiAnswer(data.answer);
      setResult(null);
      setRelated(data.related || []);
    }

    setLoading(false);
  };

  const handleRelatedClick = async (query: string) => {
    setQuery(query);

    setLoading(true);

    setResponseType(null);

    const res = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    if (data.type === "knowledge") {
      setResponseType("knowledge");
      setResult(data.result);
      setAiAnswer(null);
      setRelated(data.result.data.related || []);
    }
    else {
      setResponseType("ai");
      setAiAnswer(data.answer);
      setResult(null);
      setRelated(data.related || []);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 px-4">

      <h1 className="text-3xl font-bold">Portfolio Engine</h1>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setMode("recruiter")}
          className={`px-4 py-2 rounded-md border text-sm cursor-pointer hover:text-white ${mode === "recruiter"
            ? "bg-black text-white"
            : "border-gray-300 text-gray-600"
            }`}
        >
          Recruiter
        </button>

        <button
          onClick={() => setMode("engineer")}
          className={`px-4 py-2 rounded-md border text-sm cursor-pointer hover:text-white ${mode === "engineer"
            ? "bg-black text-white"
            : "border-gray-300 text-gray-600"
            }`}
        >
          Engineer
        </button>
      </div>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder="Ask about me..."
        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
      />

      <button
        onClick={handleSearch}
        className="border px-6 py-1 rounded bg-white text-black cursor-pointer hover:bg-black hover:text-white transition"
      >
        Search
      </button>

      {loading && <p>Thinking...</p>}

      {responseType && (
        <ResponsePanel
          type={responseType}
          data={result?.data}
          aiAnswer={aiAnswer}
          related={related}
          mode={mode}
          onRelatedClick={handleRelatedClick}
        />
      )}

    </div>
  );
}