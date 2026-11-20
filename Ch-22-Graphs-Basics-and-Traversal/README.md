# Chapter 22: Graphs (Basics & Traversal)

> **Master vertices, edges, adjacency representations, and foundational graph traversals.**  
> A graph $G = (V, E)$ consists of a set of vertices $V$ connected by a set of edges $E$.

---

## 📌 Chapter Directory Structure

```text
Ch-22-Graphs-Basics-and-Traversal/
├── 01-Graph-Representations/
├── 02-Breadth-First-Search-BFS/
├── 03-Depth-First-Search-DFS/
├── 04-Cycle-Detection/
├── 05-Connected-Components-and-Bipartite/
├── 06-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 Adjacency Matrix vs Adjacency List

| Feature | Adjacency Matrix | Adjacency List |
|---|---|---|
| Space Complexity | $O(V^2)$ | $O(V + E)$ |
| Check if edge $(u, v)$ exists | $O(1)$ | $O(\text{deg}(u))$ |
| Find all neighbours of $u$ | $O(V)$ | $O(\text{deg}(u))$ |
| Optimal for | Dense graphs ($E \approx V^2$) | Sparse graphs ($E \ll V^2$) |

---

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../PRACTICE-TRACKER.md). LeetCode questions are linked below.


| Problem | Difficulty | Category | Status |
|---|---|---|:---:|
| [LeetCode 200: Number of Islands](https://leetcode.com/problems/number-of-islands/)| Medium | Grid Connected Components (DFS/BFS) | ⏳ To Do |
| [LeetCode 133: Clone Graph](https://leetcode.com/problems/clone-graph/)| Medium | Graph Copy via BFS/DFS with Map | ⏳ To Do |
| [LeetCode 695: Max Area of Island](https://leetcode.com/problems/max-area-of-island/)| Medium | Grid Flood Fill | ⏳ To Do |
| [LeetCode 733: Flood Fill](https://leetcode.com/problems/flood-fill/)| Easy | DFS / BFS Color Spread | ⏳ To Do |
| [LeetCode 785: Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)| Medium | 2-Coloring via BFS/DFS | ⏳ To Do |
| [LeetCode 994: Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)| Medium | Multi-source BFS | ⏳ To Do |
