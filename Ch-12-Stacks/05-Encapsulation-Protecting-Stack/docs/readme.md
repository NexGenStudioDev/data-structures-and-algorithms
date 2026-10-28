# 📚 Chapter 5 – Protecting the Stack: Encapsulation & Data Hiding

> **Goal:** Understand why our complete Stack is still vulnerable, learn Encapsulation and Data Hiding, and create a protected Stack whose internal data cannot be directly manipulated from outside.

---

# 5.1 Introduction

In Chapter 4, we built our **complete functional Stack**.

We implemented:

```text
push()
pop()
peek()
isEmpty()
size()
print()
clear()
```

Our Stack follows:

```text
LIFO
↓
Last In → First Out
```

And internally, we use:

```javascript
this.stack = [];
```

Functionally, everything works.

But now we have a problem.

> **Our Stack is complete, but it is not protected.**

Let's understand why.

---

# 5.2 The Problem With Our Current Stack

Our current implementation:

```javascript
class Stack {

    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    print() {
        console.log(this.stack);
    }

    clear() {
        this.stack = [];
    }
}
```

Now create a Stack:

```javascript
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
```

Current Stack:

```text
        Top
         ↓
        30
        20
        10
```

Everything looks good.

But look at this:

```javascript
console.log(stack.stack);
```

Output:

```text
[10, 20, 30]
```

The internal Array is accessible.

---

# 5.3 Anyone Can Break the Stack

Because `stack.stack` is public, someone can do:

```javascript
stack.stack.shift();
```

This removes:

```text
10
```

But Stack should remove:

```text
30
```

So LIFO has been violated.

---

## Another Example

```javascript
stack.stack.splice(1, 1);
```

This removes an element from the middle.

A normal Stack should not allow arbitrary middle deletion.

---

## Another Example

```javascript
stack.stack.reverse();
```

Now the internal order changes.

---

## Another Example

```javascript
stack.stack[0] = 100;
```

Now the internal data has been changed without using any Stack operation.

---

## Worst Case

```javascript
stack.stack = [];
```

The entire internal storage has been replaced.

---

# 5.4 What Is the Actual Problem?

The problem isn't:

```javascript
push()
```

The problem isn't:

```javascript
pop()
```

The problem is:

```javascript
this.stack
```

is exposed to the outside world.

Our class has no control over its internal data.

---

# 5.5 What Should We Want?

We want developers to use:

```javascript
stack.push(10);
stack.pop();
stack.peek();
stack.size();
```

We don't want them to use:

```javascript
stack.stack.push(10);
stack.stack.pop();
stack.stack.shift();
stack.stack.splice(1, 1);
```

The user should interact with the **Stack API**, not its internal implementation.

---

# 5.6 The Correct Architecture

Instead of:

```text
User
  ↓
Internal Array
```

we want:

```text
User
  ↓
Stack API
  ↓
Stack Methods
  ↓
Internal Storage
```

For example:

```text
                 User
                   │
          ┌────────┼────────┐
          ↓        ↓        ↓
        push()    pop()    peek()
          │        │        │
          └────────┼────────┘
                   ↓
            Internal Storage
                   ↓
                 Array
```

This is a much better design.

---

# 5.7 Encapsulation

This brings us to one of the most important Object-Oriented Programming concepts:

# Encapsulation

### Definition

> **Encapsulation is the practice of bundling data and the methods that operate on that data into a single unit while controlling access to the internal state.**

In simple words:

> **Keep the data inside the object and control how the outside world interacts with it.**

Our Stack contains:

```text
Data
 ↓
Stack elements

Behaviour
 ↓
push()
pop()
peek()
size()
```

Encapsulation keeps these together.

---

# 5.8 Real-Life Example – ATM

Consider an ATM.

You can interact with it through:

```text
Withdraw
Deposit
Check Balance
Change PIN
```

But you cannot open the machine and directly manipulate the cash.

You interact through controlled operations.

Similarly, with our Stack:

```javascript
stack.push(10);
```

is like:

```text
ATM → Withdraw
```

while:

```javascript
stack.stack.splice(0, 1);
```

is like:

```text
Opening the ATM and manually changing the money
```

The second approach should not be allowed.

---

# 5.9 Data Hiding

Encapsulation is closely related to:

# Data Hiding

Data hiding means:

> **Preventing outside code from directly accessing or modifying internal implementation data.**

Our goal is:

```text
Outside Code
     ↓
Stack Methods
     ↓
Private Data
```

Not:

```text
Outside Code
     ↓
Internal Array
```

---

# 5.10 Abstraction

Another important concept is:

# Abstraction

Abstraction means:

> **Expose what the user needs and hide unnecessary implementation details.**

For example:

```javascript
stack.push(10);
```

The user only needs to know:

> "This adds 10 to the Stack."

They don't need to know:

```javascript
this.#stack.push(10);
```

or even whether the Stack internally uses an Array.

The implementation can remain hidden.

---

# 5.11 Encapsulation vs Abstraction

These concepts are related but different.

| Encapsulation                   | Abstraction                              |
| ------------------------------- | ---------------------------------------- |
| Controls access to data         | Hides unnecessary implementation details |
| Protects internal state         | Simplifies usage                         |
| Focuses on how data is accessed | Focuses on what the user needs           |
| Uses access control             | Uses interfaces/APIs                     |

A simple mental model:

```text
Encapsulation
     ↓
Protect the inside

Abstraction
     ↓
Hide unnecessary details
```

---

# 5.12 Public vs Private

Our current code:

```javascript
this.stack = [];
```

creates a public property.

That means:

```javascript
stack.stack
```

can be accessed from outside.

We need a private field.

Modern JavaScript provides:

```javascript
#
```

for private class fields.

---

# 5.13 Private Fields in JavaScript

Example:

```javascript
class Stack {

    #stack = [];

}
```

Here:

```text
#stack
```

is private.

It can be accessed from methods inside the class.

It cannot be directly accessed from outside.

---

# 5.14 Updating Our Stack

Previously:

```javascript
class Stack {

    constructor() {
        this.stack = [];
    }

}
```

Now:

```javascript
class Stack {

    #stack = [];

}
```

Notice something important:

We don't need:

```javascript
constructor() {
    this.stack = [];
}
```

because the private field is initialized directly.

---

# 5.15 Private Field Initialization

```javascript
#stack = [];
```

means:

> Create a private field called `stack` and initialize it with an empty Array.

Every Stack instance gets its own private field.

---

# 5.16 Updating Push

Old:

```javascript
push(value) {
    this.stack.push(value);
}
```

New:

```javascript
push(value) {
    this.#stack.push(value);
}
```

The Stack itself can access its private data.

---

# 5.17 Updating Pop

```javascript
pop() {

    if (this.isEmpty()) {
        return null;
    }

    return this.#stack.pop();
}
```

---

# 5.18 Updating Peek

```javascript
peek() {

    if (this.isEmpty()) {
        return null;
    }

    return this.#stack[this.#stack.length - 1];
}
```

---

# 5.19 Updating isEmpty

```javascript
isEmpty() {

    return this.#stack.length === 0;
}
```

---

# 5.20 Updating Size

```javascript
size() {

    return this.#stack.length;
}
```

---

# 5.21 Updating Print

```javascript
print() {

    console.log(this.#stack);
}
```

The method is inside the class, so it can access the private field.

---

# 5.22 Updating Clear

```javascript
clear() {

    this.#stack = [];
}
```

---

# 5.23 Complete Protected Stack

```javascript
class Stack {

    #stack = [];

    // Add an element to the Top
    push(value) {
        this.#stack.push(value);
    }

    // Remove and return the Top element
    pop() {

        if (this.isEmpty()) {
            return null;
        }

        return this.#stack.pop();
    }

    // Return the Top element without removing it
    peek() {

        if (this.isEmpty()) {
            return null;
        }

        return this.#stack[this.#stack.length - 1];
    }

    // Check whether Stack is empty
    isEmpty() {
        return this.#stack.length === 0;
    }

    // Return Stack size
    size() {
        return this.#stack.length;
    }

    // Display Stack
    print() {
        console.log(this.#stack);
    }

    // Remove all elements
    clear() {
        this.#stack = [];
    }

}
```

---

# 5.24 Testing the Protected Stack

```javascript
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
```

Output:

```text
30
```

Now:

```javascript
console.log(stack.size());
```

Output:

```text
3
```

Now:

```javascript
console.log(stack.pop());
```

Output:

```text
30
```

Stack:

```text
[10,20]
```

Everything still works.

---

# 5.25 Trying to Access `#stack`

Now try:

```javascript
console.log(stack.#stack);
```

This is invalid.

The private field cannot be directly accessed outside the class.

Similarly:

```javascript
stack.#stack.push(100);
```

is not allowed.

This is exactly what we wanted.

---

# 5.26 Why Does This Protect Our Stack?

Previously:

```text
User
 ↓
stack.stack
 ↓
Array
```

The user could do anything the Array allowed.

Now:

```text
User
 ↓
Stack API
 ↓
Private #stack
```

The user can only interact through the methods we expose.

---

# 5.27 Public API

Our public Stack API is:

```text
Stack
│
├── push()
├── pop()
├── peek()
├── isEmpty()
├── size()
├── print()
└── clear()
```

Our internal implementation is:

```text
#stack
```

The user doesn't need to know about it.

---

# 5.28 `_stack` vs `#stack`

You may see developers write:

```javascript
this._stack = [];
```

Does this make it private?

### No.

The underscore is only a convention.

This is still possible:

```javascript
stack._stack.push(100);
```

Therefore:

```text
_stack
  ↓
Not truly private
```

Whereas:

```javascript
#stack
```

is a real JavaScript private field.

---

# 5.29 Comparison

| Property      | Private? | Can outside code access it? |
| ------------- | -------: | --------------------------: |
| `this.stack`  |        ❌ |                         Yes |
| `this._stack` |        ❌ |                         Yes |
| `#stack`      |        ✅ |                          No |

---

# 5.30 Why Not Just Use `_stack`?

You might say:

> "I can simply tell developers not to touch `_stack`."

That's possible in a team, but it relies on developer discipline.

For example:

```javascript
stack._stack.pop();
```

JavaScript will allow it.

With:

```javascript
#stack
```

JavaScript itself enforces the restriction.

Therefore:

> **`_stack` communicates intent; `#stack` enforces privacy.**

---

# 5.31 Does Private Storage Change Complexity?

No.

Before:

```text
push → O(1) amortized
pop  → O(1)
peek → O(1)
```

After:

```text
push → O(1) amortized
pop  → O(1)
peek → O(1)
```

Encapsulation changes the **design**, not the algorithmic complexity.

---

# 5.32 Does Encapsulation Make the Stack More Secure?

It improves protection of internal state within the program.

But don't confuse this with:

* Authentication
* Authorization
* Encryption
* Network security

Private fields are primarily a **language-level access-control and software-design feature**.

---

# 5.33 Safe Access to Stack Data

Sometimes we may want to let users see the Stack contents.

We should not simply return the internal Array:

```javascript
get items() {
    return this.#stack;
}
```

Why?

Because:

```javascript
stack.items.push(100);
```

would modify the original internal Array.

Instead, return a copy:

```javascript
get items() {
    return [...this.#stack];
}
```

Now the user gets a separate Array.

---

# 5.34 Why Return a Copy?

Suppose:

```javascript
const values = stack.items;
```

If `items` returns:

```javascript
return this.#stack;
```

then:

```text
values
  ↓
same Array
  ↑
#stack
```

Changing `values` changes the Stack.

But:

```javascript
return [...this.#stack];
```

creates:

```text
#stack
  ↓
[10,20,30]

values
  ↓
[10,20,30]
```

They are separate Arrays.

---

# 5.35 Complete Professional Version

```javascript
class Stack {

    #stack = [];

    push(value) {
        this.#stack.push(value);
    }

    pop() {

        if (this.isEmpty()) {
            return null;
        }

        return this.#stack.pop();
    }

    peek() {

        if (this.isEmpty()) {
            return null;
        }

        return this.#stack[this.#stack.length - 1];
    }

    isEmpty() {
        return this.#stack.length === 0;
    }

    size() {
        return this.#stack.length;
    }

    print() {
        console.log(this.#stack);
    }

    clear() {
        this.#stack = [];
    }

    get items() {
        return [...this.#stack];
    }

}
```

---

# 5.36 Full Test

```javascript
const stack = new Stack();

console.log(stack.isEmpty());
// true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.items);
// [10, 20, 30]

console.log(stack.peek());
// 30

console.log(stack.pop());
// 30

console.log(stack.items);
// [10, 20]

console.log(stack.size());
// 2

console.log(stack.isEmpty());
// false

stack.clear();

console.log(stack.items);
// []
```

---

# 5.37 Complete Architecture

Our final design now looks like:

```text
                 Stack Object
              ┌─────────────────┐
              │                 │
Outside ─────→│ Public Methods  │
              │                 │
              │ push()          │
              │ pop()           │
              │ peek()          │
              │ size()          │
              │ isEmpty()       │
              │ clear()         │
              │                 │
              │ ─────────────── │
              │                 │
              │ Private Data    │
              │ #stack          │
              │                 │
              └─────────────────┘
```

The outside world interacts through the public API.

The internal storage remains protected.

---

# 5.38 Why This Is Better

### Without Encapsulation

```text
User
 ↓
Array
 ↓
Can do anything
```

### With Encapsulation

```text
User
 ↓
Stack API
 ↓
Controlled operations
 ↓
Private Array
```

This gives us:

* Better data protection
* Better abstraction
* Cleaner API
* Less accidental misuse
* Better maintainability
* Better separation of interface and implementation

---

# 5.39 Interview Questions

## Q1. What is Encapsulation?

> Encapsulation is the practice of bundling data and the methods that operate on that data while controlling access to the internal state.

---

## Q2. What is Data Hiding?

> Data hiding means preventing external code from directly accessing or modifying an object's internal implementation data.

---

## Q3. Why should Stack's internal Array be private?

> Because external code could otherwise use operations such as `shift()`, `splice()`, or direct index assignment that violate Stack's LIFO rules.

---

## Q4. Is `_stack` private?

> No. `_stack` is only a naming convention.

---

## Q5. What is `#stack`?

> `#stack` is a JavaScript private class field that can only be accessed from within the class.

---

## Q6. What is the difference between `_stack` and `#stack`?

> `_stack` is convention-based and can still be accessed externally. `#stack` is enforced by JavaScript and cannot be directly accessed from outside the class.

---

## Q7. Does Encapsulation improve time complexity?

> No. Encapsulation changes access and design, not the algorithmic complexity of Stack operations.

---

## Q8. Can a Stack still use an Array internally if the Array is private?

> Yes. The underlying implementation can still be an Array. Making it private simply prevents external code from directly manipulating it.

---

## Q9. Can we change the internal implementation later?

> Yes. A well-designed Stack API allows the internal implementation to change without requiring users to change how they interact with the Stack.

For example:

```text
Array
 ↓
Linked List
```

The public API can remain:

```javascript
push()
pop()
peek()
```

---

## Q10. Why is abstraction useful?

> Abstraction allows users to interact with the functionality they need without knowing unnecessary implementation details.

---

# 5.40 Interview-Level Answer

### Interviewer:

> "Why would you create a Stack class when JavaScript Arrays already have push and pop?"

A strong answer:

> "JavaScript Arrays can be used as the underlying implementation of a Stack because they provide efficient push and pop operations. However, an Array is general-purpose and exposes many operations that can violate Stack's LIFO rules. A Stack class provides a controlled API, encapsulates the internal storage, and separates the public behaviour from the implementation. This makes the data structure safer, easier to maintain, and easier to change internally."

---

# 5.41 Common Mistakes

### ❌ Mistake 1

```javascript
this._stack = [];
```

Thinking `_stack` is private.

It isn't.

---

### ❌ Mistake 2

Returning the internal Array directly:

```javascript
get items() {
    return this.#stack;
}
```

This exposes the internal reference.

Prefer:

```javascript
get items() {
    return [...this.#stack];
}
```

---

### ❌ Mistake 3

Allowing external code to manipulate internal storage.

Avoid:

```javascript
stack.stack.push(100);
```

Use:

```javascript
stack.push(100);
```

---

# 5.42 Final Mental Model

Remember the entire journey:

```text
Array
  ↓
Used as internal storage
  ↓
Stack Rules
  ↓
LIFO
  ↓
push / pop / peek
  ↓
Stack Class
  ↓
Encapsulation
  ↓
Private #stack
  ↓
Protected Stack
```

The most important idea:

> **A Stack is not simply an Array. The Array is an implementation detail. The Stack is defined by its behaviour and rules.**

