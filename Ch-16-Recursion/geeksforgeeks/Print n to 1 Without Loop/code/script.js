/**
 * @param {number} n
 * @returns {void}
 */

class Solution {
    printNos(n) {
        // Base case: Stop when n <= 0
        if (n <= 0) return;

        // Print before recursive call (Tail Recursion / Winding phase)
        process.stdout.write(String(n) + " ");

        // Recursive call with smaller input
        this.printNos(n - 1);
    }
}

// Test cases
if (require.main === module) {
    const sol = new Solution();

    process.stdout.write("Test 1 (n = 5): ");
    sol.printNos(5);
    console.log();

    process.stdout.write("Test 2 (n = 10): ");
    sol.printNos(10);
    console.log();
}

module.exports = Solution;
