# Fast modular exponentiation - O(log exp) time.
def modular_pow(base: int, exp: int, mod: int) -> int:
    if mod <= 0:
        raise ValueError("mod must be a positive integer")
    if exp < 0:
        raise ValueError("exp must be non-negative")

    result = 1 % mod
    base %= mod  # Python gives a non-negative residue when mod is positive.
    while exp > 0:
        if exp & 1:
            result = (result * base) % mod
        base = (base * base) % mod
        exp >>= 1
    return result

if __name__ == "__main__":
    print("2^10 mod 1000:", modular_pow(2, 10, 1000))  # 24
