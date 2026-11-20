# Solution: Linked List Cycle

## Two-pointer idea

Move `slow` one node at a time and `fast` two nodes at a time. If there is no cycle, `fast` reaches the end. If there is a cycle, the faster pointer eventually catches the slower pointer inside the loop.

```js
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}
```

Compare node references, not node values: different nodes can contain the same value.

**Time:** `O(n)`; **extra space:** `O(1)`. The input list is not modified.
