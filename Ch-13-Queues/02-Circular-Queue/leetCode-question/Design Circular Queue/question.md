# 622. Design Circular Queue


https://leetcode.com/problems/design-circular-queue/description


## Problem Statement

You are asked to **design a Circular Queue from scratch**.

Before understanding a circular queue, let's recall how a normal queue works.

A **Queue** is a data structure that follows the **FIFO (First In, First Out)** principle:

```text
First element inserted
        ↓
      [10] [20] [30] [40]
       ↑                    ↑
     Front                Rear
       │                    │
    Remove               Insert
```

* New elements are inserted from the **rear**.
* Elements are removed from the **front**.
* The first element inserted is the first element removed.

---

## 1. Queue Behavior in JavaScript

A JavaScript array can be used to behave like a normal queue.

For example:

```javascript
let queue = [1, 2, 3];

console.log(queue.shift());
console.log(queue);
```

Output:

```text
1
[2, 3]
```

`shift()` removes the first element:

```text
Before:

[1, 2, 3]
 ↑
Front


After:

[2, 3]
 ↑
Front
```

Similarly, `push()` can insert an element at the back:

```javascript
queue.push(4);
```

So a simple JavaScript queue can be implemented using:

```text
push()   → insert at rear
shift()  → remove from front
```

However, **this is not how you should solve this problem**.

The purpose of this problem is to understand and implement the queue's internal behavior yourself.

---

# 2. Why Do We Need a Circular Queue?

Consider a queue with a fixed capacity of `5`:

```text
Index:

  0     1     2     3     4
┌─────┬─────┬─────┬─────┬─────┐
│ 10  │ 20  │ 30  │ 40  │ 50  │
└─────┴─────┴─────┴─────┴─────┘
  ↑                         ↑
Front                      Rear
```

The queue is full.

Now remove two elements:

```text
  0     1     2     3     4
┌─────┬─────┬─────┬─────┬─────┐
│  _  │  _  │ 30  │ 40  │ 50  │
└─────┴─────┴─────┴─────┴─────┘
              ↑           ↑
            Front        Rear
```

There are now **two empty positions** at the beginning.

These positions are available memory, but in a simple linear queue, the rear is already at the end.

A Circular Queue solves this problem by allowing the rear to **wrap around to the beginning**.

Conceptually:

```text
       ┌─────────────────────────────┐
       │                             │
       ↓                             │
     [0] → [1] → [2] → [3] → [4] ───┘
```

So the positions behave like:

```text
0 → 1 → 2 → 3 → 4 → 0 → 1 → 2 → ...
```

This is called **circular movement** or **wrap-around**.

---

# 3. Main Benefit

The biggest advantage of a Circular Queue is:

> **It reuses the empty spaces created at the front of the queue.**

For example:

```text
Before:

[10] [20] [30]
 ↑         ↑
Front     Rear
```

After removing `10`:

```text
[ _ ] [20] [30]
       ↑     ↑
     Front  Rear
```

Now inserting `40` should reuse the empty position:

```text
[40] [20] [30]
```

But the **logical queue order** is:

```text
20 → 30 → 40
```

not:

```text
40 → 20 → 30
```

This is an important concept:

> **The physical position of elements in the array does not necessarily represent their logical queue order.**

Your implementation must keep track of the logical order.

---

# 4. Your Task

Design and implement the following class:

```text
MyCircularQueue
```

The queue must have a **fixed capacity `k`**.

You must implement the following operations:

```text
MyCircularQueue(k)
enQueue(value)
deQueue()
Front()
Rear()
isEmpty()
isFull()
```

---

# 5. Constructor

## `MyCircularQueue(k)`

Initialize the Circular Queue with a maximum capacity of `k`.

For example:

```text
MyCircularQueue(3)
```

creates a queue capable of holding at most `3` elements.

Initially:

```text
[ _ ] [ _ ] [ _ ]
```

The queue is empty.

---

# 6. `enQueue(value)`

Insert `value` at the **rear/back** of the queue.

### Return

Return:

```text
true
```

if the insertion was successful.

Return:

```text
false
```

if the queue is already full.

### Example

Capacity:

```text
3
```

Queue:

```text
[10] [20] [30]
```

Calling:

```text
enQueue(40)
```

must return:

```text
false
```

because the queue is full.

---

# 7. `deQueue()`

Remove the element from the **front** of the queue.

### Return

Return:

```text
true
```

if an element was successfully removed.

Return:

```text
false
```

if the queue is empty.

### Example

Before:

```text
Front
  ↓
[10] [20] [30]
```

After:

```text
Front
  ↓
[20] [30]
```

The element `10` has been removed.

---

# 8. `Front()`

Return the element currently at the **front** of the queue.

If the queue is empty, return:

```text
-1
```

Example:

```text
Front
  ↓
[10] [20] [30]
```

Then:

```text
Front() → 10
```

---

# 9. `Rear()`

Return the element currently at the **rear** of the queue.

If the queue is empty, return:

```text
-1
```

Example:

```text
[10] [20] [30]
             ↑
            Rear
```

Then:

```text
Rear() → 30
```

### Important

The rear position and the position where the **next element will be inserted** may not be the same.

You must carefully decide how you will represent the rear in your implementation.

---

# 10. `isEmpty()`

Determine whether the queue currently contains zero elements.

Return:

```text
true
```

if empty.

Otherwise return:

```text
false
```

Example:

```text
[ _ ] [ _ ] [ _ ]
```

```text
isEmpty() → true
```

---

# 11. `isFull()`

Determine whether the queue has reached its maximum capacity.

Return:

```text
true
```

if the queue contains exactly `k` elements.

Otherwise return:

```text
false
```

Example:

```text
Capacity = 3

[10] [20] [30]
```

```text
isFull() → true
```

---

# 12. Important Restriction

You must **not use JavaScript's built-in queue behavior** to solve the problem.

For example, do not implement the queue using:

```javascript
queue.push(value);
```

and:

```javascript
queue.shift();
```

Also do not use:

```javascript
queue.unshift(value);
```

or another built-in data structure that automatically handles queue operations.

### Why?

Because JavaScript already gives you queue-like behavior:

```javascript
let queue = [1, 2, 3];

queue.shift();
```

produces:

```text
[2, 3]
```

But the purpose of this problem is to learn how to implement that behavior **manually**.

You may use an array as **fixed-size storage**, but you must control:

```text
Front
Rear
Size
Wrap-around
```

yourself.

---

# 13. Fixed-Size Storage

Instead of dynamically growing and shrinking the array, think of the queue as fixed storage:

```text
Capacity = 5

Index:
   0    1    2    3    4

┌────┬────┬────┬────┬────┐
│    │    │    │    │    │
└────┴────┴────┴────┴────┘
```

The storage does not need to move.

Only the **logical positions** of the front and rear change.

For example:

```text
0 → 1 → 2 → 3 → 4
                ↓
                0
```

Your implementation must figure out how to perform this wrap-around.

---

# 14. Example Walkthrough

Suppose:

```text
k = 3
```

Initially:

```text
[ _ ] [ _ ] [ _ ]
```

### Operation 1

```text
enQueue(1)
```

Result:

```text
[1] [ _ ] [ _ ]
```

Returns:

```text
true
```

---

### Operation 2

```text
enQueue(2)
```

Result:

```text
[1] [2] [ _ ]
```

Returns:

```text
true
```

---

### Operation 3

```text
enQueue(3)
```

Result:

```text
[1] [2] [3]
```

Returns:

```text
true
```

---

### Operation 4

```text
enQueue(4)
```

The queue is full.

Returns:

```text
false
```

---

### Operation 5

```text
Rear()
```

Returns:

```text
3
```

---

### Operation 6

```text
isFull()
```

Returns:

```text
true
```

---

### Operation 7

```text
deQueue()
```

Removes `1`.

Conceptually:

```text
[ _ ] [2] [3]
```

Returns:

```text
true
```

---

### Operation 8

```text
enQueue(4)
```

There is now an available position at the beginning.

The Circular Queue should reuse it:

```text
[4] [2] [3]
```

Returns:

```text
true
```

But remember, the logical order is:

```text
Front → 2 → 3 → 4 ← Rear
```

not:

```text
4 → 2 → 3
```

---

### Operation 9

```text
Rear()
```

Returns:

```text
4
```

---

# 15. Complete Example

### Input

```text
["MyCircularQueue",
 "enQueue",
 "enQueue",
 "enQueue",
 "enQueue",
 "Rear",
 "isFull",
 "deQueue",
 "enQueue",
 "Rear"]
```

### Arguments

```text
[[3],
 [1],
 [2],
 [3],
 [4],
 [],
 [],
 [],
 [4],
 []]
```

### Output

```text
[null,
 true,
 true,
 true,
 false,
 3,
 true,
 true,
 true,
 4]
```

### Explanation

```text
MyCircularQueue myCircularQueue = new MyCircularQueue(3);

myCircularQueue.enQueue(1);
// true

myCircularQueue.enQueue(2);
// true

myCircularQueue.enQueue(3);
// true

myCircularQueue.enQueue(4);
// false
// Queue is full

myCircularQueue.Rear();
// 3

myCircularQueue.isFull();
// true

myCircularQueue.deQueue();
// true
// Removes 1

myCircularQueue.enQueue(4);
// true
// Reuses the available circular position

myCircularQueue.Rear();
// 4
```

---

# 16. Edge Cases

Your implementation must correctly handle the following.

### Case 1 — Empty Queue

```text
[ _ ] [ _ ] [ _ ]
```

Expected:

```text
Front()    → -1
Rear()     → -1
deQueue()  → false
isEmpty()  → true
isFull()   → false
```

---

### Case 2 — Full Queue

```text
[10] [20] [30]
```

Expected:

```text
isFull()     → true
enQueue(40)  → false
```

---

### Case 3 — Remove From Empty Queue

```text
[ _ ] [ _ ] [ _ ]
```

```text
deQueue() → false
```

The queue must not become invalid.

---

### Case 4 — Remove Everything

```text
[10] [20] [30]
```

Perform:

```text
deQueue()
deQueue()
deQueue()
```

The queue should become empty.

Then:

```text
isEmpty() → true
```

---

### Case 5 — Reuse Freed Space

```text
[10] [20] [30]
```

Remove `10`.

Then insert `40`.

The previously freed position must be reusable.

---

### Case 6 — Multiple Wrap-Arounds

The queue may wrap around the underlying storage multiple times.

Your implementation must continue to preserve:

```text
FIFO order
```

regardless of how many times the indexes wrap around.

---

# 17. What You Need to Figure Out

Before coding, think about these questions:

### 1. How will you store the elements?

Can you use a fixed-size array?

---

### 2. How will you identify the front?

You need to know:

```text
Which element should be removed next?
```

---

### 3. How will you identify the rear?

You need to know:

```text
Where is the last logical element?
```

or:

```text
Where should the next element be inserted?
```

Choose your representation carefully.

---

### 4. How will you track the number of elements?

You need to distinguish:

```text
empty
```

from:

```text
full
```

even though the indexes may eventually wrap around to the same positions.

---

### 5. How will wrap-around work?

If:

```text
capacity = 5
```

and an index is at:

```text
4
```

what should its next position be?

---

### 6. What happens after `deQueue()`?

The physical array does not need to shift.

Instead, the logical front must move.

---

### 7. What happens after `enQueue()`?

The new element must be placed at the correct circular position.

---

### 8. How will `Rear()` work after wrap-around?

The last logical element might physically appear **before** the front element in the array.

For example:

```text
Index:

  0    1    2    3    4
┌────┬────┬────┬────┬────┐
│ 40 │    │    │ 20 │ 30 │
└────┴────┴────┴────┴────┘
  ↑              ↑    ↑
```

The physical array order alone is not enough to determine the logical queue order.

---

# 18. Complexity Goal

Try to design every operation in:

```text
enQueue() → O(1)
deQueue() → O(1)
Front()   → O(1)
Rear()    → O(1)
isEmpty() → O(1)
isFull()  → O(1)
```

You should **not need to shift all elements** when removing or inserting.

---

# 19. Constraints

```text
1 <= k <= 1000

0 <= value <= 1000
```

At most:

```text
3000
```

calls will be made to:

```text
enQueue
deQueue
Front
Rear
isEmpty
isFull
```

---

# 🎯 Core Question

> **Design a fixed-size Circular Queue that follows FIFO order, allows the rear to wrap around and reuse positions freed at the front, and supports all queue operations in O(1) time without using JavaScript's built-in queue operations such as `push()`, `shift()`, or `unshift()`.**

Your main challenge is to correctly manage:

```text
┌──────────────────────────┐
│ Capacity                 │
│ Front                    │
│ Rear                     │
│ Current Size             │
│ Wrap-around              │
│ Empty State              │
│ Full State               │
│ FIFO Order               │
└──────────────────────────┘
```
