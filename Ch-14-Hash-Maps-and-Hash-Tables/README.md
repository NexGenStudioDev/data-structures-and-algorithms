# Chapter 14: Hash Maps & Hash Tables

> **Master constant-time $O(1)$ lookups, collision resolution, and hashing mechanisms.**  
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
- **Fast:** Computed in $O(1)$ time.

### 2. Collision Resolution Techniques
When two distinct keys produce the same bucket index:
1. **Separate Chaining (Open Hashing):**
   - Each bucket points to a linked list (or balanced red-black tree when chain length > 8, like in Java 8+ HashMap).
   - Worst case: $O(N)$ if all keys collide; Average case: $O(1 + \alpha)$ where $\alpha = N / K$ is the load factor.
2. **Open Addressing (Closed Hashing):**
   - All elements are stored directly within the table array.
   - When a collision occurs, probe alternative cells:
     - *Linear Probing:* Check $i + 1, i + 2, \dots$ (suffers from primary clustering).
     - *Quadratic Probing:* Check $i + 1^2, i + 2^2, i + 3^2, \dots$ (reduces clustering).
     - *Double Hashing:* Step size determined by a second hash function `hash2(key)`.

### 3. Load Factor and Dynamic Resizing
$$\text{Load Factor } \alpha = \frac{\text{Total Elements } N}{\text{Bucket Capacity } K}$$
When $\alpha$ exceeds a threshold (typically $0.75$), the hash table doubles capacity and rehashes all elements.

---

## 📝 Practice Roadmap

| Problem | Difficulty | Key Pattern | Status |
|---|---|---|:---:|
| LeetCode 1: Two Sum | Easy | Complement Map | ⏳ To Do |
| LeetCode 242: Valid Anagram | Easy | Frequency Array / Map | ⏳ To Do |
| LeetCode 49: Group Anagrams | Medium | Sorted String or Tuple Key | ⏳ To Do |
| LeetCode 347: Top K Frequent Elements | Medium | Bucket Sort / Min-Heap | ⏳ To Do |
| LeetCode 128: Longest Consecutive Sequence | Medium | Hash Set Lookup $O(N)$ | ⏳ To Do |
| LeetCode 146: LRU Cache | Medium | Hash Map + Doubly Linked List | ⏳ To Do |
| LeetCode 380: Insert Delete GetRandom O(1) | Medium | Hash Map + Dynamic Array | ⏳ To Do |
