def min_ship_capacity(weights, days):
    if not weights:
        raise ValueError("weights must be non-empty")
    if not isinstance(days, int) or days < 1:
        raise ValueError("days must be positive")
    if any(not isinstance(w, int) or w < 0 for w in weights):
        raise ValueError("weights must be non-negative integers")

    low, high = max(weights), sum(weights)
    while low < high:
        capacity = low + (high - low) // 2
        used_days, load = 1, 0
        for weight in weights:
            if load + weight > capacity:
                used_days += 1
                load = 0
            load += weight
        if used_days <= days:
            high = capacity
        else:
            low = capacity + 1
    return low

if __name__ == "__main__":
    print(min_ship_capacity([1,2,3,4,5,6,7,8,9,10], 5))  # 15
