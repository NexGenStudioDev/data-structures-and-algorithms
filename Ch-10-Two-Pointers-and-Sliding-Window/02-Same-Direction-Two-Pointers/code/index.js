function compactNonZero(values) {
  let write = 0;
  for (let read = 0; read < values.length; read++) {
    if (values[read] !== 0) values[write++] = values[read];
  }
  while (write < values.length) values[write++] = 0;
  return values;
}
if (typeof module !== "undefined") module.exports = compactNonZero;
if (typeof require !== "undefined" && require.main === module) console.log(compactNonZero([0,1,0,3,12]));
