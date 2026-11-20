def compact_nonzero(values):
    write = 0
    for read in range(len(values)):
        if values[read] != 0:
            values[write] = values[read]
            write += 1
    while write < len(values):
        values[write] = 0
        write += 1
    return values

if __name__ == "__main__":
    print(compact_nonzero([0, 1, 0, 3, 12]))
