function minLengthAtLeastTarget(values, target) {
  if (values.some(value => value < 0)) throw new RangeError("this sliding-window method requires non-negative values");
  let left = 0, sum = 0, best = Infinity;
  for (let right = 0; right < values.length; right++) {
    sum += values[right];
    while (sum >= target) {
      best = Math.min(best, right - left + 1);
      sum -= values[left++];
    }
  }
  return best === Infinity ? 0 : best;
}
if (typeof module !== "undefined") module.exports = minLengthAtLeastTarget;
if (typeof require !== "undefined" && require.main === module) console.log(minLengthAtLeastTarget([2,3,1,2,4,3], 7)); // 2
