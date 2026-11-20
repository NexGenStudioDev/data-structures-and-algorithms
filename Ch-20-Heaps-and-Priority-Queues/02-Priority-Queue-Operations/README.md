# Priority Queue Operations

A priority queue removes the item with the highest or lowest priority, not necessarily the oldest item. A binary heap is a common implementation.

For a min-priority queue, `peek` is `O(1)` and `push`/`pop` are `O(log n)`. Searching for an arbitrary value is `O(n)` because a heap only orders parent-child relationships.

If equal priorities need stable order, attach an increasing sequence number and use it as a tie-breaker. The examples use a min-heap and return `undefined`/`None` on empty removal.
