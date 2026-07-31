# 58. Length of Last Word

**Difficulty:** Easy  
**Topics:** String  
**Companies:** Google, Microsoft, Amazon, Adobe, and many more.

---

## 📖 The Problem in Simple Words

You are given a sentence (a string) that might have **words** and **spaces**.
Your job is to find the **length of the very last word** in that sentence.

### What is a "Word"?
A **word** is a group of letters with **no spaces** inside it.
- `"Hello"` is a word (length 5).
- `"World"` is a word (length 5).
- `"  "` (just spaces) is **not** a word.

### What should you do?
1. Look at the sentence.
2. Find the **last actual word** (ignore any spaces at the very end).
3. Count how many letters are in that word.
4. Return that number.

> **Important:** The sentence is guaranteed to have at least one word.

---

## 📝 Examples

### Example 1: Simple sentence
**Input:** `s = "Hello World"`  
**Output:** `5`  
**Explanation:**  
- The words are `"Hello"` and `"World"`.  
- The last word is `"World"`.  
- `"World"` has **5** letters.

---

### Example 2: Messy spaces
**Input:** `s = "   fly me   to   the moon  "`  
**Output:** `4`  
**Explanation:**  
- There are lots of spaces at the beginning and end.  
- The last actual word is `"moon"`.  
- `"moon"` has **4** letters.  
- *Note: Ignore the spaces after "moon".*

---

### Example 3: One Piece Reference 🏴‍☠️
**Input:** `s = "luffy is still joyboy"`  
**Output:** `6`  
**Explanation:**  
- The last word is `"joyboy"`.  
- `"joyboy"` has **6** letters.  
- *(Fun fact: This is a reference to the anime/manga "One Piece"!)*

---

## ⚠️ Constraints

- `1 <= s.length <= 10^4` (The string isn't empty).
- `s` contains only **English letters** and **spaces** (`' '`).
- There is **at least one word** in the string.

---

## 💻 Function Signature

```javascript
/**
 * @param {string} s - The input string containing words and spaces
 * @return {number} - The length of the last word
 */
var lengthOfLastWord = function(s) {
    // Your code here
};
```

---

## 🧪 Test Cases

```javascript
// Test Case 1: Normal sentence
Input: "Hello World"
Output: 5

// Test Case 2: Trailing spaces
Input: "   fly me   to   the moon  "
Output: 4

// Test Case 3: Single word with no spaces
Input: "luffy"
Output: 5

// Test Case 4: Single word with leading spaces
Input: "   hello"
Output: 5

// Test Case 5: Multiple spaces between words
Input: "a b c d e"
Output: 1

// Test Case 6: One word, lots of trailing spaces
Input: "word      "
Output: 4
```

---

## 📌 Key Edge Cases to Consider

1.  **Trailing Spaces:** The string might end with spaces (e.g., `"hello   "`). You must ignore them and count the word *before* the spaces.
2.  **Leading Spaces:** The string might start with spaces (e.g., `"   hi"`).
3.  **Single Word:** The string might just be one word with no spaces (e.g., `"code"`).
4.  **Multiple Spaces:** There might be multiple spaces between words (e.g., `"a  b"`).

---


---

## 📊 Complexity Analysis

| Approach | Time Complexity | Space Complexity |
|----------|----------------|------------------|
| Built-in (`split`) | $O(N)$ | $O(N)$ (creates a new array) |
| Backwards Loop | $O(N)$ | $O(1)$ (no extra array) |

*Where $N$ is the length of the string.*

---

## 🔗 Related Problems

- [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) (Easy)
- [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) (Easy)
- [434. Number of Segments in a String](https://leetcode.com/problems/number-of-segments-in-a-string/) (Easy)

---

