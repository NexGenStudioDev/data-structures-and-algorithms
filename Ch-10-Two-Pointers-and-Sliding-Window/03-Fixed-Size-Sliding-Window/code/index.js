function maxWindowSum(values, k) {
  if (!Number.isInteger(k) || k < 1 || k > values.length) throw new RangeError("k must be between 1 and the array length");
  let sum = 0;
  for (let i = 0; i < k; i++) sum += values[i];
  let best = sum;
  for (let right = k; right < values.length; right++) {
    sum += values[right] - values[right - k];
    best = Math.max(best, sum);
  }
  return best;
}
if (typeof module !== "undefined") module.exports = maxWindowSum;
if (typeof require !== "undefined" && require.main === module) console.log(maxWindowSum([2,1,5,1,3,2], 3)); // 9
