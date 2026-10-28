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

| Problem | Difficulty | Category | Status |
|---|---|---|:---:|
| LeetCode 200: Number of Islands | Medium | Grid Connected Components (DFS/BFS) | ⏳ To Do |
| LeetCode 133: Clone Graph | Medium | Graph Copy via BFS/DFS with Map | ⏳ To Do |
| LeetCode 695: Max Area of Island | Medium | Grid Flood Fill | ⏳ To Do |
| LeetCode 733: Flood Fill | Easy | DFS / BFS Color Spread | ⏳ To Do |
| LeetCode 785: Is Graph Bipartite? | Medium | 2-Coloring via BFS/DFS | ⏳ To Do |
| LeetCode 994: Rotting Oranges | Medium | Multi-source BFS | ⏳ To Do |
| LeetCode 547: Number of Provinces | Medium | Connected Components | ⏳ To Do |
