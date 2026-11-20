function countingSort(values) {
  if (values.some(value => !Number.isInteger(value) || value < 0)) throw new RangeError("values must be non-negative integers");
  if (values.length === 0) return [];
  const max = values.reduce((largest, value) => Math.max(largest, value), 0);
  const counts = new Array(max + 1).fill(0);
  for (const value of values) counts[value]++;
  const result = [];
  for (let value = 0; value < counts.length; value++) for (let count = counts[value]; count > 0; count--) result.push(value);
  return result;
}
if (typeof module !== "undefined") module.exports = countingSort;
if (typeof require !== "undefined" && require.main === module) console.log(countingSort([4,2,2,0,3]));
