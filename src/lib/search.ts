import { knowledge } from "./knowledge";

export function searchKnowledge(query: string) {
    const normalizedQuery = query.toLowerCase();

    let bestMatch = null;
    let maxMatches = 0;

    for (const item of knowledge) {
        let matchCount = 0;

        for (const keyword of item.keywords) {
            if (normalizedQuery.includes(keyword.toLowerCase())) {
                matchCount++;
            }
        }

        if (matchCount > maxMatches) {
            maxMatches = matchCount;
            bestMatch = item;
        }
    }

    if (!bestMatch) {
        return {
            id: "no_result",
            data: {
                title: "No direct match found",
                experiences: [],
                projects: [],
                thoughts: "Try asking about backend, frontend, or system design.",
                confidence: {
                    level: "low",
                    reason: "Query did not match any known domain"
                },
                related: []
            }
        };
    }

    return bestMatch;
}