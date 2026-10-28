# 28. Find the Index of the First Occurrence in a String

**Difficulty:** Easy  
**Topics:** Two Pointers, String, String Matching  
**Companies:** Google, Microsoft, Amazon, Apple, Meta, and many more.

---

## 📖 Problem Description

Given two strings `haystack` and `needle`, return the **index of the first occurrence** of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

If `needle` is an empty string, return `0` (though the constraints below specify `needle` will have at least length 1).

---

## 📝 Examples

### Example 1
**Input:** `haystack = "sadbutsad"`, `needle = "sad"`  
**Output:** `0`  
**Explanation:**  
- `"sad"` occurs at index `0` and index `6`.  
- The first occurrence is at index `0`, so we return `0`.

### Example 2
**Input:** `haystack = "leetcode"`, `needle = "leeto"`  
**Output:** `-1`  
**Explanation:**  
- `"leeto"` did not occur in `"leetcode"`, so we return `-1`.

### Example 3
**Input:** `haystack = "mississippi"`, `needle = "issip"`  
**Output:** `4`  
**Explanation:**  
- `"issip"` starts at index `4` in `"mississippi"`.

---

## ⚠️ Constraints

- `1 <= haystack.length, needle.length <= 10^4`  
- `haystack` and `needle` consist of only **lowercase English characters**.

---

## 💻 Function Signature

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // Your code here
};
```

---

## 🧪 Test Cases

```javascript
// Test Case 1: Standard match at the beginning
Input: haystack = "sadbutsad", needle = "sad"
Output: 0

// Test Case 2: No match
Input: haystack = "leetcode", needle = "leeto"
Output: -1

// Test Case 3: Match in the middle
Input: haystack = "mississippi", needle = "issip"
Output: 4

// Test Case 4: Match at the end
Input: haystack = "hello", needle = "lo"
Output: 3

// Test Case 5: Single character match
Input: haystack = "a", needle = "a"
Output: 0

// Test Case 6: Needle longer than haystack
Input: haystack = "abc", needle = "abcd"
Output: -1

// Test Case 7: Multiple occurrences, return first
Input: haystack = "aaaaa", needle = "aa"
Output: 0
```

---

## 📌 Key Edge Cases to Consider

1.  **Exact Match:** `haystack` and `needle` are identical.
2.  **Single Character:** Both strings are one character long.
3.  **No Match:** `needle` characters never appear in `haystack`.
4.  **Partial Overlap:** `needle` appears to match but fails at the last character (e.g., `haystack="abc"`, `needle="abd"`).
5.  **Repeated Patterns:** `haystack` contains repeated characters (e.g., `"aaaaa"`) which can trip up naive scanning logic.
6.  **Length Constraints:** Ensure `needle` is not longer than `haystack`.

---

## 🔗 Related Problems

- [459. Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern/) (Easy)
- [214. Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/) (Hard)
- [28. Implement strStr()](https://leetcode.com/problems/implement-strstr/) (The same problem, often used to introduce KMP)
- [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

## 💡 Tips for Implementation

- **Early Exit:** If `needle.length > haystack.length`, return `-1` immediately.
- **Loop Boundary:** When using a loop, ensure you go up to `haystack.length - needle.length` inclusive to avoid out-of-bounds errors.
- **Language Features:** In an interview, clarify if using built-in functions like `indexOf` or `includes` is allowed. If not, be prepared to implement the sliding window or KMP.
- **Edge Case:** Handle the case where `needle` is empty (though constraints say length >= 1).

---

