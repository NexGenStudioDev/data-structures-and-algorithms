function topKLargest(values, k) {
  if (!Number.isInteger(k) || k < 0) throw new RangeError("k must be non-negative");
  if (k === 0) return [];
  const heap=[];
  const push=value=>{heap.push(value);let i=heap.length-1;while(i>0){let p=Math.floor((i-1)/2);if(heap[p]<=heap[i])break;[heap[p],heap[i]]=[heap[i],heap[p]];i=p;}};
  const pop=()=>{const min=heap[0],last=heap.pop();if(heap.length){heap[0]=last;let i=0;while(true){let s=i,l=2*i+1,r=l+1;if(l<heap.length&&heap[l]<heap[s])s=l;if(r<heap.length&&heap[r]<heap[s])s=r;if(s===i)break;[heap[i],heap[s]]=[heap[s],heap[i]];i=s;}}return min;};
  for(const value of values){push(value);if(heap.length>k)pop();}
  return heap.sort((a,b)=>b-a);
}
if (typeof module !== "undefined") module.exports=topKLargest;
if (typeof require !== "undefined" && require.main === module) console.log(topKLargest([3,1,5,12,2,11],3));
