# Circular Linked List

In a circular list, the final node points back to the first node instead of `null`. A tail-only representation can find the head at `tail.next`.

```text
head = tail.next
       ↓        ↘
      [A] → [B] → [C]
       ↑____________|
```

Do not traverse with `while (node !== null)`: the list has no null end. Stop when you return to the start node. Adding at the back is `O(1)` with a tail pointer; searching is `O(n)`. Implementations are in `code/`.
