// Segment tree for range-sum queries and point updates.
class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(Math.max(1, 4 * this.n)).fill(0);
        if (this.n > 0) this._build(arr, 0, 0, this.n - 1);
    }

    _build(arr, node, start, end) {
        if (start === end) {
            this.tree[node] = arr[start];
            return;
        }
        const mid = Math.floor((start + end) / 2);
        this._build(arr, 2 * node + 1, start, mid);
        this._build(arr, 2 * node + 2, mid + 1, end);
        this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
    }

    _checkIndex(index) {
        if (!Number.isInteger(index) || index < 0 || index >= this.n) {
            throw new RangeError("index is outside the array");
        }
    }

    // Public point update: replace the value at index with value.
    update(index, value) {
        this._checkIndex(index);
        this._update(0, 0, this.n - 1, index, value);
    }

    _update(node, start, end, index, value) {
        if (start === end) {
            this.tree[node] = value;
            return;
        }
        const mid = Math.floor((start + end) / 2);
        if (index <= mid) this._update(2 * node + 1, start, mid, index, value);
        else this._update(2 * node + 2, mid + 1, end, index, value);
        this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
    }

    // Public inclusive range query [left, right]. Empty ranges return 0.
    query(left, right) {
        if (!Number.isInteger(left) || !Number.isInteger(right)) {
            throw new TypeError("query bounds must be integers");
        }
        if (left > right) {
            if (left >= 0 && left <= this.n && right >= -1 && right < this.n) return 0;
            throw new RangeError("empty query bounds are outside the array");
        }
        if (left < 0 || right >= this.n) throw new RangeError("query bounds are outside the array");
        return this._query(0, 0, this.n - 1, left, right);
    }

    _query(node, start, end, left, right) {
        if (right < start || end < left) return 0;
        if (left <= start && end <= right) return this.tree[node];
        const mid = Math.floor((start + end) / 2);
        return this._query(2 * node + 1, start, mid, left, right) +
               this._query(2 * node + 2, mid + 1, end, left, right);
    }
}

if (typeof module !== "undefined") module.exports = SegmentTree;

if (typeof require !== "undefined" && require.main === module) {
    const tree = new SegmentTree([1, 3, 5, 7, 9, 11]);
    console.log("Range Sum [1, 3]:", tree.query(1, 3)); // 15
    tree.update(1, 10);
    console.log("After update, Range Sum [1, 3]:", tree.query(1, 3)); // 22
    console.log("Empty input query:", new SegmentTree([]).query(0, -1)); // Invalid bounds
}
