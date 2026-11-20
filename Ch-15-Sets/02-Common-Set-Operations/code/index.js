function setOperations(a, b) {
  return {
    union: new Set([...a, ...b]),
    intersection: new Set([...a].filter(value => b.has(value))),
    difference: new Set([...a].filter(value => !b.has(value))),
    symmetricDifference: new Set([...a].filter(value => !b.has(value)).concat([...b].filter(value => !a.has(value))))
  };
}
if (typeof module !== "undefined") module.exports = setOperations;
if (typeof require !== "undefined" && require.main === module) console.log([...setOperations(new Set([1,2,3]), new Set([3,4])).intersection]);
