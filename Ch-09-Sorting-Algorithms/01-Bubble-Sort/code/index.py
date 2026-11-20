def bubble_sort(values):
    result = list(values)
    for end in range(len(result) - 1, 0, -1):
        swapped = False
        for i in range(end):
            if result[i] > result[i + 1]:
                result[i], result[i + 1] = result[i + 1], result[i]
                swapped = True
        if not swapped:
            break
    return result

if __name__ == "__main__":
    print(bubble_sort([5, 1, 4, 2]))  # [1, 2, 4, 5]
