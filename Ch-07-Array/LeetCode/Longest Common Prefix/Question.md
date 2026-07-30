# 14. Longest Common Prefix

**Difficulty:** Easy  
**Topics:** Array, String, Trie  
**Companies:** Amazon, Microsoft, Google, Adobe, and many more.

---

## 📖 Description

Write a function to find the **longest common prefix** string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

### What is a Prefix?
A prefix is a sequence of characters at the **beginning** of a string.
- Example: `"fl"` is a prefix of `"flower"`, `"flow"`, and `"flight"`.
- Example: `"flow"` is NOT a prefix of `"flight"` because the characters diverge at the 3rd position.

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
// Test Case 1
Input: ["flower", "flow", "flight"]
Output: "fl"

// Test Case 2
Input: ["dog", "racecar", "car"]
Output: ""

// Test Case 3 (Single string)
Input: ["a"]
Output: "a"

// Test Case 4 (Empty string in array)
Input: ["ab", ""]
Output: ""

// Test Case 5 (All same)
Input: ["interspecies", "interstellar", "interstate"]
Output: "inters"
```

---

## 📌 Key Edge Cases to Consider

1.  **Empty String in Array:** If any string in the array is `""`, the common prefix is immediately `""`.
2.  **Single String:** If the array has only one element, return that element.
3.  **No Common Prefix:** If the first characters of the strings differ, return `""`.
4.  **Shortest String:** The common prefix cannot be longer than the shortest string in the array.

---

## 🔗 Related Problems

- [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) (Medium)
- [211. Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/) (Medium)
- [148. Sort List](https://leetcode.com/problems/sort-list/) (Medium) - For sorting logic practice.
- [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/) (Easy)

---

## 🏆 Tips for Implementation

- **Early Exit:** As soon as you find a mismatch or reach the end of a string, break the loop and return the result.
- **Use `strs[0]` as a Base:** It's often easiest to loop through the characters of the first string and compare with others.
- **Sorting Trick:** If you prefer brevity, sorting the array is a one-liner approach: `strs.sort().then(s1 => s1[0], s2 => s1[s1.length-1])` logic.

