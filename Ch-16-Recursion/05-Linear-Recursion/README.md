# Linear Recursion

## Goal

Understand what linear recursion is, how recursive calls work, how to
dry-run them, and how to solve common patterns using it.

## 1. What Is Linear Recursion?

**Linear recursion** is recursion in which a function makes **at most
one recursive call in each execution**.

A recursive function calls itself to solve a smaller version of the same
problem.

Example:

``` javascript
function countDown(n) {
  if (n === 0) return; // Base case

  console.log(n);
  countDown(n - 1);   // One recursive call
}

countDown(3);
```

Output:

``` text
3
2
1
```

Each call makes only one next recursive call, so the calls form a chain.

``` text
countDown(3)
    |
countDown(2)
    |
countDown(1)
    |
countDown(0)  <-- stops
```

### The two essential parts

1.  **Base case:** the condition that stops recursion.
2.  **Recursive case:** the part that calls the same function with a
    smaller or simpler input.

Without a base case, recursion may continue until the program runs out
of call-stack space.

> Remember: linear recursion means **at most one recursive call per
> function execution**, not necessarily exactly one. A base case makes
> zero recursive calls.

## 2. Linear Recursion vs. Tree Recursion

The key difference is the number of recursive calls made by one function
execution.

**Linear recursion --- one recursive call:**

``` javascript
function example(n) {
  if (n === 0) return;
  example(n - 1);
}
```

**Tree recursion --- more than one recursive call:**

``` javascript
function example(n) {
  if (n <= 0) return;
  example(n - 1);
  example(n - 2);
}
```

  Point                           Linear recursion           Tree recursion
  ------------------------------- -------------------------- ---------------------------
  Recursive calls per execution   At most one                Two or more may occur
  Call structure                  Chain                      Branching tree
  Example                         Factorial, counting down   Basic recursive Fibonacci

Do not confuse the **shape of recursion** with its time complexity.
Linear recursion often takes `O(n)` time, but binary search makes one
recursive call while reducing the input by half, so it takes `O(log n)`
time.

## 3. How a Recursive Call Works

Every function call gets its own **stack frame**. The frame stores
information needed to continue that call, such as its parameters and
local state.

Consider:

``` javascript
function printDown(n) {
  if (n === 0) return;

  console.log(n);
  printDown(n - 1);
}

printDown(3);
```

The calls happen in this order:

``` text
printDown(3)
  printDown(2)
    printDown(1)
      printDown(0)  <-- base case
```

When `printDown(0)` returns, the earlier calls finish and return in
reverse order.

### Two phases

-   **Calling / going down:** recursive calls are made until the base
    case is reached.
-   **Returning / coming back:** calls finish in reverse order.

If work is done **before** the recursive call, it happens while going
down. If work is done **after** the recursive call, it happens while
coming back.

## 4. Head Recursion and Tail Recursion

These terms describe **where the recursive call appears** in relation to
the remaining work.

### Head recursion

The recursive call happens before the main operation.

``` javascript
function printUp(n) {
  if (n === 0) return;

  printUp(n - 1);
  console.log(n);
}

printUp(3);
```

Output:

``` text
1
2
3
```

The function first reaches `printUp(0)`. Then the pending
`console.log()` statements run while calls return.

### Tail recursion

The recursive call is the last operation performed by the function.

``` javascript
function printDown(n) {
  if (n === 0) return;

  console.log(n);
  printDown(n - 1);
}
```

Here, nothing needs to be done by the current call after the recursive
call returns.

**Important:** tail recursion does not automatically mean constant
memory usage in JavaScript. Do not assume the JavaScript runtime will
optimize every tail-recursive function.

## 5. The Most Important Pattern: Factorial

**Problem:** Given a non-negative integer `n`, return its factorial.

-   `0! = 1`
-   `1! = 1`
-   `n! = n × (n - 1) × (n - 2) × ... × 1`

For example, `4! = 4 × 3 × 2 × 1 = 24`.

Problem link: [GeeksforGeeks ---
Factorial](https://www.geeksforgeeks.org/problems/factorial5739/1)

### Think recursively

A factorial can be written using a smaller factorial:

\[ n! = n `\times `{=tex}(n-1)! \]

So:

-   `factorial(4) = 4 * factorial(3)`
-   `factorial(3) = 3 * factorial(2)`
-   `factorial(2) = 2 * factorial(1)`
-   `factorial(1) = 1 * factorial(0)`
-   `factorial(0) = 1` --- base case

### JavaScript solution

``` javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
```

### Dry run: `factorial(4)`

**Going down --- calls are waiting for their answers:**

``` text
factorial(4) = 4 * factorial(3)
factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1
```

**Coming back --- calculate the answers:**

``` text
factorial(1) = 1
factorial(2) = 2 * 1  = 2
factorial(3) = 3 * 2  = 6
factorial(4) = 4 * 6  = 24
```

Answer: `24`.

### Complexity

-   **Time:** `O(n)` --- one call is made for each value down to the
    base case.
-   **Auxiliary space:** `O(n)` --- up to `n` recursive calls can remain
    on the call stack.

The problem expects a non-negative integer. The factorial grows very
quickly, so follow the constraints given by the problem platform.

## 6. Common Linear Recursion Patterns

### A. Print `N` to `1`

Do the printing before the recursive call.

``` javascript
function printNTo1(n) {
  if (n === 0) return;

  console.log(n);
  printNTo1(n - 1);
}
```

For `n = 3`, output is `3 2 1`.

### B. Print `1` to `N`

Make the recursive call before printing.

``` javascript
function print1ToN(n) {
  if (n === 0) return;

  print1ToN(n - 1);
  console.log(n);
}
```

For `n = 3`, output is `1 2 3`.

**Key lesson:** moving the operation before or after the recursive call
can change the output order.

*Complete Problem & Solution Walkthrough:* [GeeksforGeeks — Print 1 to N Without Using Loops](./geeksforgeeks/1%20to%20n%20Without%20Loop/)

### C. Sum from `1` to `N`

Use the relationship:

\[ sum(n) = n + sum(n-1) \]

Base case: `sum(0) = 0`.

``` javascript
function sumToN(n) {
  if (n === 0) return 0;

  return n + sumToN(n - 1);
}
```

For `n = 4`:

``` text
sumToN(4) = 4 + sumToN(3)
           = 4 + 3 + sumToN(2)
           = 4 + 3 + 2 + sumToN(1)
           = 4 + 3 + 2 + 1 + sumToN(0)
           = 10
```

Time: `O(n)`. Auxiliary space: `O(n)`.

## 7. How to Solve a Linear Recursion Problem

Use this checklist each time:

1.  **Define the function:** What should `solve(n)` return or do?
2.  **Find the base case:** What is the smallest input whose answer is
    already known?
3.  **Reduce the problem:** How can the current problem use a smaller
    input, such as `n - 1`?
4.  **Make one recursive call:** Ensure the input moves toward the base
    case.
5.  **Combine the result if needed:** For factorial, multiply `n` by the
    smaller factorial.
6.  **Dry-run a small input:** Trace both the calls and the returns.
7.  **Analyze complexity:** Count calls for time and maximum active
    calls for stack space.

## 8. Complexity Rules

If each call reduces `n` by one until zero:

-   Number of calls: about `n + 1`
-   Time complexity: usually `O(n)` if each call does constant work
-   Auxiliary call-stack space: `O(n)`

If each call halves the input, as in recursive binary search:

-   Number of calls: `O(log n)`
-   Call-stack space: `O(log n)`

The complexity also depends on the work done in each call. Always
inspect both the recursive-call pattern and the non-recursive work.

## 9. Common Mistakes

-   **Missing base case:** recursion never reaches a stopping condition.
-   **Wrong base case:** an input such as `0` may produce an incorrect
    answer.
-   **No progress toward the base case:** calling `solve(n)` again with
    the same `n` can cause infinite recursion.
-   **Wrong return:** writing `solve(n - 1)` without returning or using
    its result may lose the answer.
-   **Confusing call order with output order:** code before the
    recursive call runs on the way down; code after it runs on the way
    back.
-   **Ignoring stack space:** recursive calls use memory and deep
    recursion can overflow the call stack.

## 10. Interview Questions

**Q1. What is linear recursion?**\
A function structure in which each execution makes at most one recursive
call.

**Q2. What is a base case?**\
The stopping condition that returns an answer without making another
recursive call.

**Q3. What happens when a recursive call returns?**\
Execution resumes in the waiting caller immediately after its recursive
call.

**Q4. What is the difference between head and tail recursion?**\
In head recursion, the recursive call happens before the remaining work.
In tail recursion, it is the last operation.

**Q5. Why does factorial use `O(n)` stack space?**\
The calls `factorial(n)`, `factorial(n - 1)`, and so on remain active
until the base case is reached.

**Q6. Is every recursive algorithm `O(n)`?**\
No. Complexity depends on how the input shrinks, how many recursive
calls are made, and how much work each call performs.

## Quick Revision

-   Linear recursion: at most one recursive call per execution.
-   Base case: stops recursion.
-   Recursive case: solves a smaller version of the problem.
-   Before the call: work happens while going down.
-   After the call: work happens while returning.
-   Factorial: `n! = n * (n - 1)!`, with `0! = 1`.
-   If the input decreases by one, time and stack space are commonly
    `O(n)`.
-   Always dry-run a small input and check that each call moves toward
    the base case.
