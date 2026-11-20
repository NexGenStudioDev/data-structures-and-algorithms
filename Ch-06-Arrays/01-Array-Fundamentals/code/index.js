function sum(values) {
  let total = 0;
  for (const value of values) total += value;
  return total;
}

function findFirst(values, target) {
  for (let index = 0; index < values.length; index++) {
    if (values[index] === target) return index;
  }
  return -1;
}

if (typeof module !== "undefined") module.exports = { sum, findFirst };
if (typeof require !== "undefined" && require.main === module) {
  console.log(sum([7, 4, 9])); // 20
  console.log(findFirst([7, 4, 9], 4)); // 1
  console.log(findFirst([], 4)); // -1
}
