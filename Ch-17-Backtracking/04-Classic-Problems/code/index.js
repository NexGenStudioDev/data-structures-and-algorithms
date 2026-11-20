function solveNQueens(n) {
  const board = Array.from({ length: n }, () => Array(n).fill("."));
  const cols = new Set(), down = new Set(), up = new Set(), answers = [];
  function place(row) {
    if (row === n) { answers.push(board.map(line => line.join(""))); return; }
    for (let col = 0; col < n; col++) {
      const d = row - col, u = row + col;
      if (cols.has(col) || down.has(d) || up.has(u)) continue;
      board[row][col] = "Q"; cols.add(col); down.add(d); up.add(u);
      place(row + 1);
      board[row][col] = "."; cols.delete(col); down.delete(d); up.delete(u);
    }
  }
  if (n > 0) place(0);
  return answers;
}
if (typeof module !== "undefined") module.exports = solveNQueens;
if (typeof require !== "undefined" && require.main === module) console.log(solveNQueens(4).length); // 2
