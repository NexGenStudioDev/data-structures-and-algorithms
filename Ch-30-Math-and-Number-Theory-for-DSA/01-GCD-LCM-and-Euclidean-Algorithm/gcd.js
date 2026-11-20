// Euclidean Algorithm for safe JavaScript integers.
function assertSafeInteger(value, name) {
    if (!Number.isSafeInteger(value)) {
        throw new RangeError(`${name} must be a safe integer; use BigInt for larger values`);
    }
}

function gcd(a, b) {
    assertSafeInteger(a, "a");
    assertSafeInteger(b, "b");
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) [a, b] = [b, a % b];
    return a;
}

function lcm(a, b) {
    assertSafeInteger(a, "a");
    assertSafeInteger(b, "b");
    if (a === 0 || b === 0) return 0;
    const result = Math.abs((a / gcd(a, b)) * b);
    if (!Number.isSafeInteger(result)) {
        throw new RangeError("LCM exceeds the safe integer range; use BigInt");
    }
    return result;
}

if (typeof module !== "undefined") module.exports = { gcd, lcm };
if (typeof require !== "undefined" && require.main === module) {
    console.log("GCD(48, 18):", gcd(48, 18)); // 6
    console.log("LCM(48, 18):", lcm(48, 18)); // 144
}
