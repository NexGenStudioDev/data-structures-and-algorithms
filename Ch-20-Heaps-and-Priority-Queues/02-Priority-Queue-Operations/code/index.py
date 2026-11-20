import heapq
import itertools

class PriorityQueue:
    def __init__(self):
        self._heap = []
        self._order = itertools.count()

    def push(self, value, priority):
        heapq.heappush(self._heap, (priority, next(self._order), value))

    def peek(self):
        return self._heap[0][2] if self._heap else None

    def pop(self):
        return heapq.heappop(self._heap)[2] if self._heap else None

if __name__ == "__main__":
    queue = PriorityQueue(); queue.push("low", 5); queue.push("urgent", 1)
    print(queue.pop())  # urgent
