"""LeetCode 341 iterator using a stack of nested-list iterators."""


class NestedIterator:
    def __init__(self, nested_list):
        self._stack = [iter(nested_list)]
        self._next_value = None
        self._ready = False

    def hasNext(self):
        if self._ready:
            return True
        while self._stack:
            try:
                item = next(self._stack[-1])
            except StopIteration:
                self._stack.pop()
                continue
            if item.isInteger():
                self._next_value = item.getInteger()
                self._ready = True
                return True
            self._stack.append(iter(item.getList()))
        return False

    def next(self):
        if not self.hasNext():
            return None
        self._ready = False
        value = self._next_value
        self._next_value = None
        return value
