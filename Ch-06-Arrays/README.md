# Chapter 06: Arrays

> **The foundational contiguous data structure of computer science.**  
> Arrays store elements in contiguous blocks of memory, providing instantaneous $O(1)$ random access by index.

---

## 📌 Chapter Directory Structure

```text
Ch-06-Arrays/
├── 01-Array-Fundamentals/
├── 02-Prefix-Sum-and-Difference-Array/
├── 03-Two-Pointers-Intro/
├── LeetCode/
│   ├── Two Sum/
│   ├── Remove Element/
│   ├── Remove Duplicates from Sorted Array/
│   ├── Longest Common Prefix/
│   └── Stone Game/
├── README.md
└── .gitignore
```

---

## 🎯 Core Concepts

### 1. Memory Layout and Random Access
An array of elements of size $S$ starting at memory address $B$ stores the element at index $i$ at:
$$\text{Address}(A[i]) = B + i \times S$$
Because computing this formula takes simple arithmetic operations, indexing takes strictly **$O(1)$ time**.

### 2. Time Complexities for Common Operations
| Operation | Time Complexity | Notes |
|---|---|---|
| Access by index | $O(1)$ | Direct memory address offset calculation |
| Search (unsorted) | $O(N)$ | Linear scan |
| Search (sorted) | $O(\log N)$ | Binary search |
| Insert at end | $O(1)$ amortized | Dynamic arrays (Vector / ArrayList) double capacity when full |
| Insert at beginning / middle | $O(N)$ | Requires shifting all subsequent elements right |
| Delete at end | $O(1)$ | Simply decrement the logical size pointer |
| Delete at beginning / middle | $O(N)$ | Requires shifting all subsequent elements left |

### 3. Essential Array Techniques
1. **Two Pointers:** Converging from both ends (opposite direction) or moving at different speeds (fast/slow).
2. **Prefix Sum Array:** Precompute cumulative sums to answer any subarray sum query in $O(1)$ time:
   $$\text{sum}(L, R) = \text{prefix}[R] - \text{prefix}[L - 1]$$
3. **Difference Array:** Apply range updates in $O(1)$ time:
   $$\text{diff}[L] \mathrel{+}= V, \quad \text{diff}[R + 1] \mathrel{-}= V$$
4. **Kadane's Algorithm:** Compute maximum subarray sum in a single linear pass ($O(N)$ time, $O(1)$ space).
5. **Dutch National Flag Algorithm:** 3-way partitioning of an array in $O(N)$ time and $O(1)$ space.

---

## 📝 Practice Roadmap

| Problem | Difficulty | Key Pattern | Status |
|---|---|---|:---:|
| [LeetCode 1: Two Sum](./LeetCode/Two%20Sum/) | Easy | Hash Map Lookup | ✅ Complete |
| [LeetCode 27: Remove Element](./LeetCode/Remove%20Element/) | Easy | Two Pointers (In-place) | ✅ Complete |
| [LeetCode 26: Remove Duplicates](./LeetCode/Remove%20Duplicates%20from%20Sorted%20Array/) | Easy | Two Pointers (Fast/Slow) | ✅ Complete |
| [LeetCode 14: Longest Common Prefix](./LeetCode/Longest%20Common%20Prefix/) | Easy | Horizontal/Vertical Scanning | ✅ Complete |
| [LeetCode 877: Stone Game](./LeetCode/Stone%20Game/) | Medium | Minimax / DP / Game Theory | ✅ Complete |
| LeetCode 53: Maximum Subarray | Medium | Kadane's Algorithm | ⏳ To Do |
| LeetCode 75: Sort Colors | Medium | Dutch National Flag | ⏳ To Do |
| LeetCode 238: Product of Array Except Self | Medium | Prefix & Suffix Products | ⏳ To Do |
| LeetCode 42: Trapping Rain Water | Hard | Two Pointers / Monotonic Stack | ⏳ To Do |
