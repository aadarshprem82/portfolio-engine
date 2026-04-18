import { knowledge } from "./knowledge";

export function searchKnowledge(query: string) {
    const normalizedQuery = query.toLowerCase();

    let bestMatch = knowledge[0];
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

    return { bestMatch, score: maxMatches };
}