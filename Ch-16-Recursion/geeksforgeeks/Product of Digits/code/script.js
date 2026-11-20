function productOfDigits(n) {
  if (!Number.isSafeInteger(n) || n < 0) {
    throw new RangeError("n must be a non-negative safe integer");
  }
  if (n < 10) return n;
  return (n % 10) * productOfDigits(Math.floor(n / 10));
}

if (typeof module !== "undefined") module.exports = productOfDigits;
if (typeof require !== "undefined" && require.main === module) {
  console.log(productOfDigits(1234)); // 24
  console.log(productOfDigits(205));  // 0
}
