# Implement Queue Using Two Stacks

Design and implement a **First In, First Out (FIFO) Queue** using **only two stacks**.

A queue follows the **FIFO** principle, which means the element that is inserted first must be the first element removed.


https://leetcode.com/problems/implement-queue-using-stacks/?envType=problem-list-v2&envId=stack

For example:

```text
Queue: [1, 2, 3]

Front → 1 2 3 ← Back
```

The element `1` must be removed before `2`, and `2` must be removed before `3`.

However, a stack follows **LIFO (Last In, First Out)**:

```text
Stack:

Top → 3
      2
      1
```

Therefore, your task is to use **two stacks** together to simulate the behavior of a normal queue.

## Implement the `MyQueue` Class

Your queue must support the following operations:

### `push(x)`

Adds element `x` to the **back** of the queue.

```text
push(1)
Queue: [1]

push(2)
Queue: [1, 2]

push(3)
Queue: [1, 2, 3]
```

### `pop()`

Removes the element from the **front** of the queue and returns it.

For example:

```text
Queue: [1, 2, 3]

pop() → 1

Queue: [2, 3]
```

### `peek()`

Returns the element at the **front** of the queue without removing it.

```text
Queue: [1, 2, 3]

peek() → 1

Queue remains: [1, 2, 3]
```

### `empty()`

Returns `true` if the queue contains no elements; otherwise, returns `false`.

```text
Queue: []

empty() → true
```

---

## Important Notes

You must use **only two stacks** to implement the queue.

You may only use the standard operations supported by a stack:

* Push an element onto the top.
* Pop an element from the top.
* Peek at the top element.
* Check the size of the stack.
* Check whether the stack is empty.

Depending on the programming language, a stack may not be available as a built-in data structure. You may simulate a stack using an array/list/deque, **but you must only use operations that follow normal stack behavior**.

---

## Example

```text
Input:
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]

Output:
[null, null, null, 1, 1, false]
```

### Explanation

```text
MyQueue myQueue = new MyQueue();

myQueue.push(1);
```

Queue:

```text
[1]
```

Then:

```text
myQueue.push(2);
```

Queue:

```text
[1, 2]
```

The front of the queue is `1`, so:

```text
myQueue.peek() → 1
```

The queue remains:

```text
[1, 2]
```

Now:

```text
myQueue.pop() → 1
```

The queue becomes:

```text
[2]
```

Finally:

```text
myQueue.empty() → false
```

because the queue still contains `2`.

---

## Constraints

* `1 <= x <= 9`
* At most `100` calls will be made to `push`, `pop`, `peek`, and `empty`.
* All calls to `pop()` and `peek()` will be valid.
* You must implement the queue using **two stacks**.

## Follow-Up

Can you implement the queue so that each operation has an **amortized `O(1)` time complexity**?

In other words, even if an individual operation occasionally takes `O(n)` time, the total time required for `n` operations should be **`O(n)`**.
