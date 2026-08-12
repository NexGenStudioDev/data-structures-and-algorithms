# 557. Reverse Words in a String III Question

**Difficulty:** Easy  
**Topics:** Two Pointers, String  
**Companies:** Google, Microsoft, Amazon, Apple, Meta

---

## 📖 The Problem in Simple Words

You are given a **sentence** (a string) where words are separated by **single spaces**.

Your job is to **reverse the letters inside each word**, but keep the **words in the same order** and keep the **spaces exactly where they are**.

> **Think of it like this:**  
> You have a row of cars (words). You want to flip every car around (reverse the letters inside), but you don't want to change the order of the cars or remove the gaps between them.

---

## 📝 Examples

### Example 1: Standard Sentence
**Input:** `s = "Let's take LeetCode contest"`  
**Output:** `"s'teL ekat edoCteeL tsetnoc"`

**How it works:**
1. `"Let's"` becomes `"s'teL"`
2. `"take"` becomes `"ekat"`
3. `"LeetCode"` becomes `"edoCteeL"`
4. `"contest"` becomes `"tsetnoc"`
5. Join them back with spaces.

---

### Example 2: Short Sentence
**Input:** `s = "Mr Ding"`  
**Output:** `"rM gniD"`

**How it works:**
1. `"Mr"` becomes `"rM"`
2. `"Ding"` becomes `"gniD"`
3. Result: `"rM gniD"`

---

### Example 3: Single Word
**Input:** `s = "Hello"`  
**Output:** `"olleH"`

**How it works:**
- Only one word, so just reverse it.

---

## ⚠️ Constraints

- `1 <= s.length <= 5 * 10^4` (The sentence can be long).
- `s` contains **printable ASCII characters** (letters, numbers, symbols like `'`, `@`, etc.).
- `s` has **no leading or trailing spaces**.
- **Words are separated by exactly one space**.
- There is **at least one word**.

---

## 💻 Function Signature

```javascript
/**
 * @param {string} s - The input sentence
 * @return {string} - The sentence with each word reversed
 */
var reverseWords = function(s) {
    // Your code here
};
```

---

## 🧪 Test Cases

```javascript
// Test Case 1: Normal sentence
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

// Test Case 2: Short sentence
Input: "Mr Ding"
Output: "rM gniD"

// Test Case 3: Single word
Input: "Hello World"
Output: "olleH dlroW"

// Test Case 4: Single character word
Input: "a b c"
Output: "a b c" (single letters stay the same)

// Test Case 5: Mixed symbols
Input: "a$ b@ c!"
Output: "$a @b !c"
```

---

## 📌 Key Rules to Follow

1.  **Reverse Inside Words Only:** Do **not** reverse the order of the words themselves. `"A B"` becomes `"A B"` (each reversed), not `"B A"`.
2.  **Preserve Spaces:** If there is a space between words, keep it exactly there.
3.  **No Trailing/Leading Spaces:** The input won't have extra spaces at the start or end, so you don't need to handle those.
4.  **Single Space Separator:** Words are always separated by exactly one space.

---


## 🔗 Related Problems

- [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/) (Medium) - Reverses the **order** of words.
- [344. Reverse String](https://leetcode.com/problems/reverse-string/) (Easy) - Reverses the whole string.
- [557. Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/)


