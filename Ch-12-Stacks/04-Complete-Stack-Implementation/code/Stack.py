"""Array-backed stack with the standard LIFO operations."""


class Stack:
    def __init__(self):
        self._items = []

    def push(self, value):
        self._items.append(value)

    def pop(self):
        if self.is_empty():
            raise IndexError("pop from empty stack")
        return self._items.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("peek at empty stack")
        return self._items[-1]

    def is_empty(self):
        return not self._items

    def size(self):
        return len(self._items)


if __name__ == "__main__":
    stack = Stack()
    stack.push("first")
    stack.push("second")
    print(stack.peek())  # second
    print(stack.pop())
