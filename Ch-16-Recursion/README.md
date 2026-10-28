# Chapter 16: Recursion

> **The computational engine of computer science and problem decomposition.**  
> Recursion solves a large problem by solving smaller instances of the same problem.

---

## 📌 Chapter Directory Structure

```text
Ch-16-Recursion/
├── 01-Introduction-to-Recursion/
├── 02-Functions-Call-Stack-and-Recursion/
├── 03-How-to-Think-About-Recursive-Problems/
├── 04-Basic-Recursion-Implementation-Patterns/
├── 05-Linear-Recursion/
│   └── geeksforgeeks/
│       └── Factorial/
├── 06-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 The Three Pillars of Every Recursive Function

1. **Base Case:** The condition where recursion stops and returns an immediate answer without further recursive calls. Prevents infinite recursion and stack overflow.
2. **Recursive Hypothesis / Subproblem:** Assume the recursive call works correctly on smaller inputs ($N - 1$, $N / 2$).
3. **Induction Step / Self Work:** Combine the smaller results to form the answer for $N$.

---

## 📝 Practice Roadmap

| Problem | Difficulty | Platform | Subtopic | Status |
|---|---|---|---|:---:|
| [Factorial of a Number](./05-Linear-Recursion/geeksforgeeks/Factorial/) | Easy | GeeksforGeeks | Linear Recursion & Call Stack | ✅ Complete |
| LeetCode 509: Fibonacci Number | Easy | LeetCode | Linear Recursion & State Tree | ⏳ To Do |
| LeetCode 206: Reverse Linked List | Easy | LeetCode | Recursive Pointer Swap | ⏳ To Do |
| LeetCode 50: Pow(x, n) | Medium | LeetCode | Fast Exponentiation $O(\log N)$ | ⏳ To Do |
| LeetCode 779: K-th Symbol in Grammar | Medium | LeetCode | Divide and Conquer / Inversion | ⏳ To Do |
| Tower of Hanoi | Medium | Classical | Multi-Branch Recursive Transfer | ⏳ To Do |
