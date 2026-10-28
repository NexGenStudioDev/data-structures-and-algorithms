# Chapter 23: Advanced Graph Algorithms

> **Topological sorting, shortest path algorithms, minimum spanning trees, and network bridges.**

---

## 📌 Chapter Directory Structure

```text
Ch-23-Advanced-Graph-Algorithms/
├── 01-Topological-Sort-and-Kahns/
├── 02-Shortest-Paths-Dijkstra-Bellman-Floyd/
├── 03-Minimum-Spanning-Trees/
├── 04-Bridges-and-SCC/
├── 05-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 Shortest Path Algorithms Comparison

| Algorithm | Graph Type | Weights | Time Complexity | Space |
|---|---|---|---|---|
| **BFS** | Directed / Undirected | Unweighted | $O(V + E)$ | $O(V)$ |
| **Dijkstra** | Directed / Undirected | Non-negative only | $O((V + E) \log V)$ | $O(V)$ |
| **Bellman-Ford** | Directed / Undirected | Negative weights allowed | $O(V \cdot E)$ | $O(V)$ |
| **Floyd-Warshall** | Directed / Undirected | All pairs, no negative cycles | $O(V^3)$ | $O(V^2)$ |

---

## 📝 Practice Roadmap

| Problem | Difficulty | Technique | Status |
|---|---|---|:---:|
| LeetCode 207: Course Schedule | Medium | Kahn's Algorithm / Cycle in DAG | ⏳ To Do |
| LeetCode 210: Course Schedule II | Medium | Topological Ordering | ⏳ To Do |
| LeetCode 743: Network Delay Time | Medium | Dijkstra's Algorithm | ⏳ To Do |
| LeetCode 787: Cheapest Flights Within K Stops | Medium | Bellman-Ford / Modified Dijkstra | ⏳ To Do |
| LeetCode 1584: Min Cost to Connect All Points | Medium | Prim's / Kruskal's MST | ⏳ To Do |
| LeetCode 1192: Critical Connections in a Network | Hard | Tarjan's Bridge Finding | ⏳ To Do |
