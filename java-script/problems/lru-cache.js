// what is lru() cache?
// LRU cache is a cache that removes the least recently used items first.
// It has two operations:
// 1. get(key) - Get the value of the key if the key exists in the cache, otherwise return -1.
// 2. put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least recently used item before inserting a new item.
// Implement the LRU cache using the following operations:
// - LRU cache should be initialized with a positive capacity.
// - get(key) - Get the value of the key if the key exists in the cache, otherwise return -1.
// - put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least recently used item before inserting a new item.

const lruCache = (capacity) => {
  const cache = new Map();

  const put = (key, value) => {
    if (cache.size >= capacity) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }
    cache.set(key, value);
    console.log(cache, 'firstKey put');
  };

  const get = (key) => {
    if (cache.has(key)) {
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value);
      return value;
    }
    return -1;
  };

  return {
    put,
    get,
  };
};

// const cache = lruCache(2);
// cache.put(1, 1);
// cache.put(2, 2);
//
// // console.log(cache.get(2)); // 1
// cache.put(3, 3);

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.size >= this.capacity) {
    const firstKey = this.cache.keys().next().value;
    this.cache.delete(firstKey);
  }
  this.cache.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const obj = new LRUCache(2);
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1)); // 1
obj.put(3, 3);
console.log(2);
obj.put(4, 4);
console.log(obj.get(1)); // -1
console.log(obj.get(3)); // 3
console.log(obj.get(4)); // 4
