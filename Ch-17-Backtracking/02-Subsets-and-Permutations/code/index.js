function permutations(values) {
  const result = [], path = [], used = new Array(values.length).fill(false);
  function search() {
    if (path.length === values.length) { result.push([...path]); return; }
    for (let i = 0; i < values.length; i++) {
      if (used[i]) continue;
      used[i] = true; path.push(values[i]);
      search();
      path.pop(); used[i] = false;
    }
  }
  search();
  return result;
}
if (typeof module !== "undefined") module.exports = permutations;
if (typeof require !== "undefined" && require.main === module) console.log(permutations([1,2,3]).length); // 6
