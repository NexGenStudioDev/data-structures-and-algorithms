# Deque (Double-Ended Queue)

A deque lets us add and remove at both the front and the back. It is useful for sliding windows, task scheduling, and undo/history models.

A circular-array deque uses `head`, `size`, and fixed storage of capacity `c`. The back index is `(head + size) % c`. Each end operation is `O(1)`. State clearly what happens on full or empty operations. See the two implementations in `code/`.
