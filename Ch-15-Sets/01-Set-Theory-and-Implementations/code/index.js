function uniqueValues(values) { return [...new Set(values)]; }
function containsAll(setA, setB) { for (const value of setB) if (!setA.has(value)) return false; return true; }
if (typeof module !== "undefined") module.exports = { uniqueValues, containsAll };
if (typeof require !== "undefined" && require.main === module) { console.log(uniqueValues([2,1,2,3])); console.log(containsAll(new Set([1,2,3]), new Set([2,3]))); }
