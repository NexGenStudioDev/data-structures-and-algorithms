# Chapter 14: Hash Maps & Hash Tables

> **Learn average-case fast lookups, collision resolution, and hashing mechanisms.**
> Hash tables map keys to values using a mathematical hash function to calculate an index into an array of buckets.

---

## 📌 Chapter Directory Structure

```text
Ch-14-Hash-Maps-and-Hash-Tables/
├── 01-Hash-Table-Theory-and-Hash-Functions/
├── 02-Collision-Resolution-Chaining-and-Open-Addressing/
├── 03-Frequency-Counting-and-Lookup-Patterns/
├── 04-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 Theoretical Foundations

### 1. The Hash Function
A good hash function must be:
- **Deterministic:** The same key must always hash to the same value.
- **Uniform:** Distribute keys evenly across all buckets to minimize collisions.
- **Fast:** For a fixed-size key, hashing may be treated as $O(1)$. For a key with $L$ characters or bytes, computing its hash generally takes $O(L)$.

### 2. Collision Resolution Techniques
When two distinct keys produce the same bucket index:
1. **Separate Chaining (Open Hashing):**
   - Each bucket can hold a chain of entries. Some implementations switch a long chain to a tree under additional capacity and implementation-specific rules; Java HashMap is one example.
   - Worst case: $O(N)$ if all keys collide; Average case: $O(1 + \alpha)$ where $\alpha = N / K$ is the load factor.
2. **Open Addressing (Closed Hashing):**
   - All elements are stored directly within the table array.
   - When a collision occurs, probe alternative cells:
     - *Linear Probing:* Check $i + 1, i + 2, \dots$ (suffers from primary clustering).
     - *Quadratic Probing:* Check $i + 1^2, i + 2^2, i + 3^2, \dots$ (reduces clustering).
     - *Double Hashing:* Step size determined by a second hash function `hash2(key)`.

### 3. Load Factor and Dynamic Resizing
$$\text{Load Factor } \alpha = \frac{\text{Total Elements } N}{\text{Bucket Capacity } K}$$
Implementations often resize when load factor passes a chosen threshold. The threshold and resize strategy are implementation-specific; `0.75` is a common teaching example, not a universal rule. A resize costs $O(N)$ at that moment, while inserts are typically amortized $O(1)$ under usual hashing assumptions.

---

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | LeetCode | [Valid Anagram](https://leetcode.com/problems/valid-anagram) | Frequency Array / Map | N/A | N/A | To Do |
| Medium | GeeksforGeeks | [Count Distinct Elements in Every Window](https://www.geeksforgeeks.org/problems/count-distinct-elements-in-every-window/1) | Hash Maps & Hash Tables | N/A | N/A | To Do |
| Medium | LeetCode | [Group Anagrams](https://leetcode.com/problems/group-anagrams) | Sorted String or Tuple Key | N/A | N/A | To Do |
| Medium | LeetCode | [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1) | Hash Map + Dynamic Array | N/A | N/A | To Do |
| Medium | TakeUForward | [Longest Subarray with Sum K](https://takeuforward.org/practice/dsa/longest-subarray-with-sum-k) | Hash Maps & Hash Tables | N/A | N/A | To Do |
