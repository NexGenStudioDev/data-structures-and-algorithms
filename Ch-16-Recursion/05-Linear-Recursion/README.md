# Linear Recursion: The Complete Guide

> **Goal:** Master Linear Recursion from the ground up—understand its definition, internal call stack mechanics, winding vs unwinding phases, tail recursion vs head recursion, complexity analysis, and classic implementation patterns.

---

## 📌 Table of Contents
1. [What is Linear Recursion?](#1-what-is-linear-recursion)
2. [Linear Recursion vs Tree (Branching) Recursion](#2-linear-recursion-vs-tree-branching-recursion)
3. [The Universal Anatomy of Linear Recursion](#3-the-universal-anatomy-of-linear-recursion)
4. [Call Stack Lifecycle: Winding vs Unwinding](#4-call-stack-lifecycle-winding-vs-unwinding)
5. [Head Recursion vs Tail Recursion](#5-head-recursion-vs-tail-recursion)
6. [Tail Call Optimization (TCO)](#6-tail-call-optimization-tco)
7. [The 4 Classic Linear Recursion Archetypes](#7-the-4-classic-linear-recursion-archetypes)
8. [Comprehensive Code Walkthroughs & Dry Runs](#8-comprehensive-code-walkthroughs--dry-runs)
   - [Walkthrough 1: Factorial of N](#walkthrough-1-factorial-of-n)
   - [Walkthrough 2: Print 1 to N vs Print N to 1](#walkthrough-2-print-1-to-n-vs-print-n-to-1)
   - [Walkthrough 3: Sum of Array Elements](#walkthrough-3-sum-of-array-elements)
9. [Time & Space Complexity Analysis](#9-time--space-complexity-analysis)
10. [Converting Linear Recursion to Iteration](#10-converting-linear-recursion-to-iteration)
11. [Practice Problem Roadmap](#11-practice-problem-roadmap)
12. [Golden Rules to Remember](#12-golden-rules-to-remember)

---

# 1. What is Linear Recursion?

A recursive function is classified as **Linear Recursive** if it makes at most **one recursive call** during any single execution path of the function.

> 💡 **Core Definition:**  
> **Linear Recursion = Exactly ONE recursive call per invocation.**

Because there is only one recursive call per step, the sequence of pending function calls forms a **straight line (a linear chain)** in memory, rather than a branching tree.

### Real-Life Analogy: The Russian Matryoshka Doll
Imagine opening a set of Russian nesting dolls:
1. You open Doll #4 $\rightarrow$ inside is Doll #3.
2. You open Doll #3 $\rightarrow$ inside is Doll #2.
3. You open Doll #2 $\rightarrow$ inside is Doll #1.
4. You open Doll #1 $\rightarrow$ it is solid wood (**Base Case!**).
5. Now you close them back up, one by one, in reverse order.

There was only **one** doll inside each doll. That is linear recursion.

---

# 2. Linear Recursion vs Tree (Branching) Recursion

Understanding what linear recursion **is not** helps solidify what it **is**:

### Linear Recursion (Single Line)
```text
factorial(4)
    └── factorial(3)
            └── factorial(2)
                    └── factorial(1)  [Base Case]
```
- Each function frame waits for **one** child.
- Call Stack Depth: $O(N)$
- Total Function Calls: $O(N)$

### Tree / Branching Recursion (Multiple Calls)
```text
                    fibonacci(4)
                   /            \
          fibonacci(3)        fibonacci(2)
          /         \          /        \
    fibonacci(2) fibonacci(1) fib(1)    fib(0)
```
- Each function frame spawns **two or more** children.
- Call Stack Depth: $O(N)$
- Total Function Calls: $O(2^N)$ (Exponential explosion without memoization!)

| Feature | Linear Recursion | Tree / Branching Recursion |
|---|---|---|
| **Recursive Calls per Frame** | At most **1** call | **2 or more** calls |
| **Call Graph Shape** | Straight line (list) | Hierarchical tree |
| **Total Calls Made** | $O(N)$ or $O(\log N)$ | $O(2^N)$ or $O(K^N)$ |
| **Stack Memory** | $O(N)$ or $O(\log N)$ | $O(\text{Tree Height})$ |
| **Examples** | Factorial, Linear Search, Binary Search, String Reverse | Fibonacci, Tree Traversals, Merge Sort, Subsets |

---

# 3. The Universal Anatomy of Linear Recursion

Every linear recursive algorithm consists of **four distinct stages**:

```text
                  ┌──────────────────────────────┐
                  │ 1. Base Case (Stop Condition)│
                  └──────────────┬───────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────┐
                  │ 2. Pre-Processing Work       │
                  │    (Before Recursive Call)   │
                  └──────────────┬───────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────┐
                  │ 3. The Single Recursive Call │
                  │    solve(smallerInput)       │
                  └──────────────┬───────────────┘
                                 │
                                 ▼
                  ┌──────────────────────────────┐
                  │ 4. Post-Processing Work      │
                  │    (After Recursive Call)    │
                  └──────────────────────────────┘
```

### Generic Pseudocode Template:

```javascript
function linearRecursiveFunction(input) {
    // 1. BASE CASE: Prevents infinite recursion
    if (isBaseCase(input)) {
        return baseAnswer;
    }

    // 2. PRE-PROCESSING: Work done on the way DOWN (winding)
    doWorkBefore(input);

    // 3. THE SINGLE RECURSIVE CALL: Must progress toward base case
    let childResult = linearRecursiveFunction(smallerInput);

    // 4. POST-PROCESSING: Work done on the way UP (unwinding)
    let finalAnswer = doWorkAfter(input, childResult);

    return finalAnswer;
}
```

---

# 4. Call Stack Lifecycle: Winding vs Unwinding

The execution of linear recursion has two symmetrical phases:

```text
WINDING PHASE (Going Down)                 UNWINDING PHASE (Coming Up)
==========================                 ===========================
Push factorial(4) onto stack               Pop factorial(1) -> returns 1
  Push factorial(3) onto stack               Pop factorial(2) -> returns 2 * 1 = 2
    Push factorial(2) onto stack               Pop factorial(3) -> returns 3 * 2 = 6
      Push factorial(1) onto stack               Pop factorial(4) -> returns 4 * 6 = 24
      (Base Case Reached!)
```

### Visualizing the Stack Growth & Shrinkage

```text
|               |       |               |       |               |       | factorial(1)  |  <-- Deepest Point
|               |       |               |       | factorial(2)  |       | factorial(2)  |      (Base Case)
|               |       | factorial(3)  |       | factorial(3)  |       | factorial(3)  |
| factorial(4)  |  -->  | factorial(4)  |  -->  | factorial(4)  |  -->  | factorial(4)  |
+---------------+       +---------------+       +---------------+       +---------------+
     Step 1                  Step 2                  Step 3                  Step 4
 (Stack depth 1)         (Stack depth 2)         (Stack depth 3)         (Stack depth 4)

                                        │
                                        ▼  Unwinding starts:

|               |       |               |       |               |       |               |
| factorial(2)  |       |               |       |               |       |               |
| factorial(3)  |       | factorial(3)  |       |               |       |               |
| factorial(4)  |  -->  | factorial(4)  |  -->  | factorial(4)  |  -->  |    [EMPTY]    |  --> Final Result: 24
+---------------+       +---------------+       +---------------+       +---------------+
     Step 5                  Step 6                  Step 7                  Step 8
 (returns 1 to f(2))     (returns 2 to f(3))     (returns 6 to f(4))     (returns 24 to caller)
```

- **Winding Phase:** Subproblems are created and stacked. Memory consumption increases.
- **Base Case:** Execution reaches bottom; no new frames are pushed.
- **Unwinding Phase:** Values return up the stack; frames are popped and destroyed. Memory is freed.

---

# 5. Head Recursion vs Tail Recursion

Linear recursion comes in two fundamental flavors based on **where the work is performed**:

```text
Linear Recursion
  ├── Head Recursion (Work done AFTER the recursive call)
  └── Tail Recursion (Work done BEFORE or DURING the recursive call)
```

### Side-by-Side Comparison

| Feature | Head Recursion | Tail Recursion |
|---|---|---|
| **Recursive Call Location** | At the beginning of the function body | At the very end of the function body |
| **When Work Happens** | During the **Unwinding Phase** (on the way back) | During the **Winding Phase** (on the way down) |
| **Pending Operations?** | **Yes** — calculation waits for child's result | **No** — returns child's result directly |
| **Accumulator Needed?** | Rarely | Frequently (stores running total) |
| **TCO Optimizable?** | No | **Yes** (converts to $O(1)$ space) |

---

## Example 1: Head Recursion (Print 1 to N)

In Head Recursion, we make the recursive call **first**, and do the print **after**:

```javascript
function print1ToN(n) {
    if (n === 0) return; // Base Case

    print1ToN(n - 1);    // 1. Recursive call FIRST (Head)

    console.log(n);      // 2. Work happens on the way BACK!
}

print1ToN(3);
// Output:
// 1
// 2
// 3
```

**Why does this print 1, 2, 3 instead of 3, 2, 1?**
Because `console.log(3)` is paused on the stack waiting for `print1ToN(2)`.  
`console.log(2)` is paused waiting for `print1ToN(1)`.  
`print1ToN(1)` prints `1` first when unwinding!

---

## Example 2: Tail Recursion (Print N to 1)

In Tail Recursion, we do the print **first**, and the recursive call is the **very last thing**:

```javascript
function printNTo1(n) {
    if (n === 0) return; // Base Case

    console.log(n);      // 1. Work happens on the way DOWN!

    printNTo1(n - 1);    // 2. Recursive call is the LAST operation (Tail)
}

printNTo1(3);
// Output:
// 3
// 2
// 1
```

---

# 6. Tail Call Optimization (TCO)

Notice the difference in non-tail vs tail-recursive Factorial:

### Non-Tail Factorial (Needs Stack Space):
```javascript
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1); // PENDING OPERATION: must wait for result to multiply by n!
}
```
Because the current frame must stay in memory to perform `n * ...`, stack space is strictly **$O(N)$**.

### Tail-Recursive Factorial (TCO Eligible):
We pass an **accumulator** holding the running product:

```javascript
function factorialTail(n, accumulator = 1) {
    if (n <= 1) return accumulator;
    return factorialTail(n - 1, n * accumulator); // NOTHING pending! Pure tail call.
}
```

### How the Engine Optimizes Tail Calls:
Since the caller function has zero remaining work after `factorialTail` returns, the engine doesn't need to retain the caller's stack frame!  
It simply **reuses the current stack frame** by updating the arguments:

```text
[Frame 1: n = 4, acc = 1]   --> update arguments in same frame --> [Frame 1: n = 3, acc = 4]
                            --> update arguments in same frame --> [Frame 1: n = 2, acc = 12]
                            --> update arguments in same frame --> [Frame 1: n = 1, acc = 24]
                            --> returns 24 directly!
```

> ⚡ **Result:** Space complexity drops from $O(N)$ to **$O(1)$**!  
> No stack overflow risk regardless of how large $N$ is.

---

# 7. The 4 Classic Linear Recursion Archetypes

Almost all linear recursive interview questions fall into one of four archetypes:

```text
Linear Recursion Archetypes
  │
  ├── 1. Mathematical Aggregators (Factorial, Sum, Power)
  ├── 2. Linear Array Scanners (Search, Max, Is-Sorted)
  ├── 3. String Inverters & Verifiers (Palindrome, Reverse)
  └── 4. Halving / Logarithmic Scanners (Binary Search, Pow(x,n))
```

### Archetype 1: Mathematical Aggregation
- **Subproblem:** Size $N - 1$.
- **Examples:** Factorial ($N!$), Sum of $1..N$, Count digits.
- **Formula:** $f(N) = \text{combine}(N, f(N - 1))$.

### Archetype 2: Array Linear Scanning
- **Subproblem:** Process element at index $i$, recurse on index $i + 1$ (or $i - 1$).
- **Base Case:** `index === arr.length` (or `index < 0`).
- **Examples:** Linear search, finding array maximum, checking if array is sorted.

### Archetype 3: String Processing / Dual Boundary
- **Subproblem:** Check outer characters `s[left]` and `s[right]`, recurse on inner slice `(left + 1, right - 1)`.
- **Base Case:** `left >= right`.
- **Examples:** Valid Palindrome, Reverse String in-place.

### Archetype 4: Divide-by-Two Linear Recursion (Logarithmic)
- **Subproblem:** Size $N / 2$, but **only ONE branch is explored**.
- **Time Complexity:** $O(\log N)$ instead of $O(N)$.
- **Examples:**
  - **Binary Search:** Checks `arr[mid]`, then recurses on *either* left half *or* right half.
  - **Fast Exponentiation `pow(x, n)`:** Computes $x^{n/2}$ once and squares it.

---

# 8. Comprehensive Code Walkthroughs & Dry Runs

## Walkthrough 1: Factorial of N

### Problem
Given positive integer $n$, compute $n! = n \times (n-1) \times \dots \times 1$.

### JavaScript Implementation
```javascript
function factorial(n) {
    // 1. Base Case
    if (n <= 1) {
        return 1;
    }
    // 2. Recursive Case
    return n * factorial(n - 1);
}

console.log("5! =", factorial(5)); // Output: 120
```

### Python Implementation
```python
def factorial(n: int) -> int:
    # 1. Base Case
    if n <= 1:
        return 1
    # 2. Recursive Case
    return n * factorial(n - 1)

print("5! =", factorial(5))  # Output: 120
```

### Step-by-Step Call Trace Table for `factorial(4)`

| Step | Function Call | Current `n` | Is Base Case? | Expression Evaluated | Status |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | `factorial(4)` | 4 | No | `4 * factorial(3)` | Waiting for `factorial(3)` |
| 2 | `factorial(3)` | 3 | No | `3 * factorial(2)` | Waiting for `factorial(2)` |
| 3 | `factorial(2)` | 2 | No | `2 * factorial(1)` | Waiting for `factorial(1)` |
| 4 | `factorial(1)` | 1 | **YES** | Returns `1` | **Starts Unwinding** |
| 5 | `factorial(2)` | 2 | Resumed | `2 * 1 = 2` | Returns `2` to caller |
| 6 | `factorial(3)` | 3 | Resumed | `3 * 2 = 6` | Returns `6` to caller |
| 7 | `factorial(4)` | 4 | Resumed | `4 * 6 = 24` | Returns `24` (Final Ans) |

---

## Walkthrough 2: Print 1 to N vs Print N to 1

Notice how simply **swapping the position of `console.log`** completely reverses the output:

```javascript
// A. Post-recursive Work (Prints 1 to N)
function print1ToN(n) {
    if (n === 0) return;
    print1ToN(n - 1);    // Recurse first
    console.log(n);      // Print on unwinding
}

// B. Pre-recursive Work (Prints N to 1)
function printNTo1(n) {
    if (n === 0) return;
    console.log(n);      // Print on winding
    printNTo1(n - 1);    // Recurse last
}
```

```text
print1ToN(3) Trace:
├── Calls print1ToN(2)
│   ├── Calls print1ToN(1)
│   │   ├── Calls print1ToN(0) [Base Case Returns]
│   │   └── Prints 1
│   └── Prints 2
└── Prints 3
```

---

## Walkthrough 3: Sum of Array Elements

### JavaScript Implementation
```javascript
function sumArray(arr, index = 0) {
    // Base Case: past the last index
    if (index === arr.length) {
        return 0;
    }
    // Self work + recursive call on remaining array
    return arr[index] + sumArray(arr, index + 1);
}

console.log("Sum:", sumArray([5, 2, 8, 1])); // Output: 16
```

### Python Implementation
```python
def sum_array(arr: list[int], index: int = 0) -> int:
    if index == len(arr):
        return 0
    return arr[index] + sum_array(arr, index + 1)

print("Sum:", sum_array([5, 2, 8, 1]))  # Output: 16
```

---

# 9. Time & Space Complexity Analysis

### Time Complexity Formula for Linear Recursion:
$$\text{Total Time} = (\text{Total Recursive Calls}) \times (\text{Work Done per Call})$$

1. **When decreasing by a constant ($n - 1$):**
   - Number of calls $= N$
   - Work per call $= O(1)$
   - $\text{Time Complexity} = O(N)$

2. **When dividing by a constant ($n / 2$):**
   - Number of calls $= \log_2 N$
   - Work per call $= O(1)$
   - $\text{Time Complexity} = O(\log N)$

---

### Space Complexity (Call Stack Memory):
$$\text{Auxiliary Space} = (\text{Maximum Stack Depth}) \times (\text{Memory per Stack Frame})$$

- In standard linear recursion with decrement $n - 1$, the stack holds $N$ frames at peak depth:
  $$\text{Space Complexity} = O(N)$$
- In logarithmic linear recursion (Binary Search, Fast Pow):
  $$\text{Space Complexity} = O(\log N)$$
- If tail-call optimized (TCO):
  $$\text{Space Complexity} = O(1)$$

### ⚠️ What is Stack Overflow?
Every thread in an operating system has a fixed call stack size (typically 1MB to 8MB).  
If a linear recursive function runs for $N = 100,000$ without TCO:
- JavaScript: `RangeError: Maximum call stack size exceeded` (typically around $10,000$ calls).
- Python: `RecursionError: maximum recursion depth exceeded` (default limit is $1,000$ calls; adjustable via `sys.setrecursionlimit()`).
- C++ / Java: Segmentation fault / `java.lang.StackOverflowError`.

---

# 10. Converting Linear Recursion to Iteration

Because linear recursion makes only **one** recursive call per step, it can **always be converted to a simple iterative `while` or `for` loop** without using an explicit stack!

### Comparison: Factorial

```javascript
// 1. Recursive Linear (O(N) time, O(N) auxiliary space)
function factorialRec(n) {
    if (n <= 1) return 1;
    return n * factorialRec(n - 1);
}

// 2. Iterative (O(N) time, O(1) auxiliary space)
function factorialIter(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
```

> 💡 **Interview Tip:**  
> When an interviewer asks to optimize a linear recursive solution from $O(N)$ space to $O(1)$ space, rewrite it iteratively using a loop!

---

# 11. Practice Problem Roadmap

Master linear recursion by solving these curated classic problems:

| # | Problem | Difficulty | Key Concept | Status |
|:---:|---|:---:|---|:---:|
| 1 | [Factorial of a Number](./geeksforgeeks/Factorial/) | Easy | Classical Accumulation & Dry Run | ✅ Completed |
| 2 | Sum of First N Natural Numbers | Easy | $f(N) = N + f(N-1)$ | ⏳ Practice |
| 3 | Print 1 to N without Loops | Easy | Head Recursion (Unwinding print) | ⏳ Practice |
| 4 | Print N to 1 without Loops | Easy | Tail Recursion (Winding print) | ⏳ Practice |
| 5 | Reverse an Array / String Recursively | Easy | Two-Pointer Boundary Shrinking | ⏳ Practice |
| 6 | Check if String is Palindrome | Easy | Outer match + inner recursive check | ⏳ Practice |
| 7 | LeetCode 50: Pow(x, n) | Medium | Divide-and-conquer Linear Recursion $O(\log N)$ | ⏳ Practice |
| 8 | Recursive Binary Search | Easy | Monotonic Halving $O(\log N)$ | ⏳ Practice |
| 9 | Length of a Singly Linked List | Easy | Pointer Traversal: $1 + \text{len}(\text{head.next})$ | ⏳ Practice |
| 10 | LeetCode 206: Reverse Linked List | Easy | In-place Next-Pointer Rewiring | ⏳ Practice |

---

# 12. Golden Rules to Remember

1. **Always verify the Base Case first:** If your base case is missing or unreachable, your function will infinitely recurse and crash with a Stack Overflow.
2. **Every call MUST make progress:** $N$ must become $N - 1$, $N / 2$, or `index + 1`. If the argument doesn't get closer to the base case, infinite recursion occurs.
3. **Pre-call work happens forward; post-call work happens in reverse:**  
   - Code before `recursiveCall()` runs from $N \rightarrow 1$.  
   - Code after `recursiveCall()` runs from $1 \rightarrow N$.
4. **Prefer Tail Recursion when possible:** Passing an accumulator enables Tail Call Optimization and avoids stack overflow in supporting environments.
5. **Linear Recursion is easily converted to a loop:** When memory is critical, convert linear recursion to a simple `while` loop for $O(1)$ space efficiency.
