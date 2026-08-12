# 📚 Chapter 4 – Complete Queue Implementation in JavaScript

> **Goal:** Combine everything learned in Chapters 1–3 into one complete Queue implementation. We will build the final class, understand every part, handle edge cases, perform complete dry runs, analyze complexity, and prepare for interview questions.

---

# 4.1 Introduction

So far:



# 4.2 What Makes a Queue a Queue?

A Queue is not defined simply by:

```javascript
this.queue = [];
```

The important part is the **rules**.

A Queue must maintain:

```text
                 Queue

        Enqueue             Dequeue
           ↓                   ↓
         Rear                Front
           ↓                   ↓

    ┌──────┬──────┬──────┬──────┐
    │  10  │  20  │  30  │  40  │
    └──────┴──────┴──────┴──────┘
      ↑                         ↑
    Front                      Rear
```

Therefore:

```text
Insertion → Rear
Deletion  → Front
```

This gives us:

```text
FIFO
```

---

# 4.3 Our Queue Design

We will use two internal pieces of information:

```javascript
this.queue = [];
this.frontIndex = 0;
```

So the object conceptually looks like:

```text
Queue
│
├── queue
│     ↓
│   [10,20,30,40]
│
└── frontIndex
      ↓
      0
```

---

# 4.4 Why `frontIndex`?

This is the key optimization in our implementation.

A simple Queue could use:

```javascript
this.queue.shift();
```

But `shift()` can require the remaining elements to be reindexed.

Therefore:

```text
shift() → O(n)
```

Instead, we keep track of where the logical Front currently starts.

Example:

```text
Physical Array:

[10,20,30,40]
 ↑
 frontIndex = 0
```

After removing `10`:

```text
Physical Array:

[10,20,30,40]
    ↑
 frontIndex = 1
```

The logical Queue is now:

```text
20 → 30 → 40
```

We didn't move anything.

---

# 4.5 Final Queue Class

Here is our complete Queue implementation:

```javascript
class Queue {

    constructor() {

        this.queue = [];
        this.frontIndex = 0;

    }

    // Add an element at the Rear
    enqueue(value) {

        this.queue.push(value);

    }

    // Remove and return the Front element
    dequeue() {

        if (this.isEmpty()) {
            return null;
        }

        const value = this.queue[this.frontIndex];

        this.frontIndex++;

        return value;

    }

    // Return the Front element without removing it
    front() {

        if (this.isEmpty()) {
            return null;
        }

        return this.queue[this.frontIndex];

    }

    // Return the Rear element without removing it
    rear() {

        if (this.isEmpty()) {
            return null;
        }

        return this.queue[this.queue.length - 1];

    }

    // Check whether the Queue is empty
    isEmpty() {

        return this.frontIndex >= this.queue.length;

    }

    // Return the number of logical elements
    size() {

        return this.queue.length - this.frontIndex;

    }

    // Display the logical Queue
    print() {

        console.log(
            this.queue.slice(this.frontIndex)
        );

    }

    // Remove all elements
    clear() {

        this.queue = [];
        this.frontIndex = 0;

    }

}
```

---

# 4.6 Let's Understand the Complete Class

Our class has:

```text
Queue
│
├── constructor()
├── enqueue()
├── dequeue()
├── front()
├── rear()
├── isEmpty()
├── size()
├── print()
└── clear()
```

Each method has one specific responsibility.

This follows an important software engineering principle:

> **Each method should have a clear and well-defined responsibility.**

---

# 4.7 Constructor

```javascript
constructor() {

    this.queue = [];
    this.frontIndex = 0;

}
```

The constructor initializes the Queue.

Initial state:

```text
queue = []

frontIndex = 0
```

Visual:

```text
Front / Rear

   Empty
```

There are no elements yet.

---

# 4.8 `enqueue()`

```javascript
enqueue(value) {

    this.queue.push(value);

}
```

Its responsibility is:

> Add a new element at the Rear.

Example:

```javascript
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
```

Physical Array:

```text
[10,20,30]
```

Logical Queue:

```text
Front              Rear
 ↓                   ↓
10 → 20 → 30
```

---

# 4.9 Enqueue Rules

Whenever we call:

```javascript
queue.enqueue(value);
```

the element must:

```text
1. Enter the Queue.
2. Be placed at Rear.
3. Not disturb existing elements.
```

Example:

```text
Before:

10 → 20 → 30

enqueue(40)

After:

10 → 20 → 30 → 40
```

---

# 4.10 `dequeue()`

```javascript
dequeue() {

    if (this.isEmpty()) {
        return null;
    }

    const value = this.queue[this.frontIndex];

    this.frontIndex++;

    return value;

}
```

Its responsibility:

> Remove and return the element at the Front.

---

# 4.11 Dequeue Step by Step

Suppose:

```text
queue = [10,20,30]
frontIndex = 0
```

Call:

```javascript
queue.dequeue();
```

### Step 1

Check:

```javascript
this.isEmpty()
```

Result:

```text
false
```

### Step 2

Get Front:

```javascript
const value = this.queue[this.frontIndex];
```

Equivalent to:

```javascript
const value = this.queue[0];
```

Result:

```text
10
```

### Step 3

Move Front:

```javascript
this.frontIndex++;
```

Now:

```text
frontIndex = 1
```

### Step 4

Return:

```text
10
```

Logical Queue:

```text
20 → 30
```

---

# 4.12 Why Don't We Delete the Element?

You might ask:

> "If we are dequeuing 10, why don't we delete 10 from the Array?"

Because deleting it using `shift()` would require reindexing the remaining elements.

Instead:

```text
We don't physically move elements.

We move the logical Front.
```

This is the main idea behind the implementation.

---

# 4.13 Physical Array vs Logical Queue

This is one of the most important concepts in this chapter.

Suppose:

```text
queue = [10,20,30,40]
frontIndex = 2
```

The physical Array is:

```text
[10,20,30,40]
```

But the logical Queue is:

```text
30 → 40
```

Visual:

```text
Physical:

Index
  0     1     2     3
  ↓     ↓     ↓     ↓

[ 10 | 20 | 30 | 40 ]
             ↑
        frontIndex = 2


Logical Queue:

Front       Rear
  ↓           ↓
30 → 40
```

The values `10` and `20` are old elements.

They are no longer logically part of the Queue.

---

# 4.14 `front()`

```javascript
front() {

    if (this.isEmpty()) {
        return null;
    }

    return this.queue[this.frontIndex];

}
```

This method:

> Returns the Front element without removing it.

Example:

```text
Queue:

10 → 20 → 30
↑
Front
```

Calling:

```javascript
queue.front();
```

returns:

```text
10
```

The Queue remains unchanged.

---

# 4.15 `front()` vs `dequeue()`

This is a very important interview question.

### `front()`

```text
View Front
↓
Doesn't remove
```

### `dequeue()`

```text
Remove Front
↓
Returns removed element
```

Example:

```text
Before:

10 → 20 → 30
```

After:

```javascript
queue.front();
```

still:

```text
10 → 20 → 30
```

After:

```javascript
queue.dequeue();
```

becomes:

```text
20 → 30
```

---

# 4.16 `rear()`

```javascript
rear() {

    if (this.isEmpty()) {
        return null;
    }

    return this.queue[this.queue.length - 1];

}
```

It returns the last element of the logical Queue.

Example:

```text
10 → 20 → 30
          ↑
         Rear
```

Therefore:

```javascript
queue.rear();
```

returns:

```text
30
```

---

# 4.17 Why Do We Check `isEmpty()` in `rear()`?

Suppose:

```text
queue = [10,20,30]
frontIndex = 3
```

The logical Queue is empty.

But physically:

```text
queue.length = 3
```

If we simply did:

```javascript
this.queue[this.queue.length - 1]
```

we would get:

```text
30
```

But `30` has already been logically removed.

Therefore:

```javascript
if (this.isEmpty()) {
    return null;
}
```

is necessary.

---

# 4.18 `isEmpty()`

```javascript
isEmpty() {

    return this.frontIndex >= this.queue.length;

}
```

This checks whether any logical elements remain.

---

# 4.19 Why `>=`?

Suppose:

```text
queue.length = 3
frontIndex = 3
```

Then:

```text
3 >= 3
```

is:

```text
true
```

Queue is empty.

Now imagine:

```text
frontIndex = 4
queue.length = 3
```

Then:

```text
4 >= 3
```

is also:

```text
true
```

So `>=` safely handles the empty state even if the index has advanced beyond the current Array length.

---

# 4.20 `size()`

```javascript
size() {

    return this.queue.length - this.frontIndex;

}
```

This gives the number of **logical** elements.

Formula:

```text
Logical Size
=
Array Length - Front Index
```

---

# 4.21 Size Example

Suppose:

```text
queue = [10,20,30,40,50]
frontIndex = 2
```

Then:

```text
queue.length = 5
```

Therefore:

```text
size = 5 - 2
     = 3
```

Logical Queue:

```text
30 → 40 → 50
```

Three elements.

---

# 4.22 Why `queue.length` Is Wrong

If we did:

```javascript
size() {
    return this.queue.length;
}
```

we would get:

```text
5
```

But the logical Queue only contains:

```text
30,40,50
```

which is:

```text
3
```

Therefore:

```javascript
this.queue.length - this.frontIndex
```

is required.

---

# 4.23 `print()`

```javascript
print() {

    console.log(
        this.queue.slice(this.frontIndex)
    );

}
```

Why use:

```javascript
slice(this.frontIndex)
```

?

Because we only want to display the logical Queue.

Example:

```text
Physical:

[10,20,30,40,50]

frontIndex = 2
```

Then:

```javascript
this.queue.slice(2);
```

returns:

```text
[30,40,50]
```

which is exactly our logical Queue.

---

# 4.24 `clear()`

```javascript
clear() {

    this.queue = [];
    this.frontIndex = 0;

}
```

This completely resets the Queue.

Before:

```text
queue = [10,20,30,40]
frontIndex = 2
```

After:

```text
queue = []
frontIndex = 0
```

The Queue is back to its initial state.

---

# 4.25 Why Reset Both?

Because Queue state consists of:

```text
queue
+
frontIndex
```

Resetting only:

```javascript
this.queue = [];
```

would leave the old index.

For example:

```text
queue = []
frontIndex = 2
```

This isn't a clean initial state.

Therefore:

```javascript
this.queue = [];
this.frontIndex = 0;
```

---

# 4.26 Complete Dry Run

Let's perform a complete operation sequence.

```javascript
const queue = new Queue();
```

Initial:

```text
queue = []
frontIndex = 0
```

---

## Operation 1

```javascript
queue.enqueue(10);
```

State:

```text
queue = [10]
frontIndex = 0
```

Logical:

```text
10
```

---

## Operation 2

```javascript
queue.enqueue(20);
```

State:

```text
queue = [10,20]
frontIndex = 0
```

Logical:

```text
10 → 20
```

---

## Operation 3

```javascript
queue.enqueue(30);
```

State:

```text
queue = [10,20,30]
frontIndex = 0
```

Logical:

```text
10 → 20 → 30
```

---

## Operation 4

```javascript
queue.front();
```

Result:

```text
10
```

State doesn't change.

---

## Operation 5

```javascript
queue.rear();
```

Result:

```text
30
```

State doesn't change.

---

## Operation 6

```javascript
queue.dequeue();
```

Result:

```text
10
```

State:

```text
queue = [10,20,30]
frontIndex = 1
```

Logical:

```text
20 → 30
```

---

## Operation 7

```javascript
queue.enqueue(40);
```

State:

```text
queue = [10,20,30,40]
frontIndex = 1
```

Logical:

```text
20 → 30 → 40
```

---

## Operation 8

```javascript
queue.dequeue();
```

Result:

```text
20
```

State:

```text
queue = [10,20,30,40]
frontIndex = 2
```

Logical:

```text
30 → 40
```

---

## Operation 9

```javascript
queue.size();
```

Calculation:

```text
4 - 2 = 2
```

Result:

```text
2
```

---

## Operation 10

```javascript
queue.clear();
```

State:

```text
queue = []
frontIndex = 0
```

Logical:

```text
Empty
```

---

# 4.27 Complete Operation Table

| Step | Operation     | Result | Physical Array  | `frontIndex` | Logical Queue |
| ---: | ------------- | -----: | --------------- | -----------: | ------------- |
|    1 | Create        |      — | `[]`            |          `0` | `[]`          |
|    2 | `enqueue(10)` |      — | `[10]`          |          `0` | `[10]`        |
|    3 | `enqueue(20)` |      — | `[10,20]`       |          `0` | `[10,20]`     |
|    4 | `enqueue(30)` |      — | `[10,20,30]`    |          `0` | `[10,20,30]`  |
|    5 | `front()`     |   `10` | `[10,20,30]`    |          `0` | `[10,20,30]`  |
|    6 | `dequeue()`   |   `10` | `[10,20,30]`    |          `1` | `[20,30]`     |
|    7 | `enqueue(40)` |      — | `[10,20,30,40]` |          `1` | `[20,30,40]`  |
|    8 | `dequeue()`   |   `20` | `[10,20,30,40]` |          `2` | `[30,40]`     |
|    9 | `size()`      |    `2` | `[10,20,30,40]` |          `2` | `[30,40]`     |
|   10 | `clear()`     |      — | `[]`            |          `0` | `[]`          |

---

# 4.28 FIFO Verification

We inserted:

```text
10
20
30
40
```

in this order.

The removal order is:

```text
10
20
30
40
```

Therefore:

```text
First In
   ↓
  10
   ↓
First Out
```

This proves the Queue follows:

# FIFO

---

# 4.29 Edge Case – Empty Queue

```javascript
const queue = new Queue();
```

Now:

```javascript
queue.dequeue();
```

returns:

```text
null
```

And:

```javascript
queue.front();
```

returns:

```text
null
```

And:

```javascript
queue.rear();
```

returns:

```text
null
```

And:

```javascript
queue.size();
```

returns:

```text
0
```

And:

```javascript
queue.isEmpty();
```

returns:

```text
true
```

---

# 4.30 Edge Case – One Element

```javascript
queue.enqueue(10);
```

State:

```text
10
```

Here:

```text
Front = 10
Rear  = 10
```

Both Front and Rear refer to the same element.

Then:

```javascript
queue.dequeue();
```

returns:

```text
10
```

and Queue becomes logically empty.

---

# 4.31 Edge Case – Repeated Dequeue

Suppose:

```text
10 → 20 → 30
```

Call:

```javascript
dequeue()
```

three times:

```text
10
20
30
```

Fourth call:

```javascript
dequeue()
```

returns:

```text
null
```

No crash occurs.

---

# 4.32 Edge Case – Clear and Reuse

```javascript
queue.enqueue(10);
queue.enqueue(20);

queue.clear();

queue.enqueue(30);
```

Final Queue:

```text
30
```

The Queue continues to work normally.

---

# 4.33 Queue Underflow

When we attempt:

```text
dequeue()
```

on an empty Queue, we have:

# Queue Underflow

Example:

```text
Queue:

Empty

       ↓
    dequeue()
       ↓
   Underflow
```

Our implementation handles this using:

```javascript
if (this.isEmpty()) {
    return null;
}
```

---

# 4.34 Queue Overflow

A normal JavaScript Array grows dynamically, so our basic Queue doesn't have a fixed maximum capacity.

However, a Queue can be designed with a fixed capacity.

Example:

```javascript
class Queue {

    constructor(capacity) {

        this.queue = [];
        this.frontIndex = 0;
        this.capacity = capacity;

    }

}
```

Then:

```javascript
if (this.size() >= this.capacity) {
    // Queue Overflow
}
```

Queue Overflow means:

> Trying to insert an element when the Queue has reached its maximum capacity.

We will revisit capacity restrictions in a later protection/design chapter.

---

# 4.35 Time Complexity

For our Front-index implementation:

| Operation   | Time Complexity |
| ----------- | --------------: |
| `enqueue()` |  O(1) amortized |
| `dequeue()` |            O(1) |
| `front()`   |            O(1) |
| `rear()`    |            O(1) |
| `isEmpty()` |            O(1) |
| `size()`    |            O(1) |
| `print()`   |            O(n) |
| `clear()`   |           O(1)* |

The key optimization is:

```text
dequeue()
   ↓
frontIndex++
   ↓
O(1)
```

instead of:

```text
dequeue()
   ↓
shift()
   ↓
O(n)
```

---

# 4.36 Space Complexity

If the Queue contains `n` elements:

```text
Space = O(n)
```

because we need storage for the elements.

The `frontIndex` itself requires:

```text
O(1)
```

additional space.

---

# 4.37 Queue vs Simple Array Queue

There are two common implementations we have discussed.

### Simple

```javascript
enqueue(value) {
    this.queue.push(value);
}

dequeue() {
    return this.queue.shift();
}
```

Complexity:

```text
enqueue → O(1) amortized
dequeue → O(n)
```

### Front Index

```javascript
enqueue(value) {
    this.queue.push(value);
}

dequeue() {

    const value = this.queue[this.frontIndex];

    this.frontIndex++;

    return value;
}
```

Complexity:

```text
enqueue → O(1) amortized
dequeue → O(1)
```

---

# 4.38 Why Our Implementation Is Better

Our implementation avoids repeatedly moving elements.

Instead of:

```text
10 20 30 40
↓
remove 10
↓
20 30 40
↓
move everything
```

we do:

```text
10 20 30 40
↑
frontIndex = 0

dequeue

10 20 30 40
   ↑
frontIndex = 1
```

We simply change where the logical Queue starts.

---

# 4.39 Important Limitation of This Implementation

There is an important thing to understand.

Suppose we perform thousands of:

```text
enqueue()
dequeue()
enqueue()
dequeue()
```

The old elements can remain in the physical Array.

For example:

```text
[old, old, old, old, old, current]
                              ↑
                         frontIndex
```

Therefore, a long-running Queue may need **compaction**.

---

# 4.40 What Is Compaction?

Compaction means removing the unused portion of the physical Array and moving the remaining logical elements back to the beginning.

Suppose:

```text
queue = [10,20,30,40,50]
frontIndex = 3
```

Logical Queue:

```text
40 → 50
```

We could compact it to:

```text
queue = [40,50]
frontIndex = 0
```

Now the old elements:

```text
10,20,30
```

are no longer occupying the Array.

---

# 4.41 Why Not Compact After Every Dequeue?

Because that would defeat our optimization.

If we did:

```text
dequeue
↓
move everything
↓
dequeue
↓
move everything
```

we would again get O(n) work per operation.

Instead, we can compact occasionally.

For example, when:

```text
frontIndex
```

becomes sufficiently large relative to the Array.

This is an implementation optimization that we can add later.

---

# 4.42 Queue as an Abstract Data Type

An important DSA concept is that Queue is an **Abstract Data Type (ADT)**.

The user doesn't need to know how the Queue is implemented internally.

They only need to know:

```javascript
queue.enqueue(10);
queue.dequeue();
queue.front();
```

The internal implementation could use:

```text
Array
Linked List
Circular Array
Deque
```

The external behaviour remains:

```text
FIFO
```

This separation between **interface** and **implementation** is fundamental to good data structure design.

---

# 4.43 Queue Interface

Our public interface is:

```text
enqueue()
dequeue()
front()
rear()
isEmpty()
size()
clear()
print()
```

The user shouldn't need to know:

```text
frontIndex
Array indexing
internal storage
compaction
```

This becomes particularly important when we discuss **protecting the Queue**.

---

# 4.44 Final Queue Architecture

```text
                         QUEUE
                           │
                           ▼
                  ┌────────────────┐
                  │ Internal Array │
                  └────────────────┘
                           │
                           ▼
              [10, 20, 30, 40, 50]
               ↑           ↑
               │           │
          old elements   logical Rear
                           
             frontIndex = 2
                  │
                  ▼
             Logical Queue

                  Front
                    ↓
                30 → 40 → 50
                              ↑
                             Rear
```

---

# 4.45 Final Code

```javascript
class Queue {

    constructor() {

        this.queue = [];
        this.frontIndex = 0;

    }

    // Add an element at the Rear
    enqueue(value) {

        this.queue.push(value);

    }

    // Remove and return the Front element
    dequeue() {

        if (this.isEmpty()) {
            return null;
        }

        const value = this.queue[this.frontIndex];

        this.frontIndex++;

        return value;

    }

    // Return the Front element without removing it
    front() {

        if (this.isEmpty()) {
            return null;
        }

        return this.queue[this.frontIndex];

    }

    // Return the Rear element without removing it
    rear() {

        if (this.isEmpty()) {
            return null;
        }

        return this.queue[this.queue.length - 1];

    }

    // Check whether the Queue is empty
    isEmpty() {

        return this.frontIndex >= this.queue.length;

    }

    // Return logical Queue size
    size() {

        return this.queue.length - this.frontIndex;

    }

    // Print logical Queue
    print() {

        console.log(this.queue.slice(this.frontIndex));

    }

    // Clear Queue
    clear() {

        this.queue = [];
        this.frontIndex = 0;

    }

}
```

---

# 4.46 Complete Test

```javascript
const queue = new Queue();

console.log("Empty:", queue.isEmpty());
// true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log("Queue:");
queue.print();
// [10, 20, 30, 40]

console.log("Front:", queue.front());
// 10

console.log("Rear:", queue.rear());
// 40

console.log("Size:", queue.size());
// 4

console.log("Dequeue:", queue.dequeue());
// 10

console.log("Dequeue:", queue.dequeue());
// 20

console.log("Queue:");
queue.print();
// [30, 40]

console.log("Front:", queue.front());
// 30

console.log("Rear:", queue.rear());
// 40

console.log("Size:", queue.size());
// 2

queue.clear();

console.log("Queue after clear:");
queue.print();
// []

console.log("Empty:", queue.isEmpty());
// true
```

---

# 4.47 Interview Questions

### 1. What is Queue?

> A Queue is a linear data structure that follows FIFO — First In, First Out.

### 2. What is enqueue?

> Enqueue inserts an element at the Rear of the Queue.

### 3. What is dequeue?

> Dequeue removes and returns an element from the Front.

### 4. What is the difference between `front()` and `dequeue()`?

> `front()` only views the Front element, while `dequeue()` removes and returns it.

### 5. Why don't we use `pop()` for Queue?

> `pop()` removes from the Rear, but Queue requires deletion from the Front.

### 6. Why can `shift()` be inefficient?

> Removing the first Array element can require the remaining elements to be reindexed, making the operation O(n).

### 7. How do we make dequeue O(1)?

> Maintain a Front index and increment it after each dequeue instead of physically shifting the Array.

### 8. Why isn't `queue.length` always the Queue size?

> Because previously dequeued elements may remain physically in the Array. The logical size is `queue.length - frontIndex`.

### 9. What is Queue Underflow?

> Attempting to dequeue from an empty Queue.

### 10. Can Queue be implemented without an Array?

> Yes. A Queue can also be implemented using a Linked List, Circular Array, or other suitable structures.

### 11. What is Queue Overflow?

> In a fixed-capacity Queue, Overflow occurs when an insertion is attempted while the Queue is already full.

### 12. What is the most important Queue rule?

> Insert at Rear and remove from Front.

---

# 4.48 Interview Coding Question

**Implement a Queue using an Array with O(1) enqueue and O(1) dequeue.**

Expected approach:

```javascript
class Queue {

    constructor() {
        this.queue = [];
        this.frontIndex = 0;
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {

        if (this.isEmpty()) {
            return null;
        }

        const value = this.queue[this.frontIndex];

        this.frontIndex++;

        return value;
    }

    isEmpty() {
        return this.frontIndex >= this.queue.length;
    }
}
```

The key idea the interviewer is testing is:

```text
Don't repeatedly use shift().
Use a Front index.
```

---

# 4.49 Chapter 4 Final Revision

Remember these five things:

```text
1. Queue follows FIFO.

2. Enqueue happens at Rear.

3. Dequeue happens at Front.

4. Array + shift() is simple but dequeue is O(n).

5. Array + frontIndex makes dequeue O(1).
```

And the most important formula:

```text
┌─────────────────────────────────────┐
│ Logical Size = Array Length         │
│                - Front Index        │
└─────────────────────────────────────┘
```

---

# 🎯 Chapter 4 Mastery Checklist

Before moving to the next chapter, you should be able to:

* [ ] Write the complete Queue class from memory.
* [ ] Explain `enqueue()`.
* [ ] Explain `dequeue()`.
* [ ] Explain `front()`.
* [ ] Explain `rear()`.
* [ ] Explain `isEmpty()`.
* [ ] Explain `size()`.
* [ ] Explain `clear()`.
* [ ] Explain Queue Underflow.
* [ ] Explain Queue Overflow.
* [ ] Explain why `pop()` cannot be used for dequeue.
* [ ] Explain why `shift()` can be O(n).
* [ ] Explain how `frontIndex` makes dequeue O(1).
* [ ] Explain physical Array vs logical Queue.
* [ ] Calculate Queue size from `frontIndex`.
* [ ] Perform a complete Queue dry run.
* [ ] Explain FIFO with code.
* [ ] Implement Queue using a Linked List.
* [ ] Explain Queue as an ADT.
* [ ] Write the implementation without looking at your notes.

---

## 🚀 Next: Chapter 5 – Protecting the Queue

Our current implementation has one important problem:

```javascript
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
```

But the internal Array is still directly accessible:

```javascript
queue.queue
```

Someone could bypass the Queue API:

```javascript
queue.queue.pop();
queue.queue.shift();
queue.queue.unshift(100);
queue.queue.splice(1, 1);
queue.queue[0] = 999;
```

That means the developer can break the Queue's FIFO rules.

So the next chapter will solve this problem:

