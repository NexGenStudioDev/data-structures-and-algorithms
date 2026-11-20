def linear_search(values, target):
    for index, value in enumerate(values):
        if value == target:
            return index
    return -1

if __name__ == "__main__":
    print(linear_search([8, 3, 6], 3))  # 1
    print(linear_search([8, 3, 6], 5))  # -1
