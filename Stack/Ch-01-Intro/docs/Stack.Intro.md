## 📌 What is a Stack?

A **Stack** is a **Linear Data Structure** that follows the **LIFO (Last In, First Out)** principle.

**LIFO (Last In, First Out)** means:

> **The element that is inserted last is the first element to be removed.**

Unlike a Queue, where insertion and deletion happen at different ends, in a **Stack**, both insertion and deletion take place from the **same end**, called the **Top** of the Stack.

* New elements are always added to the **Top**.
* Elements are always removed from the **Top**.

Because the last inserted element is the first one to be removed, a Stack is known as a **LIFO Data Structure**.




![Stack](../Images/Stack.png)
---

# Definition

> **A Stack is a linear data structure in which insertion (Push) and deletion (Pop) are performed only at one end called the Top, following the LIFO (Last In, First Out) principle.**

---

# Why is it called LIFO?

A Stack is called **LIFO (Last In, First Out)** because the **last element inserted into the stack is always the first element removed**.

In a Stack:

* New elements are always inserted at the **Top**.
* Elements are also removed from the **Top**.
* Therefore, the most recently added element leaves first.

In simple words:

> **The last data that goes into the stack is the first data that comes out of the stack.**

---

## Example

Suppose we insert the following elements into a stack.

```text
Push Order

10 → 20 → 30 → 40
```

![Push Order](../Images/LIFO_Insert.png)

The removal order will be:

```text
Pop Order

40 → 30 → 20 → 10
```

![Pop Order](../Images/LIFO_Out.png)

Notice that:

* **40** was inserted last → removed first.
* **30** was inserted third → removed second.
* **20** was inserted second → removed third.
* **10** was inserted first → removed last.

This behaviour is called **LIFO (Last In, First Out).**

---

# Stack Visualization

```text
             Top
              ↓
+--------+
|   40   | ← Last inserted
+--------+
|   30   |
+--------+
|   20   |
+--------+
|   10   | ← First inserted
+--------+
```

Perform **Pop()**

```text
40 is removed
```

Remaining Stack

```text
             Top
              ↓
+--------+
|   30   |
+--------+
|   20   |
+--------+
|   10   |
+--------+
```

---

# Stack Operations

A Stack mainly supports the following operations.

| Operation  | Description                              |
| ---------- | ---------------------------------------- |
| Push       | Insert an element at the Top             |
| Pop        | Remove the Top element                   |
| Peek (Top) | View the Top element without removing it |
| isEmpty    | Check whether the stack is empty         |
| Size       | Return the number of elements            |

---

# How Stack Works

Suppose we perform these operations.

---

### Step 1

Push(10)

```text
Top
 ↓

+----+
| 10 |
+----+
```

---

### Step 2

Push(20)

```text
Top
 ↓

+----+
| 20 |
+----+
| 10 |
+----+
```

---

### Step 3

Push(30)

```text
Top
 ↓

+----+
| 30 |
+----+
| 20 |
+----+
| 10 |
+----+
```

---

### Step 4

Push(40)

```text
Top
 ↓

+----+
| 40 |
+----+
| 30 |
+----+
| 20 |
+----+
| 10 |
+----+
```

---

### Step 5

Pop()

```text
40 is removed
```

Remaining Stack

```text
Top
 ↓

+----+
| 30 |
+----+
| 20 |
+----+
| 10 |
+----+
```

Notice that the **last inserted element (40)** is also the **first removed**.

---

# Real-Life Examples

Stack is used in many everyday situations.

---

## 📚 1. Stack of Books

![Image](https://images.openai.com/static-rsc-4/LDNs9cP5aZZKzoJJmwb9_VLnsvE0BHXYj7yV2yHWQ78rl4th3MS3Y7Q38vl6MhsM-COI525RGYkcMYUJDpBBktz4ktGNdxFxzJObnbdww6P4tua5RaiFUHE_cdYMgk8zgX74SAGvzhy_cU3ifAblqas8KDQxypw5T-1hciNLGXripNte4XFbiQNpCMW4sJTg?purpose=fullsize)



One of the best real-life examples of a **Stack** is a **stack of books**.

Imagine you place books one on top of another. Whenever you want to add a new book, you always place it **on the top** of the existing stack. Similarly, when you want to take a book, you always remove the **topmost book** first. You cannot remove a book from the middle or the bottom without first removing all the books above it.

### Initial Stack

```text
          Top
           ↓
+---------+
| Book 4  | ← Last Book Placed
+---------+
| Book 3  |
+---------+
| Book 2  |
+---------+
| Book 1  | ← First Book Placed
+---------+
```

Suppose the books are placed in this order:

```text
Book 1 → Book 2 → Book 3 → Book 4
```

Now, if you start removing the books, they will come out in this order:

```text
Book 4 → Book 3 → Book 2 → Book 1
```

### Observation

* **Book 1** was placed first, so it is removed last.
* **Book 2** was placed second, so it is removed after Book 3.
* **Book 3** was placed third, so it is removed second.
* **Book 4** was placed last, so it is removed first.

Since the **last book placed on the stack is the first book removed**, this follows the **LIFO (Last In, First Out)** principle.



## 🍽️ 2. Stack of Plates

![Image](https://images.openai.com/static-rsc-4/sRWvFLYyZ4PKvKsU8esrbIXBuvpJc--ChYB7H7MCV_W5evjrN14hOo3RAgSYltc3CwDtGc-LQAeWS0wiqTR4QH9oWP3dbWTu284Gp2zjCxyfHEETqWRwqkqUhBfFeQ9sKdAEJwKoTOCa2767ID1cSYRvfD_kIzm29a74PgCmF6Ff-nJpYZ8Y_f0hgiQT0LVW?purpose=fullsize)

In restaurants, clean plates are stacked one above another.

```text
Top
 ↓

Plate 4
Plate 3
Plate 2
Plate 1
```

The plate placed last is picked first.

---

## 🌐 3. Browser Back Button

When you visit websites:

```text
Google
   ↓
YouTube
   ↓
GitHub
   ↓
LeetCode
```

Clicking **Back** takes you to:

```text
LeetCode
GitHub
YouTube
Google
```

The last visited page is returned first.

---

## ↩️ 4. Undo Feature

While editing a document:

```text
Type A
Type B
Type C
```

Undo works as:

```text
Undo C
Undo B
Undo A
```

The last action is undone first.

---

## 📞 5. Function Calls

Programming languages use a **Call Stack**.

```text
main()

↓

login()

↓

validate()

↓

checkPassword()
```

When functions finish:

```text
checkPassword()
validate()
login()
main()
```

The last called function returns first.

---

## 🎮 6. Backtracking

Games like Sudoku and Maze solving use a stack.

```text
Move 1
Move 2
Move 3
```

If a wrong move is found:

```text
Back to Move 3
Back to Move 2
Back to Move 1
```

---

## 🧭 7. Navigation History

Many applications remember previous screens using a stack.

```text
Home
↓

Products
↓

Product Details
↓

Payment
```

Pressing Back:

```text
Payment
↓

Product Details
↓

Products
↓

Home
```

---

# Why Do We Need a Stack?

A Stack is useful whenever we need to process the **most recent item first**.

Examples:

* Function Calls
* Browser History
* Undo/Redo
* Parentheses Matching
* Expression Evaluation
* DFS (Depth First Search)
* Backtracking
* Memory Management

---

# Important Terms

## Top

The **Top** is the position where elements are inserted and removed.

```text
Top
 ↓

40
30
20
10
```

---

## Push

Adding a new element to the Top.

```text
Before

30
20
10

Push(40)

40
30
20
10
```

---

## Pop

Removing the Top element.

```text
Before

40
30
20
10

Pop()

30
20
10
```

---

## Peek (Top)

Returns the Top element without removing it.

```text
Stack

40
30
20
10

Peek()

40
```

---

# Stack Characteristics

* Linear Data Structure
* Follows LIFO
* Push and Pop happen only at the Top
* Easy to implement
* Can be implemented using Arrays or Linked Lists
* Stores elements in sequential order

---

# Stack vs Queue

| Stack                    | Queue                       |
| ------------------------ | --------------------------- |
| LIFO                     | FIFO                        |
| Push at Top              | Enqueue at Rear             |
| Pop from Top             | Dequeue from Front          |
| One pointer (Top)        | Two pointers (Front & Rear) |
| Example: Stack of Plates | Example: Ticket Counter     |

---

# Time Complexity

| Operation | Time     |
| --------- | -------- |
| Push      | **O(1)** |
| Pop       | **O(1)** |
| Peek      | **O(1)** |
| isEmpty   | **O(1)** |
| Size      | **O(1)** |

---

# Applications of Stack

* Function Call Stack
* Browser History
* Undo/Redo Operations
* Parentheses Matching
* Expression Evaluation
* Infix to Postfix Conversion
* Postfix Evaluation
* Depth First Search (DFS)
* Backtracking Algorithms
* Compiler Design
* Memory Management
* Recursive Function Calls

---

# Advantages

* Simple and easy to implement.
* Fast insertion and deletion (**O(1)**).
* Efficient memory usage.
* Ideal for recursive algorithms.
* Widely used in programming languages and operating systems.

---

# Disadvantages

* Only the Top element can be accessed directly.
* Middle elements cannot be accessed efficiently.
* Fixed-size array implementation may overflow.
* Not suitable when FIFO behaviour is required.

---

# Interview Definition ⭐

> **A Stack is a linear data structure that follows the LIFO (Last In, First Out) principle, where both insertion (Push) and deletion (Pop) are performed only at one end called the Top. The last element inserted into the stack is the first element removed. Stacks are widely used in function calls, browser history, undo/redo operations, expression evaluation, and backtracking algorithms.**

---



# Stack in Code (JavaScript)

When learning about **Stacks**, one common question is:

> **"Does JavaScript have a Stack data structure?"**

The answer is **No**.

JavaScript **does not provide a built-in `Stack` class**. Instead, we **implement a Stack using an Array** because arrays already provide the operations needed to follow the **LIFO (Last In, First Out)** principle.

```
stack == array (with restricted access)
```

- you can only push the element at the top and remove element from the top . stack is noting but a array with restricted access

---

# Is Every Array a Stack?

❌ **No.**

This is one of the biggest misconceptions among beginners.

An **Array** and a **Stack** are **not the same thing**.

* **Array** → A general-purpose data structure.
* **Stack** → A data structure that follows specific rules.

An array can be used as:

* Stack
* Queue
* List
* Dynamic Array

depending on **how you use it**.

> **A Stack is not defined by what it stores; it is defined by how it is accessed.**

---

# Why Do We Use an Array?

A Stack needs only a few basic operations:

* Push (Insert)
* Pop (Remove)
* Peek (View Top)
* isEmpty
* Size

JavaScript arrays already provide these operations.

| Stack Operation | JavaScript Array Method   |
| --------------- | ------------------------- |
| Push            | `push()`                  |
| Pop             | `pop()`                   |
| Peek            | `array[array.length - 1]` |
| isEmpty         | `array.length === 0`      |
| Size            | `array.length`            |

Because of these methods, an array can easily behave like a Stack.

---

# What Makes an Array Behave Like a Stack?

An array behaves like a Stack **only when we follow the Stack rules**.

The rules are:

* ✅ Insert elements only at the **Top**.
* ✅ Remove elements only from the **Top**.
* ❌ Do not remove elements from the middle.
* ❌ Do not insert elements at the beginning.
* ❌ Do not access elements randomly for modification.

If we follow these rules, the array behaves exactly like a Stack.

---

# Example: Using an Array as a Stack

```javascript
const stack = [];

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack);

// Output:
// [10, 20, 30]

stack.pop();

console.log(stack);

// Output:
// [10, 20]
```

Here,

* `push()` adds an element to the **Top**.
* `pop()` removes the element from the **Top**.

Since all operations happen from the same end, the array behaves like a Stack.

---

# Stack Visualization

```text
Push(10)

Top
 ↓

+----+
| 10 |
+----+
```

```text
Push(20)

Top
 ↓

+----+
| 20 |
+----+
| 10 |
+----+
```

```text
Push(30)

Top
 ↓

+----+
| 30 |
+----+
| 20 |
+----+
| 10 |
+----+
```

```text
Pop()

Top
 ↓

+----+
| 20 |
+----+
| 10 |
+----+
```

Notice that **30**, which was inserted last, is removed first.

---

# Suppose You Have a Real Stack of Books

Imagine the following stack:

```text
          Top
           ↓

+---------+
| Book 4  |
+---------+
| Book 3  |
+---------+
| Book 2  |
+---------+
| Book 1  |
+---------+
```

Can you remove **Book 2** directly?

❌ No.

Can you remove **Book 1** first?

❌ No.

You must first remove:

```text
Book 4
```

Then

```text
Book 3
```

Only after removing them can you access **Book 2**.

This is exactly how a Stack works in programming.

---

# The Same Concept in JavaScript

Suppose we have:

```javascript
const stack = [10, 20, 30, 40];
```

Think of it as:

```text
          Top
           ↓

+----+
| 40 |
+----+
| 30 |
+----+
| 20 |
+----+
| 10 |
+----+
```

Removing an element:

```javascript
stack.pop();
```

Result:

```text
40 is removed.
```

Remaining Stack:

```text
          Top
           ↓

+----+
| 30 |
+----+
| 20 |
+----+
| 10 |
+----+
```

Again,

```javascript
stack.pop();
```

Result:

```text
30 is removed.
```

The last inserted element is always removed first.

---

# Can We Remove an Element from the Middle?

JavaScript arrays technically allow this.

```javascript
const stack = [10, 20, 30, 40];

stack.splice(1, 1);

console.log(stack);

// [10, 30, 40]
```

But this is **not** a valid Stack operation.

Why?

Because a Stack **never allows removing a middle element**.

Only the **Top** element can be removed.

Using methods like:

* `splice()`
* `shift()`
* `unshift()`

breaks the Stack behaviour.

---

# Why Do Developers Create a Stack Class?

Although arrays can behave like stacks, developers often create a dedicated **Stack class**.

The main reason is to **restrict operations**.

Instead of allowing every array method, a Stack class exposes only the operations that belong to a Stack.

Example:

```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}
```

Now users can only perform valid Stack operations.

---

# Array vs Stack

| Array                                                          | Stack                                                        |
| -------------------------------------------------------------- | ------------------------------------------------------------ |
| General-purpose data structure                                 | Specialised linear data structure                            |
| Can insert anywhere                                            | Insert only at the Top                                       |
| Can remove from anywhere                                       | Remove only from the Top                                     |
| Supports many methods (`push`, `pop`, `shift`, `splice`, etc.) | Supports only Stack operations (`push`, `pop`, `peek`, etc.) |
| Does not enforce LIFO                                          | Always follows LIFO                                          |

---



# Key Points

* JavaScript **does not have a built-in Stack class**.
* A Stack is usually implemented using an **Array**.
* An Array is **not** a Stack by itself.
* An Array behaves like a Stack **only when we use Stack operations** (`push`, `pop`, `peek`).
* A Stack always follows the **LIFO (Last In, First Out)** principle.
* In production applications, developers often create a **Stack class** to enforce Stack rules and prevent invalid operations.

---

# Interview Answer ⭐

> **JavaScript does not provide a built-in Stack data structure. Instead, we implement a Stack using an Array because arrays already support `push()` and `pop()`, which naturally follow the LIFO principle. However, an Array itself is not a Stack—it is a general-purpose data structure. An Array behaves like a Stack only when we restrict its operations to `push()`, `pop()`, and `peek()`. To enforce these rules and prevent invalid operations, developers often create a dedicated `Stack` class.**
