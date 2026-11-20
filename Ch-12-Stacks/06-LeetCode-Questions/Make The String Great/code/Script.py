"""LeetCode 1544: remove adjacent same-letter pairs of opposite case."""


def make_good(s):
    stack = []
    for char in s:
        if stack and stack[-1] != char and stack[-1].lower() == char.lower():
            stack.pop()
        else:
            stack.append(char)
    return "".join(stack)
