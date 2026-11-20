function buildPrefix(values) {
  const prefix = new Array(values.length + 1).fill(0);
  for (let i = 0; i < values.length; i++) prefix[i + 1] = prefix[i] + values[i];
  return prefix;
}

function rangeSum(prefix, left, right) {
  if (!Number.isInteger(left) || !Number.isInteger(right) || left < 0 || right < left || right + 1 >= prefix.length) {
    throw new RangeError("expected a valid inclusive range");
  }
  return prefix[right + 1] - prefix[left];
}

function applyRangeAdds(length, updates) {
  const diff = new Array(length + 1).fill(0);
  for (const [left, right, value] of updates) {
    if (left < 0 || right < left || right >= length) throw new RangeError("invalid update range");
    diff[left] += value;
    diff[right + 1] -= value;
  }
  const result = new Array(length);
  let running = 0;
  for (let i = 0; i < length; i++) result[i] = running += diff[i];
  return result;
}

if (typeof module !== "undefined") module.exports = { buildPrefix, rangeSum, applyRangeAdds };
if (typeof require !== "undefined" && require.main === module) {
  const prefix = buildPrefix([2, 4, 1, 7]);
  console.log(rangeSum(prefix, 1, 3)); // 12
  console.log(applyRangeAdds(5, [[1, 3, 2], [2, 4, 1]])); // [0, 2, 3, 3, 1]
}
