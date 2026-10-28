# Factorial of a Number using Linear Recursion

def factorial(n: int) -> int:
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    if n <= 1:
        return 1
    return n * factorial(n - 1)

def factorial_iterative(n: int) -> int:
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

if __name__ == "__main__":
    print("5! =", factorial(5))  # 120
    print("4! =", factorial(4))  # 24
    print("0! =", factorial(0))  # 1
    print("Iterative 5! =", factorial_iterative(5))  # 120

