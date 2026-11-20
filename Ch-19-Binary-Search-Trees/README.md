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

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | LeetCode | [Convert Sorted Array to BST](https://leetcode.com/problems/convert-sorted-array-to-bst) | Divide & Conquer Midpoint | N/A | N/A | To Do |
| Easy | LeetCode | [Search in a BST](https://leetcode.com/problems/search-in-a-bst) | Binary Search Property | N/A | N/A | To Do |
| Medium | TakeUForward | [Construct a BST from Preorder](https://takeuforward.org/practice/dsa/construct-a-bst-from-a-preorder-traversal) | Binary Search Trees (BST) | N/A | N/A | To Do |
| Medium | LeetCode | [Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst) | Three Deletion Cases | N/A | N/A | To Do |
| Medium | LeetCode | [Insert into a BST](https://leetcode.com/problems/insert-into-a-bst) | Traversal to Leaf | N/A | N/A | To Do |
| Medium | LeetCode | [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst) | Inorder Traversal Counter | N/A | N/A | To Do |
| Medium | LeetCode | [Lowest Common Ancestor of a BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-bst) | Directional Value Comparison | N/A | N/A | To Do |
| Medium | LeetCode | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree) | Range Invariant `(minVal, maxVal)` | N/A | N/A | To Do |
