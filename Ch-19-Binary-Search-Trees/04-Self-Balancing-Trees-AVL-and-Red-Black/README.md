# Self-Balancing BSTs: AVL and Red-Black Trees

An ordinary BST can become a chain when values arrive in sorted order. Self-balancing trees rotate nodes after updates to keep height logarithmic.

- **AVL trees** keep left/right subtree heights very close. They may rotate more often, which can help lookup-heavy workloads.
- **Red-Black trees** use a color rule to keep height within a constant factor of logarithmic. They often trade a little lookup height for fewer update rotations.

Both support search, insertion, and deletion in `O(log n)` worst-case time. A rotation preserves inorder order. This folder is an explanation and diagram exercise; it does not claim a production-ready balancing implementation.
