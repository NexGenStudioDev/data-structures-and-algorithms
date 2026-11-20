# DSA — Recursion

# Chapter 2: Functions, Function Calls, Call Stack & Recursion

> **Goal:** Understand how functions execute, how function calls are managed, how the Call Stack works with Global and Function Execution Contexts, and how a function can call itself to create recursion.

> **How to read the diagrams:** This chapter uses the familiar call-stack / execution-context model to make synchronous function calls easier to trace. The model is useful for reasoning about who is waiting and where execution continues. It is not a promise that a JavaScript engine stores every context in a literal, fixed-size box on a hardware stack. ECMAScript specifies behavior; engines choose how to implement it and may optimize it.

---

# 1. Why Learn Functions Before Recursion?

Before recursion, understand one simple idea:

> **Recursion is simply a function calling itself.**

So the foundation is:

```text
Global Execution Context (GEC)
   ↓
Function Call
   ↓
Function Execution Context (FEC)
   ↓
Call Stack (Push)
   ↓
Function Execution
   ↓
Function Return (Pop)
   ↓
Function Calls Itself (New FEC)
   ↓
Recursion
```

If you understand **function calls + Execution Contexts + Call Stack**, recursion stops feeling like magic and becomes completely intuitive.

---

# 2. What Is a Function?

A **function** is a reusable block of instructions designed to perform a specific task.

Example:

```text
function add(a, b):
    return a + b
```

Think:

```text
Function Definition
        ↓
"What should this function do?"

Function Call
        ↓
"Execute this function now."
```

A function does not run just because it has been defined.

It runs when it is **called** (also known as **invoked** in textbooks).

---

# 3. Function Definition vs Function Call

### Function Definition

```text
function add(a, b):
    return a + b
```

This tells the program:

> There is a function named `add` that takes two inputs and returns their sum.

### Function Call

```text
add(10, 20)
```

This tells the program:

> Execute `add` using `10` and `20`.

So:

```text
Definition → describes what the function does (like a recipe)

Call → runs the function (actually executes the code)
```

---

# 4. Parameters vs Arguments

Consider:

```text
function add(a, b):
    return a + b

add(10, 20)
```

### Parameters

```text
a
b
```

are **parameters**.

They are placeholders defined by the function to receive values.

### Arguments

```text
10
20
```

are **arguments**.

They are the actual values supplied during the call.

```text
function add(a, b)
            ↑  ↑
        Parameters


add(10, 20)
    ↑   ↑
  Arguments
```

### Easy memory trick

```text
Parameter = placeholder variable in function declaration

Argument = actual value passed during the call
```

This becomes very important in recursion because every recursive call can have different arguments.

JavaScript evaluates the argument expressions before the function body begins, then binds the resulting values to the parameters. For example:

```javascript
function show(value) {
  console.log(value);
}

let start = 4;
show(start + 1); // The expression is evaluated first; value receives 5.
```

For primitive values such as numbers, the parameter receives a copy of the value. For an array or object, the copied value is a reference to that object; the parameter and caller can therefore refer to the same object. The later shared-state example shows why that distinction matters in recursion.

```text
fun(5)
fun(4)
fun(3)
fun(2)
```

These are separate function calls, each running with its own input value.

---

# 5. What Is a Function Call?

A **function call** means asking the program to execute a function.

Example:

```text
main():
    add(10, 20)
```

When `add(10, 20)` is reached:

```text
main
 ↓
calls add
 ↓
add executes
 ↓
add returns
 ↓
main continues
```

The important idea for synchronous code is:

> **Calling a function temporarily pauses the caller and jumps to run that function.**

---

# 6. Function Return

A function may return a value to its caller.

Example:

```text
function add(a, b):
    return a + b
```

Call:

```text
result = add(10, 20)
```

Execution:

```text
add(10, 20)
      ↓
calculate 10 + 20
      ↓
return 30
      ↓
caller receives 30
```

So:

```text
Caller
  ↓
Function Call
  ↓
Function Executes
  ↓
Return Value
  ↓
Caller Continues
```

When the function reaches its closing brace without a `return` value, JavaScript returns `undefined`. A function can also return a value explicitly. The caller may use that value, store it, print it, combine it with another value, or ignore it.

---

# 7. What Does `return` Mean?

In JavaScript, a `return` statement ends the **current function invocation**. It sends its value (if any) to the caller. These are separate cases:

```text
return;        → end this call and return undefined
return value;  → end this call and return value
```

Example:

```text
function test():
    return 10

    print("Hello")
```

The statement after `return` is never reached in that call.

Think:

```text
Function
   ↓
return
   ↓
Current invocation ends
   ↓
Caller resumes
```

### `return` in recursive code

The placement of `return` determines what the caller receives:

| Code | What happens |
| --- | --- |
| `return;` | Ends this call and returns `undefined`. |
| `return value;` | Ends this call and returns `value`. |
| `return recurse(n - 1);` | Waits for the recursive call, then returns its result. |
| `recurse(n - 1);` | Makes the call but does not return its result. |
| `return n * recurse(n - 1);` | Waits for the child result, multiplies by `n`, and returns the product. |

Example:

```javascript
function descend(n) {
  if (n === 0) return "done"; // Base call returns a string.
  return descend(n - 1);      // Each caller passes that result back up.
}

function descendWithoutReturning(n) {
  if (n === 0) return "done";
  descendWithoutReturning(n - 1); // Calls the child, but discards its result.
}

console.log(descend(2));                 // "done"
console.log(descendWithoutReturning(2)); // undefined
```

`descend(2)` passes the base call's `"done"` result back to its original caller. `descendWithoutReturning(2)` also reaches the base case, but its outer calls discard the result and eventually return `undefined`.

**Remember:** `return` ends only the current invocation. Its caller resumes and may do more work or return its own result.

---

# 8. Caller and Callee

These two words appear frequently in DSA interviews:

```text
function A():
    B()
```

Here:

```text
A → Caller (the one making the call)
B → Callee (the function being called)
```

### Caller

The function that **calls another function**.

### Callee

The function that **gets called**.

### Easy real-life analogy:

Think of a telephone call:
- **Caller** = The person dialling the phone (`A`).
- **Callee** = The person picking up / answering the call (`B`).

```text
A()
 ↓
calls
 ↓
B()

A = Caller
B = Callee
```
---

# 9. What Happens When a Function Is Called?

A synchronous function call follows this simple sequence:

1. JavaScript evaluates the argument expressions from left to right.
2. Their values are assigned to the function's parameters.
3. The function body runs.
4. The function returns a value, or returns `undefined` if it reaches the end.
5. The caller continues with that result.

```javascript
function add(a, b) {
  return a + b;
}

const result = add(2 + 3, 4); // Arguments evaluate to 5 and 4; result is 9.
```

A function definition describes what to do. A function call runs it. The function being called is the **callee**; the function that called it is the **caller**.

---

# 10. Execution Contexts: A Useful Model

An **execution context** is JavaScript's model for the state needed to evaluate code. It helps explain parameters, local bindings, scope, and where a caller continues.

| Term | Simple meaning |
| --- | --- |
| **GEC** | Teaching label for the context evaluating top-level script code. |
| **FEC** | Teaching label for the state associated with a function call. |
| **Stack frame** | A common model for the state needed by one active call. |

For a simple synchronous example, picture function calls above top-level code:

```text
Top:    function currently running
        caller waiting for its callee
Bottom: top-level code (often labelled GEC)
```

These are reasoning diagrams. JavaScript specifies behavior but does not require every engine to store an execution context as a physical box on a hardware stack. Objects and arrays may be referenced by active calls and can outlive the function that created them.

---

# 11. JavaScript Declarations and Scope

“Setup, then execution” is a simplified model. JavaScript declarations do not all become usable at the same time:

- Function declarations can generally be called before their written position in the function body.
- `var` bindings begin as `undefined`; an assignment happens only when execution reaches it.
- `let` and `const` cannot be read before their declaration runs (the **temporal dead zone**).

```javascript
console.log(value); // ReferenceError
let value = 3;
```

Local variables belong to their function or block scope. Functions can also access bindings from where they were created (**lexical scope**). A **closure** keeps access to those bindings after the outer function returns:

```javascript
function makeCounter() {
  let count = 0;
  return () => ++count;
}

const next = makeCounter();
next(); // 1
next(); // 2
```

---

# 12. The Call Stack and LIFO

The **call stack** is a useful model for nested synchronous calls. The last function called is the first one to finish: **LIFO** (Last In, First Out).

```text
Top:    C() running
        B() waiting for C()
Bottom: A() waiting for B()
```

When `C()` returns, `B()` continues. When `B()` returns, `A()` continues. A timer or a promise waiting to run is not simply another paused function frame on this stack.

---

# 13. `return`, the Caller, and the Resume Point

| Statement | Effect |
| --- | --- |
| `return;` | Ends this call and returns `undefined`. |
| `return value;` | Ends this call and returns `value`. |
| `return recurse(n - 1);` | Returns the recursive call's result. |
| `recurse(n - 1);` | Calls the function but discards its result. |
| `return n * recurse(n - 1);` | Waits for the recursive result, multiplies it by `n`, then returns. |

A return ends **only the current invocation**. Its caller resumes after the call and can do more work.

```javascript
function sumToN(n) {
  if (n === 0) return 0;
  return n + sumToN(n - 1);
}

function sumToNWithoutReturning(n) {
  if (n === 0) return 0;
  sumToNWithoutReturning(n - 1); // The child runs, but its result is discarded.
}

sumToN(3);                    // 6
sumToNWithoutReturning(3);     // undefined
```

The caller's **resume point** is the next part of its evaluation after the callee finishes. In a simple example, this is the next statement.

---

# 14. Local Values and Shared State

Each function call has its own parameter and local **bindings**. Primitive values such as numbers are passed as values. For an array or object, the value is a reference, so two calls can refer to the same object.

```javascript
function addChild(items) {
  items.push("child");
}

const items = ["parent"];
addChild(items);
console.log(items); // ["parent", "child"]
```

An array declared inside a recursive call is a fresh array for that call. To collect results together, create one array and pass it through the calls:

```javascript
function collectDown(n, result = []) {
  if (n <= 0) return result;
  result.push(n);
  return collectDown(n - 1, result);
}

collectDown(3); // [3, 2, 1]
```

A global result array can keep old values between tests; reset it before reuse. Passing shared state through a helper parameter is usually easier to control. This example expects a non-negative integer `n`.

---

# 15. Recursive Calls Have Separate Local Bindings

A recursive call starts a new invocation. It does not overwrite the caller's parameter:

```text
Top:    fun(2), n = 2
        fun(3), n = 3, waiting for fun(2)
Bottom: top-level code
```

Each call has its own local `n`. Calls can still share global variables or objects, so local bindings are separate even when some data is shared.

---

# 16. Work Before and After a Recursive Call

Work before the call runs while calls go down. Work after the call runs as callers resume.

```javascript
function demo(n) {
  if (n === 0) return;

  console.log("Before", n);
  demo(n - 1);
  console.log("After", n);
}

demo(2);
```

Output:

```text
Before 2
Before 1
After 1
After 2
```

| Step | Current call | What happens |
| --- | --- | --- |
| 1 | `demo(2)` | Prints `Before 2`; waits for `demo(1)`. |
| 2 | `demo(1)` | Prints `Before 1`; waits for `demo(0)`. |
| 3 | `demo(0)` | Base case returns without another call. |
| 4 | `demo(1)` | Resumes after its call; prints `After 1`; returns. |
| 5 | `demo(2)` | Resumes after its call; prints `After 2`; returns. |

The **base case stops further recursive calls** on this path, which prevents the calls from continuing forever. It must be reachable; otherwise recursion can keep going until the runtime reports a stack overflow. The base case does not cancel callers that are already waiting—they resume and finish their work.

---

# 17. Return Values Build on the Way Back: Factorial

For non-negative integer `n`, factorial follows `factorial(0) = 1` and `factorial(n) = n × factorial(n - 1)`:

```javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

factorial(4); // 24
```

```text
Going down:  factorial(4) waits for factorial(3)
             factorial(3) waits for factorial(2)
             factorial(2) waits for factorial(1)
             factorial(1) waits for factorial(0)
             factorial(0) returns 1

Coming back: factorial(1) returns 1 × 1  = 1
             factorial(2) returns 2 × 1  = 2
             factorial(3) returns 3 × 2  = 6
             factorial(4) returns 4 × 6  = 24
```

---

# 18. Recursion for Nested Data

Nested folders are a natural example: a file returns its size; a folder adds the sizes returned by its children.

```javascript
function getSize(item) {
  if (item.type === "file") return item.size;

  let total = 0;
  for (const child of item.children) {
    total += getSize(child);
  }
  return total;
}
```

The loop visits each child; recursion handles the nested folders. An iterative solution could use an explicit stack instead.

---

# 19. Direct and Indirect Recursion

- **Direct:** a function calls itself.
- **Indirect (mutual):** function `A` calls `B`, and `B` eventually calls `A`.

Either way, make sure every call path can reach a base case. For example, `isEven`/`isOdd` using `n === 0` as the base case must receive a non-negative integer.

---

# 20. Call Stack, Recursion Tree, and Complexity

A **call stack** shows the active call chain at one moment. A **recursion tree** shows all branches created over the whole run.

```text
One recursive call:       Multiple recursive calls:
      f(n)                         f(n)
       ↓                         /     \
     f(n-1)                   f(n-1)  f(n-2)
       ↓
     f(n-2)
```

To estimate complexity:

- **Time:** count all calls and the work done in each call. One call per level with constant work is often `O(n)` when there are `n` levels.
- **Auxiliary space:** count the maximum number of simultaneously active calls. A chain of depth `n` uses `O(n)` call-stack space; for a branching tree, use its height, not its total node count.

A simple loop often uses `O(1)` extra space, but this depends on what data it stores.

---

# 21. Stack Depth and JavaScript Limits

The runtime supports only a finite depth of nested calls. There is no portable fixed limit. Missing or unreachable base cases can cause a stack overflow, and even a valid recursive solution may be too deep for its input size.

Tail-recursive code should not be assumed to use constant stack space in common JavaScript runtimes. Consider iteration or a more efficient algorithm when depth may be large.

---

# 22. A Short Method for Solving Recursive Problems

1. **Define:** What does `solve(input)` return or do? State valid inputs.
2. **Base:** What input can be answered directly?
3. **Reduce:** What smaller or simpler problem has the same structure?
4. **Progress:** Why will each call reach the base case?
5. **Combine:** How does the smaller result help solve this input?
6. **Trace:** Test a small input, going down and then back up.
7. **Analyze:** Count total work for time and maximum active calls for stack space.

---

# 23. Interview Checklist

When explaining a solution, state:

- What one call means and which inputs it supports.
- The base case and its answer.
- The recursive input and why it makes progress.
- How the current result uses the smaller result.
- A small dry run and time/space complexity.

---

# 24. Quick Revision

```text
DEFINE the function's job
→ answer a BASE CASE directly
→ REDUCE to a smaller same-kind problem
→ make PROGRESS toward the base
→ COMBINE the recursive result with current data
→ TRACE calls down and answers back
→ analyze total work and maximum call depth
```

> **Key question:** If the smaller problem is solved, what remains for this call to do?
