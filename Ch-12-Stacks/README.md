# Chapter 12: Stacks

> **Master the Last-In, First-Out (LIFO) paradigm, Monotonic Stacks, and expression evaluation.**  
> Stacks allow element addition and removal exclusively from one end (the top).

---

## 📌 Chapter Directory Structure

```text
Ch-12-Stacks/
├── 01-Stack-Intro/
├── 02-Stack-Implementation/
├── 03-Implementing-Stack-Operations/
├── 04-Complete-Stack-Implementation/
├── 05-Encapsulation-Protecting-Stack/
├── 06-LeetCode-Questions/
│   ├── Baseball Game/
│   ├── Clear Digits/
│   ├── Crawler Log Folder/
│   ├── Daily Temperatures/
│   ├── Flatten Nested List Iterator/
│   ├── Implement Queue using Stacks/
│   ├── Implement Stack using Queues/
│   ├── Make The String Great/
│   ├── Min Stack/
│   ├── next-greater-element-i/
│   ├── Remove All Adjacent Duplicates In String/
│   └── Simplify Path/
├── 07-Arithmetic-Expressions/
├── README.md
└── .gitignore
```

---

## 🎯 Key Stack Concepts

### 1. Fundamental Operations
- `push(x)`: Insert $x$ onto the top of the stack — $O(1)$.
- `pop()`: Remove and return the top element — $O(1)$.
- `peek()` / `top()`: Return the top element without removing — $O(1)$.
- `isEmpty()`: Check if stack has zero elements — $O(1)$.

### 2. Monotonic Stack Pattern
A stack whose elements are maintained in strictly increasing or decreasing order.
Used to find the **Next Greater Element**, **Next Smaller Element**, **Previous Greater Element**, or **Previous Smaller Element** in linear $O(N)$ time instead of brute-force $O(N^2)$.

---

## 📝 Practice Roadmap (Existing & Suggested)

| Problem | Difficulty | Subtopic | Status |
|---|---|---|:---:|
| [LeetCode 682: Baseball Game](./06-LeetCode-Questions/Baseball%20Game/) | Easy | Record Operations Stack | ✅ Complete |
| [LeetCode 3174: Clear Digits](./06-LeetCode-Questions/Clear%20Digits/) | Easy | Character Elimination | ✅ Complete |
| [LeetCode 1598: Crawler Log Folder](./06-LeetCode-Questions/Crawler%20Log%20Folder/) | Easy | Directory Depth Tracking | ✅ Complete |
| [LeetCode 739: Daily Temperatures](./06-LeetCode-Questions/Daily%20Temperatures/) | Medium | Monotonic Stack | ✅ Complete |
| [LeetCode 341: Flatten Nested List Iterator](./06-LeetCode-Questions/Flatten%20Nested%20List%20Iterator/) | Medium | Lazy Iterator Stack | ✅ Complete |
| [LeetCode 232: Implement Queue using Stacks](./06-LeetCode-Questions/Implement%20Queue%20using%20Stacks/) | Easy | Two-Stack Amortized Queue | ✅ Complete |
| [LeetCode 225: Implement Stack using Queues](./06-LeetCode-Questions/Implement%20Stack%20using%20Queues/) | Easy | Queue Simulation | ✅ Complete |
| [LeetCode 1544: Make The String Great](./06-LeetCode-Questions/Make%20The%20String%20Great/) | Easy | Adjacent Elimination | ✅ Complete |
| [LeetCode 155: Min Stack](./06-LeetCode-Questions/Min%20Stack/) | Medium | $O(1)$ Min Tracking | ✅ Complete |
| [LeetCode 496: Next Greater Element I](./06-LeetCode-Questions/next-greater-element-i/) | Easy | Monotonic Stack + Map | ✅ Complete |
| [LeetCode 1047: Remove Adjacent Duplicates](./06-LeetCode-Questions/Remove%20All%20Adjacent%20Duplicates%20In%20String/) | Easy | Character Elimination | ✅ Complete |
| [LeetCode 71: Simplify Path](./06-LeetCode-Questions/Simplify%20Path/) | Medium | Path Token Stack | ✅ Complete |
| LeetCode 20: Valid Parentheses | Easy | Bracket Matching | ⏳ To Do |
| LeetCode 84: Largest Rectangle in Histogram | Hard | Monotonic Stack Boundary | ⏳ To Do |
