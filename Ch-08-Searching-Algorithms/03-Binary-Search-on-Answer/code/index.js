function minShipCapacity(weights, days) {
  if (!Array.isArray(weights) || weights.length === 0) throw new RangeError("weights must be non-empty");
  if (!Number.isInteger(days) || days < 1) throw new RangeError("days must be positive");
  if (weights.some(w => !Number.isSafeInteger(w) || w < 0)) throw new RangeError("weights must be non-negative safe integers");
  let low = weights.reduce((largest, weight) => Math.max(largest, weight), 0);
  let high = weights.reduce((sum, w) => sum + w, 0);
  while (low < high) {
    const capacity = low + Math.floor((high - low) / 2);
    let usedDays = 1;
    let load = 0;
    for (const weight of weights) {
      if (load + weight > capacity) { usedDays++; load = 0; }
      load += weight;
    }
    if (usedDays <= days) high = capacity;
    else low = capacity + 1;
  }
  return low;
}

if (typeof module !== "undefined") module.exports = minShipCapacity;
if (typeof require !== "undefined" && require.main === module) console.log(minShipCapacity([1,2,3,4,5,6,7,8,9,10], 5)); // 15
