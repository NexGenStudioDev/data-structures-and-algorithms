class CircularList:
    def __init__(self):
        self.tail = None
        self.length = 0

    def append(self, value):
        node = {"value": value, "next": None}
        if self.tail is None:
            node["next"] = node
            self.tail = node
        else:
            node["next"] = self.tail["next"]
            self.tail["next"] = node
            self.tail = node
        self.length += 1

    def remove_front(self):
        if self.tail is None:
            return None
        head = self.tail["next"]
        if head is self.tail:
            self.tail = None
        else:
            self.tail["next"] = head["next"]
        self.length -= 1
        return head["value"]

    def to_list(self):
        if self.tail is None:
            return []
        head = self.tail["next"]
        result, node = [], head
        while True:
            result.append(node["value"])
            node = node["next"]
            if node is head:
                return result

if __name__ == "__main__":
    linked = CircularList(); linked.append(1); linked.append(2)
    print(linked.to_list())  # [1, 2]
