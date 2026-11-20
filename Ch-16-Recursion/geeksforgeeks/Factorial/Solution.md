# Solution: Factorial of a Number (Linear Recursion)

## 💡 Algorithmic Intuition

Factorial is the quintessential example of **Linear Recursion** where the problem of size $n$ depends on a single subproblem of size $n - 1$:

$$\text{factorial}(n) = n \times \text{factorial}(n - 1)$$

### 1. Base Case
When $n = 0$ or $n = 1$, the factorial is defined as $1$:
```javascript
if (n <= 1) return 1;
```

### 2. Recursive Hypothesis
Assume `factorial(n - 1)` correctly computes $(n - 1)!$.

### 3. Self Work / Return
Multiply $n$ by the result of the recursive call:
```javascript
return n * factorial(n - 1);
```

---

## 🪜 Call Stack Walkthrough (Dry Run for n = 4)

```text
Step 1: factorial(4) calls 4 * factorial(3)      [Pushed to Stack]
Step 2:   factorial(3) calls 3 * factorial(2)    [Pushed to Stack]
Step 3:     factorial(2) calls 2 * factorial(1)  [Pushed to Stack]
Step 4:       factorial(1) hits Base Case!       --> Returns 1
Step 5:     factorial(2) computes 2 * 1          --> Returns 2
Step 6:   factorial(3) computes 3 * 2            --> Returns 6
Step 7: factorial(4) computes 4 * 6              --> Returns 24
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$  
  There are exactly $n$ recursive calls made, and each call performs $O(1)$ arithmetic multiplication.
- **Space Complexity:** $O(n)$  
  The recursion call stack grows to a maximum depth of $n$ frames before unwinding.

