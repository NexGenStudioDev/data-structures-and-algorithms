# Chapter 28: Advanced Data Structures

> **Segment Trees, Binary Indexed Trees (Fenwick Trees), and Sparse Tables for range queries.**

These are advanced tools for repeated range queries or updates. Start with arrays and prefix sums first; each structure has different operation limits and update assumptions.

---

## 📌 Chapter Directory Structure

```text
Ch-28-Advanced-Data-Structures/
├── 01-Segment-Trees/
├── 02-Binary-Indexed-Trees-Fenwick/
├── 03-Sparse-Table-RMQ/
├── 04-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 Range Query Structures Comparison

| Data Structure | Build Time | Point Update | Range Query | Range Update | Space |
|---|---|---|---|---|---|
| **Prefix Sum Array** | $O(N)$ | $O(N)$ | $O(1)$ | $O(N)$ | $O(N)$ |
| **Sparse Table** | $O(N \log N)$ | Not supported | $O(1)$ (RMQ/GCD) | Not supported | $O(N \log N)$ |
| **Fenwick Tree (BIT)** | $O(N)$ | $O(\log N)$ | $O(\log N)$ | Range updates need an extended technique (often two BITs) | $O(N)$ |
| **Segment Tree** | $O(N)$ | $O(\log N)$ | $O(\log N)$ | $O(\log N)$ (with Lazy) | $O(4N)$ |

---

The range-update costs depend on the exact operation and chosen variant. A standard Fenwick tree supports point updates and prefix/range sums; range updates require an additional technique. A segment tree supports custom merge operations, and range updates need lazy propagation.

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Medium | LeetCode | [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable) | Segment Tree / Fenwick Tree | N/A | N/A | To Do |
| Hard | LeetCode | [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem) | Segment Tree / Priority Queue | N/A | N/A | To Do |
