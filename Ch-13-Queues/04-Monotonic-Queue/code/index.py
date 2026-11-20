from collections import deque

def sliding_window_maximum(values, k):
    if not isinstance(k, int) or not 1 <= k <= len(values):
        raise ValueError("k must be between 1 and input length")
    indices = deque()
    answer = []
    for i, value in enumerate(values):
        while indices and indices[0] <= i - k:
            indices.popleft()
        while indices and values[indices[-1]] <= value:
            indices.pop()
        indices.append(i)
        if i >= k - 1:
            answer.append(values[indices[0]])
    return answer

if __name__ == "__main__":
    print(sliding_window_maximum([1,3,-1,-3,5,3,6,7], 3))  # [3,3,5,5,6,7]
