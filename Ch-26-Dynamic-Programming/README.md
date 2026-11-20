# Chapter 26: Dynamic Programming (DP)

> **Master overlapping subproblems, optimal substructure, memoization, and bottom-up tabulation.**  
> Dynamic Programming stores subproblem answers so overlapping work can be reused. A correct state and transition may still compute some states more than once in top-down implementations unless memoization is applied.

---

## 📌 Chapter Directory Structure

```text
Ch-26-Dynamic-Programming/
├── 01-Introduction-Memoization-vs-Tabulation/
├── 02-1D-DP/
├── 03-2D-and-Grid-DP/
├── 04-Knapsack-and-Subsets/
├── 05-String-DP/
├── 06-DP-on-Trees/
├── 07-Partition-DP-MCM/
├── 08-Bitmask-DP/
├── 08-LeetCode-Problems/
├── 09-Digit-DP/
├── README.md
└── .gitignore
```

---

## 🎯 The 5-Step DP Framework
1. **Identify the State:** What parameters define a subproblem? (e.g., `dp[i]`, `dp[i][j]`).
2. **Formulate the Recurrence Relation:** How does `dp[i]` transition from smaller subproblems?
3. **Identify Base Cases:** Smallest subproblems whose answers are trivial.
4. **Determine Evaluation Order:** Top-Down (Memoization) or Bottom-Up (Tabulation).
5. **Optimize Space:** Can we replace an $O(N)$ or $O(N \times M)$ table with a few variables or a 1D rolling array?

---

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../PRACTICE-TRACKER.md). LeetCode questions are linked below.


| Problem | Difficulty | DP Family | Status |
|---|---|---|:---:|
| [LeetCode 70: Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)| Easy | 1D DP (Fibonacci) | ⏳ To Do |
| [LeetCode 198: House Robber](https://leetcode.com/problems/house-robber/)| Medium | 1D DP (Include / Exclude) | ⏳ To Do |
| [LeetCode 322: Coin Change](https://leetcode.com/problems/coin-change/)| Medium | Unbounded Knapsack | ⏳ To Do |
| [LeetCode 300: Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)| Medium | 1D DP / Binary Search | ⏳ To Do |
| [LeetCode 62: Unique Paths](https://leetcode.com/problems/unique-paths/)| Medium | 2D Grid DP | ⏳ To Do |
| [LeetCode 64: Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)| Medium | 2D Grid DP | ⏳ To Do |
| [LeetCode 416: Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)| Medium | 0/1 Knapsack Decision | ⏳ To Do |
| [LeetCode 1143: Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)| Medium | 2-String 2D DP | ⏳ To Do |
| [LeetCode 72: Edit Distance](https://leetcode.com/problems/edit-distance/)| Medium | 2-String 2D DP | ⏳ To Do |
| [LeetCode 312: Burst Balloons](https://leetcode.com/problems/burst-balloons/)| Hard | Partition / Interval DP | ⏳ To Do |
