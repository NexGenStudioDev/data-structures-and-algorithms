def subsets(values):
    result, path = [], []
    def search(start):
        result.append(path.copy())
        for i in range(start, len(values)):
            path.append(values[i])
            search(i + 1)
            path.pop()  # undo before the next choice
    search(0)
    return result

if __name__ == "__main__":
    print(subsets([1, 2]))
