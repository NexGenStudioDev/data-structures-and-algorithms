# [**2149. Rearrange Array Elements by Sign**](https://leetcode.com/problems/rearrange-array-elements-by-sign/?utm_source=chatgpt.com)

**Difficulty:** Medium

**Topics:** Array, Two Pointers, Simulation

## **Problem Statement**

You are given a **0-indexed integer array** `nums` of even length consisting of an equal number of positive and negative integers.

Rearrange the elements of `nums` such that the resulting array satisfies the following conditions:

1. Every **consecutive pair** of integers must have opposite signs.
2. For all integers with the same sign, their original **relative order** in `nums` must be preserved.
3. The rearranged array must begin with a **positive integer**.

Return the modified array after rearranging the elements to satisfy all the above conditions.

**Note:** It is not required to perform the modifications in-place.

## **Examples**

### **Example 1**

**Input:**

```
nums = [3, 1, -2, -5, 2, -4]
```

**Output:**

```
[3, -2, 1, -5, 2, -4]
```

**Explanation:**

The positive integers in `nums` are `[3, 1, 2]`.

The negative integers in `nums` are `[-2, -5, -4]`.

The rearranged array `[3, -2, 1, -5, 2, -4]` satisfies all three conditions.

Other rearrangements are invalid:

- `[1, -2, 2, -5, 3, -4]` — The relative order of positive integers is not preserved.
- `[3, 1, 2, -2, -5, -4]` — Consecutive elements do not have opposite signs.
- `[-2, 3, -5, 1, -4, 2]` — The array begins with a negative integer.

### **Example 2**

**Input:**

```
nums = [-1, 1]
```

**Output:**

```
[1, -1]
```

**Explanation:**

`1` is the only positive integer, and `-1` is the only negative integer.

The rearranged array must begin with a positive integer. Therefore, the resulting array is `[1, -1]`.

## **Constraints**

- `2 <= nums.length <= 2 * 10^5`
- `nums.length` is **even**.
- `1 <= |nums[i]| <= 10^5`
- `nums` consists of an **equal number of positive and negative integers**.