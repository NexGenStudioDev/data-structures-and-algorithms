"""LeetCode 205: check for a one-to-one character mapping."""


def is_isomorphic(s, t):
    if len(s) != len(t):
        return False
    forward, backward = {}, {}
    for left, right in zip(s, t):
        if left in forward and forward[left] != right:
            return False
        if right in backward and backward[right] != left:
            return False
        forward[left] = right
        backward[right] = left
    return True
