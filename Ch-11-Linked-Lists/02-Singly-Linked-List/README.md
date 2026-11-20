# Singly Linked List

A singly linked list is a chain of nodes. Each node stores a value and a link to the next node. The list keeps a `head` reference to its first node; an empty list has `head = None` (or `null`).

## Core operations

| Operation | Typical time |
|---|---:|
| Read the first node | `O(1)` |
| Search by value | `O(n)` |
| Insert/remove at the head | `O(1)` |
| Append with a tail reference | `O(1)` |
| Insert/remove after a known node | `O(1)` |

Unlike an array, a linked list does not provide constant-time indexing. To reach position `i`, follow links from the head. The `01-Intro-Singly-Linked-List` lesson contains matching JavaScript and Python implementations; existing problem solutions and images are kept in their folders.

## Common mistakes
- Losing the rest of the list: save `node.next` before changing a link.
- Forgetting to update `tail` when removing the last node.
- Walking forever through a cycle: use a visited set or the fast/slow pointer method when appropriate.
