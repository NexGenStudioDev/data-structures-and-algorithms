def pair_sum_sorted(values, target):
    left, right = 0, len(values) - 1
    while left < right:
        total = values[left] + values[right]
        if total == target:
            return [left, right]
        if total < target:
            left += 1
        else:
            right -= 1
    return None

if __name__ == "__main__":
    print(pair_sum_sorted([1, 2, 4, 7, 9], 11))  # [1, 4]
