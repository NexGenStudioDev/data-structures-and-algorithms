# Chapter 11: Linked Lists

> **Master dynamic node-pointer data structures in linear memory.**  
> A linked list consists of nodes where each node contains data and one or more pointers referencing other nodes.

---

## 📌 Chapter Directory Structure

```text
Ch-11-Linked-Lists/
├── 01-Linked-List-Intro/
├── 02-Singly-Linked-List/
│   ├── 01-Intro-Singly-Linked-List/
│   └── LeetCode/
│       ├── Linked List Cycle/
│       ├── Odd Even Linked List/
│       └── Merge k Sorted Lists/
├── 03-Doubly-Linked-List/
│   └── 01-Doubly-Linked-List-Intro/
├── 04-Circular-Linked-List/
├── README.md
└── .gitignore
```

---

## 🎯 Architectural Comparison

| Structure | Memory Overhead | Traversal Direction | Insert / Delete at Head | Insert / Delete at Tail |
|---|---|---|---|---|
| **Singly Linked List** | 1 pointer per node (`next`) | Forward only | $O(1)$ | $O(N)$ (without tail pointer) |
| **Doubly Linked List** | 2 pointers per node (`prev`, `next`) | Forward & Backward | $O(1)$ | $O(1)$ (with tail pointer) |
| **Circular Linked List** | 1 or 2 pointers (`tail.next = head`) | Endless loop | $O(1)$ | $O(1)$ (with tail pointer) |

---

## ⚡ The Golden Rules of Linked List Problems
1. **Sentinel / Dummy Head:** Always use a dummy node (`dummy = new ListNode(-1); dummy.next = head;`) to eliminate special edge cases when modifying or removing the head.
2. **Preserve Next Pointer Before Re-wiring:**
   ```javascript
   let nextNode = curr.next; // Save reference
   curr.next = prev;         // Reverse pointer
   prev = curr;              // Advance prev
   curr = nextNode;          // Advance curr
   ```
3. **Draw Node Diagrams:** Never code pointer manipulations blind. Sketch the nodes, labels, and arrow transformations first.

---

## 📝 Practice Roadmap

| Problem | Difficulty | Subtopic | Status |
|---|---|---|:---:|
| [LeetCode 141: Linked List Cycle](./02-Singly-Linked-List/LeetCode/Linked%20List%20Cycle/) | Easy | Floyd's Fast & Slow Pointers | ✅ Complete |
| [LeetCode 328: Odd Even Linked List](./02-Singly-Linked-List/LeetCode/Odd%20Even%20Linked%20List/) | Medium | In-place Pointer Re-wiring | ✅ Complete |
| [LeetCode 23: Merge k Sorted Lists](./02-Singly-Linked-List/LeetCode/Merge%20k%20Sorted%20Lists/) | Hard | Min-Heap / Divide & Conquer | ✅ Complete |
| LeetCode 206: Reverse Linked List | Easy | Iterative & Recursive Reversal | ⏳ To Do |
| LeetCode 21: Merge Two Sorted Lists | Easy | Two Pointers with Dummy Node | ⏳ To Do |
| LeetCode 19: Remove Nth Node From End | Medium | Two Pointers with Offset | ⏳ To Do |
| LeetCode 146: LRU Cache | Medium | Doubly Linked List + Hash Map | ⏳ To Do |
