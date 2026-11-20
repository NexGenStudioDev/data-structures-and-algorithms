def selection_sort(values):
    result = list(values)
    for start in range(len(result) - 1):
        min_index = min(range(start, len(result)), key=result.__getitem__)
        result[start], result[min_index] = result[min_index], result[start]
    return result

if __name__ == "__main__":
    print(selection_sort([5, 1, 4, 2]))  # [1, 2, 4, 5]
