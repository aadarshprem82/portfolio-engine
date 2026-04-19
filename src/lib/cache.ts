type CacheValue = {
    value: string;
    expiresAt: number;
    createdAt: number;
}

const CACHE_LIMIT = 200;

const cache = new Map<string, CacheValue>();

const inFlight = new Map<string, Promise<string>>();

const stats = {
    hits: 0,
    misses: 0,
    deduped: 0,
}

export function normalizeKey(query: string, context?: any) {
    return JSON.stringify({
        q: query.trim().toLowerCase(),
        c: context?.title || context?.data?.title || "none",
    });
}

export function getCache(key: string) {
    const item = cache.get(key);

    if (!item) {
        stats.misses++;
        return null;
    }

    if (Date.now() > item.expiresAt){
        cache.delete(key);
        stats.misses++;
        return null;
    }

    stats.hits++;
    return item.value;
}

export function setCache(key: string, value: string, ttlMs: number){
    if (cache.size >= CACHE_LIMIT){
        const oldestKey = cache.keys().next().value || "none";          // To Be Checked
        cache.delete(oldestKey);
    }

    cache.set(key, {
        value, createdAt: Date.now(), expiresAt: Date.now() + ttlMs,
    });
}

export function getInFlight(key: string){
    return inFlight.get(key);
}

export function setInFlight(key: string, promise: Promise<string>){
    inFlight.set(key, promise);
}

export function clearInFlight(key: string){
    inFlight.delete(key);
}

export function getStats() {
    return {
        ...stats,
        cacheSize: cache.size,
        inFlight: inFlight.size,
    };
}