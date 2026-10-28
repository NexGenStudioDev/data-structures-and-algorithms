# Chapter 28: Advanced Data Structures

> **Segment Trees, Binary Indexed Trees (Fenwick Trees), and Sparse Tables for range queries.**

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
| **Fenwick Tree (BIT)** | $O(N)$ | $O(\log N)$ | $O(\log N)$ | $O(\log N)$ | $O(N)$ |
| **Segment Tree** | $O(N)$ | $O(\log N)$ | $O(\log N)$ | $O(\log N)$ (with Lazy) | $O(4N)$ |

---

## 📝 Practice Roadmap

| Problem | Difficulty | Data Structure | Status |
|---|---|---|:---:|
| LeetCode 307: Range Sum Query - Mutable | Medium | Segment Tree / Fenwick Tree | ⏳ To Do |
| LeetCode 315: Count of Smaller Numbers After Self | Hard | BIT / Merge Sort Inversion | ⏳ To Do |
| LeetCode 218: The Skyline Problem | Hard | Segment Tree / Priority Queue | ⏳ To Do |
