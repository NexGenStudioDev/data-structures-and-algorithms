def array_sum(values):
    total = 0
    for value in values:
        total += value
    return total

def find_first(values, target):
    for index, value in enumerate(values):
        if value == target:
            return index
    return -1

if __name__ == "__main__":
    print(array_sum([7, 4, 9]))  # 20
    print(find_first([7, 4, 9], 4))  # 1
    print(find_first([], 4))  # -1
