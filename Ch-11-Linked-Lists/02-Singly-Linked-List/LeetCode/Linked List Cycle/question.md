# Linked List Cycle

Given `head`, the first node of a singly linked list, determine whether following `next` pointers eventually visits a node again. Return `true` if there is a cycle and `false` otherwise.

The list is represented in tests by node links; a repeated value alone does not mean there is a cycle.

## Examples

- `3 → 2 → 0 → -4`, with the last node pointing back to the node containing `2`: `true`
- `1 → 2 → null`: `false`
- `head = null`: `false`

## Constraints

- The number of nodes is in the range `[0, 10^4]`.
- Node values may repeat.
- Do not change the list.
