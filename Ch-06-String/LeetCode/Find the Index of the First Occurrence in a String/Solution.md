# 28. Find the Index of the First Occurrence in a String

**Difficulty:** Easy

---

# Intuition

The problem asks us to find the **first position** where the string `needle` appears inside the string `haystack`.

A simple way to solve this is to compare every possible substring of `haystack` having the same length as `needle`.

### Key Observation

If `needle` has length `n`, then every valid candidate inside `haystack` must also have length `n`.

So instead of comparing characters one by one manually, we can:

1. Take a substring (window) of size `n`.
2. Compare it with `needle`.
3. If they are equal, return the starting index.
4. Otherwise, move the window one step forward.
5. Continue until the end of the string.

This technique is known as the **Sliding Window (Fixed Size Window)** approach.

---

# Approach

## Step 1

Store the length of `needle`.

```text
n = needle.length
```

---

## Step 2

Create the first window from `haystack`.

```text
Window = haystack.slice(0, n)
```

For example

```text
haystack = "sadbutsad"
needle   = "sad"

Window = "sad"
```

---

## Step 3

Compare the current window with `needle`.

If

```text
window === needle
```

return the current index.

---

## Step 4

If they are different,

move the window by one position.

```text
window = haystack.slice(i + 1, i + 1 + n)
```

---

## Step 5

Repeat this until every possible substring has been checked.

If no match is found,

return

```text
-1
```

---

# Algorithm

```text
1. Let n = length of needle.

2. Create the first substring of length n from haystack.

3. Loop through the haystack.

4. Compare current substring with needle.

5. If equal,
      return current index.

6. Otherwise,
      move the window one position forward.

7. Continue until the end.

8. If no match exists,
      return -1.
```

---

# Dry Run

## Example 1

```text
haystack = "sadbutsad"

needle = "sad"
```

Needle Length

```text
n = 3
```

Initial Window

```text
Window = "sad"
```

### Iteration 1

```text
Index = 0

Window = "sad"

Needle = "sad"

Equal?

Yes
```

Return

```text
0
```

Output

```text
0
```

---

## Example 2

```text
haystack = "leetcode"

needle = "leeto"
```

Needle Length

```text
n = 5
```

### Initial Window

```text
Window = "leetc"
```

Compare

```text
"leetc" == "leeto"

No
```

---

### Move Window

```text
Window = "eetco"
```

Compare

```text
"eetco" == "leeto"

No
```

---

### Move Again

```text
Window = "etcod"

No
```

---

### Move Again

```text
Window = "tcode"

No
```

No more windows are possible.

Return

```text
-1
```

Output

```text
-1
```

---

# Complete Walkthrough

Consider

```text
haystack = "abcdef"

needle = "cd"
```

Needle Length

```text
2
```

Windows generated

| Index | Window | Match |
|--------|---------|-------|
| 0 | ab | ❌ |
| 1 | bc | ❌ |
| 2 | cd | ✅ Return 2 |

---

# Visualization

```text
haystack

abcdef

Window 1
^^

ab

↓

Window 2

 ^^

bc

↓

Window 3

  ^^

cd

Found ✔
```

---

# Why `slice()` Works

JavaScript provides

```javascript
string.slice(start, end)
```

It returns a substring from

```text
start (inclusive)

to

end (exclusive)
```

Example

```javascript
let str = "abcdef";

str.slice(2,4);
```

Returns

```text
"cd"
```

because

```text
Index

0 1 2 3 4 5
a b c d e f
    ^ ^
```

---

# Code Explanation

```javascript
let n = needle.length;
```

Store the length of the pattern.

---

```javascript
let str1 = haystack.slice(0, n);
```

Create the first substring (window).

---

```javascript
let str2 = needle;
```

Reference string for comparison.

---

```javascript
for (
    let i = 0;
    str1.length === n && i < haystack.length;
    i++
)
```

Loop until

- the window size is valid
- the entire string has been checked

---

```javascript
if(str1 === str2)
```

If both strings are identical,

return the starting index.

---

```javascript
str1 = haystack.slice(i + 1, i + 1 + n);
```

Move the window one character to the right.

---

```javascript
return -1;
```

No occurrence exists.

---

# Correctness Proof

We examine **every possible substring** of `haystack` whose length equals the length of `needle`.

- If any substring equals `needle`, we immediately return its starting index.
- Since we check windows from **left to right**, the first match found is guaranteed to be the first occurrence.
- If no window matches, then `needle` does not occur in `haystack`, so returning `-1` is correct.

Thus, the algorithm always produces the correct answer.

---

# Time Complexity

Let

```text
m = haystack.length

n = needle.length
```

There are approximately

```text
m - n + 1
```

possible windows.

Each comparison using

```javascript
slice()
```

creates a substring of length `n`.

Therefore,

## Time Complexity

```text
O((m - n + 1) × n)

≈ O(m × n)
```

---

# Space Complexity

Each `slice()` creates a temporary substring of size `n`.

Therefore,

```text
O(n)
```

---

# JavaScript Code

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    let n = needle.length;

    let str1 = haystack.slice(0, n);
    let str2 = needle;

    for (let i = 0; str1.length === n && i < haystack.length; i++) {

        if (str1 === str2) {
            return i;
        }

        str1 = haystack.slice(i + 1, i + 1 + n);
    }

    return -1;
};
```

---

# Edge Cases

### Case 1

```text
haystack = "aaaaa"

needle = "aa"
```

Output

```text
0
```

---

### Case 2

```text
haystack = "abc"

needle = "d"
```

Output

```text
-1
```

---

### Case 3

```text
haystack = "abc"

needle = "abc"
```

Output

```text
0
```

---

### Case 4

```text
haystack = "mississippi"

needle = "issip"
```

Output

```text
4
```

---

# Key Takeaways

- This solution uses a **Fixed Size Sliding Window**.
- The window size is always equal to the length of `needle`.
- At each step, we compare the current window with `needle`.
- Since we check windows from left to right, the first match is returned immediately.
- The implementation is simple, readable, and suitable for interview discussions, though more advanced algorithms like **KMP**, **Rabin-Karp**, or **Z-Algorithm** can improve the time complexity for larger inputs.

---
## Complexity Summary

| Metric | Complexity |
|---------|------------|
| Time | **O(m × n)** |
| Space | **O(n)** |

Where:

- **m = haystack.length**
- **n = needle.length**

