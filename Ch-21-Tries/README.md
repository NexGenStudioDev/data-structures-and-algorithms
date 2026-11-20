# Chapter 21: Tries (Prefix Trees)

> **Specialized tree structures for optimal string retrieval, prefixes, and bitwise XOR queries.**  
> A Trie stores characters along edges or node links, allowing prefix searches in $O(L)$ time where $L$ is word length.

---

## 📌 Chapter Directory Structure

```text
Ch-21-Tries/
├── 01-Trie-Basics-and-Implementation/
├── 02-Prefix-Search-and-Autocomplete/
├── 03-Bitwise-XOR-Trie/
├── 04-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 Trie Node Structure

```javascript
class TrieNode {
    constructor() {
        this.children = {}; // or Array of size 26
        this.isEndOfWord = false;
    }
}
```

---

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Medium | LeetCode | [Design Add and Search Words](https://leetcode.com/problems/design-add-and-search-words) | Trie with Wildcard `.` via DFS | N/A | N/A | To Do |
| Medium | LeetCode | [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree) | Standard Insert, Search, StartsWith | N/A | N/A | To Do |
| Medium | LeetCode | [Maximum XOR of Two Numbers](https://leetcode.com/problems/maximum-xor-of-two-numbers) | Binary Bitwise Trie | N/A | N/A | To Do |
| Medium | LeetCode | [Replace Words](https://leetcode.com/problems/replace-words) | Shortest Root Replacement | N/A | N/A | To Do |
| Hard | LeetCode | [Word Search II](https://leetcode.com/problems/word-search-ii) | Trie-assisted 2D Grid Backtracking | N/A | N/A | To Do |
