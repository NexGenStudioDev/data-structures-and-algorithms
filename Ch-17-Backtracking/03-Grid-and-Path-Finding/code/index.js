function countRightDownPaths(rows, cols, blocked = new Set()) {
  if (rows <= 0 || cols <= 0) return 0;
  function search(row, col) {
    if (row >= rows || col >= cols || blocked.has(`${row},${col}`)) return 0;
    if (row === rows - 1 && col === cols - 1) return 1;
    return search(row + 1, col) + search(row, col + 1);
  }
  return search(0, 0);
}
if (typeof module !== "undefined") module.exports = countRightDownPaths;
if (typeof require !== "undefined" && require.main === module) console.log(countRightDownPaths(3, 3)); // 6
