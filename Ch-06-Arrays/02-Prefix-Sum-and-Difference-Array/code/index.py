def build_prefix(values):
    prefix = [0]
    for value in values:
        prefix.append(prefix[-1] + value)
    return prefix

def range_sum(prefix, left, right):
    if left < 0 or right < left or right + 1 >= len(prefix):
        raise ValueError("expected a valid inclusive range")
    return prefix[right + 1] - prefix[left]

def apply_range_adds(length, updates):
    diff = [0] * (length + 1)
    for left, right, value in updates:
        if left < 0 or right < left or right >= length:
            raise ValueError("invalid update range")
        diff[left] += value
        diff[right + 1] -= value
    result = []
    running = 0
    for i in range(length):
        running += diff[i]
        result.append(running)
    return result

if __name__ == "__main__":
    print(range_sum(build_prefix([2, 4, 1, 7]), 1, 3))  # 12
    print(apply_range_adds(5, [(1, 3, 2), (2, 4, 1)]))  # [0, 2, 3, 3, 1]
