# Power Using Recursion

Solved

Basic

Recursion

Platform: GeeksforGeeks\
Problem Link: [Power Using Recursion – GeeksforGeeks](https://www.geeksforgeeks.org/problems/power-using-recursion/1)

## 1. Problem Statement

You are given two numbers, `n` and `p`. Your task is to find the value of `n` raised to the power `p`.

In mathematics, this is represented as:

\\[ n^p \\]

Here:

- `n` represents the base, which is the number that needs to be multiplied.
- `p` represents the exponent, which tells us how many times the base is used in multiplication.

You need to calculate the power of a number using the concept of recursion.

### What does finding the power mean?

Finding the power of a number means multiplying that number by itself repeatedly.

For example:

\\[ 2^3 = 2 \times 2 \times 2 = 8 \\]

Similarly:

\\[ 5^4 = 5 \times 5 \times 5 \times 5 = 625 \\]

Your task is to calculate the final result for the given values of `n` and `p`.

## 2. Examples

Example 1:

```
Input:
n = 9, p = 9

Output:
387420489
```

Explanation:

We are given:

- Base (`n`) = 9
- Power (`p`) = 9

We need to multiply 9 by itself 9 times.

\\[ 9^9 = 9 \times 9 \times 9 \times 9 \times 9 \\]

\\[ \times 9 \times 9 \times 9 \times 9 \\]

The final result is:

`387420489`

Example 2:

```
Input:
n = 2, p = 9

Output:
512
```

Explanation:

We are given:

- Base (`n`) = 2
- Power (`p`) = 9

We need to multiply 2 by itself 9 times.

\\[ 2^9 = 2 \times 2 \times 2 \times 2 \times 2 \\]

\\[ \times 2 \times 2 \times 2 \times 2 \\]

The final result is:

`512`

Example 3:

```
Input:
n = 5, p = 0

Output:
1
```

Explanation:

We are given:

- Base (`n`) = 5
- Power (`p`) = 0

According to the mathematical rule, any non-zero number raised to the power of zero is always 1.

\\[ 5^0 = 1 \\]

Therefore, the output is `1`.

## 3. Understanding the Input

The problem provides two values:

| Variable | Meaning           | Example |
| -------- | ----------------- | ------- |
| `n`      | Base number       | 2       |
| `p`      | Exponent or power | 3       |

Consider the following input:

```
n = 2
p = 3
```

It means:

- Take the number 2.
- Multiply it by itself 3 times.
- Return the final result.

\\[ 2 \times 2 \times 2 = 8 \\]

## 4. Important Mathematical Rules

Before solving this problem, understand these mathematical rules:

| Expression | Result        | Explanation                                 |
| ---------- | ------------- | ------------------------------------------- |
| \\(n^0\\)  | 1             | Any non-zero number raised to power 0 is 1. |
| \\(n^1\\)  | n             | Any number raised to power 1 is itself.     |
| \\(n^2\\)  | n × n         | Number multiplied by itself twice.          |
| \\(n^3\\)  | n × n × n     | Number multiplied by itself three times.    |
| \\(n^4\\)  | n × n × n × n | Number multiplied by itself four times.     |

## 5. Understanding the Concept of Recursion

The problem specifically asks you to use recursion.

Recursion is a programming technique in which a function calls itself to solve a smaller version of the same problem.

For this problem, think about how you can break a bigger power calculation into smaller calculations.

For example:

\\[ 2^4 = 2 \times 2^3 \\]

Similarly:

\\[ 2^3 = 2 \times 2^2 \\]

\\[ 2^2 = 2 \times 2^1 \\]

\\[ 2^1 = 2 \times 2^0 \\]

And:

\\[ 2^0 = 1 \\]

Each calculation reduces the exponent until it reaches zero.

## 6. Constraints

The problem provides the following constraints:

\\[ 1 \leq n \leq 10 \\]

\\[ 0 \leq p \leq 9 \\]

This means:

- The base number `n` must be between 1 and 10.
- The exponent `p` must be between 0 and 9.
- The exponent can be zero.
- The input values are within a small range.

## 7. What You Need to Do

Your task is to:

1. Accept two numbers, `n` and `p`.
2. Understand that `n` is the base and `p` is the exponent.
3. Calculate the value of \\(n^p\\).
4. Use recursion to perform the calculation.
5. Return the final result.

Important: This problem is intended to test your understanding of recursion. Try solving it without using built-in power methods or the exponentiation operator.

## 8. Practice Test Cases

Try understanding these inputs and predicting their outputs before writing your code.

| Test Case | Input (n, p) | Expected Output |
| --------- | ------------ | --------------- |
| 1         | (2, 3)       | 8               |
| 2         | (3, 2)       | 9               |
| 3         | (4, 3)       | 64              |
| 4         | (5, 0)       | 1               |
| 5         | (7, 1)       | 7               |
| 6         | (10, 2)      | 100             |
| 7         | (9, 9)       | 387420489       |

## 9. Questions to Think About Before Coding

1. What is recursion?
2. What is the difference between a base case and a recursive case?
3. What happens when the exponent becomes zero?
4. How can you reduce the exponent in every recursive call?
5. Why does the function need a stopping condition?
6. How will the recursive function return the final multiplication result?

Your goal: Understand the problem, identify the base case, identify the recursive relationship, and implement the solution independently.

---

## 📖 Solutions & Code

- **Step-by-Step Walkthrough:** [Solution Guide (Call Stack & Dry Run)](./Solution.md)
- **Implementations:**
  - [JavaScript Solution](./code/index.js)
  - [Python 3 Solution](./code/solution.py)
