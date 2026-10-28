# Advanced String Matching: KMP, Rabin-Karp & Z-Algorithm

> **Linear-time string search algorithms overcoming naive $O(N \times M)$ quadratic bounds.**

---

## 🎯 Algorithms Breakdown

### 1. Knuth-Morris-Pratt (KMP) Algorithm — $O(N + M)$
- Uses a **Longest Proper Prefix which is also Suffix (LPS)** table of the pattern.
- Avoids re-checking characters in the text that have already been matched.

### 2. Rabin-Karp Algorithm — $O(N + M)$ Average
- Computes a **Rolling Polynomial Hash** of length $M$.
- Sliding window shifts the hash in $O(1)$ by subtracting the outgoing char and adding the incoming char.
- Checks full string equality only upon hash collision.

### 3. Z-Algorithm — $O(N + M)$
- Constructs a $Z$-array where $Z[i]$ is the length of the longest substring starting at $i$ that is also a prefix of the string.
- Concatenate `pattern + '$' + text` and find all indices where $Z[i] == \text{len}(pattern)$.
