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

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../PRACTICE-TRACKER.md). LeetCode questions are linked below.


| Problem | Difficulty | Technique | Status |
|---|---|---|:---:|
| [LeetCode 207: Course Schedule](https://leetcode.com/problems/course-schedule/)| Medium | Kahn's Algorithm / Cycle in DAG | ⏳ To Do |
| [LeetCode 210: Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)| Medium | Topological Ordering | ⏳ To Do |
| [LeetCode 743: Network Delay Time](https://leetcode.com/problems/network-delay-time/)| Medium | Dijkstra's Algorithm | ⏳ To Do |
| [LeetCode 787: Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)| Medium | Bellman-Ford / Modified Dijkstra | ⏳ To Do |
| [LeetCode 1584: Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)| Medium | Prim's / Kruskal's MST | ⏳ To Do |
| [LeetCode 1192: Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)| Hard | Tarjan's Bridge Finding | ⏳ To Do |
