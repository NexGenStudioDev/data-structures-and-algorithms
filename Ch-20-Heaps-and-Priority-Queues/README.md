# Chapter 20: Heaps & Priority Queues

> **Complete binary trees providing optimal $O(1)$ extreme-value access and $O(\log N)$ insertion.**  
> A heap is an array-backed complete binary tree satisfying the heap-order property (Min-Heap or Max-Heap).

---

## 📌 Chapter Directory Structure

```text
Ch-20-Heaps-and-Priority-Queues/
├── 01-Heap-Representation-and-Heapify/
├── 02-Priority-Queue-Operations/
├── 03-Top-K-Elements-Pattern/
├── 04-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 Array Indexing Formulas
For a $0$-indexed array:
- **Parent of node $i$:** `Math.floor((i - 1) / 2)`
- **Left Child of node $i$:** `2 * i + 1`
- **Right Child of node $i$:** `2 * i + 2`

---

## 💡 Top-K Elements Heuristic
- To find **Top K Largest** elements: Maintain a **Min-Heap** of size $K$. (Root holds the $K$-th largest; smaller elements are evicted).
- To find **Top K Smallest** elements: Maintain a **Max-Heap** of size $K$. (Root holds the $K$-th smallest; larger elements are evicted).

---

## 📝 Practice Roadmap

| Problem | Difficulty | Pattern | Status |
|---|---|---|:---:|
| LeetCode 215: Kth Largest Element in an Array | Medium | Min-Heap of Size K / Quickselect | ⏳ To Do |
| LeetCode 347: Top K Frequent Elements | Medium | Frequency Map + Min-Heap | ⏳ To Do |
| LeetCode 295: Find Median from Data Stream | Hard | Two Heaps (Max-Heap + Min-Heap) | ⏳ To Do |
| LeetCode 373: Find K Pairs with Smallest Sums | Medium | K-way Merge using Min-Heap | ⏳ To Do |
| LeetCode 621: Task Scheduler | Medium | Max-Heap + Cooldown Queue | ⏳ To Do |
| LeetCode 973: K Closest Points to Origin | Medium | Max-Heap of Size K | ⏳ To Do |
