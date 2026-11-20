# Chapter 06: Arrays

> Arrays provide indexed access and make a useful starting point for many problems. In the usual DSA model, reading an array element by index takes $O(1)$ time. JavaScript does not guarantee that every array is stored in one contiguous memory block.

---

## 📌 Chapter Directory Structure

```text
Ch-06-Arrays/
├── 01-Array-Fundamentals/
├── 02-Prefix-Sum-and-Difference-Array/
├── 03-Two-Pointers-Intro/
├── LeetCode/
│   ├── Two Sum/
│   ├── Largest in Array/
│   ├── Remove Element/
│   ├── Remove Duplicates from Sorted Array/
│   ├── Longest Common Prefix/
│   └── Stone Game/
├── README.md
└── .gitignore
```

---

## 🎯 Core Concepts

### 1. Indexed Access
In the usual array model, an index identifies an element directly, so reading `arr[i]` takes $O(1)$ time. This is a model for reasoning about operations; JavaScript engines choose their own internal representations, and the language does not promise a particular memory layout.

### 2. Time Complexities for Common Operations
| Operation | Time Complexity | Notes |
|---|---|---|
| Access by index | $O(1)$ | Direct indexed access in the usual DSA array model |
| Search (unsorted) | $O(N)$ | Linear scan |
| Search (sorted) | $O(\log N)$ | Binary search |
| Add at end (`push`) | Usually $O(1)$ amortized in the dynamic-array model | Some additions may require internal growth; JavaScript does not specify a fixed growth strategy |
| Insert at beginning / middle | $O(N)$ | Requires shifting all subsequent elements right |
| Remove at end (`pop`) | Usually $O(1)$ amortized in the dynamic-array model | Exact runtime is engine-dependent |
| Delete at beginning / middle | $O(N)$ | Requires shifting all subsequent elements left |

### 3. Essential Array Techniques
1. **Two Pointers:** Converging from both ends (opposite direction) or moving at different speeds (fast/slow).
2. **Prefix Sum Array:** With a zero-prefixed array where `prefix[0] = 0` and `prefix[i + 1]` sums the first `i + 1` values, query an inclusive range in $O(1)$ time:
   $$\text{sum}(L, R) = \text{prefix}[R + 1] - \text{prefix}[L]$$
3. **Difference Array:** For a zero-indexed inclusive range update `[L, R]`, add the update value at `diff[L]` and subtract it at `diff[R + 1]`. A difference array of length `N + 1` makes each update $O(1)$; a final prefix pass applies the updates.
4. **Kadane's Algorithm:** Compute maximum subarray sum in a single linear pass ($O(N)$ time, $O(1)$ space).
5. **Dutch National Flag Algorithm:** 3-way partitioning of an array in $O(N)$ time and $O(1)$ space.

These costs use common DSA models. State assumptions when they matter, and check JavaScript-specific behavior for numeric precision, mutation, and engine-dependent performance.

---

## 📝 Practice Roadmap

| Problem | Difficulty | Key Pattern | Status |
|---|---|---|:---:|
| [LeetCode 1: Two Sum](./LeetCode/Two%20Sum/) | Easy | Hash Map Lookup | ✅ Complete |
| [Largest in Array](./LeetCode/Largest%20in%20Array/) | Basic | Single-pass Scan | ✅ Complete |
| [LeetCode 27: Remove Element](./LeetCode/Remove%20Element/) | Easy | Two Pointers (In-place) | ✅ Complete |
| [LeetCode 26: Remove Duplicates](./LeetCode/Remove%20Duplicates%20from%20Sorted%20Array/) | Easy | Two Pointers (Fast/Slow) | ✅ Complete |
| [LeetCode 14: Longest Common Prefix](./LeetCode/Longest%20Common%20Prefix/) | Easy | Horizontal/Vertical Scanning | ✅ Complete |
| [LeetCode 877: Stone Game](./LeetCode/Stone%20Game/) | Medium | Minimax / DP / Game Theory | ✅ Complete |
| LeetCode 53: Maximum Subarray | Medium | Kadane's Algorithm | ⏳ To Do |
| LeetCode 75: Sort Colors | Medium | Dutch National Flag | ⏳ To Do |
| LeetCode 238: Product of Array Except Self | Medium | Prefix & Suffix Products | ⏳ To Do |
| LeetCode 42: Trapping Rain Water | Hard | Two Pointers / Monotonic Stack | ⏳ To Do |
