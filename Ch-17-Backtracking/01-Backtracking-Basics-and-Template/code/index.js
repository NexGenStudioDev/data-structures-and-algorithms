function subsets(values) {
  const result = [];
  const path = [];
  function search(start) {
    result.push([...path]);
    for (let i = start; i < values.length; i++) {
      path.push(values[i]);
      search(i + 1);
      path.pop(); // undo the choice before exploring the next one
    }
  }
  search(0);
  return result;
}
if (typeof module !== "undefined") module.exports = subsets;
if (typeof require !== "undefined" && require.main === module) console.log(subsets([1,2]));
