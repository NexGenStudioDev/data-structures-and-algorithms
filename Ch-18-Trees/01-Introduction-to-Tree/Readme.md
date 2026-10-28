# 🌳 Ch-1: Introduction to Tree — Complete Notes

Since you have already learned **Array → Linked List → Stack → Queue**, the next important step is understanding **Tree**.

The key idea is:

> **Array and Linked List are mainly linear data structures, while a Tree is a non-linear, hierarchical data structure.**

---

## 1. First, What Have We Learned?

Before understanding Tree, let's connect it with the data structures you already know.

### => What is an Array?

An **array** stores elements in **contiguous memory locations**.

For example:

```text
Array:

Index:    0    1    2    3
          ↓    ↓    ↓    ↓
        [10] [20] [30] [40]
```

### => What does contiguous memory mean?

It means the elements are stored **next to each other in memory**.

Conceptually:

```text
Memory

1000 → 10
1004 → 20
1008 → 30
1012 → 40
```

The exact addresses depend on the data type and system, but the important idea is:

```text
10 → 20 → 30 → 40
```

They occupy consecutive memory locations.

That's why an array supports very fast indexing:

```cpp
arr[2]
```

The computer can directly calculate where index `2` is located.

### => Array is Linear

An array has a sequential structure:

```text
A → B → C → D → E
```

There is basically one sequence.

---

## What is a Linked List?

A **Linked List** is also a collection of nodes, but the nodes do **not need to be stored next to each other in memory**.

Unlike an array, linked-list nodes **do not need to be stored in contiguous memory**.

Each node contains:

```text
Data + Pointer
```

Example:

```text
+------+------+
|  10  |  •---|----→
+------+------+
```

A complete linked list:

```text
A → B → C → D → NULL
```

For example:

```text
+---+---+     +---+---+     +---+---+     +---+------+
| A | •-+---->| B | •-+---->| C | •-+---->| D | NULL |
+---+---+     +---+---+     +---+---+     +---+------+
```

Conceptually:

```text
A points to B
B points to C
C points to D
D points to NULL
```

So, in a **singly linked list**, each node has:

> **At most one next node.**

That gives us a linear structure.

---

## => Why Do We Need Non-Linear Data Structures?

Before understanding **Tree**, first understand **why Linear Data Structures are not enough**.

---

### What is a Linear Data Structure?

A **linear data structure** is a data structure in which elements are arranged in a **sequential order**, one after another.

Examples:

```text
Array
Linked List
Stack
Queue
```

The easiest way to visualize a linear structure is:

```text
A → B → C → D → E
```

There is basically **one path through the data**.

For example, a Linked List:

```text
A → B → C → D
```

You go:

```text
A
 ↓
B
 ↓
C
 ↓
D
```

The structure is sequential.

---

# 2. The Problem With Linear Data Structures

Linear data structures are excellent when our data itself is **linear**.

For example, suppose you want to store:

```text
Movies watched:

Movie A
Movie B
Movie C
Movie D
Movie E
```

A simple array works perfectly:

```text
[Movie A, Movie B, Movie C, Movie D, Movie E]
```

Because there is no hierarchy.

But now suppose your movies are organized like this:

```text
Movies
│
├── Bollywood
│   ├── Action
│   │   ├── Movie A
│   │   ├── Movie B
│   │   └── Movie C
│   │
│   └── Romantic
│       ├── Movie D
│       ├── Movie E
│       └── Movie F
│
└── Hollywood
    ├── Action
    │   ├── Movie G
    │   └── Movie H
    │
    └── Romantic
        ├── Movie I
        └── Movie J
```

Now notice something important:

This data is **not simply a sequence**.

It has a hierarchy:

```text
Movies
   ↓
Bollywood / Hollywood
   ↓
Action / Romantic
   ↓
Individual Movies
```

This is where a **non-linear data structure** becomes useful.

---

# 3. What is a Non-Linear Data Structure?

> **A non-linear data structure is a data structure in which data elements are not arranged sequentially; instead, they are organized through relationships, branches, or multiple connections.**

Instead of:

```text
A → B → C → D
```

we can have:

```text
        A
      /   \
     B     C
    / \     \
   D   E     F
```

There can be **multiple paths and branches**.

Examples:

```text
Tree
Graph
```

---

## ==> Linear vs Non-Linear

### Linear

```text
A → B → C → D
```

One sequence.

### Non-Linear

```text
        A
      / | \
     B  C  D
    / \
   E   F
```

Data branches.

So the fundamental difference is:

> **Linear data structures organize data sequentially, while non-linear data structures organize data hierarchically or through complex relationships.**

---

# 4. Why Did Non-Linear Data Structures Come?

The main reason is simple:

> **Real-world data is not always linear.**

Think about real life.

A company:

```text
Company
│
├── Engineering
│   ├── Backend
│   └── Frontend
│
├── HR
│
└── Finance
```

A computer:

```text
Computer
│
├── Documents
│   ├── Resume
│   └── Notes
│
├── Pictures
│
└── Videos
```

A website:

```text
Website
│
├── Home
├── Products
│   ├── Mobile
│   └── Laptop
└── Contact
```

A movie collection:

```text
Movies
│
├── Bollywood
│   ├── Action
│   └── Romantic
│
└── Hollywood
    ├── Action
    └── Romantic
```

These are all **hierarchical relationships**.

Trying to represent them as:

```text
A → B → C → D → E → F
```

doesn't naturally preserve the hierarchy.

---

Linked List vs Tree

This is one of the most important concepts.

### Linked List

```text
A → B → C → D
```

Each node generally points to **one next node**.

```text
A → B
B → C
C → D
```

So the structure is:

```text
Linear
```

---

### Tree

```text
          A
        / | \
       B  C  D
      / \
     E   F
```

A node can have multiple children:

```text
A → B
A → C
A → D

B → E
B → F
```

So the structure is:

```text
Non-linear
Hierarchical
```

# 5. Movie Example — Best Way to Understand It 🎬

Suppose you want to build a **Movie Management System**.

You have hundreds of movies.

You first create a main folder:

```text
Movies
```

Inside `Movies`, you have:

```text
Movies
├── Bollywood
└── Hollywood
```

Now inside Bollywood:

```text
Bollywood
├── Action
└── Romantic
```

And inside Hollywood:

```text
Hollywood
├── Action
└── Romantic
```

Now store movies inside those categories:

```text
Movies
│
├── Bollywood
│   │
│   ├── Action
│   │   ├── War
│   │   ├── Pathaan
│   │   └── Dhoom
│   │
│   └── Romantic
│       ├── Jab We Met
│       ├── Rockstar
│       └── Tamasha
│
└── Hollywood
    │
    ├── Action
    │   ├── Avengers
    │   ├── John Wick
    │   └── Mission Impossible
    │
    └── Romantic
        ├── Titanic
        ├── The Notebook
        └── La La Land
```

Look at the structure.

There isn't simply:

```text
Movie A → Movie B → Movie C
```

Instead:

```text
                     Movies
                    /      \
                   /        \
            Bollywood      Hollywood
             /     \         /      \
            /       \       /        \
        Action    Romantic Action   Romantic
          /          \       /          \
       Movies       Movies  Movies      Movies
```

This is a **hierarchy**.

---

## 6. Why is This a Tree?

Because each category has a **parent-child relationship**.

For example:

```text
Movies
  ↓
Bollywood
  ↓
Action
  ↓
War
```

Here:

```text
Movies  = parent of Bollywood
Bollywood = parent of Action
Action = parent of War
```

And:

```text
Action
├── War
├── Pathaan
└── Dhoom
```

`Action` has multiple children.

This is exactly what a **Tree** is designed to represent.

---

## 7. Representing the Movie Example as a Tree

We can represent the entire movie system as:

```text
                         Movies
                       /         \
                      /           \
               Bollywood         Hollywood
                /     \           /      \
               /       \         /        \
           Action    Romantic  Action    Romantic
            /  \        /       /  \        \
           /    \      /       /    \        \
        War   Dhoom  JWM    John  Avengers  Titanic
```

Here:

```text
Movies
```

is the **root**.

Then:

```text
Bollywood
Hollywood
```

are children of `Movies`.

Then:

```text
Action
Romantic
```

are children of `Bollywood` or `Hollywood`.

Finally:

```text
War
Dhoom
Jab We Met
John Wick
...
```

are movie nodes.

---

## Linear vs Non-Linear Using the Movie Example

### Linear approach

```text
Movies:

War → Dhoom → Titanic → John Wick → Pathaan
```

This tells us only:

> Movie A comes before Movie B.

It doesn't tell us the category hierarchy.

---

### Non-linear / Tree approach

```text
                       Movies
                      /      \
             Bollywood      Hollywood
             /      \        /      \
         Action   Romantic Action  Romantic
           /          \      /         \
         War        JWM   John Wick   Titanic
```

Now we know:

```text
War
 ↓
Action
 ↓
Bollywood
 ↓
Movies
```

and:

```text
Titanic
 ↓
Romantic
 ↓
Hollywood
 ↓
Movies
```

The relationship is preserved.

---

## Why "Non-Linear"?

The word itself helps.

### Linear

Think of a **line**:

```text
A ─ B ─ C ─ D
```

Everything follows a single sequence.

### Non-linear

Not restricted to one line:

```text
        A
      / | \
     B  C  D
    / \
   E   F
```

The data can **branch**.

Therefore:

> **Tree is called non-linear because its nodes can branch into multiple child nodes rather than forming a single sequential path.**

---

## 8. Real-World Analogy

### ==>  Folder System

This is perhaps the easiest analogy to remember.

Imagine:

```text
My Computer
│
├── Movies
│   ├── Bollywood
│   │   ├── Action
│   │   └── Romantic
│   │
│   └── Hollywood
│       ├── Action
│       └── Romantic
│
├── Documents
│
└── Pictures
```

This is practically a **tree**.

You don't think of folders as:

```text
Computer → Movies → Bollywood → Action → ...
```

only.

Instead, one folder can contain **many folders**, and each of those folders can contain more folders.

That's the fundamental idea of a tree.

---

### ==> Another Real-World Example: Family Tree

```text
             Grandfather
             /        \
         Parent A    Parent B
         /    \
      Child1  Child2
```

This is also hierarchical.

One person can have multiple descendants.

The structure branches.

---

### ==> Another Example: Organization

```text
                    CEO
                  /     \
                CTO      CFO
               /   \       \
          Backend Frontend Finance
            / \
       Developer Developer
```

Again:

```text
CEO
 ↓
Department
 ↓
Team
 ↓
Employee
```

That's a tree.

---

### ==> The Main Reason Trees Exist

You can write this in your exam:

> **Linear data structures are suitable for sequential data, but real-world data often contains hierarchical, parent-child, and one-to-many relationships. Non-linear data structures such as trees are introduced to represent such relationships naturally and efficiently.**

## 9. 🌳 Now What About a Tree?

This is where a **Tree** becomes different from a **Linked List**.

A Tree is also built using **nodes and references/pointers**, just like a Linked List. However, the way those nodes are connected is different.

---

### ==> Tree is Also Made of Nodes

Just like a Linked List, a Tree consists of **nodes**.

A node contains:

```text
Data
+
Reference / Pointer to other node(s)
```

But the major difference is **how many child nodes a node can connect to**.

---

## 10 Linked List vs Tree — The Key Difference

### a) Linked List

In a typical singly linked list, each node points to **at most one next node**.

```text
A → B → C → D
```

For example:

```text
A → B
B → C
C → D
```

So the relationship is:

```text
One node → One next node
```

This creates a **linear structure**.

---

### b). Tree Can Branch

In a Tree, a node can have **multiple children**.

For example:

```text
        A
      / | \
     B  C  D
```

Here:

```text
A → B
A → C
A → D
```

Therefore:

> **A can have 3 children.**

This creates a **branching structure**.

---

## 11) A Tree Node Can Have Different Numbers of Children

The number of children is not always the same.

A node can have:

```text
0 children
1 child
2 children
3 children
...
n children
```

depending on the **type of tree**.

---

### Case 1: Node Has Multiple Children

```text
        A
      / | \
     B  C  D
```

Here:

```text
A has 3 children
```

---

### Case 2: Node Has One Child

A tree node can also have only one child:

```text
        A
        |
        B
```

Here:

```text
A has 1 child
```

---

### Case 3: Node Has No Children

A node can have no children:

```text
        A
```

Here:

```text
A has 0 children
```

Such a node is called a **Leaf Node**.

---


Not completely. The two we covered are the **most important structural rules**, but for your **exam + interview notes**, I would include a few more important exceptions/edge cases.

## 🌳 Tree — Important Exceptions & Edge Cases

### 1. Root has no parent ⭐

```text
    A
   / \
  B   C
```

```text
Parent(A) = NULL
```

> Every non-root node has exactly one parent.

---

### 2. A node can have multiple children ⭐

```text
      A
    / | \
   B  C  D
```

`A` has 3 children.

> Number of children depends on the tree type.

---

## 3. Different Tree Types Have Different Child Limits ⭐⭐⭐

> **The maximum number of children a node can have depends on the type of tree.**

### ==> General Tree

A **General Tree** has **no fixed limit** on the number of children.

```text
            A
        / / | \ \
       B C  D  E F
```

Here:

```text
A → 5 children
```

It could have:

```text
0, 1, 2, 3, ... N children
```

So:

> **General Tree → 0 to N children**

---

### ==> Binary Tree

A **Binary Tree** allows **at most 2 children per node**.

The two children are specifically:

```text
Left Child
Right Child
```

A node can have **0, 1, or 2 children**.

#### Case 1 — 0 children

```text
    A
```

`A` is a leaf.

#### Case 2 — 1 child

```text
    A
   /
  B
```

`A` has only a left child.

It could also have only a right child:

```text
    A
     \
      B
```

#### Case 3 — 2 children

```text
      A
     / \
    B   C
```

`A` has both:

```text
Left  → B
Right → C
```

Therefore:

```text
General Tree → 0 to N children
Binary Tree  → 0 to 2 children
```



#### Case 4 4. A node cannot have multiple parents ⭐

```text
    A     B
     \   /
       C
```

`C` has two parents → **not a standard tree**.

---

#### Case 5 A tree can have only one node ⭐

```text
A
```

Here `A` is simultaneously:

```text
Root
Leaf
```

And:

```text
Nodes = 1
Edges = 0
Height = 0
```

---

#### Case 6. An empty tree is possible ⭐

```text
root = NULL
```

This means the tree contains no nodes.

This is especially important when implementing trees.

---

#### Case 7. Root can also be a leaf ⭐

Normally, we think:

```text
Root ≠ Leaf
```

But if the tree contains only one node:

```text
A
```

then:

```text
A = Root
A = Leaf
```

So this is a valid edge case.

---

#### Case 8. A tree does not contain cycles ⭐⭐⭐

Valid:

```text
A
|
B
|
C
```

Invalid:

```text
A → B
↑   ↓
└── C
```

A standard tree is **acyclic**.

---

#### Case 9. A tree must be connected ⭐⭐⭐

Valid:

```text
    A
   / \
  B   C
```

Invalid as one tree:

```text
A   B
    |
    C
```

These are disconnected components.

Multiple separate trees together form a **forest**.

---

#### Case 10. A tree with N nodes always has N−1 edges ⭐⭐⭐

```text
Nodes = N
Edges = N - 1
```

Examples:

```text
1 node → 0 edges
2 nodes → 1 edge
5 nodes → 4 edges
10 nodes → 9 edges
```

---

#### Case 11. There is exactly one path between two nodes ⭐⭐⭐

In a tree:

```text
      A
     / \
    B   C
   /
  D
```

Path from `D` to `C`:

```text
D → B → A → C
```

There cannot be another different path between the same two nodes.

If multiple paths exist, it indicates a more general graph structure.

---

#### Case  12. Height and depth have convention exceptions ⚠️

Most DSA problems use:

```text
Height → number of edges
Depth  → number of edges
```

But some books count **nodes** instead.

So always check the convention.

---

#### Case 13. Level numbering can differ ⚠️

Some resources:

```text
Root = Level 0
```

Others:

```text
Root = Level 1
```

Both conventions exist.


# 5. What is a Tree?

## Definition

> **A Tree is a non-linear, hierarchical data structure consisting of nodes connected by edges, where nodes represent data and the connections represent parent-child relationships.**

> **A Tree is a non-linear hierarchical data structure that represents data using parent-child relationships.**

A tree normally has one special node called the **root**.

Example:

```text
             A
           / | \
          B  C  D
         / \    |
        E   F   G
```

Here:

* `A` is the root
* `B, C, D` are children of `A`
* `E, F` are children of `B`
* `G` is child of `D`

## 🌳 Why Is a Tree Called a Hierarchical Data Structure?

> **A tree is called a hierarchical data structure because it organizes data into multiple levels using parent-child relationships. The topmost node is the root, and each child can further have its own children, forming a branching hierarchy.**

In simple words:

> **A hierarchy means organizing data from higher-level elements to lower-level elements using parent → child relationships.**

---

### 1. What Does "Hierarchy" Mean?

Think about a company.

A company may have:

```text
Company
   ↓
Department
   ↓
Team
   ↓
Employee
```

Each level is connected to the level below it.

For example:

```text
Company
   |
   ├── HR
   |
   ├── IT
   |    |
   |    ├── Backend
   |    |     |
   |    |     ├── Employee
   |    |     └── Employee
   |    |
   |    └── Frontend
   |          |
   |          ├── Employee
   |          └── Employee
   |
   └── Sales
```

Here, the data is **not arranged in a simple sequence**.

Instead, it is arranged in **levels**.

---

### 2. Understanding the Levels

Consider:

```text
                    Company
                   /   |   \
                  /    |    \
                HR     IT    Sales
                      /  \
                     /    \
              Backend    Frontend
                 |
             Employees
```

We can understand the hierarchy as:

```text
Level 0 → Company
Level 1 → Departments
Level 2 → Teams
Level 3 → Employees
```

So the data moves from:

```text
Higher level
     ↓
Lower level
```

---

### 3. Parent → Child Relationship

This is the most important concept.

For example:

```text
        Company
        /     \
       HR      IT
              /  \
        Backend Frontend
```

Here:

```text
Company → Parent of HR
Company → Parent of IT

IT → Parent of Backend
IT → Parent of Frontend
```

And:

```text
HR
Backend
Frontend
```

are children of their respective parents.

Therefore:

> **A hierarchical structure represents data using parent → child relationships.**

---

### 4. Why Not Call It Just a Data Structure?

Because the **relationship between the data** is important.

Suppose we store:

```text
HR
IT
Sales
Backend
Frontend
```

in an array:

```text
[HR, IT, Sales, Backend, Frontend]
```

We have the data, but we don't naturally know:

```text
IT
 ├── Backend
 └── Frontend
```

The hierarchy is missing.

A Tree stores both:

```text
Data
+
Relationship
```

For example:

```text
             Company
                |
          ┌─────┼─────┐
          ↓     ↓     ↓
         HR     IT   Sales
                |
             ┌──┴──┐
             ↓     ↓
          Backend Frontend
```

Now the relationship is clear.

---

### Why Tree Is Especially Useful

A Tree is especially useful when your data naturally has:

* Parent → child relationships
* Multiple levels
* One-to-many relationships
* Categories and subcategories
* Nested structures
* Hierarchical organization

Examples:

```text
File System
HTML DOM
Company Organization
Categories / Subcategories
Family Tree
Database Indexes
Compiler Syntax Tree
```

---

## 5. Important Tree Properties

There are several fundamental rules you should remember.

## Rule 1: A Tree Has a Root

A tree generally starts with one special node called the **root**.

```text
        A
       / \
      B   C
```

`A` is the root.

## Rule 2: Every Node Except Root Has One Parent

For example:

```text
        A
       / \
      B   C
     / \
    D   E
```

Parent relationships:

```text
A → B
A → C
B → D
B → E
```

`B` has exactly one parent: `A`.

`C` has exactly one parent: `A`.

`D` has exactly one parent: `B`.

### Important interview statement

> **Every node in a tree has exactly one parent except the root, which has no parent.**

## 8 Can Two Parents Have the Same Child?

In a standard tree:

> **No.**

For example, this is **not a tree**:

```text
       A       B
        \     /
          ↓
          C
```

Here `C` has two parents:

```text
A → C
B → C
```

That violates the normal tree structure.

A structure where nodes can have multiple parents is generally a **graph**, not a tree.




## 6. Real-World Examples of Trees

Trees are everywhere in computer science.

### ==> File System

Consider:

```text
C:
│
├── Users
│   └── Abhishek
│       ├── Documents
│       ├── Downloads
│       └── Pictures
│
└── Program Files
```

This is naturally a tree.

```text
C:
├── Users
│   └── Abhishek
│       ├── Documents
│       ├── Downloads
│       └── Pictures
└── Program Files
```

###  ==>  HTML DOM

HTML is another major example.

```html
<html>
    <body>
        <div>
            <h1>Hello</h1>
            <p>Welcome</p>
        </div>
    </body>
</html>
```

The browser represents the document as a **DOM tree**.

Conceptually:

```text
             html
              |
             body
              |
             div
            /   \
          h1     p
```

Here:

```text
html
 ↓
body
 ↓
div
 ↓
h1, p
```

This parent-child relationship is exactly what trees represent.

###  ==> Database Indexes

Trees are heavily used in databases.

For example, databases can use tree-based indexes such as:

* B-Tree
* B+ Tree

Instead of scanning every record:

```text
1 → 2 → 3 → 4 → 5 → ... → 1,000,000
```

an appropriate tree-based index can dramatically reduce the search space.

This is one reason tree data structures are extremely important in:

* Databases
* File systems
* Operating systems
* Search systems

###  ==> Organization Structure

A company hierarchy can also be represented as a tree:

```text
                CEO
              /     \
           CTO       CFO
          /   \       |
       Backend Frontend Finance
```

The CEO is at the top.

Managers are below them.

Employees are further below.

This is exactly a hierarchical relationship.

---

