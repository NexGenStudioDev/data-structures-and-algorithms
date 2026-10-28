# Preorder Traversal — From Beginner to Confident

## 1. What is a binary tree?

A **binary tree** is made of nodes. Each node can have:

- A **value**
- A **left child**
- A **right child**

A node can have no children, one child, or two children.

```text
      1
     / \
    2   3
```

Here, `1` is the **root**—the top node. Nodes `2` and `3` are its children.

## 2. What is preorder traversal?

**Preorder traversal** is a way to visit every node in this order:

```text
ROOT → LEFT → RIGHT
```

For each node:

1. Visit the current node.
2. Traverse its left subtree.
3. Traverse its right subtree.

Here, **visit** means to do something with the node. In this problem, we add its value to a result array.

### Memory trick

**Preorder: parent first.**

The “Pre” means the current node is processed **before** its children.

---

## 3. Dry run using your screenshot

Your tree is:

```text
          1
        /   \
       2     3
      / \     \
     4   5     8
        / \   /
       6   7 9
```

We will follow **ROOT → LEFT → RIGHT** at every node.

### Start at node 1

- Visit `1`.
- Result: `[1]`
- Its left child is `2`, so traverse that subtree first.
- We will return to `1` later to explore its right child, `3`.

### At node 2

- Visit `2`.
- Result: `[1, 2]`
- First, go to its left child, `4`.

### At node 4

- Visit `4`.
- Result: `[1, 2, 4]`
- Node `4` has no left or right child.
- Its work is done, so the traversal returns to the previous node, `2`.

### Back at node 2

- We have finished the left child, `4`.
- Now explore the right child, `5`.

### At node 5

- Visit `5`.
- Result: `[1, 2, 4, 5]`
- First, go to its left child, `6`.

### At node 6

- Visit `6`.
- Result: `[1, 2, 4, 5, 6]`
- Node `6` has no children.
- Return to `5`.

### Back at node 5

- Its left subtree is finished.
- Now go to its right child, `7`.

### At node 7

- Visit `7`.
- Result: `[1, 2, 4, 5, 6, 7]`
- Node `7` has no children.
- Return to `5`, then to `2`, and then to `1`.

### Back at node 1

- The whole left subtree of `1` is finished.
- Now go to its right child, `3`.

### At node 3

- Visit `3`.
- Result: `[1, 2, 4, 5, 6, 7, 3]`
- Node `3` has no left child.
- Its right child is `8`, so go there.

### At node 8

- Visit `8`.
- Result: `[1, 2, 4, 5, 6, 7, 3, 8]`
- Node `8` has a left child, `9`.
- Go left to `9`.

### At node 9

- Visit `9`.
- Result: `[1, 2, 4, 5, 6, 7, 3, 8, 9]`
- Node `9` has no children. The traversal is finished.

### Final answer

```text
[1, 2, 4, 5, 6, 7, 3, 8, 9]
```

---

## 4. Why do we “go back” after a leaf?

A **leaf** is a node with no children. When we reach a leaf, that branch is finished. But there may be another branch to explore.

For example, at node `4`:

```text
    2
   / \
  4   5
```

After visiting `4`, preorder has finished the left side of `2`. It returns to `2` and continues with the right side, `5`.

The recursion keeps track of where to return. That tracking is done by the **call stack**. You don’t write a special “go back to the parent” command in the recursive code.

---

## 5. The code, line by line

```javascript
var preorderTraversal = function(root) {
    const ans = [];

    function traversal(curr) {
        if (curr === null) {
            return;
        }

        ans.push(curr.val);
        traversal(curr.left);
        traversal(curr.right);
    }

    traversal(root);
    return ans;
};
```

### `const ans = [];`

Creates an empty array to collect node values.

```javascript
[]
```

### `function traversal(curr)`

Defines a helper function. `curr` means **the current node** being processed.

The helper will be called repeatedly for different nodes.

### `if (curr === null) { return; }`

Checks whether there is a node to process.

For example, if node `4` has no left child, then `curr` becomes `null`. The function returns immediately because there is nothing to visit.

This is called the **base case**. It stops recursion from continuing forever.

### `ans.push(curr.val);`

Adds the current node’s value to the result.

This line comes **before** the child calls. That is what makes the traversal preorder.

### `traversal(curr.left);`

Recursively traverses the current node’s left subtree.

### `traversal(curr.right);`

After the left subtree is completely finished, recursively traverses the right subtree.

### `traversal(root);`

Starts the traversal at the root of the tree.

### `return ans;`

Returns the array containing the values in preorder.

---

## 6. How the recursive calls unfold

For the screenshot tree, the calls begin like this:

```text
traversal(1)
  visit 1
  traversal(2)
    visit 2
    traversal(4)
      visit 4
      traversal(null) → return
      traversal(null) → return
    traversal(5)
      visit 5
      traversal(6)
        visit 6
        traversal(null) → return
        traversal(null) → return
      traversal(7)
        visit 7
        traversal(null) → return
        traversal(null) → return
  traversal(3)
    visit 3
    traversal(null) → return
    traversal(8)
      visit 8
      traversal(9)
        visit 9
        traversal(null) → return
        traversal(null) → return
      traversal(null) → return
```

The indenting shows which calls happen inside other calls. When a call finishes, execution returns to the call that started it.

---

## 7. What does `TreeNode` mean?

LeetCode may show this definition:

```javascript
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
```

This defines what a tree node contains:

- `val` is the value in the node.
- `left` points to the left child.
- `right` points to the right child.
- If a child is not supplied, it defaults to `null`.

For example:

```javascript
const node = new TreeNode(5);
```

This makes a node like:

```text
  5
 / \
null null
```

A node can also be given children:

```javascript
const root = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(3)
);
```

That builds this tree:

```text
    1
   / \
  2   3
```

For LeetCode problems, you usually **do not need to create the nodes yourself**. LeetCode builds the tree and passes its root to your function. Your job is to traverse it.

---

## 8. Small example: `[1, null, 2, 3]`

LeetCode often describes a tree using an array. The example below represents this tree:

```text
    1
     \
      2
     /
    3
```

Its preorder traversal is:

1. Visit root `1`.
2. Visit left child of `1`: there is none.
3. Visit right child `2`.
4. Visit left child of `2`, which is `3`.
5. Visit right child of `2`: there is none.

**Output:**

```text
[1, 2, 3]
```

The `null` means a child is missing; it is not a value to add to the preorder result.

---

## 9. Why does line order matter?

Preorder code follows this exact pattern:

```javascript
visit current node;
traverse left;
traverse right;
```

In your code, that is:

```javascript
ans.push(curr.val);
traversal(curr.left);
traversal(curr.right);
```

If the visit line moved:

```javascript
traversal(curr.left);
ans.push(curr.val);
traversal(curr.right);
```

then the order would be **left → root → right**, which is inorder.

If it moved to the end:

```javascript
traversal(curr.left);
traversal(curr.right);
ans.push(curr.val);
```

then the order would be **left → right → root**, which is postorder.

---

## 10. Complexity

If the tree has `n` nodes:

- **Time:** `O(n)` — every node is visited once.
- **Extra space:** `O(h)` for the recursion call stack, where `h` is the tree’s height.
- The result array itself uses `O(n)` space.

A balanced tree has a smaller height than a very one-sided tree, so the recursion stack can be smaller for a balanced tree.

---

## 11. Practice problem

Try [Binary Tree Preorder Traversal on LeetCode](https://leetcode.com/problems/binary-tree-preorder-traversal/description/).

Before coding, ask yourself at each node:

1. Have I added this node’s value?
2. Have I finished its left subtree?
3. Have I finished its right subtree?

For your screenshot tree, remember:

```text
ROOT → LEFT → RIGHT
```

```text
[1, 2, 4, 5, 6, 7, 3, 8, 9]
```