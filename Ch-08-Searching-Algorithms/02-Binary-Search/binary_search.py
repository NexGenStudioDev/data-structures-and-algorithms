# Classic Binary Search & Bounds in O(log N)

def binary_search(arr: list[int], target: int) -> int:
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

def lower_bound(arr: list[int], target: int) -> int:
    low, high = 0, len(arr)
    while low < high:
        mid = low + (high - low) // 2
        if arr[mid] >= target:
            high = mid
        else:
            low = mid + 1
    return low

if __name__ == "__main__":
    print("Found at index:", binary_search([1, 3, 5, 7, 9], 7))  # 3
