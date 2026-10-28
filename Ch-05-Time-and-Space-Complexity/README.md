# Chapter 05: Time and Space Complexity & Input Constraints

> **Master the mathematical backbone of algorithm efficiency.**  
> Being able to calculate time and space complexity instantly is the #1 skill tested in software engineering interviews.

---

## 📌 Chapter Directory Structure

```text
Ch-05-Time-and-Space-Complexity/
├── Time-Complexity/
│   ├── 01_What-is-Time-Complexity.md
│   ├── 02_Mastering-Time-Complexity.md
│   └── Images/
├── Constraints-in-DSA/
│   └── README.md
├── README.md
└── .gitignore
```

---

## 🎯 What You Will Master in This Chapter

1. **Why Wall-Clock Time Fails:** Understanding hardware differences, OS interrupts, background processes, and CPU architectures.
2. **Asymptotic Analysis:**
   - **Big-O ($O$):** Worst-case upper bound.
   - **Big-Omega ($\Omega$):** Best-case lower bound.
   - **Big-Theta ($\Theta$):** Tight bound (average case when upper = lower).
3. **Common Complexity Classes (From Fastest to Slowest):**
   - $O(1)$ - Constant Time (Array index lookup, Hash Map lookup on average)
   - $O(\log N)$ - Logarithmic Time (Binary Search, Balanced BST operations)
   - $O(N)$ - Linear Time (Traversing an array/string, Linear Search)
   - $O(N \log N)$ - Linearithmic Time (Merge Sort, Quick Sort average, Heap Sort)
   - $O(N^2)$ - Quadratic Time (Nested loops, Bubble Sort, Selection Sort)
   - $O(N^3)$ - Cubic Time (Matrix multiplication naive)
   - $O(2^N)$ - Exponential Time (Power set, Recursive Fibonacci without memoization)
   - $O(N!)$ - Factorial Time (Generating all permutations of an array)
4. **Input Constraints & The $10^8$ Operations Rule:**
   - Standard online judges (LeetCode, Codeforces, HackerRank) allow approximately **$10^8$ operations per second** for a 1.0-second time limit.
   - **$N \le 10$ to $12$:** $O(N!)$ or $O(N^2 \cdot 2^N)$ (Permutations, Traveling Salesman DP)
   - **$N \le 20$ to $25$:** $O(2^N)$ (Backtracking, Bitmask DP)
   - **$N \le 100$:** $O(N^4)$ or $O(N^3)$ (Floyd-Warshall, 3-loop brute force)
   - **$N \le 500$ to $1000$:** $O(N^2)$ (Nested loops, 2D DP)
   - **$N \le 10^5$ to $10^6$:** $O(N \log N)$ or $O(N)$ (Sorting, Binary Search, Sliding Window, Linear scan)
   - **$N \ge 10^9$:** $O(\log N)$ or $O(1)$ (Mathematical formula, Binary Search on range, Bit tricks)

---

## 🧠 Quick Complexity Calculation Cheatsheet

| Code Pattern | Typical Time Complexity | Typical Space Complexity |
|---|---|---|
| Single loop from 1 to $N$ with step +1 | $O(N)$ | $O(1)$ |
| Loop with step `i *= 2` | $O(\log N)$ | $O(1)$ |
| Nested loop `for i: 1..N; for j: 1..N` | $O(N^2)$ | $O(1)$ |
| Triangular nested loop `for i: 1..N; for j: i..N` | $O(N^2 / 2) = O(N^2)$ | $O(1)$ |
| Recursive function with 1 call `T(n) = T(n-1) + O(1)` | $O(N)$ | $O(N)$ (Call stack) |
| Divide and conquer `T(n) = 2T(n/2) + O(n)` | $O(N \log N)$ | $O(\log N)$ or $O(N)$ |
| Branching recursion `T(n) = 2T(n-1) + O(1)` | $O(2^N)$ | $O(N)$ (Stack depth) |

---

## 📚 Study Next
Proceed to [Ch-06-Arrays](../Ch-06-Arrays/README.md) to apply time and space complexity analysis on fundamental linear data structures.
