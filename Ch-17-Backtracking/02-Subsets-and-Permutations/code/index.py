def permutations(values):
    result, path = [], []
    used = [False] * len(values)
    def search():
        if len(path) == len(values):
            result.append(path.copy())
            return
        for i, value in enumerate(values):
            if used[i]:
                continue
            used[i] = True; path.append(value)
            search()
            path.pop(); used[i] = False
    search()
    return result

if __name__ == "__main__":
    print(len(permutations([1, 2, 3])))  # 6
