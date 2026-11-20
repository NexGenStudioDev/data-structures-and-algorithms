# Chapter 13: Queues

> **Master the First-In, First-Out (FIFO) paradigm, Circular Buffers, and Deques.**  
> Queues allow element insertion at the rear (enqueue) and removal from the front (dequeue).

---

## 📌 Chapter Directory Structure

```text
Ch-13-Queues/
├── 01-Standard-Queue/
│   ├── Ch-01-Intro/
│   ├── Ch-2-Queue-Implementation/
│   ├── Ch-3-Implementing-Queue-Operations/
│   ├── Ch-4-Complete-Queue-Implementation-in-JavaScript/
│   └── Ch-5-Protecting-the-Queue-in-JavaScript/
├── 02-Circular-Queue/
│   └── leetCode-question/Design Circular Queue/
├── 03-Deque-Double-Ended-Queue/
├── 04-Monotonic-Queue/
├── README.md
└── .gitignore
```

---

## 🎯 Queue Variants

1. **Linear Queue:** Simple FIFO, but using array `shift()` is $O(N)$ unless implemented with pointers or linked list.
2. **Circular Queue:** Uses a fixed-size ring buffer with modulo arithmetic:
   $$\text{rear} = (\text{rear} + 1) \bmod \text{capacity}$$
   Prevents memory wastage and provides strictly $O(1)$ enqueue and dequeue operations.
3. **Double-Ended Queue (Deque):** Allows $O(1)$ push and pop from **both** ends (front and rear). Essential for sliding window maximum.
4. **Monotonic Queue:** Deque maintained in monotonic order to query minimum or maximum of a sliding window in amortized $O(1)$ time.

---

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | TakeUForward | [Implement Queue Using Arrays](https://takeuforward.org/practice/dsa/implement-queue-using-arrays) | Queues | N/A | N/A | To Do |
| Easy | LeetCode | [Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls) | Sliding Window Queue | N/A | N/A | To Do |
| Easy | GeeksforGeeks | [Queue Using Linked List](https://www.geeksforgeeks.org/problems/implement-queue-using-linked-list/0) | Queues | N/A | N/A | To Do |
| Medium | LeetCode | [Design Circular Deque](https://leetcode.com/problems/design-circular-deque) | Double-ended Ring Buffer | N/A | N/A | To Do |
| Medium | LeetCode | [Design Circular Queue](https://leetcode.com/problems/design-circular-queue/) | Circular queue design | [Question](./02-Circular-Queue/leetCode-question/Design%20Circular%20Queue/question.md) | [Solution](./02-Circular-Queue/leetCode-question/Design%20Circular%20Queue/Solution/Approch1.md) | Completed |
| Medium | LeetCode | [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) | Queue implementation using stacks | [Question](../Ch-12-Stacks/06-LeetCode-Questions/Implement%20Queue%20using%20Stacks/Question.md) | [Solution](../Ch-12-Stacks/06-LeetCode-Questions/Implement%20Queue%20using%20Stacks/docs/Approch1.Solution.md) | Completed |
| Hard | LeetCode | [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum) | Monotonic Deque | N/A | N/A | To Do |
