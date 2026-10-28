# Manacher's Algorithm

> **Find the Longest Palindromic Substring in linear $O(N)$ time.**

---

## 🎯 Intuition
1. **Handle Even/Odd Parity:** Transform string by inserting delimiters (e.g. `aba` becomes `^#a#b#a#$`).
2. **Mirror Symmetry:** Maintain the rightmost boundary $R$ and its center $C$. For a new position $i < R$, the palindrome radius is at least $\min(R - i, P[2C - i])$ by symmetry.
3. Expands only when boundaries exceed $R$.
