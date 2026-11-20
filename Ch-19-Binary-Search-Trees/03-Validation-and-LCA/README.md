# Validate a BST and Find the LCA

To validate a BST, pass an allowed range down the tree. A node must fit the range set by every ancestor; checking only parent-child pairs is not enough.

For two values that both exist in a BST, their lowest common ancestor is the first node where the search paths split (or one target equals the node). Time is `O(h)` for validation overall and `O(h)` for one LCA query; recursion uses `O(h)` stack.
