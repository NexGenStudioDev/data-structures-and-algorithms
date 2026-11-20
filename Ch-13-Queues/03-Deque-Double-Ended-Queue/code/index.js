class Deque {
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity < 1) throw new RangeError("capacity must be positive");
    this.data = new Array(capacity); this.capacity = capacity; this.head = 0; this.size = 0;
  }
  isEmpty() { return this.size === 0; }
  isFull() { return this.size === this.capacity; }
  pushFront(value) {
    if (this.isFull()) return false;
    this.head = (this.head - 1 + this.capacity) % this.capacity;
    this.data[this.head] = value; this.size++; return true;
  }
  pushBack(value) {
    if (this.isFull()) return false;
    this.data[(this.head + this.size) % this.capacity] = value; this.size++; return true;
  }
  popFront() {
    if (this.isEmpty()) return undefined;
    const value = this.data[this.head]; this.data[this.head] = undefined;
    this.head = (this.head + 1) % this.capacity; this.size--; return value;
  }
  popBack() {
    if (this.isEmpty()) return undefined;
    const index = (this.head + this.size - 1) % this.capacity;
    const value = this.data[index]; this.data[index] = undefined; this.size--; return value;
  }
}
if (typeof module !== "undefined") module.exports = Deque;
