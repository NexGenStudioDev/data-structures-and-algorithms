# 724. Find Pivot Index

**Difficulty:** Easy

**Topics:** Array, Prefix Sum


**LeetCode Problem:** [https://leetcode.com/problems/find-pivot-index/](https://leetcode.com/problems/find-pivot-index/)



---

## Problem Description

You are given an integer array `nums` containing both positive and negative integers, as well as zeros.

Your task is to find the **pivot index** of the array.

A **pivot index** is an index where the sum of all elements strictly to its left is equal to the sum of all elements strictly to its right.

In simple words, you need to find a position in the array where:

- The sum of all elements before that position is equal to the sum of all elements after that position.
- The element at the current position is **not included** in either the left sum or the right sum.

### Important Conditions

1. **Current element is excluded:** The element at the pivot index must not be included when calculating either sum.
2. **Leftmost pivot index:** If multiple pivot indices exist, return the smallest index.
3. **No pivot index:** If no index satisfies the condition, return `-1`.
4. **First index:** If the pivot is at index `0`, the left sum is considered `0` because there are no elements to its left.
5. **Last index:** If the pivot is at the last index, the right sum is considered `0` because there are no elements to its right.
6. **Zero-based indexing:** Array indices start from `0`, not `1`.

### Your Task

Given the integer array `nums`, return the **leftmost pivot index** where the left sum equals the right sum.

If no such index exists, return `-1`.

---

## Examples

### Example 1: Pivot Index in the Middle

**Input:**

```
nums = [1, 7, 3, 6, 5, 6]
```

**Output:**

```
3
```

**Explanation:**

The pivot index is `3`, where the element is `6`.

Elements strictly to the left:

```
[1, 7, 3]
```

Left sum:

```
1 + 7 + 3 = 11
```

Elements strictly to the right:

```
[5, 6]
```

Right sum:

```
5 + 6 = 11
```

Since both sums are equal, index `3` satisfies the pivot condition.

**Note:** The element `6` at index `3` is not included in either sum.

Therefore, the answer is `3`.

### Example 2: No Pivot Index

**Input:**

```
nums = [1, 2, 3]
```

**Output:**

```
-1
```

**Explanation:**

There is no index in the given array where the sum of elements strictly to the left equals the sum of elements strictly to the right.

Therefore, return `-1`.

### Example 3: Pivot Index at the Beginning

**Input:**

```
nums = [2, 1, -1]
```

**Output:**

```
0
```

**Explanation:**

The pivot index is `0`, where the element is `2`.

Since there are no elements to the left of index `0`:

```
Left Sum = 0
```

Elements strictly to the right:

```
[1, -1]
```

Right sum:

```
1 + (-1) = 0
```

Both sums are equal.

Therefore, the pivot index is `0`.

### Example 4: Pivot Index at the End

**Input:**

```
nums = [-1, 1, 0]
```

**Output:**

```
2
```

**Explanation:**

At index `2`, the current element is `0`.

Elements strictly to the left:

```
[-1, 1]
```

Left sum:

```
-1 + 1 = 0
```

There are no elements to the right.

```
Right Sum = 0
```

Both sums are equal.

Therefore, return `2`.

### Example 5: Multiple Valid Pivot Indices

**Input:**

```
nums = [0, 0, 0, 0]
```

**Output:**

```
0
```

**Explanation:**

Every index satisfies the pivot condition because all elements are `0`.

However, the problem specifically asks for the **leftmost pivot index**.

Therefore, return `0`.

### Example 6: Single Element

**Input:**

```
nums = [5]
```

**Output:**

```
0
```

**Explanation:**

The array contains only one element.

At index `0`, there are no elements on either side.

```
Left Sum  = 0
Right Sum = 0
```

Therefore, index `0` is the pivot index.

---

## Constraints

```
1 <= nums.length <= 10^4

-1000 <= nums[i] <= 1000
```

**Constraint Explanation:**

- The array contains at least `1` element.
- The array can contain at most `10,000` elements.
- Each element can have a value between `-1000` and `1000`, inclusive.
- The array may contain positive numbers, negative numbers, and zeros.
- Duplicate elements are allowed.

