# Daily Temperatures - Monotonic Stack



## 📌 Problem

Given an array of integers `temperatures`, return an array `answer` such that:

```text
answer[i] = number of days you have to wait
           after the ith day
           to get a warmer temperature
```

If there is no future day with a warmer temperature:

```text
answer[i] = 0
```

### Example

```text
Input:
[73,74,75,71,69,72,76,73]

Output:
[1,1,4,2,1,1,0,0]
```

---

# 🧠 Initially — What Do We Need to Find?

We need to find the **next greater temperature** for every temperature.

Consider:

```text
Temperature:  73   74   75   71   69   72   76   73
Day:           1    2    3    4    5    6    7    8
Index:         0    1    2    3    4    5    6    7
```

For every day:

> Find the first future day whose temperature is **strictly greater** than the current temperature.

Then calculate:

```text
warmer day - current day
```

---

# 🔍 Example: 75

Suppose we are at:

```text
Day 3 → 75
```

Look at the future temperatures:

```text
Day 4 → 71 ❌
Day 5 → 69 ❌
Day 6 → 72 ❌
Day 7 → 76 ✅
```

So:

```text
Current day  = 3
Warmer day   = 7

7 - 3 = 4
```

Therefore:

```text
answer[2] = 4
```

Using JavaScript indexes:

```text
75 → index 2
76 → index 6

6 - 2 = 4
```

Both give the same difference.

---

# 💡 Initially — Brute Force Idea

The simplest approach is:

```text
For every temperature:

    Look at every temperature to its right.

    Find the first warmer temperature.

    Calculate the difference between their positions.
```

For example:

```text
75
 ↓
71 ❌
 ↓
69 ❌
 ↓
72 ❌
 ↓
76 ✅
```

### Brute Force Code

```javascript
var dailyTemperatures = function(temperatures) {

    let n = temperatures.length;
    let result = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {

            if (temperatures[j] > temperatures[i]) {

                result[i] = j - i;
                break;
            }
        }
    }

    return result;
};
```

### Complexity

```text
Time  → O(n²)
Space → O(n)
```

The problem is that we repeatedly search the same future temperatures.

Since:

```text
1 <= temperatures.length <= 10⁵
```

we should look for an `O(n)` solution.

---

# 🚀 Optimization — Monotonic Stack

Instead of repeatedly searching to the right, process the array from:

```text
RIGHT → LEFT
```

Why?

Because when we process a day, all of its future days have already been processed.

Example:

```text
73  74  75  71  69  72  76  73
                            ↑
                          Start
```

Then:

```text
73  74  75  71  69  72  76  73
                        ↑
```

Eventually:

```text
73  74  75  71  69  72  76  73
↑
```

This allows us to keep useful future temperatures in a stack.

---

# 📚 What Is the Stack Used For?

The stack stores temperatures that can potentially be the **next warmer temperature** for an earlier day.

For example:

```text
stack = [76,72,71]
```

When we encounter:

```text
current = 75
```

we check the top:

```text
71 <= 75
```

`71` cannot be warmer than `75`, so remove it.

```text
stack = [76,72]
```

Again:

```text
72 <= 75
```

Remove it.

```text
stack = [76]
```

Now:

```text
76 > 75
```

So `76` is the next warmer temperature.

---

# ❓ Why Remove `<= current`?

The problem requires a **strictly warmer** temperature.

We need:

```text
StackTop > Current
```

Therefore, if:

```text
StackTop <= Current
```

it cannot be the answer.

For example:

```text
Current = 75
StackTop = 75
```

`75` is not warmer than `75`.

So we remove equal temperatures as well.

```javascript
if (StackTop <= current) {
    stack.pop();
}
```

---

# 🗺️ Why Do We Need a Map?

Our stack stores:

```text
Temperature
```

But the answer requires:

```text
Number of days
```

To calculate the number of days, we need the index of the warmer temperature.

For example:

```text
75 → Day 3
76 → Day 7
```

We need:

```text
7 - 3 = 4
```

So we maintain:

```javascript
let idx = new Map();
```

The Map stores:

```text
Temperature → Index
```

Example:

```text
76 → 6
72 → 5
69 → 4
71 → 3
75 → 2
74 → 1
73 → 0
```

We update it using:

```javascript
idx.set(current, i);
```

---

# 🧮 Main Formula

The most important calculation is:

```javascript
let noOfDay = idx.get(StackTop) - i;
```

Think of it as:

```text
warmer temperature index
            -
current temperature index
```

### Example

```text
Current:
75 → index 2

Next warmer:
76 → index 6
```

Therefore:

```text
6 - 2 = 4
```

So:

```text
result[2] = 4
```

---

# 🔄 Complete Dry Run

Input:

```text
[73,74,75,71,69,72,76,73]
```

Initial:

```text
result = [0,0,0,0,0,0,0,0]
stack  = []
```

---

## Day 8 → 73

```text
current = 73
stack = []
```

No future day exists.

```text
result[7] = 0
```

Store:

```text
73 → 7
```

Push:

```text
stack = [73]
```

---

## Day 7 → 76

```text
current = 76
stack = [73]
```

Check:

```text
73 <= 76
```

Remove:

```text
stack = []
```

No warmer temperature exists.

```text
result[6] = 0
```

Push:

```text
stack = [76]
```

Store:

```text
76 → 6
```

---

## Day 6 → 72

```text
current = 72
stack = [76]
```

Check:

```text
76 > 72
```

So `76` is the next warmer temperature.

Indexes:

```text
76 → 6
72 → 5
```

Calculate:

```text
6 - 5 = 1
```

Therefore:

```text
result[5] = 1
```

Push:

```text
stack = [76,72]
```

---

## Day 5 → 69

```text
current = 69
stack = [76,72]
```

Top:

```text
72 > 69
```

Therefore:

```text
5 - 4 = 1
```

So:

```text
result[4] = 1
```

Push:

```text
stack = [76,72,69]
```

---

## Day 4 → 71

```text
current = 71
stack = [76,72,69]
```

Top:

```text
69 <= 71
```

Remove:

```text
stack = [76,72]
```

Now:

```text
72 > 71
```

So `72` is the next warmer temperature.

Indexes:

```text
72 → 5
71 → 3
```

Calculate:

```text
5 - 3 = 2
```

Therefore:

```text
result[3] = 2
```

Push:

```text
stack = [76,72,71]
```

---

## Day 3 → 75

This is the most important example.

```text
current = 75
stack = [76,72,71]
```

Remove:

```text
71 <= 75
```

```text
stack = [76,72]
```

Remove:

```text
72 <= 75
```

```text
stack = [76]
```

Now:

```text
76 > 75
```

So:

```text
75 → 76
```

Positions:

```text
75 → Day 3 → index 2
76 → Day 7 → index 6
```

Calculate:

```text
6 - 2 = 4
```

Therefore:

```text
result[2] = 4
```

Push:

```text
stack = [76,75]
```

---

## Day 2 → 74

```text
current = 74
stack = [76,75]
```

Top:

```text
75 > 74
```

Positions:

```text
75 → index 2
74 → index 1
```

Calculate:

```text
2 - 1 = 1
```

Therefore:

```text
result[1] = 1
```

Push:

```text
stack = [76,75,74]
```

---

## Day 1 → 73

```text
current = 73
stack = [76,75,74]
```

Top:

```text
74 > 73
```

Positions:

```text
74 → index 1
73 → index 0
```

Calculate:

```text
1 - 0 = 1
```

Therefore:

```text
result[0] = 1
```

---

# ✅ Final Result

```text
[1,1,4,2,1,1,0,0]
```

---

# 🧑‍💻 Code — Your Approach

```javascript
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function(temperatures) {

    let len = temperatures.length;

    // Stores possible future warmer temperatures
    let stack = [];

    // Initially, every answer is 0
    let result = new Array(len).fill(0);

    // Stores: temperature → index
    let idx = new Map();

    // Traverse from right to left
    for (let i = len - 1; i >= 0; i--) {

        const current = temperatures[i];

        // Store the current temperature's index
        idx.set(current, i);

        // Remove temperatures that cannot be the answer
        while (stack.length) {

            let StackTop = stack[stack.length - 1];

            if (StackTop <= current) {

                // StackTop is smaller/equal,
                // so it cannot be warmer.
                stack.pop();

            } else {

                // StackTop is the next warmer temperature.
                let noOfDay = idx.get(StackTop) - i;

                // Store number of days to wait.
                result[i] = noOfDay;

                break;
            }
        }

        // No warmer temperature exists.
        if (stack.length === 0) {
            result[i] = 0;
        }

        // Current temperature can help
        // previous days.
        stack.push(current);
    }

    return result;
};
```

---

# 🧪 Test Cases

### Example 1

```javascript
console.log(
    dailyTemperatures([73,74,75,71,69,72,76,73])
);

// Output:
// [1,1,4,2,1,1,0,0]
```

### Example 2

```javascript
console.log(
    dailyTemperatures([30,40,50,60])
);

// Output:
// [1,1,1,0]
```

### Example 3

```javascript
console.log(
    dailyTemperatures([30,60,90])
);

// Output:
// [1,1,0]
```

---

# ⚠️ Important Edge Cases

### 1. Only One Day

```text
[73]
```

No future day:

```text
[0]
```

---

### 2. Decreasing Temperatures

```text
[90,80,70,60]
```

No warmer temperature exists:

```text
[0,0,0,0]
```

---

### 3. Increasing Temperatures

```text
[30,40,50,60]
```

Every day gets warmer the next day:

```text
[1,1,1,0]
```

---

### 4. Equal Temperatures

```text
[70,70,71]
```

Equal temperature is **not** warmer.

Therefore, the comparison must remove:

```text
StackTop <= current
```

---

# ⏱️ Complexity

## Time Complexity — `O(n)`

Even though there is a `while` loop inside the `for` loop, the complexity is still `O(n)`.

Why?

Every temperature is:

```text
Pushed → At most once
Popped  → At most once
```

Therefore:

```text
n pushes + n pops
= 2n
= O(n)
```

So:

```text
Time Complexity = O(n)
```

---

## Space Complexity — `O(n)`

We use:

```text
stack → O(n)
result → O(n)
Map → O(n)
```

Therefore:

```text
Space Complexity = O(n)
```

---

# 📌 Exam Notes

| Concept          | Answer                       |
| ---------------- | ---------------------------- |
| Problem Pattern  | Next Greater Element         |
| Technique        | Monotonic Stack              |
| Traversal        | Right → Left                 |
| Stack Stores     | Temperatures                 |
| Map Stores       | Temperature → Index          |
| Remove Condition | `StackTop <= current`        |
| Warmer Condition | `StackTop > current`         |
| Formula          | `warmerIndex - currentIndex` |
| No Warmer Day    | `0`                          |
| Time             | `O(n)`                       |
| Space            | `O(n)`                       |

---

# 🧠 Remember This

```text
Daily Temperatures
        ↓
Find next greater temperature
        ↓
Process Right → Left
        ↓
Maintain Monotonic Stack
        ↓
Remove <= current
        ↓
Stack Top = next warmer temperature
        ↓
Get warmer index from Map
        ↓
warmerIndex - currentIndex
        ↓
Store answer
        ↓
Push current temperature
```

### One-line intuition

> **For every day, remove all future temperatures that cannot be warmer. The first temperature left on the stack is the next warmer temperature, and its index difference tells us how many days we need to wait.**

---

# ⚠️ Note About This Approach

This solution follows the **Stack + Map approach** shown above. However, for a production/LeetCode submission, the more standard implementation is to store **indices directly in the stack** instead of temperatures plus a `Map`.

Why?

Because temperatures can repeat:

```text
[70,70,71]
```

A `Map` stores only one index for a given temperature, while a stack of indices preserves every occurrence.

The index-stack version is therefore more robust:

```javascript
var dailyTemperatures = function(temperatures) {

    let n = temperatures.length;
    let stack = [];
    let result = new Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {

        while (
            stack.length &&
            temperatures[stack[stack.length - 1]] <= temperatures[i]
        ) {
            stack.pop();
        }

        if (stack.length) {
            result[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }

    return result;
};
```

Both implementations use the same fundamental idea:

> **Next Greater Element + Monotonic Stack + index difference.**
