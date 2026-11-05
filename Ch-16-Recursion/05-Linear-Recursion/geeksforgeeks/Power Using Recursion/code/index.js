/**
 * GeeksforGeeks: Power Using Recursion
 * Problem Link: https://www.geeksforgeeks.org/problems/power-using-recursion/1
 *
 * @param {number} n - Base number
 * @param {number} p - Exponent
 * @return {number} n raised to the power p
 */

class Solution {
  recursivePower(n, p) {
    // Base Case: Any number to power 0 equals 1
    if (p === 0) {
      return 1;
    }

    // Recursive Case: n^p = n * n^(p - 1)
    return n * this.recursivePower(n, p - 1);
  }
}

// Example test calls:
const sol = new Solution();
console.log("recursivePower(9, 9):", sol.recursivePower(9, 9)); // 387420489
console.log("recursivePower(2, 9):", sol.recursivePower(2, 9)); // 512
console.log("recursivePower(5, 0):", sol.recursivePower(5, 0)); // 1
console.log("recursivePower(2, 3):", sol.recursivePower(2, 3)); // 8
