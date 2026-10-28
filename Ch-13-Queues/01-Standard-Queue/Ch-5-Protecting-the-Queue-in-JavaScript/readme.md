# 🔒 Chapter 5 – Protecting the Queue in JavaScript

> **Goal:** Prevent external code from directly accessing or modifying the internal Array and `frontIndex`. We will move from a basic Queue implementation to a properly encapsulated Queue with a controlled public API.

---

# 5.1 The Problem

In Chapter 4, our Queue looked like this:

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

    // ...
}
```

It works correctly.

But there is a problem.

The internal data is **public**.

Someone can access:

```javascript
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
```

Now they can directly access:

```javascript
queue.queue
```

and get:

```text
[10, 20, 30]
```

---

# 5.2 The Developer Can Break the Queue

Because `queue.queue` is accessible, someone can do:

```javascript
queue.queue.pop();
```

or:

```javascript
queue.queue.shift();
```

or:

```javascript
queue.queue.unshift(100);
```

or:

```javascript
queue.queue.splice(1, 1);
```

or even:

```javascript
queue.queue[0] = 999;
```

Now the Queue's internal rules can be bypassed.

---

# 5.3 Why Is This a Problem?

A Queue must follow:

```text
Enqueue → Rear

Dequeue → Front
```

and:

```text
FIFO
```

But if users can directly modify the Array, they can perform operations that are not Queue operations.

For example:

```javascript
queue.queue.unshift(100);
```

Now:

```text
100 → 10 → 20 → 30
```

The user inserted an element at the Front.

But Queue insertion is supposed to happen at the Rear.

Therefore, the Queue abstraction has been broken.

---

# 5.4 The Same Problem Exists With `frontIndex`

Our Queue also contains:

```javascript
queue.frontIndex
```

Because it is public, someone could do:

```javascript
queue.frontIndex = 999;
```

Now the Queue's internal state is corrupted.

For example:

```text
queue = [10,20,30]

frontIndex = 999
```

The Queue no longer behaves correctly.

---

# 5.5 What Do We Want?

We want users to interact with the Queue through methods:

```javascript
queue.enqueue(10);

queue.dequeue();

queue.front();

queue.rear();

queue.isEmpty();

queue.size();
```

But we **don't** want them to directly manipulate:

```javascript
queue.queue
queue.frontIndex
```

Conceptually:

```text
             Queue
               │
       ┌───────┴────────┐
       │                │
    Public           Private
     API              Data
       │                │
       ▼                ▼
 enqueue()          queue
 dequeue()          frontIndex
 front()
 rear()
 size()
```

This concept is called:

# Encapsulation

---

# 5.6 What Is Encapsulation?

**Encapsulation** means:

> Bundling data and the methods that operate on that data together while controlling direct access to the internal state.

In our Queue:

### Data

```text
queue
frontIndex
```

### Methods

```text
enqueue()
dequeue()
front()
rear()
isEmpty()
size()
clear()
```

The methods control how the data is modified.

---

# 5.7 Why Is Encapsulation Important?

Without encapsulation:

```text
User
 ↓
Directly modifies data
 ↓
Can break Queue rules
```

With encapsulation:

```text
User
 ↓
Public Queue API
 ↓
Validation / Rules
 ↓
Internal data
```

Therefore:

> **The user interacts with the Queue, not with its internal implementation.**

---

# 5.8 Public API vs Internal Implementation

This distinction is extremely important in software engineering.

### Public API

These are the operations users are allowed to call:

```javascript
queue.enqueue(10);
queue.dequeue();
queue.front();
queue.rear();
queue.isEmpty();
queue.size();
queue.clear();
```

### Internal Implementation

Users don't need to know:

```text
How the elements are stored
Where Front is stored
How dequeue works internally
Whether Array or Linked List is used
How cleanup is performed
```

This allows us to change the implementation later without changing how users use the Queue.

---

# 5.9 Example of Abstraction

Suppose today our Queue uses:

```text
Array
```

Tomorrow we might change it to:

```text
Linked List
```

The user should still be able to write:

```javascript
queue.enqueue(10);
queue.dequeue();
```

They shouldn't need to rewrite their entire program.

This is one of the major benefits of abstraction.

---

# 5.10 JavaScript Private Fields

Modern JavaScript provides actual private class fields using:

```javascript
#
```

Example:

```javascript
class Queue {

    #queue;
    #frontIndex;

}
```

The `#` means:

> This field is private to the class.

It cannot be accessed directly from outside the class.

---

# 5.11 Creating a Private Queue

We can write:

```javascript
class Queue {

    #queue;
    #frontIndex;

    constructor() {

        this.#queue = [];
        this.#frontIndex = 0;

    }

}
```

Now:

```text
Queue
│
├── #queue
│
└── #frontIndex
```

Both are private.

---

# 5.12 What Does `#queue` Mean?

This:

```javascript
#queue
```

is not the same as:

```javascript
queue
```

The `#` creates a true JavaScript private field.

Outside the class:

```javascript
queue.#queue
```

is invalid.

JavaScript will throw a syntax error.

---

# 5.13 Public vs Private

### Public property

```javascript
this.queue = [];
```

Can be accessed:

```javascript
queue.queue
```

### Private property

```javascript
this.#queue = [];
```

Cannot be accessed:

```javascript
queue.#queue
```

from outside the class.

---

# 5.14 Protected Queue Structure

Our new Queue will have:

```javascript
class Queue {

    #queue = [];
    #frontIndex = 0;

}
```

The outside world sees:

```text
Queue
│
├── enqueue()
├── dequeue()
├── front()
├── rear()
├── isEmpty()
├── size()
└── clear()
```

But internally:

```text
Queue
│
├── #queue
└── #frontIndex
```

are hidden.

---

# 5.15 Complete Protected Queue

```javascript
class Queue {

    #queue;
    #frontIndex;

    constructor() {

        this.#queue = [];
        this.#frontIndex = 0;

    }

    // Add element at Rear
    enqueue(value) {

        this.#queue.push(value);

    }

    // Remove and return Front element
    dequeue() {

        if (this.isEmpty()) {
            return null;
        }

        const value = this.#queue[this.#frontIndex];

        this.#frontIndex++;

        return value;

    }

    // View Front element
    front() {

        if (this.isEmpty()) {
            return null;
        }

        return this.#queue[this.#frontIndex];

    }

    // View Rear element
    rear() {

        if (this.isEmpty()) {
            return null;
        }

        return this.#queue[this.#queue.length - 1];

    }

    // Check whether Queue is empty
    isEmpty() {

        return this.#frontIndex >= this.#queue.length;

    }

    // Return logical size
    size() {

        return this.#queue.length - this.#frontIndex;

    }

    // Display logical Queue
    print() {

        console.log(
            this.#queue.slice(this.#frontIndex)
        );

    }

    // Remove everything
    clear() {

        this.#queue = [];
        this.#frontIndex = 0;

    }

}
```

---

# 5.16 Using the Protected Queue

```javascript
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front());
```

Output:

```text
10
```

Then:

```javascript
console.log(queue.dequeue());
```

Output:

```text
10
```

The Queue still works exactly as before.

The difference is that the internal state is now protected.

---

# 5.17 What Happens If We Try Direct Access?

Suppose:

```javascript
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
```

Trying:

```javascript
console.log(queue.#queue);
```

is invalid.

The private field cannot be accessed from outside the class.

Similarly:

```javascript
queue.#frontIndex = 100;
```

is not allowed.

This prevents external code from directly corrupting our internal Queue state.

---

# 5.18 Why This Is Better

Before:

```text
queue.queue
     ↓
[10,20,30]
     ↓
Anyone can modify it
```

After:

```text
Queue
│
├── Public methods
│     ↓
│  enqueue()
│  dequeue()
│  front()
│  rear()
│
└── Private state
      ↓
   #queue
   #frontIndex
```

The only normal way to modify the Queue is through its methods.

---

# 5.19 The Queue Is Now an Abstraction

Users don't need to know that we're using:

```text
Array + Front Index
```

They only know:

```javascript
queue.enqueue(10);
queue.enqueue(20);

queue.dequeue();
```

Internally, we could later change:

```text
Array
```

to:

```text
Linked List
```

without changing the public API.

That is the power of abstraction.

---

# 5.20 Before vs After

## Before

```javascript
class Queue {

    constructor() {
        this.queue = [];
        this.frontIndex = 0;
    }

}
```

External code:

```javascript
queue.queue
queue.frontIndex
```

can access the internal state.

---

## After

```javascript
class Queue {

    #queue;
    #frontIndex;

    constructor() {
        this.#queue = [];
        this.#frontIndex = 0;
    }

}
```

External code cannot directly access:

```text
#queue
#frontIndex
```

---

# 5.21 Why Not Just Use `_queue`?

You may see code like:

```javascript
this._queue = [];
```

The underscore is a **convention**, not real privacy.

It means:

> "Developers should treat this as internal."

But JavaScript does not enforce it.

Someone can still do:

```javascript
queue._queue.push(100);
```

So:

```text
_queue
```

is not truly private.

---

# 5.22 `_queue` vs `#queue`

| Feature                       | `_queue` | `#queue`    |
| ----------------------------- | -------- | ----------- |
| Convention                    | Yes      | No          |
| Truly private                 | ❌        | ✅           |
| External access               | Possible | Not allowed |
| Enforced by JS                | ❌        | ✅           |
| Good for strict encapsulation | ❌        | ✅           |

Therefore, when we specifically want JavaScript private fields:

```javascript
#queue
```

is the appropriate language feature.

---

# 5.23 Why Not Return the Internal Array?

This is another important mistake.

Suppose we create:

```javascript
getQueue() {
    return this.#queue;
}
```

Then:

```javascript
const data = queue.getQueue();
```

would give the caller a reference to the actual internal Array.

They could then do:

```javascript
data.push(999);
```

and modify the Queue without using:

```javascript
enqueue()
```

We have effectively broken encapsulation again.

---

# 5.24 Returning a Copy

If we want to expose Queue contents, we should return a copy:

```javascript
getQueue() {

    return this.#queue.slice(this.#frontIndex);

}
```

Now:

```javascript
const data = queue.getQueue();
```

returns a separate Array.

If the user modifies:

```javascript
data.push(999);
```

the internal Queue is unaffected.

---

# 5.25 Should We Add `getQueue()`?

We don't necessarily need it.

Our:

```javascript
print()
```

method is enough for basic output.

If we want a method that returns data, we can use:

```javascript
toArray() {

    return this.#queue.slice(this.#frontIndex);

}
```

This provides a safe snapshot.

---

# 5.26 Safe `toArray()`

```javascript
toArray() {

    return this.#queue.slice(this.#frontIndex);

}
```

Example:

```javascript
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

const data = queue.toArray();

console.log(data);
```

Output:

```text
[10,20,30]
```

Now:

```javascript
data.push(100);
```

does not modify the Queue.

The Queue remains:

```text
10 → 20 → 30
```

---

# 5.27 Complete Protected Queue With `toArray()`

```javascript
class Queue {

    #queue;
    #frontIndex;

    constructor() {

        this.#queue = [];
        this.#frontIndex = 0;

    }

    enqueue(value) {

        this.#queue.push(value);

    }

    dequeue() {

        if (this.isEmpty()) {
            return null;
        }

        const value = this.#queue[this.#frontIndex];

        this.#frontIndex++;

        return value;

    }

    front() {

        if (this.isEmpty()) {
            return null;
        }

        return this.#queue[this.#frontIndex];

    }

    rear() {

        if (this.isEmpty()) {
            return null;
        }

        return this.#queue[this.#queue.length - 1];

    }

    isEmpty() {

        return this.#frontIndex >= this.#queue.length;

    }

    size() {

        return this.#queue.length - this.#frontIndex;

    }

    print() {

        console.log(
            this.#queue.slice(this.#frontIndex)
        );

    }

    toArray() {

        return this.#queue.slice(this.#frontIndex);

    }

    clear() {

        this.#queue = [];
        this.#frontIndex = 0;

    }

}
```

---

# 5.28 Encapsulation Flow

Now the architecture is:

```text
                USER
                  │
                  ▼
          Public Queue API
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
   enqueue()  dequeue()   front()
       │          │          │
       └──────────┼──────────┘
                  ▼
          Private Queue State
                  │
          ┌───────┴───────┐
          ▼               ▼
       #queue        #frontIndex
```

The user doesn't directly manipulate the internal state.

---

# 5.29 Why Protection Matters

Imagine a large application.

Hundreds of places in your code use:

```javascript
queue.enqueue(...)
queue.dequeue(...)
```

If the internal Array is public, any part of the application could accidentally do:

```javascript
queue.queue.pop();
```

This can create difficult-to-find bugs.

With private fields:

```text
Application
     ↓
Queue API
     ↓
Validation + Rules
     ↓
Internal State
```

The Queue itself controls its state.

---

# 5.30 This Is More Than Security

Encapsulation is not primarily about making a data structure "secure."

It is about:

* Controlling state
* Preventing accidental misuse
* Maintaining invariants
* Reducing coupling
* Hiding implementation details
* Making code easier to maintain

---

# 5.31 Queue Invariant

Our Queue has an important invariant:

> **Elements must be removed in the same order in which they were logically inserted.**

That means:

```text
10 → 20 → 30 → 40
```

must always dequeue as:

```text
10 → 20 → 30 → 40
```

By hiding:

```text
#queue
#frontIndex
```

we make it harder for outside code to violate this invariant.

---

# 5.32 Important Distinction: Private Does Not Mean Immutable

Private fields can still be modified **inside the class**.

For example:

```javascript
this.#frontIndex++;
```

is completely valid.

Private means:

> External code cannot directly access the field.

It does **not** mean:

> The field can never change.

Our Queue needs to change its internal state when:

```text
enqueue()
dequeue()
clear()
```

are called.

---

# 5.33 Complete Protected Queue Test

```javascript
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.toArray());
// [10, 20, 30]

console.log(queue.front());
// 10

console.log(queue.rear());
// 30

console.log(queue.size());
// 3

console.log(queue.dequeue());
// 10

console.log(queue.toArray());
// [20, 30]

console.log(queue.size());
// 2

console.log(queue.isEmpty());
// false

queue.clear();

console.log(queue.toArray());
// []

console.log(queue.isEmpty());
// true
```

---

# 5.34 Dry Run

Let's understand what happens internally.

Start:

```text
#queue = []
#frontIndex = 0
```

Call:

```javascript
queue.enqueue(10);
```

Now:

```text
#queue = [10]
#frontIndex = 0
```

Call:

```javascript
queue.enqueue(20);
```

Now:

```text
#queue = [10,20]
#frontIndex = 0
```

Call:

```javascript
queue.enqueue(30);
```

Now:

```text
#queue = [10,20,30]
#frontIndex = 0
```

Call:

```javascript
queue.dequeue();
```

Value:

```text
10
```

Then:

```text
#frontIndex = 1
```

Physical:

```text
[10,20,30]
```

Logical:

```text
20 → 30
```

The internal state is still controlled by the class.

---

# 5.35 Public API

Our Queue's public API is now:

```text
enqueue()
dequeue()
front()
rear()
isEmpty()
size()
print()
toArray()
clear()
```

Internal:

```text
#queue
#frontIndex
```

This is a much cleaner abstraction.

---

# 5.36 Interview Question

### Why should Queue's internal Array be private?

**Answer:**

> Because allowing external code to directly modify the underlying Array can violate Queue invariants such as FIFO ordering and Front/Rear restrictions. Encapsulation ensures that state changes happen through controlled Queue operations.

---

# 5.37 Interview Question

### Is `_queue` actually private in JavaScript?

**Answer:**

> No. `_queue` is only a naming convention indicating that a property is intended to be internal. JavaScript private class fields use the `#` syntax and are enforced by the language.

---

# 5.38 Interview Question

### What is encapsulation?

**Answer:**

> Encapsulation is the practice of bundling data and the methods that operate on that data while controlling access to the internal state.

---

# 5.39 Interview Question

### What is the benefit of private fields?

**Answer:**

> Private fields prevent external code from directly accessing or modifying internal state, helping preserve invariants and reducing accidental misuse.

---

# 5.40 Interview Question

### Why shouldn't `toArray()` return `#queue` directly?

Because:

```javascript
return this.#queue;
```

returns the actual Array reference.

The caller could then modify it:

```javascript
const data = queue.toArray();

data.push(999);
```

That would modify the internal Queue.

Instead:

```javascript
return this.#queue.slice(this.#frontIndex);
```

returns a new Array.

---

# 5.41 Important Concept – Reference vs Copy

This is an important JavaScript concept.

### Returning the reference

```javascript
return this.#queue;
```

means:

```text
Internal Array ←→ External variable
```

Both point to the same Array.

### Returning a copy

```javascript
return this.#queue.slice(this.#frontIndex);
```

means:

```text
Internal Array

       ↓ copy

New Array
```

The caller can modify the copy without modifying the Queue.

---

# 5.42 Final Protected Queue Architecture

```text
                         Queue
                           │
              ┌────────────┴────────────┐
              │                         │
          Public API                Private State
              │                         │
              ▼                         ▼
       ┌──────────────┐          ┌──────────────┐
       │  enqueue()   │          │   #queue     │
       │  dequeue()   │          │              │
       │  front()     │          │ #frontIndex  │
       │  rear()      │          │              │
       │  size()      │          └──────────────┘
       │  isEmpty()   │
       │  clear()     │
       │  toArray()   │
       └──────────────┘
```

---

# 5.43 Chapter 5 Final Code

```javascript
class Queue {

    #queue;
    #frontIndex;

    constructor() {

        this.#queue = [];
        this.#frontIndex = 0;

    }

    // --------------------------------
    // Enqueue
    // Add element at Rear
    // --------------------------------
    enqueue(value) {

        this.#queue.push(value);

    }

    // --------------------------------
    // Dequeue
    // Remove element from Front
    // --------------------------------
    dequeue() {

        if (this.isEmpty()) {
            return null;
        }

        const value = this.#queue[this.#frontIndex];

        this.#frontIndex++;

        return value;

    }

    // --------------------------------
    // Front
    // View Front element
    // --------------------------------
    front() {

        if (this.isEmpty()) {
            return null;
        }

        return this.#queue[this.#frontIndex];

    }

    // --------------------------------
    // Rear
    // View Rear element
    // --------------------------------
    rear() {

        if (this.isEmpty()) {
            return null;
        }

        return this.#queue[this.#queue.length - 1];

    }

    // --------------------------------
    // isEmpty
    // Check Queue state
    // --------------------------------
    isEmpty() {

        return this.#frontIndex >= this.#queue.length;

    }

    // --------------------------------
    // Size
    // Return logical size
    // --------------------------------
    size() {

        return this.#queue.length - this.#frontIndex;

    }

    // --------------------------------
    // Print
    // Display Queue
    // --------------------------------
    print() {

        console.log(
            this.#queue.slice(this.#frontIndex)
        );

    }

    // --------------------------------
    // toArray
    // Return safe copy
    // --------------------------------
    toArray() {

        return this.#queue.slice(this.#frontIndex);

    }

    // --------------------------------
    // Clear
    // --------------------------------
    clear() {

        this.#queue = [];
        this.#frontIndex = 0;

    }

}
```

---

# 5.44 Chapter 5 Summary

The progression is:

```text
Basic Queue
     ↓
Public Array
     ↓
Problem:
Anyone can modify internal state
     ↓
Encapsulation
     ↓
Private Fields
     ↓
#queue
#frontIndex
     ↓
Controlled Public API
     ↓
Protected Queue
```

The most important lesson:

> **A good data structure should control how its internal state is accessed and modified.**

For our Queue:

```text
Public:
enqueue()
dequeue()
front()
rear()
isEmpty()
size()
clear()
toArray()

Private:
#queue
#frontIndex
```



