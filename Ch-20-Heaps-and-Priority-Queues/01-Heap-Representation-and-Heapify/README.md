# Heap Representation and Heapify

A binary heap is a complete binary tree stored in an array. For zero-based index `i`, children are `2i + 1` and `2i + 2`; parent is `floor((i - 1) / 2)`.

In a min-heap each parent is no larger than its children, so the minimum is at the root. The array is not fully sorted. Bottom-up heapify takes `O(n)` time; inserting one item takes `O(log n)`.

See `code/` for JavaScript and Python min-heaps.

The C++ example is [`code/index.cpp`](./code/index.cpp).
