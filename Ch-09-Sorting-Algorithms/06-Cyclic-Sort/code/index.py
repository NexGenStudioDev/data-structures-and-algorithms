def cyclic_sort_one_to_n(values):
    result = list(values)
    i = 0
    while i < len(result):
        value = result[i]
        if not isinstance(value, int) or not 1 <= value <= len(result):
            raise ValueError("values must be in 1..n")
        correct = value - 1
        if result[i] == result[correct]:  # Duplicate: move on to prevent an infinite loop.
            i += 1
        else:
            result[i], result[correct] = result[correct], result[i]
    return result

if __name__ == "__main__":
    print(cyclic_sort_one_to_n([3, 1, 4, 2]))  # [1, 2, 3, 4]
