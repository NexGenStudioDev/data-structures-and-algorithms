class Solution {
    /**
     * Prints numbers from 1 to n in ascending order without using loops.
     * Approach: Head Recursion (unwinding print)
     * @param {number} n
     */
    printTillN(n) {
        // Base case: Stop when n <= 0
        if (n <= 0) return;

        // Recursive call first: reach the smallest subproblem (Head Recursion)
        this.printTillN(n - 1);

        // Print on unwinding: prints 1, 2, ..., n in ascending order
        process.stdout.write(String(n) + " ");
    }
}

// Test calls
const sol = new Solution();
process.stdout.write("Test 1 (n = 5): ");
sol.printTillN(5);
console.log();

process.stdout.write("Test 2 (n = 10): ");
sol.printTillN(10);
console.log();

