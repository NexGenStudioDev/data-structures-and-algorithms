# Chapter 07: Strings

> **Master character sequences, ASCII/Unicode mechanics, and string algorithms.**  
> Strings are sequences of characters stored sequentially, frequently featuring immutability constraints and specialized pattern-matching techniques.

---

## 📌 Chapter Directory Structure

```text
Ch-07-Strings/
├── 01-String-Fundamentals/
├── Star-Pattern/
│   ├── Square Star Pattern/
│   └── Hollow Square Star Pattern/
├── LeetCode/
│   ├── Valid Palindrome/
│   ├── Counter/
│   ├── Roman to Integer/
│   ├── Find the Index of the First Occurrence in a String/
│   ├── Length of Last Word/
│   ├── Reverse Words in a String III/
│   ├── Capitalize the Title/
│   └── Isomorphic Strings/
├── README.md
└── .gitignore
```

---

## 🎯 Key Concepts & Pitfalls

### 1. Immutability & StringBuilder / Array Joins
JavaScript, Python, and Java strings are immutable. Repeated concatenation may copy growing strings and can take quadratic time, but the exact cost depends on the language runtime and optimization. Do not assume every `+=` loop has the same cost. For predictable linear construction, collect pieces and join them:
```javascript
let s = "";
for (let i = 0; i < n; i++) {
    s += str[i]; // Copies entire string each iteration!
}
// May copy growing strings repeatedly; exact cost is runtime-dependent.
```
**Optimal Approach:** Use an array/list and join at the end:
```javascript
let parts = [];
for (let i = 0; i < n; i++) {
    parts.push(str[i]);
}
let s = parts.join(''); // Typically O(N) for N total output characters
```

### 2. Character Code Manipulation
JavaScript strings use UTF-16 code units. ASCII letters and digits have the code values below, but Unicode includes many characters outside ASCII; one visible symbol may use multiple code units. For full Unicode code points, consider `for...of` or `Array.from` instead of indexing by code unit. ASCII letters and digits have these values:
- `'a'` to `'z'`: $97$ to $122$
- `'A'` to `'Z'`: $65$ to $90$
- `'0'` to `'9'`: $48$ to $57$
- Converting character to $0$-indexed integer: `char.charCodeAt(0) - 97` (or `ord(c) - ord('a')`).

### 3. Core String Problem Archetypes
1. **Palindrome Verification:** Two pointers converging from left and right.
2. **Anagram Detection:** Frequency counter array of size 26 or Hash Map.
3. **Substrings vs Subsequences:**
   - *Substring:* Contiguous slice of characters (Total non-empty substrings: $\frac{N(N+1)}{2}$).
   - *Subsequence:* Characters in order, not necessarily contiguous (Total subsequences: $2^N$).
4. **Pattern Searching:** Naive matching is $O(NM)$ in the worst case; KMP is $O(N+M)$; Rabin–Karp is expected $O(N+M)$ with a good rolling hash, with collision checks and a worse worst case.

---

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | LeetCode | [Capitalize the Title](https://leetcode.com/problems/capitalize-the-title) | String Tokenization | [Question](./LeetCode/Capitalize%20the%20Title/Question.md) | [Solution](./LeetCode/Capitalize%20the%20Title/Answer.md) | Completed |
| Easy | LeetCode | [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) | String search / substring matching | [Question](./LeetCode/Find%20the%20Index%20of%20the%20First%20Occurrence%20in%20a%20String/Question.md) | [Solution](./LeetCode/Find%20the%20Index%20of%20the%20First%20Occurrence%20in%20a%20String/Solution.md) | Completed |
| Easy | LeetCode | [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings) | Bi-directional Hash Map | [Question](./LeetCode/Isomorphic%20Strings/Question.md) | [Solution](./LeetCode/Isomorphic%20Strings/Answer.md) | Completed |
| Easy | LeetCode | [Length of Last Word](https://leetcode.com/problems/length-of-last-word) | Reverse Traversal | [Question](./LeetCode/Length%20of%20Last%20Word/Question.md) | [Solution](./LeetCode/Length%20of%20Last%20Word/Answer.md) | Completed |
| Easy | LeetCode | [Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/) | String traversal / per-word reversal | [Question](./LeetCode/Reverse%20Words%20in%20a%20String%20III/Question.md) | [Solution](./LeetCode/Reverse%20Words%20in%20a%20String%20III/Answer.md) | Completed |
| Easy | LeetCode | [Roman to Integer](https://leetcode.com/problems/roman-to-integer) | Left-to-Right Scan with Lookahead | [Question](./LeetCode/Roman%20to%20Integer/question.md) | [Solution](./LeetCode/Roman%20to%20Integer/Answer.md) | Completed |
| Easy | LeetCode | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome) | Two Pointers | [Question](./LeetCode/Valid%20Palindrome/question.md) | [Solution](./LeetCode/Valid%20Palindrome/Answer.md) | Completed |
| Medium | LeetCode | [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring) | Expand Around Center / DP | N/A | N/A | To Do |
