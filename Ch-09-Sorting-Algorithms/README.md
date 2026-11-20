# Chapter 09: Sorting Algorithms

> **Master the fundamental sorting techniques, stability, memory bounds, and non-comparison sorting.**  
> Sorting arranges elements in non-decreasing or non-increasing order.

---

## 📌 Chapter Directory Structure

```text
Ch-09-Sorting-Algorithms/
├── 01-Bubble-Sort/
├── 02-Selection-Sort/
├── 03-Insertion-Sort/
├── 04-Merge-Sort/
├── 05-Quick-Sort/
├── 06-Cyclic-Sort/
├── 07-Non-Comparison-Sorts/
├── 08-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 📊 Comprehensive Comparison Table

| Algorithm | Best Time | Average Time | Worst Time | Space | Stable? | In-Place? | Key Mechanism |
|---|---|---|---|---|:---:|:---:|---|
| **Bubble Sort** | $O(N)$ (optimized) | $O(N^2)$ | $O(N^2)$ | $O(1)$ | Yes | Yes | Repeatedly swap adjacent inverted pairs |
| **Selection Sort**| $O(N^2)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | No | Yes | Find minimum and swap to prefix |
| **Insertion Sort**| $O(N)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | Yes | Yes | Insert next item into sorted subarray |
| **Merge Sort** | $O(N \log N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(N)$ | Yes | No | Divide in half, sort halves, merge |
| **Quick Sort** | $O(N \log N)$ | $O(N \log N)$ | $O(N^2)$ | Expected $O(\log N)$ stack; worst $O(N)$ | No | Yes | Partition around pivot (Lomuto/Hoare) |
| **Heap Sort** | $O(N \log N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(1)$ | No | Yes | Build Max-Heap, swap root to end |
| **Counting Sort** | $O(N + K)$ | $O(N + K)$ | $O(N + K)$ | $O(K)$ | Yes | No | Frequency count of discrete integer keys |
| **Radix Sort** | $O(D \times (N + B))$| $O(D \times (N + B))$ | $O(D \times (N + B))$ | $O(N + B)$ | Yes | No | Digit-by-digit stable counting sort |
| **Cyclic Sort** | $O(N)$ | $O(N)$ | $O(N)$ | $O(1)$ | No | Yes | Place element `x` at index `x - 1` |

---

The table describes common textbook implementations. Quick Sort’s space column counts the recursion stack; partitioning may be in place, but recursive calls still use stack space.

## 💡 Important Rules of Thumb
1. **Stability:** A sort is stable if it preserves the relative order of elements with equal keys. Essential when sorting records by multiple fields.
2. **Comparison Lower Bound:** Any comparison-based sorting algorithm has a theoretical lower bound of **$\Omega(N \log N)$** operations.
3. **Cyclic Sort Pattern:** When each value maps to a valid array index (for example, a permutation of $1$ through $N$), cyclic placement can take $O(N)$ time and $O(1)$ auxiliary space. Check the exact value range and duplicate behavior before using it.

---

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | LeetCode | [Find All Numbers Disappeared](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array) | Cyclic Sort | N/A | N/A | To Do |
| Easy | LeetCode | [Missing Number](https://leetcode.com/problems/missing-number) | Cyclic Sort / XOR | N/A | N/A | To Do |
| Medium | TakeUForward | [Count Inversions](https://takeuforward.org/practice/dsa/count-inversions) | Sorting Algorithms | N/A | N/A | To Do |
| Medium | LeetCode | [Find Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number) | Floyd's Cycle / Cyclic Sort | N/A | N/A | To Do |
| Medium | LeetCode | [Merge Intervals](https://leetcode.com/problems/merge-intervals) | Sort by Start Time + Sweep | N/A | N/A | To Do |
| Medium | GeeksforGeeks | [Merge Two Sorted Arrays Without Extra Space](https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1) | Sorting Algorithms | N/A | N/A | To Do |
| Medium | LeetCode | [Sort an Array](https://leetcode.com/problems/sort-an-array) | Merge Sort / Quick Sort | N/A | N/A | To Do |
| Medium | LeetCode | [Sort Colors](https://leetcode.com/problems/sort-colors) | Dutch National Flag 3-Way Partition | N/A | N/A | To Do |
| Medium | LeetCode | [Sort List](https://leetcode.com/problems/sort-list) | Merge Sort on Linked List | N/A | N/A | To Do |
