# 225. Implement Stack using Queues

**Difficulty:** Easy




# 📌 Problem Understanding

The title **"Implement Stack using Queues"** can be confusing, so first understand exactly what it means.

It does **not** mean that we need to implement a Queue.

It means:

> **Our final data structure must be a Stack, but we are not allowed to use a Stack internally. We must build that Stack using only two Queues.**

In other words:

```text
                 OUR GOAL
                    ↓
                  STACK
                    ↓
                  LIFO
                    ↑
               Build it using
                    ↑
                 QUEUES
                    ↓
                  FIFO
```

We need to create a class called `MyStack` that behaves exactly like a normal Stack.

However, internally, we are restricted to using **only Queue operations**. ([LeetCode][1])

---

# 📚 Stack vs Queue

Before solving the problem, remember how these two data structures work.

## Stack

A Stack follows:

> **LIFO — Last In, First Out**

Suppose we perform:

```text
push(10)
push(20)
push(30)
push(40)
```

The Stack logically looks like:

```text
        TOP
         ↓
       [40]
       [30]
       [20]
       [10]
```

The last element inserted was `40`.

Therefore:

```text
pop() → 40
```

Then:

```text
pop() → 30
```

Then:

```text
pop() → 20
```

So the removal order is:

```text
40 → 30 → 20 → 10
```

---

# 📚 Queue

A Queue follows:

> **FIFO — First In, First Out**

Suppose we insert:

```text
10
20
30
40
```

The Queue looks like:

```text
FRONT                         BACK
  ↓                             ↓
[10] [20] [30] [40]
```

The first element inserted was `10`.

Therefore, when we remove an element:

```text
remove() → 10
```

Then:

```text
remove() → 20
```

Then:

```text
remove() → 30
```

Then:

```text
remove() → 40
```

So the removal order is:

```text
10 → 20 → 30 → 40
```

---

# ⚠️ The Main Problem

Now we can see why this problem is interesting.

A Stack needs:

```text
push(10)
push(20)
push(30)
push(40)

pop() → 40
```

But a Queue naturally gives us:

```text
[10] [20] [30] [40]
 ↑
FRONT

remove() → 10
```

So:

```text
Stack wants:
40 → 30 → 20 → 10

Queue gives:
10 → 20 → 30 → 40
```

They work in opposite directions.

Therefore, the actual challenge is:

> **How can we use Queue operations to make the Queue(s) behave like a Stack?**

We need to somehow arrange the elements so that the element that was inserted **last** becomes the element that can be removed **first**.

---

# 🎯 What Exactly Are We Building?

We need to implement:

```text
MyStack
```

The outside user should be able to use it exactly like a normal Stack:

```text
myStack.push(10);
myStack.push(20);
myStack.push(30);

myStack.top(); // 30
myStack.pop(); // 30
```

The user should not care about how we implement it internally.

Internally, however, we are required to use **only two Queues**. ([LeetCode][1])

So think of it like this:

```text
              MyStack
                 │
                 ↓
        ┌─────────────────┐
        │                 │
        │     Queues      │
        │    q1 + q2      │
        │                 │
        └─────────────────┘
                 │
                 ↓
        Behaves like Stack
                 │
                 ↓
                LIFO
```

---

# 🧩 Why Are Two Queues Needed?

The problem specifically says:

> Implement a Stack using **only two queues**. ([LeetCode][1])

We can think of the two Queues as:

```text
q1 → Main Queue
q2 → Temporary / Helper Queue
```

The second Queue gives us a place to temporarily move elements while rearranging them.

For example, suppose our current Stack logically contains:

```text
TOP
 ↓
[30]
[20]
[10]
```

Our Queue representation can be:

```text
q1:

FRONT
  ↓
[30] [20] [10]
```

Now suppose we want:

```text
push(40)
```

The new Stack should become:

```text
TOP
 ↓
[40]
[30]
[20]
[10]
```

But a Queue cannot simply insert `40` at the front.

So we need another Queue to help us rearrange the elements.

---

# 🚫 Queue Operations We Are Allowed to Use

This restriction is extremely important.

The problem says we can use only **standard Queue operations**. ([LeetCode][1])

A Queue normally allows:

### 1. Add to the back

```text
[10] [20]

add(30)

[10] [20] [30]
```

---

### 2. Remove from the front

```text
[10] [20] [30]
 ↑
FRONT
```

Remove:

```text
10
```

Remaining:

```text
[20] [30]
```

---

### 3. Look at the front

```text
[10] [20] [30]
 ↑
```

Front = `10`.

---

### 4. Check the size

```text
[10] [20] [30]
```

Size = `3`.

---

### 5. Check whether the Queue is empty

```text
[]
```

Empty = `true`.

---

# 🚫 Operations We Cannot Use

We cannot directly remove an element from the back.

For example:

```text
[10] [20] [30] [40]
                 ↑
                 ❌
```

We cannot say:

```text
removeLast()
```

because that is not a standard Queue operation.

The entire challenge is to solve the problem **without cheating by using Stack-like operations on the Queue**. ([LeetCode][1])

---

# 🎯 What Should Our Final Stack Do?

The `MyStack` class must support **four operations**.

---

## 1. `push(x)`

Add `x` to the **top of the Stack**.

Example:

```text
push(10)
push(20)
push(30)
```

The Stack should behave like:

```text
        TOP
         ↓
       [30]
       [20]
       [10]
```

So the next `pop()` must return `30`. ([LeetCode][1])

---

## 2. `pop()`

Remove the element from the **top of the Stack** and return it.

Example:

```text
        TOP
         ↓
       [30]
       [20]
       [10]
```

Calling:

```text
pop()
```

must return:

```text
30
```

After that:

```text
        TOP
         ↓
       [20]
       [10]
```

The problem guarantees that calls to `pop()` will be valid, so we don't need to handle an invalid `pop()` case. ([LeetCode][1])

---

## 3. `top()`

Return the element currently at the **top of the Stack**.

Important:

> `top()` only looks at the top. It **does not remove** the element.

Example:

```text
        TOP
         ↓
       [30]
       [20]
       [10]
```

Calling:

```text
top()
```

returns:

```text
30
```

The Stack remains:

```text
       [30]
       [20]
       [10]
```

The problem also guarantees that calls to `top()` will be valid. ([LeetCode][1])

---

## 4. `empty()`

Return:

* `true` if the Stack contains no elements.
* `false` if the Stack contains at least one element.

Example:

```text
[]
```

returns:

```text
true
```

But:

```text
[10]
```

returns:

```text
false
```

---

# 🔍 The Core Challenge

Suppose we perform:

```text
push(10)
push(20)
push(30)
push(40)
```

A normal Stack should behave like:

```text
        TOP
         ↓
       [40]
       [30]
       [20]
       [10]
```

But if we simply use a Queue, we naturally have:

```text
FRONT
  ↓
[10] [20] [30] [40]
```

If we simply remove from the Queue:

```text
remove()
```

we get:

```text
10
```

But the Stack requires:

```text
40
```

Therefore, we need to **rearrange the elements using Queue operations**.

The desired behavior is to make the Queue representation look like:

```text
FRONT
  ↓
[40] [30] [20] [10]
```

Now:

```text
Queue Front
     ↓
    40
     ↓
Stack Top
```

So if the Queue's front represents the Stack's top, then:

```text
pop() → remove Queue front
top() → look at Queue front
```

The main difficulty is figuring out **how to rearrange the Queue(s)** while obeying the Queue restrictions.

---

# 🧠 What the Problem Is Really Testing

This problem is not just testing whether you know Stack and Queue.

It is testing whether you can:

* Understand the behavior of different data structures.
* Use one data structure to simulate another.
* Work under restrictions.
* Rearrange data using only allowed operations.
* Think about **data structure invariants**.
* Understand the trade-off between different operations.

The important invariant you want to achieve is:

```text
Queue Front = Stack Top
```

Once that relationship is established, the Stack operations become much easier.

---

# 📝 Example 1

### Input

```text
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
```

### Operations

Create the Stack:

```text
MyStack()
```

Initially:

```text
[]
```

---

### `push(1)`

Stack:

```text
[1]
```

---

### `push(2)`

Because Stack is LIFO:

```text
TOP
 ↓
[2]
[1]
```

---

### `top()`

Returns the top without removing it:

```text
2
```

Stack remains:

```text
[2]
[1]
```

---

### `pop()`

Removes and returns the top:

```text
2
```

Stack becomes:

```text
[1]
```

---

### `empty()`

The Stack still contains `1`.

Therefore:

```text
false
```

### Output

```text
[null, null, null, 2, 2, false]
```

This is the official example structure from the problem. ([LeetCode][1])

---

# 📌 Required Class

You need to implement the following class:

```javascript
var MyStack = function () {

};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {

};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {

};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {

};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {

};
```

The exact implementation is up to you, as long as the resulting `MyStack` behaves like a Stack and follows the Queue-only restrictions.

---

# 📋 Constraints

According to the problem:

* `1 <= x <= 9`
* At most **100 calls** will be made to:

  * `push`
  * `pop`
  * `top`
  * `empty`
* All calls to `pop()` are valid.
* All calls to `top()` are valid. ([LeetCode][1])

---

# 📌 Important Notes

### You need to implement a Stack

The final object is:

```text
MyStack
```

not a Queue.

### You can use only two Queues

You are allowed:

```text
q1
q2
```

### You must follow Queue rules

You can only use standard Queue operations:

```text
Add → Back
Remove → Front
Peek → Front
Size
Is Empty
```

### The final behavior must be LIFO

Even though the internal data structure is a Queue, the user must experience:

```text
push(10)
push(20)
push(30)

pop() → 30
```

---

# 🔄 Follow-Up

After solving the problem using **two Queues**, LeetCode asks:

> **Can you implement the Stack using only one Queue?** ([LeetCode][1])

This is a follow-up optimization/challenge. The main problem requires a solution using **two Queues**.

---

# 🎯 In One Sentence

> **Build a `MyStack` that behaves like a normal LIFO Stack, but internally use only two FIFO Queues and only their standard Queue operations.**

---

## 🔗 Original LeetCode Question

[225. Implement Stack using Queues — LeetCode](https://leetcode.com/problems/implement-stack-using-queues/description/?utm_source=chatgpt.com)

[1]: https://leetcode.com/problems/implement-stack-using-queues/description/ "Implement Stack using Queues - LeetCode"
