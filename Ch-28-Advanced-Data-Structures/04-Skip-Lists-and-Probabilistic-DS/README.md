# Skip Lists & Probabilistic Data Structures

> **Alternative data structures relying on randomization for simplicity and performance.**

---

## 🎯 Data Structures Overview
1. **Skip List:** Multi-level linked list providing $O(\log N)$ average search, insert, and delete without complex tree rotations. Used in Redis Sorted Sets (`ZSET`).
2. **Bloom Filter:** Space-efficient probabilistic structure that tests whether an element is definitely not in a set or possibly in a set (no false negatives).
3. **Count-Min Sketch:** Probabilistic frequency estimator for data streams using multiple hash functions and sublinear memory.
