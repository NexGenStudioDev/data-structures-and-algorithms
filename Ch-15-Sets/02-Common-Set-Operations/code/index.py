def set_operations(a, b):
    return {
        "union": a | b,
        "intersection": a & b,
        "difference": a - b,
        "symmetric_difference": a ^ b,
    }

if __name__ == "__main__":
    print(set_operations({1, 2, 3}, {3, 4}))
