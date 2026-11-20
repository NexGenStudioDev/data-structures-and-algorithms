// Return the first n Fibonacci numbers using recursion.
function firstNFibonacci(n) {
  if (!Number.isSafeInteger(n) || n < 0) {
    throw new RangeError("n must be a non-negative safe integer");
  }

  function build(remaining, current, next, result) {
    if (remaining === 0) return result;
    result.push(current);
    return build(remaining - 1, next, current + next, result);
  }

  return build(n, 0, 1, []);
}

if (typeof module !== "undefined") module.exports = firstNFibonacci;
if (typeof require !== "undefined" && require.main === module) {
  console.log(firstNFibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
}
