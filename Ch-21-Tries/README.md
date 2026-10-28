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

| Problem | Difficulty | Key Application | Status |
|---|---|---|:---:|
| LeetCode 208: Implement Trie (Prefix Tree) | Medium | Standard Insert, Search, StartsWith | ⏳ To Do |
| LeetCode 211: Design Add and Search Words | Medium | Trie with Wildcard `.` via DFS | ⏳ To Do |
| LeetCode 648: Replace Words | Medium | Shortest Root Replacement | ⏳ To Do |
| LeetCode 212: Word Search II | Hard | Trie-assisted 2D Grid Backtracking | ⏳ To Do |
| LeetCode 421: Maximum XOR of Two Numbers | Medium | Binary Bitwise Trie | ⏳ To Do |
