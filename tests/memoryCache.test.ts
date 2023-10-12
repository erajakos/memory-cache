import { MemoryCache } from '../src/memoryCache';

describe('MemoryCache', () => {
  let cache: MemoryCache<string>;

  beforeEach(() => {
    cache = new MemoryCache();
  });

  afterEach(() => {
    cache.clear();
  });

  it('should set and get an item from the cache', () => {
    cache.set('key1', 'value1');
    const result = cache.get('key1');
    expect(result).toBe('value1');
  });

  it('should return undefined for a missing item', () => {
    const result = cache.get('missingKey');
    expect(result).toBeUndefined();
  });

  it('should return undefined for an expired item', () => {
    cache.set('key2', 'value2', 1); // 1 second expiration
    jest.useFakeTimers();
    jest.advanceTimersByTime(2000);
    const result = cache.get('key2');
    expect(result).toBeUndefined();
  });

  it('should remove an item from the cache', () => {
    cache.set('key3', 'value3');
    cache.remove('key3');
    const result = cache.get('key3');
    expect(result).toBeUndefined();
  });

  it('should clear the entire cache', () => {
    cache.set('key4', 'value4');
    cache.set('key5', 'value5');
    cache.clear();
    const result1 = cache.get('key4');
    const result2 = cache.get('key5');
    expect(result1).toBeUndefined();
    expect(result2).toBeUndefined();
  });

  it('should return the correct cache size', () => {
    cache.set('key6', 'value6');
    cache.set('key7', 'value7');
    expect(cache.size()).toBe(2);
    cache.remove('key6');
    expect(cache.size()).toBe(1);
    cache.clear();
    expect(cache.size()).toBe(0);
  });
});
