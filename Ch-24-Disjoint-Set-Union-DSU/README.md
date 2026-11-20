# Chapter 24: Disjoint Set Union (DSU / Union-Find)

> **Near $O(1)$ dynamic connectivity, cycle detection, and component clustering.**  
> DSU maintains a partition of a set into disjoint subsets, supporting two primary operations: `find` and `union`.

---

## 📌 Chapter Directory Structure

```text
Ch-24-Disjoint-Set-Union-DSU/
├── 01-DSU-Implementation/
├── 02-Applications-and-Cycle-Detection/
├── 03-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 The Dual Optimizations
1. **Path Compression:** During `find(x)`, make every visited node point directly to the representative root.
2. **Union by Rank / Size:** Always attach the shallower tree underneath the root of the deeper tree.
- With path compression and union by rank or size, operations take amortized $O(\alpha(N))$ time over a sequence of operations. The inverse Ackermann function grows so slowly that it is at most a small constant for practical input sizes; this is an amortized bound, not a worst-case guarantee for each individual call.

---

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | GeeksforGeeks | [Disjoint Set (Union-Find)](https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1) | Disjoint Set Union (DSU / Union-Find) | N/A | N/A | To Do |
| Medium | LeetCode | [Accounts Merge](https://leetcode.com/problems/accounts-merge) | Equivalence Class Grouping | N/A | N/A | To Do |
| Medium | LeetCode | [Number of Operations to Connect Network](https://leetcode.com/problems/number-of-operations-to-connect-network) | Spanning Component Counting | N/A | N/A | To Do |
| Medium | LeetCode | [Number of Provinces](https://leetcode.com/problems/number-of-provinces) | Connected Component Counting | N/A | N/A | To Do |
| Medium | LeetCode | [Redundant Connection](https://leetcode.com/problems/redundant-connection) | Cycle Detection in Undirected Graph | N/A | N/A | To Do |
