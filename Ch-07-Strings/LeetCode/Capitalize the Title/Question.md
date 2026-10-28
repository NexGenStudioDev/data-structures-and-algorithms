# 2129. Capitalize the Title Question

**Difficulty:** Easy  
**Topics:** String  
**Companies:** Google, Microsoft, Amazon, Meta

---

## 📖 Problem Description

You are given a string `title` consisting of one or more words separated by a **single space**. Each word consists of English letters.

Your task is to **capitalize** the string by changing the capitalization of each word according to the following rules:

1.  **Short Words:** If a word has **1 or 2 letters**, change **all** its letters to **lowercase**.
2.  **Long Words:** If a word has **3 or more letters**, change the **first letter** to **uppercase** and the **remaining letters** to **lowercase**.

Return the modified `title`.

> **Note:** The order of words and the spaces between them must remain unchanged.

---

## 📝 Examples

### Example 1
**Input:** `title = "capiTalIze tHe titLe"`  
**Output:** `"Capitalize The Title"`  
**Explanation:**  
- All words have a length of at least 3.  
- `"capiTalIze"` → `"Capitalize"`  
- `"tHe"` → `"The"`  
- `"titLe"` → `"Title"`

### Example 2
**Input:** `title = "First leTTeR of EACH Word"`  
**Output:** `"First Letter of Each Word"`  
**Explanation:**  
- `"of"` has length 2 → `"of"` (all lowercase).  
- All other words have length ≥ 3 → First letter uppercase, rest lowercase.

### Example 3
**Input:** `title = "i lOve leetcode"`  
**Output:** `"i Love Leetcode"`  
**Explanation:**  
- `"i"` has length 1 → `"i"` (all lowercase).  
- `"lOve"` → `"Love"`  
- `"leetcode"` → `"Leetcode"`

---

## ⚠️ Constraints

- `1 <= title.length <= 100`
- `title` consists of words separated by a **single space** without any leading or trailing spaces.
- Each word consists of **uppercase and lowercase English letters** and is non-empty.

---

## 💻 Function Signature

```javascript
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    // Your code here
};
```

---

## 🧪 Test Cases

```javascript
// Test Case 1
Input: "capiTalIze tHe titLe"
Output: "Capitalize The Title"

// Test Case 2
Input: "First leTTeR of EACH Word"
Output: "First Letter of Each Word"

// Test Case 3
Input: "i lOve leetcode"
Output: "i Love Leetcode"

// Test Case 4 (All short words)
Input: "a to be or not to be"
Output: "a to be or not to be"

// Test Case 5 (Mixed case input)
Input: "hELLo WoRLd"
Output: "Hello World"
```

---

## 📌 Key Edge Cases to Consider

1.  **Single Letter Words:** Ensure words like `"a"` or `"I"` become lowercase (`"a"`, `"i"`).
2.  **Two Letter Words:** Ensure words like `"is"`, `"to"`, `"be"` become lowercase.
3.  **Exact Boundary:** A word of length 2 should be lowercase, but length 3 should be capitalized.
4.  **Input Case:** The input may contain mixed case (e.g., `"hELLo"`), so you must normalize to lowercase before capitalizing the first letter.



## 🔗 Related Problems

- [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/) (Easy)
- [709. To Lower Case](https://leetcode.com/problems/to-lower-case/) (Easy)
- [520. Detect Capital](https://leetcode.com/problems/detect-capital/) (Easy)
- [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) (Medium)