function pairWithSum(sortedValues, target) {
  let left = 0;
  let right = sortedValues.length - 1;
  while (left < right) {
    const sum = sortedValues[left] + sortedValues[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return null;
}

function removeDuplicates(sortedValues) {
  if (sortedValues.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < sortedValues.length; read++) {
    if (sortedValues[read] !== sortedValues[write - 1]) sortedValues[write++] = sortedValues[read];
  }
  return write;
}

if (typeof module !== "undefined") module.exports = { pairWithSum, removeDuplicates };
if (typeof require !== "undefined" && require.main === module) {
  console.log(pairWithSum([1, 2, 4, 7, 9], 11)); // [1, 4]
  const values = [1, 1, 2, 2, 3];
  const length = removeDuplicates(values);
  console.log(values.slice(0, length)); // [1, 2, 3]
}
