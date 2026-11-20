# Chapter 18: Binary Trees

> **Master hierarchical non-linear structures, recursive traversal mechanics, and tree properties.**  
> A binary tree is a non-linear data structure where each node has at most two children (left and right).

---

## 📌 Chapter Directory Structure

```text
Ch-18-Trees/
├── 01-Introduction-to-Tree/
├── 02-Tree-Terminology-and-Key-Concepts/
├── 03-Tree-Types/
├── 04-Traversals/
│   ├── Image/
│   ├── Preorder-Traversal/
│   └── Readme.md
├── 05-LeetCode-Questions/
├── README.md
└── .gitignore
```

---

## 🎯 Master Traversals Summary

Use the [Binary Tree Traversal Practice Tracker](./04-Traversals/Practice-Tracker.md) for traversal-only questions, difficulty groups, external question links, and local solution status.

```text
       1
      / \
     2   3
    / \
   4   5
```

1. **Preorder (Root → Left → Right):** `1 → 2 → 4 → 5 → 3` (Used for serialization, cloning, prefix expressions).
2. **Inorder (Left → Root → Right):** `4 → 2 → 5 → 1 → 3` (Sorted order in BSTs).
3. **Postorder (Left → Right → Root):** `4 → 5 → 2 → 3 → 1` (Used for deletion, bottom-up calculations like tree height).
4. **Level-Order (Breadth-First Search):** `1 → 2 → 3 → 4 → 5` (Queue-based, level-by-level).

---

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../PRACTICE-TRACKER.md). LeetCode questions are linked below.


| Problem | Difficulty | Subtopic | Status |
|---|---|---|:---:|
| [LeetCode 104: Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)| Easy | DFS / Height Calculation | ⏳ To Do |
| [LeetCode 543: Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)| Easy | Bottom-up Postorder | ⏳ To Do |
| [LeetCode 110: Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)| Easy | Height Checking with Pruning | ⏳ To Do |
| [LeetCode 100: Same Tree](./05-LeetCode-Questions/Same%20Tree/Question.md) | Easy | Simultaneous DFS | ✅ Completed · [Solution](./05-LeetCode-Questions/Same%20Tree/Solution.md) |
| [LeetCode 236: Lowest Common Ancestor](https://leetcode.com/problems/lowest-common-ancestor/)| Medium | Postorder Discovery | ⏳ To Do |
| [LeetCode 199: Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)| Medium | BFS Level End / DFS Reverse Preorder | ⏳ To Do |
| [LeetCode 124: Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)| Hard | Subtree Contributions | ⏳ To Do |
