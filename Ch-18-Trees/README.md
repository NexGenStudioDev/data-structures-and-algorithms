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

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | LeetCode | [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree) | Height Checking with Pruning | N/A | N/A | To Do |
| Easy | LeetCode | [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal) | Tree traversal | [Question](./04-Traversals/Inorder%20Traversal/leetCode/Question.md) | [Solution](./04-Traversals/Inorder%20Traversal/leetCode/Solution.md) | Completed |
| Easy | LeetCode | [Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal) | Tree traversal | N/A | N/A | To Do |
| Easy | LeetCode | [Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal) | Tree traversal | [Question](./04-Traversals/Preorder-Traversal/leetCode/Question.md) | [Solution](./04-Traversals/Preorder-Traversal/leetCode/Answer.md) | Completed |
| Easy | LeetCode | [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree) | Bottom-up Postorder | N/A | N/A | To Do |
| Easy | LeetCode | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree) | DFS / Height Calculation | N/A | N/A | To Do |
| Easy | LeetCode | [Same Tree](https://leetcode.com/problems/same-tree/) | Recursive tree comparison | [Question](./05-LeetCode-Questions/Same%20Tree/Question.md) | [Solution](./05-LeetCode-Questions/Same%20Tree/Solution.md) | Completed |
| Medium | LeetCode | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal) | Tree traversal | N/A | N/A | To Do |
| Medium | LeetCode | [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view) | BFS Level End / DFS Reverse Preorder | N/A | N/A | To Do |
| Medium | LeetCode | [Lowest Common Ancestor](https://leetcode.com/problems/lowest-common-ancestor) | Postorder Discovery | N/A | N/A | To Do |
| Hard | LeetCode | [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum) | Subtree Contributions | N/A | N/A | To Do |
