def count_right_down_paths(rows, cols, blocked=None):
    blocked = blocked or set()
    if rows <= 0 or cols <= 0:
        return 0
    def search(row, col):
        if row >= rows or col >= cols or (row, col) in blocked:
            return 0
        if row == rows - 1 and col == cols - 1:
            return 1
        return search(row + 1, col) + search(row, col + 1)
    return search(0, 0)

if __name__ == "__main__":
    print(count_right_down_paths(3, 3))  # 6
