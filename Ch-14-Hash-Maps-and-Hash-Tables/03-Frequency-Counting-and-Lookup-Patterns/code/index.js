function frequencies(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return counts;
}
function twoSum(values, target) {
  const seen = new Map();
  for (let i = 0; i < values.length; i++) {
    const needed = target - values[i];
    if (seen.has(needed)) return [seen.get(needed), i];
    if (!seen.has(values[i])) seen.set(values[i], i);
  }
  return null;
}
if (typeof module !== "undefined") module.exports = { frequencies, twoSum };
if (typeof require !== "undefined" && require.main === module) { console.log([...frequencies([2,2,3])]); console.log(twoSum([2,7,11,15],9)); }
