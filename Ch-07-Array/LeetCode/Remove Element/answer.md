````markdown
# 27. Remove Element

**Difficulty:** Easy

---

# Problem Statement

Given an integer array `nums` and an integer `val`, remove **all occurrences** of `val` **in-place**.

The relative order of the remaining elements may change.

Return the number of elements that are **not equal** to `val`.

The first `k` elements of the array should contain the remaining valid elements.

---

# Example 1

```text
Input

nums = [3,2,2,3]

val = 3
```

Output

```text
2
```

Modified Array

```text
[2,2,_,_]
```

---

# Example 2

```text
Input

nums = [0,1,2,2,3,0,4,2]

val = 2
```

Output

```text
5
```

Modified Array

```text
[0,1,3,0,4,_,_,_]
```

---

# Key Observation

Unlike **Remove Duplicates from Sorted Array**, the array is **not sorted**.

Our goal is simply to keep every element that is **not equal** to `val`.

Instead of deleting elements,

we overwrite unwanted elements with valid ones.

---

# Approach 1 — Extra Array (Brute Force)

## Intuition

The simplest solution is to create another array.

Traverse the original array.

Whenever the current element is **not equal** to `val`,

store it inside the new array.

Finally,

copy all elements back into the original array.

Although easy to understand,

this solution requires extra memory.

---

## Algorithm

```text
Create an empty array.

Traverse nums.

If nums[i] != val

    Add nums[i] to the new array.

Copy all elements back into nums.

Return newArray.length.
```

---

## Dry Run

```text
nums = [3,2,2,3]

val = 3
```

Initially

```text
newArray = []
```

---

Current

```text
3
```

Equal to val.

Ignore.

---

Current

```text
2
```

Store

```text
[2]
```

---

Current

```text
2
```

Store

```text
[2,2]
```

---

Current

```text
3
```

Ignore.

Copy back

```text
nums

[2,2,2,3]
```

Return

```text
2
```

---

## JavaScript Code

```javascript
var removeElement = function(nums, val) {

    let result = [];

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== val) {

            result.push(nums[i]);

        }

    }

    for (let i = 0; i < result.length; i++) {

        nums[i] = result[i];

    }

    return result.length;
};
```

---

## Complexity

### Time

```text
O(n)
```

### Space

```text
O(n)
```

---

# Approach 2 — Two Pointer (Optimal)

## Intuition

Instead of creating another array,

we keep all valid elements at the beginning of the same array.

We use two pointers.

### Pointer `j`

Scans every element.

### Pointer `x`

Points to the next position where a valid element should be placed.

Whenever we find a value that is **not equal** to `val`,

we copy it to position `x`

and move `x` forward.

---

# Visualization

Input

```text
nums = [3,2,2,3]

val = 3
```

Initially

```text
3 2 2 3

x
j
```

Current element

```text
3
```

Equal to `val`

Skip.

---

Move `j`

```text
3 2 2 3

x
  j
```

Current

```text
2
```

Keep it.

Copy

```text
2 2 2 3

  x
  j
```

---

Move Again

```text
2 2 2 3

  x
    j
```

Copy

```text
2 2 2 3

    x
    j
```

---

Last Element

```text
3
```

Ignore.

Return

```text
2
```

---

# Algorithm

```text
Initialize x = 0.

Traverse the array using j.

If nums[j] is not equal to val

    nums[x] = nums[j]

    x++

Return x.
```

---

# Dry Run

## Example

```text
nums = [0,1,2,2,3,0,4,2]

val = 2
```

Initially

```text
x = 0
```

---

### j = 0

```text
0

Keep
```

Array

```text
0
```

x = 1

---

### j = 1

```text
1

Keep
```

Array

```text
0 1
```

x = 2

---

### j = 2

```text
2

Equal to val

Skip
```

---

### j = 3

```text
2

Skip
```

---

### j = 4

```text
3

Keep
```

Array

```text
0 1 3
```

x = 3

---

### j = 5

```text
0

Keep
```

Array

```text
0 1 3 0
```

x = 4

---

### j = 6

```text
4

Keep
```

Array

```text
0 1 3 0 4
```

x = 5

---

### j = 7

```text
2

Skip
```

Return

```text
5
```

---

# Complete Dry Run

| j | nums[j] | Action | x | Valid Array |
|---|----------|--------|---|-------------|
|0|0|Keep|1|0|
|1|1|Keep|2|0 1|
|2|2|Skip|2|0 1|
|3|2|Skip|2|0 1|
|4|3|Keep|3|0 1 3|
|5|0|Keep|4|0 1 3 0|
|6|4|Keep|5|0 1 3 0 4|
|7|2|Skip|5|0 1 3 0 4|

---

# Visual Explanation

![Two Pointer Logic](https://assets.leetcode.com/users/images/a0e264d6-e746-455b-b38f-856521779760_1754246630.85333.png)

---

# Correctness Proof

The pointer `j` visits every element exactly once.

Whenever an element is **not equal** to `val`,

it is copied to the next available position indicated by `x`.

Thus,

all valid elements are placed at the beginning of the array,

and `x` always represents the number of remaining elements.

Therefore,

the algorithm correctly removes every occurrence of `val`.

---

# JavaScript Code (Optimal)

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    let x = 0;

    for (let j = 0; j < nums.length; j++) {

        if (nums[j] !== val) {

            nums[x] = nums[j];

            x++;

        }

    }

    return x;
};
```

---

# Complexity Analysis

## Extra Array

| Metric | Complexity |
|---------|------------|
| Time | **O(n)** |
| Space | **O(n)** |

---

## Two Pointer

| Metric | Complexity |
|---------|------------|
| Time | **O(n)** |
| Space | **O(1)** |

---

# Comparison

| Approach | Time | Space | In-place | Recommended |
|-----------|------|--------|-----------|-------------|
| Extra Array | **O(n)** | **O(n)** | ❌ | Beginner |
| Two Pointer | **O(n)** | **O(1)** | ✅ | ⭐ Best |

---

# Edge Cases

### Case 1

```text
Input

nums = [3,2,2,3]

val = 3

Output

2
```

---

### Case 2

```text
Input

nums = [1]

val = 1

Output

0
```

---

### Case 3

```text
Input

nums = [1]

val = 2

Output

1
```

---

### Case 4

```text
Input

nums = [2,2,2]

val = 2

Output

0
```

---

### Case 5

```text
Input

nums = []

val = 0

Output

0
```

---

# Why the Two Pointer Approach Works

The left pointer (`x`) always indicates the next position where a valid element should be placed.

The right pointer (`j`) scans every element.

Whenever a valid element is found, it is copied to the front of the array.

As a result:

- Every valid element is kept.
- Every occurrence of `val` is ignored.
- No extra memory is required.

This makes the algorithm both simple and highly efficient.

---

# Key Takeaways

- The array **does not need to be sorted**.
- We never actually delete elements; we overwrite unwanted values with valid ones.
- The **Extra Array** approach is easier to understand but uses additional memory.
- The **Two Pointer** approach performs the operation **in-place** using constant extra space.
- This is the **optimal solution** expected in coding interviews and on LeetCode.

---

# Complexity Summary

| Approach | Time Complexity | Space Complexity |
|----------|-----------------|------------------|
| Extra Array | **O(n)** | **O(n)** |
| Two Pointer | **O(n)** | **O(1)** |
````
