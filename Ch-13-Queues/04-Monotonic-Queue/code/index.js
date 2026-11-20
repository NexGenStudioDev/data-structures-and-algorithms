function slidingWindowMaximum(values, k) {
  if (!Number.isInteger(k) || k < 1 || k > values.length) throw new RangeError("k must be between 1 and input length");
  const deque = []; let head = 0; const answer = [];
  for (let i = 0; i < values.length; i++) {
    while (head < deque.length && deque[head] <= i - k) head++;
    while (deque.length > head && values[deque[deque.length - 1]] <= values[i]) deque.pop();
    deque.push(i);
    if (i >= k - 1) answer.push(values[deque[head]]);
    // Compact consumed indexes occasionally to keep the backing array proportional to live items.
    if (head > 64 && head * 2 > deque.length) { deque.splice(0, head); head = 0; }
  }
  return answer;
}
if (typeof module !== "undefined") module.exports = slidingWindowMaximum;
if (typeof require !== "undefined" && require.main === module) console.log(slidingWindowMaximum([1,3,-1,-3,5,3,6,7], 3));
