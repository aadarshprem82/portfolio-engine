type Props = {
  data: any;
  mode: "recruiter" | "engineer";
  onRelatedClick: (query: string) => void;
};

export default function ResponsePanel({ data, mode, onRelatedClick }: Props) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 space-y-6">

      {/* 🧠 Title */}
      <h2 className="text-2xl font-bold">{data.title}</h2>

      {/* 💼 Experience */}
      <div>
        <p className="font-semibold mb-2">What I’ve done:</p>
        <ul className="list-disc ml-5 space-y-1">
          {data.experiences
            .slice(0, mode === "recruiter" ? 2 : data.experiences.length)
            .map((e: string, i: number) => (
              <li key={i}>{e}</li>
            ))}
        </ul>
      </div>

      {/* 🚀 Projects */}
      {data.projects?.length > 0 && (
        <div>
          <p className="font-semibold mb-2">Key Projects:</p>
          <ul className="space-y-2">
            {data.projects.map((p: any, i: number) => (
              <li key={i}>
                <strong>{p.name}</strong> → {p.impact}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 🧠 Thought Process */}
      <div>
        <p className="font-semibold mb-2">How I think:</p>
        <p>{data.thoughts}</p>
      </div>

      {/* 📊 Confidence */}
      <div>
        <p className="font-semibold">Confidence:</p>
        <p>
          {data.confidence.level.toUpperCase()} — {data.confidence.reason}
        </p>
      </div>

      {/* 🔁 Related Queries */}
      {data.related?.length > 0 && (
        <div>
          <p className="font-semibold mb-2">Explore more:</p>
          <div className="flex flex-wrap gap-2">
            {data.related.map((item: string, i: number) => (
              <button
                key={i}
                onClick={() => onRelatedClick(item)}
                className="px-3 py-1 border rounded-md hover:text-gray-600"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}