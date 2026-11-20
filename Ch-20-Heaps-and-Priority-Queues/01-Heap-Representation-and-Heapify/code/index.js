class MinHeap {
  constructor(values = []) { this.data = [...values]; this._heapify(); }
  get size() { return this.data.length; }
  peek() { return this.data.length ? this.data[0] : undefined; }
  _swap(a,b) { [this.data[a],this.data[b]] = [this.data[b],this.data[a]]; }
  _up(i) { while (i > 0) { const p = Math.floor((i - 1) / 2); if (this.data[p] <= this.data[i]) break; this._swap(p,i); i=p; } }
  _down(i) {
    while (true) {
      let smallest=i, left=2*i+1, right=left+1;
      if (left<this.size && this.data[left]<this.data[smallest]) smallest=left;
      if (right<this.size && this.data[right]<this.data[smallest]) smallest=right;
      if (smallest===i) return; this._swap(i,smallest); i=smallest;
    }
  }
  _heapify() { for (let i=Math.floor(this.size/2)-1;i>=0;i--) this._down(i); }
  push(value) { this.data.push(value); this._up(this.size-1); }
  pop() {
    if (!this.size) return undefined;
    const min=this.data[0], last=this.data.pop();
    if (this.size) { this.data[0]=last; this._down(0); }
    return min;
  }
}
if (typeof module !== "undefined") module.exports = MinHeap;
if (typeof require !== "undefined" && require.main === module) { const heap=new MinHeap([5,2,8,1]); console.log(heap.pop(),heap.pop()); }
