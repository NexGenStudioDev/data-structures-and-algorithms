function hollowSquare(n) {
  if (!Number.isInteger(n) || n < 1) throw new RangeError("n must be a positive integer");
  const rows = [];
  for (let row = 0; row < n; row++) {
    let line = "";
    for (let col = 0; col < n; col++) {
      line += row === 0 || row === n - 1 || col === 0 || col === n - 1 ? "*" : " ";
    }
    rows.push(line);
  }
  return rows.join("\n");
}

if (typeof module !== "undefined") module.exports = hollowSquare;
if (typeof require !== "undefined" && require.main === module) console.log(hollowSquare(4));
