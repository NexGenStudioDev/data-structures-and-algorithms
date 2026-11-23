# 344. Reverse String — Recursion Only

**Difficulty:** Easy  
**Topic:** String, Array, Recursion  
**LeetCode:** https://leetcode.com/problems/reverse-string/

## Problem Statement

Write a function that reverses a string.

The input string is given as an array of characters `s`.

You must reverse the string by modifying the original input array **in-place**, using **O(1) extra memory**.

### Special Requirement

**You MUST solve this problem using recursion.**

- You must use a recursive function to reverse the string.
- You are not allowed to use loops (`for`, `while`, or `do-while`) for reversing.
- You cannot use built-in reverse functions such as `reverse()` or `std::reverse()`.
- You must modify the original input array.
- You cannot create another array or string to store the reversed result.
- Your solution must use O(1) auxiliary memory excluding the recursion call stack.

## Examples

### Example 1

**Input:**
```text
s = ["h","e","l","l","o"]
```

**Output:**
```text
["o","l","l","e","h"]
```

### Example 2

**Input:**
```text
s = ["H","a","n","n","a","h"]
```

**Output:**
```text
["h","a","n","n","a","H"]
```

### Example 3

**Input:**
```text
s = ["a"]
```

**Output:**
```text
["a"]
```

### Example 4

**Input:**
```text
s = ["a","b"]
```

**Output:**
```text
["b","a"]
```

### Example 5

**Input:**
```text
s = ["r","a","c","e","c","a","r"]
```

**Output:**
```text
["r","a","c","e","c","a","r"]
```

## Constraints

- `1 <= s.length <= 10^5`
- `s[i]` is a printable ASCII character.

## Additional Rules

1. **Recursion is mandatory.**
2. The function must modify the input array directly.
3. Do not return a new reversed array.
4. Do not use any built-in string reversal method.
5. Do not use iterative loops for reversing.
6. Handle both odd-length and even-length arrays.
7. Handle an array containing only one character.
8. Handle arrays containing duplicate characters.
9. Handle arrays that are already reversed or are palindromes.

## Expected Complexity

- **Time Complexity:** O(n)
- **Auxiliary Space Complexity:** O(n) due to the recursive call stack.
- **Additional Array Storage:** O(1)

**Note:** Although the original LeetCode problem requires O(1) extra memory, a recursive solution normally uses O(n) call-stack space. For this modified recursion-only challenge, recursion stack memory is excluded from the O(1) auxiliary-storage requirement.

---

**Your Task:** Implement the `reverseString` function using recursion only, without creating another array or using any built-in reversal method.