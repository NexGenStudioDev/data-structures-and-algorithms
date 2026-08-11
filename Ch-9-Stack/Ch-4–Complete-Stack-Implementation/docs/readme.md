# 📚 Chapter 4 – Complete Stack Implementation

> **Goal:** Combine everything learned so far into one complete, reusable Stack implementation and understand how all operations work together.

---

# 4.1 Introduction

In the previous chapter, we implemented the individual operations of a Stack:

* `push()`
* `pop()`
* `peek()`
* `isEmpty()`
* `size()`
* `print()`
* `clear()`

We now know how each operation works independently.

But there is one important step left:

> **We need to combine all these operations into one complete Stack class.**

Until now, we have been learning each operation separately.

Now we will build the complete Stack that we can actually use in our programs.

---

# 4.2 What Will We Build?

Our final Stack will support:

```text
push()
pop()
peek()
isEmpty()
size()
print()
clear()
```

It will follow:

```text
LIFO
Last In → First Out
```

And it will use:

```text
Array
```

as its internal storage.

---

# 4.3 Our Stack Design

The design is:

```text
                 Stack
                   │
                   ▼
             Internal Array
                   │
          ┌────────┼────────┐
          ↓        ↓        ↓
       push()    pop()    peek()
```

The Array is the underlying storage.

The methods provide Stack behaviour.

---

# 4.4 Complete Stack Code

```javascript
class Stack {

    constructor() {
        this.stack = [];
    }

    // Add an element to the Top
    push(value) {
        this.stack.push(value);
    }

    // Remove and return the Top element
    pop() {
        if (this.isEmpty()) {
            return null;
        }

        return this.stack.pop();
    }

    // Return the Top element without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.stack[this.stack.length - 1];
    }

    // Check whether the Stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Return the number of elements
    size() {
        return this.stack.length;
    }

    // Display the Stack
    print() {
        console.log(this.stack);
    }

    // Remove all elements
    clear() {
        this.stack = [];
    }
}
```

---

# 4.5 Understanding the Class

Let's understand the class from top to bottom.

---

## Constructor

```javascript
constructor() {
    this.stack = [];
}
```

Whenever we create:

```javascript
const stack = new Stack();
```

the constructor runs automatically.

It creates an empty Array.

Initial state:

```text
[]
```

---

# 4.6 Push

```javascript
push(value) {
    this.stack.push(value);
}
```

Purpose:

> Add an element to the Top of the Stack.

Example:

```javascript
stack.push(10);
stack.push(20);
stack.push(30);
```

Stack:

```text
        Top
         ↓
        30
        20
        10
```

Array:

```text
[10,20,30]
```

---

# 4.7 Pop

```javascript
pop() {
    if (this.isEmpty()) {
        return null;
    }

    return this.stack.pop();
}
```

Purpose:

> Remove and return the Top element.

Example:

```javascript
const removed = stack.pop();
```

If:

```text
[10,20,30]
```

then:

```text
removed = 30
```

Stack becomes:

```text
[10,20]
```

---

# 4.8 Why Do We Check `isEmpty()`?

Suppose the Stack is:

```text
[]
```

and we call:

```javascript
stack.pop();
```

There is no element to remove.

This is called:

# Stack Underflow

We handle it with:

```javascript
if (this.isEmpty()) {
    return null;
}
```

This makes our implementation predictable.

---

# 4.9 Peek

```javascript
peek() {
    if (this.isEmpty()) {
        return null;
    }

    return this.stack[this.stack.length - 1];
}
```

Purpose:

> Return the Top element without removing it.

Example:

```text
[10,20,30]
```

```javascript
stack.peek();
```

returns:

```text
30
```

But the Stack remains:

```text
[10,20,30]
```

---

# 4.10 Peek vs Pop

This is a very common interview question.

| `peek()`              | `pop()`        |
| --------------------- | -------------- |
| Returns Top           | Removes Top    |
| Does not modify Stack | Modifies Stack |
| O(1)                  | O(1)           |

Example:

```javascript
stack.peek();
```

```text
Before: [10,20,30]
After:  [10,20,30]
Result: 30
```

But:

```javascript
stack.pop();
```

```text
Before: [10,20,30]
After:  [10,20]
Result: 30
```

---

# 4.11 isEmpty

```javascript
isEmpty() {
    return this.stack.length === 0;
}
```

Purpose:

> Check whether the Stack contains zero elements.

Example:

```javascript
stack.isEmpty();
```

Empty:

```text
[]
→ true
```

Not empty:

```text
[10]
→ false
```

---

# 4.12 Size

```javascript
size() {
    return this.stack.length;
}
```

Purpose:

> Return the number of elements currently in the Stack.

Example:

```text
[10,20,30]
```

Size:

```text
3
```

---

# 4.13 Print

```javascript
print() {
    console.log(this.stack);
}
```

Purpose:

> Display the current contents of the Stack.

Example:

```javascript
stack.print();
```

Output:

```text
[10,20,30]
```

`print()` is mainly a utility/debugging method, not a fundamental Stack operation.

---

# 4.14 Clear

```javascript
clear() {
    this.stack = [];
}
```

Purpose:

> Remove all elements from the Stack.

Before:

```text
[10,20,30]
```

After:

```text
[]
```

---

# 4.15 Creating a Stack Object

Now let's create our Stack.

```javascript
const stack = new Stack();
```

At this point:

```text
Stack
 ↓
[]
```

---

# 4.16 Adding Elements

```javascript
stack.push(10);
stack.push(20);
stack.push(30);
```

State:

```text
[10,20,30]
```

Visual representation:

```text
        Top
         ↓
       ┌────┐
       │ 30 │
       ├────┤
       │ 20 │
       ├────┤
       │ 10 │
       └────┘
```

---

# 4.17 Complete Example

```javascript
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack:");
stack.print();

console.log("Top:", stack.peek());

console.log("Removed:", stack.pop());

console.log("Size:", stack.size());

console.log("Empty:", stack.isEmpty());

stack.print();

stack.clear();

console.log("After clear:");
stack.print();
```

Output:

```text
Stack:
[10,20,30]

Top: 30

Removed: 30

Size: 2

Empty: false

[10,20]

After clear:
[]
```

---

# 4.18 Complete Dry Run

Let's execute everything step by step.

### Step 1

```javascript
const stack = new Stack();
```

State:

```text
[]
```

---

### Step 2

```javascript
stack.push(10);
```

State:

```text
[10]
```

---

### Step 3

```javascript
stack.push(20);
```

State:

```text
[10,20]
```

---

### Step 4

```javascript
stack.push(30);
```

State:

```text
[10,20,30]
```

Top:

```text
30
```

---

### Step 5

```javascript
stack.peek();
```

Result:

```text
30
```

Stack remains:

```text
[10,20,30]
```

---

### Step 6

```javascript
stack.pop();
```

Result:

```text
30
```

Stack becomes:

```text
[10,20]
```

---

### Step 7

```javascript
stack.size();
```

Result:

```text
2
```

---

### Step 8

```javascript
stack.isEmpty();
```

Result:

```text
false
```

---

### Step 9

```javascript
stack.clear();
```

Stack becomes:

```text
[]
```

---

# 4.19 Complete Operation Flow

```text
Create
  ↓
[]

Push(10)
  ↓
[10]

Push(20)
  ↓
[10,20]

Push(30)
  ↓
[10,20,30]

Peek()
  ↓
30
  ↓
[10,20,30]

Pop()
  ↓
30
  ↓
[10,20]

Size()
  ↓
2

isEmpty()
  ↓
false

Clear()
  ↓
[]
```

---

# 4.20 Stack State Table

| Step | Operation   | Result  | Stack        |
| ---: | ----------- | ------- | ------------ |
|    1 | Create      | —       | `[]`         |
|    2 | `push(10)`  | —       | `[10]`       |
|    3 | `push(20)`  | —       | `[10,20]`    |
|    4 | `push(30)`  | —       | `[10,20,30]` |
|    5 | `peek()`    | `30`    | `[10,20,30]` |
|    6 | `pop()`     | `30`    | `[10,20]`    |
|    7 | `size()`    | `2`     | `[10,20]`    |
|    8 | `isEmpty()` | `false` | `[10,20]`    |
|    9 | `clear()`   | —       | `[]`         |

---

# 4.21 LIFO Verification

Let's verify whether our implementation actually follows LIFO.

Insert:

```text
10
20
30
40
```

Stack:

```text
Top
 ↓
40
30
20
10
```

Now remove:

```text
40
30
20
10
```

Insertion order:

```text
10 → 20 → 30 → 40
```

Removal order:

```text
40 → 30 → 20 → 10
```

Therefore:

```text
Last In → First Out
```

✅ Our Stack follows LIFO.

---

# 4.22 Complexity Analysis

| Operation   | Time Complexity | Extra Space |
| ----------- | --------------: | ----------: |
| `push()`    |  O(1) amortized |        O(1) |
| `pop()`     |            O(1) |        O(1) |
| `peek()`    |            O(1) |        O(1) |
| `isEmpty()` |            O(1) |        O(1) |
| `size()`    |            O(1) |        O(1) |
| `print()`   |            O(n) |        O(1) |
| `clear()`   |            O(1) |        O(1) |

---

# 4.23 Overall Space Complexity

If our Stack contains `n` elements:

```text
Space = O(n)
```

because the Array must store all `n` elements.

For example:

```text
10 elements → O(10)
100 elements → O(100)
n elements → O(n)
```

---

# 4.24 Why Is `push()` Amortized O(1)?

Most of the time:

```javascript
this.stack.push(value);
```

takes constant time.

But JavaScript Arrays are dynamic.

Occasionally, the underlying storage may need to grow.

Conceptually:

```text
Small storage
     ↓
Full
     ↓
Allocate larger storage
     ↓
Copy elements
     ↓
Add new element
```

That particular resize can require O(n) work.

However, across many insertions, the average cost remains:

```text
O(1) amortized
```

Interview answer:

> **Array push is O(1) amortized.**

---

# 4.25 Common Mistakes

## Mistake 1 — Using `shift()`

```javascript
this.stack.shift();
```

❌ Not appropriate for our Stack implementation.

Why?

Because it removes from the bottom.

Use:

```javascript
this.stack.pop();
```

---

## Mistake 2 — Using `unshift()`

```javascript
this.stack.unshift(value);
```

This inserts at the beginning.

For our implementation:

```javascript
this.stack.push(value);
```

---

## Mistake 3 — Forgetting `return`

Wrong:

```javascript
pop() {
    this.stack.pop();
}
```

Better:

```javascript
pop() {
    return this.stack.pop();
}
```

Otherwise the caller cannot receive the removed value.

---

## Mistake 4 — Confusing `peek()` and `pop()`

Remember:

```text
peek → Look
pop  → Remove
```

---

## Mistake 5 — Not Handling an Empty Stack

A good implementation should decide what happens when:

```javascript
stack.pop();
```

is called on an empty Stack.

Our implementation returns:

```text
null
```

---

# 4.26 What Is Our Stack Missing?

Our Stack is now **functionally complete**.

But there is still a design problem.

Look at:

```javascript
this.stack = [];
```

The internal Array is public.

Therefore, someone can do:

```javascript
stack.stack.shift();
```

or:

```javascript
stack.stack.splice(1, 1);
```

or:

```javascript
stack.stack[0] = 100;
```

or even:

```javascript
stack.stack = [];
```

This means our Stack can still be misused like a normal Array.

So:

> **Functionally complete does not necessarily mean professionally designed.**

This is an important distinction.

---

# 4.27 Interview Questions

### Q1. What are the fundamental operations of a Stack?

**Answer:**

The fundamental operations are generally:

* Push
* Pop
* Peek

Additional utility operations commonly include `isEmpty()` and `size()`.

---

### Q2. Why is `peek()` different from `pop()`?

**Answer:**

`peek()` returns the Top element without removing it, while `pop()` removes and returns the Top element.

---

### Q3. Why do we use `push()` and `pop()` instead of `shift()` and `unshift()`?

**Answer:**

Because the end of an Array provides efficient insertion and deletion. `shift()` and `unshift()` operate at the beginning and generally require elements to be shifted, making them O(n).

---

### Q4. What is Stack Underflow?

**Answer:**

Stack Underflow occurs when we try to remove an element from an empty Stack.

---

### Q5. What is the time complexity of `peek()`?

**Answer:**

O(1), because the Top element is accessed directly using its index.

---

### Q6. What is the space complexity of a Stack containing `n` elements?

**Answer:**

O(n).

---

### Q7. Why is `push()` O(1) amortized?

**Answer:**

Because dynamic Array resizing can occasionally require O(n) work, but the average cost over a sequence of insertions is O(1).

---

### Q8. Can Stack contain duplicate values?

**Answer:**

Yes. A Stack does not require unique values.

---

### Q9. Can Stack store different data types in JavaScript?

**Answer:**

Yes. JavaScript Arrays can store values of different types unless we explicitly impose type restrictions.

---

### Q10. Can a Stack be implemented without an Array?

**Answer:**

Yes. A Stack can be implemented using a Linked List or other suitable underlying storage.

---

### Q11. Is our Stack implementation completely protected?

**Answer:**

No. The current implementation's internal Array is public through `this.stack`. It can be directly modified from outside the class.

This problem will be solved using **Encapsulation and Data Hiding**.

---

# 4.28 Chapter Summary

We started with an empty Stack:

```javascript
class Stack {

    constructor() {
        this.stack = [];
    }

}
```

Then we added:

```text
push()
pop()
peek()
isEmpty()
size()
print()
clear()
```

We learned:

* How every operation works.
* How the Array represents the Stack.
* Why the end of the Array represents the Top.
* How to handle an empty Stack.
* What Stack Underflow means.
* How to perform a complete dry run.
* Time and space complexity.
* Common implementation mistakes.
* How to verify LIFO behaviour.

Most importantly, we now have a **complete functional Stack**.

---

# 🎯 Chapter 4 Interview Checklist

Before moving forward, you should be able to:

* [ ] Write the complete Stack class from memory.
* [ ] Implement `push()`.
* [ ] Implement `pop()`.
* [ ] Implement `peek()`.
* [ ] Implement `isEmpty()`.
* [ ] Implement `size()`.
* [ ] Implement `clear()`.
* [ ] Explain why the Array's end represents the Top.
* [ ] Explain Stack Underflow.
* [ ] Explain `peek()` vs `pop()`.
* [ ] Explain why `push()` is amortized O(1).
* [ ] Explain why `shift()` is not preferred.
* [ ] Perform a complete Stack dry run.
* [ ] Analyze time and space complexity.
* [ ] Identify the weakness of the current implementation.

---

# 🚀 Next Chapter

Our Stack now **works**, but it has one important weakness:

```javascript
this.stack = [];
```

is publicly accessible.

That means someone can bypass:

```javascript
push()
pop()
peek()
```

and directly manipulate the Array.

For example:

```javascript
stack.stack.shift();
stack.stack.splice(1, 1);
stack.stack.reverse();
```

This violates the rules of our Stack.

So the next chapter will solve this problem:

