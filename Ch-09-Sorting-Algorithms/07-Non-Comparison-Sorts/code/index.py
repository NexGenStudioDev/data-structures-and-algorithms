def counting_sort(values):
    if any(not isinstance(value, int) or value < 0 for value in values):
        raise ValueError("values must be non-negative integers")
    if not values:
        return []
    counts = [0] * (max(values) + 1)
    for value in values:
        counts[value] += 1
    return [value for value, count in enumerate(counts) for _ in range(count)]

if __name__ == "__main__":
    print(counting_sort([4, 2, 2, 0, 3]))  # [0, 2, 2, 3, 4]
