type Props = {
  type: "knowledge" | "ai";
  data?: any;
  aiAnswer?: any;
  related?: string[];
  mode: "recruiter" | "engineer";
  onRelatedClick: (query: string) => void;
};

export default function ResponsePanel({ type, data, aiAnswer, related, mode, onRelatedClick }: Props) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 space-y-6">

      {type === "knowledge" && data && (
        <>
          <h2 className="text-2xl font-bold">{data.title}</h2>

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

          <div>
            <p className="font-semibold mb-2">How I think:</p>
            <p>{data.thoughts}</p>
          </div>

          <div>
            <p className="font-semibold">Confidence:</p>
            <p>
              {data.confidence.level.toUpperCase()} — {data.confidence.reason}
            </p>
          </div>
          {data.related?.length > 0 && (<div>
            <p className="font-semibold mb-2">Explore more:</p>
            <div className="flex flex-wrap gap-2">
              {data.related.map((item: string, i: number) => (
                <button
                  key={i}
                  onClick={() => onRelatedClick(item)}
                  className="px-3 py-1 border rounded-md hover:text-gray-600 cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>)}
        </>
      )}
      
      {type === "ai" && aiAnswer && related && (
        <>
          <h2 className="italic">AI Response:</h2>
          <h2 className="text-2xl font-bold">{aiAnswer.data.title}</h2>

          <div>
            <p className="font-semibold mb-2">What I’ve done:</p>
            <ul className="list-disc ml-5 space-y-1">
              {aiAnswer.data.experiences
                .slice(0, mode === "recruiter" ? 2 : aiAnswer.data.experiences.length)
                .map((e: string, i: number) => (
                  <li key={i}>{e}</li>
                ))}
            </ul>
          </div>

          {aiAnswer.data.projects?.length > 0 && (
            <div>
              <p className="font-semibold mb-2">Key Projects:</p>
              <ul className="space-y-2">
                {aiAnswer.data.projects.map((p: any, i: number) => (
                  <li key={i}>
                    <strong>{p.name}</strong> → {p.impact}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="font-semibold mb-2">How I think:</p>
            <p>{aiAnswer.data.thoughts}</p>
          </div>

          <div>
            <p className="font-semibold">Confidence:</p>
            <p>
              {aiAnswer.data.confidence.level.toUpperCase()} — {aiAnswer.data.confidence.reason}
            </p>
          </div>

          <div>
            <p className="font-semibold mb-2">Explore more:</p>
            <div className="flex flex-wrap gap-2">
              {related.map((item: string, i: number) => (
                <button
                  key={i}
                  onClick={() => onRelatedClick(item)}
                  className="px-3 py-1 border rounded-md hover:text-gray-600 cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  );
}