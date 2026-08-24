# Print Hollow Square Star Pattern

**Difficulty:** Easy  
**Topics:** Strings, Loops, Simulation

---

## Problem Description

Given an integer `n`, write a function to print a **hollow square pattern** of asterisks (`*`) with dimensions `n x n`.

The pattern must satisfy the following conditions:
- The **first row** and **last row** are completely filled with asterisks.
- The **first column** and **last column** of every row are filled with asterisks.
- All **interior** cells (those not on the border) must contain a space (` `).

### Example 1:
**Input:** `n = 5`  
**Output:**
```
*****
*   *
*   *
*   *
*****
```

### Example 2:
**Input:** `n = 1`  
**Output:**
```
*
```

### Example 3:
**Input:** `n = 4`  
**Output:**
```
****
*  *
*  *
****
```

---

## Constraints

- `1 <= n <= 100`

---

## Follow-up Questions

1.  **Time Complexity:** What is the time complexity of your solution?
2.  **Edge Cases:** How does your logic handle `n = 1`?
3.  **Optimization:** Can you solve this without checking every single cell (i.e., without a nested loop for the interior)?
4.  **Variation:** How would you modify the code to print a **Hollow Diamond** pattern?

---

## Starter Code

### Python
```python
class Solution:
    def printHollowSquare(self, n: int) -> None:
        # Your code here
        pass
```

### JavaScript
```javascript
/**
 * @param {number} n
 * @return {void}
 */
var printHollowSquare = function(n) {
    // Your code here
};
```

### Java
```java
class Solution {
    public void printHollowSquare(int n) {
        // Your code here
    }
}
```

### C++
```cpp
class Solution {
public:
    void printHollowSquare(int n) {
        // Your code here
    }
};
```