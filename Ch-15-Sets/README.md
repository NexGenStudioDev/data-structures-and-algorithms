# Chapter 15: Sets

> **Master unique value collections, deduplication, and mathematical set theory in DSA.**  
> A set is an abstract data type that stores unique elements and supports membership checks. Exact ordering and performance depend on the language implementation.

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

## 🎯 Hash Sets and Sorted Sets

These are common abstract implementation choices, not built-in names shared by every language. JavaScript’s `Set` preserves insertion order and does not offer sorted range queries. A sorted set generally requires a separate ordered-tree library or a custom implementation.

| Feature | Hash-based set (typical) | Sorted tree set (typical) |
|---|---|---|
| Underlying Data Structure | Hash Table | Self-Balancing BST (Red-Black Tree) |
| Element Ordering | Depends on language; JavaScript `Set` preserves insertion order | Sorted by key |
| Insert / Delete / Search | Average often $O(1)$; worst case may be $O(N)$ | $O(\log N)$ in a balanced tree |
| Range Queries (`lower_bound`, `floor`, `ceil`) | Not supported | $O(\log N)$ |
| When to Use | Fast lookup, deduplication | Need sorted traversal or boundary queries |

---

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../PRACTICE-TRACKER.md). LeetCode questions are linked below.


| Problem | Difficulty | Key Pattern | Status |
|---|---|---|:---:|
| [LeetCode 217: Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)| Easy | Instant Set Insertion | ⏳ To Do |
| [LeetCode 349: Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)| Easy | Set Intersection | ⏳ To Do |
| [LeetCode 202: Happy Number](https://leetcode.com/problems/happy-number/)| Easy | Cycle Detection via Visited Set | ⏳ To Do |
| [LeetCode 36: Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)| Medium | 3 Sets per Row/Col/Box | ⏳ To Do |
| [LeetCode 128: Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | Medium | Set Lookup from Sequence Start | ⏳ To Do |
