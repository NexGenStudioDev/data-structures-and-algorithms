# Chapter 08: Searching Algorithms

> **From simple scans to binary search and search on continuous answer spaces.**  
> Searching is the process of locating a target value or boundary condition within a dataset.

---

## 📌 Chapter Directory Structure

```text
Ch-08-Searching-Algorithms/
├── 01-Linear-Search/
│   ├── README.md
│   └── code/                                    # JavaScript and Python examples
├── 02-Binary-Search/
│   ├── Code/                                     # JavaScript and Python implementations
│   ├── doc/                                      # Binary search notes and examples
│   └── LeetCode/
│       └── Sqrt(x)/                              # Complete walkthrough, dry run, images, JS & Python
├── 03-Binary-Search-on-Answer/
├── 04-2D-Matrix-Search/
├── 05-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 Core Algorithms & Paradigms

### 1. Linear Search
- **Best Case:** $O(1)$ (target is at index 0)
- **Worst / Average Case:** $O(N)$
- **Space:** $O(1)$
- **When to use:** Unsorted data, small arrays, singly linked lists without random access.

### 2. Binary Search
- **Precondition:** Data must be monotonically ordered (sorted) or have a monotonic predicate ($F, F, F, T, T, T$).
- **Time Complexity:** $O(\log N)$
- **Space Complexity:** $O(1)$ iterative, $O(\log N)$ recursive.
- **Midpoint Formula:**
  $$\text{mid} = \text{low} + \lfloor \frac{\text{high} - \text{low}}{2} \rfloor$$
  *In languages with fixed-width signed integers, `low + high` can overflow. The difference-based formula avoids that issue. In JavaScript, ordinary `Number` values do not have the same 32-bit integer overflow behavior, but the difference form is still clear.*

### 3. Binary Search Variants
1. **Lower Bound:** Smallest index where `arr[i] >= target`.
2. **Upper Bound:** Smallest index where `arr[i] > target`.
3. **Search in Rotated Sorted Array:** With distinct values, at least one half is sorted. With duplicates, both halves may look equal (for example `[1, 1, 1, 3, 1]`), so a search may need to shrink an endpoint; the worst case can become $O(N)$.

### 4. Binary Search on Answer Space
When asked to minimize the maximum (or maximize the minimum), if a condition is monotonic:
- Define `low = minimum possible answer`, `high = maximum possible answer`.
- Test `isValid(mid)`:
  - If feasible, try to do better (adjust boundary).
  - If not feasible, move away from `mid`.

---

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | LeetCode | [Binary Search](https://leetcode.com/problems/binary-search) | Standard Binary Search | N/A | N/A | To Do |
| Easy | LeetCode | [Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) | Binary Search / lower bound | N/A | N/A | To Do |
| Easy | LeetCode | [Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/) | Binary Search / comparison API | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Linear Search in an Unsorted Array](https://www.geeksforgeeks.org/dsa/searching-elements-in-an-array-array-operations/) | Linear Search | N/A | N/A | To Do |
| Easy | LeetCode | [Search Insert Position](https://leetcode.com/problems/search-insert-position) | Lower Bound | N/A | N/A | To Do |
| Easy | LeetCode | [Sqrt(x)](https://leetcode.com/problems/sqrtx/) | Binary search / integer square root | [Question](./02-Binary-Search/LeetCode/Sqrt%28x%29/Question.md) | [Solution](./02-Binary-Search/LeetCode/Sqrt%28x%29/Approch1.md) | Completed |
| Easy | LeetCode | [Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/) | Binary Search / numeric range | N/A | N/A | To Do |
| Medium | LeetCode | [Capacity To Ship Packages](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days) | Binary Search on Answer | N/A | N/A | To Do |
| Medium | LeetCode | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array) | Inflection Point Search | N/A | N/A | To Do |
| Medium | LeetCode | [Find Peak Element](https://leetcode.com/problems/find-peak-element/) | Binary Search / local maximum | N/A | N/A | To Do |
| Medium | LeetCode | [First and Last Position](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array) | Lower & Upper Bound | N/A | N/A | To Do |
| Medium | LeetCode | [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas) | Binary Search on Answer | N/A | N/A | To Do |
| Medium | LeetCode | [Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/) | Binary Search / index-to-value gap | N/A | N/A | To Do |
| Medium | LeetCode | [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) | Binary Search on Answer | N/A | N/A | To Do |
| Medium | LeetCode | [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii) | Top-Right / Bottom-Left Staircase | N/A | N/A | To Do |
| Medium | LeetCode | [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix) | Flattened Matrix Binary Search | N/A | N/A | To Do |
| Medium | LeetCode | [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) | Binary Search / rotated array with duplicates | N/A | N/A | To Do |
| Medium | LeetCode | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array) | Modified Binary Search | N/A | N/A | To Do |
| Hard | LeetCode | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays) | Advanced Binary Search Partition | N/A | N/A | To Do |
| Hard | LeetCode | [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/) | Binary Search on Answer | N/A | N/A | To Do |
