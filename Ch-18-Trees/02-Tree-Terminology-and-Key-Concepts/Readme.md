# 🌳 Chapter 2 — Tree Terminology & Key Concepts

This chapter should focus on **the vocabulary you must know before solving tree problems**. The definitions below follow your existing notes, including the important interview distinctions. 

---

# 1. Tree Node

A **node** is the basic building block of a tree.

A node contains:

```text
Data
+
Reference(s) to child node(s)
```

For a binary tree:

```text
        +---------+
        |  data   |
        +---------+
        |  left   | ──→ Left Child
        +---------+
        |  right  | ──→ Right Child
        +---------+
```

A general tree can have more than two children. 

---

# 2. Root 🌱

The **root** is the topmost node of a tree.

```text
        A
      / | \
     B  C  D
```

Here:

```text
Root = A
```

### Properties

* Root has **no parent**
* Root is the starting point of the tree
* Root can have `0` or more children



---

# 3. Parent

A node directly above another node is its **parent**.

```text
        A
       / \
      B   C
```

Here:

```text
Parent(B) = A
Parent(C) = A
```



---

# 4. Child

A node directly below another node is called its **child**.

```text
        A
       / \
      B   C
```

Therefore:

```text
Children of A = B, C
```



---

# 5. Edge

An **edge** is the connection between two nodes.

```text
        A
       / \
      B   C
```

Edges:

```text
A ─ B
A ─ C
```

### Important Formula ⭐

For a tree with `N` nodes:

```text
Edges = N - 1
```

Example:

```text
A
├── B
├── C
└── D
```

Nodes = `4`

Edges = `3`

```text
4 - 1 = 3
```



---

# 6. Leaf Node 🍃

A **leaf node** is a node that has **zero children**.

```text
        A
      / | \
     B  C  D
    / \
   E   F
```

Leaf nodes:

```text
C, D, E, F
```

Because none of them has a child.

### Interview Definition

> **A leaf node is a node whose number of children is zero.**



---

# 7. Internal Node

An **internal node** is a node that has **at least one child**.

```text
        A
       / \
      B   C
     / \
    D   E
```

Internal nodes:

```text
A, B
```

Leaf nodes:

```text
C, D, E
```



---

# 8. Sibling

Nodes having the **same parent** are called siblings.

```text
        A
      / | \
     B  C  D
```

Here:

```text
B, C, D
```

are siblings because:

```text
Parent(B) = A
Parent(C) = A
Parent(D) = A
```



---

# 9. Ancestor

An **ancestor** is any node that comes **above a particular node** on the path toward the root.

```text
A
|
B
|
C
|
D
```

For `D`:

```text
Ancestors = C, B, A
```

Think:

> **Ancestor = above**



---

# 10. Descendant

A **descendant** is any node that appears **below a particular node**.

```text
        A
        |
        B
       / \
      C   D
```

Descendants of `B`:

```text
C, D
```

Descendants of `A`:

```text
B, C, D
```

Think:

> **Descendant = down/below**



---

# 11. Path

A **path** is a sequence of nodes connected by edges.

```text
A
|
B
|
C
|
D
```

Path from `A` to `D`:

```text
A → B → C → D
```

Number of edges:

```text
3
```



---

# 12. Level

The **level** describes how far a node is from the root.

A common convention is:

```text
             A       Level 0
            / \
           B   C     Level 1
          / \
         D   E       Level 2
```

Therefore:

```text
A = 0
B = 1
C = 1
D = 2
E = 2
```

⚠️ Some books use the root as **Level 1**.

> **Interview tip:** If level numbering matters, clarify the convention. 

---

# 13. Depth

**Depth of a node = number of edges from the root to that node.**

```text
        A
        |
        B
        |
        C
```

```text
Depth(A) = 0
Depth(B) = 1
Depth(C) = 2
```

### Easy Difference

```text
Depth → Root → Node
Height → Node → Leaf
```



---

# 14. Height of a Node

The **height of a node** is the number of edges in the **longest downward path from that node to a leaf**.

```text
        A
        |
        B
       / \
      C   D
```

For `B`:

```text
B → C = 1 edge
B → D = 1 edge
```

Therefore:

```text
Height(B) = 1
```

For leaf nodes:

```text
Height(C) = 0
Height(D) = 0
```



---

# 15. Height of a Tree

The **height of a tree is the height of its root**.

```text
A
|
B
|
C
|
D
```

Longest path:

```text
A → B → C → D
```

Number of edges:

```text
3
```

Therefore:

```text
Tree Height = 3
```

⚠️ Some resources count nodes instead of edges, so always check the convention. 

---

# 16. Degree of a Node

The **degree of a node** is the number of children it has.

```text
        A
      / | \
     B  C  D
```

Therefore:

```text
Degree(A) = 3

Degree(B) = 0
Degree(C) = 0
Degree(D) = 0
```

In a binary tree, maximum degree is:

```text
2
```



---

# 17. Degree of a Tree

The **degree of a tree** is the **maximum degree of any node** in that tree.

```text
        A
      / | \
     B  C  D
```

Maximum degree:

```text
3
```

Therefore:

```text
Degree of Tree = 3
```



---

# 18. Subtree

A **subtree** is a tree formed by a node and all of its descendants.

```text
          A
         / \
        B   C
       / \
      D   E
```

Subtree rooted at `B`:

```text
      B
     / \
    D   E
```



---

# 19. Forest 🌲🌲

A **forest** is a collection of **disjoint trees**.

```text
Tree 1          Tree 2

   A               X
  / \             / \
 B   C            Y   Z
```

Together:

```text
Forest
```

### Remember

```text
One tree       → Tree
Multiple trees → Forest
```



---

# 20. Important Tree Properties ⭐

For a standard tree with `N` nodes:

```text
Edges = N - 1
```

A tree is:

* Connected
* Acyclic
* Has exactly `N - 1` edges
* Has exactly one path between any two nodes



---


---
