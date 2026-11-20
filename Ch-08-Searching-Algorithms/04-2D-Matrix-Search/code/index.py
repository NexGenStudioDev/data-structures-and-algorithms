def contains_in_sorted_matrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
    cols = len(matrix[0])
    if any(len(row) != cols for row in matrix):
        raise ValueError("matrix rows must have equal length")
    row, col = 0, cols - 1
    while row < len(matrix) and col >= 0:
        value = matrix[row][col]
        if value == target:
            return True
        if value > target:
            col -= 1
        else:
            row += 1
    return False

if __name__ == "__main__":
    print(contains_in_sorted_matrix([[1,4,7],[2,5,8],[3,6,9]], 6))  # True
    print(contains_in_sorted_matrix([], 6))  # False
