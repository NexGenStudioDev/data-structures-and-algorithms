# 2620. Counter

**Difficulty:** Easy  
**Topics:** Closure, Higher-Order Functions  
**Companies:** (Various top tech companies)

## Description

Given an integer `n`, return a **counter function**. This counter function initially returns `n` and then returns `1` more than the previous value every subsequent time it is called (i.e., `n`, `n + 1`, `n + 2`, etc.).

---

## Examples

### Example 1
**Input:**
```text
n = 10 
["call","call","call"]
```
**Output:**
```text
[10, 11, 12]
```
**Explanation:**
```javascript
const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12
```

### Example 2
**Input:**
```text
n = -2
["call","call","call","call","call"]
```
**Output:**
```text
[-2, -1, 0, 1, 2]
```
**Explanation:**
```javascript
const counter = createCounter(-2);
counter(); // -2
counter(); // -1
counter(); // 0
counter(); // 1
counter(); // 2
```

---

## Constraints

- `-1000 <= n <= 1000`
- `0 <= calls.length <= 1000`
- `calls[i] === "call"`

---

## Key Concepts

### 1. Closures
This problem is a classic example of a **closure** in JavaScript. A closure allows an inner function to remember and access variables from its outer (lexical) scope, even after the outer function has finished executing.

- The variable `n` is defined in the outer function `createCounter`.
- The inner function returned by `createCounter` keeps a reference to `n`.
- Every time the inner function is called, it can modify and return the updated value of `n`.

### 2. Post-Increment (`n++`) vs Pre-Increment (`++n`)
- **Post-increment (`n++`)**: Returns the current value of `n`, then increments it.
  - Example: If `n = 10`, `return n++` returns `10`, then `n` becomes `11`.
- **Pre-increment (`++n`)**: Increments `n` first, then returns the new value.
  - Example: If `n = 10`, `return ++n` increments `n` to `11`, then returns `11`.

**For this problem, we need `n++` (post-increment)** because the first call should return the initial value `n` before incrementing.

---

## Solution Template

```javascript
/**
 * @param {number} n
 * @return {Function}
 */
var createCounter = function(n) {
    return function() {
        // Your code here
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```

---

## Tips for Implementation

1. **Use Post-Increment:** Ensure you use `n++` so the current value is returned before incrementing.
2. **No Arrays Needed:** The `["call", "call"]` array in the problem description is just a way to simulate multiple calls in the test environment. Your solution only needs to return a function that handles one call at a time.
3. **State Preservation:** The variable `n` persists between calls because of the closure. You do not need to re-initialize it.

