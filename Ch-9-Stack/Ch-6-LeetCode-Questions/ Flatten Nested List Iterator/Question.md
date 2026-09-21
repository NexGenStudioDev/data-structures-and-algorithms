# LeetCode 341 — Flatten Nested List Iterator

**Difficulty:** Medium
**Topics:** Stack, Recursion, Iterator

## Problem Statement

You are given a **nested list of integers** called `nestedList`.

Each element in `nestedList` can be either:

* A single integer, or
* Another list containing integers or additional nested lists.

Your task is to implement an iterator that **flattens the nested list** and returns each integer one by one while maintaining the original order.

### Implement the `NestedIterator` class

* `NestedIterator(List<NestedInteger> nestedList)`
  Initializes the iterator with the given `nestedList`.

* `int next()`
  Returns the next integer from the flattened nested list.

* `boolean hasNext()`
  Returns `true` if there are still integers remaining in the nested list; otherwise, returns `false`.

The iterator will be used as follows:

```text
initialize iterator with nestedList

res = []

while iterator.hasNext()
    append iterator.next() to res

return res
```

Your solution is considered correct if `res` matches the expected flattened list.

---

## Example 1

**Input:**

```text
nestedList = [[1,1],2,[1,1]]
```

**Output:**

```text
[1,1,2,1,1]
```

**Explanation:**

The nested list:

```text
[[1,1],2,[1,1]]
```

is flattened while maintaining the original order:

```text
[1,1] → 1,1
2     → 2
[1,1] → 1,1
```

Therefore:

```text
[1,1,2,1,1]
```

The calls to `next()` should return:

```text
1 → 1 → 2 → 1 → 1
```

---

## Example 2

**Input:**

```text
nestedList = [1,[4,[6]]]
```

**Output:**

```text
[1,4,6]
```

**Explanation:**

The nested structure:

```text
[1,[4,[6]]]
```

contains integers at different levels:

```text
1
└── 4
    └── 6
```

After flattening while preserving the original order:

```text
[1,4,6]
```

The calls to `next()` should return:

```text
1 → 4 → 6
```

---

## Constraints

* `1 <= nestedList.length <= 500`
* Each element is either an integer or a nested list.
* A nested list can contain other nested lists.
* The value of each integer is in the range:

```text
-10^6 <= value <= 10^6
```

* The original order of all integers must be preserved.
