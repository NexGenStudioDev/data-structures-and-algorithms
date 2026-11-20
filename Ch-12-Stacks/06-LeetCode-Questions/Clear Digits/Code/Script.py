"""LeetCode 3174: each digit removes the closest previous letter."""


def clear_digits(s):
    stack = []
    for char in s:
        if "0" <= char <= "9":
            if stack:
                stack.pop()
        else:
            stack.append(char)
    return "".join(stack)
