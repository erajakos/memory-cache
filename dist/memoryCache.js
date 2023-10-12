"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryCache = void 0;
class MemoryCache {
    constructor() {
        this.cache = new Map();
    }
    // Add an item to the cache with an optional expiration time (in seconds).
    set(key, value, expirationSeconds) {
        const expiration = expirationSeconds
            ? Date.now() + expirationSeconds * 1000
            : Infinity;
        this.cache.set(key, { value, expiration });
    }
    get(key) {
        const entry = this.cache.get(key);
        if (entry && Date.now() < entry.expiration) {
            return entry.value;
        }
        else {
            this.cache.delete(key); // Remove the entry if it has expired
            return undefined;
        }
    }
    remove(key) {
        this.cache.delete(key);
    }
    clear() {
        this.cache.clear();
    }
    size() {
        return this.cache.size;
    }
}
exports.MemoryCache = MemoryCache;
