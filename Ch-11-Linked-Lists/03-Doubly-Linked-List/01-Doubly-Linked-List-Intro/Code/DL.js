class Node {
  constructor(name) {
    this.prev = null;
    this.val = name;
    this.next = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }

  // Add at beginning
  addAtFirst(name) {
    const newNode = new Node(name);

    if (this.head !== null) {
      newNode.next = this.head;
      this.head.prev = newNode;
    }

    this.head = newNode;
    if (this.tail === null) this.tail = newNode;
    this.len++;
  }

  // Add at end
  addAtLast(name) {
    const newNode = new Node(name);

    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.len++;
  }

  // Add at any index
  addAtIndex(index, name) {
    if (index < 0 || index > this.len) {
      console.log("Invalid Index");
      return;
    }

    if (index === 0) {
      this.addAtFirst(name);
      return;
    }

    if (index === this.len) {
      this.addAtLast(name);
      return;
    }

    const newNode = new Node(name);

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    newNode.prev = current;

    current.next.prev = newNode;
    current.next = newNode;

    this.len++;
  }

  removeHead() {
    if (this.head === null) return null;

    const removed = this.head;
    this.head = removed.next;
    if (this.head !== null) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    removed.next = null;
    this.len--;
    return removed.val;
  }

  removeTail() {
    if (this.head === null) return null;

    const current = this.tail;
    this.tail = current.prev;

    if (this.tail === null) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    current.prev = null;
    this.len--;
    return current.val;
  }

removeAtIndex(index) {
  if (index < 0 || index >= this.len) {
    console.log("Invalid Index");
    return;
  }

  // Remove first node
  if (index === 0) {
    this.removeHead();
    return;
  }

  // Remove last node
  if (index === this.len - 1) {
    this.removeTail();
    return;
  }

  let current = this.head;

  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  current.prev.next = current.next;
  current.next.prev = current.prev;

  current.next = null;
  current.prev = null;

  this.len--;
}

  // Print List
  print() {
    let current = this.head;

    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
}

if (typeof module !== "undefined") module.exports = DLL;

// Example
if (typeof require !== "undefined" && require.main === module) {
  const students = new DLL();
  students.addAtFirst("Rahul");
  students.addAtFirst("Priya");
  students.addAtFirst("Amit");
  students.addAtIndex(0, "Abhishek");
  students.addAtIndex(3, "Sneha");
  students.removeHead();
  students.removeTail();
  students.print();
  console.log("Length:", students.len);
}

