# Print N to 1 Without Loop

**Problem Link:** [GeeksforGeeks — Print N to 1 Without Loop](https://www.geeksforgeeks.org/problems/print-n-to-1-without-loop/1)  
**Topic:** Linear Recursion / Tail Recursion

---

## 💡 Intuition

We need to print numbers from `n` down to `1` in descending order without using any loops (`for`, `while`, or `do-while`).

We use **linear recursion** (specifically **Tail Recursion**):
- A function prints the current value of `n`.
- Then, it calls itself with a smaller number `n - 1`.
- We continue until reaching the base case `n <= 0`, where recursion terminates.

Because we want descending order ($5, 4, 3, 2, 1$), we print **before** making the recursive call (during the **winding phase**).

---

## 🛠️ Approach: Tail Recursion

1. **Base Case:** If `n <= 0`, return immediately to terminate recursion.
2. **Self Work (Winding Phase):** Print the current number `n` followed by a space.
3. **Recursive Call:** Call `printNos(n - 1)` to handle the remaining numbers.

```text
WINDING PHASE (Going Down & Printing):
printNos(5) prints 5 -> calls printNos(4)
printNos(4) prints 4 -> calls printNos(3)
printNos(3) prints 3 -> calls printNos(2)
printNos(2) prints 2 -> calls printNos(1)
printNos(1) prints 1 -> calls printNos(0)
printNos(0) [BASE CASE: returns without action]

UNWINDING PHASE (Coming Up):
Calls return one by one without doing any further work.
```

---

## 💻 Code Implementations

### JavaScript

```javascript
class Solution {
    /**
     * @param {number} n
     * @returns {void}
     */
    printNos(n) {
        if (n <= 0) return;

        process.stdout.write(String(n) + " ");
        this.printNos(n - 1);
    }
}
```

### Python 3

```python
import sys
# Increase recursion depth limit for large n
sys.setrecursionlimit(5000)

class Solution:
    """
    GeeksforGeeks: Print N to 1 Without Loop
    Topic: Linear Recursion (Tail Recursion)
    """
    def printNos(self, n: int) -> None:
        # Base case
        if n <= 0:
            return
        
        # Print before recursive call
        print(n, end=" ")
        
        # Tail recursive call
        self.printNos(n - 1)
```

---

## 🪜 Dry Run (`n = 5`)

| Step | Function Call | Action Executed | Generated Output | Cumulative Output |
|:---:|:---:|:---:|:---:|---|
| 1 | `printNos(5)` | Print `5` & call `printNos(4)` | `5 ` | `5 ` |
| 2 | `printNos(4)` | Print `4` & call `printNos(3)` | `4 ` | `5 4 ` |
| 3 | `printNos(3)` | Print `3` & call `printNos(2)` | `3 ` | `5 4 3 ` |
| 4 | `printNos(2)` | Print `2` & call `printNos(1)` | `2 ` | `5 4 3 2 ` |
| 5 | `printNos(1)` | Print `1` & call `printNos(0)` | `1 ` | `5 4 3 2 1 ` |
| 6 | `printNos(0)` | Base case reached (`0 <= 0`), return | — | `5 4 3 2 1 ` |

**Final Output:**
```text
5 4 3 2 1
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$ — The function executes exactly $n + 1$ times, performing $O(1)$ print operations in each call.
- **Auxiliary Space:** $O(n)$ — The call stack stores up to $n + 1$ frames (reducible to $O(1)$ in engines with Tail Call Optimization).

---

## 🔑 Key Comparison: Print N to 1 vs Print 1 to N

| Problem | Work Placement | Recursion Type | Execution Phase |
|---|---|---|---|
| **Print N to 1** | Print **BEFORE** recursive call | Tail Recursion | Work done on **Winding** (going down) |
| **Print 1 to N** | Print **AFTER** recursive call | Head Recursion | Work done on **Unwinding** (coming back) |
