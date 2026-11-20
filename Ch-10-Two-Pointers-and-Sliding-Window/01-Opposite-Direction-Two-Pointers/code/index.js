function pairSumSorted(values, target) {
  let left = 0, right = values.length - 1;
  while (left < right) {
    const sum = values[left] + values[right];
    if (sum === target) return [left, right];
    if (sum < target) left++; else right--;
  }
  return null;
}
if (typeof module !== "undefined") module.exports = pairSumSorted;
if (typeof require !== "undefined" && require.main === module) console.log(pairSumSorted([1,2,4,7,9], 11));
