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
- Combined Time Complexity: **$O(\alpha(N))$** per operation (where $\alpha$ is the Inverse Ackermann Function, strictly $< 5$ for all universe-scale values of $N$).

---

## 📝 Practice Roadmap

| Problem | Difficulty | Application | Status |
|---|---|---|:---:|
| LeetCode 547: Number of Provinces | Medium | Connected Component Counting | ⏳ To Do |
| LeetCode 684: Redundant Connection | Medium | Cycle Detection in Undirected Graph | ⏳ To Do |
| LeetCode 721: Accounts Merge | Medium | Equivalence Class Grouping | ⏳ To Do |
| LeetCode 1319: Number of Operations to Connect Network | Medium | Spanning Component Counting | ⏳ To Do |
