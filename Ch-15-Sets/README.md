# Chapter 15: Sets

> **Master unique value collections, deduplication, and mathematical set theory in DSA.**  
> A set is an abstract data type that stores unique elements with fast membership testing.

---

## 📌 Chapter Directory Structure

```text
Ch-15-Sets/
├── 01-Set-Theory-and-Implementations/
├── 02-Common-Set-Operations/
├── 03-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 Unordered Set vs Ordered Set

| Feature | Hash Set (Unordered) | Tree Set (Ordered) |
|---|---|---|
| Underlying Data Structure | Hash Table | Self-Balancing BST (Red-Black Tree) |
| Element Ordering | None (arbitrary) | Strictly sorted (ascending/descending) |
| Insert / Delete / Search | $O(1)$ average, $O(N)$ worst | $O(\log N)$ guaranteed |
| Range Queries (`lower_bound`, `floor`, `ceil`) | Not supported | $O(\log N)$ |
| When to Use | Fast lookup, deduplication | Need sorted traversal or boundary queries |

---

## 📝 Practice Roadmap

| Problem | Difficulty | Key Pattern | Status |
|---|---|---|:---:|
| LeetCode 217: Contains Duplicate | Easy | Instant Set Insertion | ⏳ To Do |
| LeetCode 349: Intersection of Two Arrays | Easy | Set Intersection | ⏳ To Do |
| LeetCode 202: Happy Number | Easy | Cycle Detection via Visited Set | ⏳ To Do |
| LeetCode 36: Valid Sudoku | Medium | 3 Sets per Row/Col/Box | ⏳ To Do |
| LeetCode 128: Longest Consecutive Sequence | Medium | Intelligent Left-Boundary Check | ⏳ To Do |
