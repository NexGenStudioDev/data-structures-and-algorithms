
# 22. Tree Types — Must Know

```text
Tree
│
├── General Tree
│
├── Binary Tree
│   ├── Full Binary Tree
│   ├── Complete Binary Tree
│   ├── Perfect Binary Tree
│   └── Balanced Binary Tree
│
├── Binary Search Tree (BST)
│
├── Heap
│   ├── Min Heap
│   └── Max Heap
│
├── AVL Tree
├── Red-Black Tree
├── Trie
├── B-Tree
└── B+ Tree
```



---

# 23. Quick Difference Between Important Tree Types

| Type                     | Main Rule                                              |
| ------------------------ | ------------------------------------------------------ |
| **General Tree**         | Any number of children                                 |
| **Binary Tree**          | At most 2 children                                     |
| **Full Binary Tree**     | Every node has 0 or 2 children                         |
| **Complete Binary Tree** | Last level filled left → right                         |
| **Perfect Binary Tree**  | All internal nodes have 2 children + leaves same level |
| **BST**                  | Left < Root < Right                                    |
| **Balanced Tree**        | Height approximately `O(log n)`                        |
| **Heap**                 | Parent follows min/max ordering                        |
| **Trie**                 | Stores strings/prefixes                                |
| **B-Tree**               | Multi-way balanced search tree                         |



---

# 24. Full vs Complete vs Perfect ⭐⭐⭐

This is a **very common interview question**.

### Full

Ask:

> Does every node have either `0` or `2` children?

```text
0 or 2
```

### Complete

Ask:

> Are all levels filled except possibly the last, with the last level filled from left to right?

```text
Fill left → right
```

### Perfect

Ask:

> Are all internal nodes full AND all leaves at the same level?

### Memory Trick 🧠

```text
FULL      → 0 or 2 children

COMPLETE  → left to right

PERFECT   → completely full
```



---

# 25. Binary Tree ≠ BST ⚠️

A **Binary Tree** only means:

```text
At most 2 children
```

A **BST** additionally follows:

```text
Left < Root < Right
```

Example:

```text
        10
       /  \
      50   2
```

This is a valid **binary tree**.

But it is **not a BST** because `50 > 10` but `50` is on the left. 

---

# 26. Tree Traversal

**Traversal** means visiting every node of a tree in a particular order.

For binary trees, learn these four:

```text
1. Preorder
2. Inorder
3. Postorder
4. Level Order
```

Example:

```text
        A
       / \
      B   C
     / \
    D   E
```

### Preorder

```text
Root → Left → Right

A B D E C
```

### Inorder

```text
Left → Root → Right

D B E A C
```

### Postorder

```text
Left → Right → Root

D E B C A
```

### Level Order

```text
A B C D E
```



---

# 27. Important Formulas 📌

### General Tree

```text
Edges = N - 1
```

### Perfect Binary Tree

For height `h`:

```text
Nodes = 2^(h+1) - 1
```

### Maximum nodes at level `L`

When root is at level `0`:

```text
Maximum nodes = 2^L
```

Therefore:

```text
Level 0 → 1
Level 1 → 2
Level 2 → 4
Level 3 → 8
```



---

# 28. Complexity — Why Height Matters

For a **balanced BST**:

```text
Search    → O(log n)
Insertion → O(log n)
Deletion  → O(log n)
```

For a **skewed BST**:

```text
Search    → O(n)
Insertion → O(n)
Deletion  → O(n)
```

Why?

Because:

> **Smaller height → fewer nodes to traverse → faster operations.**



---
