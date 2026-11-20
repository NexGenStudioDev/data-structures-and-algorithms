function stringHash(key, bucketCount) {
  if (typeof key !== "string" || !Number.isInteger(bucketCount) || bucketCount < 1) throw new TypeError("expected a string key and positive bucket count");
  let hash = 0;
  for (const char of key) hash = (Math.imul(hash, 31) + char.codePointAt(0)) >>> 0;
  return hash % bucketCount;
}
if (typeof module !== "undefined") module.exports = stringHash;
if (typeof require !== "undefined" && require.main === module) console.log(stringHash("cat", 8));
