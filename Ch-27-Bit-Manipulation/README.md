# Chapter 27: Bit Manipulation

> **Harness binary logic, bitwise operators, and bitmasking for blazing-fast computations.**

---

## 📌 Chapter Directory Structure

```text
Ch-27-Bit-Manipulation/
├── 01-Bitwise-Operators-and-Tricks/
├── 02-Bitmasking-and-Subsets/
├── 03-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 Essential Bitwise Tricks Cheatsheet

| Goal | Bitwise Formula | Explanation |
|---|---|---|
| Check if Odd / Even | `(n & 1) === 1` | Lowest bit indicates odd parity |
| Check if $k$-th bit is set | `((n >> k) & 1) === 1` | Shift bit to position 0 and test |
| Set $k$-th bit | `n | (1 << k)` | Mask with single 1 at index $k$ |
| Clear $k$-th bit | `n & ~(1 << k)` | Mask with 0 at index $k$, 1s elsewhere |
| Toggle $k$-th bit | `n ^ (1 << k)` | XOR inverts matching bit |
| Clear lowest set bit | `n & (n - 1)` | Flips lowest 1 to 0 (Brian Kernighan) |
| Extract lowest set bit | `n & (-n)` | Isolates the least significant 1-bit |
| Check if Power of 2 | `n > 0 && (n & (n - 1)) === 0` | Powers of 2 have exactly one 1-bit |

---

## 📝 Practice Roadmap

| Problem | Difficulty | Key Pattern | Status |
|---|---|---|:---:|
| LeetCode 136: Single Number | Easy | XOR Cancellation | ⏳ To Do |
| LeetCode 191: Number of 1 Bits | Easy | Brian Kernighan Loop | ⏳ To Do |
| LeetCode 338: Counting Bits | Easy | DP + Lowest Bit | ⏳ To Do |
| LeetCode 137: Single Number II | Medium | Bit Counting Modulo 3 | ⏳ To Do |
| LeetCode 260: Single Number III | Medium | XOR Partitioning by Lowest Bit | ⏳ To Do |
| LeetCode 78: Subsets | Medium | Bitmask State Enumeration ($0$ to $2^N - 1$) | ⏳ To Do |
| LeetCode 371: Sum of Two Integers | Medium | Bitwise Adder (Sum = XOR, Carry = AND) | ⏳ To Do |
