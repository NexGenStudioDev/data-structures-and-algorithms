# 496. Next Greater Element I

## Difficulty

**Easy**

---

# Problem Statement

You are given two arrays:

* `nums1`
* `nums2`

where:

* Every element in `nums1` is **unique**.
* Every element in `nums2` is **unique**.
* `nums1` is a **subset** of `nums2`, meaning every value in `nums1` also exists in `nums2`.

Your task is to find the **Next Greater Element (NGE)** for every number in `nums1`.

---

# What is the "Next Greater Element"?

The **Next Greater Element** of a number is the **first number greater than it that appears on its right side** in the same array.

There are two important conditions:

1. It **must be greater** than the current number.
2. It **must be the first greater number** encountered while moving to the right.

If no such number exists, return **-1**.

---

# Understanding with an Example

Consider:

```text
nums2 = [1, 3, 4, 2]
```

Let's find the Next Greater Element for every value.

---

## Number = 1

```text
            Current
               ↓
[1, 3, 4, 2]
```

Look to the right:

```text
3 → 4 → 2
```

The first number greater than **1** is

```text
3
```

Answer

```text
1 → 3
```

---

## Number = 3

```text
               Current
                  ↓
[1, 3, 4, 2]
```

Right side

```text
4 → 2
```

The first greater number is

```text
4
```

Answer

```text
3 → 4
```

---

## Number = 4

```text
                  Current
                     ↓
[1, 3, 4, 2]
```

Right side

```text
2
```

Is 2 greater than 4?

```text
No
```

Nothing remains.

Answer

```text
4 → -1
```

---

## Number = 2

```text
                     Current
                        ↓
[1, 3, 4, 2]
```

There is nothing on the right.

Answer

```text
2 → -1
```

---

# Important Observation

The question is **NOT asking for the largest number on the right**.

It asks for the **first greater number**.

Example

```text
[2,5,8,6]
```

For **2**

Right side

```text
5 8 6
```

Although **8** is larger,

the answer is

```text
5
```

because it is the **first greater element**.

---

# Why Two Arrays?

The searching always happens inside **nums2**.

`nums1` simply tells us **which numbers we need answers for**.

Think of it like this:

```text
nums2 = Complete Database

nums1 = Questions
```

We only answer for numbers present in `nums1`.

---

# Example 1

## Input

```text
nums1 = [4,1,2]

nums2 = [1,3,4,2]
```

---

## Step 1

Find **4** inside `nums2`

```text
[1,3,4,2]
     ↑
```

Look right

```text
2
```

Is 2 greater than 4?

```text
No
```

No more elements.

Answer

```text
-1
```

---

## Step 2

Find **1**

```text
[1,3,4,2]
 ↑
```

Look right

```text
3 → 4 → 2
```

First greater element

```text
3
```

Answer

```text
3
```

---

## Step 3

Find **2**

```text
[1,3,4,2]
       ↑
```

No elements exist after 2.

Answer

```text
-1
```

---

## Final Output

```text
[-1,3,-1]
```

---

# Dry Run

| Number | Position in nums2 | Elements to Right | First Greater | Answer |
| ------ | ----------------- | ----------------- | ------------- | ------ |
| 4      | 2                 | 2                 | None          | -1     |
| 1      | 0                 | 3,4,2             | 3             | 3      |
| 2      | 3                 | None              | None          | -1     |

---

# Example 2

## Input

```text
nums1 = [2,4]

nums2 = [1,2,3,4]
```

---

### Find 2

```text
[1,2,3,4]
   ↑
```

Right side

```text
3 → 4
```

First greater

```text
3
```

Answer

```text
3
```

---

### Find 4

```text
[1,2,3,4]
       ↑
```

Nothing exists after it.

Answer

```text
-1
```

---

## Final Output

```text
[3,-1]
```

---

# Dry Run

| Number | Right Side | First Greater | Answer |
| ------ | ---------- | ------------- | ------ |
| 2      | 3,4        | 3             | 3      |
| 4      | None       | None          | -1     |

---

# Visual Explanation

```text
nums2

[1,3,4,2]

1  →  3

3  →  4

4  →  No Greater

2  →  No Greater
```

---

# Constraints

```text
1 ≤ nums1.length ≤ nums2.length ≤ 1000

0 ≤ nums1[i], nums2[i] ≤ 10⁴

All numbers are unique.

nums1 is a subset of nums2.
```

---

# Key Points to Remember

* Search only in **nums2**.
* For each number in **nums1**, first locate it in `nums2`.
* Move only towards the **right**.
* Return the **first greater element**, not the largest one.
* If no greater element exists, return **-1**.

---

# Interview Questions

### Q1. What is the Next Greater Element?

The first element greater than the current element that appears to its **right** in the array.

---

### Q2. Why is `nums1` a subset of `nums2`?

Because every element in `nums1` is guaranteed to exist in `nums2`, allowing us to locate it and search for its next greater element.

---

### Q3. Why do we search only to the right?

The problem definition specifies that the Next Greater Element must appear **after** the current element in the array.

---

### Q4. What if multiple greater elements exist?

Return the **first greater element** encountered while moving to the right.

Example:

```text
Array

[2,5,8,6]

For 2

Greater elements are

5,8,6

Answer = 5
```

---

### Q5. What if no greater element exists?

Return:

```text
-1
```

Example:

```text
Array

[5,4,3]

Next Greater Element of 5

Answer = -1
```

---
