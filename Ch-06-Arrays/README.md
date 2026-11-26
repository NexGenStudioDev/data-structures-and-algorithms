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

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | LeetCode | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | Single-pass array scan | N/A | N/A | To Do |
| Easy | LeetCode | [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) | Array traversal / prefix sum | [Question](./LeetCode/Find%20Pivot%20Index/Question.md) | [Solution](./LeetCode/Find%20Pivot%20Index/doc/Approch1.md) | Completed |
| Easy | TakeUForward | [Largest Element](https://takeuforward.org/practice/dsa/largest-element?category=fundamentals&source=strivers-a2z-dsa-sheet) | Arrays | [Question](./LeetCode/Largest%20in%20Array/Question.md) | [Solution](./LeetCode/Largest%20in%20Array/Answer.md) | Completed |
| Easy | LeetCode | [Maximum Product of Two Elements in an Array](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/) | Single-pass array scan | N/A | N/A | To Do |
| Easy | LeetCode | [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) | Two-dimensional array construction | N/A | N/A | To Do |
| Easy | LeetCode | [Plus One](https://leetcode.com/problems/plus-one/) | Array traversal / carry handling | N/A | N/A | To Do |
| Easy | LeetCode | [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/) | Prefix sums | N/A | N/A | To Do |
| Easy | LeetCode | [Remove Duplicates](https://leetcode.com/problems/remove-duplicates-from-sorted-array) | Two Pointers (Fast/Slow) | [Question](./LeetCode/Remove%20Duplicates%20from%20Sorted%20Array/question.md) | [Solution](./LeetCode/Remove%20Duplicates%20from%20Sorted%20Array/answer.md) | Completed |
| Easy | LeetCode | [Remove Element](https://leetcode.com/problems/remove-element) | Two Pointers (In-place) | [Question](./LeetCode/Remove%20Element/question.md) | [Solution](./LeetCode/Remove%20Element/answer.md) | Completed |
| Easy | LeetCode | [Reshape the Matrix](https://leetcode.com/problems/reshape-the-matrix/) | Two-dimensional array indexing | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Reverse an Array](https://www.geeksforgeeks.org/problems/reverse-an-array/1) | Arrays | N/A | N/A | To Do |
| Easy | LeetCode | [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/) | Array traversal / prefix sum | N/A | N/A | To Do |
| Easy | LeetCode | [Two Sum](https://leetcode.com/problems/two-sum) | Hash Map Lookup | [Question](./LeetCode/Two%20Sum/Question.md) | [Solution](./LeetCode/Two%20Sum/Answer.md) | Completed |
| Easy | LeetCode | [Majority Element](https://leetcode.com/problems/majority-element/) | Boyer–Moore majority vote | N/A | N/A | To Do |
| Easy | LeetCode | [Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/) | Single-pass run counting | N/A | N/A | To Do |
| Easy | LeetCode | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) | Merge from the back / two pointers | N/A | N/A | To Do |
| Easy | LeetCode | [Third Maximum Number](https://leetcode.com/problems/third-maximum-number/) | Track three distinct maxima | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Sum of Array](https://www.geeksforgeeks.org/problems/sum-all-array-elements/1) | Array traversal / running sum | N/A | N/A | To Do |
| Medium | LeetCode | [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) | Array scan / running products | N/A | N/A | To Do |
| Medium | LeetCode | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray) | Kadane's Algorithm | N/A | N/A | To Do |
| Medium | LeetCode | [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/) | Array scan / circular Kadane pattern | N/A | N/A | To Do |
| Medium | LeetCode | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self) | Prefix & Suffix Products | N/A | N/A | To Do |
| Medium | LeetCode | [Rearrange Array Elements by Sign](https://leetcode.com/problems/rearrange-array-elements-by-sign/) | Arrays / alternating indices | [Question](./LeetCode/Rearrange%20Array%20Elements%20by%20Sign/Question.md) | [Solution 1](./LeetCode/Rearrange%20Array%20Elements%20by%20Sign/docs/Approch1.md) · [Solution 2](./LeetCode/Rearrange%20Array%20Elements%20by%20Sign/docs/Approch2.md) | Completed |
| Medium | LeetCode | [Rotate Array](https://leetcode.com/problems/rotate-array/) | In-place array rotation | N/A | N/A | To Do |
| Medium | LeetCode | [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) | Two-dimensional array transformation | N/A | N/A | To Do |
| Medium | LeetCode | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | Two-dimensional array traversal | N/A | N/A | To Do |
| Medium | LeetCode | [Game of Life](https://leetcode.com/problems/game-of-life/) | In-place 2D array simulation | N/A | N/A | To Do |
| Medium | LeetCode | [Rotate Image](https://leetcode.com/problems/rotate-image/) | In-place matrix transpose and reverse | N/A | N/A | To Do |
| Medium | LeetCode | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | Prefix sums / count subarrays | N/A | N/A | To Do |
