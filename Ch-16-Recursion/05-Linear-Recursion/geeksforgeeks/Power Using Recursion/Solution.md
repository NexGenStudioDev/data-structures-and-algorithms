# Solution: Power Using Recursion (Linear Recursion)

## 💡 Algorithmic Intuition

Finding the power of a number means multiplying the base $n$ by itself $p$ times:

$$n^p = \underbrace{n \times n \times \dots \times n}_{p \text{ times}}$$

In recursive terms, computing $n^p$ can be broken down into:
- Multiplying $n$ once with the subproblem of computing $n^{p - 1}$.

$$n^p = n \times n^{p - 1}$$

This is a classic form of **Linear Recursion** (head/unwinding pattern) because each function call makes exactly one recursive invocation and reduces the subproblem size ($p$) monotonically by $1$ until reaching the base case.

---

## 🔑 The Three Pillars

### 1. Base Case
According to laws of mathematics, any non-zero number raised to the power $0$ equals $1$:
$$n^0 = 1$$
```javascript
if (p === 0) return 1;
```

### 2. Recursive Hypothesis
Assume our recursive call correctly computes $n^{p - 1}$.

### 3. Self Work (Combining Result)
Multiply the base $n$ by the value returned from `recursivePower(n, p - 1)`:
```javascript
return n * this.recursivePower(n, p - 1);
```

---

## 🪜 Call Stack Walkthrough (Dry Run for $n = 2, p = 3$)

### Winding Phase (Calls stacked up):
1. `recursivePower(2, 3)` calls `2 * recursivePower(2, 2)` $\rightarrow$ waiting on stack
2. `recursivePower(2, 2)` calls `2 * recursivePower(2, 1)` $\rightarrow$ waiting on stack
3. `recursivePower(2, 1)` calls `2 * recursivePower(2, 0)` $\rightarrow$ waiting on stack
4. `recursivePower(2, 0)` hits Base Case ($p = 0$) $\rightarrow$ **returns 1**

### Unwinding Phase (Resolving multiplications on return):
5. `recursivePower(2, 1)` receives `1`, computes $2 \times 1 = 2$ $\rightarrow$ **returns 2**
6. `recursivePower(2, 2)` receives `2`, computes $2 \times 2 = 4$ $\rightarrow$ **returns 4**
7. `recursivePower(2, 3)` receives `4`, computes $2 \times 4 = 8$ $\rightarrow$ **returns 8**

Final Answer: `8`

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(p)$  
  There are exactly $p + 1$ function calls. Each call performs $O(1)$ constant-time arithmetic multiplication.
- **Space Complexity:** $O(p)$ (Auxiliary Stack Space)  
  At maximum recursion depth, there are $p + 1$ execution frames on the system call stack.

> [!TIP]
> **Divide and Conquer Optimization:**  
> For large values of $p$, power can be computed in $O(\log p)$ using **Binary Exponentiation** (Fast Power):
> $$n^p = \begin{cases} (n^{p/2})^2 & \text{if } p \text{ is even} \\ n \times (n^{(p-1)/2})^2 & \text{if } p \text{ is odd} \end{cases}$$
> This is covered in [Ch-30: Math and Number Theory](../../../../Ch-30-Math-and-Number-Theory-for-DSA/README.md).

---

## 💻 Implementations

### JavaScript (ES6)
```javascript
class Solution {
  recursivePower(n, p) {
    if (p === 0) return 1;
    return n * this.recursivePower(n, p - 1);
  }
}
```

### Python 3
```python
class Solution:
    def recursivePower(self, n: int, p: int) -> int:
        if p == 0:
            return 1
        return n * self.recursivePower(n, p - 1)
```

