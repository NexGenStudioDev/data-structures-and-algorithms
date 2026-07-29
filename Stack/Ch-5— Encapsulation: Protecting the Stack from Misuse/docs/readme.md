# 📚 Chapter 5 – Protecting Our Stack (Encapsulation)

> **Goal:** Build a professional Stack that cannot be misused like a normal JavaScript array.

---

# Chapter Flow

## Step 1 — We Successfully Built Our Stack 🎉

Start by reminding the reader what they already have.

```javascript
class Stack {

    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

}
```

Ask the reader:

> **Is our Stack complete?**

Most beginners will answer **Yes**.

Then say...

> **Actually... No.**

This Stack has a serious design flaw.

---

# Step 2 — Let's Test Our Stack

Create a Stack.

```javascript
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
```

Current Stack

```text
Top

30
20
10
```

Everything looks perfect.

---

# Step 3 — Can Someone Break Our Stack?

Ask another question.

> **Can another developer change our Stack without using `push()` or `pop()`?**

Let's try.

```javascript
console.log(stack.stack);
```

Output

```javascript
[10,20,30]
```

Wait...

We can access the internal array.

That means we can also modify it.

---

# Step 4 — Breaking the Stack

Example 1

```javascript
stack.stack.shift();
```

Before

```text
Top

30
20
10
```

After

```text
Top

30
20
```

Question

> Which element was removed?

Answer

The bottom element.

But Stack removes only from the Top.

Our Stack rule is broken.

---

Example 2

```javascript
stack.stack.splice(1,1);
```

Now the middle element disappears.

Can Stack remove middle elements?

No.

---

Example 3

```javascript
stack.stack.reverse();
```

Order becomes

```text
10
20
30
```

LIFO is gone.

---

Example 4

```javascript
stack.stack.sort();
```

Everything changes again.

---

Example 5

```javascript
stack.stack = [];
```

Entire Stack deleted.

---

# Step 5 — Conclusion

Ask

> **Did our Stack fail?**

Technically,

No.

Our implementation works.

Our **design** failed.

---

# Step 6 — Where Is the Problem?

Look carefully.

```javascript
this.stack = [];
```

Question

What is

```javascript
this.stack
```

It is a **public property**.

Public means

Everyone can access it.

Diagram

```text
User

↓

Stack Object

↓

stack

↓

[]
```

Anyone reaches it.

---

# Step 7 — What Should Happen?

Instead,

users should never reach

```javascript
stack.stack
```

They should only use

```javascript
stack.push()

stack.pop()

stack.peek()
```

Diagram

```text
User

↓

push()

↓

Stack

↓

Internal Array
```

Notice

User never touches the array.

---

# Step 8 — Real World Example

Think about an ATM.

Customers press buttons.

✔ Withdraw

✔ Deposit

✔ Balance

Can they open the ATM?

No.

The money stays hidden.

Exactly the same idea.

The internal array should stay hidden.

---

# Step 9 — What Is This Concept Called?

Professional developers call this

# Encapsulation

Definition

> **Encapsulation is the process of hiding internal data and exposing only the operations needed to interact with that data.**

Simple Definition

> Hide the implementation.

Expose the behaviour.

---

# Step 10 — Data Hiding

Encapsulation gives us

Data Hiding.

Meaning

Users cannot directly change internal data.

Instead of

```javascript
stack.stack.push(100);
```

they should write

```javascript
stack.push(100);
```

---

# Step 11 — Different Solutions

### Solution 1

```javascript
this.stack=[]
```

Easy.

But public.

---

### Solution 2

```javascript
this._stack=[]
```

Looks private.

Actually isn't.

Still accessible.

---

### Solution 3

```javascript
#stack=[]
```

Completely hidden.

Recommended.

---

# Step 12 — Why `#stack`?

JavaScript introduced Private Fields.

```javascript
class Stack{

    #stack=[];

}
```

Only methods inside the class can access it.

Nobody else can.

---

# Step 13 — Update Our Stack

Before

```javascript
this.stack=[]
```

After

```javascript
#stack=[]
```

Now update every method.

```javascript
push(value){

    this.#stack.push(value);

}
```

Likewise for

* pop
* peek
* size
* isEmpty

---

# Step 14 — Testing

```javascript
const stack=new Stack();
```

Works.

---

```javascript
stack.push(10);
```

Works.

---

```javascript
console.log(stack.peek());
```

Works.

---

Now

```javascript
stack.#stack
```

Immediately

```text
SyntaxError
```

Mission accomplished.

---

# Step 15 — Memory Diagram

Before

```text
User

↓

Stack

↓

stack

↓

[]
```

---

After

```text
User

↓

Stack Methods

↓

#stack

↓

Hidden
```

Notice

The user cannot reach the data anymore.

---

# Step 16 — Why Is This Better?

✔ Nobody can misuse the Stack.

✔ LIFO is always maintained.

✔ Cleaner API.

✔ Better security.

✔ Easier maintenance.

✔ Professional implementation.

---

# Step 17 — Interview Corner

### Q1. Why is `this.stack` considered bad design?

**Answer**

Because anyone can modify it directly and violate Stack rules.

---

### Q2. Why do we use `#stack`?

**Answer**

To make the internal array private so users cannot access or modify it directly.

---

### Q3. Does `#stack` improve performance?

**Answer**

No.

It improves software design, not algorithmic complexity.

---

### Q4. What is the difference between `_stack` and `#stack`?

**Answer**

`_stack` is only a naming convention.

`#stack` is enforced by JavaScript and is truly private.

---

### Q5. Why is Encapsulation important?

**Answer**

It protects internal data, prevents misuse, and ensures users interact only through the intended API.

---

# Step 18 — Summary

* We built a working Stack.
* We discovered a design flaw: the internal array was public.
* We demonstrated how the Stack could be broken.
* We identified the root cause: exposing internal state.
* We introduced Encapsulation and Data Hiding.
* We compared public fields, `_stack`, and `#stack`.
* We updated the implementation using private fields.
* We verified that the internal array could no longer be accessed.

---
