# 1. Two Sum

**Difficulty:** Easy  
**Topics:** Array, Hash Table  
**Companies:** Amazon, Microsoft, Google, Apple, Meta, and many more.

---

## 📖 The Problem in Simple Words

You are given a list of numbers (`nums`) and a specific number (`target`).

Your job is to find **two different numbers** in the list that add up exactly to the `target`.

- Return the **indices** (positions) of these two numbers.
- You **cannot** use the same number twice (e.g., you can't use the number at index 0 twice if it's the only 9 in the list).
- The problem guarantees that there is **exactly one** solution.

> **Note:** In programming, we start counting positions from **0**.

---

## 📝 Examples

### Example 1: The Classic Case
**Input:** `nums = [2, 7, 11, 15]`, `target = 9`  
**Output:** `[0, 1]`

**Explanation:**
- Look at `nums[0]` which is **2**.
- Look at `nums[1]` which is **7**.
- `2 + 7 = 9`. This matches the target!
- So, we return their indices: `[0, 1]`.

---

### Example 2: Target in the Middle
**Input:** `nums = [3, 2, 4]`, `target = 6`  
**Output:** `[1, 2]`

**Explanation:**
- `3 + 2 = 5` (Not 6).
- `3 + 4 = 7` (Not 6).
- `2 + 4 = 6` (Match!).
- Indices of 2 and 4 are `1` and `2`.
- Return: `[1, 2]`.

---

### Example 3: Same Number Twice
**Input:** `nums = [3, 3]`, `target = 6`  
**Output:** `[0, 1]`

**Explanation:**
- `nums[0]` is **3**.
- `nums[1]` is **3**.
- `3 + 3 = 6`.
- Return: `[0, 1]`.
- *Note: We use two different indices (0 and 1), even though the values are the same.*

---

## ⚠️ Constraints

- `2 <= nums.length <= 10^4` (The list has at least 2 numbers).
- `-10^9 <= nums[i] <= 10^9` (Numbers can be very large or negative).
- `-10^9 <= target <= 10^9`.
- **Only one valid answer exists.**

---

## 💻 Function Signature

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Your code here
};
```

---

## 🧪 Test Cases

```javascript
// Test Case 1: Standard positive numbers
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]

// Test Case 2: Unordered numbers
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]

// Test Case 3: Duplicate numbers
Input: nums = [3, 3], target = 6
Output: [0, 1]

// Test Case 4: Negative numbers
Input: nums = [-1, -2, -3, -4], target = -5
Output: [0, 3]  // -1 + -4 = -5

// Test Case 5: Mixed positive and negative
Input: nums = [0, 4, 3, 0], target = 0
Output: [0, 3]  // 0 + 0 = 0
```

---

## 📌 Key Rules to Follow

1.  **Indices, Not Values:** Return the **positions** (0, 1, 2...), not the numbers themselves.
2.  **No Reusing Indices:** You cannot use the same index twice (e.g., if `target = 6` and `nums = [3]`, you can't say `3+3=6` using the same index).
3.  **Order Doesn't Matter:** `[0, 1]` is the same as `[1, 0]`.
4.  **Exact Match:** The sum must be exactly the target.

---



## 🔗 Related Problems

- [15. 3Sum](https://leetcode.com/problems/3sum/) (Medium)
- [18. 4Sum](https://leetcode.com/problems/4sum/) (Medium)
- [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) (Medium)
- [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest/) (Medium)

---

