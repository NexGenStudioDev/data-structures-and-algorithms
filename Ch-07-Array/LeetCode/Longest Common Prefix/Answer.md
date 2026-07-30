
# 14. Longest Common Prefix - Solution Guide

## 🎯 Problem Recap
Given an array of strings `strs`, find the longest common prefix string amongst them. If there is no common prefix, return an empty string `""`.

---

## 💡 Intuition & Approach

The strategy used here is **Horizontal Scanning (Prefix Reduction)**.

1.  **Start Big:** Assume the **first string** in the array is the longest common prefix.
2.  **Compare & Shrink:** Iterate through the rest of the strings one by one.
    - Check if the current string **starts with** our assumed `prefix`.
    - If it **does not**, it means our `prefix` is too long.
    - **Shrink** the `prefix` by removing the last character (`prefix = prefix.substring(0, prefix.length - 1)`).
    - Repeat the shrinking until the current string *does* start with the `prefix` or the `prefix` becomes empty.
3.  **Early Exit:** If the `prefix` becomes empty at any point, we know there is no common prefix, so we can return `""` immediately.
4.  **Result:** After checking all strings, the remaining `prefix` is the longest common one.

### Why `indexOf(prefix) !== 0`?
- `str.indexOf(substring)` returns the index where `substring` starts in `str`.
- If `str` starts with `substring`, the index is `0`.
- So, `indexOf(prefix) !== 0` means "the current string does **not** start with the prefix".

---

## 💻 The Code (Annotated)

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(Strings_Array) {
    // Step 1: Edge case - if array is empty, return ""
    if (Strings_Array.length === 0) return "";

    // Step 2: Initialize prefix with the first string
    let prefix = Strings_Array[0];

    // Step 3: Iterate through the rest of the strings
    for (let i = 0; i < Strings_Array.length; i++) {
        
        // Step 4: While the current string does NOT start with the prefix
        // indexOf returns -1 if not found, or index > 0 if found but not at start
        while (Strings_Array[i].indexOf(prefix) !== 0) {
            
            // Step 5: Shrink the prefix by removing the last character
            prefix = prefix.substring(0, prefix.length - 1);

            // Step 6: If prefix becomes empty, no common prefix exists
            if (prefix === "") return "";
        }
        // If the loop finishes, Strings_Array[i] starts with the current prefix
    }

    // Step 7: Return the final common prefix
    return prefix;
};

// Test Case
console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
// Output: "fl"
```

---

## 🧪 Step-by-Step Execution Trace

Let's trace `strs = ["flower", "flow", "flight"]`.

1.  **Initialization:**
    - `prefix` = `"flower"` (from `strs[0]`)

2.  **i = 0 (`"flower"`):**
    - `indexOf("flower")` in `"flower"` is `0`.
    - Condition `0 !== 0` is **False**.
    - Loop doesn't run. `prefix` remains `"flower"`.

3.  **i = 1 (`"flow"`):**
    - `indexOf("flower")` in `"flow"` is `-1` (not found).
    - Condition `-1 !== 0` is **True**. Enter `while`.
    - **Shrink:** `prefix` becomes `"flowe"`.
    - Check: `"flow".indexOf("flowe")` is `-1`. True.
    - **Shrink:** `prefix` becomes `"flow"`.
    - Check: `"flow".indexOf("flow")` is `0`. False.
    - Exit `while`. `prefix` is now `"flow"`.

4.  **i = 2 (`"flight"`):**
    - `indexOf("flow")` in `"flight"` is `-1`.
    - Condition `-1 !== 0` is **True**. Enter `while`.
    - **Shrink:** `prefix` becomes `"flo"`.
    - Check: `"flight".indexOf("flo")` is `-1`. True.
    - **Shrink:** `prefix` becomes `"fl"`.
    - Check: `"flight".indexOf("fl")` is `0`. False.
    - Exit `while`. `prefix` is now `"fl"`.

5.  **Loop Ends:**
    - Return `"fl"`.

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time** | $O(S)$ | Where $S$ is the sum of all characters in all strings. In the worst case (e.g., all strings are identical), we compare every character. |
| **Space** | $O(1)$ | We only store the `prefix` string (which shrinks) and loop variables. No extra data structures are used. |

---

## 🚀 Key Takeaways

1.  **Start with the First Element:** It's a great baseline for the "longest" possible prefix.
2.  **Shrink to Fit:** Instead of building the prefix, it's often easier to start with the max and cut it down until it fits everyone.
3.  **`indexOf` Trick:** Using `indexOf(str) === 0` is a clean way to check if a string starts with a prefix without needing `startsWith()` (though `startsWith()` is more modern and readable).
4.  **Early Exit:** Checking `if (prefix === "") return ""` inside the loop saves time if the strings diverge immediately.

---

## 🐛 Common Pitfalls

-   **Forgetting the Empty Array Check:** If `strs` is empty, accessing `strs[0]` will throw an error.
-   **Infinite Loop:** If you forget to shrink the prefix inside the `while` loop, the code will hang.
-   **Using `=== 0` Incorrectly:** Remember `indexOf` returns the *index*, not a boolean. You must compare it to `0`.
-   **Off-by-One Errors:** When shrinking, `substring(0, length - 1)` is correct. `substring(0, length)` would keep the string the same.

---

## 🔄 Alternative (Modern JavaScript)

If you prefer readability over the `indexOf` trick, you can use `startsWith()`:

```javascript
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return "";
        }
    }
    return prefix;
};
```

*Note: `slice(0, -1)` is equivalent to `substring(0, length - 1)`.*