import heapq

def top_k_largest(values, k):
    if not isinstance(k, int) or k < 0:
        raise ValueError("k must be non-negative")
    if k == 0:
        return []
    heap = []
    for value in values:
        heapq.heappush(heap, value)
        if len(heap) > k:
            heapq.heappop(heap)
    return sorted(heap, reverse=True)

if __name__ == "__main__":
    print(top_k_largest([3, 1, 5, 12, 2, 11], 3))  # [12, 11, 5]
