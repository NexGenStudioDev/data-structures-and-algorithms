# DSA — Recursion

# Chapter 2: Functions, Call Stack & Program Execution

> **Chapter Objective:** Understand exactly what happens when a function is called, how the **Call Stack** manages function calls, what happens when a function calls itself, how the **Base Case** stops recursion, how recursive calls **unwind**, and why this knowledge is necessary for solving recursion problems.

---

# 1. Why Learn Functions Before Recursion?

Before understanding recursion, you need to understand one basic fact:

> **Recursion is based on function calls.**

A recursive function is simply a function that calls itself.

```js
function fun() {
    fun();
}
```

So first we need to understand:

```text
Function
   ↓
Function Call
   ↓
Call Stack
   ↓
Function Execution
   ↓
Function Return
   ↓
Function Calling Itself
   ↓
Recursion
```

We don't need to study every detail of JavaScript functions here. We only study the parts required for **DSA recursion**.

---

# 2. Function — Basic Idea

A **function** is a reusable block of code that performs a particular task.

```js
function greet() {
    console.log("Hello");
}
```

Calling the function:

```js
greet();
```

Think of it as:

```text
Function Definition
       ↓
"Here is what this function does."

Function Call
       ↓
"Execute this function now."
```

---

# 3. Function Definition vs Function Call

### Function Definition

```js
function add(a, b) {
    return a + b;
}
```

This defines the function.

### Function Call

```js
add(10, 20);
```

This executes the function.

### Important

Writing:

```js
function add(a, b) {
    return a + b;
}
```

doesn't mean the function is currently executing.

It only defines it.

Execution starts when:

```js
add(10, 20);
```

is called.

---

# 4. Parameters and Arguments

Consider:

```js
function add(a, b) {
    return a + b;
}

add(10, 20);
```

### Parameters

```js
a
b
```

are parameters.

They are placeholders defined by the function.

### Arguments

```js
10
20
```

are arguments.

They are the actual values passed during the call.

So:

```text
function add(a, b)
            ↑  ↑
        Parameters


add(10, 20)
    ↑   ↑
  Arguments
```

This becomes important in recursion because every recursive call can have different arguments:

```js
fun(5);
fun(4);
fun(3);
fun(2);
```

---

# 5. Return Statement

A function can return a value to its caller.

```js
function add(a, b) {
    return a + b;
}
```

When:

```js
const result = add(10, 20);
```

the function calculates:

```text
10 + 20
   ↓
30
```

and returns:

```text
30
```

So:

```text
Caller
  ↓
add(10, 20)
  ↓
Function executes
  ↓
return 30
  ↓
Caller receives 30
```

---

# 6. `return` Is Important in Recursion

Consider:

```js
function test() {
    return;
}
```

When `return` executes:

1. Current function execution ends.
2. Control goes back to the caller.
3. The current function's active stack frame is removed.

This is extremely important for recursion.

---

# 7. What Happens When a Function Is Called?

Consider:

```js
function greet() {
    console.log("Hello");
}

greet();
```

When JavaScript reaches:

```js
greet();
```

the runtime needs to start a new **function invocation**.

It needs to remember information such as:

* Which function is executing
* Its parameters
* Its local execution state
* Where execution should continue after it returns

Conceptually, this information is represented by a **stack frame**.

That frame becomes part of the **Call Stack**.

---

# 8. What Is the Call Stack?

The **Call Stack** is a stack data structure used by the JavaScript runtime to keep track of active function calls.

It follows:

> **LIFO — Last In, First Out**

Imagine a stack of plates:

```text
       ┌──────────┐
       │ Plate 3  │ ← Last added
       ├──────────┤
       │ Plate 2  │
       ├──────────┤
       │ Plate 1  │
       └──────────┘
```

Plate 3 was added last, so it must be removed first.

The Call Stack follows the same principle.

---

# 9. Push and Pop

A stack mainly works with two operations.

## Push

Adds an item to the top.

```text
Before:

┌─────┐
│  A  │
└─────┘

Push B:

┌─────┐
│  B  │
├─────┤
│  A  │
└─────┘
```

## Pop

Removes the item from the top.

```text
Before:

┌─────┐
│  B  │
├─────┤
│  A  │
└─────┘

Pop:

┌─────┐
│  A  │
└─────┘
```

For function calls, think:

```text
Function Call   → Push
Function Return → Pop
```

---

# 10. What Is a Stack Frame?

A **stack frame** is the execution information associated with one particular function invocation.

For example:

```js
function add(a, b) {
    const result = a + b;
    return result;
}

add(10, 20);
```

Conceptually, the stack may contain something like:

```text
┌──────────────────────┐
│ add(10, 20)          │
├──────────────────────┤
│ a = 10               │
│ b = 20               │
│ result = 30          │
│ return information   │
│ execution state      │
└──────────────────────┘
```

> This is a conceptual model for learning. The exact implementation of stack frames is dependent on the JavaScript engine.

---

# 11. Global Execution

When a JavaScript program begins, there is an initial execution context.

For DSA-level understanding, you can visualize it as:

```text
CALL STACK

┌──────────────┐
│ Global       │
└──────────────┘
```

When you call a function:

```js
greet();
```

a new function invocation is added above it.

```text
CALL STACK

┌──────────────┐
│ greet()      │
├──────────────┤
│ Global       │
└──────────────┘
```

---

# 12. Complete Normal Function Flow

Consider:

```js
function greet() {
    console.log("Hello");
}

greet();

console.log("Done");
```

Execution:

```text
Program starts
      ↓
Global execution
      ↓
greet() is called
      ↓
greet() stack frame created
      ↓
Frame pushed onto Call Stack
      ↓
greet() executes
      ↓
"Hello" printed
      ↓
greet() returns
      ↓
greet() frame popped
      ↓
Execution returns to caller
      ↓
console.log("Done")
```

Output:

```text
Hello
Done
```

---

# 13. The Most Important Rule

Remember:

> **When a function is called, its invocation becomes active and its stack frame is pushed onto the Call Stack.**

When it finishes:

> **Its active stack frame is removed, and execution resumes in the caller at the appropriate return point.**

Short form:

```text
CALL
 ↓
PUSH
 ↓
EXECUTE
 ↓
RETURN
 ↓
POP
 ↓
RESUME CALLER
```

This is the foundation of recursion.

---

# 14. Function Calling Another Function

Consider:

```js
function A() {
    console.log("A");
}

function B() {
    A();
    console.log("B");
}

B();
```

Initially:

```text
Global
```

`B()` is called:

```text
B
Global
```

Then `B()` calls `A()`:

```text
A
B
Global
```

Because `A()` is on top, `A()` executes.

---

# 15. What Happens When `A()` Finishes?

`A()` returns.

Its frame is popped:

```text
B
Global
```

Now execution goes back to `B()`.

But it does **not** start `B()` from the beginning.

It continues after:

```js
A();
```

So:

```js
function B() {
    A();

    // Execution resumes here

    console.log("B");
}
```

This concept is extremely important.

### Core Rule

> **A function returns control to the caller, and the caller continues from where the function call was made.**

---

# 16. Caller and Callee

Example:

```js
function A() {
    B();
}

function B() {
    console.log("Hello");
}

A();
```

Here:

```text
A → Caller
B → Callee
```

### Caller

The function that calls another function.

### Callee

The function that is called.

---

# 17. Nested Function Calls

Consider:

```js
function A() {
    B();
}

function B() {
    C();
}

function C() {
    console.log("Hello");
}

A();
```

Execution:

```text
A()
 ↓
B()
 ↓
C()
```

Call Stack:

```text
┌──────────────┐
│ C()          │ ← Currently executing
├──────────────┤
│ B()          │
├──────────────┤
│ A()          │
├──────────────┤
│ Global       │
└──────────────┘
```

---

# 18. Returning From Nested Calls

`C()` finishes:

```text
C() → Pop
```

Stack:

```text
B
A
Global
```

Then `B()` finishes:

```text
B → Pop
```

Stack:

```text
A
Global
```

Then `A()` finishes:

```text
A → Pop
```

Stack:

```text
Global
```

This is called:

> **Stack Unwinding**

---

# 19. What Is Stack Unwinding?

**Stack unwinding** is the process of returning from active function calls and removing their stack frames one by one.

Example:

```text
Going deeper:

A()
 ↓
B()
 ↓
C()
```

Stack:

```text
C
B
A
Global
```

Returning:

```text
C returns
 ↓
B returns
 ↓
A returns
```

Stack:

```text
C
B
A
Global

↓

B
A
Global

↓

A
Global

↓

Global
```

---

# 20. Now: What Happens When a Function Calls Itself?

This is the beginning of recursion.

```js
function count(n) {
    count(n - 1);
}
```

A function calling itself is called **recursion**.

But understand the stack:

```js
count(3);
```

First:

```text
count(3)
Global
```

Then `count(3)` calls:

```text
count(2)
count(3)
Global
```

Then:

```text
count(1)
count(2)
count(3)
Global
```

Then:

```text
count(0)
count(1)
count(2)
count(3)
Global
```

---

# 21. Very Important:

## Each Recursive Call Is a New Invocation

This is one of the biggest beginner misunderstandings.

When:

```js
count(3);
```

calls:

```js
count(2);
```

it does not mean the old `count(3)` has become `count(2)`.

Instead:

```text
count(3) → one invocation
count(2) → another invocation
count(1) → another invocation
count(0) → another invocation
```

Each active invocation has its own execution state.

Conceptually:

```text
count(3) → n = 3
count(2) → n = 2
count(1) → n = 1
count(0) → n = 0
```

---

# 22. Why Does the Previous Call Stay on the Stack?

Suppose:

```js
function count(n) {
    count(n - 1);
    console.log(n);
}
```

When:

```text
count(3)
```

calls:

```text
count(2)
```

`count(3)` is **not finished**.

It still has:

```js
console.log(n);
```

to execute after the recursive call.

So it waits.

```text
count(3) → WAITING
     ↓
count(2) → WAITING
     ↓
count(1) → EXECUTING
```

This is why recursive calls build up on the Call Stack.

---

# 23. Base Case

A recursive function needs a condition that stops further recursive calls.

This is called the **Base Case**.

Example:

```js
function count(n) {

    if (n === 0) {
        return;
    }

    count(n - 1);
}
```

Here:

```js
if (n === 0)
```

is the base case.

---

# 24. Why Is the Base Case Necessary?

Without a base case:

```js
function count(n) {
    count(n - 1);
}
```

the function keeps calling itself:

```text
count(3)
 ↓
count(2)
 ↓
count(1)
 ↓
count(0)
 ↓
count(-1)
 ↓
count(-2)
 ↓
count(-3)
 ↓
...
```

No function returns.

Therefore:

```text
No return
 ↓
No pop
 ↓
Stack keeps growing
 ↓
Stack overflow
```

---

# 25. Recursive Case

The **recursive case** is the part of the function that makes another recursive call.

```js
function count(n) {

    // Base Case
    if (n === 0) {
        return;
    }

    // Recursive Case
    count(n - 1);
}
```

So:

```text
Recursive Function
       │
       ├── Base Case
       │
       └── Recursive Case
```

---

# 26. Base Case + Recursive Case

A typical recursive function has:

```text
Base Case
   ↓
Stop

Recursive Case
   ↓
Solve smaller/simpler version of the problem
```

General structure:

```js
function recursiveFunction(problem) {

    if (baseCase) {
        return;
    }

    // current work

    recursiveFunction(smallerProblem);
}
```

---

# 27. Progress Toward the Base Case

A recursive function must generally move toward its stopping condition.

Suppose:

```js
if (n === 0) return;
```

Then:

```js
count(n - 1);
```

is moving toward the base case.

Example:

```text
5 → 4 → 3 → 2 → 1 → 0
```

But:

```js
count(n + 1);
```

moves away:

```text
5 → 6 → 7 → 8 → 9 → ...
```

So it may never terminate.

### Important Rule

> **Every recursive call should make meaningful progress toward a base case.**

---

# 28. Recursion — Going Down

Consider:

```js
function count(n) {
    if (n === 0) {
        return;
    }

    console.log(n);
    count(n - 1);
}
```

Call:

```js
count(3);
```

The calls go:

```text
count(3)
   ↓
count(2)
   ↓
count(1)
   ↓
count(0)
```

Call Stack:

```text
┌──────────────┐
│ count(0)     │
├──────────────┤
│ count(1)     │
├──────────────┤
│ count(2)     │
├──────────────┤
│ count(3)     │
├──────────────┤
│ Global       │
└──────────────┘
```

The stack is growing.

---

# 29. Reaching the Base Case

Eventually:

```text
count(0)
```

is called.

The base case:

```js
if (n === 0) {
    return;
}
```

executes.

Therefore:

```text
count(0)
   ↓
return
```

Its stack frame is removed.

---

# 30. Recursion — Coming Back

After:

```text
count(0)
```

returns:

```text
count(1)
```

becomes the active top call.

Then:

```text
count(1)
```

returns.

Then:

```text
count(2)
```

returns.

Then:

```text
count(3)
```

returns.

So:

```text
Going Down:

3
↓
2
↓
1
↓
0

Coming Back:

0
↑
1
↑
2
↑
3
```

The second phase is called:

> **Unwinding**

---

# 31. The Two Phases of Recursion

## Phase 1 — Recursive Descent

```text
Function calls itself
       ↓
Another call
       ↓
Another call
       ↓
Another call
```

Stack grows.

## Phase 2 — Unwinding

```text
Base case reached
       ↓
Return
       ↓
Previous call resumes
       ↓
Return
       ↓
Previous call resumes
```

Stack shrinks.

### Remember

```text
GOING DOWN → PUSH
COMING BACK → POP
```

---

# 32. Code Before and After Recursive Call

This is one of the **most important recursion concepts**.

Consider:

```js
function fun(n) {

    if (n === 0) {
        return;
    }

    console.log("Before", n);

    fun(n - 1);

    console.log("After", n);
}
```

There is code:

```js
console.log("Before", n);
```

**before** the recursive call.

And:

```js
console.log("After", n);
```

**after** the recursive call.

These behave differently.

---

# 33. What Happens Before the Recursive Call?

Call:

```js
fun(3);
```

Output before recursion:

```text
Before 3
Before 2
Before 1
```

Why?

Because each function executes its code before making the next recursive call.

```text
fun(3)
 ↓
print Before 3
 ↓
fun(2)
 ↓
print Before 2
 ↓
fun(1)
 ↓
print Before 1
 ↓
fun(0)
```

---

# 34. What Happens After the Recursive Call?

Now `fun(0)` returns.

The previous call `fun(1)` resumes **after**:

```js
fun(n - 1);
```

So:

```text
fun(1)
 ↓
After 1
```

Then `fun(2)`:

```text
After 2
```

Then `fun(3)`:

```text
After 3
```

Final output:

```text
Before 3
Before 2
Before 1
After 1
After 2
After 3
```

---

# 35. Why Is the "After" Part Reversed?

Because of LIFO.

Calls were created in this order:

```text
fun(3)
fun(2)
fun(1)
```

But they finish in reverse order:

```text
fun(1)
fun(2)
fun(3)
```

Therefore:

```text
Before → 3 2 1
After  → 1 2 3
```

This is one of the best ways to understand recursive execution.

---

# 36. Complete Recursion Visualization

For:

```js
function fun(n) {
    if (n === 0) return;

    console.log("Before", n);

    fun(n - 1);

    console.log("After", n);
}

fun(3);
```

### Going Down

```text
fun(3)
 │
 ├── Before 3
 │
 └── fun(2)
      │
      ├── Before 2
      │
      └── fun(1)
           │
           ├── Before 1
           │
           └── fun(0)
```

### Base Case

```text
fun(0)
 ↓
return
```

### Coming Back

```text
fun(1)
 ↓
After 1
 ↓
return

fun(2)
 ↓
After 2
 ↓
return

fun(3)
 ↓
After 3
 ↓
return
```

---

# 37. Why Does Execution Return to the Correct Function?

Because the Call Stack maintains the active function calls and their execution information.

Suppose:

```text
fun(3)
fun(2)
fun(1)
fun(0)
```

When `fun(0)` returns:

```text
fun(1)
fun(2)
fun(3)
```

The top active invocation is `fun(1)`.

Therefore execution resumes there.

When `fun(1)` returns:

```text
fun(2)
fun(3)
```

Then `fun(2)` resumes.

This continues until the original call returns.

---

# 38. Factorial — Classic Recursion Example

Mathematical definition:

```text
n! = n × (n - 1) × (n - 2) × ... × 1
```

For example:

```text
4! = 4 × 3 × 2 × 1
   = 24
```

Recursive implementation:

```js
function factorial(n) {

    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
```

---

# 39. Factorial — Going Down

Call:

```js
factorial(4);
```

Calls:

```text
factorial(4)
     ↓
factorial(3)
     ↓
factorial(2)
     ↓
factorial(1)
```

Stack:

```text
┌────────────────┐
│ factorial(1)   │ ← Top
├────────────────┤
│ factorial(2)   │
├────────────────┤
│ factorial(3)   │
├────────────────┤
│ factorial(4)   │
├────────────────┤
│ Global         │
└────────────────┘
```

---

# 40. Why Do the Earlier Factorial Calls Wait?

Look at:

```js
return n * factorial(n - 1);
```

For:

```text
factorial(4)
```

we need the result of:

```text
factorial(3)
```

before calculating:

```text
4 × result
```

Therefore:

```text
factorial(4) → waiting
factorial(3) → waiting
factorial(2) → waiting
factorial(1) → executes
```

---

# 41. Factorial — Base Case

At:

```text
factorial(1)
```

we reach:

```js
if (n === 1) {
    return 1;
}
```

Therefore:

```text
factorial(1) → 1
```

Now the stack begins unwinding.

---

# 42. Factorial — Unwinding

`factorial(2)` receives `1`:

```text
2 × 1 = 2
```

So:

```text
factorial(2) → 2
```

Then:

```text
factorial(3)
= 3 × 2
= 6
```

Then:

```text
factorial(4)
= 4 × 6
= 24
```

Final:

```text
24
```

---

# 43. Recursion Tree vs Call Stack

Don't confuse them.

## Call Stack

Shows currently active calls.

```text
factorial(4)
factorial(3)
factorial(2)
factorial(1)
```

## Recursion Tree

Shows branching recursive calls.

For example:

```js
function f(n) {
    if (n <= 1) return;

    f(n - 1);
    f(n - 2);
}
```

The recursion tree looks like:

```text
             f(5)
           /      \
        f(4)      f(3)
       /   \      /   \
    f(3)  f(2)  f(2) f(1)
```

### Remember

```text
Call Stack
→ current active execution path

Recursion Tree
→ complete branching structure of calls
```

---

# 44. Direct Recursion

A function directly calls itself.

```js
function fun(n) {
    if (n === 0) return;

    fun(n - 1);
}
```

```text
fun → fun → fun → fun
```

This is **direct recursion**.

---

# 45. Indirect Recursion

A function calls another function, which eventually calls the original function.

```js
function A(n) {
    if (n <= 0) return;

    B(n - 1);
}

function B(n) {
    if (n <= 0) return;

    A(n - 1);
}
```

Flow:

```text
A
 ↓
B
 ↓
A
 ↓
B
```

This is **indirect recursion**.

---

# 46. Stack Overflow

If recursive calls continue indefinitely:

```js
function fun() {
    fun();
}

fun();
```

The stack becomes:

```text
fun()
fun()
fun()
fun()
fun()
...
```

No call reaches a return.

Therefore:

```text
No Return
   ↓
No Pop
   ↓
Stack keeps growing
   ↓
Call Stack limit exceeded
   ↓
Stack Overflow
```

In JavaScript, a typical error is:

```text
RangeError: Maximum call stack size exceeded
```

---

# 47. Recursion and Space Complexity

Consider:

```js
function count(n) {
    if (n === 0) return;

    count(n - 1);
}
```

For:

```text
count(5)
```

maximum active calls are approximately:

```text
count(5)
count(4)
count(3)
count(2)
count(1)
count(0)
```

Therefore the call-stack space is proportional to `n`.

```text
Auxiliary Space = O(n)
```

### Important

Recursion does not automatically mean `O(n)` space.

The space depends on the **maximum recursion depth**.

---

# 48. Recursion Depth

**Recursion depth** means the maximum number of recursive calls active at the same time before the stack starts unwinding.

Example:

```text
f(5)
f(4)
f(3)
f(2)
f(1)
f(0)
```

The exact counting convention can differ depending on whether you count the initial/global frame, so in DSA we generally describe the recursive depth here as **O(n)**.

---

# 49. Recursion vs Iteration

### Iteration

Uses loops:

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Recursion

Uses function calls:

```js
function print(i) {
    if (i > 5) return;

    console.log(i);
    print(i + 1);
}
```

### Main difference

```text
Iteration
→ Loop repeatedly executes

Recursion
→ Function repeatedly calls itself
```

---

# 50. Why Use Recursion in DSA?

Recursion is particularly useful when a problem naturally contains smaller versions of itself.

Common examples:

* Tree traversal
* Binary search
* Divide and conquer
* Merge sort
* Quick sort
* Backtracking
* DFS
* Generating subsets
* Generating subsequences
* Permutations
* Combinations
* Mathematical recurrence problems

The reason recursion works well is that:

```text
Large Problem
     ↓
Smaller Problem
     ↓
Even Smaller Problem
     ↓
Base Case
```

---

# 51. Recursion and Divide & Conquer

Many DSA algorithms use:

```text
Problem
  ↓
Divide into smaller problems
  ↓
Solve smaller problems recursively
  ↓
Combine results
```

Examples:

* Merge Sort
* Quick Sort
* Binary Search

The Call Stack manages the nested recursive calls.

---

# 52. Recursion and Trees

Trees are naturally recursive structures.

A binary tree node can be thought of as:

```text
       Node
      /    \
   Left    Right
```

Each subtree is itself a smaller tree.

Therefore:

```text
Tree
 ↓
Left subtree
 ↓
Left subtree's subtree
...
```

Recursion naturally fits this structure.

---

# 53. Recursion and Backtracking

Backtracking uses recursion to:

```text
Choose
 ↓
Explore
 ↓
Recursive Call
 ↓
Return
 ↓
Undo Choice
 ↓
Try Another Choice
```

This depends heavily on understanding the **call stack and unwinding**.

You'll study this later in more detail.

---

# 54. Important Mental Model

When you see:

```js
function fun(n) {

    if (baseCase) {
        return;
    }

    // Work before

    fun(smallerProblem);

    // Work after
}
```

Think:

```text
             fun(n)
                │
                ▼
          Base Case?
          /        \
        YES         NO
        │            │
        ▼            ▼
      RETURN     Work Before
                     │
                     ▼
              Recursive Call
                     │
                     ▼
               New Stack Frame
                     │
                     ▼
                  Repeat
                     │
                     ▼
                Base Case
                     │
                     ▼
                  Return
                     │
                     ▼
               Pop Frame
                     │
                     ▼
               Resume Caller
                     │
                     ▼
                Work After
```

This is the **core recursion model**.

---

# 55. How to Analyze Any Recursive Function

Whenever you see a recursive DSA problem, follow these steps.

### Step 1 — Find the Base Case

Ask:

> When does recursion stop?

---

### Step 2 — Find the Recursive Call

Ask:

> Where is the function calling itself?

---

### Step 3 — Check Progress

Ask:

> Is the problem becoming smaller or simpler?

---

### Step 4 — Trace the Calls

Write:

```text
f(5)
f(4)
f(3)
f(2)
f(1)
```

---

### Step 5 — Reach the Base Case

Stop going deeper.

---

### Step 6 — Trace the Returns

Now go backward:

```text
f(1)
f(2)
f(3)
f(4)
f(5)
```

---

### Step 7 — Check Code After Recursive Call

Ask:

> What happens after the recursive call returns?

This is where many recursion problems are solved.

---

# 56. Common Beginner Mistakes

## Mistake 1 — No Base Case

```js
function f(n) {
    f(n - 1);
}
```

❌ Can cause infinite recursion and stack overflow.

---

## Mistake 2 — Base Case Cannot Be Reached

```js
function f(n) {
    if (n === 0) return;

    f(n + 1);
}
```

Starting from `5`:

```text
5 → 6 → 7 → 8 → ...
```

❌ Moves away from the base case.

---

## Mistake 3 — Thinking Recursive Calls Replace Each Other

Wrong idea:

```text
f(3)
becomes
f(2)
```

Correct:

```text
f(3)
f(2)
```

Both are separate active invocations until `f(2)` returns.

---

## Mistake 4 — Only Understanding the Going-Down Phase

Some students understand:

```text
3 → 2 → 1 → 0
```

but don't understand:

```text
0 → 1 → 2 → 3
```

The second phase is **unwinding**.

---

## Mistake 5 — Ignoring Code After the Recursive Call

Example:

```js
f(n - 1);

console.log(n);
```

That `console.log()` executes during **unwinding**, not during the initial descent.

---

# 57. Exam Definitions

### Function

> A reusable block of code designed to perform a specific task.

### Function Call

> An instruction that invokes a function and starts a particular function invocation.

### Call Stack

> A LIFO data structure used by the runtime to keep track of active function calls.

### Stack Frame

> The execution information associated with a particular function invocation.

### Push

> Adding an active call/frame to the top of the stack.

### Pop

> Removing the top completed call/frame from the stack.

### Caller

> The function that invokes another function.

### Callee

> The function invoked by another function.

### Return

> Ends the current function invocation and transfers control/value back to the caller.

### Recursion

> A programming technique in which a function directly or indirectly invokes itself.

### Base Case

> The condition that stops further recursive calls.

### Recursive Case

> The part of a recursive function that makes another recursive call.

### Recursion Depth

> The maximum number of nested active recursive invocations at a particular point during execution.

### Unwinding

> The process of returning from recursive calls and removing their stack frames one by one.

### Stack Overflow

> A condition where excessive nested function calls exceed the call stack's capacity.

---

# 58. Interview Questions

## Q1. What is the Call Stack?

> The Call Stack is a LIFO data structure used by the runtime to keep track of active function calls and their execution state.

---

## Q2. What happens when a function is called?

> A new function invocation becomes active, its execution state is maintained in a stack frame, and that frame is pushed onto the Call Stack.

---

## Q3. What happens when a function returns?

> Its active stack frame is removed, and execution resumes in the caller at the appropriate return point.

---

## Q4. Why does the Call Stack follow LIFO?

> Because the most recently called function must complete before its caller can continue execution.

---

## Q5. What happens when a function calls itself?

> A new invocation of the same function is created. It has its own execution state and stack frame, which is pushed onto the Call Stack.

---

## Q6. Why does the stack grow during recursion?

> Because each recursive call creates a new active invocation before the previous invocation has returned.

---

## Q7. When does the stack start shrinking?

> After the base case is reached and recursive calls begin returning.

---

## Q8. What is recursion unwinding?

> It is the process of returning from recursive calls one by one and removing their corresponding stack frames.

---

## Q9. Why is the base case necessary?

> It provides a termination condition. Without it, recursive calls can continue until the Call Stack is exhausted.

---

## Q10. What is the difference between base case and recursive case?

> The base case stops recursion, while the recursive case makes another recursive call toward the base case.

---

## Q11. Why does code after a recursive call execute in reverse order?

> Because recursive calls are stored in a LIFO Call Stack. The most recent recursive call returns first, so the later-created invocation resumes first.

---

## Q12. What causes stack overflow in recursion?

> Excessive recursion depth or recursion that never terminates can create more active stack frames than the Call Stack can support.

---

## Q13. Does every recursive call have its own stack frame?

> Conceptually, every active function invocation has its own execution state represented by its own stack frame.

---

## Q14. What is recursion depth?

> It is the maximum number of nested active recursive calls during execution.

---

## Q15. What is the difference between recursion and iteration?

> Recursion repeatedly invokes functions, while iteration repeatedly executes a block using loops. Recursive execution relies on the call stack for nested calls.

---

# 59. Most Important Dry Run

Learn this example extremely well:

```js
function fun(n) {
    if (n === 0) {
        return;
    }

    console.log("Before", n);

    fun(n - 1);

    console.log("After", n);
}

fun(3);
```

### Call phase

```text
fun(3)
 ↓
fun(2)
 ↓
fun(1)
 ↓
fun(0)
```

### Stack at deepest point

```text
┌────────────┐
│ fun(0)     │
├────────────┤
│ fun(1)     │
├────────────┤
│ fun(2)     │
├────────────┤
│ fun(3)     │
├────────────┤
│ Global     │
└────────────┘
```

### Base case

```text
fun(0)
 ↓
return
```

### Unwinding

```text
fun(1) → After 1
fun(2) → After 2
fun(3) → After 3
```

### Output

```text
Before 3
Before 2
Before 1
After 1
After 2
After 3
```

If you can explain **why this output occurs using the Call Stack**, you understand the core of recursion.

---

# 60. Final Chapter Summary

```text
FUNCTION
   ↓
Function Call
   ↓
New Invocation
   ↓
Stack Frame
   ↓
Push onto Call Stack
   ↓
Function Executes
   ↓
May Call Another Function
   ↓
Another Frame
   ↓
Function Returns
   ↓
Frame Popped
   ↓
Caller Resumes
```

When the function calls itself:

```text
FUNCTION
   ↓
CALL ITSELF
   ↓
NEW INVOCATION
   ↓
NEW STACK FRAME
   ↓
CALL ITSELF AGAIN
   ↓
STACK GROWS
   ↓
BASE CASE
   ↓
RETURN
   ↓
UNWINDING
   ↓
STACK FRAMES POP
   ↓
CALLER RESUMES
   ↓
PROGRAM CONTINUES
```

---

# ⭐ The Core Mental Model for Recursion

Memorize this:

```text
              RECURSIVE FUNCTION
                      │
                      ▼
                Base Case?
                 /       \
               YES        NO
                │          │
                ▼          ▼
              RETURN   Recursive Call
                           │
                           ▼
                     New Stack Frame
                           │
                           ▼
                     Smaller Problem
                           │
                           ▼
                     Recursive Call
                           │
                          ...
                           │
                           ▼
                      BASE CASE
                           │
                           ▼
                         RETURN
                           │
                           ▼
                     POP FRAME
                           │
                           ▼
                    RESUME CALLER
                           │
                           ▼
                  Execute remaining code
                           │
                           ▼
                         RETURN
```

### In one sentence:

> **Recursion works by creating a new function invocation and stack frame for each recursive call, continuing until the base case is reached, and then unwinding those calls one by one as each frame returns and is removed from the Call Stack.**

---

## Chapter 2 — Must-Know Checklist

Before moving to the next recursion chapter, you should be able to explain:

* [ ] What is a function?
* [ ] What is a function call?
* [ ] Parameters vs arguments
* [ ] What does `return` do?
* [ ] What is the Call Stack?
* [ ] Why does it follow LIFO?
* [ ] What is push?
* [ ] What is pop?
* [ ] What is a stack frame?
* [ ] What happens when a function is called?
* [ ] What happens while a function is executing?
* [ ] What happens when a function returns?
* [ ] What is a caller?
* [ ] What is a callee?
* [ ] What is a return/continuation point?
* [ ] How does a function call another function?
* [ ] How does a function call itself?
* [ ] Why does each recursive call have its own state?
* [ ] Why does the Call Stack grow during recursion?
* [ ] What is a base case?
* [ ] What is a recursive case?
* [ ] Why must recursion move toward the base case?
* [ ] What happens when the base case is reached?
* [ ] What is recursion unwinding?
* [ ] Why does the stack shrink during unwinding?
* [ ] What happens to code after a recursive call?
* [ ] What is recursion depth?
* [ ] What is stack overflow?
* [ ] Direct vs indirect recursion
* [ ] Recursion vs iteration
* [ ] Call Stack vs recursion tree
* [ ] How recursion affects space complexity
* [ ] How to dry-run recursive code

**This is the complete foundation you need for the actual DSA recursion problems.** The next stage can now focus on solving recursion: **how to think recursively → print problems → parameterized vs functional recursion → factorial/sum/power → multiple recursion calls → recursion trees → time/space complexity → classic DSA problems.**
