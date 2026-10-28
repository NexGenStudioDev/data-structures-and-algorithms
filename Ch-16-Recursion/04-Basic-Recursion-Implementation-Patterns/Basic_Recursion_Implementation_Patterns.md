# Chapter 4: Basic Recursion Implementation Patterns

> **Goal:** Learn how to implement recursion, trace it using the Call Stack, and recognize common recursive patterns.

---

# 1. Recursive Function — Basic Structure

Every recursive implementation mainly has:

```text
1. Base Case
2. Recursive Case
3. Progress Toward Base Case
```

General template:

```text
function solve(problem):

    if baseCase:
        return answer

    // current work

    return solve(smallerProblem)
```

For return-value problems:

```text
function solve(problem):

    if baseCase:
        return baseAnswer

    result = solve(smallerProblem)

    return combine(currentWork, result)
```

### Remember

```text
DEFINE
  ↓
BASE CASE
  ↓
SMALLER PROBLEM
  ↓
RECURSIVE CALL
  ↓
USE RESULT / CURRENT WORK
  ↓
RETURN
```

---

# 2. Function Call Chain — `a() → b() → c() → d() → e()`

Before recursion, understand normal function calls.

```text
a()
 ↓
b()
 ↓
c()
 ↓
d()
 ↓
e()
```

Code:

```text
function a():
    print("A")
    b()
    print("A done")

function b():
    print("B")
    c()
    print("B done")

function c():
    print("C")
    d()
    print("C done")

function d():
    print("D")
    e()
    print("D done")

function e():
    print("E")
```

Call:

```text
a()
```

---

## Call Stack

After `a()`:

```text
┌───────┐
│  a()  │
└───────┘
```

After `b()`:

```text
┌───────┐
│  b()  │
├───────┤
│  a()  │
└───────┘
```

After `c()`:

```text
┌───────┐
│  c()  │
├───────┤
│  b()  │
├───────┤
│  a()  │
└───────┘
```

Eventually:

```text
┌───────┐
│  e()  │
├───────┤
│  d()  │
├───────┤
│  c()  │
├───────┤
│  b()  │
├───────┤
│  a()  │
└───────┘
```

`e()` finishes first.

```text
e() → return
d() → continue → return
c() → continue → return
b() → continue → return
a() → continue → return
```

### Important

```text
CALL ORDER:
a → b → c → d → e

RETURN ORDER:
e → d → c → b → a
```

This is **LIFO**:

```text
Last In → First Out
```

---

# 3. Recursion Uses the Same Stack Mechanism

Normal calls:

```text
a() → b() → c()
```

Recursion:

```text
solve() → solve() → solve()
```

Every recursive call creates another active invocation.

```text
solve(5)
solve(4)
solve(3)
solve(2)
solve(1)
solve(0)
```

Then returns upward:

```text
solve(0)
 ↑
solve(1)
 ↑
solve(2)
 ↑
solve(3)
 ↑
solve(4)
 ↑
solve(5)
```

---

# 4. Pattern: Print N → 1

### Problem

```text
N = 5

5 4 3 2 1
```

### Code

```text
function printNTo1(n):

    if n == 0:
        return

    print(n)

    printNTo1(n - 1)
```

### Dry Run

```text
printNTo1(5)
 → print 5
 → printNTo1(4)
    → print 4
    → printNTo1(3)
       → print 3
       → printNTo1(2)
          → print 2
          → printNTo1(1)
             → print 1
             → printNTo1(0)
                → return
```

### Pattern

```text
WORK → RECURSE
```

---

# 5. Pattern: Print 1 → N

### Problem

```text
N = 5

1 2 3 4 5
```

### Code

```text
function print1ToN(n):

    if n == 0:
        return

    print1ToN(n - 1)

    print(n)
```

### Flow

```text
5
 ↓
4
 ↓
3
 ↓
2
 ↓
1
 ↓
0
```

Return:

```text
1 → 2 → 3 → 4 → 5
```

### Pattern

```text
RECURSE → WORK
```

---

# 6. N → 1 vs 1 → N

| Output  | Pattern               |
| ------- | --------------------- |
| `N → 1` | Work before recursion |
| `1 → N` | Work after recursion  |

```text
N → 1

print(n)
solve(n - 1)
```

```text
1 → N

solve(n - 1)
print(n)
```

### Memory Trick

```text
BEFORE RECURSION → GOING DOWN
AFTER RECURSION  → COMING BACK
```

---

# 7. Pattern: Sum of N Numbers

### Problem

```text
N = 5

1 + 2 + 3 + 4 + 5 = 15
```

### Recursive Relation

```text
sum(n) = n + sum(n - 1)
```

### Base Case

```text
sum(0) = 0
```

### Code

```text
function sum(n):

    if n == 0:
        return 0

    return n + sum(n - 1)
```

### Dry Run

```text
sum(5)
= 5 + sum(4)
= 5 + 4 + sum(3)
= 5 + 4 + 3 + sum(2)
= 5 + 4 + 3 + 2 + sum(1)
= 5 + 4 + 3 + 2 + 1 + sum(0)
```

Return:

```text
sum(0) = 0
sum(1) = 1
sum(2) = 3
sum(3) = 6
sum(4) = 10
sum(5) = 15
```

### Complexity

```text
Time  = O(n)
Space = O(n)
```

---

# 8. Pattern: Factorial

### Formula

```text
n! = n × (n - 1)!
```

Base:

```text
0! = 1
```

### Code

```text
function factorial(n):

    if n == 0:
        return 1

    return n * factorial(n - 1)
```

### Dry Run

```text
factorial(5)

= 5 × factorial(4)
= 5 × 4 × factorial(3)
= 5 × 4 × 3 × factorial(2)
= 5 × 4 × 3 × 2 × factorial(1)
= 5 × 4 × 3 × 2 × 1 × factorial(0)
```

```text
= 120
```

### Complexity

```text
Time  = O(n)
Space = O(n)
```

---

# 9. Pattern: Power

### Problem

```text
2⁵ = 32
```

### Recursive Relation

```text
power(a, n) = a × power(a, n - 1)
```

Base:

```text
power(a, 0) = 1
```

### Code

```text
function power(a, n):

    if n == 0:
        return 1

    return a * power(a, n - 1)
```

### Complexity

```text
Time  = O(n)
Space = O(n)
```

> This is the basic implementation. Faster exponentiation will be covered later.

---

# 10. Pattern: Count Digits

### Example

```text
58392 → 5 digits
```

Remove one digit at a time:

```text
58392
 ↓
5839
 ↓
583
 ↓
58
 ↓
5
 ↓
0
```

### Code

```text
function countDigits(n):

    if n == 0:
        return 0

    return 1 + countDigits(n / 10)
```

`/ 10` means **integer division** here.

### Complexity

If `d` = number of digits:

```text
Time  = O(d)
Space = O(d)
```

---

# 11. Pattern: Sum of Digits

### Example

```text
5839

5 + 8 + 3 + 9 = 25
```

Use:

```text
last digit    = n % 10
remaining     = n / 10
```

### Code

```text
function sumDigits(n):

    if n == 0:
        return 0

    digit = n % 10

    return digit + sumDigits(n / 10)
```

### Dry Run

```text
sumDigits(5839)

= 9 + sumDigits(583)
= 9 + 3 + sumDigits(58)
= 9 + 3 + 8 + sumDigits(5)
= 9 + 3 + 8 + 5 + sumDigits(0)

= 25
```

---

# 12. Pattern: Reverse a Number

### Example

```text
12345 → 54321
```

Use:

```text
digit = n % 10
n     = n / 10
```

Maintain an accumulator:

```text
result = result × 10 + digit
```

### Code

```text
function reverse(n, result):

    if n == 0:
        return result

    digit = n % 10

    result = result * 10 + digit

    return reverse(n / 10, result)
```

Call:

```text
reverse(12345, 0)
```

### Dry Run

```text
n      digit    result

12345    5         5
1234     4        54
123      3       543
12       2      5432
1        1     54321
0                  ↓
              return 54321
```

---

# 13. Pattern: Count Occurrences

### Problem

```text
array  = [2, 5, 2, 7, 2]
target = 2

answer = 3
```

### Idea

For every element:

```text
match → 1
not match → 0
```

### Code

```text
function countOccurrences(array, index, target):

    if index == length(array):
        return 0

    current = 1 if array[index] == target else 0

    return current +
           countOccurrences(array, index + 1, target)
```

### Pattern

```text
CURRENT CONTRIBUTION
+
RECURSIVE RESULT
```

---

# 14. Array Recursion

For arrays, recursion usually moves using an index.

### General Pattern

```text
function solve(array, index):

    if index == length(array):
        return

    process(array[index])

    solve(array, index + 1)
```

### Example

```text
[10, 20, 30, 40]
```

Flow:

```text
index 0 → 10
index 1 → 20
index 2 → 30
index 3 → 40
index 4 → stop
```

---

# 15. Array Sum

```text
function arraySum(array, index):

    if index == length(array):
        return 0

    return array[index] +
           arraySum(array, index + 1)
```

Example:

```text
[10, 20, 30]
```

```text
= 10 + arraySum(1)
= 10 + 20 + arraySum(2)
= 10 + 20 + 30 + arraySum(3)
= 60
```

Complexity:

```text
Time  = O(n)
Space = O(n)
```

---

# 16. Find Maximum in Array

```text
function maximum(array, index):

    if index == length(array) - 1:
        return array[index]

    restMax = maximum(array, index + 1)

    return max(array[index], restMax)
```

Example:

```text
[4, 9, 2, 7, 5]

maximum = 9
```

Pattern:

```text
SOLVE REST
    ↓
COMPARE WITH CURRENT
    ↓
RETURN
```

---

# 17. Linear Search

```text
function search(array, index, target):

    if index == length(array):
        return false

    if array[index] == target:
        return true

    return search(array, index + 1, target)
```

### Important

If recursive result itself is the answer:

```text
return search(...)
```

---

# 18. Check Array Is Sorted

```text
function isSorted(array, index):

    if index == length(array) - 1:
        return true

    if array[index] > array[index + 1]:
        return false

    return isSorted(array, index + 1)
```

Example:

```text
[1, 2, 3, 4, 5] → true
[1, 2, 5, 3, 4] → false
```

---

# 19. String Recursion

Strings can be processed using an index just like arrays.

### Print String

```text
function printString(s, index):

    if index == length(s):
        return

    print(s[index])

    printString(s, index + 1)
```

For:

```text
"HELLO"
```

output:

```text
H
E
L
L
O
```

---

# 20. Reverse String

To print in reverse, do the work after recursion:

```text
function reverseString(s, index):

    if index == length(s):
        return

    reverseString(s, index + 1)

    print(s[index])
```

For:

```text
HELLO
```

Output:

```text
O L L E H
```

### Key Idea

```text
RECURSE
   ↓
REACH END
   ↓
RETURN
   ↓
PRINT
```

---

# 21. Multiple Parameters

A recursive function can have multiple parameters.

Examples:

```text
solve(n, result)
solve(array, index, target)
solve(current, n)
```

Each parameter should have a clear meaning.

Example:

```text
reverse(n, result)
```

```text
n      → remaining input
result → answer built so far
```

---

# 22. Accumulator Pattern

An **accumulator** stores the result built so far.

General form:

```text
function solve(input, result):

    if baseCase:
        return result

    result = update(result)

    return solve(smallerInput, result)
```

Example:

```text
function reverse(n, result):

    if n == 0:
        return result

    digit = n % 10
    result = result * 10 + digit

    return reverse(n / 10, result)
```

### Memory

```text
ACCUMULATOR = ANSWER SO FAR
```

---

# 23. Action Recursion vs Return Recursion

## Action Recursion

Function performs an action:

```text
function printNTo1(n):

    if n == 0:
        return

    print(n)
    printNTo1(n - 1)
```

Examples:

```text
print
display
visit
modify
```

---

## Return-Value Recursion

Function calculates and returns a value:

```text
function sum(n):

    if n == 0:
        return 0

    return n + sum(n - 1)
```

Examples:

```text
sum
factorial
power
count
maximum
minimum
search
```

---

# 24. How Return Values Move

Example:

```text
sum(4)
```

Call stack:

```text
sum(4)
 ↓
sum(3)
 ↓
sum(2)
 ↓
sum(1)
 ↓
sum(0)
```

Base:

```text
sum(0) = 0
```

Now return:

```text
sum(1) = 1 + 0 = 1

sum(2) = 2 + 1 = 3

sum(3) = 3 + 3 = 6

sum(4) = 4 + 6 = 10
```

### Important

```text
GO DOWN → CREATE CALLS

COME BACK → CALCULATE RESULTS
```

---

# 25. What Is a Stack Frame?

Each active function call needs its own execution state.

Conceptually:

```text
┌─────────────────────┐
│ Function            │
│ Parameters          │
│ Local variables     │
│ Current position    │
│ Return information  │
└─────────────────────┘
```

For:

```text
sum(3)
```

one frame is created.

For:

```text
sum(2)
```

another frame is created.

So:

```text
sum(3)  ← waiting
sum(2)  ← waiting
sum(1)  ← waiting
sum(0)  ← executing
```

When `sum(0)` returns:

```text
POP sum(0)
```

Then `sum(1)` resumes.

---

# 26. `a() → b() → c() → d() → e()` — Complete Flow

### Going Down

```text
a()
 ↓
b()
 ↓
c()
 ↓
d()
 ↓
e()
```

### Stack

```text
TOP
┌─────┐
│ e() │
├─────┤
│ d() │
├─────┤
│ c() │
├─────┤
│ b() │
├─────┤
│ a() │
└─────┘
```

### Coming Back

```text
e() → return
d() → resume → return
c() → resume → return
b() → resume → return
a() → resume → return
```

### Rule

```text
CALL ORDER  = TOP-DOWN
RETURN ORDER = BOTTOM-UP
```

---

# 27. Work Before vs After Recursion

## Before

```text
print(n)
solve(n - 1)
```

Output:

```text
N → 1
```

## After

```text
solve(n - 1)
print(n)
```

Output:

```text
1 → N
```

## Both

```text
print("before")

solve(n - 1)

print("after")
```

For `n = 3`:

```text
before 3
before 2
before 1
after 1
after 2
after 3
```

---

# 28. Common Recursive Implementation Patterns

### 1. Decrease parameter

```text
solve(n - 1)
```

Used for:

```text
sum
factorial
power
N → 1
```

### 2. Increase index

```text
solve(index + 1)
```

Used for:

```text
arrays
strings
search
count
```

### 3. Accumulator

```text
solve(input, result)
```

Used for:

```text
reverse
building answers
```

### 4. Return + combine

```text
result = solve(smaller)

return combine(current, result)
```

Used for:

```text
sum
max
min
count
```

---

# 29. Complexity of Basic Patterns

| Problem           |     Time | Stack Space |
| ----------------- | -------: | ----------: |
| Print N → 1       |     O(n) |        O(n) |
| Print 1 → N       |     O(n) |        O(n) |
| Sum               |     O(n) |        O(n) |
| Factorial         |     O(n) |        O(n) |
| Power             |     O(n) |        O(n) |
| Count digits      | O(log n) |    O(log n) |
| Sum digits        | O(log n) |    O(log n) |
| Array traversal   |     O(n) |        O(n) |
| String traversal  |     O(n) |        O(n) |
| Linear search     |     O(n) |        O(n) |
| Count occurrences |     O(n) |        O(n) |

> `O(n)` stack space means up to `n` recursive calls can be active at once.

---

# 30. Common Mistakes

### ❌ No base case

```text
solve(n - 1)
```

### ❌ No progress

```text
solve(n)
```

### ❌ Moving away from base

```text
solve(n + 1)
```

when base is `0`.

### ❌ Wrong base answer

Factorial:

```text
fact(0) = 1
```

### ❌ Ignoring recursive result

Wrong:

```text
solve(n - 1)
```

Correct when a result is required:

```text
return n + solve(n - 1)
```

### ❌ Wrong work position

```text
print(n)
solve(n - 1)
```

and:

```text
solve(n - 1)
print(n)
```

produce different orders.

---

# 31. How to Dry Run Recursion

Always follow:

```text
STEP 1 → Start call
STEP 2 → Expand recursive calls
STEP 3 → Reach base case
STEP 4 → Return
STEP 5 → Resume previous call
STEP 6 → Continue until original call returns
```

### Example

```text
sum(3)
```

Going down:

```text
sum(3)
 ↓
sum(2)
 ↓
sum(1)
 ↓
sum(0)
```

Coming back:

```text
sum(0) → 0
sum(1) → 1
sum(2) → 3
sum(3) → 6
```

---

# 32. Single Recursive Call = Chain

```text
solve(n)
   ↓
solve(n-1)
   ↓
solve(n-2)
   ↓
solve(n-3)
```

Examples:

```text
sum
factorial
power
array traversal
string traversal
```

Usually:

```text
Time  = number of calls
Space = maximum depth
```

---

# 33. Multiple Recursive Calls = Tree

Later we will see:

```text
solve(n - 1)
solve(n - 2)
```

Example:

```text
          solve(4)
         /        \
    solve(3)     solve(2)
     /   \        /   \
 solve(2) solve(1) ...
```

This creates a **recursion tree**.

This is the next level after basic recursion chains.

---

# 34. Interview Implementation Checklist

Before submitting a recursive solution:

```text
□ What does the function mean?

□ What is the base case?

□ Does recursion move toward the base case?

□ What is the smaller problem?

□ What does the current call do?

□ Work before or after recursion?

□ Does recursive call return a value?

□ Do I need that returned value?

□ Do I need an accumulator?

□ What does every parameter represent?

□ How many recursive calls are made?

□ What is the maximum stack depth?

□ What is Time Complexity?

□ What is Space Complexity?
```

---

# 35. Master Templates

### A. Work → Recursion

```text
function solve(x):

    if base:
        return

    work(x)

    solve(smaller)
```

### B. Recursion → Work

```text
function solve(x):

    if base:
        return

    solve(smaller)

    work(x)
```

### C. Return + Combine

```text
function solve(x):

    if base:
        return baseAnswer

    result = solve(smaller)

    return combine(x, result)
```

### D. Accumulator

```text
function solve(x, result):

    if base:
        return result

    result = update(result, x)

    return solve(smaller, result)
```

### E. Array/String

```text
function solve(data, index):

    if index == length(data):
        return

    process(data[index])

    solve(data, index + 1)
```

---

# 36. Chapter 4 Cheat Sheet

```text
N → 1
    work
    ↓
    recurse

1 → N
    recurse
    ↓
    work
```

```text
SUM
return n + solve(n - 1)
```

```text
FACTORIAL
return n * solve(n - 1)
```

```text
POWER
return a * solve(a, n - 1)
```

```text
ARRAY
array[index]
solve(index + 1)
```

```text
COUNT
currentContribution + solve(rest)
```

```text
ACCUMULATOR
solve(smaller, answerSoFar)
```

```text
EXECUTION

CALL
 ↓
PUSH
 ↓
EXECUTE
 ↓
RECURSIVE CALL
 ↓
WAIT
 ↓
BASE CASE
 ↓
RETURN
 ↓
POP
 ↓
RESUME
 ↓
RETURN
```

---

# 37. Final Mental Model

```text
RECURSIVE IMPLEMENTATION
        ↓
DEFINE FUNCTION
        ↓
FIND BASE CASE
        ↓
MAKE PROBLEM SMALLER
        ↓
CALL SAME FUNCTION
        ↓
WAIT FOR RESULT
        ↓
DO CURRENT WORK
        ↓
RETURN
```

And internally:

```text
CALL
 ↓
STACK GROWS
 ↓
CALL
 ↓
STACK GROWS
 ↓
...
 ↓
BASE CASE
 ↓
STACK UNWINDS
 ↓
RESULTS RETURN
 ↓
FINAL ANSWER
```

### One-line revision

> **Recursion implementation = solve the smallest case directly, reduce the problem, recursively solve the smaller case, then perform/return the required work while the Call Stack handles the waiting calls.**
