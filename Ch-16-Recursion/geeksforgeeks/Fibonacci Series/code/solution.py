"""Return the first n Fibonacci numbers using recursion."""

def first_n_fibonacci(n: int) -> list[int]:
    if not isinstance(n, int) or isinstance(n, bool) or n < 0:
        raise ValueError("n must be a non-negative integer")

    def build(remaining: int, current: int, following: int, result: list[int]) -> list[int]:
        if remaining == 0:
            return result
        result.append(current)
        return build(remaining - 1, following, current + following, result)

    return build(n, 0, 1, [])

if __name__ == "__main__":
    print(first_n_fibonacci(7))  # [0, 1, 1, 2, 3, 5, 8]
