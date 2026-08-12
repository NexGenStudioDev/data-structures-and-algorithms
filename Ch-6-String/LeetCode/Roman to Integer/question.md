# 13. Roman to Integer

**Difficulty:** Easy  
**Topics:** Hash Table, Math, String  
**Companies:** Amazon, Microsoft, Google, Apple, and many more.

---

## 📖 Description

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D`, and `M`.

| Symbol | Value |
| :---: | :---: |
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

Roman numerals are usually written largest to smallest from left to right. However, there are **six instances where subtraction is used**:

1.  `I` can be placed before `V` (5) and `X` (10) to make **4** and **9**.
    *   Example: `IV` = 4, `IX` = 9.
2.  `X` can be placed before `L` (50) and `C` (100) to make **40** and **90**.
    *   Example: `XL` = 40, `XC` = 90.
3.  `C` can be placed before `D` (500) and `M` (1000) to make **400** and **900**.
    *   Example: `CD` = 400, `CM` = 900.

**Example:**
- `2` is written as `II` (1 + 1).
- `12` is written as `XII` (10 + 1 + 1).
- `27` is written as `XXVII` (10 + 10 + 5 + 1 + 1).
- `4` is written as `IV` (not `IIII`).

Given a roman numeral `s`, convert it to an integer.

---

## 📝 Examples

### Example 1
**Input:** `s = "III"`  
**Output:** `3`  
**Explanation:** `III` = 1 + 1 + 1 = 3.

### Example 2
**Input:** `s = "LVIII"`  
**Output:** `58`  
**Explanation:** `L` = 50, `V` = 5, `III` = 3. Total: 50 + 5 + 3 = 58.

### Example 3
**Input:** `s = "MCMXCIV"`  
**Output:** `1994`  
**Explanation:** 
- `M` = 1000  
- `CM` = 900 (1000 - 100)  
- `XC` = 90 (100 - 10)  
- `IV` = 4 (5 - 1)  
Total: 1000 + 900 + 90 + 4 = 1994.

---

## ⚠️ Constraints

- `1 <= s.length <= 15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is **guaranteed** that `s` is a valid roman numeral in the range `[1, 3999]`.

---

## 💻 Function Signature

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Your code here
};
```

---

## 🧪 Test Cases

```javascript
// Test Case 1
Input: s = "III"
Output: 3

// Test Case 2
Input: s = "LVIII"
Output: 58

// Test Case 3
Input: s = "MCMXCIV"
Output: 1994

// Test Case 4 (Subtraction cases)
Input: s = "IV"
Output: 4

// Test Case 5 (Complex case)
Input: s = "MCMXC"
Output: 1990
```



