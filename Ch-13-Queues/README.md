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

| Problem | Difficulty | Subtopic | Status |
|---|---|---|:---:|
| [LeetCode 622: Design Circular Queue](./02-Circular-Queue/leetCode-question/Design%20Circular%20Queue/) | Medium | Ring Buffer Modulo Math | ✅ Complete |
| LeetCode 232: Implement Queue using Stacks | Easy | Amortized $O(1)$ Dequeue | ⏳ To Do |
| LeetCode 641: Design Circular Deque | Medium | Double-ended Ring Buffer | ⏳ To Do |
| LeetCode 239: Sliding Window Maximum | Hard | Monotonic Deque | ⏳ To Do |
| LeetCode 933: Number of Recent Calls | Easy | Sliding Window Queue | ⏳ To Do |
