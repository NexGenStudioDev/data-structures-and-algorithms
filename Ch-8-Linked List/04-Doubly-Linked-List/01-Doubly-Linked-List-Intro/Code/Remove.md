# 🗑️ Removing Nodes in a Doubly Linked List

## Prerequisites

Before learning how to remove nodes from a Doubly Linked List, make sure you understand:

- What a Doubly Linked List is
- How nodes are connected using `next` and `prev`
- How nodes are added to the list

📖 Read this document first:

![Add node in DLL](../readme.md)

---

# Removing Nodes in a Doubly Linked List

There are **three** common ways to remove a node from a Doubly Linked List.

1. Remove the First Node (Head)
2. Remove the Last Node (Tail)
3. Remove a Node at Any Index

---

# 1. Removing the First Node

To remove the first node from the list:

- Check if the list is empty.
- If there is only one node, make `head = null`.
- Move the `head` to the next node.
- Set the new head's `prev` pointer to `null`.
- Disconnect the old head.
- Decrease the length of the list.

### Before

```
NULL
 ↑
[A] ⇄ [B] ⇄ [C]
 ↑
Head
```

### After

```
NULL
 ↑
[B] ⇄ [C]
 ↑
Head
```

### Time Complexity

```
O(1)
```

---

# 2. Removing the Last Node

To remove the last node:

- Check if the list is empty.
- If there is only one node, make `head = null`.
- Traverse to the last node.
- Connect the second-last node with `null`.
- Disconnect the last node.
- Decrease the length of the list.

### Before

```
Head
 ↓
[A] ⇄ [B] ⇄ [C]
               ↑
             Tail
```

### After

```
Head
 ↓
[A] ⇄ [B]
```

### Time Complexity

```
O(n)
```

---

# 3. Removing a Node at Any Index

To remove a node at a specific index:

- Validate the index.
- If the index is `0`, remove the head.
- If the index is the last index (`length - 1`), remove the tail.
- Traverse to the required node.
- Connect the previous node with the next node.
- Update both `next` and `prev` pointers.
- Disconnect the removed node.
- Decrease the length.

### Example

Suppose we remove the node at **index 2**.

### Before

```
Index

0      1      2      3

[A] ⇄ [B] ⇄ [C] ⇄ [D]
```

Remove **C**

```
[A] ⇄ [B]     [C]     [D]
```

Reconnect

```
[A] ⇄ [B] ⇄ [D]
```

### Pointer Update

```
current.prev.next = current.next;
current.next.prev = current.prev;
```

Disconnect the removed node

```
current.next = null;
current.prev = null;
```

### Time Complexity

```
O(n)
```

---

# Edge Cases

Always handle these cases while removing a node:

- Empty list
- List contains only one node
- Removing the head
- Removing the tail
- Invalid index
- Removing the only node in the list

---

# Complexity Analysis

| Operation | Time | Space |
|-----------|------|-------|
| Remove Head | O(1) | O(1) |
| Remove Tail | O(n) | O(1) |
| Remove at Index | O(n) | O(1) |

---

# Common Mistakes

- ❌ Forgetting to check if the list is empty.
- ❌ Forgetting to update the `prev` pointer.
- ❌ Forgetting to update the `next` pointer.
- ❌ Using `index == length` instead of `index == length - 1`.
- ❌ Forgetting to decrease the list length.
- ❌ Not handling the single-node case.
- ❌ Leaving removed nodes connected instead of setting their pointers to `null`.

---

# Conclusion

Removing nodes from a Doubly Linked List is straightforward once you understand how the `next` and `prev` pointers work. The key idea is to reconnect the neighboring nodes correctly while handling special cases like the head, tail, empty list, and single-node list.