# 100. Same Tree

**Difficulty:** Easy  
**Topics:** Binary Tree, Recursion, Depth-First Search (DFS)

**Problem Link:** https://leetcode.com/problems/same-tree/

## Problem Statement

You are given two binary trees, `p` and `q`.

Your task is to check whether both trees are exactly the same or not.

Two binary trees are considered the same when:

1. Both trees have the same structure (nodes must be present at the same positions).
2. Every corresponding node in both trees has the same value.

In simple words, you need to compare two binary trees and check whether:
- Their root values are equal.
- Their left children are equal.
- Their right children are equal.
- All remaining nodes also have the same values and structure.

If both trees satisfy these conditions, return `true`. Otherwise, return `false`.

## Examples

### Example 1

**Input:**
```javascript
p = [1, 2, 3]
q = [1, 2, 3]
```

**Output:**
```javascript
true
```

**Explanation:**

Both trees have exactly the same structure and node values.

```text
Tree P:       Tree Q:

    1             1
   / \           / \
  2   3         2   3
```

Therefore, both trees are the same.

### Example 2

**Input:**
```javascript
p = [1, 2]
q = [1, null, 2]
```

**Output:**
```javascript
false
```

**Explanation:**

Both trees contain the same values, but their structures are different.

```text
Tree P:       Tree Q:

    1             1
   /               \
  2                 2
```

In the first tree, `2` is the left child of `1`.

In the second tree, `2` is the right child of `1`.

Therefore, both trees are not the same.

### Example 3

**Input:**
```javascript
p = [1, 2, 1]
q = [1, 1, 2]
```

**Output:**
```javascript
false
```

**Explanation:**

Both trees have the same structure, but their node values are different.

```text
Tree P:       Tree Q:

    1             1
   / \           / \
  2   1         1   2
```

The root values are equal, but the left and right child values are different.

Therefore, both trees are not the same.

## Constraints

- The number of nodes in both trees is between `0` and `100`.
- `-10⁴ <= Node.val <= 10⁴`.
- Both inputs are valid binary trees.

## Your Task

Implement a function that takes the roots of two binary trees, `p` and `q`, and returns:

- `true` if both trees have the same structure and values.
- `false` if their structures or values are different.