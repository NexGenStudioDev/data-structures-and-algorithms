# Disjoint Set Union (DSU / Union-Find) with Path Compression & Union by Rank

class DisjointSet:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.size = [1] * n

    def find(self, x: int) -> int:
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]

    def union_by_rank(self, u: int, v: int) -> bool:
        root_u = self.find(u)
        root_v = self.find(v)
        if root_u == root_v:
            return False  # Already in same set (cycle)

        if self.rank[root_u] < self.rank[root_v]:
            self.parent[root_u] = root_v
        elif self.rank[root_v] < self.rank[root_u]:
            self.parent[root_v] = root_u
        else:
            self.parent[root_v] = root_u
            self.rank[root_u] += 1
        return True

    def is_connected(self, u: int, v: int) -> bool:
        return self.find(u) == self.find(v)

if __name__ == "__main__":
    dsu = DisjointSet(7)
    dsu.union_by_rank(1, 2)
    dsu.union_by_rank(2, 3)
    print("Are 1 and 3 connected?", dsu.is_connected(1, 3))  # True
    print("Are 1 and 4 connected?", dsu.is_connected(1, 4))  # False
