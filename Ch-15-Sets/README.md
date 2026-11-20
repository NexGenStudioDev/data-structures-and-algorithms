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

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | LeetCode | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate) | Instant Set Insertion | N/A | N/A | To Do |
| Easy | LeetCode | [Happy Number](https://leetcode.com/problems/happy-number) | Cycle Detection via Visited Set | N/A | N/A | To Do |
| Easy | LeetCode | [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays) | Set Intersection | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Union of Arrays with Duplicates](https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1) | Sets | N/A | N/A | To Do |
| Medium | LeetCode | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence) | Set Lookup from Sequence Start | N/A | N/A | To Do |
| Medium | LeetCode | [Valid Sudoku](https://leetcode.com/problems/valid-sudoku) | 3 Sets per Row/Col/Box | N/A | N/A | To Do |
