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

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | GeeksforGeeks | [Compare Two Linked Lists](https://www.geeksforgeeks.org/problems/compare-two-linked-lists/1) | Linked Lists | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Intersection of Two Sorted Linked Lists](https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1) | Linked Lists | N/A | N/A | To Do |
| Easy | LeetCode | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle) | Floyd's Fast & Slow Pointers | [Question](./02-Singly-Linked-List/LeetCode/Linked%20List%20Cycle/question.md) | [MD](./02-Singly-Linked-List/LeetCode/Linked%20List%20Cycle/solution.md) | Completed |
| Easy | LeetCode | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists) | Two Pointers with Dummy Node | N/A | N/A | To Do |
| Easy | LeetCode | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list) | Iterative & Recursive Reversal | N/A | N/A | To Do |
| Medium | LeetCode | [LRU Cache](https://leetcode.com/problems/lru-cache) | Doubly Linked List + Hash Map | N/A | N/A | To Do |
| Medium | LeetCode | [Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list) | In-place Pointer Re-wiring | [Question](./02-Singly-Linked-List/LeetCode/Odd%20Even%20Linked%20List/Question.md) | [MD](./02-Singly-Linked-List/LeetCode/Odd%20Even%20Linked%20List/Approch1.md) | Completed |
| Medium | LeetCode | [Remove Nth Node From End](https://leetcode.com/problems/remove-nth-node-from-end) | Two Pointers with Offset | N/A | N/A | To Do |
| Hard | LeetCode | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists) | Min-Heap / Divide & Conquer | [Question](./02-Singly-Linked-List/LeetCode/Merge%20k%20Sorted%20Lists/Question.md) | [MD](./02-Singly-Linked-List/LeetCode/Merge%20k%20Sorted%20Lists/Solution/Approch1.md) · [MD](./02-Singly-Linked-List/LeetCode/Merge%20k%20Sorted%20Lists/Solution/Approch2.md) · [MD](./02-Singly-Linked-List/LeetCode/Merge%20k%20Sorted%20Lists/Solution/Approch3.md) | Completed |
