class MinHeap:
    def __init__(self, values=()):
        self.data = list(values)
        for i in range(len(self.data) // 2 - 1, -1, -1):
            self._down(i)

    def _down(self, i):
        n = len(self.data)
        while True:
            smallest = i
            left, right = 2 * i + 1, 2 * i + 2
            if left < n and self.data[left] < self.data[smallest]:
                smallest = left
            if right < n and self.data[right] < self.data[smallest]:
                smallest = right
            if smallest == i:
                return
            self.data[i], self.data[smallest] = self.data[smallest], self.data[i]
            i = smallest

    def push(self, value):
        self.data.append(value)
        i = len(self.data) - 1
        while i > 0:
            parent = (i - 1) // 2
            if self.data[parent] <= self.data[i]:
                break
            self.data[parent], self.data[i] = self.data[i], self.data[parent]
            i = parent

    def pop(self):
        if not self.data:
            return None
        minimum = self.data[0]
        last = self.data.pop()
        if self.data:
            self.data[0] = last
            self._down(0)
        return minimum

if __name__ == "__main__":
    heap = MinHeap([5, 2, 8, 1])
    print(heap.pop(), heap.pop())
