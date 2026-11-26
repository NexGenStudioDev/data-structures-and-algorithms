# 50. Pow(x, n)

**Difficulty:** Medium  
**Topics:** Math, Recursion  
**Problem Link:** [LeetCode 50. Pow(x, n)](https://leetcode.com/problems/powx-n/)

---

## Problem Statement

Given a floating-point number `x` and an integer `n`, implement
a function `myPow(x, n)` that calculates `x` raised to the power
`n`.

In mathematical terms, return:

$$
x^n
$$

Where:

- `x` represents the base.
- `n` represents the exponent.

The base `x` may be a positive number, negative number,
zero, or a floating-point number.

The exponent `n` may be a positive integer, negative
integer, or zero.

Your function must return the correct calculated power
while efficiently handling extremely large exponents.

---

## Examples

### Example 1

**Input:**

```text
x = 2.00000, n = 10
```

**Output:**

```text
1024.00000
```

### Example 2

**Input:**

```text
x = 2.10000, n = 3
```

**Output:**

```text
9.26100
```

### Example 3

**Input:**

```text
x = 2.00000, n = -2
```

**Output:**

```text
0.25000
```

### Example 4

**Input:**

```text
x = 5.00000, n = 0
```

**Output:**

```text
1.00000
```

### Example 5

**Input:**

```text
x = -2.00000, n = 3
```

**Output:**

```text
-8.00000
```

### Example 6

**Input:**

```text
x = -2.00000, n = 4
```

**Output:**

```text
16.00000
```

---

## Constraints

- `-100.0 < x < 100.0`
- `-2³¹ <= n <= 2³¹ - 1`
- `n` is an integer.
- Either `x != 0` or `n > 0`.
- `-10⁴ <= xⁿ <= 10⁴`

---

## Requirements

Your solution must correctly handle:

- Positive exponents.
- Negative exponents.
- Zero exponents.
- Even and odd exponents.
- Positive and negative bases.
- Floating-point numbers.
- Extremely large positive and negative exponents.
- Floating-point precision.

---

## Function Signature

```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {

};
```

---

## Follow-up

Can you solve this problem in O(log |n|) time complexity?