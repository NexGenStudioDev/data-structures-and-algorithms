# 2620. Counter - Solution Guide

## 🎯 Problem Overview

**Difficulty:** Easy  
**Topics:** Closures, Higher-Order Functions, JavaScript Basics  
**Goal:** Create a counter function that starts at a given number `n` and increments by 1 every time it is called.

---

## 💡 Intuition

The core challenge here is **state preservation**. In a typical function, variables are created and destroyed every time the function runs. However, we need the counter to "remember" its current value between calls.

JavaScript solves this using **Closures**.
- A closure allows an inner function to "remember" the variables from the outer function's scope, even after the outer function has finished executing.
- When `createCounter(n)` runs, it creates a "private" variable `n`.
- The function it returns holds a reference to that specific `n`.
- Every time we call the returned function, it accesses and modifies that *same* `n`.

---

## 🚀 Approach

### Step-by-Step Logic

1.  **Define the Outer Function:** `createCounter(n)` takes the starting number.
2.  **Return an Inner Function:** This inner function is the actual counter we will call repeatedly.
3.  **Increment and Return:** Inside the inner function:
    - Use the **post-increment operator** (`n++`).
    - This returns the *current* value of `n` first, and *then* increases it by 1.
    - Because of the closure, the updated `n` is saved for the next call.

### Visual Walkthrough

Let's trace `const counter = createCounter(10);`

1.  **Call `createCounter(10)`:**
    - `n` is set to `10` in the outer scope.
    - Returns a function: `() => { return n++; }`.
    - `counter` now holds this function.

2.  **Call `counter()`:**
    - Returns current `n` (10).
    - `n` increments to `11`.
    - **Result:** `10`

3.  **Call `counter()` again:**
    - Returns current `n` (11).
    - `n` increments to `12`.
    - **Result:** `11`

4.  **Call `counter()` again:**
    - Returns current `n` (12).
    - `n` increments to `13`.
    - **Result:** `12`

---

## 💻 The Code

```javascript
/**
 * @param {number} n
 * @return {Function}
 */
var createCounter = function(n) {
    // The inner function closes over the variable 'n'
    return function() {
        // Post-increment: returns current value, THEN increments n
        return n++;
    };
};

// Example Usage:
const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
```

### 🔍 Why `n++` and not `++n`?

- **`n++` (Post-Increment):** Returns the value *before* adding 1.
  - If `n = 10`, it returns `10`, then `n` becomes `11`. ✅ (Correct for this problem)
- **`++n` (Pre-Increment):** Adds 1 *before* returning the value.
  - If `n = 10`, `n` becomes `11`, then it returns `11`. ❌ (Incorrect, skips the start value)

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(1)$ | The operation involves a single addition and return. It does not depend on the size of `n` or the number of calls (per call). |
| **Space Complexity** | $O(1)$ | We only store one number (`n`) in memory. No arrays or loops are used. |

---

## 🧪 Test Cases

You can verify the solution with these scenarios:

```javascript
// Test Case 1: Positive Start
const c1 = createCounter(10);
console.log(c1()); // 10
console.log(c1()); // 11
console.log(c1()); // 12

// Test Case 2: Negative Start
const c2 = createCounter(-2);
console.log(c2()); // -2
console.log(c2()); // -1
console.log(c2()); // 0
console.log(c2()); // 1
console.log(c2()); // 2

// Test Case 3: Zero Start
const c3 = createCounter(0);
console.log(c3()); // 0
console.log(c3()); // 1
```

---

## 🧠 Key Takeaways

1.  **Closures are Powerful:** They allow functions to maintain state without using global variables or classes.
2.  **Post-Increment vs. Pre-Increment:** Always check if the problem wants the value *before* or *after* the change.
    - "Return current, then increment" → `n++`
    - "Increment, then return" → `++n`
3.  **Higher-Order Functions:** `createCounter` is a function that returns another function. This is a fundamental concept in functional programming.



