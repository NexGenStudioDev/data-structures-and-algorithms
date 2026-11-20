def max_window_sum(values, k):
    if not isinstance(k, int) or not 1 <= k <= len(values):
        raise ValueError("k must be between 1 and the array length")
    window = sum(values[:k])
    best = window
    for right in range(k, len(values)):
        window += values[right] - values[right - k]
        best = max(best, window)
    return best

if __name__ == "__main__":
    print(max_window_sum([2, 1, 5, 1, 3, 2], 3))  # 9
