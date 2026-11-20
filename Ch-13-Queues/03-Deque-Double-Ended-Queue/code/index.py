class Deque:
    def __init__(self, capacity):
        if not isinstance(capacity, int) or capacity < 1:
            raise ValueError("capacity must be positive")
        self.data = [None] * capacity
        self.capacity, self.head, self.size = capacity, 0, 0

    def push_front(self, value):
        if self.size == self.capacity:
            return False
        self.head = (self.head - 1) % self.capacity
        self.data[self.head] = value
        self.size += 1
        return True

    def push_back(self, value):
        if self.size == self.capacity:
            return False
        self.data[(self.head + self.size) % self.capacity] = value
        self.size += 1
        return True

    def pop_front(self):
        if self.size == 0:
            return None
        value = self.data[self.head]
        self.data[self.head] = None
        self.head = (self.head + 1) % self.capacity
        self.size -= 1
        return value

    def pop_back(self):
        if self.size == 0:
            return None
        index = (self.head + self.size - 1) % self.capacity
        value = self.data[index]
        self.data[index] = None
        self.size -= 1
        return value
