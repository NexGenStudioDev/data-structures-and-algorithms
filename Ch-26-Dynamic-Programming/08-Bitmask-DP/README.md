# Bitmask Dynamic Programming

> **Solve exponential subset and state permutation problems efficiently.**  
> A bitmask represents which items are chosen using a binary integer (`1` = included, `0` = excluded).

---

## 🎯 Canonical Problem: Traveling Salesperson Problem (TSP)
- State: `dp[mask][u]` = minimum cost to visit the set of cities represented by `mask`, currently at city `u`.
- Transitions: Iterate over all unvisited cities $v$ (where `(mask & (1 << v)) == 0`).
- Time Complexity: $O(2^N \times N^2)$ instead of $O(N!)$ brute force.
