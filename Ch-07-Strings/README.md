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
In languages like JavaScript, Python, and Java, strings are **immutable**.
Concatenating strings inside a loop like:
```javascript
let s = "";
for (let i = 0; i < n; i++) {
    s += str[i]; // Copies entire string each iteration!
}
// Total Time Complexity: O(N^2)
```
**Optimal Approach:** Use an array/list and join at the end:
```javascript
let parts = [];
for (let i = 0; i < n; i++) {
    parts.push(str[i]);
}
let s = parts.join(''); // Total Time: O(N)
```

### 2. Character Code Manipulation
Characters correspond to ASCII/Unicode integers:
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
4. **Pattern Searching:** Naive ($O(N \times M)$), KMP ($O(N + M)$), Rabin-Karp ($O(N + M)$).

---

## 📝 Practice Roadmap

| Problem | Difficulty | Key Pattern | Status |
|---|---|---|:---:|
| [LeetCode 125: Valid Palindrome](./LeetCode/Valid%20Palindrome/) | Easy | Two Pointers | ✅ Complete |
| [LeetCode 13: Roman to Integer](./LeetCode/Roman%20to%20Integer/) | Easy | Left-to-Right Scan with Lookahead | ✅ Complete |
| [LeetCode 28: First Occurrence (strStr)](./LeetCode/Find%20the%20Index%20of%20the%20First%20Occurrence%20in%20a%20String/) | Easy | Sliding Window / KMP | ✅ Complete |
| [LeetCode 58: Length of Last Word](./LeetCode/Length%20of%20Last%20Word/) | Easy | Reverse Traversal | ✅ Complete |
| [LeetCode 557: Reverse Words in String III](./LeetCode/Reverse%20Words%20in%20a%20String%20III/) | Easy | Two Pointers In-place | ✅ Complete |
| [LeetCode 2129: Capitalize the Title](./LeetCode/Capitalize%20the%20Title/) | Easy | String Tokenization | ✅ Complete |
| [LeetCode 205: Isomorphic Strings](./LeetCode/Isomorphic%20Strings/) | Easy | Bi-directional Hash Map | ✅ Complete |
| LeetCode 3: Longest Substring Without Repeating Characters | Medium | Sliding Window with Set | ⏳ To Do |
| LeetCode 5: Longest Palindromic Substring | Medium | Expand Around Center / DP | ⏳ To Do |
