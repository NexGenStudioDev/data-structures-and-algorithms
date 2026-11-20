class Node:
    def __init__(self, value):
        self.value, self.left, self.right = value, None, None

def insert(root, value):
    if root is None:
        return Node(value)
    if value < root.value:
        root.left = insert(root.left, value)
    elif value > root.value:
        root.right = insert(root.right, value)
    return root  # duplicate keys are ignored

def search(root, value):
    if root is None or root.value == value:
        return root
    return search(root.left, value) if value < root.value else search(root.right, value)

def _minimum(node):
    while node.left is not None:
        node = node.left
    return node

def remove(root, value):
    if root is None:
        return None
    if value < root.value:
        root.left = remove(root.left, value)
    elif value > root.value:
        root.right = remove(root.right, value)
    elif root.left is None:
        return root.right
    elif root.right is None:
        return root.left
    else:
        successor = _minimum(root.right)
        root.value = successor.value
        root.right = remove(root.right, successor.value)
    return root

def inorder(root):
    return inorder(root.left) + [root.value] + inorder(root.right) if root else []

if __name__ == "__main__":
    root = None
    for value in [8, 3, 10, 1, 6]:
        root = insert(root, value)
    root = remove(root, 3)
    print(inorder(root))
