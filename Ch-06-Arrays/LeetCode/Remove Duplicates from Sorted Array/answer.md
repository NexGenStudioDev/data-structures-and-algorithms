# 26. Remove Duplicates from Sorted Array

**Difficulty:** Easy

---

# Problem Statement

Given a **sorted integer array** `nums`, remove the duplicates **in-place** such that each unique element appears only once.

The relative order of the elements should remain the same.

Return the number of unique elements `k`.

After the function returns:

- The first `k` elements of `nums` should contain the unique values.
- The remaining elements are not important.

---

# Example 1

```text
Input

nums = [1,1,2]

Output

2

Modified Array

[1,2,_]
```

---

# Example 2

```text
Input

nums = [0,0,1,1,1,2,2,3,3,4]

Output

5

Modified Array

[0,1,2,3,4,_,_,_,_,_]
```

---

# Key Observation

The array is already **sorted**.

That means:

```text
Equal values always appear together.
```

Example

```text
1 1 1 2 2 3 3 4
```

Since duplicates are adjacent, we only need to compare the current element with the last unique element.

This observation allows us to solve the problem efficiently.

---

# Approach 1 — Brute Force (Using Extra Array)

## Intuition

The simplest solution is to create a new array.

Traverse the original array.

Whenever we encounter a new unique number, add it to the new array.

Finally, copy all unique elements back into the original array.

Although simple, this approach uses extra memory.

---

## Algorithm

```text
Create an empty array unique.

Traverse nums.

If current number is different from the previous one,
add it to unique.

Copy all elements from unique back into nums.

Return unique.length.
```

---

## Dry Run

```text
nums = [1,1,2,2,3]
```

Initially

```text
unique = []
```

---

Current

```text
1
```

Add

```text
[1]
```

---

Current

```text
1
```

Duplicate

Ignore.

---

Current

```text
2
```

Add

```text
[1,2]
```

---

Current

```text
2
```

Duplicate

Ignore.

---

Current

```text
3
```

Add

```text
[1,2,3]
```

Copy back

```text
nums

[1,2,3,2,3]
```

Return

```text
3
```

---

## JavaScript Code

```javascript
var removeDuplicates = function(nums) {

    if (nums.length === 0)
        return 0;

    let unique = [];

    unique.push(nums[0]);

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] !== nums[i - 1]) {

            unique.push(nums[i]);

        }

    }

    for (let i = 0; i < unique.length; i++) {

        nums[i] = unique[i];

    }

    return unique.length;
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

# Approach 2 — Two Pointers (Optimal)

## Intuition

Since the array is already sorted,

duplicates always appear together.

Instead of creating another array,

we overwrite duplicates with the next unique element.

We use two pointers.

### Pointer x

Points to the **last unique element**.

### Pointer j

Scans every element in the array.

Whenever a new unique value is found,

move `x` forward and place the unique value there.

---

# Visualization

Initial Array

```text
1 1 2 2 3 4

x
j
```

---

Move `j`

```text
1 1 2 2 3 4

x
  j
```

Duplicate

Nothing happens.

---

Move Again

```text
1 1 2 2 3 4

x
    j
```

New unique value.

Move `x`.

```text
1 2 2 2 3 4

  x
    j
```

---

Continue

```text
1 2 3 4 ...

Unique values always stay before x.
```

---

# Algorithm

```text
1. Initialize x = 0.

2. Traverse array using j.

3. If nums[x] < nums[j]

      x++

      nums[x] = nums[j]

4. Return x + 1.
```


![Logic.png](https://assets.leetcode.com/users/images/c290b22f-9037-4ff0-950a-55e175aeef36_1754243398.1233473.png)


![Screenshot at 2025-08-03 23-01-00.png](https://assets.leetcode.com/users/images/3ea172fb-82f4-48e6-bd6a-0318998135b7_1754243413.8433688.png)



---

# Why `nums[x] < nums[j]`?

Since the array is sorted,

```text
nums[x]

always stores

the last unique element.
```

Whenever

```text
nums[j]
```

is larger,

it must be a completely new unique value.

Example

```text
1 1 1 2 2 3
```

Current

```text
nums[x] = 1
```

Current scanning

```text
2
```

Since

```text
1 < 2
```

Store

```text
2
```

---

# Dry Run

## Example

```text
nums = [0,0,1,1,1,2,2,3,3,4]
```

Initially

```text
x = 0

j = 0
```

---

### j = 0

```text
0

0 < 0 ?

No
```

---

### j = 1

```text
0

0 < 0 ?

No
```

---

### j = 2

```text
1

0 < 1 ✔
```

Move

```text
x = 1

nums[1] = 1
```

Array

```text
0 1 1 1 1 2 2 3 3 4
```

---

### j = 3

```text
1

1 < 1 ?

No
```

---

### j = 5

```text
2

1 < 2 ✔
```

Move

```text
x = 2

nums[2] = 2
```

Array

```text
0 1 2 1 1 2 2 3 3 4
```

---

Continue

Eventually

```text
0 1 2 3 4
```

Return

```text
5
```

---

# Complete Dry Run

```text
Input

0 0 1 1 1 2 2 3 3 4
```

| j | nums[j] | x | Action | Array (Unique Part) |
|---|----------|---|--------|---------------------|
|0|0|0|Skip|0|
|1|0|0|Skip|0|
|2|1|1|Store|0 1|
|3|1|1|Skip|0 1|
|4|1|1|Skip|0 1|
|5|2|2|Store|0 1 2|
|6|2|2|Skip|0 1 2|
|7|3|3|Store|0 1 2 3|
|8|3|3|Skip|0 1 2 3|
|9|4|4|Store|0 1 2 3 4|

Return

```text
5
```

---

# Correctness Proof

The pointer `x` always points to the last unique element.

The pointer `j` scans every element.

Whenever

```text
nums[j] > nums[x]
```

a new unique value has been found.

We place it immediately after the previous unique value.

Thus,

after processing the complete array,

the first

```text
x + 1
```

positions contain every unique element exactly once.

Therefore,

the algorithm is correct.

---

# JavaScript Code (Optimal)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let x = 0;

    for (let j = 0; j < nums.length; j++) {

        if (nums[x] < nums[j]) {

            x = x + 1;

            nums[x] = nums[j];

        }

    }

    return x + 1;
};
```

---

# Complexity Analysis

## Brute Force

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

[1]

Output

1
```

---

### Case 2

```text
Input

[1,1]

Output

1
```

---

### Case 3

```text
Input

[1,2]

Output

2
```

---

### Case 4

```text
Input

[1,1,1,1]

Output

1
```

---

### Case 5

```text
Input

[1,2,3,4]

Output

4
```

---

# Why the Two Pointer Approach Works

The array is sorted.

Therefore,

```text
Duplicate values are consecutive.
```

Instead of deleting duplicates,

we overwrite them with the next unique value.

The left pointer (`x`) always represents the end of the unique portion of the array, while the right pointer (`j`) explores the remaining elements.

This allows us to solve the problem in a **single pass** without using any extra memory.

---

# Key Takeaways

- The array is **sorted**, so duplicates are adjacent.
- We never actually remove elements; we overwrite duplicate positions with new unique values.
- The **Extra Array** approach is easy to understand but requires additional memory.
- The **Two Pointer** approach is optimal because it performs the operation **in-place**.
- The optimal solution runs in **O(n)** time and **O(1)** extra space, making it the preferred interview solution.

---

# Complexity Summary

| Approach | Time Complexity | Space Complexity |
|----------|-----------------|------------------|
| Extra Array | **O(n)** | **O(n)** |
| Two Pointer | **O(n)** | **O(1)** |