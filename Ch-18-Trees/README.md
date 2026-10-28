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

| Problem | Difficulty | Subtopic | Status |
|---|---|---|:---:|
| LeetCode 102: Binary Tree Level Order Traversal | Medium | BFS with Queue | ⏳ To Do |
| LeetCode 104: Maximum Depth of Binary Tree | Easy | DFS / Height Calculation | ⏳ To Do |
| LeetCode 543: Diameter of Binary Tree | Easy | Bottom-up Postorder | ⏳ To Do |
| LeetCode 110: Balanced Binary Tree | Easy | Height Checking with Pruning | ⏳ To Do |
| LeetCode 100: Same Tree | Easy | Simultaneous DFS | ⏳ To Do |
| LeetCode 236: Lowest Common Ancestor | Medium | Postorder Discovery | ⏳ To Do |
| LeetCode 199: Binary Tree Right Side View | Medium | BFS Level End / DFS Reverse Preorder | ⏳ To Do |
| LeetCode 124: Binary Tree Maximum Path Sum | Hard | Subtree Contributions | ⏳ To Do |
