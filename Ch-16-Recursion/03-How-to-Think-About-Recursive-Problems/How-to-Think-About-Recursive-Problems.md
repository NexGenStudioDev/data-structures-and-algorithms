# Chapter 3: How to Think & Design Recursive Solutions

> **Goal:** Learn how to convert a problem into a recursive solution.

---

## 1. What This Chapter Teaches

Chapter 1 covered **what recursion is**.

Chapter 2 covered **how function calls and the Call Stack work**.

This chapter focuses on:

* How to identify a recursive problem
* How to design a recursive function
* How to find the base case
* How to reduce a problem
* How to use the recursive result
* How to dry-run recursion
* How to debug recursion
* Basic recursion patterns
* Basic time and space analysis

---

# 2. Recursive Problem-Solving Idea

A recursive solution usually follows:

```text
BIG PROBLEM
    ↓
SMALLER SAME PROBLEM
    ↓
SMALLER SAME PROBLEM
    ↓
BASE CASE
```

The main question is:

> **Can I solve the current problem using a smaller version of the same problem?**

---

# 3. The 6-Step Recursion Method

For most recursive problems:

```text
1. DEFINE
2. BASE CASE
3. REDUCE
4. TRUST
5. CURRENT WORK
6. RETURN
```

### In detail:

```text
DEFINE
↓
What does f(x) mean?

BASE
↓
What is the smallest case?

REDUCE
↓
How can I make the problem smaller?

TRUST
↓
Assume the smaller recursive call works.

CURRENT WORK
↓
What does the current call need to do?

RETURN
↓
How do I produce the current answer?
```

---

# 4. Step 1 — Define the Function

Before writing recursion, define exactly what the function means.

Example:

```text
sum(n)
```

means:

> Return the sum of numbers from `1` to `n`.

Therefore:

```text
sum(5)
```

means:

```text
1 + 2 + 3 + 4 + 5
```

### Rule

> **Always know what one function call represents.**

---

# 5. Recursive Function Contract

Think of:

```text
f(x)
```

as making a promise:

> "Given this input, I will correctly solve this problem."

Example:

```text
sum(n)
```

promises:

```text
sum(n) = 1 + 2 + ... + n
```

This makes recursive reasoning easier.

---

# 6. Step 2 — Find the Base Case

The **base case** is the smallest problem that can be solved directly.

Ask:

> **When can I stop without making another recursive call?**

Examples:

```text
sum(0) = 0

fact(0) = 1

power(a, 0) = 1
```

### Memory rule

```text
BASE CASE = STOPPING CONDITION + DIRECT ANSWER
```

---

# 7. Step 3 — Reduce the Problem

Convert the current problem into a **smaller version of the same problem**.

Example:

```text
sum(n)
```

can become:

```text
sum(n - 1)
```

So:

```text
sum(n)
=
n + sum(n - 1)
```

### Important

The smaller problem does **not** have to be `n - 1`.

It could be:

```text
n - 1
n - 2
n / 2
index + 1
left + 1
right - 1
smaller subarray
smaller string
smaller tree
```

The rule is:

> **The recursive call must represent a smaller remaining problem.**

---

# 8. Step 4 — Trust the Recursive Call

Suppose we have:

```text
sum(n)
```

and call:

```text
sum(n - 1)
```

Don't manually solve `sum(n - 1)`.

Assume:

> `sum(n - 1)` correctly solves the smaller problem.

Then ask:

> **What should the current call do with that answer?**

For sum:

```text
smallerAnswer = sum(n - 1)

currentAnswer = n + smallerAnswer
```

This is called:

> **Trusting the recursive call**

It is a **problem-solving technique**, not magic.

---

# 9. Step 5 — Current Work

Once the smaller problem is solved, determine what the current call must do.

Examples:

### Sum

```text
n + smallerAnswer
```

### Factorial

```text
n × smallerAnswer
```

### Count

```text
1 + smallerAnswer
```

### Maximum

```text
max(currentValue, smallerAnswer)
```

### Printing

```text
print(currentValue)
```

So the general idea is:

```text
CURRENT ANSWER
=
CURRENT WORK + SMALLER ANSWER
```

The exact operation depends on the problem.

---

# 10. Step 6 — Return the Answer

If the recursive problem needs a result, return the answer produced from:

```text
current data
+
recursive result
```

General pattern:

```text
function solve(input):

    if base case:
        return base answer

    smallerAnswer = solve(smaller input)

    currentAnswer = combine(current data, smallerAnswer)

    return currentAnswer
```

---

# 11. Example — Sum of 1 to N

### Problem

Find:

```text
1 + 2 + ... + N
```

### Define

```text
sum(n)
```

means:

> Sum from `1` to `n`.

### Base

```text
sum(0) = 0
```

### Reduce

```text
sum(n - 1)
```

### Relationship

```text
sum(n) = n + sum(n - 1)
```

### Pseudocode

```text
sum(n):

    if n == 0:
        return 0

    return n + sum(n - 1)
```

---

# 12. Example — Factorial

### Define

```text
fact(n)
```

means:

> Factorial of `n`.

### Base

```text
fact(0) = 1
```

### Reduce

```text
fact(n - 1)
```

### Relationship

```text
fact(n) = n × fact(n - 1)
```

### Pseudocode

```text
fact(n):

    if n == 0:
        return 1

    return n * fact(n - 1)
```

---

# 13. Example — Power

### Define

```text
power(a, n)
```

means:

> `a` raised to the power `n`.

### Base

```text
power(a, 0) = 1
```

### Reduce

```text
power(a, n - 1)
```

### Relationship

```text
power(a, n)
=
a × power(a, n - 1)
```

### Pseudocode

```text
power(a, n):

    if n == 0:
        return 1

    return a * power(a, n - 1)
```

---

# 14. Recursion With Actions

Not every recursive function returns a calculated value.

Some perform an action.

Example:

```text
printNTo1(n):

    if n == 0:
        return

    print(n)
    printNTo1(n - 1)
```

Output:

```text
5 4 3 2 1
```

Here:

```text
current work
→
recursive call
```

---

# 15. Work Before vs After Recursion

This is an important pattern.

### Before recursive call

```text
do work
recursive call
```

Example:

```text
print(n)
f(n - 1)
```

Work happens while **going down**.

---

### After recursive call

```text
recursive call
do work
```

Example:

```text
f(n - 1)
print(n)
```

Work happens while **coming back**.

---

# 16. Example — N to 1

```text
printNTo1(n):

    if n == 0:
        return

    print(n)
    printNTo1(n - 1)
```

For `5`:

```text
5
4
3
2
1
```

Pattern:

```text
PRINT
↓
RECURSE
```

---

# 17. Example — 1 to N

```text
print1ToN(n):

    if n == 0:
        return

    print1ToN(n - 1)
    print(n)
```

For `5`:

```text
1
2
3
4
5
```

Pattern:

```text
RECURSE
↓
PRINT
```

### Key idea

Same recursion.

Different position of the work.

---

# 18. Going Down vs Coming Back

Think of recursive execution as two phases:

```text
GOING DOWN
    ↓
recursive calls
    ↓
recursive calls
    ↓
BASE CASE
    ↓
COMING BACK
    ↓
previous calls
    ↓
original call
```

Therefore:

```text
Before recursive call → Going down

After recursive call  → Coming back
```

---

# 19. How to Recognize a Recursive Problem

Look for:

### 1. Smaller version of the same problem

```text
problem(n)
→
problem(smaller)
```

### 2. Natural stopping point

```text
base case
```

### 3. Repeating structure

The same type of operation appears on a smaller input.

### 4. Smaller answer helps build larger answer

```text
small answer
→
current answer
```

---

# 20. The Recursive Relationship

A recursive solution often looks like:

```text
PROBLEM(n)
=
CURRENT WORK
+
PROBLEM(smaller)
```

Examples:

```text
sum(n)
= n + sum(n - 1)

fact(n)
= n × fact(n - 1)

count(n)
= 1 + count(n - 1)
```

The important skill is:

> **Find the relationship, then convert it into code.**

---

# 21. Don't Start With Code

Bad approach:

```text
"Let me try some recursive calls."
```

Better approach:

```text
Problem
↓
Function meaning
↓
Base case
↓
Smaller problem
↓
Relationship
↓
Code
```

Example:

```text
sum(n)
↓
sum(0) = 0
↓
sum(n - 1)
↓
sum(n) = n + sum(n - 1)
↓
code
```

---

# 22. Parameter Reduction

A parameter can represent how much work remains.

Example:

```text
sum(5)
sum(4)
sum(3)
sum(2)
sum(1)
sum(0)
```

Here:

```text
n
```

tracks the remaining problem size.

Other examples:

```text
index + 1
left + 1
right - 1
n / 2
```

---

# 23. Multiple Parameters

Recursive functions can have multiple parameters.

Example:

```text
search(array, index)
```

Here:

```text
array
+
index
```

describe the current state.

The recursive call might be:

```text
search(array, index + 1)
```

The important question is:

> **Does the new state represent a smaller remaining problem?**

---

# 24. Progress Toward the Base Case

Every recursive call should make measurable progress.

Good:

```text
5 → 4 → 3 → 2 → 1 → 0
```

Bad:

```text
5 → 5 → 5 → 5 → ...
```

Also bad:

```text
5 → 6 → 7 → 8 → ...
```

### Rule

```text
Recursive call
      ↓
Closer to base case
```

---

# 25. Three Things Every Recursion Must Have

```text
┌──────────────────────┐
│ 1. BASE CASE         │
│    Where to stop     │
│                      │
│ 2. RECURSIVE CASE    │
│    Smaller problem    │
│                      │
│ 3. PROGRESS           │
│    Move toward base  │
└──────────────────────┘
```

---

# 26. Common Mistakes

### Mistake 1 — No base case

```text
f(n):
    f(n - 1)
```

No stopping condition.

---

### Mistake 2 — No progress

```text
f(n):
    f(n)
```

Problem never becomes smaller.

---

### Mistake 3 — Moving away from base

```text
f(n):
    f(n + 1)
```

when base is `n == 0`.

---

### Mistake 4 — Wrong base answer

A wrong base answer can make every returned answer wrong.

---

### Mistake 5 — Wrong smaller problem

The recursive call must solve the correct smaller version of the original problem.

---

### Mistake 6 — Wrong placement of work

```text
work → recursion
```

and:

```text
recursion → work
```

can produce completely different results.

---

### Mistake 7 — Not using the recursive result

If recursion returns an answer, the current call must correctly use it.

---

# 27. Dry Run Any Recursive Code

Use this process:

### Step 1 — Start

```text
f(5)
```

### Step 2 — Expand calls

```text
f(5)
 ↓
f(4)
 ↓
f(3)
 ↓
f(2)
 ↓
f(1)
 ↓
f(0)
```

### Step 3 — Stop at base

```text
f(0) → base answer
```

### Step 4 — Come back

```text
f(1)
↑
f(2)
↑
f(3)
↑
f(4)
↑
f(5)
```

### Step 5 — Calculate each returned answer

```text
BASE
 ↓
previous call
 ↓
previous call
 ↓
ORIGINAL CALL
```

---

# 28. Dry-Run Template

```text
GOING DOWN

f(n)
 ↓
f(smaller)
 ↓
f(smaller)
 ↓
BASE


COMING BACK

BASE ANSWER
 ↑
f(...)
 ↑
f(...)
 ↑
ORIGINAL CALL
```

---

# 29. Call Order vs Work Order

Do not confuse:

```text
CALL ORDER
```

with:

```text
WORK / OUTPUT ORDER
```

Example:

```text
f(5)
→ f(4)
→ f(3)
→ f(2)
→ f(1)
→ f(0)
```

Calls go:

```text
5 → 4 → 3 → 2 → 1 → 0
```

But if work is after recursion, output can be:

```text
1 → 2 → 3 → 4 → 5
```

---

# 30. Single Recursive Call

Typical structure:

```text
f(n):

    if base:
        return

    current work

    f(smaller)
```

or:

```text
f(n):

    if base:
        return

    answer = f(smaller)

    use answer
```

This usually creates a **chain**:

```text
f(n)
 ↓
f(n-1)
 ↓
f(n-2)
 ↓
...
```

---

# 31. Multiple Recursive Calls

A function can make more than one recursive call:

```text
f(n):

    f(n - 1)
    f(n - 2)
```

This can create a **recursion tree**:

```text
             f(n)
            /    \
        f(n-1)   f(n-2)
         / \       / \
       ... ...   ... ...
```

This can create repeated work and significantly change time complexity.

Detailed recursion trees will be studied later.

---

# 32. Recursion Chain vs Recursion Tree

### One recursive call

```text
f(n)
 ↓
f(n-1)
 ↓
f(n-2)
```

**Chain**

### Multiple recursive calls

```text
        f(n)
       /    \
    f(...)  f(...)
    /  \    /  \
   ... ... ... ...
```

**Tree**

Remember:

```text
1 call  → chain
many calls → tree
```

---

# 33. Recursion and Time Complexity

For:

```text
f(n)
→ f(n - 1)
```

with constant work per call:

```text
Time ≈ O(n)
```

because there are approximately `n` calls.

But multiple recursive calls can produce much more work.

Therefore:

> **Count the total recursive calls and work done at each call.**

---

# 34. Recursion and Space Complexity

Recursive calls remain active until they return.

For:

```text
f(n)
 ↓
f(n-1)
 ↓
f(n-2)
 ↓
...
```

maximum active depth can be:

```text
O(n)
```

Therefore call-stack space can be:

```text
O(n)
```

### Important distinction

```text
Total number of calls
≠
Maximum recursion depth
```

These are different measurements.

---

# 35. Recursion vs Iteration

Recursion and loops can sometimes solve the same problem.

### Recursion

```text
f(n)
→
f(n-1)
→
...
```

### Iteration

```text
loop
→
loop
→
loop
```

Recursion is especially useful when the problem itself has recursive structure.

Examples include:

* Trees
* Divide and conquer
* Backtracking
* Recursive mathematical definitions
* Nested structures

---

# 36. Recursion Is a Problem-Solving Technique

Don't think:

> "I need to use recursion."

Think:

> **"Does this problem naturally contain a smaller version of itself?"**

If yes, recursion may be a natural solution.

If not, iteration or another technique may be simpler.

---

# 37. Universal Recursive Template

### Return-based

```text
solve(input):

    if base case:
        return base answer

    smallerAnswer = solve(smaller input)

    answer = combine(current data, smallerAnswer)

    return answer
```

### Action-based

```text
process(input):

    if base case:
        return

    current work

    process(smaller input)
```

### Work after recursion

```text
process(input):

    if base case:
        return

    process(smaller input)

    current work
```

---

# 38. The Recursion Design Formula

```text
DEFINE
  ↓
BASE
  ↓
REDUCE
  ↓
TRUST
  ↓
CURRENT WORK
  ↓
RETURN
```

### Easy memory:

> **Define → Stop → Reduce → Trust → Work → Return**

---

# 39. Interview Framework

When given a recursion problem:

```text
1. What does f(x) mean?

2. What is the smallest input?

3. What is the base case?

4. What is the smaller problem?

5. Does the smaller problem have the same structure?

6. What will the recursive call return?

7. How will I use that result?

8. Is work before or after recursion?

9. Does every call move toward the base?

10. What are time and space complexities?
```

---

# 40. Recursion Problem-Solving Checklist

```text
□ Define the function clearly
□ Identify the base case
□ Identify the recursive case
□ Reduce the problem
□ Ensure progress toward the base case
□ Trust the smaller recursive result
□ Perform current work
□ Return/use the result correctly
□ Check work placement
□ Dry-run with a small input
□ Calculate time complexity
□ Calculate recursion-stack space
```

---

# 41. Chapter 3 Cheat Sheet

```text
┌──────────────────────────────────────┐
│       RECURSION DESIGN CHEAT SHEET  │
├──────────────────────────────────────┤
│                                      │
│ 1. DEFINE                            │
│    What does f(x) mean?              │
│                                      │
│ 2. BASE                              │
│    Smallest solvable case            │
│                                      │
│ 3. REDUCE                            │
│    Make the problem smaller          │
│                                      │
│ 4. TRUST                             │
│    Assume smaller call works         │
│                                      │
│ 5. WORK                              │
│    Solve current part                │
│                                      │
│ 6. RETURN                            │
│    Build current answer              │
│                                      │
│ 7. VERIFY                            │
│    Progress → Base                   │
│                                      │
└──────────────────────────────────────┘
```

---

# 42. Core Patterns to Remember

```text
Pattern 1
f(n)
→
f(n - 1)
```

Smaller parameter.

---

```text
Pattern 2

work
→
recursive call
```

Work while going down.

---

```text
Pattern 3

recursive call
→
work
```

Work while coming back.

---

```text
Pattern 4

current work
+
recursive result
=
current answer
```

Return-based recursion.

---

```text
Pattern 5

one recursive call
→
chain
```

---

```text
Pattern 6

multiple recursive calls
→
tree
```

---

# 43. Final Mental Model

Whenever you see a recursion problem:

```text
              PROBLEM
                 ↓
          What does f(x) mean?
                 ↓
           Find the BASE
                 ↓
       Make the problem SMALLER
                 ↓
       TRUST smaller solution
                 ↓
          Do CURRENT WORK
                 ↓
           RETURN ANSWER
```

The most important question is:

> **"If the smaller problem is already solved, what do I need to do to solve the current problem?"**

That question is the heart of recursive problem solving.

---

# 44. Final One-Line Revision

```text
RECURSIVE SOLUTION
=
DEFINE
→
BASE CASE
→
SMALLER PROBLEM
→
TRUST RECURSION
→
CURRENT WORK
→
RETURN
```

---

# 45. Chapter 3 Must-Know

By the end of this chapter, you should be able to:

```text
✓ Define a recursive function
✓ Find a base case
✓ Find the smaller problem
✓ Ensure progress
✓ Derive a recursive relationship
✓ Trust a recursive call
✓ Use returned recursive results
✓ Place work before/after recursion
✓ Write basic recursive solutions
✓ Dry-run recursion
✓ Debug recursive code
✓ Identify chain vs tree recursion
✓ Understand basic time complexity
✓ Understand recursion-stack space
✓ Explain a recursive solution in an interview
```

---

## Chapter 3 Final Rule

> **Don't ask "How do I write recursion?"**
>
> Ask:
>
> **"What does my function mean, what is the smallest case, how can I make the problem smaller, and how does the smaller answer help me solve the current problem?"**

That is the core skill of recursion.
