# 14. Longest Common Prefix

**Difficulty:** Easy  
**Topics:** Array, String, Trie  
**Companies:** Amazon, Microsoft, Google, Adobe

---

## 📖 Problem Description

Write a function to find the **longest common prefix** string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

A **prefix** is a sequence of characters at the **beginning** of a string. For a string to be considered a common prefix of an array, **every string** in the array must start with that prefix.

---

## 📝 Examples

### Example 1
**Input:** `strs = ["flower", "flow", "flight"]`  
**Output:** `"fl"`  
**Explanation:**  
- `"flower"` starts with `"fl"`  
- `"flow"` starts with `"fl"`  
- `"flight"` starts with `"fl"`  
- The next character in `"flower"` is `o`, in `"flow"` is `o`, but in `"flight"` is `i`. Since they don't match, the common prefix stops at `"fl"`.

### Example 2
**Input:** `strs = ["dog", "racecar", "car"]`  
**Output:** `""`  
**Explanation:**  
- There is no common prefix among the input strings. The first characters are `d`, `r`, and `c`, which are all different.

### Example 3
**Input:** `strs = ["a"]`  
**Output:** `"a"`  
**Explanation:**  
- With only one string, the entire string is the common prefix.

---

## ⚠️ Constraints

- `1 <= strs.length <= 200`  
  (The array will always contain at least one string).
- `0 <= strs[i].length <= 200`  
  (Strings can be empty).
- `strs[i]` consists of only **lowercase English letters** if it is non-empty.

---

## 💻 Function Signature

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // Your code here
};
```

---

## 🧪 Test Cases

```javascript
// Test Case 1: Standard case with common prefix
Input: ["flower", "flow", "flight"]
Output: "fl"

// Test Case 2: No common prefix
Input: ["dog", "racecar", "car"]
Output: ""

// Test Case 3: Single string in array
Input: ["a"]
Output: "a"

// Test Case 4: Empty string in array
Input: ["ab", ""]
Output: ""

// Test Case 5: All strings are identical
Input: ["interspecies", "interstellar", "interstate"]
Output: "inters"

// Test Case 6: Nested mismatch
Input: ["reflower", "flow", "flight"]
Output: "fl"
// Note: "reflower" starts with "re", but "flow" starts with "fl". 
// The common prefix is only the first 2 characters "fl" which match in all strings.
```

---

## 📌 Key Edge Cases to Consider

1.  **Single String:** If the array has only one element, return that element.
2.  **No Common Prefix:** If the first characters of the strings differ, return `""`.
3.  **Empty String:** If any string in the array is `""`, the common prefix is immediately `""`.
4.  **Shortest String:** The common prefix cannot be longer than the shortest string in the array.
5.  **Mixed Lengths:** Strings in the array can have vastly different lengths.

---

## 🔗 Related Problems

- [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) (Medium)
- [211. Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) (Medium)
- [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/) (Easy)

---

## 💡 Tips for Implementation

- **Horizontal Scanning:** Pick the first string and compare it with the rest, reducing the prefix length as you go.
- **Vertical Scanning:** Compare characters at the same index across all strings. Stop when a mismatch is found.
- **Sorting Trick:** Sort the array alphabetically and compare only the first and last strings.
- **Early Exit:** Return immediately if you find an empty string or a mismatch at the first character.

---

