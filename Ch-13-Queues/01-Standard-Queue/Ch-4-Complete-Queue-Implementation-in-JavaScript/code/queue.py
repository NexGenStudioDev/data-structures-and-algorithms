"""Array-backed FIFO queue with an advancing head index."""


class Queue:
    def __init__(self):
        self._items = []
        self._head = 0

    def enqueue(self, value):
        self._items.append(value)

    def dequeue(self):
        if self.is_empty():
            raise IndexError("dequeue from empty queue")
        value = self._items[self._head]
        self._head += 1
        if self._head > 32 and self._head * 2 >= len(self._items):
            self._items = self._items[self._head:]
            self._head = 0
        return value

    def front(self):
        if self.is_empty():
            raise IndexError("front of empty queue")
        return self._items[self._head]

    def is_empty(self):
        return self._head == len(self._items)

    def size(self):
        return len(self._items) - self._head


if __name__ == "__main__":
    queue = Queue()
    queue.enqueue("first")
    queue.enqueue("second")
    print(queue.dequeue())
