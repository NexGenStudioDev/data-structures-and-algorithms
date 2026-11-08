# Intuition

To solve this problem, we need to understand how **Inorder Traversal** works in a Binary Tree.

A binary tree is a data structure where each node can have at most two children:
- Left child
- Right child

The problem asks us to visit every node of the binary tree and return its value in a specific order.

That order is called **Inorder Traversal**.

Inorder Traversal follows three simple steps:

**Left → Root → Right**

1. **Left:** First, visit the left subtree of the current node. We must completely traverse the left subtree before moving to the next step.
2. **Root:** After completing the left subtree, visit the current node and store its value in the result array.
3. **Right:** Finally, visit the right subtree of the current node.

We repeat these same three steps for every node in the tree.

### Why do we use Recursion?

A binary tree is made up of smaller binary trees called subtrees.

For example, the left child of the root can itself be the root of another binary tree. The same is true for the right child.

This makes recursion a natural way to solve the problem.

We create a helper function that processes one node at a time. This function calls itself to traverse the left and right children.

We also maintain an array called `result` to store the visited node values in the correct order.

**Important:** If the current node is `null`, it means that there is no node to visit. We simply return from that recursive call. This condition is called the **Base Case**.

Once all nodes have been visited, we return the result array.

---

# Approach

We can solve this problem using **Recursive Depth First Search (DFS)**.

Our approach is simple: visit the left subtree first, then the current node, and finally the right subtree.

Let's understand the complete approach step by step.

### Step 1: Create an empty result array

First, initialize an empty array to store the values of the nodes in inorder traversal.

```javascript
let result = [];
```

Initially, the array is empty:

```javascript
result = [];
```

Whenever we visit a node, we add its value to this array using `push()`.

For example:

```javascript
result.push(10);
```

Now the array becomes:

```javascript
result = [10];
```

### Step 2: Handle the empty binary tree

Before starting the traversal, check whether the root is `null`.

```javascript
if (!root) return result;
```

Why do we need this condition?

If the root is `null`, it means the binary tree does not contain any nodes.

For example:

```text
root = null
```

There is nothing to traverse, so we directly return the empty array.

Output:

```javascript
[];
```

This also handles the edge case where the input tree is empty.

### Step 3: Create a recursive helper function

Now, create a helper function called `traverse()`.

```javascript
function traverse(node) {

}
```

This function receives the current node as an argument.

For every node, we perform three operations in the following order:

**1. Left – Traverse the left subtree**

```javascript
traverse(node.left);
```

First, we recursively call the function for the left child.

The function keeps moving towards the left until it reaches a `null` node.

After reaching `null`, that recursive call returns, and the previous function call continues executing.

**2. Root – Visit the current node**

```javascript
result.push(node.val);
```

After completely traversing the left subtree, we visit the current node.

We store its value inside the `result` array.

For example, if the current node contains `5`, then:

```javascript
result.push(5);
```

The result array becomes:

```javascript
[5];
```

**3. Right – Traverse the right subtree**

```javascript
traverse(node.right);
```

After visiting the current node, we recursively traverse its right subtree.

This means we repeat the same process:

- First, traverse the right child's left subtree.
- Then, visit the right child.
- Finally, traverse the right child's right subtree.

In this way, every node follows the same inorder traversal rule.

### Step 4: Add the Base Case

Inside the recursive helper function, we need a condition to stop recursion when there is no node.

```javascript
if (node === null) {
    return;
}
```

Why is this necessary?

Consider a leaf node:

```text
    5
```

A leaf node does not have any children.

Its structure is:

```javascript
{
    val: 5,
    left: null,
    right: null
}
```

When we call:

```javascript
traverse(node.left);
```

The function receives `null`.

Without the base case, the code would try to access:

```javascript
node.left
```

on a `null` value, resulting in an error.

Therefore, whenever the current node is `null`, we immediately return.

**Remember:** The base case prevents unnecessary recursive calls and stops the recursion correctly.

### Step 5: Start traversal from the root

After creating the helper function, we need to call it with the root node.

```javascript
traverse(root);
```

This starts the entire traversal process.

The helper function will automatically visit all nodes by recursively exploring their left and right subtrees.

### Step 6: Return the final result

After all recursive calls finish, every node value will have been added to the result array.

```javascript
return result;
```

Now we return the final inorder traversal.

---

# Dry Run – Step-by-Step Execution

Let's understand how our code works internally using the example provided in the problem.

### Input

```javascript
root = [1, null, 2, 3];
```

This array represents the following binary tree:

```text
       1
        \
         2
        /
       3
```

Our goal is to return:

```javascript
[1, 3, 2];
```

We follow:

**Left → Root → Right**

### Initial State

Before starting the traversal:

```javascript
result = [];
```

We call:

```javascript
traverse(root);
```

The current node is `1`.

### Step 1: Start with node 1

```text
       1
        \
         2
        /
       3
```

We execute:

```javascript
traverse(node.left);
```

Node `1` does not have a left child.

Therefore:

```javascript
traverse(null);
```

The base case executes, and this recursive call returns.

Now we execute:

```javascript
result.push(1);
```

The result becomes:

```javascript
result = [1];
```

We have completed the left and root operations for node `1`.

Next, we move to its right child:

```javascript
traverse(node.right);
```

Now the current node is `2`.

### Step 2: Process node 2

```text
       1
        \
         2
        /
       3
```

We are now processing node `2`.

According to inorder traversal, we must first complete its left subtree.

We execute:

```javascript
traverse(2.left);
```

Node `2` has a left child with value `3`.

Therefore, the function calls:

```javascript
traverse(3);
```

### Step 3: Process node 3

```text
       3
```

Now we are processing node `3`.

First, we check its left child:

```javascript
traverse(3.left);
```

Its left child is `null`, so the recursive call returns.

Now we visit node `3`:

```javascript
result.push(3);
```

The result becomes:

```javascript
result = [1, 3];
```

Finally, we check its right child:

```javascript
traverse(3.right);
```

Its right child is also `null`, so this recursive call returns.

Node `3` is completely processed.

### Step 4: Return to node 2

This is an important part of recursion.

After completing node `3`, the function returns to the previous function call, which was processing node `2`.

We have already completed the left subtree of node `2`.

Now it is time to visit node `2` itself.

We execute:

```javascript
result.push(2);
```

The result becomes:

```javascript
result = [1, 3, 2];
```

Next, we check the right child of node `2`.

```javascript
traverse(2.right);
```

Its right child is `null`, so the recursive call returns.

Node `2` is now completely processed.

### Step 5: Return to node 1

We return to the original function call for node `1`.

Its right subtree has now been completely processed.

There is nothing else to visit.

Therefore, the traversal is complete.

### Final Output

```javascript
[1, 3, 2]
```

### Dry Run Summary

| Step | Current Node | Operation | Result |
|---|---:|---|---|
| 1 | 1 | Visit Root | `[1]` |
| 2 | 1 | Move Right to 2 | `[1]` |
| 3 | 2 | Move Left to 3 | `[1]` |
| 4 | 3 | Visit Root | `[1, 3]` |
| 5 | 2 | Visit Root | `[1, 3, 2]` |
| 6 | 2 | Move Right (null) | `[1, 3, 2]` |
| 7 | 1 | Traversal Complete | `[1, 3, 2]` |

---

# Understanding the Recursive Function

The most important part of this solution is the order of these three lines:

```javascript
traverse(node.left);   // 1. Left
result.push(node.val); // 2. Root
traverse(node.right);  // 3. Right
```

Why does the order matter?

Because the position of the current node determines which type of tree traversal we are performing.

| Traversal | Execution Order |
|---|---|
| Preorder | Root → Left → Right |
| Inorder | Left → Root → Right |
| Postorder | Left → Right → Root |

For this problem, we must always process the left subtree before the root, and the root before the right subtree.

**That is why we write the recursive calls in this exact order.**

---

# Complexity

Let `n` represent the total number of nodes in the binary tree, and `h` represent the height of the tree.

### Time Complexity: O(n)

We visit every node exactly once.

At each node, we perform constant-time operations:

1. Access the left child.
2. Access the current node's value.
3. Add the value to the result array.
4. Access the right child.

Since there are `n` nodes and each node is processed only once, the total time complexity is:

**O(n)**

### Space Complexity: O(h) Auxiliary Space

We use recursion, and every recursive function call is stored in the JavaScript call stack until it finishes.

The maximum number of active recursive calls depends on the height of the tree.

- **Balanced Binary Tree:** O(log n), because its height is approximately log n.
- **Skewed Binary Tree:** O(n), because its height can become equal to the number of nodes.

The result array also requires O(n) space because it stores all node values.

Therefore:

- Auxiliary space (excluding output): O(h)
- Total space (including output): O(n)

---

# Final Code

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function (root) {

    // Store the inorder traversal values
    let result = [];

    // If the tree is empty, return an empty array
    if (!root) return result;

    // Recursive function to traverse the binary tree
    function traverse(node) {

        // Base Case: Stop if the current node is null
        if (!node) return;

        // 1. Left: Traverse the complete left subtree
        traverse(node.left);

        // 2. Root: Visit the current node
        result.push(node.val);

        // 3. Right: Traverse the complete right subtree
        traverse(node.right);
    }

    // Start traversal from the root node
    traverse(root);

    // Return the final inorder traversal
    return result;
};
```

---

# Important Points to Remember

1. Inorder Traversal is a type of Depth First Search (DFS).
2. Its traversal order is **Left → Root → Right**.
3. Recursion allows us to process each subtree using the same logic.
4. The base case `if (!node) return;` stops recursion when a node does not exist.
5. The `result.push(node.val)` statement visits and stores the current node's value.
6. Every node is visited exactly once.
7. Time complexity is O(n).
8. Auxiliary space complexity is O(h), excluding the output array.

**Final Learning:** Do not memorize the code line by line. Understand why we visit the left subtree first, why we push the current node's value second, and why we visit the right subtree last. Once you understand this pattern, you can implement Preorder and Postorder Traversal by changing the order of just these three operations.