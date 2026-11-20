function selectionSort(values) {
  const result = [...values];
  for (let start = 0; start < result.length - 1; start++) {
    let minIndex = start;
    for (let i = start + 1; i < result.length; i++) if (result[i] < result[minIndex]) minIndex = i;
    if (minIndex !== start) [result[start], result[minIndex]] = [result[minIndex], result[start]];
  }
  return result;
}
if (typeof module !== "undefined") module.exports = selectionSort;
if (typeof require !== "undefined" && require.main === module) console.log(selectionSort([5,1,4,2]));
