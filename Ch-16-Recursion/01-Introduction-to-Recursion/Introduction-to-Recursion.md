# Master Recursion: The Complete Guide from Basics to Advanced

This chapter introduces recursion: what it is, how a recursive process reaches an answer, and how to recognize whether it will stop. Later chapters examine JavaScript function calls in more depth and build a systematic method for designing recursive solutions.

**How to study this chapter:** First understand the two-part pattern (base case + progress-making recursive step). Then trace the small examples by hand. For exams and interviews, practice explaining what one call does, how it gets closer to the base case, and what happens after the base case returns.

## 🔹 What Is Recursion?

Recursion is a problem-solving technique in which a function solves a problem by calling itself on a smaller or simpler version of that problem.

Here, one **call** (also called an **invocation**) means one time the function starts running. In recursion, one call starts another call to the same function. The first call waits while the next call works on a simpler part of the problem.

A recursive solution needs two ideas:

1. **A base case:** a simple input whose answer can be given directly, without another recursive call.
2. **A recursive step:** a call that makes progress toward an input handled by the base case.

For example, to count the people in a line, one person can count themself and ask how many people are behind them. The next person asks the same question about a shorter line. Eventually, someone sees no one behind them and answers zero. Each waiting person adds one to that answer.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0cs9h2iv2bkwy7q2fhkp.png)

## 🧠 Explanation: Why Recursion Is Useful

Many problems contain smaller copies of the same structure. A folder can contain folders; each nested folder can contain more folders. A tree node has child nodes that are themselves roots of smaller trees. Recursion lets one function describe how to process one level and apply that same rule to each smaller part.

Recursion is useful when the problem has this repeated structure, especially for trees, nested data, divide-and-conquer algorithms, and backtracking. A loop is often simpler for a straightforward count or scan. Recursion is a way to express a solution, not a requirement for every problem.

## 💡 Real-Life Analogy: Counting a Line

Imagine **11 people** are standing in one line. Person 1 is at the front, and Person 11 is at the back:

```text
Front                                                    Back
Person 1 → Person 2 → Person 3 → ... → Person 10 → Person 11
```

Person 1 wants to know: **“How many people are behind me?”** Person 1 does not know yet, so they ask Person 2:

> “How many people are behind you?”

Person 2 also does not know, so Person 2 asks Person 3 the same question. The question keeps moving one person toward the back. Here is every ask in the line:

```text
Person 1 asks Person 2:  "How many people are behind you?"
Person 2 asks Person 3:  "How many people are behind you?"
Person 3 asks Person 4:  "How many people are behind you?"
Person 4 asks Person 5:  "How many people are behind you?"
Person 5 asks Person 6:  "How many people are behind you?"
Person 6 asks Person 7:  "How many people are behind you?"
Person 7 asks Person 8:  "How many people are behind you?"
Person 8 asks Person 9:  "How many people are behind you?"
Person 9 asks Person 10: "How many people are behind you?"
Person 10 asks Person 11: "How many people are behind you?"
```

Person 11 is at the very back. Nobody is behind Person 11, so Person 11 can answer immediately:

> “There are 0 people behind me.”

That is the **base case**: Person 11 has a simple answer and does not need to ask anyone else.

Now the answer travels back toward the front. Each person adds the next person in line to the number that person reported:

| Person answering | What they know | Their answer: people behind them |
| --- | --- | ---: |
| Person 11 | Nobody is behind Person 11. | `0` |
| Person 10 | Person 11, plus the `0` people behind Person 11. | `1 + 0 = 1` |
| Person 9 | Person 10, plus the `1` person behind Person 10. | `1 + 1 = 2` |
| Person 8 | Person 9, plus the `2` people behind Person 9. | `1 + 2 = 3` |
| Person 7 | Person 8, plus the `3` people behind Person 8. | `1 + 3 = 4` |
| Person 6 | Person 7, plus the `4` people behind Person 7. | `1 + 4 = 5` |
| Person 5 | Person 6, plus the `5` people behind Person 6. | `1 + 5 = 6` |
| Person 4 | Person 5, plus the `6` people behind Person 5. | `1 + 6 = 7` |
| Person 3 | Person 4, plus the `7` people behind Person 4. | `1 + 7 = 8` |
| Person 2 | Person 3, plus the `8` people behind Person 3. | `1 + 8 = 9` |
| Person 1 | Person 2, plus the `9` people behind Person 2. | `1 + 9 = 10` |

So there are **10 people behind Person 1**. There are 11 people in the whole line if we also count Person 1.

Here is the same rule written as a tiny JavaScript example. For this example, pass a person number from `1` through `11`. The function's job is to return how many people are behind that person:

```javascript
function peopleBehind(personNumber) {
  if (personNumber === 11) return 0; // Person 11 is last: nobody is behind them.

  return 1 + peopleBehind(personNumber + 1); // Count the next person, too.
}

console.log(peopleBehind(1)); // 10
```

For example, `peopleBehind(10)` returns `1 + peopleBehind(11)`. `peopleBehind(11)` returns `0`, so `peopleBehind(10)` returns `1`. Then `peopleBehind(9)` returns `1 + 1`, which is `2`. This continues until `peopleBehind(1)` returns `10`.

The people passing the question toward Person 11 are like recursive calls: each person asks the next person the same kind of question about a smaller part of the line. Person 11's direct answer is the base case. The people passing answers back and adding one are like calls returning their answers to the people who asked them.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q51vhlvr1oytvi0ap50d.jpg)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m4khw7dzf9wktkt6s6rw.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yiw5fhphuc9o7tnk62th.png)

## Two Parts of Recursion

A recursive solution has two **roles**:

| Part | Simple question it answers | In the 11-person line example |
| --- | --- | --- |
| **Base case** | “When can I answer without asking again?” | Person 11 is last, so `0` people are behind them. |
| **Recursive case** | “How can I ask the same question about a smaller part?” | Ask the next person, then add `1` for that person. |

These are two parts of the solution, not necessarily two separate function calls. The base case handles the stopping input. The recursive case handles the other supported inputs by making progress toward that stopping input.

### 1. Base Case

A **base case** identifies an input the function can handle immediately. It prevents that call (one run of the function) from making another recursive call.

#### What is the base case responsible for?

The base case is the **stopping rule for recursive calls**. When an invocation meets it, that invocation answers directly and does not call itself again. This is what prevents a recursive process from continuing forever **when the recursive steps reach the base case**.

People sometimes call this an “infinite loop,” but recursion and loops repeat in different ways: a loop repeats statements inside a function, while infinite recursion keeps creating nested function calls. A missing or unreachable base case can cause infinite recursion; in JavaScript, the growing call depth usually ends in a stack overflow error.

Keep these basic points in mind:

- **Check the base case before the recursive call.** Otherwise, even a stopping input may make one extra call or do work the problem does not require.
- **The base case must be reachable.** A base case in the code does not help if the recursive calls never produce an input that satisfies it.
- **The recursive step must make progress.** Termination depends on both a stopping rule and calls that move toward it.
- **Use the right base-case answer.** A print-only function may use `return;`; a sum may return `0`; a product may return `1`. The correct answer depends on the problem.
- **Consider all supported boundary inputs.** A function may need more than one base case, such as handling both an empty array and a one-element array.
- **A base-case return ends only its current invocation.** Earlier calls may still resume and finish as the calls unwind.

> **Exam reminder:** When asked for the base case, state both the condition and why the answer is already known there. Then show that the recursive call moves toward that condition.

The base case must match the problem's input rules. For a countdown that stops at zero, `n === 0` is a suitable base case only when the function starts with a non-negative integer and decreases by one. A function that may receive negative numbers needs a deliberate rule for them too. A base case that is never reached does not stop recursion.

When a base-case invocation returns, it finishes **that invocation**. Earlier invocations may still be waiting for its result or for the recursive call to finish. They resume one at a time, in reverse call order. Reaching a base case therefore stops further descent; it does not automatically erase every waiting call.

### 2. Recursive Case

The **recursive case** handles an input that is not yet simple enough to answer directly. It calls the same function on a smaller or simpler part of the problem. The new input must make progress toward a base case.

“Smaller” does not always mean that a number gets lower. In `sumToN(n)`, the number decreases from `n` to `n - 1`. In the line example, the person number increases (`1`, `2`, `3`, ...), but the number of people still behind the person gets smaller. The important rule is that every call moves closer to its base case.

In `peopleBehind`, the recursive case is `return 1 + peopleBehind(personNumber + 1)`: ask about the next person, then count that person as one person behind you. Person 11 uses the base case instead, so no further call is made.

### Remember These Three Questions

For any recursive function, identify:

1. **Where does it stop?** Find the base case.
2. **How does it get closer to stopping?** Follow the changed argument in the recursive call.
3. **What does each call do with the smaller answer?** It may print something, return a value, or do work after the call returns.

If you cannot answer the first two questions, do not assume the function will terminate. If it returns a calculated answer, also check that each caller uses or returns the recursive result.

### A First Example: Countdown

**Problem:** Print the integers from `n` down to `1`, for a non-negative integer `n`.

**Responsibility of one call:** `countDown(n)` prints `n`, then asks `countDown(n - 1)` to print the remaining positive integers. For `n <= 0`, there is nothing to print.

Because this function's job is to print, it does not need to return a calculated answer. In JavaScript, a bare `return;` ends the current call and produces `undefined` for that call. The printed output is the visible result here.

```javascript
function countDown(n) {
  if (n <= 0) return; // Base case: this call has no work to do.

  console.log(n);     // Current call's work, before the next call.
  countDown(n - 1);   // Smaller problem: n moves toward 0.
}

countDown(3);
```

**Execution trace for `countDown(3)`:**

| Active call | Action | Output so far |
| --- | --- | --- |
| `countDown(3)` | Prints `3`, then calls `countDown(2)` | `3` |
| `countDown(2)` | Prints `2`, then calls `countDown(1)` | `3 2` |
| `countDown(1)` | Prints `1`, then calls `countDown(0)` | `3 2 1` |
| `countDown(0)` | Meets `n <= 0`; returns without another call | `3 2 1` |

The order matters: the current number is printed **before** the next call is made. That is why the output starts at `3` and counts down.

After `countDown(0)` returns, `countDown(1)` resumes after the call it made. It has no more statements, so it finishes. Then `countDown(2)` finishes, followed by `countDown(3)`. Each call retains its own `n` for as long as that call is active. The final output is:

```text
3
2
1
```

The calls form a chain, with one active call waiting on the next:

```text
countDown(3)
  waits for countDown(2)
    waits for countDown(1)
      waits for countDown(0)  // base case returns
```

This is a useful mental model of the call stack. Chapter 2 explains function execution and stack frames more fully. The drawing is a teaching model; JavaScript engines choose their own implementation details.

### Detailed Example: A Base Case That Returns an Answer

The countdown prints values, but it does not build a returned answer. Here is a recursive function whose base case returns a value that the waiting calls need.

**Problem:** Find the sum of all integers from `1` through `n`, where `n` is a non-negative integer. For example, `sumToN(3)` should return `1 + 2 + 3`, which is `6`.

**Responsibility of one call:** `sumToN(n)` returns the sum from `1` through `n`. It can use the smaller answer, `sumToN(n - 1)`, and add `n`.

```javascript
function sumToN(n) {
  if (n === 0) return 0;       // Base case: the sum from 1 through 0 is 0.

  return n + sumToN(n - 1);    // Add n to the smaller sum.
}

console.log(sumToN(3)); // 6
```

The input condition matters: this version expects a non-negative integer. Starting at `-1` would never reach `n === 0` by subtracting one, so negative input is outside this function's stated contract.

#### Phase 1: Calls move toward the base case

For each positive `n`, the function needs the answer from `sumToN(n - 1)` before it can finish the `return` expression. So the current call pauses and waits.

| Call | What this call is waiting to calculate |
| --- | --- |
| `sumToN(3)` | `3 + sumToN(2)` |
| `sumToN(2)` | `2 + sumToN(1)` |
| `sumToN(1)` | `1 + sumToN(0)` |
| `sumToN(0)` | Base case: return `0` immediately |

At `sumToN(0)`, the base-case condition is true. This call returns `0` and does **not** call `sumToN(-1)`. That is how this input sequence stops growing.

#### Phase 2: Waiting calls use the returned values

The base-case value goes back to the call that asked for it. Each waiting call adds its own `n` and returns a new answer:

| Returning call | Calculation after the smaller call returns | Value returned |
| --- | --- | --- |
| `sumToN(0)` | Base case | `0` |
| `sumToN(1)` | `1 + 0` | `1` |
| `sumToN(2)` | `2 + 1` | `3` |
| `sumToN(3)` | `3 + 3` | `6` |

The original call, `sumToN(3)`, therefore returns `6`. Notice that the base case did not calculate the whole answer by itself. It supplied the simplest known answer, `0`; the waiting calls used that value to build the complete sum.

**Complexity:** For input `n`, there are `n + 1` calls, counting `sumToN(0)`. Each call does constant work, so time is `O(n)`. At most `n + 1` calls are active together, so auxiliary call-stack space is `O(n)`.

### 🔹 Going Down and Coming Back

- **Going down:** a call makes its recursive call. Statements before that call run before the next call begins.
- **Coming back (unwinding):** when a called function finishes, its caller resumes immediately after the call. Any remaining statements in the caller then run.

If a function has no statements after its recursive call, its waiting calls simply finish as the calls return. If it does have statements after the call, they run while the calls unwind. The location of an operation affects its order; recursion does not automatically print values in increasing or decreasing order.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c5z1ei3zse3xq6ehh2cf.png)

## Simple Examples

### 📉 Print 5 to 1

Work before the recursive call prints values while calls go down. The example accepts non-negative integers; values below `1` produce no output.

```javascript
function printDescending(n) {
  if (n < 1) return;

  console.log(n);
  printDescending(n - 1);
}

printDescending(5);
```

Output: `5`, `4`, `3`, `2`, `1`, each on its own line. The recursive calls receive `5, 4, 3, 2, 1`, then the base-case call receives `0` and returns.

### 📈 Print 1 to 5

Here the call happens before printing. Each invocation waits for the smaller call to finish; its own `console.log` runs as control returns.

```javascript
function printAscending(n) {
  if (n < 1) return;

  printAscending(n - 1);
  console.log(n);
}

printAscending(5);
```

The calls reach `n = 0`, where the base case returns. Then the waiting calls print `1`, `2`, `3`, `4`, and `5`, in that order. This example is intended for non-negative integer `n`.

### Reverse a String

**Problem:** Return a string with its characters in reverse order.

**Responsibility of one call:** `reverse(str)` returns the reverse of `str`. The empty string is already reversed, so it is the base case. For a non-empty string, reverse everything after the first character, then place the first character at the end.

```javascript
function reverse(str) {
  if (str === "") return "";

  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("cat")); // "tac"
```

For `reverse("cat")`, the calls reduce the input to `""`. The base case returns `""`; then the waiting calls build the answer: `"" + "t"` gives `"t"`, then `"t" + "a"` gives `"ta"`, then `"ta" + "c"` gives `"tac"`. Each `return` sends a value to the caller that made that particular call.

This direct example is intended to teach recursion, not optimize string processing: `slice` and concatenation create strings along the way, and repeatedly copying shorter strings can make the total work quadratic in the string length. Later chapters develop other implementation patterns.

## Base Cases, Inputs, and Termination

Before writing a recursive function, ask:

1. What inputs are valid?
2. What is the smallest or simplest valid input I can answer directly?
3. How does each recursive call move toward that input?
4. Does the function handle boundary values such as `0` and negative numbers according to its contract?

For example, `if (n === 0) return;` stops a countdown only if `n` starts as a non-negative integer and decreases by one. Starting with `-1` would produce `-2`, `-3`, and so on without reaching zero. Using `if (n <= 0) return;` handles those inputs by stopping immediately, but whether that is correct depends on what the function promises to do.

The base-case value also depends on the task. A function that prints may return without a value (`return;`). A function that calculates a sum may return `0` for the empty input. A function that calculates a product may return `1`. Choose the result that makes the problem's definition work.

## ⚠️ Infinite Repetition and Infinite Recursion

### 1️⃣ Repeating forever

An infinite loop is a loop whose condition never becomes false:

```javascript
while (true) {
  console.log("Hello");
}
```

This repeatedly logs `Hello`. A non-terminating loop may keep a program busy, but it does not add a new recursive function call at every iteration.

### 2️⃣ Recursive calls that never reach a base case

```javascript
function printNamaste() {
  console.log("Namaste");
  printNamaste(); // No stopping condition or progress.
}

printNamaste();
```

Each invocation logs once and then starts another invocation. In ordinary JavaScript runtimes, those calls continue to consume call-stack capacity; eventually the runtime typically throws a `RangeError` such as `Maximum call stack size exceeded`. The output is not literally infinite: the error interrupts execution after a runtime-dependent number of calls.

Some recursion bugs do contain a base case but still fail to reach it. For example, `if (n === 0) return; recurse(n + 1);` never reaches zero when started with a positive `n`. A correct base case and a progress-making recursive step are both needed.

### 3️⃣ How to prevent non-termination

- State the valid input range and handle boundary values deliberately.
- Check that each recursive call moves toward a base case.
- Try a small input and manually list the arguments passed to successive calls.
- Use logging or a debugger to inspect the values and call sequence.

## ⚠️ Stack Overflow

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5t40ouj8f40vy5l5aote.png)

The JavaScript runtime can keep only a limited depth of nested function calls. Recursion that does not terminate, or recursion that is valid but too deep for the runtime, can exceed that limit and throw an error. The exact practical depth varies by engine, environment, and program; avoid relying on a fixed number.

It is useful to picture active recursive calls as frames on a call stack: each caller must be able to resume after its callee returns. This model explains why deep recursion can require space proportional to its maximum depth. It does not mean every parameter, object, or value must physically live on a particular hardware stack; JavaScript engines control how execution state is represented.

### 🧪 Common causes

- A base case is missing or cannot be reached.
- The base-case condition is wrong for some allowed input.
- A recursive call does not change the input, or moves away from the base case.
- A valid recursive algorithm reaches a depth larger than the runtime can support.

### ✅ Ways to respond

- Define and test the base case and progress rule.
- Test boundary inputs, including zero and negative values when relevant.
- Use iteration when it expresses the solution more simply or avoids unsafe depth.
- For large inputs, consider an algorithm that reduces the problem faster, such as a divide-and-conquer method, when the problem permits it.

Tail-recursive code should not be assumed to use constant stack space in common JavaScript runtimes. JavaScript proper tail-call support is not something portable code can rely on; Chapter 2 discusses function calls in more detail.

## When to Use Recursion

### ✅ Recursion can fit well when:

- The input is naturally nested or hierarchical, such as a tree or folder structure.
- The problem can be reduced to one or more smaller instances of the same problem.
- Backtracking explores choices, such as paths through a maze or subsets of a set.
- A recursive description makes the structure easier to understand.

### ❌ Consider iteration or another approach when:

- A simple loop is clearer for a straightforward sequence or scan.
- The input may require more nested calls than the runtime can safely support.
- The recursive version creates repeated work that a different algorithm could avoid.

## Recursion vs Loop

| Feature | Recursion | Loop |
| --- | --- | --- |
| **How it repeats** | A function calls itself on a smaller problem | `for`, `while`, or another loop repeats statements |
| **How it stops** | A base case prevents another recursive call | The loop condition becomes false, or a control statement exits it |
| **State** | Active calls may each need state so they can resume | State is usually updated in loop variables |
| **Space** | Often uses call-stack space proportional to maximum call depth | Often uses constant extra space for simple scans |
| **Useful for** | Nested structures, divide-and-conquer, and backtracking | Straightforward counting, scanning, and accumulation |
| **Practical concern** | Deep calls can exceed the runtime's call-stack limit | A loop can also fail to terminate if its condition never changes |

The clearest choice depends on the problem, the expected input size, and the runtime's limits.

## Exam and Interview Revision

### Short definition to remember

> **Recursion is a technique where a function solves a problem by calling itself on a smaller or simpler input. A correct recursive solution has a base case and a recursive step that makes progress toward that base case.**

This definition is a starting point. To explain a specific solution well, also state what one call is responsible for and what happens to its result.

### A clear way to explain a recursive solution

When asked to describe or write a recursive solution, use this order:

1. **State the function's job.** What does `solve(input)` print, return, or check?
2. **State the input assumptions.** For example, “`n` is a non-negative integer.”
3. **Give the base case.** Explain what answer is correct at the stopping input.
4. **Show the smaller call.** Explain why its input is closer to the base case.
5. **Explain the work around the call.** Work before the call happens on the way down; work after it happens when that call returns.
6. **Trace a small example.** List the arguments down to the base case, then trace back up.
7. **State complexity.** For one call per level and constant work per call, count the levels and the maximum number of active calls.

This structure works for a written exam, a code walkthrough, and an interview explanation. It also helps expose bugs before running the code.

### Common exam and interview questions

**1. What are the two essential parts of recursion?**

A base case that can be answered directly, and a recursive step that makes progress toward a base case.

**2. Does reaching the base case end all recursive calls immediately?**

No. The base-case call finishes. Its waiting caller resumes, then that caller can finish and return to its caller. This continues until the original call finishes.

**3. Why does this code print in descending order?**

```javascript
function show(n) {
  if (n <= 0) return;
  console.log(n);
  show(n - 1);
}

show(3);
```

It prints before calling `show(n - 1)`, so `3`, `2`, and `1` are printed while calls go down. The output is `3 2 1` (one number per line).

**4. What changes if `console.log(n)` moves after the recursive call?**

```javascript
function show(n) {
  if (n <= 0) return;
  show(n - 1);
  console.log(n);
}

show(3);
```

Now each call waits before printing. The base-case call returns first, then the waiting calls print `1`, `2`, and `3`, in that order.

**5. What is wrong with `function f(n) { if (n === 0) return; f(n + 1); }` when called with a positive integer?**

The recursive step moves away from zero, so the base case is never reached. The calls keep growing until the runtime's call-stack limit is exceeded.

**6. What is the time and auxiliary space complexity of `show(n)` above for positive integer `n`?**

There are `n + 1` calls including the base-case call, with constant work per call, so time is `O(n)`. Up to `n + 1` calls are active at once, so auxiliary call-stack space is `O(n)`. The `O` notation describes growth as `n` increases; it does not give the exact runtime or stack limit.

### Quick self-check

Try answering these without looking back:

- What is the base case for `show(3)` and what argument reaches it?
- Which line makes progress toward the base case?
- Why does the second `show` example print in the opposite order?
- If a recursive function returns a value, where should that value go next?
- What is the difference between a loop that repeats and recursion that makes another function call?

**Answers:** `n <= 0` is the base case and `show(0)` reaches it; `show(n - 1)` makes progress; printing after the call waits for the smaller call to finish; a calculated value usually needs to be returned or combined by its caller; a loop repeats within its current function invocation, while recursion creates nested function calls that must return.

### One-minute revision sheet

```text
RECURSION = solve a smaller version of the same kind of problem
BASE CASE = answer directly; do not make another recursive call
RECURSIVE STEP = change the input so it moves toward the base case
BEFORE the call = work happens while calls go down
AFTER the call = work happens as calls return
TERMINATION = base case is reachable for every supported input
DEPTH = maximum active calls; often O(n) for n one-step reductions
```

Before submitting an exam answer or explaining code in an interview, test it with the smallest input, a typical input, and relevant boundary inputs such as `0` or a negative value. Make sure the written trace matches the actual code.
