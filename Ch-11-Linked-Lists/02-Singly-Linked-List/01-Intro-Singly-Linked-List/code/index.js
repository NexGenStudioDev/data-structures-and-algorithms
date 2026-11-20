class Node {
  constructor(value) { this.value = value; this.next = null; }
}

class SinglyLinkedList {
  constructor() { this.head = null; this.tail = null; this.length = 0; }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    if (this.tail === null) this.tail = node;
    this.length++;
  }

  append(value) {
    const node = new Node(value);
    if (this.tail === null) this.head = node;
    else this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  find(value) {
    for (let node = this.head; node !== null; node = node.next) {
      if (node.value === value) return node;
    }
    return null;
  }

  removeFirst(value) {
    let previous = null;
    let current = this.head;
    while (current !== null && current.value !== value) { previous = current; current = current.next; }
    if (current === null) return false;
    if (previous === null) this.head = current.next;
    else previous.next = current.next;
    if (current === this.tail) this.tail = previous;
    current.next = null;
    this.length--;
    return true;
  }

  toArray() {
    const values = [];
    for (let node = this.head; node !== null; node = node.next) values.push(node.value);
    return values;
  }
}

if (typeof module !== "undefined") module.exports = { Node, SinglyLinkedList };
if (typeof require !== "undefined" && require.main === module) {
  const list = new SinglyLinkedList();
  list.append(4); list.append(8); list.prepend(2);
  list.removeFirst(8);
  console.log(list.toArray()); // [2, 4]
}
