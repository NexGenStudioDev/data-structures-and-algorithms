def min_length_at_least_target(values, target):
    if any(value < 0 for value in values):
        raise ValueError("this sliding-window method requires non-negative values")
    left = 0
    total = 0
    best = float("inf")
    for right, value in enumerate(values):
        total += value
        while total >= target:
            best = min(best, right - left + 1)
            total -= values[left]
            left += 1
    return 0 if best == float("inf") else best

if __name__ == "__main__":
    print(min_length_at_least_target([2, 3, 1, 2, 4, 3], 7))  # 2
