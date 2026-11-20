"""LeetCode 225: two valid queue-based stack designs."""


class MyStackPushCostly:
    """Push is O(n); pop and top are O(1)."""
    def __init__(self):
        self._main = []
        self._helper = []

    def push(self, value):
        self._helper.append(value)
        while self._main:
            self._helper.append(self._main.pop(0))
        self._main, self._helper = self._helper, self._main

    def pop(self):
        return self._main.pop(0) if self._main else -1

    def top(self):
        return self._main[0] if self._main else -1

    def empty(self):
        return not self._main


class MyStackPopCostly:
    """Push is O(1); pop and top are O(n)."""
    def __init__(self):
        self._queue = []

    def push(self, value):
        self._queue.append(value)

    def pop(self):
        if not self._queue:
            return -1
        for _ in range(len(self._queue) - 1):
            self._queue.append(self._queue.pop(0))
        return self._queue.pop(0)

    def top(self):
        if not self._queue:
            return -1
        value = self.pop()
        self.push(value)
        return value

    def empty(self):
        return not self._queue
