# Memory Cache

A lightweight TypeScript utility library for in-memory caching.

## Features

- Simple in-memory cache for storing key-value pairs.
- Support for setting, getting, and deleting cache entries.
- Optional expiration time for cache entries.

## Usage

```typescript
import { MemoryCache } from 'memory-cache';

// Create a new cache instance
const cache = new MemoryCache<string>();

// Set a key-value pair with an optional expiration time (in seconds)
cache.set('myKey', 'myValue', 60); // Entry will expire in 60 seconds

// Get a value from the cache
const cachedValue = cache.get('myKey');

if (cachedValue !== undefined) {
  console.log(`Cached Value: ${cachedValue}`);
} else {
  console.log('Value not found in cache or it has expired.');
}

// Delete a cache entry
cache.remove('myKey');
```

## Author

Erkki-Ilmari Rajakoski, 2023

## License

MIT License
