"use client";

import { useState } from "react";

export default function Home() {
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

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 px-4">
      
      <h1 className="text-3xl font-bold">Portfolio Engine</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask about me..."
        className="w-full max-w-xl p-4 text-white rounded"
      />

      <button
        onClick={handleSearch}
        className="border px-6 py-1 bg-white text-black rounded"
      >
        Search
      </button>

      {result && (
        <div className="mt-10 w-full max-w-xl text-left border p-6 rounded text-white">
          
          <h2 className="text-xl font-bold mb-2">
            {result.data.title}
          </h2>

          <p className="font-semibold">Experiences:</p>
          <ul className="list-disc ml-5 mb-4">
            {result.data.experiences.map((e: string, i: number) => (
              <li key={i}>{e}</li>
            ))}
          </ul>

          <p className="font-semibold">Thought Process:</p>
          <p className="mb-4">{result.data.thoughts}</p>

          <p>
            <strong>Confidence:</strong> {result.data.confidence.level}
          </p>

        </div>
      )}

    </div>
  );
}