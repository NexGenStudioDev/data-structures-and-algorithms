"""Return a function that yields n, n+1, n+2, ... on each call."""


def create_counter(n):
    current = n

    def next_value():
        nonlocal current
        value = current
        current += 1
        return value

    return next_value
