/**
 * LeetCode 69: Sqrt(x)
 * Problem Link: https://leetcode.com/problems/sqrtx/
 *
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
 * The returned integer should be non-negative as well.
 * You must not use any built-in exponent function or operator.
 *
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sq = mid * mid;

    if (sq === x) {
      return mid;
    } else if (sq > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
};

// Example test cases:
console.log("mySqrt(4):", mySqrt(4)); // Expected: 2
console.log("mySqrt(8):", mySqrt(8)); // Expected: 2
console.log("mySqrt(0):", mySqrt(0)); // Expected: 0
console.log("mySqrt(1):", mySqrt(1)); // Expected: 1
console.log("mySqrt(16):", mySqrt(16)); // Expected: 4
console.log("mySqrt(25):", mySqrt(25)); // Expected: 5

