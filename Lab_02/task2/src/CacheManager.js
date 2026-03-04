class CacheManager {
    static #instance = null;

    #cache;
    #maxSize;

    constructor(maxSize = 100) {
        if (CacheManager.#instance) {
            throw new Error('CacheManager instance already exists. Use CacheManager.getInstance() to access it.');
        }
        if (!Number.isInteger(maxSize) || maxSize <= 0) {
            throw new Error('maxSize must be a positive integer');
        }
        this.#cache = new Map();
        this.#maxSize = maxSize;
    }

    static getInstance(maxSize = 100) {
        if (!CacheManager.#instance) {
            CacheManager.#instance = new CacheManager(maxSize);
        }
        return CacheManager.#instance;
    }

    get(key) {
        this.#validateKey(key);
        return this.#cache.has(key) ? this.#cache.get(key) : null;
    }

    set(key, value) {
        this.#validateKey(key);

        if (!this.#cache.has(key) && this.#cache.size >= this.#maxSize) {
            const firstKey = this.#cache.keys().next().value;
            this.#cache.delete(firstKey);
        }
        this.#cache.set(key, value);
    }

    size() {
        return this.#cache.size;
    }

    _keys() {
        return Array.from(this.#cache.keys());
    }

    #validateKey(key) {
        if (typeof key !== 'string' || key.trim() === '') {
            throw new Error('Key must be a non-empty string');
        }
    }

    static _resetForTest() {
        CacheManager.#instance = null;
    }
}

module.exports = { CacheManager };   
