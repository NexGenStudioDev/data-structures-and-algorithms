class CircularList {
  constructor() { this.tail = null; this.length = 0; }
  append(value) {
    const node = { value, next: null };
    if (this.tail === null) { node.next = node; this.tail = node; }
    else { node.next = this.tail.next; this.tail.next = node; this.tail = node; }
    this.length++;
  }
  removeFront() {
    if (this.tail === null) return undefined;
    const head = this.tail.next;
    if (head === this.tail) this.tail = null;
    else this.tail.next = head.next;
    this.length--;
    return head.value;
  }
  toArray() {
    if (this.tail === null) return [];
    const result = [];
    const head = this.tail.next;
    let node = head;
    do { result.push(node.value); node = node.next; } while (node !== head);
    return result;
  }
}
if (typeof module !== "undefined") module.exports = CircularList;
if (typeof require !== "undefined" && require.main === module) { const list = new CircularList(); list.append(1); list.append(2); console.log(list.toArray()); }
