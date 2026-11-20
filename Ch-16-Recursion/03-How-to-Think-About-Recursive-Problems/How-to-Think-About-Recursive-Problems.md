# Chapter 3: How to Think Through a Recursion Problem

> **Goal:** Design a recursive solution by defining the function, finding a reachable base case, and reducing the problem.

## 1. The Main Idea

Recursion works when a problem can be solved using a **smaller version of the same problem**:

```text
current problem → smaller problem → smaller problem → base case
```

Once the base case is reached, the calls return and finish the work they were waiting to do.

Ask:

> **If I could solve a smaller version, what would I do to solve this version?**

## 2. A Six-Step Method

Use these steps before writing code:

1. **Define:** What does one call, `solve(input)`, mean?
2. **Base case:** What is a small input with a direct answer?
3. **Reduce:** What smaller input can I pass to the same function?
4. **Progress:** Does each call move toward the base case?
5. **Combine:** How does the smaller answer help with the current answer?
6. **Return:** What should this call give back?

The short version is:

```text
DEFINE → BASE → REDUCE → PROGRESS → COMBINE → RETURN
```

## 3. Worked Example: Sum from 1 to N

**Problem:** Find `1 + 2 + ... + n`. Assume `n` is a non-negative integer.

### Step 1: Define the function

`sumToN(n)` means “return the sum of all integers from `1` through `n`.”

For example, `sumToN(4)` should return `1 + 2 + 3 + 4`, which is `10`.

### Step 2: Choose the base case

There are no positive integers to add when `n` is `0`, so:

```text
sumToN(0) = 0
```

This gives the recursion a stopping point.

### Step 3: Reduce the problem

To add the numbers through `n`, first get the sum through `n - 1`:

```text
sumToN(n) = n + sumToN(n - 1)
```

### Step 4: Write the code

```javascript
function sumToN(n) {
  if (n === 0) return 0;
  return n + sumToN(n - 1);
}

sumToN(4); // 10
```

### Step 5: Trace one example

Each call asks for a smaller sum. When `sumToN(0)` returns `0`, the waiting calls add their own number:

```text
Going down:    sumToN(4) waits for sumToN(3)
               sumToN(3) waits for sumToN(2)
               sumToN(2) waits for sumToN(1)
               sumToN(1) waits for sumToN(0)
               sumToN(0) returns 0       ← base case

Coming back:   sumToN(1) returns 1 + 0 = 1
               sumToN(2) returns 2 + 1 = 3
               sumToN(3) returns 3 + 3 = 6
               sumToN(4) returns 4 + 6 = 10
```

Trust the smaller call to do its job: `sumToN(3)` returns the sum through `3`. The current call only needs to add `4`.

## 4. Two More Return-Value Examples

For a non-negative integer `n`, factorial is the product from `1` to `n`. The base case is `0! = 1`:

```javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

factorial(4); // 24
```

For a non-negative integer exponent `n`, `a` to the power `n` has the base case `a⁰ = 1`:

```javascript
function power(a, n) {
  if (n === 0) return 1;
  return a * power(a, n - 1);
}

power(2, 3); // 8
```

Both examples follow the same pattern: solve the smaller input, then combine its answer with the current value.

## 5. Base Case and Progress

The **base case** provides a direct answer and stops that path from making more recursive calls. It prevents calls from continuing forever only when the recursive steps can actually reach it.

```text
Good:  4 → 3 → 2 → 1 → 0  (reaches base case 0)
Bad:   4 → 4 → 4 → ...    (does not get smaller)
Bad:   4 → 5 → 6 → ...    (moves away from base case 0)
```

A smaller input does not always mean subtracting `1`. It could mean advancing an index, shrinking a string, reducing a range, or moving to a child node. The key is that the remaining problem gets closer to a reachable stopping point.

## 6. Actions: Work Before or After the Call

Some recursive functions return a value. Others perform an action, such as printing. Where the action appears changes the order.

**Print before the recursive call:** work happens while calls go down.

```javascript
function printDown(n) {
  if (n === 0) return;
  console.log(n);
  printDown(n - 1);
}

printDown(3); // prints 3, 2, 1
```

**Print after the recursive call:** work happens while calls come back.

```javascript
function printUp(n) {
  if (n === 0) return;
  printUp(n - 1);
  console.log(n);
}

printUp(3); // prints 1, 2, 3
```

Both functions count down to `0`. Moving `console.log` below the recursive call reverses the print order.

These printing examples also assume `n` is a non-negative integer.

## 7. A Simple Dry-Run Method

When tracing code, write down:

1. The arguments passed to each call.
2. The base case and its returned value.
3. What each waiting call does with that value.

For `sumToN(3)`:

| Call | What it does | Result |
| --- | --- | ---: |
| `sumToN(3)` | Waits for `sumToN(2)`, then adds `3`. | `6` |
| `sumToN(2)` | Waits for `sumToN(1)`, then adds `2`. | `3` |
| `sumToN(1)` | Waits for `sumToN(0)`, then adds `1`. | `1` |
| `sumToN(0)` | Base case returns directly. | `0` |

Calls go down from `3` to `0`; results come back from `0` to `3`.

## 8. Common Mistakes

- **No base case:** calls have no stopping condition.
- **Base case is unreachable:** the recursive step skips it or moves away from it.
- **No progress:** the call repeats the same input, such as `solve(n)` calling `solve(n)`.
- **Wrong base answer:** every result built from it may be wrong.
- **Wrong smaller problem:** the recursive call does not represent the remaining part of the original task.
- **Forgot to return:** the child call runs, but its answer is lost.
- **Wrong work placement:** work before and after a call happens in different orders.

When debugging, trace a tiny input and check the arguments until the base case, then check the answers on the way back.

## 9. One Call or Many Calls?

With **one recursive call per function**, calls form a chain:

```text
solve(n) → solve(n - 1) → solve(n - 2) → ...
```

With **multiple recursive calls**, calls branch into a tree:

```text
          solve(n)
          /      \
  solve(n-1)    solve(n-2)
```

More than one call can repeat work, so count all calls when estimating time. For example, branching by itself does not tell you the exact complexity; the recurrence and repeated work matter.

## 10. Basic Time and Space

- **Time** counts all work across all calls. A chain of `n` calls doing constant work per call usually takes `O(n)` time.
- **Call-stack space** depends on the maximum number of calls active at once. A chain of depth `n` uses `O(n)` stack space.
- **Total calls are not the same as maximum depth.** A branching solution may make many total calls but have a smaller maximum depth than its call count.

For example, `sumToN(n)` makes about `n + 1` calls, so it takes `O(n)` time and `O(n)` call-stack space.

For very deep inputs, recursion can exceed the runtime's stack limit. A loop or another approach may be safer. Do not assume JavaScript will optimize every recursive call to use constant stack space.

## 11. Recursion or Iteration?

Recursion is often natural for data or tasks that contain smaller versions of themselves, such as trees, nested folders, divide-and-conquer, and backtracking. A loop may be simpler for a straightforward count or repetition.

Choose the method that makes the solution easiest to understand and safe for the expected input size.

## 12. Interview Checklist

When explaining a recursive solution, cover these points:

1. **Meaning:** What does one call return or do?
2. **Base:** What is the direct answer for the smallest case?
3. **Reduction:** What smaller input does the function call?
4. **Progress:** Why will that input eventually reach the base case?
5. **Combination:** How does the smaller answer help with the current one?
6. **Trace:** What happens for a small example?
7. **Complexity:** How much total work and maximum call-stack space are used?

## Quick Notes

```text
DEFINE what one call means
→ answer a BASE CASE directly
→ REDUCE to a smaller same-kind problem
→ make PROGRESS toward the base case
→ COMBINE the smaller answer with current work
→ TRACE calls down and results back up
→ analyze total work and maximum call depth
```

> **Key question:** If the smaller problem is already solved, what must this call do to finish the current problem?
