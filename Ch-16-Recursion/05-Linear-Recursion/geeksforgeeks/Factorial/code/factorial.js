// Factorial of a Number using Linear Recursion

function factorial(n) {
    if (n < 0) throw new Error("Factorial is not defined for negative numbers");
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Tail-recursive optimized version (O(1) auxiliary space if engine supports TCO)
function factorialTailRecursive(n, accumulator = 1) {
    if (n <= 1) return accumulator;
    return factorialTailRecursive(n - 1, n * accumulator);
}

// Test cases
console.log("5! =", factorial(5)); // 120
console.log("4! =", factorial(4)); // 24
console.log("0! =", factorial(0)); // 1
console.log("5! (Tail Recursive) =", factorialTailRecursive(5)); // 120

