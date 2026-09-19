# Intuition

The question asks us to **implement a Queue using only two Stacks**.

A **Queue** follows **FIFO (First In, First Out)**, meaning the element that enters first should be removed first.

A **Stack**, on the other hand, follows **LIFO (Last In, First Out)**, meaning the last element added is removed first.

So, we cannot directly use one Stack to behave like a Queue because their removal orders are opposite.

To solve this, we use **two Stacks: `stack1` and `stack2`**.

* `stack1` is used to store the elements when we `push`.
* `stack2` is used to rearrange the elements so that the oldest element comes to the top.

For example, suppose we push:

```text
1 → 2 → 3
```

`stack1` will contain:

```text
[1, 2, 3]
```

But if we want to remove elements like a Queue, we need to remove `1` first.

So, we move all elements from `stack1` to `stack2`:

```text
stack1: []
stack2: [3, 2, 1]
```

Now `1` is at the top of `stack2`.

Therefore, when we perform `pop()`, we simply pop from `stack2`, which removes `1` first.

This makes the Stack behave like a Queue.

# Approach

We use two stacks:

```text
stack1 → stores newly pushed elements
stack2 → helps us get the oldest element
```

### 1. `push(x)`

When adding an element, we simply push it into `stack1`.

For example:

```text
push(1)
push(2)
push(3)
```

`stack1` becomes:

```text
[1, 2, 3]
```

This operation is simple because we don't need to rearrange anything while inserting.

---

### 2. `pop()`

When we need to remove an element, we first check whether `stack2` is empty.

If it is empty, we move every element from `stack1` to `stack2`.

For example:

```text
stack1 = [1, 2, 3]
stack2 = []
```

Move the elements one by one:

```text
3 → stack2
2 → stack2
1 → stack2
```

Now:

```text
stack1 = []
stack2 = [3, 2, 1]
```

Because Stack follows LIFO, `1` is now at the top.

So:

```text
stack2.pop()
```

removes and returns:

```text
1
```

which is exactly what a Queue should do.

An important optimization is that we **only move elements when `stack2` is empty**.

If `stack2` already contains elements, we can directly pop from it without moving anything.

---

### 3. `peek()`

`peek()` works almost exactly like `pop()`.

We first make sure that `stack2` contains the elements in the correct order.

If `stack2` is empty, we move all elements from `stack1` to `stack2`.

Then instead of removing the element, we simply look at the top:

```javascript
this.stack2[this.stack2.length - 1]
```

For example:

```text
stack2 = [3, 2, 1]
```

The top element is:

```text
1
```

So `peek()` returns `1` without removing it.

---

### 4. `empty()`

The Queue is empty only when **both stacks are empty**.

Therefore:

```javascript
return this.stack1.length === 0 && this.stack2.length === 0;
```

If either stack contains an element, the Queue is not empty.

# Complexity

### Time Complexity

* `push()` → **O(1)**
* `peek()` → **O(1) amortized**
* `pop()` → **O(1) amortized**
* `empty()` → **O(1)**

Although `pop()` or `peek()` can sometimes take **O(n)** when we transfer elements from `stack1` to `stack2`, each element is transferred at most once before being removed.

Therefore, the **amortized time complexity** of `pop()` and `peek()` is:

\(O(1)\)

### Space Complexity

We use two stacks to store all the elements.

Therefore:

\(O(n)\)

where `n` is the number of elements in the Queue.

# Code

`javascript`

```javascript []
var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }

    return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }

    return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0;
};
```


`python`



```python []
class MyQueue:

    def __init__(self):
        self.stack1 = []
        self.stack2 = []

    def push(self, x: int) -> None:
        self.stack1.append(x)

    def pop(self) -> int:
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())

        return self.stack2.pop()

    def peek(self) -> int:
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())

        return self.stack2[-1]

    def empty(self) -> bool:
        return not self.stack1 and not self.stack2
```