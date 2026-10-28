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
- If $M$ is prime, by Fermat's Little Theorem:
  $$b^{M-1} \equiv 1 \pmod M \implies b^{-1} \equiv b^{M-2} \pmod M$$

### 5. Catalan Numbers
$$C_n = \frac{1}{n + 1} \binom{2n}{n} = \sum_{i=0}^{n-1} C_i C_{n-1-i}$$
Applications:
- Number of structurally unique Binary Search Trees with $n$ keys.
- Number of valid balanced parentheses strings of length $2n$.
- Number of ways to triangulate a convex polygon with $n + 2$ vertices.

---

## 📝 Practice Roadmap

| Problem | Difficulty | Category | Status |
|---|---|---|:---:|
| LeetCode 204: Count Primes | Medium | Sieve of Eratosthenes | ⏳ To Do |
| LeetCode 50: Pow(x, n) | Medium | Fast Binary Exponentiation | ⏳ To Do |
| LeetCode 1071: Greatest Common Divisor of Strings | Easy | Euclidean GCD | ⏳ To Do |
| LeetCode 96: Unique Binary Search Trees | Medium | Catalan Numbers / DP | ⏳ To Do |
| LeetCode 292: Nim Game | Easy | Game Theory / Modulo 4 | ⏳ To Do |
| LeetCode 877: Stone Game | Medium | Minimax / Game Theory DP | ✅ Complete |
| LeetCode 372: Super Pow | Medium | Euler's Totient / Modular Exponentiation | ⏳ To Do |
