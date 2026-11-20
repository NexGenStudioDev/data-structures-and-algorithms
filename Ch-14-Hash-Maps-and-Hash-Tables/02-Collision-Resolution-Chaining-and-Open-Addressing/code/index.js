function hashString(key, capacity) {
  let hash = 0;
  for (const char of key) hash = (Math.imul(hash, 31) + char.codePointAt(0)) >>> 0;
  return hash % capacity;
}
class ChainedHashMap {
  constructor(capacity = 8) { this.buckets = Array.from({ length: capacity }, () => []); }
  set(key, value) {
    if (typeof key !== "string") throw new TypeError("this teaching map uses string keys");
    const bucket = this.buckets[hashString(key, this.buckets.length)];
    const pair = bucket.find(entry => entry[0] === key);
    if (pair) pair[1] = value; else bucket.push([key, value]);
  }
  get(key) {
    const bucket = this.buckets[hashString(key, this.buckets.length)];
    const pair = bucket.find(entry => entry[0] === key);
    return pair ? pair[1] : undefined;
  }
}
if (typeof module !== "undefined") module.exports = ChainedHashMap;
if (typeof require !== "undefined" && require.main === module) { const map = new ChainedHashMap(2); map.set("a",1); map.set("c",3); console.log(map.buckets, map.get("c")); }
