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
          className={`px-4 py-2 rounded-md border text-sm ${mode === "recruiter"
            ? "bg-black text-white"
            : "border-gray-300 text-gray-600"
            }`}
        >
          Recruiter
        </button>

        <button
          onClick={() => setMode("engineer")}
          className={`px-4 py-2 rounded-md border text-sm ${mode === "engineer"
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
        className="border px-6 py-1 rounded bg-white text-black hover:bg-black hover:text-white transition"
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