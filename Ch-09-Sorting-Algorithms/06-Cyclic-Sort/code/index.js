function cyclicSortOneToN(values) {
  const result = [...values];
  let i = 0;
  while (i < result.length) {
    const value = result[i];
    if (!Number.isInteger(value) || value < 1 || value > result.length) throw new RangeError("values must be in 1..n");
    const correct = value - 1;
    if (result[i] === result[correct]) i++; // Handles duplicate inputs without looping forever.
    else [result[i], result[correct]] = [result[correct], result[i]];
  }
  return result;
}
if (typeof module !== "undefined") module.exports = cyclicSortOneToN;
if (typeof require !== "undefined" && require.main === module) console.log(cyclicSortOneToN([3,1,4,2]));
