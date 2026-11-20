class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def prepend(self, value):
        node = Node(value)
        node.next = self.head
        self.head = node
        if self.tail is None:
            self.tail = node
        self.length += 1

    def append(self, value):
        node = Node(value)
        if self.tail is None:
            self.head = node
        else:
            self.tail.next = node
        self.tail = node
        self.length += 1

    def find(self, value):
        node = self.head
        while node is not None:
            if node.value == value:
                return node
            node = node.next
        return None

    def remove_first(self, value):
        previous, current = None, self.head
        while current is not None and current.value != value:
            previous, current = current, current.next
        if current is None:
            return False
        if previous is None:
            self.head = current.next
        else:
            previous.next = current.next
        if current is self.tail:
            self.tail = previous
        current.next = None
        self.length -= 1
        return True

    def to_list(self):
        values, node = [], self.head
        while node is not None:
            values.append(node.value)
            node = node.next
        return values

if __name__ == "__main__":
    linked = SinglyLinkedList()
    linked.append(4); linked.append(8); linked.prepend(2)
    linked.remove_first(8)
    print(linked.to_list())  # [2, 4]
