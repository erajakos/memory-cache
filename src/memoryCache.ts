type CacheEntry<T> = {
    value: T;
    expiration: number; // Expiration timestamp (in milliseconds)
  };
  
  export class MemoryCache<T> {
    private cache: Map<string, CacheEntry<T>> = new Map();
  
    // Add an item to the cache with an optional expiration time (in seconds).
    public set(key: string, value: T, expirationSeconds?: number): void {
      const expiration = expirationSeconds
        ? Date.now() + expirationSeconds * 1000
        : Infinity;
  
      this.cache.set(key, { value, expiration });
    }
  
    public get(key: string): T | undefined {
      const entry = this.cache.get(key);
      if (entry && Date.now() < entry.expiration) {
        return entry.value;
      } else {
        this.cache.delete(key); // Remove the entry if it has expired
        return undefined;
      }
    }
  
    public remove(key: string): void {
      this.cache.delete(key);
    }
  
    public clear(): void {
      this.cache.clear();
    }
  
    public size(): number {
      return this.cache.size;
    }
  }
  