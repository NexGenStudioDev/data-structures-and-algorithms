# Singly Linked List

Each node points forward to at most one next node. The final node points to `null`. Keep a `head` reference, and optionally a `tail` reference.

## Operations

| Operation | With head and tail |
|---|---:|
| Add to front | `O(1)` |
| Add to back | `O(1)` |
| Find by value | `O(n)` |
| Remove first matching value | `O(n)` |
| Read item by index | `O(n)` |

When deleting a node, update the previous node's `next`. Also update `head` or `tail` when the removed node is at an end. See the JavaScript and Python implementations in `code/`.

C++ example: [`code/index.cpp`](./code/index.cpp).
