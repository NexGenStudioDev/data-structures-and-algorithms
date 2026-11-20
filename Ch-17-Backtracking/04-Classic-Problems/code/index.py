def solve_n_queens(n):
    board = [["."] * n for _ in range(n)]
    cols, down, up, answers = set(), set(), set(), []
    def place(row):
        if row == n:
            answers.append(["".join(line) for line in board])
            return
        for col in range(n):
            d, u = row - col, row + col
            if col in cols or d in down or u in up:
                continue
            board[row][col] = "Q"; cols.add(col); down.add(d); up.add(u)
            place(row + 1)
            board[row][col] = "."; cols.remove(col); down.remove(d); up.remove(u)
    if n > 0:
        place(0)
    return answers

if __name__ == "__main__":
    print(len(solve_n_queens(4)))  # 2
