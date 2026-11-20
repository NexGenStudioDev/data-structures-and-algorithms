# Chapter 30: Math & Number Theory for DSA

> **The mathematical engine of competitive programming and algorithm optimization.**  
> Master GCD, Prime Sieves, Modular Arithmetic, Fast Exponentiation, Combinatorics, and Game Theory.

---

## 📌 Chapter Directory Structure

```text
Ch-30-Math-and-Number-Theory-for-DSA/
├── 01-GCD-LCM-and-Euclidean-Algorithm/
├── 02-Primes-and-Sieve-of-Eratosthenes/
├── 03-Fast-Modular-Exponentiation/
├── 04-Modular-Arithmetic-and-Fermat-Inverse/
├── 05-Combinatorics-and-Catalan-Numbers/
├── 06-Game-Theory-and-Nim-Sum/
├── 07-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 Core Mathematical Paradigms

### 1. Euclidean Algorithm for GCD
$$\gcd(a, b) = \gcd(b, a \bmod b), \quad \gcd(a, 0) = a$$
- **Time Complexity:** $O(\log(\min(a, b)))$
- **LCM Relationship:**
  $$\text{lcm}(a, b) = \frac{a \times b}{\gcd(a, b)}$$

### 2. Sieve of Eratosthenes
Find all prime numbers up to $N$:
- Initialize an array `isPrime` of size $N + 1$ with `true`.
- For each $p = 2, 3, \dots, \sqrt{N}$: if `isPrime[p]` is true, mark $p^2, p^2 + p, p^2 + 2p, \dots \le N$ as false.
- **Time Complexity:** $O(N \log(\log N))$
- **Space Complexity:** $O(N)$

### 3. Fast Modular Exponentiation ($a^b \bmod M$)
Compute $a^b \bmod M$ in $O(\log b)$ time by repeatedly squaring:
$$a^b = \begin{cases} (a^{b/2})^2 & \text{if } b \text{ is even} \\ a \times (a^{(b-1)/2})^2 & \text{if } b \text{ is odd} \end{cases}$$

### 4. Modular Arithmetic & Fermat's Little Theorem
- $(a + b) \bmod M = ((a \bmod M) + (b \bmod M)) \bmod M$
- $(a \times b) \bmod M = ((a \bmod M) \times (b \bmod M)) \bmod M$
- **Modular Division:** $\frac{a}{b} \bmod M = a \times b^{-1} \bmod M$
- If $M$ is prime and $b$ is not divisible by $M$, Fermat's Little Theorem gives:
  $$b^{M-1} \equiv 1 \pmod M \implies b^{-1} \equiv b^{M-2} \pmod M$$
- In JavaScript, use `BigInt` for large exact integers. `Number` can lose integer precision above `Number.MAX_SAFE_INTEGER`.

### 5. Catalan Numbers
$$C_n = \frac{1}{n + 1} \binom{2n}{n} = \sum_{i=0}^{n-1} C_i C_{n-1-i}$$
Applications:
- Number of structurally unique Binary Search Trees with $n$ keys.
- Number of valid balanced parentheses strings of length $2n$.
- Number of ways to triangulate a convex polygon with $n + 2$ vertices.

---

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | TakeUForward | [GCD of Two Numbers](https://takeuforward.org/practice/dsa/gcd-of-two-numbers) | Math & Number Theory for DSA | N/A | N/A | To Do |
| Easy | LeetCode | [Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings) | Euclidean GCD | N/A | N/A | To Do |
| Easy | LeetCode | [Nim Game](https://leetcode.com/problems/nim-game) | Game Theory / Modulo 4 | N/A | N/A | To Do |
| Medium | LeetCode | [Count Primes](https://leetcode.com/problems/count-primes) | Sieve of Eratosthenes | N/A | N/A | To Do |
| Medium | LeetCode | [Stone Game](https://leetcode.com/problems/stone-game) | Minimax / Game Theory DP | [Question](../Ch-06-Arrays/LeetCode/Stone%20Game/Question.md) | [Solution](../Ch-06-Arrays/LeetCode/Stone%20Game/Solution/Approch1/Approch1.md) | Completed |
| Medium | LeetCode | [Super Pow](https://leetcode.com/problems/super-pow) | Euler's Totient / Modular Exponentiation | N/A | N/A | To Do |
| Medium | LeetCode | [Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees) | Catalan Numbers / DP | N/A | N/A | To Do |
