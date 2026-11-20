def insertion_sort(values):
    result = list(values)
    for i in range(1, len(result)):
        current = result[i]
        j = i - 1
        while j >= 0 and result[j] > current:
            result[j + 1] = result[j]
            j -= 1
        result[j + 1] = current
    return result

if __name__ == "__main__":
    print(insertion_sort([5, 1, 4, 2]))  # [1, 2, 4, 5]
