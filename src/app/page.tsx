"use client";

import { useState } from "react";
import ResponsePanel from "@/components/ResponsePanel";


export default function Home() {
  const [mode, setMode] = useState<"recruiter" | "engineer">("recruiter");
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);

    const res = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    setResult(data.result);

    setLoading(false);
  };

  const handleRelatedClick = async (query: string) => {
    setQuery(query);

    setLoading(true);

    const res = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    setResult(data.result);

    setLoading(false);
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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder="Ask about me..."
        className="w-full max-w-xl p-4 text-white rounded border"
      />

      <button
        onClick={handleSearch}
        className="border px-6 py-1 bg-white text-black rounded"
      >
        Search
      </button>

      {loading && <p>Thinking...</p>}

      {result && result.data ? (
        <ResponsePanel
          data={result.data}
          mode={mode}
          onRelatedClick={handleRelatedClick}
        />
      ) : result && (
        <p>No relevant results found. Try another query.</p>
      )}

    </div>
  );
}