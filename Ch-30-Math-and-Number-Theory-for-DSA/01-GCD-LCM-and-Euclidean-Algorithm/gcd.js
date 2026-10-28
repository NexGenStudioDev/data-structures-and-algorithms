// Euclidean Algorithm for Greatest Common Divisor & LCM

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

function lcm(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs((a * b) / gcd(a, b));
}

// Example usage
console.log("GCD(48, 18):", gcd(48, 18)); // Output: 6
console.log("LCM(48, 18):", lcm(48, 18)); // Output: 144
