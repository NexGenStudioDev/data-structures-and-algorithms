// Factorial of a non-negative integer using recursion.
function checkInput(n) {
    if (!Number.isSafeInteger(n) || n < 0 || n > 18) {
        throw new RangeError("n must be an integer from 0 to 18 for exact Number results");
    }
}

function factorial(n) {
    checkInput(n);
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Tail-recursive form still uses stack space unless the runtime optimizes it.
function factorialTailRecursive(n, accumulator = 1) {
    checkInput(n);
    if (!Number.isSafeInteger(accumulator)) {
        throw new RangeError("accumulator must be a safe integer");
    }
    if (n <= 1) return accumulator;
    return factorialTailRecursive(n - 1, n * accumulator);
}

if (typeof module !== "undefined") module.exports = { factorial, factorialTailRecursive };
if (typeof require !== "undefined" && require.main === module) {
    console.log("5! =", factorial(5)); // 120
    console.log("0! =", factorial(0)); // 1
    console.log("5! (tail-recursive form) =", factorialTailRecursive(5)); // 120
}
