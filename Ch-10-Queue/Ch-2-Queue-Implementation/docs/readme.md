# 📚 Chapter 2 – Queue Implementation in JavaScript

> **Goal:** Understand how to build a Queue from scratch in JavaScript, why we use an Array, how Queue storage works, how Front and Rear are represented, and how to create the basic Queue class before implementing its operations.

---

# 2.1 Introduction

In **Chapter 1**, we learned what a Queue is.

We learned that a Queue follows:

```text
FIFO
First In → First Out
```

and:

```text
Enqueue → Rear
Dequeue → Front
```

Now it is time to move from **theory to code**.

We will build our own Queue in JavaScript.

---

# 2.2 What Are We Going to Build?

Our goal is to create a class:

```javascript
class Queue {

}
```

Eventually, it will support:

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

But before implementing these operations, we need to understand the most important question:

# How are we going to store the Queue?

---

# 2.3 Does JavaScript Have a Built-in Queue?

## Short Answer

**No.**

JavaScript does not provide a dedicated built-in:

```javascript
Queue
```

class similar to:

```java
Queue<Integer> queue = new LinkedList<>();
```

or a dedicated Queue type in some other languages.

In JavaScript, we normally build Queue behaviour using existing structures such as:

* Arrays
* Linked Lists
* Custom classes

For learning and simple implementations, an Array is the easiest place to start.

---

# 2.4 Can We Simply Use an Array?

Yes.

For example:

```javascript
const queue = [];
```

We can store:

```javascript
queue.push(10);
queue.push(20);
queue.push(30);
```

Now:

```text
[10, 20, 30]
```

Conceptually:

```text
Front                 Rear
  ↓                     ↓
┌────┬────┬────┐
│ 10 │ 20 │ 30 │
└────┴────┴────┘
```

Here:

```text
10 → Front
30 → Rear
```

But there is an important distinction.

---

# 2.5 Is Every Array a Queue?

## No.

An Array is a **general-purpose data structure**.

It supports many operations:

```javascript
push()
pop()
shift()
unshift()
splice()
slice()
reverse()
sort()
```

A Queue, however, follows strict rules:

```text
Insert → Rear
Remove → Front
```

Therefore:

> **An Array becomes a Queue only when we use it according to Queue rules.**

---

# 2.6 Array vs Queue

Consider:

```javascript
const arr = [10, 20, 30];
```

This is simply an Array.

You can do:

```javascript
arr.pop();
```

or:

```javascript
arr.splice(1, 1);
```

or:

```javascript
arr.reverse();
```

Nothing prevents you from doing this.

But a Queue should not allow arbitrary operations.

A Queue should provide controlled operations such as:

```javascript
queue.enqueue(40);
queue.dequeue();
queue.front();
```

---

# 2.7 Why Create a Queue Class?

If we can already do:

```javascript
const queue = [];
```

why create:

```javascript
const queue = new Queue();
```

?

Because a Queue is not just storage.

A Queue has **rules and behaviour**.

We want to enforce:

```text
Enqueue → Rear
Dequeue → Front
FIFO
```

A class gives us a clean interface:

```javascript
queue.enqueue(10);
queue.dequeue();
queue.front();
queue.rear();
```

instead of letting users manipulate the Array directly.

---

# 2.8 Why Do We Use an Array?

A Queue needs some form of internal storage.

Possible implementations include:

```text
Array
Linked List
Circular Array
Deque
```

For our first implementation, we will use an Array because it is:

* Simple
* Easy to understand
* Built into JavaScript
* Dynamically resizable
* Ordered
* Easy to inspect
* Good for learning Queue fundamentals

---

# 2.9 Why Not Use Separate Variables?

We could theoretically do:

```javascript
let first;
let second;
let third;
let fourth;
```

But this is not practical.

What if the Queue contains:

```text
1000 elements?
```

We cannot manually create:

```javascript
let first;
let second;
...
let thousand;
```

We need a collection.

An Array gives us exactly that.

---

# 2.10 Why Not Use an Object?

We could technically use:

```javascript
const queue = {};
```

But an Object is primarily designed for:

```text
key → value
```

relationships.

For example:

```javascript
const user = {
    name: "Abhishek",
    age: 20
};
```

A Queue doesn't fundamentally need key-value pairs.

It needs an ordered sequence.

Therefore, an Array is much more natural for our basic implementation.

---

# 2.11 Internal Queue Storage

Our Queue will internally contain an Array:

```text
Queue
  │
  ▼
Internal Array
```

For example:

```text
Queue
  │
  ▼
[10, 20, 30, 40]
```

Conceptually:

```text
Front                         Rear
  ↓                             ↓
┌────┬────┬────┬────┐
│ 10 │ 20 │ 30 │ 40 │
└────┴────┴────┴────┘
```

The first element represents the Front.

The last element represents the Rear.

---

# 2.12 Front and Rear in an Array

Suppose:

```javascript
const queue = [10, 20, 30, 40];
```

Array indexes:

```text
Index
  0     1     2     3
  ↓     ↓     ↓     ↓

[ 10 | 20 | 30 | 40 ]
  ↑                 ↑
Front             Rear
```

Therefore:

```javascript
queue[0]
```

represents the Front.

And:

```javascript
queue[queue.length - 1]
```

represents the Rear.

This idea will be important when implementing:

```javascript
front()
rear()
```

---

# 2.13 Creating the Queue Class

Now let's create our Queue.

```javascript
class Queue {

}
```

This class acts as the blueprint for Queue objects.

---

# 2.14 What Is a Class?

A class is a **blueprint** for creating objects.

Think about a building blueprint.

One blueprint can be used to create multiple buildings.

Similarly:

```javascript
class Queue {

}
```

is the blueprint.

We can create:

```javascript
const queue1 = new Queue();

const queue2 = new Queue();

const queue3 = new Queue();
```

Each Queue can maintain its own data.

---

# 2.15 Constructor

We now need to initialize our Queue.

```javascript
class Queue {

    constructor() {

    }

}
```

The `constructor()` is automatically executed when we create a new Queue.

Example:

```javascript
const queue = new Queue();
```

JavaScript automatically executes:

```javascript
constructor()
```

---

# 2.16 Why Do We Need a Constructor?

Every new Queue should start empty.

Therefore, we need internal storage:

```javascript
this.queue = [];
```

Complete:

```javascript
class Queue {

    constructor() {

        this.queue = [];

    }

}
```

Now every new Queue starts with:

```text
[]
```

---

# 2.17 Understanding `this`

This is an important JavaScript concept.

```javascript
this
```

refers to the **current object**.

Suppose:

```javascript
const queue1 = new Queue();
const queue2 = new Queue();
```

Conceptually:

```text
queue1
  │
  └── queue → []

queue2
  │
  └── queue → []
```

Each object has its own Queue storage.

---

# 2.18 Why `this.queue`?

Consider:

```javascript
this.queue = [];
```

There are two parts.

### `this`

Refers to the current Queue object.

### `queue`

The property where we store the internal Array.

### `[]`

Creates an empty Array.

So:

```javascript
this.queue = [];
```

means:

> Create an empty Array and store it inside the current Queue object.

---

# 2.19 Initial Queue State

When we execute:

```javascript
const queue = new Queue();
```

the constructor runs:

```javascript
this.queue = [];
```

Therefore:

```text
Queue
  ↓
[]
```

There is currently:

```text
Front → Empty ← Rear
```

No Front element exists.

No Rear element exists.

---

# 2.20 Dry Run – Creating a Queue

Code:

```javascript
const queue = new Queue();
```

### Step 1

JavaScript creates a new Queue object.

```text
New Object
```

### Step 2

The constructor runs.

```javascript
constructor() {

    this.queue = [];

}
```

### Step 3

An empty Array is created.

```text
[]
```

### Step 4

The Array is stored inside the object.

Conceptually:

```text
queue
  │
  ▼
{
    queue: []
}
```

Our Queue is ready.

---

# 2.21 First Basic Queue Class

At this stage, our class is:

```javascript
class Queue {

    constructor() {

        this.queue = [];

    }

}
```

We can create it:

```javascript
const queue = new Queue();
```

But currently it cannot:

```text
❌ Enqueue
❌ Dequeue
❌ Front
❌ Rear
❌ Size
❌ isEmpty
```

It only creates an empty Queue.

The next step is implementing these operations.

---

# 2.22 Why Should Front and Rear Be Different?

This is one of the most important Queue concepts.

A Queue has **two ends**.

```text
Front                         Rear
  ↓                             ↓
┌────┬────┬────┬────┐
│ 10 │ 20 │ 30 │ 40 │
└────┴────┴────┴────┘
```

### Front

Used for:

```text
Dequeue
```

### Rear

Used for:

```text
Enqueue
```

Therefore:

```text
Front → Remove
Rear  → Insert
```

---

# 2.23 Queue vs Array Index

Suppose:

```javascript
this.queue = [10, 20, 30];
```

Then:

```text
Index
  0     1     2
  ↓     ↓     ↓

[ 10 | 20 | 30 ]
  ↑           ↑
Front       Rear
```

So:

```javascript
this.queue[0]
```

is the Front.

And:

```javascript
this.queue[this.queue.length - 1]
```

is the Rear.

---

# 2.24 Why Can't We Just Use `pop()` for Dequeue?

This is a common beginner mistake.

Suppose:

```text
Front       Rear
 ↓            ↓
10 → 20 → 30
```

If we use:

```javascript
queue.pop();
```

we remove:

```text
30
```

But `30` is at the Rear.

A Queue requires:

```text
Dequeue → Front
```

so we need to remove:

```text
10
```

Therefore, `pop()` would give us the wrong Queue behaviour.

---

# 2.25 Why `shift()` Seems Correct

For a simple Array-based Queue:

```javascript
queue.push(10);
queue.push(20);
queue.push(30);
```

gives:

```text
[10,20,30]
```

Then:

```javascript
queue.shift();
```

removes:

```text
10
```

This is exactly what Queue requires:

```text
Rear → Insert
Front → Remove
```

So conceptually:

```text
Enqueue → push()
Dequeue → shift()
```

This works correctly from a **behavioural** perspective.

But there is a performance issue.

---

# 2.26 The `shift()` Performance Problem

Suppose we have:

```text
[10,20,30,40,50]
```

Calling:

```javascript
queue.shift();
```

removes `10`.

The remaining elements may need to be moved/reindexed:

```text
20
30
40
50
```

Conceptually:

```text
Before:
[10,20,30,40,50]

Remove 10

After:
[20,30,40,50]
```

For an Array, this generally requires work proportional to the number of remaining elements.

Therefore:

```text
shift() → O(n)
```

in typical JavaScript Array implementations.

---

# 2.27 Why This Matters

Suppose we have:

```text
10 elements
```

Not a big issue.

But imagine:

```text
1,000,000 elements
```

and repeatedly call:

```javascript
queue.shift();
```

The repeated shifting/reindexing can become expensive.

Therefore, for a serious Queue implementation, we should avoid relying on repeated `shift()`.

---

# 2.28 Better Queue Design

Instead of physically removing the first Array element, we can maintain a **Front index**.

Suppose:

```javascript
this.queue = [10, 20, 30, 40];
```

and:

```javascript
this.front = 0;
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

Front element:

```javascript
this.queue[this.front]
```

which is:

```text
10
```

After dequeue:

```javascript
this.front++;
```

Now:

```text
front = 1
```

The logical Queue becomes:

```text
        Front
          ↓
[ 10 | 20 | 30 | 40 ]
       20
```

We don't need to move every element.

This can make dequeue:

```text
O(1)
```

---

# 2.29 Logical Queue vs Physical Array

This is an important concept.

The physical Array might be:

```text
[10,20,30,40]
```

but the **logical Queue** can be:

```text
20 → 30 → 40
```

if:

```text
front = 1
```

So:

```text
Physical storage
[10,20,30,40]
 ↑
old data

Logical Queue
    20 → 30 → 40
    ↑
  Front
```

This idea is commonly used in efficient Array-based Queue implementations.

---

# 2.30 Why Not Delete the Old Element?

We could set:

```javascript
this.queue[this.front] = undefined;
```

For example:

```text
Before:

[10,20,30,40]

After dequeue:

[undefined,20,30,40]
```

and move:

```javascript
this.front++;
```

Now:

```text
front = 1
```

The logical Queue is:

```text
20 → 30 → 40
```

Later, we can clean up unused storage when appropriate.

---

# 2.31 Two Different Learning Implementations

For our Queue course, it is useful to understand both.

### Simple Implementation

```text
Enqueue → push()
Dequeue → shift()
```

Advantages:

* Very easy to understand.
* Short code.
* Good for learning basic Queue behaviour.

Disadvantage:

```text
Dequeue → O(n)
```

---

### Efficient Array Implementation

```text
Enqueue → push()
Dequeue → front index++
```

Advantages:

```text
Enqueue → O(1) amortized
Dequeue → O(1)
```

Disadvantage:

* Slightly more complicated.
* Requires managing the Front index.
* May require occasional cleanup/compaction.

We will build the implementation carefully in later chapters.

---

# 2.32 Queue Storage Design

For our implementation, we can start with:

```javascript
class Queue {

    constructor() {

        this.queue = [];
        this.front = 0;

    }

}
```

Now we have:

```text
queue → stores elements
front → tracks logical Front
```

Initially:

```text
queue = []

front = 0
```

---

# 2.33 Why Is `front = 0`?

Array indexes begin at:

```text
0
```

The first element is therefore:

```javascript
queue[0]
```

So the initial Front index is:

```javascript
front = 0;
```

Once an element is removed, we move the Front forward:

```javascript
front++;
```

---

# 2.34 Example

Suppose:

```javascript
this.queue = [10,20,30];
this.front = 0;
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

Dequeue `10`.

Instead of:

```javascript
shift();
```

we do:

```javascript
this.front++;
```

Now:

```text
front = 1
```

Logical Queue:

```text
[10,20,30]
    ↑
   Front
```

The first logical element is now:

```javascript
this.queue[this.front]
```

which gives:

```text
20
```

---

# 2.35 Important: Front Index Is Not the Front Value

This distinction is important.

Suppose:

```javascript
this.queue = [10,20,30];
this.front = 1;
```

Then:

```text
front = 1
```

is the **index**.

The Front element is:

```javascript
this.queue[1]
```

which is:

```text
20
```

Therefore:

```text
Front index = 1
Front value = 20
```

Don't confuse the two.

---

# 2.36 What About Rear?

If we use an Array and the Rear is always the last inserted element, we can calculate:

```javascript
this.queue.length - 1
```

For example:

```text
[10,20,30]
```

Length:

```text
3
```

Last index:

```text
3 - 1 = 2
```

Therefore:

```javascript
this.queue[2]
```

is:

```text
30
```

---

# 2.37 Initial Queue Architecture

At this stage, our efficient Array-based Queue can conceptually be:

```javascript
class Queue {

    constructor() {

        this.queue = [];

        this.front = 0;

    }

}
```

The structure is:

```text
Queue
│
├── queue → []
│
└── front → 0
```

---

# 2.38 What Will Happen During Enqueue?

Suppose:

```javascript
queue.enqueue(10);
```

Conceptually:

```text
Before:

queue = []
front = 0
```

After:

```text
queue = [10]
front = 0
```

Then:

```javascript
queue.enqueue(20);
```

becomes:

```text
queue = [10,20]
front = 0
```

Then:

```javascript
queue.enqueue(30);
```

becomes:

```text
queue = [10,20,30]
front = 0
```

Logical Queue:

```text
Front              Rear
 ↓                    ↓
10 → 20 → 30
```

---

# 2.39 What Will Happen During Dequeue?

Suppose:

```text
queue = [10,20,30]
front = 0
```

Dequeue:

```javascript
queue.dequeue();
```

We identify:

```javascript
this.queue[this.front]
```

which is:

```text
10
```

Then:

```javascript
this.front++;
```

Now:

```text
queue = [10,20,30]
front = 1
```

Logical Queue:

```text
Front           Rear
 ↓                ↓
20 → 30
```

The old `10` is still physically present in the Array, but it is no longer part of the logical Queue.

This distinction becomes very important in efficient Queue implementations.

---

# 2.40 Why Does the Old Data Stay?

Because we are not moving every element.

This is the trade-off.

Instead of:

```text
Remove 10
 ↓
Move 20
 ↓
Move 30
 ↓
Move 40
```

we simply move the Front pointer/index:

```text
front++
```

Therefore:

```text
Dequeue → O(1)
```

---

# 2.41 Queue Object After Several Operations

Suppose:

```text
enqueue(10)
enqueue(20)
enqueue(30)
dequeue()
dequeue()
```

Physical Array might be:

```text
[10,20,30]
```

Front:

```text
2
```

Logical Queue:

```text
30
```

Visual:

```text
Physical Array:

Index
  0     1     2
  ↓     ↓     ↓

[ 10 | 20 | 30 ]
             ↑
           Front
```

The Queue logically contains only:

```text
30
```

---

# 2.42 Why Do We Need Cleanup?

Imagine we perform:

```text
enqueue()
dequeue()
```

millions of times.

The physical Array could continue growing:

```text
[old, old, old, old, old, ..., current]
```

while the Front index keeps increasing.

That means unused elements remain in memory.

Therefore, a production-quality implementation may periodically **compact** the Array.

For now, understand the concept:

```text
Logical Queue ≠ necessarily entire physical Array
```

---

# 2.43 Simple vs Efficient Implementation

This distinction is important for interviews.

### Simple Queue

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
Enqueue → O(1) amortized
Dequeue → O(n)
```

---

### Front-Index Queue

```text
queue = []
front = 0
```

Dequeue conceptually:

```javascript
const value = this.queue[this.front];
this.front++;
```

Complexity:

```text
Enqueue → O(1) amortized
Dequeue → O(1)
```

with appropriate cleanup strategy.

---

# 2.44 What Should We Learn First?

For learning DSA, don't jump directly into optimization.

First understand:

```text
Queue
 ↓
FIFO
 ↓
Front
 ↓
Rear
 ↓
Enqueue
 ↓
Dequeue
```

Then understand:

```text
Array implementation
 ↓
shift()
 ↓
O(n) problem
 ↓
Front index
 ↓
O(1) dequeue
```

This progression helps you understand **why** the optimized implementation exists.

---

# 2.45 Queue Class – Basic Version

For the simplest conceptual implementation:

```javascript
class Queue {

    constructor() {

        this.queue = [];

    }

}
```

This is enough for now because Chapter 2 is primarily about the structure.

---

# 2.46 Queue Class – Efficient Design Preview

For the efficient Array implementation, we can prepare:

```javascript
class Queue {

    constructor() {

        this.queue = [];

        this.front = 0;

    }

}
```

Don't worry about implementing all methods yet.

We will implement them one by one in the next chapter.

---

# 2.47 Dry Run – Queue Creation

Code:

```javascript
const queue = new Queue();
```

Suppose we use:

```javascript
class Queue {

    constructor() {

        this.queue = [];

        this.front = 0;

    }

}
```

Memory conceptually becomes:

```text
queue object
│
├── queue → []
│
└── front → 0
```

The Queue is empty.

---

# 2.48 Dry Run – First Enqueue

Conceptually:

```javascript
queue.enqueue(10);
```

Storage becomes:

```text
queue → [10]
front → 0
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

The same element is both:

```text
Front
Rear
```

because there is only one element.

---

# 2.49 Dry Run – Second Enqueue

```javascript
queue.enqueue(20);
```

Storage:

```text
queue → [10,20]
front → 0
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

# 2.50 Dry Run – Third Enqueue

```javascript
queue.enqueue(30);
```

Storage:

```text
queue → [10,20,30]
front → 0
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

# 2.51 Dry Run – First Dequeue

Logical operation:

```javascript
queue.dequeue();
```

Before:

```text
queue = [10,20,30]
front = 0
```

Front value:

```javascript
queue[front]
```

gives:

```text
10
```

Then:

```javascript
front++;
```

Now:

```text
queue = [10,20,30]
front = 1
```

Logical Queue:

```text
Front             Rear
 ↓                  ↓
20 → 30
```

---

# 2.52 Important Concept

Notice something interesting.

The Array still contains:

```text
[10,20,30]
```

But the Queue logically contains:

```text
20 → 30
```

Why?

Because:

```text
front = 1
```

So the Queue starts from index `1`.

This is one of the most important concepts in an efficient Array-based Queue.

---

# 2.53 Why Queue Is More Complicated Than Stack With an Array

Stack was simple:

```text
push → end
pop  → end
```

Both operations happen at the same end.

Queue needs:

```text
enqueue → Rear
dequeue → Front
```

Two different ends.

If we use:

```text
push + shift
```

the behaviour is correct, but `shift()` can be O(n).

Therefore, efficient Queue implementations require more thought.

---

# 2.54 Stack vs Queue Implementation

### Stack

```text
Array

[10,20,30]

        ↑
       Top

push → end
pop  → end
```

Simple.

---

### Queue

```text
Array

[10,20,30]

 ↑          ↑
Front      Rear

enqueue → Rear
dequeue → Front
```

Because the operations occur at different ends, we need to carefully manage the Front.

---

# 2.55 Important Interview Concept

If an interviewer asks:

> "Can you implement a Queue using an Array?"

A basic answer is:

```javascript
const queue = [];

queue.push(value);
queue.shift();
```

But a stronger answer is:

> "Yes. A simple Array implementation can use `push()` for enqueue and `shift()` for dequeue, but `shift()` is O(n) because remaining elements may need to be reindexed. For O(1) dequeue, I would maintain a Front index or use a linked-list-based implementation."

That demonstrates deeper understanding.

---

# 2.56 Chapter 2 Summary

In this chapter, we learned how a Queue can be represented in JavaScript.

We learned:

* JavaScript does not provide a dedicated built-in Queue class.
* Arrays can be used as the underlying storage.
* An Array is not automatically a Queue.
* Queue behaviour comes from enforcing FIFO rules.
* Queue insertion happens at the Rear.
* Queue deletion happens at the Front.
* A Queue can be represented using an Array.
* `push()` + `shift()` provides simple Queue behaviour.
* `shift()` is generally O(n).
* A Front index can avoid repeated shifting.
* The Front index represents the **logical beginning** of the Queue.
* Physical Array storage and logical Queue contents can differ.
* Queue can also be implemented using a Linked List.
* We created the basic Queue class structure.

---

# 🎯 Chapter 2 Interview Checklist

Before moving to Chapter 3, you should be able to answer:

* [ ] Does JavaScript have a built-in Queue?
* [ ] Why do we create our own Queue class?
* [ ] Is every Array a Queue?
* [ ] Why do we use an Array?
* [ ] What is the role of `this.queue`?
* [ ] What does the constructor do?
* [ ] What does `this` mean?
* [ ] Where is the Front in an Array?
* [ ] Where is the Rear?
* [ ] Why can't we use `pop()` for dequeue?
* [ ] Why does `shift()` work behaviourally?
* [ ] Why is `shift()` potentially O(n)?
* [ ] How does a Front index improve dequeue?
* [ ] What is the difference between physical Array storage and logical Queue contents?
* [ ] Can a Queue be implemented using a Linked List?
* [ ] What is the difference between a Stack Array implementation and a Queue Array implementation?

---

# 🚀 Next: Chapter 3 – Queue Operations

Now we have the Queue structure:

```text
Queue
│
├── queue → []
└── front → 0
```

Next we will implement every operation **from scratch**, one by one:

```text
Chapter 3
│
├── enqueue()
├── dequeue()
├── front()
├── rear()
├── isEmpty()
├── size()
├── clear()
├── print()
├── Underflow handling
├── Dry runs
├── Complexity analysis
└── Complete Queue Class
```

The most important part will be understanding **why `front++` allows `dequeue()` to become O(1)** instead of using the expensive `shift()` operation.
