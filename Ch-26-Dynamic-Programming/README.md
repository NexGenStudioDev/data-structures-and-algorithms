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

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | LeetCode | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs) | 1D DP (Fibonacci) | N/A | N/A | To Do |
| Medium | GeeksforGeeks | [Coin Change (Count Ways)](https://www.geeksforgeeks.org/problems/coin-change2448/1) | Dynamic programming / unbounded choices | N/A | N/A | To Do |
| Medium | LeetCode | [Coin Change](https://leetcode.com/problems/coin-change) | Unbounded Knapsack | N/A | N/A | To Do |
| Medium | LeetCode | [Edit Distance](https://leetcode.com/problems/edit-distance) | 2-String 2D DP | N/A | N/A | To Do |
| Medium | LeetCode | [House Robber](https://leetcode.com/problems/house-robber) | 1D DP (Include / Exclude) | N/A | N/A | To Do |
| Medium | LeetCode | [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence) | 2-String 2D DP | N/A | N/A | To Do |
| Medium | LeetCode | [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence) | 1D DP / Binary Search | N/A | N/A | To Do |
| Medium | LeetCode | [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum) | 2D Grid DP | N/A | N/A | To Do |
| Medium | LeetCode | [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum) | 0/1 Knapsack Decision | N/A | N/A | To Do |
| Medium | LeetCode | [Unique Paths](https://leetcode.com/problems/unique-paths) | 2D Grid DP | N/A | N/A | To Do |
| Hard | LeetCode | [Burst Balloons](https://leetcode.com/problems/burst-balloons) | Partition / Interval DP | N/A | N/A | To Do |
