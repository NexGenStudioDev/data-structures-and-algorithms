# 155. Min Stack

**Difficulty:** Medium
**Topics:** Stack, Design, Data Structure

[LeetCode — Min Stack](https://leetcode.com/problems/min-stack/description/?utm_source=chatgpt.com)

---

# 📌 Problem Understanding

The problem asks us to **design a special Stack called `MinStack`**.

Before understanding `MinStack`, remember how a normal Stack works.

A Stack follows:

> **LIFO — Last In, First Out**

For example:

```text
push(10)
push(20)
push(5)
```

The Stack becomes:

```text
       TOP
        ↓
       [5]
       [20]
       [10]
```

So:

```text
pop() → 5
```

because `5` was inserted last.

---

# 🧩 What Makes This Stack Different?

A normal Stack gives us operations such as:

```text
push()
pop()
top()
```

But this problem asks us to create a **Min Stack**, which has one additional operation:

```text
getMin()
```

`getMin()` must return the **smallest element currently present in the Stack**.

For example:

```text
push(10)
push(20)
push(5)
push(15)
```

The Stack is:

```text
       TOP
        ↓
       [15]
       [5]
       [20]
       [10]
```

The minimum element is:

```text
5
```

Therefore:

```text
getMin() → 5
```

---

# ⚠️ The Important Requirement

The difficult part of this problem is **not just finding the minimum**.

The problem specifically requires:

> **Every operation must run in `O(1)` constant time.**

That means these operations must all take constant time:

```text
push()   → O(1)
pop()    → O(1)
top()    → O(1)
getMin() → O(1)
```

---

# 🤔 Why Is `getMin()` Difficult?

Suppose our Stack contains:

```text
       TOP
        ↓
       [20]
       [5]
       [30]
       [10]
       [15]
```

The minimum is:

```text
5
```

A simple approach might be:

> "Whenever `getMin()` is called, search through the entire Stack and find the smallest element."

For example:

```text
20
5
30
10
15
```

We would have to check every element.

If there are `n` elements:

```text
getMin() → O(n)
```

But the problem requires:

```text
getMin() → O(1)
```

So we **cannot search through the entire Stack every time `getMin()` is called**.

We need a way to know the current minimum **immediately**.

---

# 🎯 What Do We Need to Build?

We need to implement a class called:

```text
MinStack
```

It must behave like a normal Stack while also being able to tell us the **minimum element currently in the Stack in `O(1)` time**.

The class must support four operations:

```text
MinStack()
push(value)
pop()
top()
getMin()
```

---

# 1. `MinStack()`

This initializes the Stack object.

Initially, the Stack contains no elements:

```text
[]
```

---

# 2. `push(value)`

This operation adds `value` to the **top of the Stack**.

For example:

```text
push(10)
```

Stack:

```text
TOP
 ↓
[10]
```

Then:

```text
push(20)
```

Stack:

```text
TOP
 ↓
[20]
[10]
```

Then:

```text
push(5)
```

Stack:

```text
TOP
 ↓
[5]
[20]
[10]
```

The Stack still follows normal **LIFO** behavior.

---

# 3. `pop()`

`pop()` removes the element currently at the **top of the Stack**.

Suppose:

```text
       TOP
        ↓
       [5]
       [20]
       [10]
```

Calling:

```text
pop()
```

removes:

```text
5
```

The Stack becomes:

```text
       TOP
        ↓
       [20]
       [10]
```

The problem guarantees that `pop()` will only be called when the Stack is **non-empty**, so you do not need to handle an empty Stack for this operation.

---

# 4. `top()`

`top()` returns the element currently at the top of the Stack.

It **does not remove** the element.

For example:

```text
       TOP
        ↓
       [20]
       [10]
```

Calling:

```text
top()
```

returns:

```text
20
```

The Stack remains:

```text
       TOP
        ↓
       [20]
       [10]
```

---

# 5. `getMin()`

This is the special operation.

`getMin()` must return the **smallest element currently present in the Stack**.

For example:

```text
       TOP
        ↓
       [20]
       [5]
       [30]
       [10]
```

The minimum value is:

```text
5
```

Therefore:

```text
getMin() → 5
```

But there is an important requirement:

> `getMin()` must return the minimum in **O(1)** time.

We cannot scan the entire Stack every time.

---

# 🔥 The Main Challenge

Suppose we perform:

```text
push(-2)
push(0)
push(-3)
```

The Stack becomes:

```text
       TOP
        ↓
       [-3]
       [ 0]
       [-2]
```

The minimum is:

```text
-3
```

So:

```text
getMin() → -3
```

Now suppose we perform:

```text
pop()
```

`-3` is removed:

```text
       TOP
        ↓
       [0]
       [-2]
```

Now the minimum is no longer `-3`.

The minimum has changed to:

```text
-2
```

Therefore:

```text
getMin() → -2
```

This is the key challenge:

> **When elements are pushed and popped, the current minimum can change. We need to always know the current minimum without scanning the entire Stack.**

---

# 📌 Important Observation

The minimum element is not necessarily the element at the top.

For example:

```text
       TOP
        ↓
       [20]
       [10]
       [30]
       [5]
       [15]
```

The top is:

```text
20
```

But the minimum is:

```text
5
```

Therefore:

```text
top()    → 20
getMin() → 5
```

`top()` and `getMin()` are asking for **different things**.

---

# 📌 Another Important Observation

The minimum can change after a `pop()`.

Example:

```text
push(10)
push(5)
push(20)
```

Stack:

```text
       TOP
        ↓
       [20]
       [5]
       [10]
```

Current minimum:

```text
5
```

So:

```text
getMin() → 5
```

Now:

```text
pop()
```

removes `20`.

The Stack becomes:

```text
       TOP
        ↓
       [5]
       [10]
```

Minimum is still:

```text
5
```

Now:

```text
pop()
```

removes `5`.

Stack:

```text
       TOP
        ↓
       [10]
```

Now the minimum becomes:

```text
10
```

So the minimum must be updated correctly whenever elements are added or removed.

---

# ⏱️ Time Complexity Requirement

This is the most important constraint of the problem.

You must implement **every function in `O(1)` time**:

| Operation  | Required Time |
| ---------- | ------------: |
| `push()`   |      **O(1)** |
| `pop()`    |      **O(1)** |
| `top()`    |      **O(1)** |
| `getMin()` |      **O(1)** |

### What does `O(1)` mean?

It means the operation should take approximately the same amount of time regardless of how many elements are in the Stack.

For example, if the Stack has:

```text
10 elements
```

or:

```text
10,000 elements
```

`getMin()` should still be able to return the minimum immediately.

---

# 🚫 What We Cannot Do

We cannot solve `getMin()` like this:

```text
getMin():

    Go through every element
    Compare all elements
    Find the smallest
    Return it
```

Because that would take:

```text
O(n)
```

time.

The problem explicitly requires:

```text
O(1)
```

for every function.

---

# 📝 Official Example

### Input

```text
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
```

Let's understand what these operations mean.

---

### Step 1 — `MinStack()`

Create an empty Min Stack:

```text
[]
```

Return:

```text
null
```

---

### Step 2 — `push(-2)`

```text
[-2]
```

Return:

```text
null
```

---

### Step 3 — `push(0)`

```text
[0]
[-2]
```

Return:

```text
null
```

---

### Step 4 — `push(-3)`

```text
[-3]
[ 0]
[-2]
```

The minimum is:

```text
-3
```

---

### Step 5 — `getMin()`

Return:

```text
-3
```

The Stack does not change:

```text
[-3]
[ 0]
[-2]
```

---

### Step 6 — `pop()`

Remove the top:

```text
-3
```

Now:

```text
[0]
[-2]
```

Return:

```text
null
```

---

### Step 7 — `top()`

The top is:

```text
0
```

So:

```text
top() → 0
```

---

### Step 8 — `getMin()`

The remaining elements are:

```text
[0]
[-2]
```

The minimum is:

```text
-2
```

Therefore:

```text
getMin() → -2
```

---

# ✅ Expected Output

```text
[null,null,null,null,-3,null,0,-2]
```

---

# 📊 Example Summary

| Operation    | Stack After Operation | Return |
| ------------ | --------------------- | -----: |
| `MinStack()` | `[]`                  | `null` |
| `push(-2)`   | `[-2]`                | `null` |
| `push(0)`    | `[0, -2]`             | `null` |
| `push(-3)`   | `[-3, 0, -2]`         | `null` |
| `getMin()`   | `[-3, 0, -2]`         | **-3** |
| `pop()`      | `[0, -2]`             | `null` |
| `top()`      | `[0, -2]`             |  **0** |
| `getMin()`   | `[0, -2]`             | **-2** |

---

# 📌 Class You Need to Implement

You need to implement:

```javascript
var MinStack = function() {

};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

};
```

---

# 📋 Constraints

The problem gives the following constraints:

* `-2³¹ <= val <= 2³¹ - 1`
* `pop()`, `top()`, and `getMin()` will always be called when the Stack is **non-empty**.
* At most **3 × 10⁴ (30,000)** calls will be made to:

  * `push()`
  * `pop()`
  * `top()`
  * `getMin()`

---

# 🎯 What You Need to Figure Out

The problem gives us a normal Stack plus one extra requirement:

```text
Normal Stack:
    push()
    pop()
    top()

Min Stack:
    push()
    pop()
    top()
    getMin()  ← new operation
```

The challenge is to make:

```text
push()   → O(1)
pop()    → O(1)
top()    → O(1)
getMin() → O(1)
```

The main question you need to solve is:

> **How can we keep track of the minimum element while elements are being pushed and popped, so that `getMin()` can return the minimum in O(1) time without searching through the entire Stack?**

---

# 🔗 Original LeetCode Question

[155. Min Stack — LeetCode](https://leetcode.com/problems/min-stack/description/?utm_source=chatgpt.com)
