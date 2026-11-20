class PriorityQueue {
  constructor() { this.heap=[]; this.order=0; }
  _less(a,b) { return a.priority < b.priority || (a.priority === b.priority && a.order < b.order); }
  _swap(i,j) { [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]; }
  push(value,priority) {
    const item={value,priority,order:this.order++}; this.heap.push(item); let i=this.heap.length-1;
    while(i>0){const p=Math.floor((i-1)/2);if(!this._less(this.heap[i],this.heap[p]))break;this._swap(i,p);i=p;}
  }
  peek(){return this.heap.length?this.heap[0].value:undefined;}
  pop(){
    if(!this.heap.length)return undefined;
    const top=this.heap[0],last=this.heap.pop();
    if(this.heap.length){this.heap[0]=last;let i=0;while(true){let s=i,l=2*i+1,r=l+1;if(l<this.heap.length&&this._less(this.heap[l],this.heap[s]))s=l;if(r<this.heap.length&&this._less(this.heap[r],this.heap[s]))s=r;if(s===i)break;this._swap(i,s);i=s;}}
    return top.value;
  }
}
if (typeof module !== "undefined") module.exports=PriorityQueue;
if (typeof require !== "undefined" && require.main === module) {const q=new PriorityQueue();q.push("low",5);q.push("urgent",1);console.log(q.pop());}
