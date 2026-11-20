def pair_with_sum(sorted_values, target):
    left, right = 0, len(sorted_values) - 1
    while left < right:
        total = sorted_values[left] + sorted_values[right]
        if total == target:
            return [left, right]
        if total < target:
            left += 1
        else:
            right -= 1
    return None

def remove_duplicates(sorted_values):
    if not sorted_values:
        return 0
    write = 1
    for read in range(1, len(sorted_values)):
        if sorted_values[read] != sorted_values[write - 1]:
            sorted_values[write] = sorted_values[read]
            write += 1
    return write

if __name__ == "__main__":
    print(pair_with_sum([1, 2, 4, 7, 9], 11))  # [1, 4]
    values = [1, 1, 2, 2, 3]
    size = remove_duplicates(values)
    print(values[:size])  # [1, 2, 3]
