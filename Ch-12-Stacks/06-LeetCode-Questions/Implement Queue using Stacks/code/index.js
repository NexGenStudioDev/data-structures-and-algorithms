class MyQueue {
  constructor() { this.incoming = []; this.outgoing = []; }
  push(value) { this.incoming.push(value); }
  _moveIfNeeded() {
    if (this.outgoing.length === 0) while (this.incoming.length > 0) this.outgoing.push(this.incoming.pop());
  }
  pop() { this._moveIfNeeded(); return this.outgoing.pop(); }
  peek() { this._moveIfNeeded(); return this.outgoing[this.outgoing.length - 1]; }
  empty() { return this.incoming.length === 0 && this.outgoing.length === 0; }
}
if (typeof module !== "undefined") module.exports = MyQueue;
if (typeof require !== "undefined" && require.main === module) { const q = new MyQueue(); q.push(1); q.push(2); console.log(q.peek(), q.pop(), q.empty()); }
