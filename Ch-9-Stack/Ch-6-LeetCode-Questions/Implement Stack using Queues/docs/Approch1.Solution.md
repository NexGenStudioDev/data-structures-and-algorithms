

## Implement Stack using Two Queues | Simple JavaScript Solution | LIFO from FIFO


## Problem Understanding

The question asks us to **implement a Stack using Queues**.

We already know that a **Stack** follows **LIFO (Last In, First Out)**, while a **Queue** follows **FIFO (First In, First Out)**.

Our task is to **build a Stack**, but we are **not allowed to use Stack operations directly**. Instead, we have to use **one or two Queues** and only perform the operations that a normal Queue supports, such as:

* Add an element to the **back** of the Queue
* Remove an element from the **front** of the Queue
* Check the **front** element
* Check whether the Queue is **empty**

The main problem is that Stack and Queue work in opposite ways.

For example, if we push:

```text
push(10)
push(20)
push(30)
```

A Stack should behave like:

```text
        TOP
         ↓
       [30]
       [20]
       [10]
```

So:

```text
pop() → 30
```

because `30` was inserted last.

However, a Queue naturally looks like:

```text
FRONT              BACK
  ↓                  ↓
[10] [20] [30]
```

and removing from a Queue gives:

```text
remove() → 10
```

because `10` was inserted first.

Therefore, the main challenge is:

> **How can we use only Queue operations to make a Queue behave like a Stack?**

We solve this by **rearranging the elements after every `push()`** so that the **newest element is always placed at the front of our main Queue**.

For example, after:

```text
push(10)
push(20)
push(30)
```

we arrange the Queue as:

```text
FRONT
  ↓
[30] [20] [10]
```

Now the Queue's **front** represents the Stack's **top**:

```text
Queue Front = Stack Top
```

So we can implement the Stack operations using Queue operations:

```text
push(x)  → rearrange the Queues so x comes to the front
pop()    → remove the front of the Queue
top()    → return the front of the Queue
empty()  → check whether the Queue is empty
```



When we perform `pop()`, we need:

```text
pop() → 30
```

because `30` was inserted last.

But a Queue works differently:

```text
Queue:

FRONT             BACK
  ↓                 ↓
[10] [20] [30]
```

If we remove an element from the Queue, we can only remove it from the **front**:

```text
remove → 10
```

So the problem is:

```text
Stack wants:

[30] [20] [10]
  ↑
 TOP


Queue naturally gives:

[10] [20] [30]
  ↑
 FRONT
```

We need to somehow **rearrange the Queue** so that the element that was inserted last always comes to the front.

That way:

```text
Queue Front = Stack Top
```

We can then use the Queue to behave like a Stack.

---

# Approach

We will use **two Queues**, `q1` and `q2`.

The main idea is:

> **After every `push()`, keep the newest element at the front of `q1`.**

For example, after:

```text
push(10)
push(20)
push(30)
```

we want:

```text
q1:

FRONT
  ↓
[30] [20] [10]
```

Now `q1` behaves like our Stack:

```text
STACK

TOP
 ↓
[30]
[20]
[10]
```

Therefore:

* `push()` → rearrange the elements
* `pop()` → remove the front of `q1`
* `top()` → return the front of `q1`
* `empty()` → check whether `q1` is empty

---

# Algorithm


The main goal is to **implement Stack behavior using only Queue operations**.

We know:

* **Stack → LIFO** → Last In, First Out
* **Queue → FIFO** → First In, First Out

So our problem is to make the Queue behave like a Stack.

---

## 1. Data Structures We Will Use

We create two Queues:

```text
q1
q2
```
![Screenshot_20260813_121005.png](../images/A1/979a81d5-0f4c-46b6-af16-ece4a535bc71_1786603227.6433234.png)



### Why two Queues?

We need a second Queue as a **temporary/helper Queue**.

A Queue only allows us to:

```text
Add → Back
Remove → Front
```

![Screenshot_20260813_121434.png](../images//A1/495c75b0-7452-4def-8de1-19d00a4061fd_1786603498.0228357.png)


It does **not** allow us to directly insert something at the front.

Therefore, when a new element arrives, we use `q2` to rearrange the elements.


![Screenshot_20260813_121919.png](../images/A1//487ad424-fc60-4970-acc5-90271a341c2c_1786603795.4051814.png)


---

# 2. Main Rule

We maintain one very important rule throughout the algorithm:


![Screenshot_20260813_122211.png](../images/A1/e1ae50e1-df0f-4921-a7c3-966b8dada975_1786603957.3714998.png)


> **The front of `q1` must always represent the top of the Stack.**


For example:



![Screenshot_20260813_122516.png](../images/A1/5161f704-26e8-4ea0-8b80-081ce08f897e_1786604141.8032033.png)



We treat it as:

![Screenshot_20260813_122741.png](../images/A1/e2bdceac-e41e-46fa-a565-cd9cef179002_1786604294.8925452.png)


Therefore:

```text
q1.front = Stack.top
```

Once we maintain this rule, `pop()` and `top()` become very easy.

---

# 3. Algorithm for `push(x)`

This is the most important operation.

Suppose our Stack currently contains:

```text
10
20
30
```

and we want:

```text
push(40)
```

Before the operation, our main Queue should already be arranged like:

![Screenshot_20260813_123545.png](../images/A1/48d2e168-ea48-4bed-9e3e-5f6138fe029a_1786604779.4140017.png)


because `30` is currently the Stack's top.

We want to get:


![Screenshot_20260813_122516.png](../images/A1/4861f704-26e8-4ea0-8b80-081ce08f897e_1786604141.8032033.png)



---

## Step 1 — Put the new element into `q2`


![Screenshot_20260813_123741.png](../images/A1/b753a532-4bbb-433c-ac65-378289375d60_1786604898.710126.png)


First, add `40` to the empty `q2`.



![Screenshot_20260813_123946.png](../images/A1/ea71963b-d549-402d-a91a-64c4d1eb0460_1786605015.6566057.png)


### Why do we put `40` first?

Because `40` is the newest element.

In a Stack:

```text
push(40)
```

means `40` must become the new top.

So we want `40` to become the **front of our final Queue**.


![Screenshot_20260813_123946.png](../images/A1/ea71963b-d549-402d-a91a-64c4d1eb0460_1786605015.6566057.png)



---

# 4. Step 2 — Move all elements from `q1` to `q2`


![Screenshot_20260813_124341.png](../images/A1/297ab255-769f-4108-a35e-b48c473c047c_1786605247.1133292.png)


Now we repeatedly remove the **front** of `q1` and add it to the **back** of `q2`.

We continue until `q1` becomes empty.

### Move `30`

Remove `30` from the front of `q1`:

```text
q1 = [20] [10]
```


Add it to the back of `q2`:

```text
q2 = [40] [30]
```

![Screenshot_20260813_124620.png](../images/A1/d198e4a2-715c-4ae2-87cd-9ddb739cba6f_1786605412.6685648.png)


---

### Move `20`

Remove `20` from the front of `q1`:

```text
q1 = [10]
```

Add it to the back of `q2`:

```text
q2 = [40] [30] [20]
```

![Screenshot_20260813_124800.png](../images/A1/bc34d33d-1388-4c62-a4b1-fa588d333378_1786605505.9037988.png)


---

### Move `10`

Remove `10` from the front of `q1`:

```text
q1 = []
```

Add it to the back of `q2`:

```text
q2 = [40] [30] [20] [10]
```

Now `q1` is empty.

![Screenshot_20260813_130003.png](../images/A1/c6f95f47-40d6-48f3-a691-0380eb1511db_1786606247.6847324.png)


---

# 5. Step 3 — Swap `q1` and `q2`

Currently:

![Screenshot_20260813_130230.png](../images/A1/57eb4432-e87c-4996-bd1e-206079012125_1786606371.5293598.png)





But we want `q1` to remain our **main Queue**.

So we swap them:


![Screenshot_20260813_130409.png](../images/A1/5c9b7ab4-69d6-4e56-85a9-f866fc714ef1_1786606474.6838303.png)



Now our rule is maintained:

![Screenshot_20260813_130458.png](../images/A1/ee4138b0-5e82-4db4-b702-e42e1c15382b_1786606536.8716269.png)


Therefore:

```text
Stack:

TOP
 ↓
[40]
[30]
[20]
[10]
```

`40` is now the Stack's top.

---

# 6. Complete `push()` Algorithm

Therefore, whenever `push(x)` is called:

### Algorithm

```text
1. Add x to q2.

2. While q1 is not empty:
      a. Remove the front element from q1.
      b. Add that element to the back of q2.

3. Swap q1 and q2.

4. Now q1 contains the elements in Stack order.
```

Or simply:

```text
push(x):

    q2.push(x)

    while q1 is not empty:
        q2.push(q1.popFront())

    swap(q1, q2)
```

---

# 7. Algorithm for `pop()`

Now `pop()` is very easy.

Remember our main rule:

```text
q1.front = Stack.top
```

Suppose:

```text
q1:

FRONT
  ↓
[40] [30] [20] [10]
```

![Screenshot_20260813_130841.png](../images/A1/98506fb3-1b26-4405-9ff9-5098efbc338f_1786606791.7672272.png)


The Stack's top is `40`.

A Stack's `pop()` should remove `40`.

A Queue can remove its front using a standard Queue operation.

So:

```text
pop()
```

means:

```text
Remove q1.front
```

Result:

```text
return 40
```

After removing:

```text
q1 = [30] [20] [10]
```

![Screenshot_20260813_131127.png](../images/A1/d7e529b2-3df9-49cc-8f87-7d63e1150574_1786606925.044902.png)


### Algorithm

```text
pop():

    Remove and return the front element of q1
```

---

# 8. Algorithm for `top()`

`top()` should return the Stack's top **without removing it**.

Again:

```text
q1.front = Stack.top
```

Suppose:

![Screenshot_20260813_131626.png](../images/A1/6b558088-2015-48a2-8c6e-7c4808caf834_1786607325.500708.png)


Then:

```text
top() →30
```

But the Queue must remain unchanged:


![Screenshot_20260813_131626.png](https://assets.leetcode.com/users/images/7e866c53-425a-410f-911a-923ff740ff96_1786607211.3868706.png)


### Algorithm

```text
top():

    Return the front element of q1
```

---

# 9. Algorithm for `empty()`

A Stack is empty when it contains no elements.

Since all our actual elements are maintained in `q1`, we only need to check whether `q1` is empty.

```text
q1 = []
```

Then:

```text
empty() → true
```

Otherwise:

```text
q1 = [10]
```

Then:

```text
empty() → false
```

### Algorithm

```text
empty():

    If q1 has no elements:
        return true
    Otherwise:
        return false
```

---

# 10. Complete Algorithm

Now combine all four operations.

## `push(x)`

```text
1. Insert x into q2.
2. Move every element from q1 to q2:
      - remove from q1's front
      - add to q2's back
3. Swap q1 and q2.
```

## `pop()`

```text
1. Remove the front element of q1.
2. Return that element.
```

## `top()`

```text
1. Look at the front element of q1.
2. Return it.
3. Do not remove it.
```

## `empty()`

```text
1. Check whether q1 is empty.
2. Return true if empty.
3. Otherwise return false.
```

---

# 11. Complete Example

Let's perform:

```text
push(10)
push(20)
push(30)
push(40)
pop()
top()
empty()
```

---

## Initially

```text
q1 = []
q2 = []
```

---

## `push(10)`

Put `10` into `q2`:

```text
q2 = [10]
```

`q1` is empty.

Swap:

```text
q1 = [10]
q2 = []
```

---

## `push(20)`

Put `20` into `q2`:

```text
q2 = [20]
```

Move `10`:

```text
q1 = []
q2 = [20] [10]
```

Swap:

```text
q1 = [20] [10]
q2 = []
```

---

## `push(30)`

Put `30` into `q2`:

```text
q2 = [30]
```

Move `20`:

```text
q2 = [30] [20]
```

Move `10`:

```text
q2 = [30] [20] [10]
```

Swap:

```text
q1 = [30] [20] [10]
q2 = []
```

---

## `push(40)`

Put `40` into `q2`:

```text
q2 = [40]
```

Move `30`:

```text
q2 = [40] [30]
```

Move `20`:

```text
q2 = [40] [30] [20]
```

Move `10`:

```text
q2 = [40] [30] [20] [10]
```

Swap:

```text
q1 = [40] [30] [20] [10]
q2 = []
```

Now:

```text
        STACK

         TOP
          ↓
        [40]
        [30]
        [20]
        [10]
```

---

## `pop()`

Remove the front of `q1`:

```text
40
```

Return:

```text
40
```

Now:

```text
q1 = [30] [20] [10]
```

---

## `top()`

Front of `q1`:

```text
30
```

Return:

```text
30
```

But don't remove it.

```text
q1 = [30] [20] [10]
```

---

## `empty()`

```text
q1 = [30] [20] [10]
```

It is not empty.

Return:

```text
false
```

---

# 12. Algorithm in One Picture

```text
                 push(40)
                    ↓
        ┌──────────────────────┐
        │                      │
        │       q1             │
        │ [30] [20] [10]       │
        │                      │
        └──────────────────────┘
                    │
                    │
                    ↓
              Put 40 in q2
                    │
                    ↓
             q2 = [40]
                    │
                    ↓
        Move q1 → q2 one by one
                    │
                    ↓
        q2 = [40] [30] [20] [10]
                    │
                    ↓
              Swap q1, q2
                    │
                    ↓
        q1 = [40] [30] [20] [10]
                    │
                    ↓
             Queue Front
                    =
               Stack Top
```

---

# 13. Why This Algorithm Works

The algorithm works because after every `push()` we guarantee:

```text
q1.front = newest element
```

The newest element is exactly what a Stack needs at its top.

For example:

```text
push(10)

q1 = [10]


push(20)

q1 = [20] [10]


push(30)

q1 = [30] [20] [10]


push(40)

q1 = [40] [30] [20] [10]
```

Therefore:

```text
q1.front
   ↓
[40] [30] [20] [10]
   ↓
Stack Top
```

So even though `q1` is technically a Queue, its elements are arranged so that it **behaves like a Stack**.

---

# 14. Why `push()` Is Expensive

Notice what happens when we push a new element.

For:

```text
q1 = [30] [20] [10]
```

and:

```text
push(40)
```

we have to move:

```text
30
20
10
```

from `q1` to `q2`.

If there are `n` elements, we move `n` elements.

Therefore:

```text
push() → O(n)
```

But:

```text
pop() → O(1)
top() → O(1)
empty() → O(1)
```

because these operations only work with the front of `q1`.

---




# Dry Run

Let's take:

```text
push(10)
push(20)
push(30)
top()
pop()
top()
pop()
empty()
```

Initially:

```text
q1 = []
q2 = []
```

---

## 1. `push(10)`

Put `10` into `q2`:

```text
q2 = [10]
```

`q1` is empty, so nothing needs to be moved.

Swap:

```text
q1 = [10]
q2 = []
```

Return:

```text
null
```

---

## 2. `push(20)`

Put `20` into `q2`:

```text
q1 = [10]
q2 = [20]
```

Move `10`:

```text
q1 = []
q2 = [20] [10]
```

Swap:

```text
q1 = [20] [10]
q2 = []
```

Return:

```text
null
```

---

## 3. `push(30)`

Put `30` into `q2`:

```text
q1 = [20] [10]
q2 = [30]
```

Move `20`:

```text
q1 = [10]
q2 = [30] [20]
```

Move `10`:

```text
q1 = []
q2 = [30] [20] [10]
```

Swap:

```text
q1 = [30] [20] [10]
q2 = []
```

Return:

```text
null
```

Now our Queue is behaving like a Stack:

```text
        STACK

         TOP
          ↓
        [30]
        [20]
        [10]
```

---

## 4. `top()`



Current:




Return the front:

```text
top() → 30
```

Nothing is removed.

```text
q1 = [30] [20] [10]
```

---

## 5. `pop()`

Current:

```text
q1 = [30] [20] [10]
      ↑
```

Remove the front:

```text
pop() → 30
```

Now:

```text
q1 = [20] [10]
```

---

## 6. `top()`

Current:

```text
q1 = [20] [10]
      ↑
```

Return:

```text
top() → 20
```

Queue remains:

```text
q1 = [20] [10]
```

---

## 7. `pop()`

Remove the front:

```text
pop() → 20
```

Now:

```text
q1 = [10]
```

---

## 8. `empty()`

Current:

```text
q1 = [10]
```

It is not empty.

Therefore:

```text
empty() → false
```

---

# Dry Run Table

| Operation  | `q1`           | `q2` | Return  |
| ---------- | -------------- | ---- | ------- |
| `push(10)` | `[10]`         | `[]` | `null`  |
| `push(20)` | `[20, 10]`     | `[]` | `null`  |
| `push(30)` | `[30, 20, 10]` | `[]` | `null`  |
| `top()`    | `[30, 20, 10]` | `[]` | `30`    |
| `pop()`    | `[20, 10]`     | `[]` | `30`    |
| `top()`    | `[20, 10]`     | `[]` | `20`    |
| `pop()`    | `[10]`         | `[]` | `20`    |
| `empty()`  | `[10]`         | `[]` | `false` |

Final output:

```text
[null, null, null, null, 30, 30, 20, 20, false]
```

---

# Code

```javascript
var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
};

/**
 * Push element x onto stack.
 *
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {

    // Put the new element into q2 first.
    this.q2.push(x);

    // Move all old elements behind the new element.
    while (this.q1.length > 0) {
        this.q2.push(this.q1.shift());
    }

    // q2 now has the correct Stack order.
    // Make q2 the main queue.
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
};

/**
 * Remove the element on top of the stack.
 *
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.q1.shift();
};

/**
 * Return the element on top of the stack.
 *
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.q1[0];
};

/**
 * Returns whether the stack is empty.
 *
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length === 0;
};
```

# Complexity

There are `n` elements in the Queue.

### `push()`

We move all existing elements from `q1` to `q2`.

```text
O(n)
```

### `pop()`

We remove only the front element.

```text
O(1)
```

### `top()`

We directly access the front element.

```text
O(1)
```

### `empty()`

We only check the length.

```text
O(1)
```

### Space Complexity

We store all `n` elements in the two Queues.

```text
O(n)
```

---

# The Main Idea to Remember

Don't try to remember the code first. Remember this:

```text
STACK
LIFO
 ↓
Last element must come out first
```

But:

```text
QUEUE
FIFO
 ↓
First element normally comes out first
```

So we **rearrange the Queue after every `push()`**:

```text
push(10)

[10]


push(20)

[20] [10]


push(30)

[30] [20] [10]
  ↑
front
```

Now:

```text
Queue Front = Stack Top
```

Therefore:

```text
pop()  → remove Queue front
top()  → see Queue front
```

**In one sentence:**

> We implement the Stack by using two Queues and rearranging the elements after every `push()` so that the newest element always stays at the front of `q1`, allowing the Queue's front to behave like the Stack's top.
