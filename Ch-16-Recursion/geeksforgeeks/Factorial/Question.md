# Factorial of a Number (GeeksforGeeks)

## Problem Statement

Given a positive integer `n`, find the factorial of `n`.

The **factorial** of a non-negative integer `n` is denoted by `n!`. It is the product of all positive integers less than or equal to `n`.

$$n! = n \times (n - 1) \times (n - 2) \times \dots \times 1$$

By definition:
$$0! = 1$$
$$1! = 1$$

---

## Examples

### Example 1:
```text
Input: n = 5
Output: 120
Explanation: 5! = 5 * 4 * 3 * 2 * 1 = 120.
```

### Example 2:
```text
Input: n = 4
Output: 24
Explanation: 4! = 4 * 3 * 2 * 1 = 24.
```

### Example 3:
```text
Input: n = 0
Output: 1
Explanation: 0! is always 1.
```

---

## Constraints

- $0 \le n \le 18$ (fits inside 64-bit integer)
- Expected Time Complexity: $O(n)$
- Expected Auxiliary Space: $O(n)$ (Recursive call stack depth)

