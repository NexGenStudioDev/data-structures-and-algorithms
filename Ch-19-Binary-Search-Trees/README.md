# Chapter 19: Binary Search Trees (BST)

> **Ordered hierarchical data structures providing $O(\log N)$ average search, insert, and delete.**  
> For every node in a BST, all values in its left subtree are strictly smaller, and all values in its right subtree are strictly greater.

---

## 📌 Chapter Directory Structure

```text
Ch-19-Binary-Search-Trees/
├── 01-BST-Basics-and-Properties/
├── 02-BST-Operations-Insert-Delete-Search/
├── 03-Validation-and-LCA/
├── 04-Self-Balancing-Trees-AVL-and-Red-Black/
├── 05-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 The Three Deletion Cases in a BST
When deleting node $Z$:
1. **Node is a Leaf (No Children):** Simply remove the pointer from its parent ($O(1)$).
2. **Node has One Child:** Replace node $Z$ with its sole child.
3. **Node has Two Children:**
   - Find $Z$'s **inorder successor** (the minimum value in $Z$'s right subtree).
   - Copy the successor's value into $Z$.
   - Recursively delete the successor from the right subtree (which has at most one child).

---

## 📝 Practice Roadmap

| Problem | Difficulty | Key Pattern | Status |
|---|---|---|:---:|
| LeetCode 700: Search in a BST | Easy | Binary Search Property | ⏳ To Do |
| LeetCode 701: Insert into a BST | Medium | Traversal to Leaf | ⏳ To Do |
| LeetCode 450: Delete Node in a BST | Medium | Three Deletion Cases | ⏳ To Do |
| LeetCode 98: Validate Binary Search Tree | Medium | Range Invariant `(minVal, maxVal)` | ⏳ To Do |
| LeetCode 235: Lowest Common Ancestor of a BST | Medium | Directional Value Comparison | ⏳ To Do |
| LeetCode 230: Kth Smallest Element in a BST | Medium | Inorder Traversal Counter | ⏳ To Do |
| LeetCode 108: Convert Sorted Array to BST | Easy | Divide & Conquer Midpoint | ⏳ To Do |
