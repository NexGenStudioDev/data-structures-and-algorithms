# Odd Even Linked List

**Question link:** [LeetCode problem](https://leetcode.com/problems/odd-even-linked-list/)

Given the head of a singly linked list, group nodes at odd positions first, followed by nodes at even positions, while keeping the original order within each group. Positions are one-based; this is about position, not the node value. Return the updated head.

## Examples

- `1 → 2 → 3 → 4 → 5` becomes `1 → 3 → 5 → 2 → 4`.
- `2 → 1 → 3 → 5 → 6 → 4 → 7` becomes `2 → 3 → 6 → 7 → 1 → 5 → 4`.
- An empty or one-node list stays unchanged.

**Expected:** `O(n)` time and `O(1)` extra space by changing links in place.
