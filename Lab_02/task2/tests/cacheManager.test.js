const { CacheManager } = require('../src/CacheManager');

describe("CacheManager Singleton", () => {
    beforeEach(() => {
        CacheManager._resetForTest();
    });

    test("returns same instance (singleton)", () => {
        const a = CacheManager.getInstance(2);
        const b = CacheManager.getInstance(999);
        expect(a).toBe(b);
    });

    test("set/get works", () => {
        const cache = CacheManager.getInstance(2);
        cache.set("x", 123);
        expect(cache.get("x")).toBe(123);
        expect(cache.get("missing")).toBeNull();
    });

    test("throws on invalid keys", () => {
        const cache = CacheManager.getInstance(2);
        expect(() => cache.set("", 1)).toThrow();
        expect(() => cache.set("   ")).toThrow();
    });

    test("FIFO eviction when max size reached", () => {
        const cache = CacheManager.getInstance(2);
        cache.set("a", 1);
        cache.set("b", 2);
        cache.set("c", 3);
        expect(cache.get("a")).toBeNull();
        expect(cache.get("b")).toBe(2);
        expect(cache.get("c")).toBe(3);
    });
    
    test("updating existing key does not evict", () => {
        const cache = CacheManager.getInstance(2);
        cache.set("a", 1);
        cache.set("b", 2);
        cache.set("a", 999);

        expect(cache.size()).toBe(2);
        expect(cache.get("a")).toBe(999);
        expect(cache.get("b")).toBe(2);
    });
});
    