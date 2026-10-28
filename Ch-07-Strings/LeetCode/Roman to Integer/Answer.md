# 13. Roman to Integer - Solution Analysis

## 🎯 Problem Recap
Convert a Roman numeral string into an integer. The key rule is that if a smaller value appears before a larger value (e.g., `IV`), it is subtracted. Otherwise, values are added.

---

## 💡 Intuition & Logic

The solution relies on a **Lookahead Strategy**:
1.  **Map Values:** Store the integer value for every Roman symbol (`I`=1, `V`=5, etc.) in an object for quick lookup.
2.  **Iterate:** Loop through the string from left to right.
3.  **Compare:** At every step `i`, compare the value of the **current** character (`s[i]`) with the **next** character (`s[i+1]`).
    - If `current < next`: This indicates a subtractive case (like `IV` or `IX`). We **subtract** the current value.
    - If `current >= next`: This is a standard additive case. We **add** the current value.
4.  **Edge Case:** When `i` is the last character, `s[i+1]` is `undefined`. `roman[undefined]` returns `undefined`, which is treated as `NaN` in comparisons. However, since `undefined` is not greater than any number, the logic naturally falls to the `else` block (addition), which is correct for the last digit.

---

## 💻 The Code (Annotated)

Here is the solution with detailed comments explaining each step:

```javascript
// Step 1: Map Roman symbols to their integer values
const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let total = 0;

  // Step 3: Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    // Step 4: Get the value of current and next symbols
    // If i is the last index, s[i+1] is undefined, so nextVal becomes undefined
    let currentVal = roman[s[i]];
    let nextVal = roman[s[i + 1]];

    // Step 5: Check if next value is larger (subtractive case)
    // If nextVal is undefined, this condition is false (undefined > number is false)
    if (nextVal > currentVal) {
      // Subtract current value (e.g., IV: 1 is subtracted)
      total -= currentVal;
    } else {
      // Otherwise, just add it (e.g., VI: 5 is added, then 1 is added)
      total += currentVal;
    }
  }

  // Step 6: Return the final calculated total
  return total;
};

// Step 7: Test cases
console.log(romanToInt('III'));    // Output: 3 (1+1+1)
console.log(romanToInt('LVIII'));  // Output: 58 (50+5+1+1+1)
console.log(romanToInt('IV'));     // Output: 4 (5-1)
console.log(romanToInt('MCMXCIV'));// Output: 1994
```

> **Note on Test Case in Prompt:**  
> The prompt comment `// romanToInt('III'); // Output: 7` contains a typo.  
> `III` = 1 + 1 + 1 = **3**, not 7. The code correctly returns **3**.

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time** | $O(n)$ | We iterate through the string exactly once, where `n` is the length of the string. |
| **Space** | $O(1)$ | The `roman` object has a fixed size of 7 keys. No extra space grows with input size. |

---

## 🧪 Step-by-Step Execution Trace

Let's trace `s = "IV"`:

1.  **i = 0**: `currentVal` = 1 (`I`), `nextVal` = 5 (`V`).
    - Is `5 > 1`? **Yes**.
    - Action: `total -= 1` → `total` = -1.
2.  **i = 1**: `currentVal` = 5 (`V`), `nextVal` = `undefined`.
    - Is `undefined > 5`? **No**.
    - Action: `total += 5` → `total` = -1 + 5 = **4**.
3.  **Loop ends**. Return **4**. ✅

Let's trace `s = "III"`:

1.  **i = 0**: `current` = 1, `next` = 1. `1 > 1` is False. Add 1. (`total` = 1)
2.  **i = 1**: `current` = 1, `next` = 1. `1 > 1` is False. Add 1. (`total` = 2)
3.  **i = 2**: `current` = 1, `next` = `undefined`. False. Add 1. (`total` = 3)
4.  Return **3**. ✅

---

## 🚀 Key Takeaways

1.  **Lookahead Pattern:** Checking `i` and `i+1` is a common pattern in string problems involving pairs or sequences.
2.  **Handling the End:** The logic naturally handles the last character because `undefined` is never greater than a number, forcing an addition.
3.  **Object Lookup:** Using a simple object (`roman`) is the most efficient way to map characters to numbers in JavaScript ($O(1)$ access).
4.  **Subtraction Logic:** Remember that subtraction only happens when a *smaller* value precedes a *larger* one.

---

## 🐛 Common Pitfalls

-   **Off-by-one errors:** Trying to access `s[i+1]` without checking bounds can cause issues in some languages, but in JavaScript, it simply returns `undefined`, which works fine here.
-   **Confusing `IV` vs `VI`:**
    -   `IV`: 1 < 5 → Subtract 1.
    -   `VI`: 5 > 1 → Add 5.
-   **Typo in Output:** Always double-check your expected output manually. `III` is 3, not 7.