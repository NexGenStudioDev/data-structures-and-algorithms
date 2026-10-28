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
| **Quick Sort** | $O(N \log N)$ | $O(N \log N)$ | $O(N^2)$ | $O(\log N)$| No | Yes | Partition around pivot (Lomuto/Hoare) |
| **Heap Sort** | $O(N \log N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(1)$ | No | Yes | Build Max-Heap, swap root to end |
| **Counting Sort** | $O(N + K)$ | $O(N + K)$ | $O(N + K)$ | $O(K)$ | Yes | No | Frequency count of discrete integer keys |
| **Radix Sort** | $O(D \times (N + B))$| $O(D \times (N + B))$ | $O(D \times (N + B))$ | $O(N + B)$ | Yes | No | Digit-by-digit stable counting sort |
| **Cyclic Sort** | $O(N)$ | $O(N)$ | $O(N)$ | $O(1)$ | No | Yes | Place element `x` at index `x - 1` |

---

## 💡 Important Rules of Thumb
1. **Stability:** A sort is stable if it preserves the relative order of elements with equal keys. Essential when sorting records by multiple fields.
2. **Comparison Lower Bound:** Any comparison-based sorting algorithm has a theoretical lower bound of **$\Omega(N \log N)$** operations.
3. **Cyclic Sort Pattern:** Whenever an array contains numbers from $1$ to $N$ (or $0$ to $N$), suspect Cyclic Sort to achieve $O(N)$ time and $O(1)$ auxiliary space.

---

## 📝 Practice Roadmap

| Problem | Difficulty | Target Technique | Status |
|---|---|---|:---:|
| LeetCode 912: Sort an Array | Medium | Merge Sort / Quick Sort | ⏳ To Do |
| LeetCode 75: Sort Colors | Medium | Dutch National Flag 3-Way Partition | ⏳ To Do |
| LeetCode 268: Missing Number | Easy | Cyclic Sort / XOR | ⏳ To Do |
| LeetCode 448: Find All Numbers Disappeared | Easy | Cyclic Sort | ⏳ To Do |
| LeetCode 287: Find Duplicate Number | Medium | Floyd's Cycle / Cyclic Sort | ⏳ To Do |
| LeetCode 148: Sort List | Medium | Merge Sort on Linked List | ⏳ To Do |
| LeetCode 56: Merge Intervals | Medium | Sort by Start Time + Sweep | ⏳ To Do |
