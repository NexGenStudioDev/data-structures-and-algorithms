# Linked List: The Basic Idea

A linked list stores values in nodes. Each node keeps a value and a reference to another node. Unlike an array, the nodes do not need to sit next to one another in memory.

```text
head → [4 | next] → [8 | next] → [2 | null]
```

The `head` reference starts the list. Following `next` visits the nodes. Reading the item at position `i` takes `O(n)` because we walk from the head. Adding at the head takes `O(1)`. Adding at the tail is `O(1)` only when the list stores a tail reference.

Choose a linked list when links change often or when you already have the target node. Choose an array when you need fast indexed access. More examples: [singly linked list](../02-Singly-Linked-List/01-Intro-Singly-Linked-List/README.md), [doubly linked list](../03-Doubly-Linked-List/01-Doubly-Linked-List-Intro/readme.md), and [circular list](../04-Circular-Linked-List/README.md).
