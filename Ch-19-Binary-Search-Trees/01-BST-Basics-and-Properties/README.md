# Binary Search Tree Basics

A binary search tree (BST) is a binary tree with an ordering rule. In this chapter, every key in the left subtree is smaller than the node key, and every key in the right subtree is larger. The examples ignore duplicate keys; state a different duplicate policy if needed.

Searching follows one path: compare the target, then choose left or right. Operations take `O(h)` time where `h` is the tree height. A balanced tree has `h = O(log n)`; a chain-shaped tree can have `h = O(n)`.

An inorder traversal returns keys in increasing order under this rule.
