# 932. Sum of First N Natural Numbers — Recursion

The [runnable JavaScript solution](../code/index.js) recursively splits the range in half and adds the two partial sums. It takes O(N) time and O(log N) call-stack space, which supports the documented limit of 10,000. The walkthrough below illustrates linear recursion.

**Difficulty:** Easy  
**Topics:** Recursion, Mathematics, Basic Programming  
**Approach Required:** Recursion Only

---

## Problem Statement

Given a positive integer `N`, write a function that calculates and returns the **sum of the first N natural numbers**.

Natural numbers are the counting numbers that start from `1`.

```text
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...
```

Your task is to calculate the sum of all natural numbers starting from `1` up to `N`.

**Important:** You must try to solve this problem using **recursion**, without using any loops or built-in summation functions.

### What Does the Problem Mean?

Suppose you are given:

```text
N = 5
```

The first five natural numbers are:

```text
1, 2, 3, 4, 5
```

You need to calculate:

```text
1 + 2 + 3 + 4 + 5
```

The final result will be:

```text
15
```

Your function should return the calculated sum as an integer.

---

## Examples

### Example 1

**Input:**

```text
N = 4
```

**Output:**

```text
10
```

**Explanation:**

The first four natural numbers are:

```text
1, 2, 3, 4
```

Their sum is:

```text
1 + 2 + 3 + 4 = 10
```

Therefore, the expected output is `10`.

### Example 2

**Input:**

```text
N = 2
```

**Output:**

```text
3
```

**Explanation:**

The first two natural numbers are:

```text
1, 2
```

Their sum is:

```text
1 + 2 = 3
```

Therefore, the expected output is `3`.

### Example 3

**Input:**

```text
N = 5
```

**Output:**

```text
15
```

**Explanation:**

The first five natural numbers are:

```text
1, 2, 3, 4, 5
```

Their sum is:

```text
1 + 2 + 3 + 4 + 5 = 15
```

### Example 4

**Input:**

```text
N = 1
```

**Output:**

```text
1
```

**Explanation:**

There is only one natural number to consider:

```text
1
```

Therefore, the expected output is `1`.

### Example 5

**Input:**

```text
N = 10
```

**Output:**

```text
55
```

**Explanation:**

The first ten natural numbers are:

```text
1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

Their sum is:

```text
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
```

---

## Constraints

For this practice version, assume:

```text
1 <= N <= 10,000
```

- `N` is a positive integer.
- `N` represents how many natural numbers must be added.
- The function must return an integer.
- You do not need to handle negative numbers.
- You do not need to handle decimal values.

*Note: These are suggested practice constraints, not verified constraints from the original problem.*

---

## Special Requirement — Recursion Only

You must solve this problem using recursion.

Follow these rules:

1. Use a recursive function to calculate the sum.
2. Do not use `for`, `while`, or `do-while` loops.
3. Do not use built-in summation methods.
4. Do not create an array containing numbers from `1` to `N`.
5. Do not use the direct mathematical formula `N * (N + 1) / 2`.
6. Your recursive function must have a valid stopping condition.
7. Return the final sum from the function.

---

## Function Requirements

Implement a function named `sumOfFirstN`.

**JavaScript function signature:**

```javascript
/**
 * @param {number} N
 * @return {number}
 */
function sumOfFirstN(N) {
    // Write your recursive solution here
}
```

### Input

The function receives one integer:

```text
N
```

This integer tells you how many natural numbers must be included in the sum.

### Output

Return a single integer representing the sum of the first `N` natural numbers.

For example:

```text
Input:  N = 6
Output: 21
```

---

## Additional Test Cases

Try testing your recursive function with the following inputs.

| Test Case | Input N | Expected Output |
|---|---|---|
| 1 | 1 | 1 |
| 2 | 2 | 3 |
| 3 | 3 | 6 |
| 4 | 4 | 10 |
| 5 | 5 | 15 |
| 6 | 6 | 21 |
| 7 | 7 | 28 |
| 8 | 10 | 55 |
| 9 | 20 | 210 |
| 10 | 100 | 5050 |

---

## Your Task

Write a recursive function that:

- Accepts an integer `N`.
- Calculates the sum of natural numbers from `1` to `N`.
- Uses recursion instead of loops.
- Handles the smallest valid input.
- Returns the correct sum.

**Challenge:** Solve the problem without using loops, arrays, or the direct mathematical formula.

**Focus Concepts:** Recursive function, base case, recursive calls, return values, and call stack.

---

**Note:** This exercise intentionally contains only the problem statement, examples, constraints, and requirements. No solution, algorithm, hints, or implementation logic has been provided so you can develop the recursive approach independently.