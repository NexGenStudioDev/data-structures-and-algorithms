# Fast Modular Exponentiation - O(log N)

def modular_pow(base: int, exp: int, mod: int) -> int:
    result = 1
    base %= mod
    while exp > 0:
        if exp & 1:
            result = (result * base) % mod
        base = (base * base) % mod
        exp >>= 1
    return result

if __name__ == "__main__":
    print("2^10 mod 1000:", modular_pow(2, 10, 1000))  # Output: 24
