# Euclidean Algorithm for Greatest Common Divisor & LCM

def gcd(a: int, b: int) -> int:
    while b:
        a, b = b, a % b
    return abs(a)

def lcm(a: int, b: int) -> int:
    if a == 0 or b == 0:
        return 0
    return abs(a * b) // gcd(a, b)

if __name__ == "__main__":
    print("GCD(48, 18):", gcd(48, 18))  # Output: 6
    print("LCM(48, 18):", lcm(48, 18))  # Output: 144
