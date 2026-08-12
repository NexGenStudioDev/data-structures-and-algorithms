# 📚 Chapter 3 – Implementing Queue Operations in JavaScript

> **Goal:** Implement every fundamental Queue operation, understand exactly what happens internally, perform dry runs, handle edge cases, and analyze the time and space complexity of each operation.

---

# 3.1 Introduction

In Chapter 1, we learned the theory of Queue.

In Chapter 2, we learned how to represent a Queue using JavaScript and why an efficient Array-based Queue can use a **Front index** instead of repeatedly calling `shift()`.

Now we will implement the actual operations.

Our Queue follows:

```text
FIFO
First In → First Out
```

And:

```text
Enqueue → Rear
Dequeue → Front
```

---

# 3.2 Queue Structure

We will start with:

```javascript
class Queue {

    constructor() {

        this.queue = [];
        this.front = 0;

    }

}
```

Our internal structure is:

```text
Queue
│
├── queue → []
│
└── front → 0
```

The Array stores the elements.

The `front` variable tells us where the **logical Front** currently begins.

---

# 3.3 Operations We Will Implement

Our Queue will eventually support:

| Operation   | Purpose                      |
| ----------- | ---------------------------- |
| `enqueue()` | Add an element at Rear       |
| `dequeue()` | Remove an element from Front |
| `front()`   | View Front element           |
| `rear()`    | View Rear element            |
| `isEmpty()` | Check whether Queue is empty |
| `size()`    | Get number of elements       |
| `print()`   | Display Queue                |
| `clear()`   | Remove all elements          |

---

# 3.4 Understanding the Front Index

Before writing `enqueue()`, understand this:

```javascript
this.front = 0;
```

Suppose:

```text
queue = [10, 20, 30, 40]
front = 0
```

Then:

```text
Index
  0     1     2     3
  ↓     ↓     ↓     ↓

[ 10 | 20 | 30 | 40 ]
  ↑                 ↑
Front             Rear
```

The logical Front is:

```javascript
this.queue[this.front]
```

which gives:

```text
10
```

---

# 3.5 Enqueue

# What is Enqueue?

**Enqueue** means:

> Add a new element to the Rear of the Queue.

Suppose:

```text
Front              Rear
 ↓                   ↓
10 → 20 → 30
```

We execute:

```javascript
queue.enqueue(40);
```

The result should be:

```text
Front                   Rear
 ↓                        ↓
10 → 20 → 30 → 40
```

---

# 3.6 Implementing `enqueue()`

Because the Rear is at the end of our Array, we can use:

```javascript
push()
```

Implementation:

```javascript
enqueue(value) {

    this.queue.push(value);

}
```

That's all we need for the basic operation.

---

# 3.7 Enqueue Dry Run

Initial:

```text
queue = []
front = 0
```

Call:

```javascript
queue.enqueue(10);
```

Internally:

```javascript
this.queue.push(10);
```

State:

```text
queue = [10]
front = 0
```

Visual:

```text
Front
 ↓
┌──────┐
│  10  │
└──────┘
   ↑
  Rear
```

When there is only one element:

```text
Front = Rear
```

---

# 3.8 Second Enqueue

```javascript
queue.enqueue(20);
```

State:

```text
queue = [10, 20]
front = 0
```

Visual:

```text
Front             Rear
 ↓                  ↓
┌──────┬──────┐
│  10  │  20  │
└──────┴──────┘
```

---

# 3.9 Third Enqueue

```javascript
queue.enqueue(30);
```

State:

```text
queue = [10, 20, 30]
front = 0
```

Visual:

```text
Front                         Rear
 ↓                              ↓
┌──────┬──────┬──────┐
│  10  │  20  │  30  │
└──────┴──────┴──────┘
```

---

# 3.10 Enqueue Complexity

```javascript
this.queue.push(value);
```

Array `push()` is:

```text
O(1) amortized
```

Therefore:

```text
enqueue()
Time → O(1) amortized
```

The Queue may occasionally resize its underlying Array, but over many operations the amortized complexity is O(1).

---

# 3.11 Dequeue

Now comes the most important Queue operation.

# What is Dequeue?

**Dequeue** means:

> Remove and return the element at the Front of the Queue.

Suppose:

```text
Front              Rear
 ↓                   ↓
10 → 20 → 30
```

Calling:

```javascript
queue.dequeue();
```

must remove:

```text
10
```

not:

```text
30
```

because `10` entered first.

---

# 3.12 The Simple Approach

A beginner might write:

```javascript
dequeue() {

    return this.queue.shift();

}
```

This works logically.

Example:

```text
[10,20,30]
```

After:

```javascript
shift()
```

we get:

```text
10
```

Remaining:

```text
[20,30]
```

So FIFO is correct.

But there is a performance problem.

---

# 3.13 Why Avoid `shift()`?

When we call:

```javascript
this.queue.shift();
```

the first element is removed.

The remaining elements may need to be reindexed.

Conceptually:

```text
Before:

Index
0    1    2    3
↓    ↓    ↓    ↓
10   20   30   40

Remove 10

After:

Index
0    1    2
↓    ↓    ↓
20   30   40
```

The elements need to move to their new indexes.

Therefore, `shift()` is generally:

```text
O(n)
```

---

# 3.14 Efficient Dequeue

Instead of moving every element, we can simply move the Front index.

Suppose:

```text
queue = [10,20,30]
front = 0
```

The Front value is:

```javascript
this.queue[this.front]
```

which is:

```text
10
```

After removing it logically:

```javascript
this.front++;
```

Now:

```text
front = 1
```

The logical Queue becomes:

```text
20 → 30
```

No elements were shifted.

---

# 3.15 Implementing `dequeue()`

```javascript
dequeue() {

    if (this.isEmpty()) {
        return null;
    }

    const value = this.queue[this.front];

    this.front++;

    return value;

}
```

Let's understand every line.

---

# 3.16 Line 1 – Method

```javascript
dequeue() {
```

This creates our Queue's Dequeue operation.

---

# 3.17 Line 2 – Empty Check

```javascript
if (this.isEmpty()) {
    return null;
}
```

If the Queue is empty, there is nothing to remove.

Returning `null` gives the caller a clear result.

This condition is called:

# Queue Underflow

---

# 3.18 Line 3 – Get Front Value

```javascript
const value = this.queue[this.front];
```

Suppose:

```text
queue = [10,20,30]
front = 0
```

Then:

```javascript
this.queue[this.front]
```

becomes:

```javascript
this.queue[0]
```

which is:

```text
10
```

So:

```javascript
value = 10;
```

---

# 3.19 Line 4 – Move Front

```javascript
this.front++;
```

Before:

```text
front = 0
```

After:

```text
front = 1
```

The logical Queue now begins at index `1`.

---

# 3.20 Line 5 – Return Value

```javascript
return value;
```

The caller receives:

```text
10
```

So:

```javascript
const removed = queue.dequeue();
```

gives:

```text
removed = 10
```

---

# 3.21 Dequeue Dry Run

Initial:

```text
queue = [10,20,30]
front = 0
```

Visual:

```text
Index
  0     1     2
  ↓     ↓     ↓

[ 10 | 20 | 30 ]
  ↑           ↑
Front       Rear
```

Call:

```javascript
queue.dequeue();
```

### Step 1

Check empty:

```text
false
```

### Step 2

Get:

```text
queue[front]
queue[0]
10
```

### Step 3

Increment:

```text
front = 1
```

### Step 4

Return:

```text
10
```

Logical Queue:

```text
Front       Rear
 ↓            ↓
20 → 30
```

Physical Array:

```text
[10,20,30]
```

This difference is extremely important.

---

# 3.22 Physical vs Logical Queue

After one dequeue:

```text
Physical Array:

[10,20,30]
```

But:

```text
front = 1
```

Therefore the logical Queue is:

```text
20 → 30
```

So:

> **The old element can remain physically in the Array while no longer being part of the logical Queue.**

This is how we avoid the O(n) shifting operation.

---

# 3.23 Second Dequeue

Current:

```text
queue = [10,20,30]
front = 1
```

Call:

```javascript
queue.dequeue();
```

Get:

```javascript
queue[1]
```

Result:

```text
20
```

Then:

```javascript
front++;
```

Now:

```text
front = 2
```

Logical Queue:

```text
30
```

---

# 3.24 Third Dequeue

Current:

```text
queue = [10,20,30]
front = 2
```

Call:

```javascript
queue.dequeue();
```

Get:

```text
30
```

Then:

```text
front = 3
```

Now:

```text
Logical Queue = Empty
```

Even though:

```text
queue = [10,20,30]
```

still physically contains the old values.

Therefore, we need a good `isEmpty()` implementation.

---

# 3.25 isEmpty()

The Queue is empty when:

```text
front >= queue.length
```

So:

```javascript
isEmpty() {

    return this.front >= this.queue.length;

}
```

---

# 3.26 Why `front >= length`?

Suppose:

```text
queue = []
front = 0
```

Then:

```text
0 >= 0
```

is:

```text
true
```

Empty.

---

Suppose:

```text
queue = [10,20]
front = 0
```

Then:

```text
0 >= 2
```

is:

```text
false
```

Not empty.

---

After two dequeues:

```text
queue = [10,20]
front = 2
```

Then:

```text
2 >= 2
```

is:

```text
true
```

The logical Queue is empty.

---

# 3.27 Why Not Use `queue.length === 0`?

This is a very important point.

If we use:

```javascript
return this.queue.length === 0;
```

then after:

```text
queue = [10,20]
front = 2
```

the Array length is still:

```text
2
```

So:

```javascript
queue.length === 0
```

would return:

```text
false
```

But logically the Queue is empty.

Therefore, with a Front-index implementation:

```javascript
this.front >= this.queue.length
```

is the correct basic condition.

---

# 3.28 Front / Peek

Now we need an operation to see the first element without removing it.

We can call it:

```javascript
front()
```

or:

```javascript
peek()
```

For Queue, `front()` is often a clear name.

---

# 3.29 Implementing `front()`

```javascript
front() {

    if (this.isEmpty()) {
        return null;
    }

    return this.queue[this.front];

}
```

---

# 3.30 Front Dry Run

Suppose:

```text
queue = [10,20,30]
front = 0
```

Calling:

```javascript
queue.front();
```

returns:

```text
10
```

But:

```text
queue = [10,20,30]
front = 0
```

remains unchanged.

Therefore:

```text
front()
```

does not remove anything.

---

# 3.31 After Dequeue

Suppose:

```text
queue = [10,20,30]
front = 1
```

Then:

```javascript
queue.front();
```

returns:

```text
20
```

because:

```javascript
this.queue[this.front]
```

becomes:

```javascript
this.queue[1]
```

---

# 3.32 Front Complexity

We directly access an Array index:

```javascript
this.queue[this.front]
```

Therefore:

```text
front()
Time → O(1)
```

---

# 3.33 Rear

Now we need to see the last element in the Queue.

Suppose:

```text
queue = [10,20,30]
front = 0
```

The Rear is:

```text
30
```

The physical last index is:

```javascript
this.queue.length - 1
```

Therefore:

```javascript
this.queue[this.queue.length - 1]
```

gives the last element.

---

# 3.34 Implementing `rear()`

```javascript
rear() {

    if (this.isEmpty()) {
        return null;
    }

    return this.queue[this.queue.length - 1];

}
```

---

# 3.35 Rear Dry Run

Suppose:

```text
queue = [10,20,30,40]
front = 1
```

Logical Queue:

```text
20 → 30 → 40
```

The Rear is:

```text
40
```

because:

```javascript
this.queue.length - 1
```

is:

```text
4 - 1 = 3
```

and:

```javascript
this.queue[3]
```

is:

```text
40
```

---

# 3.36 Important Rear Edge Case

Suppose:

```text
queue = [10,20,30]
front = 3
```

The logical Queue is empty.

If we simply do:

```javascript
this.queue[this.queue.length - 1]
```

we get:

```text
30
```

But `30` is no longer logically inside the Queue.

That's why we must check:

```javascript
if (this.isEmpty()) {
    return null;
}
```

before returning the Rear.

---

# 3.37 Size

Now we need to know how many **logical elements** remain.

Suppose:

```text
queue = [10,20,30,40]
front = 1
```

Logical Queue:

```text
20 → 30 → 40
```

How many elements?

```text
3
```

Formula:

```text
size = queue.length - front
```

Therefore:

```javascript
size() {

    return this.queue.length - this.front;

}
```

---

# 3.38 Size Dry Run

Suppose:

```text
queue = [10,20,30,40]
front = 1
```

Then:

```text
queue.length = 4
front = 1
```

Therefore:

```text
size = 4 - 1
     = 3
```

Correct.

Logical Queue:

```text
20 → 30 → 40
```

Three elements.

---

# 3.39 Empty Size

Suppose:

```text
queue = [10,20,30]
front = 3
```

Then:

```text
size = 3 - 3
     = 0
```

Correct.

---

# 3.40 Why Size Is Not Just `queue.length`

Because the physical Array can contain old elements.

Example:

```text
queue = [10,20,30,40]
front = 2
```

Physical length:

```text
4
```

But logical Queue:

```text
30 → 40
```

Logical size:

```text
2
```

Therefore:

```javascript
this.queue.length - this.front
```

is required.

---

# 3.41 Print

We need a method to display the logical Queue.

We should **not** simply print:

```javascript
console.log(this.queue);
```

because that may include elements that have already been dequeued logically.

Suppose:

```text
queue = [10,20,30,40]
front = 2
```

Logical Queue:

```text
30 → 40
```

But:

```javascript
console.log(this.queue);
```

would show:

```text
[10,20,30,40]
```

which is misleading.

---

# 3.42 Implementing `print()`

One simple approach:

```javascript
print() {

    console.log(this.queue.slice(this.front));

}
```

`slice(this.front)` creates a new Array containing only the logical Queue.

Example:

```text
queue = [10,20,30,40]
front = 2
```

Then:

```javascript
this.queue.slice(2)
```

returns:

```text
[30,40]
```

---

# 3.43 Print Complexity

`slice()` creates a new Array containing the logical elements.

If there are `n` logical elements:

```text
print()
Time → O(n)
Space → O(n)
```

This is different from simply logging the internal Array.

---

# 3.44 Clear

We want an operation that completely resets the Queue.

Implementation:

```javascript
clear() {

    this.queue = [];
    this.front = 0;

}
```

Both values must be reset.

---

# 3.45 Why Reset `front`?

Suppose:

```text
queue = [10,20,30]
front = 3
```

Now call:

```javascript
clear();
```

We get:

```text
queue = []
front = 0
```

If we only did:

```javascript
this.queue = [];
```

but forgot:

```javascript
this.front = 0;
```

we could end up with:

```text
queue = []
front = 3
```

That is not a clean initial state.

Therefore:

```javascript
this.queue = [];
this.front = 0;
```

---

# 3.46 Complete Queue Class

Now we can combine everything.

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

    // Return the Rear element
    rear() {

        if (this.isEmpty()) {
            return null;
        }

        return this.queue[this.queue.length - 1];

    }

    // Check whether Queue is empty
    isEmpty() {

        return this.frontIndex >= this.queue.length;

    }

    // Return logical Queue size
    size() {

        return this.queue.length - this.frontIndex;

    }

    // Display logical Queue
    print() {

        console.log(this.queue.slice(this.frontIndex));

    }

    // Remove all elements
    clear() {

        this.queue = [];
        this.frontIndex = 0;

    }

}
```

> I renamed the field to `frontIndex` rather than `front` to make the code clearer: it stores an **index**, not the Front value.

---

# 3.47 Testing Our Queue

```javascript
const queue = new Queue();

console.log(queue.isEmpty());
// true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
// [10, 20, 30]

console.log(queue.front());
// 10

console.log(queue.rear());
// 30

console.log(queue.dequeue());
// 10

queue.print();
// [20, 30]

console.log(queue.size());
// 2

console.log(queue.front());
// 20

console.log(queue.rear());
// 30
```

---

# 3.48 Complete Dry Run

Let's execute the entire Queue step by step.

---

## Step 1 – Create

```javascript
const queue = new Queue();
```

State:

```text
queue = []
frontIndex = 0
```

Logical Queue:

```text
Empty
```

---

## Step 2 – Enqueue 10

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

## Step 3 – Enqueue 20

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

## Step 4 – Enqueue 30

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

## Step 5 – Front

```javascript
queue.front();
```

Result:

```text
10
```

State does not change.

---

## Step 6 – Rear

```javascript
queue.rear();
```

Result:

```text
30
```

State does not change.

---

## Step 7 – Dequeue

```javascript
queue.dequeue();
```

Value:

```text
10
```

Then:

```text
frontIndex = 1
```

State:

```text
queue = [10,20,30]
frontIndex = 1
```

Logical Queue:

```text
20 → 30
```

---

## Step 8 – Size

```javascript
queue.size();
```

Calculation:

```text
3 - 1 = 2
```

Result:

```text
2
```

---

## Step 9 – Dequeue Again

```javascript
queue.dequeue();
```

Value:

```text
20
```

Then:

```text
frontIndex = 2
```

Logical Queue:

```text
30
```

---

## Step 10 – Dequeue Again

```javascript
queue.dequeue();
```

Value:

```text
30
```

Then:

```text
frontIndex = 3
```

Now:

```text
size = 3 - 3
     = 0
```

Queue is logically empty.

---

# 3.49 Complete Operation Table

| Step | Operation     | Result | Physical Array | Front Index | Logical Queue |
| ---: | ------------- | -----: | -------------- | ----------: | ------------- |
|    1 | Create        |      — | `[]`           |         `0` | `[]`          |
|    2 | `enqueue(10)` |      — | `[10]`         |         `0` | `[10]`        |
|    3 | `enqueue(20)` |      — | `[10,20]`      |         `0` | `[10,20]`     |
|    4 | `enqueue(30)` |      — | `[10,20,30]`   |         `0` | `[10,20,30]`  |
|    5 | `front()`     |   `10` | `[10,20,30]`   |         `0` | `[10,20,30]`  |
|    6 | `dequeue()`   |   `10` | `[10,20,30]`   |         `1` | `[20,30]`     |
|    7 | `size()`      |    `2` | `[10,20,30]`   |         `1` | `[20,30]`     |
|    8 | `dequeue()`   |   `20` | `[10,20,30]`   |         `2` | `[30]`        |
|    9 | `dequeue()`   |   `30` | `[10,20,30]`   |         `3` | `[]`          |

This table is extremely important for understanding the Front-index approach.

---

# 3.50 LIFO vs FIFO Verification

We inserted:

```text
10 → 20 → 30
```

We removed:

```text
10 → 20 → 30
```

Therefore:

```text
Insertion Order = Removal Order
```

This confirms:

```text
FIFO
```

---

# 3.51 Queue Complexity

With the Front-index implementation:

| Operation   |           Time | Extra Space |
| ----------- | -------------: | ----------: |
| `enqueue()` | O(1) amortized |        O(1) |
| `dequeue()` |           O(1) |        O(1) |
| `front()`   |           O(1) |        O(1) |
| `rear()`    |           O(1) |        O(1) |
| `isEmpty()` |           O(1) |        O(1) |
| `size()`    |           O(1) |        O(1) |
| `print()`   |           O(n) |        O(n) |
| `clear()`   |           O(1) |       O(1)* |

*Ignoring the garbage collection cost of reclaiming the old Array.

---

# 3.52 Why Is Dequeue O(1)?

This is one of the most important interview questions.

We don't do:

```javascript
this.queue.shift();
```

Instead:

```javascript
const value = this.queue[this.frontIndex];

this.frontIndex++;
```

We perform:

* One Array access → O(1)
* One increment → O(1)

Therefore:

```text
O(1) + O(1)
= O(1)
```

No elements need to be shifted.

---

# 3.53 Why Is `front()` O(1)?

We directly access:

```javascript
this.queue[this.frontIndex]
```

Array index access is:

```text
O(1)
```

Therefore:

```text
front() → O(1)
```

---

# 3.54 Why Is `rear()` O(1)?

We directly access:

```javascript
this.queue[this.queue.length - 1]
```

Again, direct Array access:

```text
O(1)
```

Therefore:

```text
rear() → O(1)
```

---

# 3.55 Why Is `size()` O(1)?

We calculate:

```javascript
this.queue.length - this.frontIndex
```

There is no loop.

Therefore:

```text
size() → O(1)
```

---

# 3.56 Queue Underflow

Suppose:

```javascript
const queue = new Queue();

queue.dequeue();
```

The Queue is empty.

Our method checks:

```javascript
if (this.isEmpty()) {
    return null;
}
```

Therefore:

```text
dequeue()
   ↓
Queue empty?
   ↓
Yes
   ↓
return null
```

This is Queue Underflow handling.

---

# 3.57 Empty Queue Behaviour

Our methods behave consistently:

```javascript
queue.front();
```

returns:

```text
null
```

```javascript
queue.rear();
```

returns:

```text
null
```

```javascript
queue.dequeue();
```

returns:

```text
null
```

This gives the caller predictable behaviour.

---

# 3.58 Common Mistake – Using `pop()`

Wrong:

```javascript
dequeue() {
    return this.queue.pop();
}
```

Suppose:

```text
[10,20,30]
```

`pop()` removes:

```text
30
```

But Queue should remove:

```text
10
```

Therefore:

```text
❌ pop()
```

is incorrect for dequeue in this representation.

---

# 3.59 Common Mistake – Using `shift()` Everywhere

This is behaviourally correct:

```javascript
dequeue() {
    return this.queue.shift();
}
```

but has a performance disadvantage:

```text
dequeue → O(n)
```

For learning the simplest Queue, it is acceptable.

For an efficient implementation, prefer a Front index or Linked List.

---

# 3.60 Common Mistake – Using `queue.length` for Size

Wrong for our Front-index design:

```javascript
size() {
    return this.queue.length;
}
```

Example:

```text
queue = [10,20,30]
frontIndex = 2
```

Logical Queue:

```text
30
```

Size should be:

```text
1
```

but:

```text
queue.length
```

returns:

```text
3
```

Correct:

```javascript
size() {
    return this.queue.length - this.frontIndex;
}
```

---

# 3.61 Common Mistake – Forgetting Front Index Reset

Wrong:

```javascript
clear() {
    this.queue = [];
}
```

Better:

```javascript
clear() {
    this.queue = [];
    this.frontIndex = 0;
}
```

Always return the Queue to its initial state.

---

# 3.62 Common Mistake – Forgetting Empty Check

Wrong:

```javascript
front() {
    return this.queue[this.frontIndex];
}
```

For an empty Queue:

```text
queue = []
frontIndex = 0
```

this returns:

```text
undefined
```

Our chosen API behaviour is:

```text
null
```

So we explicitly check:

```javascript
if (this.isEmpty()) {
    return null;
}
```

---

# 3.63 Important Design Decision: `undefined` vs `null`

JavaScript's Array access can naturally return:

```text
undefined
```

when an index doesn't exist.

But a data structure API can intentionally choose:

```text
null
```

to represent:

> "There is no element."

There is no universal rule that says every Queue must return `null`; what matters is that your API behaviour is **consistent and documented**.

---

# 3.64 Queue State

A Queue is not just the Array.

Our Queue state consists of:

```text
queue
+
frontIndex
```

For example:

```text
queue = [10,20,30,40]
frontIndex = 2
```

means:

```text
Logical Queue:

30 → 40
```

This is an important mental model.

---

# 3.65 The Most Important Formula

For our Front-index implementation:

```text
Logical Size
    =
Array Length - Front Index
```

In code:

```javascript
this.queue.length - this.frontIndex
```

Remember this.

---

# 3.66 Complete Chapter 3 Code

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

    // Return the Rear element
    rear() {

        if (this.isEmpty()) {
            return null;
        }

        return this.queue[this.queue.length - 1];

    }

    // Check whether Queue is empty
    isEmpty() {

        return this.frontIndex >= this.queue.length;

    }

    // Return number of logical elements
    size() {

        return this.queue.length - this.frontIndex;

    }

    // Display logical Queue
    print() {

        console.log(this.queue.slice(this.frontIndex));

    }

    // Remove all elements
    clear() {

        this.queue = [];
        this.frontIndex = 0;

    }

}
```

---

# 3.67 Test Program

```javascript
const queue = new Queue();

console.log("Is Empty:", queue.isEmpty());
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

console.log("Dequeued:", queue.dequeue());
// 10

console.log("Dequeued:", queue.dequeue());
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
```

---

# 3.68 Final Mental Model

Think of the Queue as:

```text
Physical Array

[10,20,30,40]
 ↑
 old elements may remain

frontIndex = 2
```

Therefore:

```text
Logical Queue

30 → 40
↑     ↑
Front Rear
```

And operations:

```text
enqueue()
    ↓
add at Array end
    ↓
Rear

dequeue()
    ↓
read queue[frontIndex]
    ↓
frontIndex++
    ↓
Front moves forward
```

---

# 🎯 Chapter 3 Interview Checklist

Before moving to Chapter 4, make sure you can explain:

* [ ] What is `enqueue()`?
* [ ] What is `dequeue()`?
* [ ] Why does enqueue happen at the Rear?
* [ ] Why does dequeue happen at the Front?
* [ ] Why is `pop()` incorrect for dequeue?
* [ ] Why is `shift()` behaviourally correct?
* [ ] Why can `shift()` be O(n)?
* [ ] How does `frontIndex` solve this?
* [ ] Why is `dequeue()` O(1) with a Front index?
* [ ] What is the difference between physical and logical Queue contents?
* [ ] Why isn't `queue.length` always the logical size?
* [ ] What is the formula for Queue size?
* [ ] How does `isEmpty()` work with `frontIndex`?
* [ ] What is Queue Underflow?
* [ ] Why do we reset `frontIndex` in `clear()`?
* [ ] Why is `front()` O(1)?
* [ ] Why is `rear()` O(1)?
* [ ] Why is `print()` O(n)?
* [ ] Can the Queue be implemented with a Linked List?
* [ ] Can you write the complete Queue class without looking?

---

