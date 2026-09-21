# LeetCode 341 — Flatten Nested List Iterator

## 🧠 Intuition

We are given a **nested list** where every element can either be:

* a single integer, or
* another nested list containing more integers/lists.

For example:

```text
[[1,1],2,[1,[2,3]]]
```

Our goal is to return the integers one by one in the same order:

```text
1 → 1 → 2 → 1 → 2 → 3
```

The main challenge is that the list can be nested at **any depth**.

For example:

```text
[1,[2,[3,[4]]]]
```

So we need a way to keep going deeper whenever we encounter another list.

The simplest approach is **recursion**.

### Core idea

For every element:

```text
Is it an integer?
       │
   ┌───┴───┐
  Yes      No
   │        │
   ▼        ▼
 push    recursively
 integer   flatten
```

We first flatten the entire nested structure and store the integers in an array.

Then:

* `hasNext()` tells us whether another integer exists.
* `next()` returns the next integer.

---

# 🔍 Example

Consider:

```text
nestedList = [[1,1],2,[1,1]]
```

Visual representation:

```text
[
    [1, 1],
    2,
    [1, 1]
]
```

### Start

```text
iterator = []
```

### First element

```text
[1,1]
```

It is not an integer, so we recursively process it.

```text
1 → integer → push

iterator = [1]

1 → integer → push

iterator = [1,1]
```

### Second element

```text
2
```

It is an integer:

```text
iterator = [1,1,2]
```

### Third element

```text
[1,1]
```

Recursively process it:

```text
iterator = [1,1,2,1,1]
```

Final flattened array:

```text
[1,1,2,1,1]
```

---

# 🛠️ Approach

We maintain two properties:

```javascript
this.iterator
this.index
```

### `this.iterator`

Stores all flattened integers.

```text
nestedList
    ↓
flatten()
    ↓
iterator
```

For:

```text
[[1,1],2,[1,1]]
```

we get:

```text
iterator = [1,1,2,1,1]
```

### `this.index`

Keeps track of the current position.

Initially:

```text
index = 0
```

After calling:

```javascript
next()
```

we move to:

```text
index = 1
```

and so on.

---

# 🔄 Step-by-Step `flatten()`

```javascript
NestedIterator.prototype.flatten = function (list) {
    for (const element of list) {

        if (element.isInteger()) {
            this.iterator.push(element.getInteger());
        } else {
            this.flatten(element.getList());
        }
    }
};
```

Let's understand each part.

### 1. Traverse every element

```javascript
for (const element of list)
```

We visit every element in the current list.

---

### 2. Check whether it is an integer

```javascript
element.isInteger()
```

If it returns `true`, we have an actual number.

For example:

```text
1
```

---

### 3. Store the integer

```javascript
this.iterator.push(element.getInteger());
```

Suppose:

```text
element = 5
```

Then:

```text
iterator = [5]
```

---

### 4. If it is a nested list

If:

```javascript
element.isInteger()
```

returns `false`, then it contains another list.

We get that list:

```javascript
element.getList()
```

and recursively call:

```javascript
this.flatten(element.getList());
```

This allows us to handle unlimited nesting.

---

# 🔥 Important Recursive Example

Consider:

```text
[1,[2,[3,4]]]
```

Start:

```text
flatten([1,[2,[3,4]]])
```

### `1`

```text
1 → integer

iterator = [1]
```

### `[2,[3,4]]`

Nested list → recursively call:

```text
flatten([2,[3,4]])
```

### `2`

```text
iterator = [1,2]
```

### `[3,4]`

Again nested → recursively call:

```text
flatten([3,4])
```

### `3`

```text
iterator = [1,2,3]
```

### `4`

```text
iterator = [1,2,3,4]
```

Final:

```text
[1,2,3,4]
```

This is exactly why recursion is useful here.

---

# ▶️ `hasNext()`

```javascript
NestedIterator.prototype.hasNext = function () {
    return this.index < this.iterator.length;
};
```

Suppose:

```text
iterator = [1,2,3]
index = 0
```

Check:

```text
0 < 3
```

Therefore:

```text
true
```

After three calls to `next()`:

```text
index = 3
```

Now:

```text
3 < 3
```

is:

```text
false
```

So there are no more elements.

---

# ▶️ `next()`

```javascript
NestedIterator.prototype.next = function () {
    return this.iterator[this.index++];
};
```

Suppose:

```text
iterator = [1,2,3]
index = 0
```

Calling:

```javascript
next()
```

returns:

```text
1
```

and increments:

```text
index = 1
```

Next call:

```text
2
```

Then:

```text
index = 2
```

Next:

```text
3
```

Then:

```text
index = 3
```

---

# 🧪 Complete Dry Run

Input:

```text
nestedList = [[1,1],2,[1,1]]
```

### Constructor

```javascript
var i = new NestedIterator(nestedList);
```

Creates:

```text
iterator = []
index = 0
```

Then:

```text
flatten(nestedList)
```

### Processing

```text
[1,1]
 ↓
1 → push
1 → push

iterator = [1,1]
```

Then:

```text
2
 ↓
push

iterator = [1,1,2]
```

Then:

```text
[1,1]
 ↓
1 → push
1 → push

iterator = [1,1,2,1,1]
```

Final:

```text
iterator = [1,1,2,1,1]
index = 0
```

---

### `hasNext()`

```text
0 < 5 → true
```

### `next()`

```text
return iterator[0]
```

Output:

```text
1
```

Index:

```text
1
```

---

### Next

```text
1 < 5 → true
```

Return:

```text
1
```

Index:

```text
2
```

---

### Next

```text
2 < 5 → true
```

Return:

```text
2
```

Index:

```text
3
```

---

### Next

```text
3 < 5 → true
```

Return:

```text
1
```

Index:

```text
4
```

---

### Next

```text
4 < 5 → true
```

Return:

```text
1
```

Index:

```text
5
```

---

### Final

```text
5 < 5 → false
```

So:

```text
Output:
1 1 2 1 1
```

---

# 💻 Final LeetCode Solution

```javascript
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 *
 * function NestedInteger() {
 *
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.iterator = [];
    this.index = 0;

    this.flatten(nestedList);
};

/**
 * Recursively flatten the nested list.
 *
 * @param {NestedInteger[]} list
 */
NestedIterator.prototype.flatten = function (list) {
    for (const element of list) {
        if (element.isInteger()) {
            this.iterator.push(element.getInteger());
        } else {
            this.flatten(element.getList());
        }
    }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    return this.index < this.iterator.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    return this.iterator[this.index++];
};

/**
 * Your NestedIterator will be called like this:
 *
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
```

## ⏱️ Complexity

Let `N` be the **total number of nested elements** visited during flattening.

**Time Complexity:**

```text
O(N)
```

Every nested element is visited once.

**Space Complexity:**

```text
O(N)
```

We store all integers in `this.iterator`. Recursion also uses call-stack space proportional to the maximum nesting depth.

### 🧠 DSA Pattern

The important pattern to remember from this problem is:

```text
Nested Structure
       ↓
   Recursion
       ↓
 Is Integer?
   ↙       ↘
 Yes       No
  ↓         ↓
Push      Recurse
```

This problem is primarily testing **Recursion + Nested Data Structures + Iterator Design**.
