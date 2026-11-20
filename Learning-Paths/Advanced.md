# Advanced Path

**Prerequisites:** Complete the Intermediate path or be able to reason about recursion, trees, graphs, hash-based structures, and asymptotic complexity.

**Goal:** Design and justify solutions for problems with larger state spaces, stronger constraints, or more specialized operations.

| Order | Chapter | Focus | Checkpoint |
|---:|---|---|---|
| 17 | [Backtracking](../Ch-17-Backtracking/README.md) | Search state, choices, undo, and pruning | Define the state and show why each choice is explored or pruned. |
| 19 | [Binary Search Trees](../Ch-19-Binary-Search-Trees/README.md) | Ordering invariants, updates, and balance | Explain how tree shape affects operation costs and validate the BST invariant. |
| 20 | [Heaps and Priority Queues](../Ch-20-Heaps-and-Priority-Queues/README.md) | Heap invariant, heapify, and priority work | Select a heap operation for a top-K or scheduling task and state its cost. |
| 21 | [Tries](../Ch-21-Tries/README.md) | Prefix indexing and bitwise tries | Relate operation cost to key length and explain the memory trade-off. |
| 22 | [Graphs: Basics and Traversal](../Ch-22-Graphs-Basics-and-Traversal/README.md) | Representations, BFS, DFS, and components | Select a graph representation and justify its space and traversal costs. |
| 23 | [Advanced Graph Algorithms](../Ch-23-Advanced-Graph-Algorithms/README.md) | Topological order, shortest paths, and spanning trees | Match algorithm preconditions to graph direction, weights, and constraints. |
| 24 | [Disjoint Set Union](../Ch-24-Disjoint-Set-Union-DSU/README.md) | Connectivity, union, and amortized operations | Explain what path compression and union-by-rank improve. |
| 25 | [Greedy Algorithms](../Ch-25-Greedy-Algorithms/README.md) | Local choices and correctness arguments | Give a correctness argument or counterexample for a greedy choice. |
| 26 | [Dynamic Programming](../Ch-26-Dynamic-Programming/README.md) | State design, recurrences, memoization, and tabulation | Define the state and recurrence before writing code. |
| 27 | [Bit Manipulation](../Ch-27-Bit-Manipulation/README.md) | Bitwise operations and bitmask state | Account for JavaScript's 32-bit bitwise operators and use `BigInt` where needed. |
| 28 | [Advanced Data Structures](../Ch-28-Advanced-Data-Structures/README.md) | Segment trees, Fenwick trees, sparse tables, and probabilistic structures | Choose a range-query structure based on updates, queries, and operation costs. |
| 30 | [Math and Number Theory](../Ch-30-Math-and-Number-Theory-for-DSA/README.md) | GCD, primes, modular arithmetic, and combinatorics | State numeric bounds and avoid precision loss in JavaScript calculations. |

Use [Chapter 29: DSA Patterns and Interview Roadmap](../Ch-29-DSA-Patterns-and-Interview-Roadmap/README.md) alongside this path for spaced practice and interview preparation.

**Completion checkpoint:** For each solution, identify the key invariant or recurrence, justify correctness, analyze time and auxiliary space, and state the input assumptions that matter.
