# Chapter 4 — Tree Traversals

## 1. What is Traversal?

**Traversal** means the process of **visiting each element of a data structure exactly once in a systematic order** to perform some operation.

In simple words:

> **Traversal = Moving through a data structure and visiting its elements one by one in a particular order.**

### Why do we traverse?

We traverse a data structure when we want to:

* Read data
* Search for an element
* Print elements
* Update elements
* Delete or process elements
* Perform calculations
* Understand relationships between nodes

---

# 2. Traversal in an Array

Before understanding tree traversal, let's understand array traversal.

Consider:

```text
Index:   0   1   2   3   4

Array:  [10, 20, 30, 40, 50]
```

### Left to Right Traversal

```text
10 → 20 → 30 → 40 → 50
```

### Right to Left Traversal

```text
50 → 40 → 30 → 20 → 10
```

An array is a **linear data structure**, so traversal is relatively simple because elements are arranged sequentially.

```text
10 ─── 20 ─── 30 ─── 40 ─── 50
```

There is basically one path through the elements.

---

# 3. Why is Tree Traversal Different?

A tree is a **non-linear data structure**.

Unlike an array, a tree has branches.

For example:

```text
        A
       / \
      B   C
     / \   \
    D   E   F
```

Now imagine you want to visit every node.

Where should you go first?

* Start from Root?
* Go Left first?
* Go Right first?
* Visit children before parent?
* Visit all nodes level by level?

Because a tree has multiple branches, there are **multiple valid ways to traverse it**.

This is why we need predefined traversal strategies.

> **Tree traversal defines the order in which nodes of a tree are visited.**

---

# 4. What is Tree Traversal?

## Definition

**Tree Traversal is the process of visiting every node in a tree exactly once according to a specific order.**

For a binary tree, traversal determines:

1. When to visit the **Root**
2. When to visit the **Left Subtree**
3. When to visit the **Right Subtree**

Consider:

```text
        A
       / \
      B   C
     / \ / \
    D  E F  G
```

Different traversal methods will produce different sequences.

---

# 5. Main Types of Tree Traversal

Tree traversals are broadly divided into two categories:

```text
Tree Traversal
│
├── Depth First Traversal (DFS)
│   │
│   ├── Preorder
│   ├── Inorder
│   └── Postorder
│
└── Breadth First Traversal (BFS)
    │
    └── Level Order Traversal
```

In this chapter, the main focus is on the three important **Depth First Traversals**:

1. **Preorder Traversal**
2. **Inorder Traversal**
3. **Postorder Traversal**

The main difference between them is:

> **When do we process the Root node?**

---

# 6. Understanding Root, Left, and Right

Before learning traversals, remember the structure of a Binary Tree.

```text
          Root
           A
          / \
         /   \
      Left   Right
       B       C
```

For every node, we can think about three things:

```text
1. Root
2. Left Subtree
3. Right Subtree
```

All three DFS traversals visit these same three parts.

The only difference is the **order**.

| Traversal | Order               |
| --------- | ------------------- |
| Preorder  | Root → Left → Right |
| Inorder   | Left → Root → Right |
| Postorder | Left → Right → Root |

A simple way to remember:

```text
Preorder    → Root comes BEFORE
Inorder     → Root comes IN BETWEEN
Postorder   → Root comes AFTER
```

---

# 7. Preorder Traversal

## Definition

In **Preorder Traversal**, we visit:

```text
ROOT → LEFT → RIGHT
```

Or:

```text
Node → Left Subtree → Right Subtree
```

---

## Example

Consider this tree:

```text
          A
         / \
        B   C
       / \ / \
      D  E F  G
```

### Rule:

```text
Root → Left → Right
```

Let's traverse step by step.

### Step 1: Visit Root

Root is:

```text
A
```

Output:

```text
A
```

### Step 2: Traverse Left Subtree

Left subtree:

```text
      B
     / \
    D   E
```

Following Root → Left → Right:

```text
B → D → E
```

### Step 3: Traverse Right Subtree

Right subtree:

```text
      C
     / \
    F   G
```

Following Root → Left → Right:

```text
C → F → G
```

### Final Preorder Traversal

```text
A → B → D → E → C → F → G
```

---

## Visual Representation

```text
          A (1)
         / \
     (2)B   C(5)
       / \ / \
   (3)D E(4)F(6)G(7)
```

Therefore:

```text
Preorder:

A → B → D → E → C → F → G
```

---

## Preorder Rule

For every subtree:

```text
        Root
       /    \
    Left    Right
```

Always:

```text
1. Visit Root
2. Traverse Left
3. Traverse Right
```

### Recursive Thinking

The same rule repeats for every node.

```text
Preorder(Node)
        │
        ├── Visit Node
        │
        ├── Traverse Left
        │
        └── Traverse Right
```

This is an important concept in trees:

> **A traversal rule applied to the entire tree is recursively applied to every subtree.**

---

# 8. Real-World Example of Preorder Traversal

## File System

Suppose you have folders:

```text
Project
│
├── Frontend
│   ├── src
│   └── public
│
└── Backend
    ├── routes
    └── models
```

If you want to process the **parent folder first**, then its children, preorder is useful.

Traversal:

```text
Project
→ Frontend
→ src
→ public
→ Backend
→ routes
→ models
```

### Why?

Because we process the parent before its contents.

This is useful when:

* Creating folder structures
* Copying hierarchical data
* Serializing a tree
* Creating UI menu structures

---

# 9. Technical Example of Preorder

Consider an organization:

```text
              CEO
             /   \
           CTO     CFO
          /  \      \
     Dev Lead  QA    Accountant
```

Preorder traversal:

```text
CEO
→ CTO
→ Dev Lead
→ QA
→ CFO
→ Accountant
```

The highest-level authority is processed first, followed by its subordinates.

---

# 10. Inorder Traversal

## Definition

In **Inorder Traversal**, we visit:

```text
LEFT → ROOT → RIGHT
```

Or:

```text
Left Subtree → Node → Right Subtree
```

The root is visited **between** the left and right subtree.

That is why it is called:

> **In-order → Root comes in the middle.**

---

## Example

Consider:

```text
          A
         / \
        B   C
       / \ / \
      D  E F  G
```

Rule:

```text
Left → Root → Right
```

Let's understand carefully.

---

### Start with Root A

We don't visit A immediately.

Why?

Because Inorder says:

```text
LEFT → ROOT → RIGHT
```

So first, go to the left subtree.

---

### Left Subtree of A

```text
       B
      / \
     D   E
```

Again apply:

```text
Left → Root → Right
```

For B:

1. Visit Left → D
2. Visit Root → B
3. Visit Right → E

Result:

```text
D → B → E
```

---

### Now Visit Root A

```text
D → B → E → A
```

---

### Traverse Right Subtree

```text
       C
      / \
     F   G
```

Again:

```text
F → C → G
```

---

### Final Inorder Traversal

```text
D → B → E → A → F → C → G
```

---

## Visual Representation

```text
          A (4)
         / \
        B   C
       / \ / \
      D  E F  G

Visit Order:

D(1) → B(2) → E(3) → A(4) → F(5) → C(6) → G(7)
```

Therefore:

```text
Inorder:

D → B → E → A → F → C → G
```

---

# 11. The Most Important Property of Inorder Traversal

Inorder traversal has a special relationship with a **Binary Search Tree (BST)**.

Consider this BST:

```text
          50
         /  \
       30    70
      / \    / \
    20  40  60  80
```

Apply:

```text
LEFT → ROOT → RIGHT
```

Result:

```text
20 → 30 → 40 → 50 → 60 → 70 → 80
```

Notice something?

```text
20 < 30 < 40 < 50 < 60 < 70 < 80
```

The output is automatically sorted!

## Important Interview Point

> **Inorder traversal of a Binary Search Tree gives elements in ascending sorted order.**

This works because of the BST property:

```text
Left Subtree < Root < Right Subtree
```

---

# 12. Real-World Example of Inorder Traversal

Imagine arranging values where the parent represents a value that lies between smaller and larger values.

```text
          50
         /  \
       30    70
```

Inorder:

```text
30 → 50 → 70
```

The logic is:

```text
Smaller Values
      ↓
Left → Root → Right
                 ↓
           Larger Values
```

This makes Inorder particularly useful for:

* Binary Search Trees
* Sorting elements stored in BST
* Retrieving data in ascending order
* Expression trees

---

# 13. Technical Example: Expression Tree

Consider the mathematical expression:

```text
A + B
```

An expression tree can look like:

```text
      +
     / \
    A   B
```

Inorder traversal:

```text
A → + → B
```

Which gives:

```text
A + B
```

For a larger expression:

```text
(A + B) × C
```

Tree:

```text
          ×
         / \
        +   C
       / \
      A   B
```

Inorder:

```text
A → + → B → × → C
```

Which represents:

```text
(A + B) × C
```

So Inorder traversal is useful in **expression trees** to represent expressions in their familiar infix form.

---

# 14. Postorder Traversal

## Definition

In **Postorder Traversal**, we visit:

```text
LEFT → RIGHT → ROOT
```

Or:

```text
Left Subtree → Right Subtree → Node
```

Here, the root is visited at the end.

That is why:

> **Postorder → Root comes after both subtrees.**

---

## Example

Consider:

```text
          A
         / \
        B   C
       / \ / \
      D  E F  G
```

Rule:

```text
LEFT → RIGHT → ROOT
```

Let's break it down.

---

### Left Subtree of A

```text
       B
      / \
     D   E
```

Apply:

```text
Left → Right → Root
```

Result:

```text
D → E → B
```

---

### Right Subtree of A

```text
       C
      / \
     F   G
```

Result:

```text
F → G → C
```

---

### Finally Visit Root

```text
A
```

---

## Final Postorder Traversal

```text
D → E → B → F → G → C → A
```

---

## Visual Representation

```text
              A (7)
             / \
          B(3)  C(6)
          / \   / \
       D(1) E(2)F(4)G(5)
```

Therefore:

```text
Postorder:

D → E → B → F → G → C → A
```

---

# 15. Why Postorder is Useful?

Postorder processes **children before the parent**.

This is extremely useful when the parent depends on the completion of its children.

Think:

```text
Complete Children
       ↓
Then Process Parent
```

---

# 16. Real-World Example of Postorder — Deleting Folders

Suppose you want to delete this directory:

```text
Project
│
├── Frontend
│   ├── src
│   └── public
│
└── Backend
    ├── routes
    └── models
```

Can you delete `Project` first?

❌ No.

You must first delete everything inside it.

Correct order:

```text
src
→ public
→ Frontend
→ routes
→ models
→ Backend
→ Project
```

This follows:

```text
Children → Parent
```

Which is exactly:

```text
LEFT → RIGHT → ROOT
```

### Therefore:

> **Postorder traversal is useful when child nodes must be processed before their parent node.**

---

# 17. Technical Example of Postorder

Consider calculating a mathematical expression:

```text
(A + B) × C
```

Expression Tree:

```text
          ×
         / \
        +   C
       / \
      A   B
```

Postorder traversal:

```text
A → B → + → C → ×
```

This is called **Postfix Expression**:

```text
A B + C ×
```

The computer can evaluate it easily:

```text
A B + → First calculate A+B
```

Then:

```text
Result C ×
```

Postorder traversal is therefore useful in:

* Expression evaluation
* Compiler design
* Deleting trees
* Dependency processing

---

# 18. Comparison of All Three Traversals

Let's use the same tree:

```text
              A
             / \
            B   C
           / \ / \
          D  E F  G
```

---

## Preorder

### Rule

```text
ROOT → LEFT → RIGHT
```

### Result

```text
A → B → D → E → C → F → G
```

---

## Inorder

### Rule

```text
LEFT → ROOT → RIGHT
```

### Result

```text
D → B → E → A → F → C → G
```

---

## Postorder

### Rule

```text
LEFT → RIGHT → ROOT
```

### Result

```text
D → E → B → F → G → C → A
```

---

# 19. Complete Comparison Table

| Traversal | Order               | Root Position |
| --------- | ------------------- | ------------- |
| Preorder  | Root → Left → Right | First         |
| Inorder   | Left → Root → Right | Middle        |
| Postorder | Left → Right → Root | Last          |

### Easy Memory Trick

```text
PREORDER
Root → Left → Right
  ↑
Root comes PRE (Before)
```

```text
INORDER
Left → Root → Right
        ↑
Root comes IN (Middle)
```

```text
POSTORDER
Left → Right → Root
               ↑
Root comes POST (After)
```

---

# 20. One Tree, Three Different Traversals

Consider:

```text
              1
             / \
            2   3
           / \   \
          4   5   6
```

### Preorder

```text
Root → Left → Right

1 → 2 → 4 → 5 → 3 → 6
```

### Inorder

```text
Left → Root → Right

4 → 2 → 5 → 1 → 3 → 6
```

### Postorder

```text
Left → Right → Root

4 → 5 → 2 → 6 → 3 → 1
```

### Summary Diagram

```text
                    TREE
                      1
                    /   \
                   2     3
                  / \     \
                 4   5     6


Preorder:
1 → 2 → 4 → 5 → 3 → 6

Inorder:
4 → 2 → 5 → 1 → 3 → 6

Postorder:
4 → 5 → 2 → 6 → 3 → 1
```

---

# 21. Why Are These Called Depth-First Traversals?

Preorder, Inorder, and Postorder belong to:

# Depth First Search (DFS)

DFS means:

> Go as deep as possible into one branch before moving to another branch.

Example:

```text
        A
       / \
      B   C
     / \
    D   E
```

DFS doesn't visit nodes level by level.

Instead, it goes deep:

```text
A
↓
B
↓
D
```

Then comes back:

```text
D
↑
B
↓
E
```

Then moves to another branch.

This process is called **backtracking**.

---

# 22. Understanding the "Go Down and Come Back" Concept

Consider:

```text
        A
       /
      B
     /
    C
```

When traversing:

```text
A
↓
B
↓
C
```

Once C is completed, there are no more children.

So traversal goes back:

```text
A
↓
B
↓
C
↑
B
↑
A
```

This returning process is fundamental to tree traversal.

Conceptually:

```text
Go Deep
   ↓
Reach End
   ↓
Come Back
   ↓
Explore Remaining Paths
```

This is why recursion naturally fits tree traversal.

---

# 23. Tree Traversal is Recursive in Nature

A tree itself has a recursive structure.

Look at this:

```text
            A
           / \
          B   C
```

The tree contains:

```text
Root = A
```

Left side:

```text
B
```

is itself a tree.

Right side:

```text
C
```

is also itself a tree.

Therefore:

```text
Tree
│
├── Root
├── Left Subtree (Tree)
└── Right Subtree (Tree)
```

And each subtree can again contain:

```text
Root
Left
Right
```

This self-similar structure is why traversal concepts repeat.

---

# 24. General Pattern Behind All DFS Traversals

For every node, there are three actions:

```text
        NODE
       /    \
     LEFT   RIGHT
```

We need to decide when to process the node.

There are three possibilities:

### Option 1

```text
NODE → LEFT → RIGHT
```

= Preorder

### Option 2

```text
LEFT → NODE → RIGHT
```

= Inorder

### Option 3

```text
LEFT → RIGHT → NODE
```

= Postorder

The difference is only the **position of the Root operation**.

This is a very important interview concept.

---

# 25. Real-World Analogy — Company Hierarchy

Consider a company:

```text
                 CEO
               /     \
             CTO      CFO
            /  \        \
        Dev      QA      Finance
```

## Preorder: Manager First

```text
CEO
→ CTO
→ Dev
→ QA
→ CFO
→ Finance
```

Use when you want to process the leader before their team.

---

## Postorder: Employees First

```text
Dev
→ QA
→ CTO
→ Finance
→ CFO
→ CEO
```

Use when subordinate work must finish before processing the manager.

---

# 26. Real-World Analogy — Family Tree

```text
          Grandparent
          /         \
       Parent1      Parent2
       /    \
    Child1  Child2
```

### Preorder

Start with the ancestor:

```text
Grandparent
→ Parent1
→ Child1
→ Child2
→ Parent2
```

### Postorder

Start with descendants:

```text
Child1
→ Child2
→ Parent1
→ Parent2
→ Grandparent
```

---

# 27. Applications of Preorder Traversal

Preorder follows:

```text
ROOT → LEFT → RIGHT
```

### Common Applications

#### 1. Copying a Tree

Process the parent before its children.

#### 2. Creating Tree Structure

When reconstructing or serializing hierarchical structures.

#### 3. File System Traversal

Process a folder before its contents.

#### 4. Prefix Expressions

Expression trees can generate prefix notation.

Example:

```text
      +
     / \
    A   B
```

Preorder:

```text
+ A B
```

This is Prefix notation.

#### 5. Hierarchical UI

Processing parent components before child components.

---

# 28. Applications of Inorder Traversal

Inorder follows:

```text
LEFT → ROOT → RIGHT
```

### Common Applications

#### 1. Binary Search Tree Sorting

Most important application.

```text
BST + Inorder = Sorted Output
```

Example:

```text
        50
       /  \
     30    70
```

Inorder:

```text
30 → 50 → 70
```

#### 2. Expression Trees

Converting expression trees into infix expressions.

```text
A + B
```

#### 3. Retrieve Data in Sorted Order

When data is stored in a BST.

---

# 29. Applications of Postorder Traversal

Postorder follows:

```text
LEFT → RIGHT → ROOT
```

### Common Applications

#### 1. Deleting a Tree

Delete children first, then parent.

```text
Children
   ↓
Parent
```

#### 2. Expression Evaluation

Postfix expressions.

#### 3. Calculating Directory Size

Calculate sizes of files/subdirectories first, then calculate the parent folder.

Example:

```text
Project
├── Frontend (100 MB)
└── Backend (200 MB)
```

Calculate children first:

```text
Frontend → 100 MB
Backend → 200 MB
```

Then:

```text
Project = 300 MB
```

#### 4. Dependency-Based Processing

When a parent operation depends on child operations.

---

# 30. Important Note: Inorder is Mainly for Binary Trees

Preorder and Postorder can be naturally generalized to trees with any number of children.

But Inorder specifically depends on:

```text
Left Child
Root
Right Child
```

Therefore:

> **Inorder traversal is primarily defined for Binary Trees because it requires exactly the concepts of Left and Right.**

For a general tree with many children:

```text
       A
    / / \ \
   B C  D  E
```

There is no universally natural meaning of:

```text
Left → Root → Right
```

because there can be more than two child branches.

This is a good interview point.

---

# 31. Traversal vs Searching

These two concepts are related but different.

## Traversal

Visit all nodes systematically.

Example:

```text
A → B → D → E → C
```

The goal is generally to process every node.

---

## Searching

Find a particular node.

Example:

```text
Find node = E
```

You may use a traversal strategy to search.

For example:

```text
Preorder Search
Inorder Search
Postorder Search
BFS Search
```

### Key Difference

| Traversal                   | Searching                     |
| --------------------------- | ----------------------------- |
| Visits nodes systematically | Looks for a specific node     |
| Usually processes all nodes | Can stop when target is found |
| Defines visiting order      | Defines search objective      |

---

# 32. Traversal vs Linear Data Structure Traversal

## Array

```text
[10] → [20] → [30] → [40]
```

The structure is linear.

Traversal is straightforward:

```text
Left → Right
```

or:

```text
Right → Left
```

---

## Tree

```text
        A
       / \
      B   C
     / \
    D   E
```

There are branches.

So we need to decide:

```text
Which branch first?
When to visit parent?
When to return?
```

Therefore, trees require specific traversal strategies.

---

# 33. A Simple Mental Model

Whenever you see a tree traversal question, imagine every node has three positions:

```text
        Root
        (?)
       /   \
   Left     Right
```

Ask:

> **When should I process the Root?**

### Root First

```text
Root → Left → Right
```

✅ Preorder

### Root Middle

```text
Left → Root → Right
```

✅ Inorder

### Root Last

```text
Left → Right → Root
```

✅ Postorder

This single concept helps remember all three traversals.

---

# 34. Traversal Dry Run Conceptually

Consider:

```text
          1
         / \
        2   3
       / \
      4   5
```

---

## Preorder

```text
Rule: Root → Left → Right
```

```text
Step 1 → Visit 1
Step 2 → Go Left → Visit 2
Step 3 → Go Left → Visit 4
Step 4 → Backtrack
Step 5 → Visit 5
Step 6 → Backtrack to 1
Step 7 → Go Right → Visit 3
```

Result:

```text
1 → 2 → 4 → 5 → 3
```

---

## Inorder

```text
Rule: Left → Root → Right
```

```text
Step 1 → Go Left from 1
Step 2 → Go Left from 2
Step 3 → Visit 4
Step 4 → Backtrack → Visit 2
Step 5 → Visit 5
Step 6 → Backtrack → Visit 1
Step 7 → Visit 3
```

Result:

```text
4 → 2 → 5 → 1 → 3
```

---

## Postorder

```text
Rule: Left → Right → Root
```

```text
Step 1 → Go to Leftmost node → 4
Step 2 → Visit 4
Step 3 → Visit 5
Step 4 → Visit 2
Step 5 → Visit 3
Step 6 → Finally Visit 1
```

Result:

```text
4 → 5 → 2 → 3 → 1
```

---

# 35. Traversal Complexity

Let:

```text
n = Number of nodes
```

For Preorder, Inorder, and Postorder:

## Time Complexity

```text
O(n)
```

### Why?

Because every node is visited exactly once.

```text
Number of Nodes = n
Visit Each Node = 1 time

Total = n operations
```

Therefore:

```text
Time Complexity = O(n)
```

---

## Space Complexity

The space complexity depends on the height of the tree because traversal conceptually needs to remember the path/backtracking information.

```text
O(h)
```

Where:

```text
h = Height of Tree
```

### Balanced Tree

```text
Height ≈ log(n)
```

So:

```text
O(log n)
```

### Skewed Tree

```text
1
 \
  2
   \
    3
     \
      4
```

Height:

```text
n
```

So:

```text
O(n)
```

### Summary

| Traversal | Time | Auxiliary Space* |
| --------- | ---- | ---------------- |
| Preorder  | O(n) | O(h)             |
| Inorder   | O(n) | O(h)             |
| Postorder | O(n) | O(h)             |

*For the usual recursive traversal approach.

---

# 36. Important Interview Questions

## Q1. What is Tree Traversal?

**Answer:**

> Tree traversal is the systematic process of visiting and processing every node in a tree according to a specific order.

---

## Q2. Why do we need different traversal methods?

**Answer:**

> Unlike linear data structures, trees have multiple branches. Therefore, there are multiple meaningful ways to visit nodes. Different traversal methods define different orders based on when the root, left subtree, and right subtree are processed.

---

## Q3. What are the three DFS traversals?

**Answer:**

```text
1. Preorder  → Root → Left → Right
2. Inorder   → Left → Root → Right
3. Postorder → Left → Right → Root
```

---

## Q4. What is the difference between Preorder, Inorder, and Postorder?

**Answer:**

> The main difference is the position of the root node during traversal.

```text
Preorder  → Root First
Inorder   → Root Middle
Postorder → Root Last
```

---

## Q5. Which traversal gives sorted order in a BST?

**Answer:**

> Inorder traversal gives elements in ascending sorted order in a Binary Search Tree.

```text
Left → Root → Right
```

---

## Q6. Which traversal is useful for deleting a tree?

**Answer:**

> Postorder traversal, because it processes children before their parent.

```text
Left → Right → Root
```

---

## Q7. Why is Inorder traversal specifically associated with Binary Trees?

**Answer:**

> Because Inorder traversal depends on the concept of Left Subtree → Root → Right Subtree. General trees may have more than two children, making this ordering not naturally defined.

---

## Q8. What is the time complexity of tree traversal?

**Answer:**

```text
O(n)
```

Because every node is visited once.

---

# 37. Final Master Diagram

```text
                    TREE TRAVERSAL
                         │
          ┌──────────────┴──────────────┐
          │                             │
        DFS                            BFS
          │                             │
    ┌─────┼─────┐                 Level Order
    │     │     │
Preorder Inorder Postorder
```

### DFS Traversals

```text
              ROOT
             /    \
          LEFT    RIGHT
```

```text
PREORDER
Root → Left → Right
  ↓
Parent First
```

```text
INORDER
Left → Root → Right
       ↓
Root in Middle
```

```text
POSTORDER
Left → Right → Root
               ↓
Parent Last
```

---

# 38. Quick Revision Notes

## Tree Traversal

> The process of visiting every node of a tree systematically according to a specific order.

### Why needed?

Because trees are non-linear and have multiple branches.

---

### Main DFS Traversals

#### 1. Preorder

```text
ROOT → LEFT → RIGHT
```

**Root First**

Uses:

* Copying trees
* Serialization
* Prefix expressions
* Parent-first processing

---

#### 2. Inorder

```text
LEFT → ROOT → RIGHT
```

**Root in Middle**

Uses:

* BST sorted order
* Sorting
* Expression trees
* Infix expressions

⭐ **Inorder of BST = Sorted Order**

---

#### 3. Postorder

```text
LEFT → RIGHT → ROOT
```

**Root Last**

Uses:

* Deleting trees
* Expression evaluation
* Postfix expressions
* Child-first processing

---

### Complexity

```text
Time: O(n)
Space: O(h)
```

---

# Golden Rule to Remember 🧠

```text
PREORDER
Root comes BEFORE children
ROOT → LEFT → RIGHT


INORDER
Root comes IN BETWEEN
LEFT → ROOT → RIGHT


POSTORDER
Root comes AFTER children
LEFT → RIGHT → ROOT
```

> **The traversal type is determined by when you visit/process the Root node.**
