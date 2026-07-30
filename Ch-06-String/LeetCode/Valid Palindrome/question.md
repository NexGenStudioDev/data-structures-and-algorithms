
# 125. Valid Palindrome

**Difficulty:** Easy  
**Topics:** Two Pointers, String  
**Companies:** (Various top tech companies)

## Description

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. 

**Alphanumeric characters** include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

---

## Examples

### Example 1
**Input:**
```text
s = "A man, a plan, a canal: Panama"
```
**Output:**
```text
true
```
**Explanation:**
After processing, the string becomes `"amanaplanacanalpanama"`, which is a palindrome.

### Example 2
**Input:**
```text
s = "race a car"
```
**Output:**
```text
false
```
**Explanation:**
After processing, the string becomes `"raceacar"`, which is not a palindrome.

### Example 3
**Input:**
```text
s = " "
```
**Output:**
```text
true
```
**Explanation:**
`s` is an empty string `""` after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is considered a palindrome.

---

## Constraints

- `1 <= s.length <= 2 * 10^5`
- `s` consists only of printable ASCII characters.

---

## Related Problems

- [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/) (Easy)
- [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/) (Easy)
- [Maximum Product of the Length of Two Palindromic Subsequences](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/) (Medium)
- [Find First Palindromic String in the Array](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/) (Easy)
- [Valid Palindrome IV](https://leetcode.com/problems/valid-palindrome-iv/) (Medium)
- [Maximum Palindromes After Operations](https://leetcode.com/problems/maximum-palindromes-after-operations/) (Medium)

---

## Tips for Implementation

- **Two Pointers Approach:** Use a left pointer starting at the beginning and a right pointer at the end of the string. Move them towards the center, skipping non-alphanumeric characters and comparing characters in a case-insensitive manner.
- **ASCII Considerations:** Be careful when manually checking character equality using ASCII values (e.g., `abs(a - A) == 32`), as this can accidentally match numbers with letters (e.g., `'0'` and `'P'` differ by 32). It is safer to use built-in functions like `isalnum()`, `toLowerCase()`, or `isalpha()` depending on your language.
- **Edge Cases:** Remember that an empty string (after filtering) is a valid palindrome.

---

## Acceptance Rate

Approximately **53.9%** (based on 5.7M accepted solutions out of 10.7M submissions).
