from collections import Counter

def frequencies(values):
    return Counter(values)

def two_sum(values, target):
    seen = {}
    for index, value in enumerate(values):
        needed = target - value
        if needed in seen:
            return [seen[needed], index]
        seen.setdefault(value, index)
    return None

if __name__ == "__main__":
    print(frequencies([2, 2, 3]))
    print(two_sum([2, 7, 11, 15], 9))  # [0, 1]
