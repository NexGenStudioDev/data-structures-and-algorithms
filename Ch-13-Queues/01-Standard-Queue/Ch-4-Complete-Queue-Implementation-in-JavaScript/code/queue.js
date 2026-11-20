// Array-backed FIFO queue. A head index avoids shifting on every dequeue.
class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("dequeue from empty queue");
    const value = this.items[this.head++];
    if (this.head > 32 && this.head * 2 >= this.items.length) {
      this.items = this.items.slice(this.head);
      this.head = 0;
    }
    return value;
  }

  front() {
    if (this.isEmpty()) throw new Error("front of empty queue");
    return this.items[this.head];
  }

  isEmpty() {
    return this.head === this.items.length;
  }

  size() {
    return this.items.length - this.head;
  }
}

if (typeof module !== "undefined") module.exports = Queue;
