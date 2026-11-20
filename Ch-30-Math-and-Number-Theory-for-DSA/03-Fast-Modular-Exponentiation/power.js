// Fast modular exponentiation with BigInt to avoid Number precision loss.
function modularPow(base, exp, mod) {
    let b = BigInt(base);
    let e = BigInt(exp);
    const m = BigInt(mod);
    if (m <= 0n) throw new RangeError("mod must be a positive integer");
    if (e < 0n) throw new RangeError("exp must be non-negative");

    b = ((b % m) + m) % m;
    let result = 1n % m;
    while (e > 0n) {
        if (e & 1n) result = (result * b) % m;
        b = (b * b) % m;
        e >>= 1n;
    }
    return result;
}

if (typeof module !== "undefined") module.exports = modularPow;
if (typeof require !== "undefined" && require.main === module) {
    console.log("2^10 mod 1000:", modularPow(2, 10, 1000).toString()); // 24
}
