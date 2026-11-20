def is_valid_bst(root, low=float("-inf"), high=float("inf")):
    if root is None:
        return True
    if not low < root.value < high:
        return False
    return is_valid_bst(root.left, low, root.value) and is_valid_bst(root.right, root.value, high)

def lowest_common_ancestor(root, a, b):
    while root is not None:
        if a < root.value and b < root.value:
            root = root.left
        elif a > root.value and b > root.value:
            root = root.right
        else:
            return root
    return None
