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

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Medium | LeetCode | [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops) | Bellman-Ford / Modified Dijkstra | N/A | N/A | To Do |
| Medium | LeetCode | [Course Schedule II](https://leetcode.com/problems/course-schedule-ii) | Topological Ordering | N/A | N/A | To Do |
| Medium | LeetCode | [Course Schedule](https://leetcode.com/problems/course-schedule) | Kahn's Algorithm / Cycle in DAG | N/A | N/A | To Do |
| Medium | LeetCode | [Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points) | Prim's / Kruskal's MST | N/A | N/A | To Do |
| Medium | LeetCode | [Network Delay Time](https://leetcode.com/problems/network-delay-time) | Dijkstra's Algorithm | N/A | N/A | To Do |
| Medium | GeeksforGeeks | [Topological Sorting](https://www.geeksforgeeks.org/dsa/topological-sorting) | Advanced Graph Algorithms | N/A | N/A | To Do |
| Hard | LeetCode | [Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network) | Tarjan's Bridge Finding | N/A | N/A | To Do |
