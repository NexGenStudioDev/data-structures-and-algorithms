## 1. What is Next Greater Element?

The **Next Greater Element (NGE)** of an element `x` is the **first greater element on the right side** of `x`.

### Example

```text
Array = [1, 3, 4, 2]

1 → 3
3 → 4
4 → -1
2 → -1
```

Why?

* For `1`, the first greater element on the right is `3`.
* For `3`, the first greater element on the right is `4`.
* For `4`, nothing greater exists → `-1`.
* For `2`, nothing exists on its right → `-1`.

---

# 2. Main Idea

Instead of checking every element again and again using nested loops:

```text
For every element
    check all elements on the right
```

we use a **Monotonic Stack**.

### Basic idea

```text
Process from RIGHT → LEFT

Current element
      ↓
Check stack top
      ↓
Remove smaller/equal elements
      ↓
Stack top = Next Greater Element
      ↓
Push current element
```

---

# 3. Why Do We Process From Right to Left?

We need to find an element **on the right**.

So when we move from:

```text
RIGHT → LEFT
```

all the elements on the right have already been processed.

Example:

```text
[1, 3, 4, 2]
         ↑
       Start
```

First process:

```text
2
```

Then:

```text
4
```

At this point, `2` is already in the stack.

So we can immediately determine whether `2` can be the NGE of `4`.

---

# 4. Why Do We Pop Elements?

This is the **most important concept**.

Suppose:

```text
[ ... 4, 2 ]
```

We are processing `4`.

Stack:

```text
[2]
 ↑
top
```

Check:

```text
2 < 4
```

`2` cannot be the greater element of `4`.

So:

```text
POP 2
```

### But why can we permanently remove `2`?

Because `2` is now **useless**.

Imagine:

```text
[1, 3, 4, 2]
       ↑     ↑
       4     2
```

`2` cannot be NGE of `4`.

It also cannot become the NGE of `3` or `1`, because `4` is already between them and `2`:

```text
1 → 3 → 4 → 2
```

For `3`:

```text
4 > 3
```

So `4` will be found before `2`.

Therefore:

> **Once a smaller element is blocked by a bigger element, that smaller element is no longer useful.**

That's why we pop it.

---

# 5. Stack Rule

For every current element:

```js
while (stack.length && stack.top <= current) {
    stack.pop();
}
```

After popping:

### Stack is empty

```text
NGE = -1
```

### Stack is not empty

```text
NGE = stack.top
```

Then:

```text
push(current)
```

---

# 6. Example

```text
nums2 = [1, 3, 4, 2]
```

Process from right:

```text
2 → 4 → 3 → 1
```

---

## Step 1: Current = 2

Stack:

```text
[]
```

Nothing is on the right.

Therefore:

```text
NGE(2) = -1
```

Push `2`.

```text
Stack = [2]
```

Map:

```text
2 → -1
```

---

## Step 2: Current = 4

Stack:

```text
[2]
 ↑
top
```

Compare:

```text
2 < 4
```

Pop `2`.

```text
Stack = []
```

Now stack is empty.

Therefore:

```text
NGE(4) = -1
```

Push `4`.

```text
Stack = [4]
```

Map:

```text
2 → -1
4 → -1
```

---

## Step 3: Current = 3

Stack:

```text
[4]
 ↑
top
```

Compare:

```text
4 > 3
```

So `4` is the first greater element.

```text
NGE(3) = 4
```

Push `3`.

```text
Stack = [4, 3]
```

Map:

```text
2 → -1
4 → -1
3 → 4
```

---

## Step 4: Current = 1

Stack:

```text
[4, 3]
    ↑
   top
```

Compare:

```text
3 > 1
```

Therefore:

```text
NGE(1) = 3
```

Push `1`.

```text
Stack = [4, 3, 1]
```

Final map:

```text
1 → 3
3 → 4
4 → -1
2 → -1
```

---

# 7. Visualization

```text
nums2 = [1, 3, 4, 2]

                 Process →
              ←────────────

2
↓
NGE = -1
Stack = [2]


4
↓
2 < 4 → POP 2
Stack = []
NGE = -1

Push 4
Stack = [4]


3
↓
4 > 3
NGE = 4

Push 3
Stack = [4, 3]


1
↓
3 > 1
NGE = 3

Push 1
Stack = [4, 3, 1]
```

---

# 8. Map Why?

We have two arrays:

```text
nums1 = [4, 1, 2]

nums2 = [1, 3, 4, 2]
```

We calculate NGE for **every element of `nums2` once**.

Store:

```text
ngeMap = {
    1: 3,
    3: 4,
    4: -1,
    2: -1
}
```

Now we simply look up each element of `nums1`.

```text
4 → -1
1 → 3
2 → -1
```

Answer:

```text
[-1, 3, -1]
```

---

# 9. Algorithm

### Step 1

Create:

```js
stack = []
ngeMap = new Map()
```

### Step 2

Traverse `nums2` from right to left.

```text
for i = nums2.length - 1 → 0
```

### Step 3

Remove useless elements:

```js
while (stack.length && stack.top <= current) {
    stack.pop();
}
```

### Step 4

Find NGE:

```text
stack empty → -1
otherwise → stack.top
```

### Step 5

Store it:

```js
ngeMap.set(current, nge)
```

### Step 6

Push current:

```js
stack.push(current)
```

### Step 7

Build answer using `nums1`.

---

# 10. Final LeetCode Solution

```js
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const ngeMap = new Map();

    // Process nums2 from right to left
    for (let i = nums2.length - 1; i >= 0; i--) {
        const current = nums2[i];

        // Remove elements that cannot be NGE
        while (
            stack.length > 0 &&
            stack[stack.length - 1] <= current
        ) {
            stack.pop();
        }

        // Find NGE
        const nge = stack.length > 0
            ? stack[stack.length - 1]
            : -1;

        // Store current element's NGE
        ngeMap.set(current, nge);

        // Current element can be NGE
        // for elements on its left
        stack.push(current);
    }

    // Get answers for nums1
    return nums1.map(num => ngeMap.get(num));
};
```

---

# 11. Complexity

Let:

```text
n = nums2.length
m = nums1.length
```

### Time Complexity

Building the NGE map:

```text
O(n)
```

Building the answer:

```text
O(m)
```

Total:

```text
O(n + m)
```

Since `m <= n`:

```text
≈ O(n)
```

### Space Complexity

Stack:

```text
O(n)
```

Map:

```text
O(n)
```

Therefore:

```text
Space = O(n)
```

---

# 12. Why Is It O(n) Even With a While Loop?

This is very important for interviews.

At first, it looks like:

```js
for (...) {
    while (...) {
        stack.pop();
    }
}
```

Maybe:

```text
O(n²)
```

But it is **not**.

Each element can be:

```text
Pushed → once
Popped → at most once
```

Example:

```text
2 → push
4 → pop 2, push 4
3 → push
1 → push
```

So across the complete algorithm:

```text
Maximum pushes = n
Maximum pops   = n
```

Therefore:

```text
O(n + n)
= O(n)
```

This is called **amortized O(n)**.

---

# 13. Monotonic Stack Pattern

This problem teaches the **Monotonic Stack** pattern.

Remember:

```text
NEXT GREATER → RIGHT
        ↓
Process RIGHT → LEFT
        ↓
Pop smaller/equal
        ↓
Stack top = answer
```

### Four common variations

| Problem          | Direction | Stack     |
| ---------------- | --------- | --------- |
| Next Greater     | Right     | Monotonic |
| Next Smaller     | Right     | Monotonic |
| Previous Greater | Left      | Monotonic |
| Previous Smaller | Left      | Monotonic |

---

# 14. Where This Pattern Is Used

Once you understand this problem, you can solve many similar problems:

```text
Next Greater Element I       → LC 496
Next Greater Element II      → LC 503
Daily Temperatures           → LC 739
Online Stock Span            → LC 901
Largest Rectangle Histogram  → LC 84
Trapping Rain Water          → related stack pattern
```

The common idea is:

> **Find the nearest/first element satisfying a greater/smaller condition without repeatedly scanning the array.**

---

# 15. Quick Revision Notes

```text
NEXT GREATER ELEMENT I
────────────────────────────

Pattern:
Monotonic Stack

Direction:
Right → Left

Why?
Because we need an element on the right.

For every current element:

1. Check stack.
2. Pop smaller/equal elements.
3. If stack is empty → NGE = -1.
4. Otherwise → NGE = stack.top.
5. Push current element.
6. Store NGE in map.
7. Use map to answer nums1.

Why pop?
Smaller elements can never become the
next greater element after a bigger element
has blocked them.

Time:
O(n + m)

Space:
O(n)

Key idea:
"Remove useless candidates."
```
