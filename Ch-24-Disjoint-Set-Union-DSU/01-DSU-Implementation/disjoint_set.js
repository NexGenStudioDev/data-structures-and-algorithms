// Disjoint Set Union (Union-Find) with path compression and union heuristics.
class DisjointSet {
    constructor(n) {
        if (!Number.isInteger(n) || n < 0) {
            throw new RangeError("n must be a non-negative integer");
        }
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.size = new Array(n).fill(1);
    }

    _check(x) {
        if (!Number.isInteger(x) || x < 0 || x >= this.parent.length) {
            throw new RangeError("element is outside this DSU");
        }
    }

    find(x) {
        this._check(x);
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    unionByRank(u, v) {
        let rootU = this.find(u);
        let rootV = this.find(v);
        if (rootU === rootV) return false;

        if (this.rank[rootU] < this.rank[rootV]) {
            [rootU, rootV] = [rootV, rootU];
        }
        this.parent[rootV] = rootU;
        if (this.rank[rootU] === this.rank[rootV]) this.rank[rootU]++;
        this.size[rootU] += this.size[rootV];
        return true;
    }

    unionBySize(u, v) {
        let rootU = this.find(u);
        let rootV = this.find(v);
        if (rootU === rootV) return false;

        if (this.size[rootU] < this.size[rootV]) {
            [rootU, rootV] = [rootV, rootU];
        }
        this.parent[rootV] = rootU;
        this.size[rootU] += this.size[rootV];
        return true;
    }

    componentSize(x) {
        return this.size[this.find(x)];
    }

    isConnected(u, v) {
        return this.find(u) === this.find(v);
    }
}

if (typeof module !== "undefined") module.exports = DisjointSet;

if (typeof require !== "undefined" && require.main === module) {
    const dsu = new DisjointSet(7);
    dsu.unionByRank(1, 2);
    dsu.unionByRank(2, 3);
    console.log("Are 1 and 3 connected?", dsu.isConnected(1, 3)); // true
    console.log("Are 1 and 4 connected?", dsu.isConnected(1, 4)); // false
    console.log("Size of the component containing 1:", dsu.componentSize(1)); // 3
}
