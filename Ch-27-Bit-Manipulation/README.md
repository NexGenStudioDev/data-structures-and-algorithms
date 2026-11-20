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

**JavaScript note:** Number bitwise operators convert values to signed 32-bit integers (and shift counts are reduced to 5 bits). These Number formulas are for values in the supported 32-bit range. Use `BigInt` with BigInt operands for larger integer bit operations; do not mix `Number` and `BigInt` in one bitwise expression.

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

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | TakeUForward | [Count the Number of Set Bits](https://takeuforward.org/practice/dsa/count-the-number-of-set-bits) | Bit Manipulation | N/A | N/A | To Do |
| Easy | LeetCode | [Counting Bits](https://leetcode.com/problems/counting-bits) | DP + Lowest Bit | N/A | N/A | To Do |
| Easy | LeetCode | [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits) | Brian Kernighan Loop | N/A | N/A | To Do |
| Easy | LeetCode | [Single Number](https://leetcode.com/problems/single-number) | XOR Cancellation | N/A | N/A | To Do |
| Medium | GeeksforGeeks | [Count Set Bits in 1 to N](https://www.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1) | Bit Manipulation | N/A | N/A | To Do |
| Medium | LeetCode | [Single Number II](https://leetcode.com/problems/single-number-ii) | Bit Counting Modulo 3 | N/A | N/A | To Do |
| Medium | LeetCode | [Single Number III](https://leetcode.com/problems/single-number-iii) | XOR Partitioning by Lowest Bit | N/A | N/A | To Do |
| Medium | LeetCode | [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers) | Bitwise Adder (Sum = XOR, Carry = AND) | N/A | N/A | To Do |
