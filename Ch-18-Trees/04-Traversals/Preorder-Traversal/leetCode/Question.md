# 144. Binary Tree Preorder Traversal

- **Platform:** LeetCode
- **Difficulty:** Easy
- **Topics:** Tree, Depth-First Search (DFS), Stack, Binary Tree
- **Problem Type:** Tree Traversal

---

https://leetcode.com/problems/binary-tree-preorder-traversal/description/

## Problem Statement

Given the `root` of a binary tree, return the **preorder traversal** of its nodes' values.

In preorder traversal, nodes are visited in the following order:

1. **Root:** Visit the current node and store its value.
2. **Left:** Traverse the entire left subtree.
3. **Right:** Traverse the entire right subtree.

The traversal must start from the root node and visit every existing node exactly once.

If the binary tree is empty (`root = null`), return an empty array.

## Examples

### Example 1

**Input:**
```javascript
root = [1, null, 2, 3]
```

**Output:**
```javascript
[1, 2, 3]
```

**Explanation:**

The given binary tree is:

```text
    1
     \
      2
     /
    3
```

Following preorder traversal:

1. Visit node `1` (Root).
2. The left subtree of `1` is empty.
3. Visit node `2` (Right).
4. Visit node `3` (Left child of `2`).

The final traversal is `[1, 2, 3]`.

### Example 2

**Input:**
```javascript
root = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]
```

**Output:**
```javascript
[1, 2, 4, 5, 6, 7, 3, 8, 9]
```

**Explanation:**

The given binary tree is:

```text
              1
             / \
            2   3
           / \   \
          4   5   8
             / \  /
            6   7 9
```

Following preorder traversal:

1. Visit root node `1`.
2. Traverse the left subtree:
   - Visit `2`.
   - Visit `4`.
   - Visit `5`.
   - Visit `6`.
   - Visit `7`.
3. Traverse the right subtree:
   - Visit `3`.
   - Visit `8`.
   - Visit `9`.

The final traversal is `[1, 2, 4, 5, 6, 7, 3, 8, 9]`.

### Example 3

**Input:**
```javascript
root = []
```

**Output:**
```javascript
[]
```

**Explanation:**

The binary tree is empty, so there are no nodes to visit. Return an empty array.

### Example 4

**Input:**
```javascript
root = [1]
```

**Output:**
```javascript
[1]
```

**Explanation:**

The binary tree contains only one node, which is the root. Therefore, its preorder traversal is `[1]`.

---

## Constraints

- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

---

## Additional Information

- The input is provided as the root node of a binary tree.
- The tree may be empty.
- Each node can have zero, one, or two children.
- Negative, positive, and zero values are allowed.
- The output must be an array containing the node values in preorder order.
- Every existing node must appear exactly once in the result.

## Follow-up

A recursive solution is straightforward. Could you solve this problem **iteratively**, without using recursion?

---

## Expected Understanding

Before implementing the solution, make sure you understand:

- What is a binary tree?
- What are root, left child, and right child?
- What is preorder traversal?
- What is the difference between recursive and iterative traversal?
- How can a stack be used to traverse a binary tree?

**Traversal Order:**

```text
ROOT → LEFT → RIGHT
```