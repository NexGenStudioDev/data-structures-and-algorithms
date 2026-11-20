# Inorder Traversal

Inorder is a depth-first traversal of a **binary** tree. Visit the left child, then the current node, then the right child. For a binary search tree, this order visits values from smallest to largest (when the tree uses the usual increasing-order rule).

```js
function inorder(root, values = []) {
  if (root === null) return values;
  inorder(root.left, values);
  values.push(root.val);
  inorder(root.right, values);
  return values;
}
```

For `2` with left child `1` and right child `3`, the result is `[1, 2, 3]`. An empty tree returns `[]`.

**Time:** `O(n)` because each node is visited once. **Extra space:** `O(h)` for the recursive call stack, where `h` is the tree height. A skewed tree can have height `n`; an iterative traversal can use an explicit stack instead.

See the [traversals overview](../Readme.md) for preorder, postorder, and level-order traversal.
