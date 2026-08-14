# Implement Stack using Queue | LIFO using FIFO | O(n) Push, O(1) Pop

# Intuition

The problem asks us to **implement a Stack using a Queue**.

We already know:

* **Stack → LIFO (Last In, First Out)**
* **Queue → FIFO (First In, First Out)**

For example, if we push:

```text
push(10)
push(20)
push(30)
push(40)
```

A Stack should behave like:

```text
        TOP
         ↓
       [40]
       [30]
       [20]
       [10]
```

So:

```text
pop() → 40
```

But a normal Queue stores elements like this:

```text
FRONT
  ↓
[10] [20] [30] [40]
```

and if we remove from the Queue, `10` comes out first.

The problem is that **we need the last inserted element (`40`) to come out first**, but a Queue naturally gives us the first inserted element (`10`) first.

So how can we make the Queue behave like a Stack?

The idea is to **rearrange the Queue after every `push()`**.

After every insertion, we rotate the Queue so that the **newly inserted element comes to the front**.

For example:

```text
push(10)

[10]
```

Then:

```text
push(20)

Before:
[10] [20]

Rotate:
[20] [10]
 ↑
TOP
```

Then:

```text
push(30)

Before:
[20] [10] [30]

Rotate the old elements:

[30] [20] [10]
 ↑
TOP
```

Now the Queue behaves like a Stack:

```text
        STACK

         TOP
          ↓
        [30]
        [20]
        [10]
```

We are still using a Queue, but we have rearranged its elements so that:

```text
Queue Front = Stack Top
```

Therefore:

* `push()` → insert and rotate the Queue
* `pop()` → remove the front
* `top()` → return the front without removing it
* `empty()` → check whether the Queue is empty

---

# Approach


![Screenshot_20260813_133908.png](https://assets.leetcode.com/users/images/984d160f-c2af-4f72-91b3-673fd24b6b87_1786608597.167265.png)


In this solution, we use **only one Queue**:

```javascript
this.q1 = [];
```

We also maintain:

```javascript
this.len = 0;
```

to keep track of the number of elements.

The important rule is:

> **After every `push()`, the newest element must be at the front of `q1`.**

So if we perform:

```text
push(10)
push(20)
push(30)
push(40)
```

our Queue will always be arranged as:

```text
FRONT
  ↓
[40] [30] [20] [10]
```

This means:

```text
q1[0] = Stack Top
```

---

## 1. `push(x)`

This is the main part of the algorithm.

Suppose:

```text
q1 = [30] [20] [10]
```

and we call:

```text
push(40)
```

### Step 1 — Add the new element

We first add `40` to the back:

```text
q1 = [30] [20] [10] [40]
```

But this is not what we want.

We want:

```text
[40] [30] [20] [10]
```

because `40` must become the Stack's top.

### Step 2 — Rotate the Queue

We repeatedly:

1. Remove the front element.
2. Put that element at the back.

First rotation:

```text
[30] [20] [10] [40]

Remove 30:
[20] [10] [40]

Add 30:
[20] [10] [40] [30]
```

Second rotation:

```text
[20] [10] [40] [30]

Remove 20:
[10] [40] [30]

Add 20:
[10] [40] [30] [20]
```

Third rotation:

```text
[10] [40] [30] [20]

Remove 10:
[40] [30] [20]

Add 10:
[40] [30] [20] [10]
```

Now:

```text
FRONT
  ↓
[40] [30] [20] [10]
```

Perfect.

The new element `40` is now at the front, so it behaves like the Stack's top.

### Why do we rotate `len - 1` times?

After adding `x`, the Queue contains:

```text
old elements + x
```

If there are `len` total elements, we need to move the **old `len - 1` elements** behind the newly inserted element.

That's why the code uses:

```javascript
for (let i = 0; i < this.len - 1; i++) {
    this.q1.push(this.q1.shift());
}
```

---

# 2. `pop()`

Now `pop()` becomes very simple.

Because we maintain:

```text
q1.front = Stack.top
```

Suppose:

```text
q1 = [40] [30] [20] [10]
       ↑
     FRONT
```

The Stack's top is `40`.

So:

```text
pop()
```

should return:

```text
40
```

We simply remove the front:

```javascript
return this.q1.shift();
```

After removal:

```text
q1 = [30] [20] [10]
```

We also decrease `len`:

```javascript
this.len--;
```

---

# 3. `top()`

`top()` should return the Stack's top **without removing it**.

Since the Stack's top is always the Queue's front:

```text
q1 = [40] [30] [20] [10]
      ↑
```

we simply use:

```javascript
return this.q1[0];
```

So:

```text
top() → 40
```

The Queue remains unchanged:

```text
[40] [30] [20] [10]
```

---

# 4. `empty()`

The Stack is empty when our Queue is empty.

So:

```javascript
return this.q1.length === 0;
```

For example:

```text
q1 = []
```

gives:

```text
empty() → true
```

While:

```text
q1 = [10]
```

gives:

```text
empty() → false
```

---

# Algorithm

### `push(x)`

```text
1. Add x to the back of q1.
2. Increase len.
3. Rotate the Queue len - 1 times:
      a. Remove the front element.
      b. Add it to the back.
4. Now x is at the front.
```

### `pop()`

```text
1. Check if the Stack is empty.
2. If empty, return -1.
3. Decrease len.
4. Remove and return the front of q1.
```

### `top()`

```text
1. Check if the Stack is empty.
2. If empty, return -1.
3. Return the front element of q1.
4. Do not remove it.
```

### `empty()`

```text
1. Check whether q1 contains zero elements.
2. Return true if it is empty.
3. Otherwise return false.
```

---

# Dry Run

Let's use:

```text
push(10)
push(20)
push(30)
push(40)
top()
pop()
top()
pop()
empty()
```

Initially:

```text
q1 = []
len = 0
```

---

## `push(10)`

Add `10`:

```text
q1 = [10]
```

```text
len = 1
```

Rotate:

```text
len - 1 = 0
```

No rotation required.

Final:

```text
q1 = [10]
```

Return:

```text
null
```

---

## `push(20)`

Add `20`:

```text
q1 = [10] [20]
```

```text
len = 2
```

We need:

```text
len - 1 = 1
```

rotation.

Move `10` from front to back:

```text
[10] [20]
 ↓

[20] [10]
```

Final:

```text
q1 = [20] [10]
```

Return:

```text
null
```

---

## `push(30)`

Add `30`:

```text
q1 = [20] [10] [30]
```

```text
len = 3
```

We need:

```text
len - 1 = 2
```

rotations.

### Rotation 1

```text
[20] [10] [30]

remove 20
add 20 to back

[10] [30] [20]
```

### Rotation 2

```text
[10] [30] [20]

remove 10
add 10 to back

[30] [20] [10]
```

Final:

```text
q1 = [30] [20] [10]
```

Return:

```text
null
```

---

## `push(40)`

Add `40`:

```text
q1 = [30] [20] [10] [40]
```

```text
len = 4
```

We need:

```text
len - 1 = 3
```

rotations.

### Rotation 1

```text
[30] [20] [10] [40]

→ [20] [10] [40] [30]
```

### Rotation 2

```text
[20] [10] [40] [30]

→ [10] [40] [30] [20]
```

### Rotation 3

```text
[10] [40] [30] [20]

→ [40] [30] [20] [10]
```

Final:

```text
FRONT
  ↓
[40] [30] [20] [10]
```

Now our Queue behaves exactly like a Stack:

```text
TOP
 ↓
40
30
20
10
```

Return:

```text
null
```

---

## `top()`

Current:

```text
q1 = [40] [30] [20] [10]
      ↑
```

Return:

```text
40
```

Nothing is removed.

Queue remains:

```text
[40] [30] [20] [10]
```

---

## `pop()`

Remove the front:

```text
q1.shift()
```

Return:

```text
40
```

Now:

```text
q1 = [30] [20] [10]
```

And:

```text
len = 3
```

---

## `top()`

Current:

```text
q1 = [30] [20] [10]
      ↑
```

Return:

```text
30
```

Queue remains unchanged.

---

## `pop()`

Remove:

```text
30
```

Now:

```text
q1 = [20] [10]
```

Return:

```text
30
```

---

## `empty()`

Current:

```text
q1 = [20] [10]
```

It is not empty.

Therefore:

```text
false
```

---

# Dry Run Table

| Operation  | Queue              | `len` |    Return |
| ---------- | ------------------ | ----: | --------: |
| `push(10)` | `[10]`             |     1 |    `null` |
| `push(20)` | `[20, 10]`         |     2 |    `null` |
| `push(30)` | `[30, 20, 10]`     |     3 |    `null` |
| `push(40)` | `[40, 30, 20, 10]` |     4 |    `null` |
| `top()`    | `[40, 30, 20, 10]` |     4 |    **40** |
| `pop()`    | `[30, 20, 10]`     |     3 |    **40** |
| `top()`    | `[30, 20, 10]`     |     3 |    **30** |
| `pop()`    | `[20, 10]`         |     2 |    **30** |
| `empty()`  | `[20, 10]`         |     2 | **false** |

---

# Complexity

### `push()`

If there are `n` elements, we rotate the Queue `n - 1` times.

Therefore:

**Time: `O(n)`**

### `pop()`

We only remove the front:

**Time: `O(1)`**

### `top()`

We directly access the first element:

**Time: `O(1)`**

### `empty()`

We check whether the Queue is empty:

**Time: `O(1)`**

### Space Complexity

We store all elements in one Queue:

**Space: `O(n)`**

---

# Code

```javascript
var MyStack = function () {
    this.q1 = [];
    this.len = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {

    // Add the new element to the back of the queue
    this.q1.push(x);

    // Increase the number of elements
    this.len++;

    // Move all old elements behind the new element
    // so that x becomes the front (top of the stack)
    for (let i = 0; i < this.len - 1; i++) {
        this.q1.push(this.q1.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {

    // If the stack is empty
    if (this.empty()) {
        return -1;
    }

    // One element is being removed
    this.len--;

    // The front of the queue is the top of the stack
    return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {

    // If the stack is empty
    if (this.empty()) {
        return -1;
    }

    // The front of the queue represents the stack top
    return this.q1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0;
};
```


