// Fast Modular Exponentiation - O(log N)

function modularPow(base, exp, mod) {
    let result = 1n;
    base = BigInt(base) % BigInt(mod);
    exp = BigInt(exp);
    mod = BigInt(mod);

    while (exp > 0n) {
        if (exp & 1n) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        exp >>= 1n;
    }
    return Number(result);
}

console.log("2^10 mod 1000:", modularPow(2, 10, 1000)); // Output: 24
