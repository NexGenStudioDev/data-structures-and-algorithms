# Same Tree – Binary Tree Recursion (LeetCode 100)

## 1. Intuition

In this question, we are given two binary trees, `p` and `q`. Our task is to check whether both trees are exactly the same or not.

Two binary trees are considered the same if:

1. Both trees have the same structure.
2. Every corresponding node has the same value.
3. Their left subtrees are also identical.
4. Their right subtrees are also identical.

Important: Just comparing the values is not enough. We must also compare the structure of both trees.

### Example 1: Both trees are the same

Input:

```
p = [1, 2, 3]
q = [1, 2, 3]
```

Visual representation:

Tree P

```
    1
   / \
  2   3
```

Tree Q

```
    1
   / \
  2   3
```

Comparison:

- Root: `1 === 1` → true
- Left child: `2 === 2` → true
- Right child: `3 === 3` → true

All corresponding nodes have the same values and structure.

Output:

```
true
```

### Example 2: Both trees are different

Input:

```
p = [1, 2, 1]
q = [1, 1, 2]
```

Visual representation:

Tree P

```
    1
   / \
  2   1
```

Tree Q

```
    1
   / \
  1   2
```

Comparison:

- Root: `1 === 1` → true
- Left child: `2 !== 1` → false

As soon as we find a mismatch, we know that both trees are not the same.

Output:

```
false
```

We don't need to check further because one mismatch is enough to prove that the trees are different.

### Example 3: Same values but different structure

Input:

```
p = [1, 2]
q = [1, null, 2]
```

Visual representation:

Tree P

```
    1
   /
  2
```

Tree Q

```
    1
     \
      2
```

Both trees contain the same values, but their structures are different.

- Root: `1 === 1` → true
- Left child: `2 !== null` → false (one node is missing).

Output:

```
false
```

Conclusion: We must compare both the values and the structure of the trees.

## 2. Approach

We will solve this problem using Recursion (DFS – Depth First Search).

The idea is simple: compare two nodes at a time and recursively move towards their left and right children.

Before writing the complete solution, let's understand the four important conditions.

### Step 1: Check if both nodes are null

```
if (!p && !q) return true;
```

What does `!p && !q` mean?

- `!p` means node `p` is null or undefined.
- `!q` means node `q` is null or undefined.
- `&&` means AND, so both conditions must be true.

If both nodes are null, it means we have reached the end of both branches.

There is nothing left to compare, so they are identical at this position.

Return `true`.

Example:

```
Tree P       Tree Q

   1            1
  /            /
null         null
```

Both left children are null.

Therefore:

```
!p && !q

true && true

true
```

### Step 2: Check if only one node is null

```
if (!p || !q) return false;
```

Here we use `||` (OR).

It means if either `p` or `q` is null, return false.

Why?

Because one tree has a node, but the other tree does not.

Example:

```
Tree P       Tree Q

   1            1
  /              \
 2               2
```

When comparing the left children:

```
p.left = 2;
q.left = null;
```

Condition:

```
if (!p || !q) return false;
```

Here:

```
false || true

true
```

Therefore, return `false`.

Remember:

| P    | Q    | Result   |
| ---- | ---- | -------- |
| null | null | true     |
| null | node | false    |
| node | null | false    |
| node | node | Continue |

### Step 3: Compare node values

```
if (p.val !== q.val) return false;
```

Now we know that both nodes exist.

We can safely compare their values.

For example:

```
p.val = 2;
q.val = 1;
```

Comparison:

```
2 !== 1
```

Result:

```
true
```

Since their values are different, return `false`.

If their values are equal, continue checking their children.

### Step 4: Compare left and right subtrees

```
return isSameTree(p.left, q.left) &&
       isSameTree(p.right, q.right);
```

This is the most important line of the solution.

Let's break it into two parts.

Part 1: Compare left subtrees

```
isSameTree(p.left, q.left)
```

This calls the same function again, but this time it compares the left children of both trees.

Part 2: Compare right subtrees

```
isSameTree(p.right, q.right)
```

This recursively compares the right children of both trees.

Why do we use `&&`?

Because both left and right subtrees must be identical.

| Left subtree | Right subtree | Final result |
| ------------ | ------------- | ------------ |
| true         | true          | true         |
| true         | false         | false        |
| false        | true          | false        |
| false        | false         | false        |

If either subtree is different, the entire tree is different.

## 3. Complete Code

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {

    // Step 1: Both nodes are null
    if (!p && !q) return true;

    // Step 2: Only one node is null
    if (!p || !q) return false;

    // Step 3: Compare node values
    if (p.val !== q.val) return false;

    // Step 4: Compare left and right subtrees
    return isSameTree(p.left, q.left) &&
           isSameTree(p.right, q.right);
};
```

## 4. Detailed Dry Run

Let's take a slightly bigger example to understand how recursion works internally.

Input:

```
p = [1, 2, 3, 4, 5, null, 8]
q = [1, 2, 3, 4, 5, null, 8]
```

Both trees:

```
          1
         / \
        2   3
       / \   \
      4   5   8
```

Expected output: true

### Step-by-step execution

Step 1: Compare root nodes

```
isSameTree(1, 1)
```

- Both nodes exist.
- `1 === 1` → true.
- Now compare their left and right subtrees.

Step 2: Compare left children

```
isSameTree(2, 2)
```

- Both nodes exist.
- `2 === 2` → true.
- Now compare their children.

Step 3: Compare left children of node 2

```
isSameTree(4, 4)
```

- Both nodes exist.
- `4 === 4` → true.
- Compare their left children.

```
isSameTree(null, null)
```

Both are null, so return `true`.

Now compare their right children:

```
isSameTree(null, null)
```

Return `true`.

Therefore:

```
true && true
```

Returns `true`.

Node 4 is successfully compared.

Step 4: Compare right children of node 2

```
isSameTree(5, 5)
```

- `5 === 5` → true.
- Left children are both null → true.
- Right children are both null → true.

Result:

```
true && true
```

Returns `true`.

Now node 2 combines its results:

```
true && true
```

Returns `true`.

Step 5: Compare right children of root node 1

```
isSameTree(3, 3)
```

- `3 === 3` → true.
- Compare left children: both null → true.
- Compare right children:

```
isSameTree(8, 8)
```

- `8 === 8` → true.
- Both children are null → true.

Node 8 returns true.

Node 3 returns:

```
true && true
```

Result: `true`.

Step 6: Final result

Now the original root node combines both subtree results:

```
return true && true;
```

Final output:

```
true
```

### Complete recursion flow

```
isSameTree(1, 1)
│
├── isSameTree(2, 2)
│   │
│   ├── isSameTree(4, 4)
│   │   ├── isSameTree(null, null) → true
│   │   └── isSameTree(null, null) → true
│   │
│   └── isSameTree(5, 5)
│       ├── isSameTree(null, null) → true
│       └── isSameTree(null, null) → true
│
└── isSameTree(3, 3)
    │
    ├── isSameTree(null, null) → true
    │
    └── isSameTree(8, 8)
        ├── isSameTree(null, null) → true
        └── isSameTree(null, null) → true

Final Answer: true
```

## 5. How does recursion stop?

This is a very important concept.

Recursion stops when one of our base conditions is satisfied.

We have three stopping conditions:

\| Condition | Meaning | Return |\
\|---|---|---|\
\| `!p && !q` | Both nodes are null | `true` |\
\| `!p || !q` | Only one node is null | `false` |\
\| `p.val !== q.val` | Node values are different | `false` |

These conditions are called Base Cases.

Without base cases, the recursive function would not know when to stop.

## 6. How does `&&` help in recursion?

Consider this statement:

```
return isSameTree(p.left, q.left) &&
       isSameTree(p.right, q.right);
```

JavaScript's `&&` uses short-circuit evaluation.

This means:

- First, it evaluates the left recursive call.
- If the left call returns `false`, JavaScript does not execute the right recursive call.
- If the left call returns `true`, JavaScript evaluates the right recursive call.

For example:

```
false && isSameTree(p.right, q.right)
```

The second function call is skipped because the final answer is already known to be false.

This saves unnecessary comparisons.

