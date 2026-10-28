# Print 1 to N Without Using Loops

**Problem Link:** [GeeksforGeeks — Print 1 to N Without Using Loops](https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops3621/1)  
**Topic:** Linear Recursion / Head Recursion

---

## 💡 Intuition

We are given a positive integer `n`, and we need to print all numbers from `1` to `n` in ascending order without using any loops (`for`, `while`, or `do-while`).

Because loops are disallowed, we utilize **linear recursion** (specifically **Head Recursion**):
- A function calls itself with a strictly smaller argument `n - 1`.
- The recursive call continues until reaching the base case `n <= 0`.
- **Crucial Insight:** The print statement is executed **after** the recursive call returns. Because of the LIFO (Last-In, First-Out) property of the Call Stack, the call for `n = 1` finishes first and prints `1`, followed by `n = 2` printing `2`, up to `n` printing `n`.

---

## 🛠️ Approach: Head Recursion

1. **Base Case:** If `n <= 0`, stop the recursion and return immediately.
2. **Recursive Hypothesis / Call:** Call `printTillN(n - 1)` to handle numbers from `1` to `n - 1` first.
3. **Self Work (Unwinding Phase):** Once the recursive call returns, print `n` followed by a space.

```text
WINDING PHASE (Going Down):
printTillN(5) -> printTillN(4) -> printTillN(3) -> printTillN(2) -> printTillN(1) -> printTillN(0) [BASE CASE]

UNWINDING PHASE (Coming Back & Printing):
printTillN(1) prints 1
printTillN(2) prints 2
printTillN(3) prints 3
printTillN(4) prints 4
printTillN(5) prints 5
```

---

## 💻 Code Implementations

### JavaScript

```javascript
class Solution {
    /**
     * Prints numbers from 1 to n in ascending order without using loops.
     * Approach: Head Recursion (unwinding print)
     * @param {number} n
     */
    printTillN(n) {
        // Base case: Stop when n <= 0
        if (n <= 0) return;

        // Recursive call first: reach the smallest subproblem (Head Recursion)
        this.printTillN(n - 1);

        // Print on unwinding: prints 1, 2, ..., n in ascending order
        process.stdout.write(String(n) + " ");
    }
}
```

### Python 3

```python
import sys
# Increase recursion depth limit for large n (e.g. n >= 1000)
sys.setrecursionlimit(5000)

class Solution:
    """
    GeeksforGeeks: Print 1 to N Without Using Loops
    Topic: Linear Recursion (Head Recursion)
    """
    def printTillN(self, n: int) -> None:
        # Base case: when n reaches 0 or negative, stop recursion
        if n <= 0:
            return
        
        # Recursive call: process smaller numbers first (1 to n - 1)
        self.printTillN(n - 1)
        
        # Work done during unwinding phase: print current number followed by space
        print(n, end=" ")
```

---

## 🪜 Detailed Dry Run (`n = 5`)

### Phase 1: Winding (Calls Pushed to Stack)

The function pushes frames onto the Call Stack with `n - 1` until reaching `n = 0`. No numbers are printed during this phase.

```text
Call Stack (Top to Bottom):
[printTillN(0)]  <-- Base Case hit (Returns without action)
[printTillN(1)]  (Paused at print statement)
[printTillN(2)]  (Paused at print statement)
[printTillN(3)]  (Paused at print statement)
[printTillN(4)]  (Paused at print statement)
[printTillN(5)]  (Paused at print statement)
```

### Phase 2: Unwinding (Frames Popped & Printed)

When `printTillN(0)` returns, execution resumes in waiting caller frames from top to bottom:

| Returning Call Frame | Execution Line | Output Generated | Cumulative Output |
|:---:|:---:|:---:|---|
| `printTillN(1)` | `print(1)` | `1 ` | `1 ` |
| `printTillN(2)` | `print(2)` | `2 ` | `1 2 ` |
| `printTillN(3)` | `print(3)` | `3 ` | `1 2 3 ` |
| `printTillN(4)` | `print(4)` | `4 ` | `1 2 3 4 ` |
| `printTillN(5)` | `print(5)` | `5 ` | `1 2 3 4 5 ` |

**Final Printed Output:**
```text
1 2 3 4 5 
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$  
  There are exactly $n + 1$ function calls (`n` down to `0`). Each call performs $O(1)$ constant work apart from the recursive invocation.
- **Auxiliary Space:** $O(n)$  
  The Call Stack grows to a maximum depth of $n + 1$ activation frames before unwinding begins.

---

## 🔑 Key Takeaways & Common Variations

1. **Print Position Dictates Order:**
   - **Print AFTER the recursive call (Head Recursion):** Numbers appear in **ascending order** ($1 \rightarrow n$).
   - **Print BEFORE the recursive call (Tail Recursion):** Numbers appear in **descending order** ($n \rightarrow 1$).
2. **Alternative Forward Approach (Two Parameters):**
   If you want to print during the winding phase from $1$ to $n$:
   ```python
   def print_forward(current, n):
       if current > n:
           return
       print(current, end=" ")
       print_forward(current + 1, n)
   ```
   This is tail-recursive, but requires an extra parameter starting at `current = 1`.
1. **Print Position Dictates Order:**
   - **Print AFTER the recursive call (Head Recursion):** Numbers appear in **ascending order** ($1 \rightarrow n$).
   - **Print BEFORE the recursive call (Tail Recursion):** Numbers appear in **descending order** ($n \rightarrow 1$).
2. **Alternative Forward Approach (Two Parameters):**
   If you want to print during the winding phase from $1$ to $n$:
   ```python
   def print_forward(current, n):
       if current > n:
           return
       print(current, end=" ")
       print_forward(current + 1, n)
   ```
   This is tail-recursive, but requires an extra parameter starting at `current = 1`.
