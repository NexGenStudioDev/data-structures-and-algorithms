# BST Search, Insert, and Delete

Search and insert follow comparisons from root to leaf. Deletion has three cases:

1. Leaf: remove it.
2. One child: connect the parent to that child.
3. Two children: replace with the next key in inorder order (the minimum of the right subtree), then remove that replacement node from its old place.

All operations are `O(h)` and use `O(h)` call stack in these recursive examples. See JavaScript and Python code.

C++ example: [`code/index.cpp`](./code/index.cpp).
