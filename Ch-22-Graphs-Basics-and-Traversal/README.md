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

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | GeeksforGeeks | [BFS of Graph](https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1) | Graphs (Basics & Traversal) | N/A | N/A | To Do |
| Easy | LeetCode | [Flood Fill](https://leetcode.com/problems/flood-fill) | DFS / BFS Color Spread | N/A | N/A | To Do |
| Medium | LeetCode | [Clone Graph](https://leetcode.com/problems/clone-graph) | Graph Copy via BFS/DFS with Map | N/A | N/A | To Do |
| Medium | LeetCode | [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite) | 2-Coloring via BFS/DFS | N/A | N/A | To Do |
| Medium | LeetCode | [Max Area of Island](https://leetcode.com/problems/max-area-of-island) | Grid Flood Fill | N/A | N/A | To Do |
| Medium | LeetCode | [Number of Islands](https://leetcode.com/problems/number-of-islands) | Grid Connected Components (DFS/BFS) | N/A | N/A | To Do |
| Medium | LeetCode | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges) | Multi-source BFS | N/A | N/A | To Do |
| Medium | GeeksforGeeks | [Topological Sorting](https://www.geeksforgeeks.org/dsa/topological-sorting/) | Directed graph traversal / ordering | N/A | N/A | To Do |
