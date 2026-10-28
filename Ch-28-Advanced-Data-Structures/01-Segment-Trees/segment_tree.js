// Segment Tree for Range Sum Query & Point Updates

class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(4 * this.n).fill(0);
        this.build(arr, 0, 0, this.n - 1);
    }

    build(arr, node, start, end) {
        if (start === end) {
            this.tree[node] = arr[start];
            return;
        }
        const mid = Math.floor((start + end) / 2);
        this.build(arr, 2 * node + 1, start, mid);
        this.build(arr, 2 * node + 2, mid + 1, end);
        this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
    }

    update(node, start, end, idx, val) {
        if (start === end) {
            this.tree[node] = val;
            return;
        }
        const mid = Math.floor((start + end) / 2);
        if (idx <= mid) this.update(2 * node + 1, start, mid, idx, val);
        else this.update(2 * node + 2, mid + 1, end, idx, val);
        this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
    }

    query(node, start, end, l, r) {
        if (r < start || end < l) return 0; // Out of range
        if (l <= start && end <= r) return this.tree[node]; // Completely inside
        const mid = Math.floor((start + end) / 2);
        return this.query(2 * node + 1, start, mid, l, r) +
               this.query(2 * node + 2, mid + 1, end, l, r);
    }
}

const st = new SegmentTree([1, 3, 5, 7, 9, 11]);
console.log("Range Sum [1, 3]:", st.query(0, 0, 5, 1, 3)); // 3 + 5 + 7 = 15
st.update(0, 0, 5, 1, 10);
console.log("After update, Range Sum [1, 3]:", st.query(0, 0, 5, 1, 3)); // 10 + 5 + 7 = 22
