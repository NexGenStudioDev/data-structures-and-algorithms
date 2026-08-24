# 2846. Print Hollow Square Star Pattern

## 🧠 Approach

To solve this problem, we need to iterate through a 2D grid of size `n x n` and determine whether each cell should contain a star (`*`) or a space (` `).

**Core Logic:**
A cell at position `(row, col)` is part of the **border** (and thus should print `*`) if:
1.  It is in the **top row** (`row === 0`).
2.  It is in the **bottom row** (`row === n - 1`).
3.  It is in the **leftmost column** (`col === 0`).
4.  It is in the **rightmost column** (`col === n - 1`).

If the cell satisfies **any** of these conditions, we print `*`. Otherwise, it is an **interior** cell, and we print a space ` `.

**Algorithm Steps:**
1.  Initialize an empty string (or list) to build the output.
2.  Loop `row` from `0` to `n-1` (Outer Loop).
3.  Inside, loop `col` from `0` to `n-1` (Inner Loop).
4.  Check the border conditions.
    *   If true: Append `*`.
    *   If false: Append ` `.
5.  After the inner loop finishes (one row complete), append a newline character `\n`.
6.  Print the final result.

**Edge Case:**
If `n = 1`, the single cell satisfies all border conditions (`0 == 0` and `0 == 1-1`), so it correctly prints a single `*`.

---

## 📝 Dry Run (Input: `n = 4`)

| Row | Col | Condition Check | Output Char | Row String |
| :--- | :--- | :--- | :--- | :--- |
| **0** | 0 | `row==0` (True) | `*` | `*` |
| | 1 | `row==0` (True) | `*` | `**` |
| | 2 | `row==0` (True) | `*` | `***` |
| | 3 | `row==0` (True) | `*` | `****` |
| | *Newline* | - | `\n` | `****\n` |
| **1** | 0 | `col==0` (True) | `*` | `*` |
| | 1 | All False | ` ` | `* ` |
| | 2 | All False | ` ` | `*  ` |
| | 3 | `col==3` (True) | `*` | `*  *` |
| | *Newline* | - | `\n` | `*  *\n` |
| **2** | 0 | `col==0` (True) | `*` | `*` |
| | 1 | All False | ` ` | `* ` |
| | 2 | All False | ` ` | `*  ` |
| | 3 | `col==3` (True) | `*` | `*  *` |
| | *Newline* | - | `\n` | `*  *\n` |
| **3** | 0 | `row==3` (True) | `*` | `*` |
| | 1 | `row==3` (True) | `*` | `**` |
| | 2 | `row==3` (True) | `*` | `***` |
| | 3 | `row==3` (True) | `*` | `****` |
| | *Newline* | - | `\n` | `****\n` |

**Final Output:**
```text
****
*  *
*  *
****
```

---

## 💻 Code Solution

### JavaScript Solution
```javascript
/**
 * @param {number} n
 * @return {void}
 */
var printHollowSquare = function(n) {
    // Edge case: Handle non-positive inputs gracefully
    if (n <= 0) return;

    let result = "";

    // Outer loop: Iterate through each row
    for (let row = 0; row < n; row++) {
        // Inner loop: Iterate through each column in the current row
        for (let col = 0; col < n; col++) {
            // Check if the current cell is on the border
            // Top row (row === 0), Bottom row (row === n - 1)
            // Left column (col === 0), Right column (col === n - 1)
            const isTop = row === 0;
            const isBottom = row === n - 1;
            const isLeft = col === 0;
            const isRight = col === n - 1;

            if (isTop || isBottom || isLeft || isRight) {
                result += "*";
            } else {
                // Interior cells get a space
                result += " ";
            }
        }
        // Move to the next line after completing the current row
        result += "\n";
    }

    // Print the final constructed pattern
    console.log(result);
};

// --- Example Usage ---
console.log("Input: 5");
printHollowSquare(5);
// Output:
// *****
// *   *
// *   *
// *   *
// *****

console.log("\nInput: 1");
printHollowSquare(1);
// Output:
// *

console.log("\nInput: 4");
printHollowSquare(4);
// Output:
// ****
// *  *
// *  *
// ****
```

### Python Solution
```python
class Solution:
    def printHollowSquare(self, n: int) -> None:
        """
        Prints a hollow square pattern of size n x n.
        Time Complexity: O(n^2)
        Space Complexity: O(n^2) for string storage
        """
        if n <= 0:
            return

        result = []
        
        for row in range(n):
            row_chars = []
            for col in range(n):
                # Check border conditions
                if row == 0 or row == n - 1 or col == 0 or col == n - 1:
                    row_chars.append("*")
                else:
                    row_chars.append(" ")
            # Join characters for the current row and add to list
            result.append("".join(row_chars))
        
        # Print the result joined by newlines
        print("\n".join(result))

# --- Example Usage ---
# sol = Solution()
# sol.printHollowSquare(5)
```

---

## 📊 Complexity Analysis

| Metric | Value | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | **O(n²)** | We iterate through every cell in the `n x n` grid exactly once. Total operations are proportional to `n * n`. |
| **Space Complexity** | **O(n²)** | We store the entire pattern as a single string (or list of strings) in memory before printing. The size of the output grows quadratically with `n`. |

---

## 💡 Optimized Approach (Bonus)

While the nested loop approach is excellent for demonstrating logic, we can optimize the **construction** process by avoiding the inner loop for spaces.

**Logic:**
1.  Print the top row: `*` repeated `n` times.
2.  If `n > 1`:
    *   Loop `n-2` times: Print `*` + `(n-2)` spaces + `*`.
3.  If `n > 1`: Print the bottom row: `*` repeated `n` times.

**JavaScript Optimization:**
```javascript
var printHollowSquareOptimized = function(n) {
    if (n <= 0) return;
    if (n === 1) {
        console.log("*");
        return;
    }

    // Top Row
    console.log("*".repeat(n));

    // Middle Rows (using string repetition)
    const middleRow = "*" + " ".repeat(n - 2) + "*";
    for (let i = 0; i < n - 2; i++) {
        console.log(middleRow);
    }

    // Bottom Row
    console.log("*".repeat(n));
};
```
*Note: This approach is more efficient in terms of execution time for large `n` because it avoids the inner loop overhead, though the output size is still O(n²).*

---

## 🚨 Common Pitfalls to Avoid

1.  **Incorrect Logic with OR:**
    *   **Wrong:** `if (row !== 0 || row !== n - 1)` -> This condition is **always true** because a number cannot be both 0 and `n-1` at the same time.
    *   **Correct:** `if (row === 0 || row === n - 1 ...)` -> Use equality checks with OR to identify specific border lines.

2.  **Missing Spaces:**
    *   Forgetting to append a space ` ` in the `else` block will result in a solid square or a pattern with no interior.

3.  **Newline Placement:**
    *   Ensure the newline `\n` is added **after** the inner loop finishes, not inside it. Adding it inside the inner loop will print one star per line.

4.  **Edge Case `n=1`:**
    *   Ensure your logic doesn't try to access `n-2` spaces when `n=1`. The nested loop logic handles this naturally, but the optimized string method requires a specific check for `n=1`.