// Disjoint Set Union (DSU / Union-Find) with Path Compression & Union by Rank

class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.size = new Array(n).fill(1);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    unionByRank(u, v) {
        const rootU = this.find(u);
        const rootV = this.find(v);
        if (rootU === rootV) return false; // Cycle detected

        if (this.rank[rootU] < this.rank[rootV]) {
            this.parent[rootU] = rootV;
        } else if (this.rank[rootV] < this.rank[rootU]) {
            this.parent[rootV] = rootU;
        } else {
            this.parent[rootV] = rootU;
            this.rank[rootU]++;
        }
        return true;
    }

    isConnected(u, v) {
        return this.find(u) === this.find(v);
    }
}

const dsu = new DisjointSet(7);
dsu.unionByRank(1, 2);
dsu.unionByRank(2, 3);
console.log("Are 1 and 3 connected?", dsu.isConnected(1, 3)); // true
console.log("Are 1 and 4 connected?", dsu.isConnected(1, 4)); // false
