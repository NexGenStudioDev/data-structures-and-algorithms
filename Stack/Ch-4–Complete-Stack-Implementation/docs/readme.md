# 📚 Chapter 4 – Complete Stack Implementation

## Introduction

In the previous chapter, we learned each Stack operation individually.

We implemented:

* `push()`
* `pop()`
* `peek()`
* `isEmpty()`
* `size()`

Although each method worked independently, writing them separately isn't practical for real applications.

In this chapter, we will combine all these methods into a single **Stack class**, making it reusable, organized, and easy to use.

By the end of this chapter, you'll have a fully functional Stack implementation that can be used in projects and coding interviews.

---

# What Will You Learn?

In this chapter, you'll learn:

* Building the complete Stack class
* Creating Stack objects
* Using every Stack method
* Dry Run
* Memory Representation
* Complete Example
* Common Mistakes
* Best Practices
* Time Complexity
* Interview Questions

---

# Complete Stack Class

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
            console.log("Stack Underflow");
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

    clear() {
        this.stack = [];
    }

    print() {
        console.log(this.stack);
    }
}
```

---

# Creating a Stack

```javascript
const stack = new Stack();
```

Memory

```text
stack
 │
 ▼

{
    stack : []
}
```

Initially, the stack is empty.

---

# Using the Stack

```javascript
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();
```

Output

```text
[10, 20, 30]
```

---

# Example

```javascript
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());

console.log(stack.pop());

console.log(stack.size());

console.log(stack.isEmpty());

stack.print();
```

Output

```text
30

30

2

false

[10,20]
```

---

# Complete Dry Run

## Step 1

```javascript
const stack = new Stack();
```

Memory

```text
[]
```

---

## Step 2

```javascript
stack.push(10);
```

```text
Top
 ↓

10
```

---

## Step 3

```javascript
stack.push(20);
```

```text
Top
 ↓

20
10
```

---

## Step 4

```javascript
stack.push(30);
```

```text
Top
 ↓

30
20
10
```

---

## Step 5

```javascript
stack.peek();
```

Returns

```text
30
```

Stack remains unchanged.

---

## Step 6

```javascript
stack.pop();
```

Removed

```text
30
```

Remaining

```text
Top
 ↓

20
10
```

---

## Step 7

```javascript
stack.size();
```

Output

```text
2
```

---

## Step 8

```javascript
stack.isEmpty();
```

Output

```text
false
```

---

## Step 9

```javascript
stack.clear();
```

Memory

```text
[]
```

---

# Memory Representation

Initially

```text
stack
 │
 ▼

[]
```

After

```javascript
stack.push(10);
stack.push(20);
stack.push(30);
```

Memory

```text
stack
 │
 ▼

[
10,
20,
30
]
```

Top

```text
30
```

---

# Stack State

| Operation | Stack      |
| --------- | ---------- |
| Create    | []         |
| Push(10)  | [10]       |
| Push(20)  | [10,20]    |
| Push(30)  | [10,20,30] |
| Peek()    | [10,20,30] |
| Pop()     | [10,20]    |
| Clear()   | []         |

---

# Time Complexity

| Method    | Time |
| --------- | ---- |
| push()    | O(1) |
| pop()     | O(1) |
| peek()    | O(1) |
| size()    | O(1) |
| isEmpty() | O(1) |
| clear()   | O(1) |
| print()   | O(n) |

---

# Space Complexity

The Stack stores every inserted element.

If there are **n** elements,

```text
Space = O(n)
```

---

# Common Mistakes

### 1. Forgetting `new`

❌ Wrong

```javascript
const stack = Stack();
```

✅ Correct

```javascript
const stack = new Stack();
```

---

### 2. Using `pop()` on an Empty Stack

```javascript
stack.pop();
```

Always check

```javascript
stack.isEmpty();
```

first, or handle the underflow inside the `pop()` method.

---

### 3. Accessing the Array Directly

❌ Wrong

```javascript
stack.stack.push(100);
```

This bypasses the class interface.

✅ Correct

```javascript
stack.push(100);
```

Always use the Stack methods.

---

### 4. Removing Elements with `splice()`

❌ Wrong

```javascript
stack.stack.splice(1,1);
```

A Stack only removes the **Top** element.

Use

```javascript
stack.pop();
```

instead.

---

# Best Practices

* Keep the internal array private (or treat it as private).
* Always use `push()` to insert elements.
* Always use `pop()` to remove elements.
* Check `isEmpty()` before popping or peeking.
* Never modify the internal array directly.
* Give methods clear names (`push`, `pop`, `peek`) to match standard terminology.

---

# Advantages of This Implementation

* Easy to understand.
* Reusable in multiple projects.
* Efficient (`O(1)` for core operations).
* Beginner-friendly.
* Closely matches Stack implementations in other languages.

---

# Limitations

* Uses an Array internally.
* The internal array is still accessible as `stack.stack` in this implementation.
* Not suitable if strict encapsulation is required.
* Large stacks consume more memory (`O(n)`).

---

# Applications

* Browser history
* Undo / Redo
* Function call stack
* Expression evaluation
* Parentheses matching
* DFS (Depth-First Search)
* Backtracking algorithms
* Compiler design

---

# Summary

In this chapter, we:

* Combined all Stack operations into a single class.
* Created a reusable Stack implementation.
* Learned how to create and use Stack objects.
* Performed a complete dry run.
* Understood memory representation.
* Reviewed time and space complexity.
* Covered common mistakes and best practices.
