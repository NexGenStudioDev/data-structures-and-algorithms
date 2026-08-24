# Square Star Pattern | LeetCode Style Solution

## Problem Statement
Given an integer `n`, print a square pattern of asterisks (`*`) with dimensions `n x n`.

**Example:**
Input: `n = 4`
Output:
```
****
****
****
****
```

---

## 🧠 Approach
Initially, we need to run **two loops**: an **outer loop** to handle the rows and an **inner loop** to handle the columns.

1.  **Outer Loop (`row`):** Iterates from `0` to `n-1`. This controls the **height** of the square. For every iteration of this loop, we are essentially moving to a new line.
2.  **Inner Loop (`col`):** Iterates from `0` to `n-1`. This controls the **width** of the square. For every single iteration of the outer loop, the inner loop runs completely `n` times, printing one `*` character each time.
3.  **Newline Management:** After the inner loop finishes (meaning one full row of stars is printed), we must print a **newline character** to move the cursor to the next line for the next row.

**Key Insight:** The pattern forms a square because the range of the inner loop (`n` columns) matches the range of the outer loop (`n` rows).

---

## 📝 Dry Run
Let's trace the execution for `n = 3`:

| Step | Outer Loop (`row`) | Inner Loop Action (`col`) | Output Built | Action After Inner Loop |
| :--- | :--- | :--- | :--- | :--- |
| **1** | `row = 0` | `col=0` → `*`<br>`col=1` → `**`<br>`col=2` → `***` | `***` | Print Newline (`\n`) |
| **2** | `row = 1` | `col=0` → `*`<br>`col=1` → `**`<br>`col=2` → `***` | `***` | Print Newline (`\n`) |
| **3** | `row = 2` | `col=0` → `*`<br>`col=1` → `**`<br>`col=2` → `***` | `***` | Print Newline (`\n`) |
| **End**| Loop Terminates | - | - | - |

**Final Output:**
```
***
***
***
```

---

## 💻 Code Implementation

### Python Solution
```python
def print_square_pattern(n):
    """
    Prints an n x n square pattern of asterisks.
    Time Complexity: O(n^2)
    Space Complexity: O(1)
    """
    # Outer loop for rows
    for row in range(n):
        # Inner loop for columns
        for col in range(n):
            print("*", end="")  # Print star without newline
        
        # Move to the next line after printing all columns for the current row
        print()

# Example Usage
if __name__ == "__main__":
    n = 4
    print_square_pattern(n)
```

### JavaScript Solution
```javascript
/**
 * Prints an n x n square pattern of asterisks.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param {number} n - The size of the square
 */
function printSquarePattern(n) {
    // Outer loop for rows
    for (let row = 0; row < n; row++) {
        let line = ""; // String accumulator for the current row
        
        // Inner loop for columns
        for (let col = 0; col < n; col++) {
            line += "*";
        }
        
        // Print the completed row (console.log adds a newline automatically)
        console.log(line);
    }
}

// Example Usage
const n = 4;
printSquarePattern(n);
```

---

## 📊 Complexity Analysis

| Metric | Value | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | **O(n²)** | We have a nested loop structure. The outer loop runs `n` times, and for each iteration, the inner loop runs `n` times. Total operations = `n * n`. |
| **Space Complexity** | **O(1)** | We are only using a fixed amount of extra space for variables (`row`, `col`, `line`), regardless of the input size `n`. |

---

## 🚀 Optimization Note (Alternative Approach)
While nested loops are the standard way to demonstrate logic, in **Python** and **JavaScript**, you can achieve the same result more concisely using string multiplication and joining, which is often faster in practice due to internal optimizations.

**Python One-Liner:**
```python
print("\n".join(["*" * n] * n))
```

**JavaScript One-Liner:**
```javascript
console.log(Array(n).fill("*".repeat(n)).join("\n"));
```
*Note: In an interview, the nested loop approach is usually preferred to demonstrate your understanding of control flow and algorithmic logic.*