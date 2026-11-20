class MyQueue:
    def __init__(self):
        self.incoming = []
        self.outgoing = []

    def push(self, value):
        self.incoming.append(value)

    def _move_if_needed(self):
        if not self.outgoing:
            while self.incoming:
                self.outgoing.append(self.incoming.pop())

    def pop(self):
        self._move_if_needed()
        return self.outgoing.pop() if self.outgoing else None

    def peek(self):
        self._move_if_needed()
        return self.outgoing[-1] if self.outgoing else None

    def empty(self):
        return not self.incoming and not self.outgoing

if __name__ == "__main__":
    queue = MyQueue(); queue.push(1); queue.push(2)
    print(queue.peek(), queue.pop(), queue.empty())
