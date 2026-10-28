# Chapter 08: Searching Algorithms

> **From simple scans to binary search and search on continuous answer spaces.**  
> Searching is the process of locating a target value or boundary condition within a dataset.

---

## 📌 Chapter Directory Structure

```text
Ch-08-Searching-Algorithms/
├── 01-Linear-Search/
├── 02-Binary-Search/
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
  *Never use `(low + high) // 2` in typed languages like C++/Java because it can overflow a 32-bit signed integer!*

### 3. Binary Search Variants
1. **Lower Bound:** Smallest index where `arr[i] >= target`.
2. **Upper Bound:** Smallest index where `arr[i] > target`.
3. **Search in Rotated Sorted Array:** At least one half (`[low..mid]` or `[mid..high]`) is always strictly sorted. Determine which half is sorted and check if the target falls within that sorted range.

### 4. Binary Search on Answer Space
When asked to minimize the maximum (or maximize the minimum), if a condition is monotonic:
- Define `low = minimum possible answer`, `high = maximum possible answer`.
- Test `isValid(mid)`:
  - If feasible, try to do better (adjust boundary).
  - If not feasible, move away from `mid`.

---

## 📝 Practice Roadmap

| Problem | Difficulty | Pattern | Status |
|---|---|---|:---:|
| LeetCode 704: Binary Search | Easy | Standard Binary Search | ⏳ To Do |
| LeetCode 35: Search Insert Position | Easy | Lower Bound | ⏳ To Do |
| LeetCode 34: First and Last Position | Medium | Lower & Upper Bound | ⏳ To Do |
| LeetCode 33: Search in Rotated Sorted Array | Medium | Modified Binary Search | ⏳ To Do |
| LeetCode 153: Find Minimum in Rotated Sorted Array | Medium | Inflection Point Search | ⏳ To Do |
| LeetCode 74: Search a 2D Matrix | Medium | Flattened Matrix Binary Search | ⏳ To Do |
| LeetCode 240: Search a 2D Matrix II | Medium | Top-Right / Bottom-Left Staircase | ⏳ To Do |
| LeetCode 875: Koko Eating Bananas | Medium | Binary Search on Answer | ⏳ To Do |
| LeetCode 1011: Capacity To Ship Packages | Medium | Binary Search on Answer | ⏳ To Do |
| LeetCode 4: Median of Two Sorted Arrays | Hard | Advanced Binary Search Partition | ⏳ To Do |
