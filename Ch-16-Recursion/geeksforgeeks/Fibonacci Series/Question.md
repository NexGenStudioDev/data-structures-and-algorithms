# First N Fibonacci Numbers Using Recursion

**Difficulty:** Basic  
**Accuracy:** 29.92%  
**Submissions:** 292K+  
**Points:** 1

## Problem Statement

Given a positive integer `n`, return an array containing the **first `n` Fibonacci numbers** in their correct order.

The Fibonacci sequence is a series of numbers in which each number is calculated by adding the previous two numbers.

The sequence starts with:

- First Fibonacci number = `0`
- Second Fibonacci number = `1`
- Every subsequent number is the sum of the previous two numbers.

### Fibonacci Sequence

```text
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

### Mathematical Definition

The Fibonacci sequence is defined as:

\[
F(n) =
\begin{cases}
0 & \text{if } n = 0 \\
1 & \text{if } n = 1 \\
F(n-1) + F(n-2) & \text{if } n \geq 2
\end{cases}
\]

Where:
- `F(n)` represents the Fibonacci number at position `n`.
- `F(n-1)` represents the previous Fibonacci number.
- `F(n-2)` represents the second previous Fibonacci number.

## Examples

### Example 1

**Input:**
```text
n = 5
```

**Output:**
```text
[0, 1, 1, 2, 3]
```

**Explanation:**

The first 5 Fibonacci numbers are:

| Position | Fibonacci Number | Calculation |
|---|---:|---|
| 1 | 0 | First number |
| 2 | 1 | Second number |
| 3 | 1 | 0 + 1 |
| 4 | 2 | 1 + 1 |
| 5 | 3 | 1 + 2 |

Therefore, the resulting array is:

```text
[0, 1, 1, 2, 3]
```

### Example 2

**Input:**
```text
n = 7
```

**Output:**
```text
[0, 1, 1, 2, 3, 5, 8]
```

**Explanation:**

The first 7 Fibonacci numbers are:

| Position | Fibonacci Number | Calculation |
|---|---:|---|
| 1 | 0 | First number |
| 2 | 1 | Second number |
| 3 | 1 | 0 + 1 |
| 4 | 2 | 1 + 1 |
| 5 | 3 | 1 + 2 |
| 6 | 5 | 2 + 3 |
| 7 | 8 | 3 + 5 |

Therefore, the resulting array is:

```text
[0, 1, 1, 2, 3, 5, 8]
```

### Example 3

**Input:**
```text
n = 2
```

**Output:**
```text
[0, 1]
```

**Explanation:**

The first two Fibonacci numbers are `0` and `1`.

Therefore, the resulting array is:

```text
[0, 1]
```

## Constraints

```text
1 ≤ n ≤ 30
```

## Expected Task

- Given an integer `n`, generate the first `n` Fibonacci numbers.
- Return the Fibonacci numbers in an array.
- The sequence must start with `0` and `1`.
- Each subsequent number must be the sum of the previous two numbers.
- Solve the problem using the **recursion approach**.