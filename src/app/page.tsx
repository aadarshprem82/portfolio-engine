"use client";

import { useState } from "react";
import ResponsePanel from "@/components/ResponsePanel";


export default function Home() {
  const [mode, setMode] = useState<"recruiter" | "engineer">("recruiter");
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleSearch = async () => {
    if (!query) return;

    const res = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  const handleRelatedClick = async (query: string) => {
    setQuery(query);

    const res = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 px-4">

      <h1 className="text-3xl font-bold">Portfolio Engine</h1>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setMode("recruiter")}
          className={`px-4 py-2 border rounded ${mode === "recruiter" ? "bg-white text-black" : ""
            }`}
        >
          Recruiter
        </button>

        <button
          onClick={() => setMode("engineer")}
          className={`px-4 py-2 border rounded ${mode === "engineer" ? "bg-white text-black" : ""
            }`}
        >
          Engineer
        </button>
      </div>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask about me..."
        className="w-full max-w-xl p-4 text-white rounded border"
      />

      <button
        onClick={handleSearch}
        className="border px-6 py-1 bg-white text-black rounded"
      >
        Search
      </button>

      {result && (
        <ResponsePanel
          data={result.data}
          mode={mode}
          onRelatedClick={handleRelatedClick}
        />
      )}

    </div>
  );
}