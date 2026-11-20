def hollow_square(n):
    if not isinstance(n, int) or isinstance(n, bool) or n < 1:
        raise ValueError("n must be a positive integer")
    rows = []
    for row in range(n):
        line = []
        for col in range(n):
            border = row in (0, n - 1) or col in (0, n - 1)
            line.append("*" if border else " ")
        rows.append("".join(line))
    return "\n".join(rows)

if __name__ == "__main__":
    print(hollow_square(4))
