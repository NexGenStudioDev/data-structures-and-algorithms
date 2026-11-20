function bubbleSort(values) {
  const result = [...values];
  for (let end = result.length - 1; end > 0; end--) {
    let swapped = false;
    for (let i = 0; i < end; i++) {
      if (result[i] > result[i + 1]) {
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return result;
}
if (typeof module !== "undefined") module.exports = bubbleSort;
if (typeof require !== "undefined" && require.main === module) console.log(bubbleSort([5,1,4,2])); // [1,2,4,5]
