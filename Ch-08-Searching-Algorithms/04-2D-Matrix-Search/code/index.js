function containsInSortedMatrix(matrix, target) {
  const rows = matrix.length;
  if (rows === 0 || matrix[0].length === 0) return false;
  const cols = matrix[0].length;
  if (matrix.some(row => row.length !== cols)) throw new TypeError("matrix rows must have equal length");
  let row = 0;
  let col = cols - 1;
  while (row < rows && col >= 0) {
    const value = matrix[row][col];
    if (value === target) return true;
    if (value > target) col--;
    else row++;
  }
  return false;
}

if (typeof module !== "undefined") module.exports = containsInSortedMatrix;
if (typeof require !== "undefined" && require.main === module) {
  console.log(containsInSortedMatrix([[1,4,7],[2,5,8],[3,6,9]], 6)); // true
  console.log(containsInSortedMatrix([], 6)); // false
}
