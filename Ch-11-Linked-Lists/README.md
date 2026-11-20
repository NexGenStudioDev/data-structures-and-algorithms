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

The Subtopic column keeps Singly, Doubly, and Circular Linked List practice separate. Rows are ordered Easy, Medium, then Hard.


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | GeeksforGeeks | [Circular Linked List Traversal](https://www.geeksforgeeks.org/problems/circular-linked-list-traversal/1) | Circular Linked List / one complete traversal | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Compare Two Linked Lists](https://www.geeksforgeeks.org/problems/compare-two-linked-lists/1) | Singly Linked List / compare node values | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Delete a Node in Single Linked List](https://www.geeksforgeeks.org/problems/delete-a-node-in-single-linked-list/1) | Singly Linked List / deletion by position | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Delete Middle of Linked List](https://www.geeksforgeeks.org/problems/delete-middle-of-linked-list/1) | Singly Linked List / fast and slow pointers | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Insert at Middle of Linked List](https://www.geeksforgeeks.org/problems/insert-in-middle-of-linked-list/1) | Singly Linked List / insertion at position | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Intersection of Two Sorted Linked Lists](https://www.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1) | Singly Linked List / merge-style intersection | N/A | N/A | To Do |
| Easy | LeetCode | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle) | Singly Linked List / cycle detection | [Question](./02-Singly-Linked-List/LeetCode/Linked%20List%20Cycle/question.md) | [Solution](./02-Singly-Linked-List/LeetCode/Linked%20List%20Cycle/solution.md) | Completed |
| Easy | LeetCode | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists) | Singly Linked List / merge sorted lists | N/A | N/A | To Do |
| Easy | LeetCode | [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/) | Singly Linked List / fast and slow pointers | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Pair Sum in Sorted Doubly Linked List](https://www.geeksforgeeks.org/problems/find-pairs-with-given-sum-in-doubly-linked-list/1) | Doubly Linked List / two-end traversal | N/A | N/A | To Do |
| Easy | LeetCode | [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) | Singly Linked List / reverse and compare | N/A | N/A | To Do |
| Easy | LeetCode | [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) | Singly Linked List / adjacent nodes | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Reverse a Doubly Linked List](https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1) | Doubly Linked List / reverse next and prev | N/A | N/A | To Do |
| Easy | LeetCode | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list) | Singly Linked List / reversal | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Split a Circular Linked List into Two Halves](https://www.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1) | Circular Linked List / slow and fast pointers | N/A | N/A | To Do |
| Easy | LeetCode | [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/) | Singly Linked List / pointer alignment | N/A | N/A | To Do |
| Easy | LeetCode | [Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) | Singly Linked List / remove matching nodes | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Check If Circular Linked List](https://www.geeksforgeeks.org/problems/circular-linked-list/1) | Circular Linked List / verify the closing link | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Insertion in a Doubly Linked List](https://www.geeksforgeeks.org/problems/insert-a-node-in-doubly-linked-list/1) | Doubly Linked List / update next and prev | N/A | N/A | To Do |
| Medium | GeeksforGeeks | [Delete All Occurrences in DLL](https://www.geeksforgeeks.org/problems/delete-all-occurrences-of-a-given-key-in-a-doubly-linked-list/1) | Doubly Linked List / deletion and prev links | N/A | N/A | To Do |
| Medium | GeeksforGeeks | [Insert at Beginning of Circular Linked List](https://www.geeksforgeeks.org/problems/insertion-at-the-beginning-of-circular-linked-list/1) | Circular Linked List / head and tail links | N/A | N/A | To Do |
| Medium | LeetCode | [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii) | Singly Linked List / cycle entry detection | N/A | N/A | To Do |
| Medium | LeetCode | [LRU Cache](https://leetcode.com/problems/lru-cache) | Doubly Linked List / LRU cache design | N/A | N/A | To Do |
| Medium | LeetCode | [Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list) | Singly Linked List / pointer rewiring | [Question](./02-Singly-Linked-List/LeetCode/Odd%20Even%20Linked%20List/Question.md) | [Solution](./02-Singly-Linked-List/LeetCode/Odd%20Even%20Linked%20List/Approch1.md) | Completed |
| Medium | LeetCode | [Remove Nth Node From End](https://leetcode.com/problems/remove-nth-node-from-end) | Singly Linked List / remove by end offset | N/A | N/A | To Do |
| Medium | LeetCode | [Sort List](https://leetcode.com/problems/sort-list) | Singly Linked List / merge sort | N/A | N/A | To Do |
| Medium | LeetCode | [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) | Singly Linked List / pointer rewiring | N/A | N/A | To Do |
| Medium | LeetCode | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | Singly Linked List / digit-wise addition and carry | N/A | N/A | To Do |
| Medium | LeetCode | [Copy List with Random Pointer](https://leetcode.com/problems/copy-list-with-random-pointer/) | Singly Linked List / deep copy with random links | N/A | N/A | To Do |
| Medium | LeetCode | [Flatten a Multilevel Doubly Linked List](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) | Doubly Linked List / splice child lists | N/A | N/A | To Do |
| Medium | LeetCode | [Reorder List](https://leetcode.com/problems/reorder-list/) | Singly Linked List / split, reverse, and merge | N/A | N/A | To Do |
| Medium | LeetCode | [Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/) | Singly Linked List / delete with only a node reference | N/A | N/A | To Do |
| Medium | GeeksforGeeks | [Reverse a Circular Linked List](https://www.geeksforgeeks.org/problems/reverse-the-circular-linked-list/1) | Circular Linked List / reverse next links | N/A | N/A | To Do |
| Medium | TakeUForward | [Rotate a LL](https://takeuforward.org/practice/dsa/rotate-a-ll) | Singly Linked List / rotate by k positions | N/A | N/A | To Do |
| Hard | LeetCode | [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists) | Singly Linked List / merge k sorted lists | [Question](./02-Singly-Linked-List/LeetCode/Merge%20k%20Sorted%20Lists/Question.md) | [Solution](./02-Singly-Linked-List/LeetCode/Merge%20k%20Sorted%20Lists/Solution/Approch1.md) · [Solution](./02-Singly-Linked-List/LeetCode/Merge%20k%20Sorted%20Lists/Solution/Approch2.md) · [Solution](./02-Singly-Linked-List/LeetCode/Merge%20k%20Sorted%20Lists/Solution/Approch3.md) | Completed |
| Hard | LeetCode | [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/) | Singly Linked List / grouped reversal | N/A | N/A | To Do |
