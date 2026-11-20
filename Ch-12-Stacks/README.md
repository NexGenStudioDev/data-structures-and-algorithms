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

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.
 (Existing & Suggested)

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)

| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | LeetCode | [Baseball Game](https://leetcode.com/problems/baseball-game) | Record Operations Stack | [Question](./06-LeetCode-Questions/Baseball%20Game/Question.md) | [Solution](./06-LeetCode-Questions/Baseball%20Game/docs/Approch1.Solution.md) | Completed |
| Easy | LeetCode | [Clear Digits](https://leetcode.com/problems/clear-digits) | Character Elimination | [Question](./06-LeetCode-Questions/Clear%20Digits/Question.md) | [Solution](./06-LeetCode-Questions/Clear%20Digits/docs/Approch1.solution.md) | Completed |
| Easy | LeetCode | [Crawler Log Folder](https://leetcode.com/problems/crawler-log-folder) | Directory Depth Tracking | [Question](./06-LeetCode-Questions/Crawler%20Log%20Folder/Question.md) | [Solution](./06-LeetCode-Questions/Crawler%20Log%20Folder/docs/Approch1.solution.md) | Completed |
| Easy | LeetCode | [Make The String Great](https://leetcode.com/problems/make-the-string-great) | Adjacent Elimination | [Question](./06-LeetCode-Questions/Make%20The%20String%20Great/Question.md) | [Solution](./06-LeetCode-Questions/Make%20The%20String%20Great/docs/Approch1.md) | Completed |
| Easy | LeetCode | [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i) | Monotonic Stack + Map | [Question](./06-LeetCode-Questions/next-greater-element-i/Question.md) | [Solution](./06-LeetCode-Questions/next-greater-element-i/docs/Solution.md) | Completed |
| Easy | LeetCode | [Remove Adjacent Duplicates](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string) | Character Elimination | [Question](./06-LeetCode-Questions/Remove%20All%20Adjacent%20Duplicates%20In%20String/Question.md) | [Solution](./06-LeetCode-Questions/Remove%20All%20Adjacent%20Duplicates%20In%20String/Solution/Approch%201/Approch1.Solution.md) | Completed |
| Easy | LeetCode | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses) | Bracket Matching | N/A | N/A | To Do |
| Medium | LeetCode | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures) | Monotonic Stack | [Question](./06-LeetCode-Questions/Daily%20Temperatures/Question.md) | [Solution](./06-LeetCode-Questions/Daily%20Temperatures/docs/Approch1.Solution.md) · [Solution](./06-LeetCode-Questions/Daily%20Temperatures/docs/Approch2.Solution.md) | Completed |
| Medium | LeetCode | [Flatten Nested List Iterator](https://leetcode.com/problems/flatten-nested-list-iterator) | Lazy Iterator Stack | [Question](./06-LeetCode-Questions/Flatten%20Nested%20List%20Iterator/Question.md) | [Solution](./06-LeetCode-Questions/Flatten%20Nested%20List%20Iterator/docs/Approch1.solution.md) | Completed |
| Medium | GeeksforGeeks | [Implement Stack Using Array](https://www.geeksforgeeks.org/problems/implement-stack-using-array/1) | Stacks | N/A | N/A | To Do |
| Medium | LeetCode | [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/) | Stack implementation using queues | [Question](./06-LeetCode-Questions/Implement%20Stack%20using%20Queues/Question.md) | [Solution](./06-LeetCode-Questions/Implement%20Stack%20using%20Queues/docs/Approch1.Solution.md) | Completed |
| Medium | LeetCode | [Min Stack](https://leetcode.com/problems/min-stack/) | Stack design / minimum tracking | [Question](./06-LeetCode-Questions/Min%20Stack/Question.md) | [Solution](./06-LeetCode-Questions/Min%20Stack/docs/Approch1.Solution.md) | Completed |
| Medium | TakeUForward | [Next Greater Element II](https://takeuforward.org/practice/dsa/next-greater-element---2) | Stacks | N/A | N/A | To Do |
| Medium | LeetCode | [Simplify Path](https://leetcode.com/problems/simplify-path) | Path Token Stack | [Question](./06-LeetCode-Questions/Simplify%20Path/Question.md) | [Solution](./06-LeetCode-Questions/Simplify%20Path/docs/Approch1.Solution.md) | Completed |
| Hard | LeetCode | [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram) | Monotonic Stack Boundary | N/A | N/A | To Do |
