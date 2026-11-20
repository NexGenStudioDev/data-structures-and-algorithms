"""In-place quick sort using Lomuto partitioning."""


def quick_sort(values):
    def partition(low, high):
        pivot = values[high]
        boundary = low
        for current in range(low, high):
            if values[current] <= pivot:
                values[boundary], values[current] = values[current], values[boundary]
                boundary += 1
        values[boundary], values[high] = values[high], values[boundary]
        return boundary

    def sort(low, high):
        if low >= high:
            return
        pivot_index = partition(low, high)
        sort(low, pivot_index - 1)
        sort(pivot_index + 1, high)

    sort(0, len(values) - 1)
    return values


if __name__ == "__main__":
    data = [8, 3, 5, 1, 9, 2]
    print(quick_sort(data))
