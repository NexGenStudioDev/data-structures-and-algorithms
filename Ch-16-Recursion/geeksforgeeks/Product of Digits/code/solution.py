def product_of_digits(n: int) -> int:
    if not isinstance(n, int) or isinstance(n, bool) or n < 0:
        raise ValueError("n must be a non-negative integer")
    if n < 10:
        return n
    return (n % 10) * product_of_digits(n // 10)

if __name__ == "__main__":
    print(product_of_digits(1234))  # 24
    print(product_of_digits(205))   # 0
