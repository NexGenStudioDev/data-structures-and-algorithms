function insertionSort(values) {
  const result = [...values];
  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let j = i - 1;
    while (j >= 0 && result[j] > current) { result[j + 1] = result[j]; j--; }
    result[j + 1] = current;
  }
  return result;
}
if (typeof module !== "undefined") module.exports = insertionSort;
if (typeof require !== "undefined" && require.main === module) console.log(insertionSort([5,1,4,2]));
