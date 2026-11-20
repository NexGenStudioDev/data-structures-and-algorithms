"""Small doubly linked list with append and removal by value."""


class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None


class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, value):
        node = Node(value)
        if self.tail is None:
            self.head = self.tail = node
        else:
            node.prev = self.tail
            self.tail.next = node
            self.tail = node
        return node

    def remove(self, node):
        if node.prev is None:
            self.head = node.next
        else:
            node.prev.next = node.next
        if node.next is None:
            self.tail = node.prev
        else:
            node.next.prev = node.prev
        node.prev = node.next = None

    def values(self):
        result, current = [], self.head
        while current is not None:
            result.append(current.value)
            current = current.next
        return result


if __name__ == "__main__":
    linked = DoublyLinkedList()
    first = linked.append("A")
    linked.append("B")
    linked.remove(first)
    print(linked.values())
