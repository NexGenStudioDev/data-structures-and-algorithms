# LeetCode 69: Sqrt(x)



Easy

Binary Search



Problem Link: [LeetCode – Sqrt(x)](https://leetcode.com/problems/sqrtx/description)

## 1. Problem Statement

You are given a non-negative integer `x`.

Your task is to find the square root of `x` and return it as an integer.

If the square root is not a whole number, return only the integer part (round down).

In simple words: Find the largest integer whose square is less than or equal to `x`.

## 2. Important Points

- The input number `x` will always be non-negative.
- You must return an integer.
- If the square root is a decimal, remove the decimal part.
- Do not use built-in functions like `Math.sqrt()`, `Math.pow()`, or `** 0.5`.

## 3. Examples

Example 1

```
Input: x = 4
Output: 2
```

Explanation:

- \\(2 \times 2 = 4\\)
- The square root of 4 is exactly 2.

Example 2

```
Input: x = 8
Output: 2
```

Explanation:

- \\(2 \times 2 = 4\\)
- \\(3 \times 3 = 9\\)
- 9 is greater than 8.
- Therefore, return 2.

Example 3

```
Input: x = 30
Output: 5
```

Explanation:

- \\(5 \times 5 = 25\\)
- \\(6 \times 6 = 36\\)
- 36 is greater than 30.
- Therefore, return 5.

Example 4

```
Input: x = 0
Output: 0
```

Explanation: The square root of 0 is 0.

## 4. Constraints

```
0 <= x <= 2^31 - 1
```

## 5. What You Need to Return

Return the integer square root of the given number `x`.

Remember: Always return the largest integer `n` such that:

\\[ n \times n \leq x \\]

---

## 📖 Solutions & Code

- **Step-by-Step Visual Walkthrough:** [Approach 1: Binary Search](./Approch1.md)
- **Implementations:**
  - [JavaScript Solution](./code/solution.js)
  - [Python 3 Solution](./code/solution.py)
