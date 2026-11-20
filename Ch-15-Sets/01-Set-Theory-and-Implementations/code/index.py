def unique_values(values):
    return set(values)

def contains_all(set_a, set_b):
    return set_b <= set_a

if __name__ == "__main__":
    print(unique_values([2, 1, 2, 3]))  # order is not guaranteed
    print(contains_all({1, 2, 3}, {2, 3}))  # True
