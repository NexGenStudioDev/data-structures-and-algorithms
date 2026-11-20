function linearSearch(values, target) {
  for (let index = 0; index < values.length; index++) {
    if (values[index] === target) return index;
  }
  return -1;
}

if (typeof module !== "undefined") module.exports = linearSearch;
if (typeof require !== "undefined" && require.main === module) {
  console.log(linearSearch([8, 3, 6], 3)); // 1
  console.log(linearSearch([8, 3, 6], 5)); // -1
}
