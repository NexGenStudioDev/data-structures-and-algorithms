
# LeetCode 739: Daily Temperatures

## 📌 Problem Description

Given an array of integers `temperatures` representing the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`th day to get a **warmer** temperature. 

If there is no future day for which this is possible, keep `answer[i] == 0` instead.

---

## 🧩 Examples

### Example 1
**Input:**
`temperatures = [73, 74, 75, 71, 69, 72, 76, 73]`

**Output:**
`[1, 1, 4, 2, 1, 1, 0, 0]`

**Explanation:**
- **Day 0 (73°):** Wait 1 day → Next day is 74° (warmer).
- **Day 1 (74°):** Wait 1 day → Next day is 75° (warmer).
- **Day 2 (75°):** Wait 4 days → Next warmer is on Day 6 (76°).
- **Day 3 (71°):** Wait 2 days → Next warmer is on Day 5 (72°).
- **Day 4 (69°):** Wait 1 day → Next day is 72° (warmer).
- **Day 5 (72°):** Wait 1 day → Next day is 76° (warmer).
- **Day 6 (76°):** No warmer day ahead → 0.
- **Day 7 (73°):** No warmer day ahead → 0.

### Example 2
**Input:**
`temperatures = [30, 40, 50, 60]`

**Output:**
`[1, 1, 1, 0]`

### Example 3
**Input:**
`temperatures = [30, 60, 90]`

**Output:**
`[1, 1, 0]`

---

## ⚙️ Constraints

- `1 <= temperatures.length <= 10^5`
- `30 <= temperatures[i] <= 100`

---

## 💡 Hints

1. If the temperature is say, 70 today, then in the future a warmer temperature must be either 71, 72, 73, ..., 99, or 100. We could remember when all of them occur next.

2. **Core Concept:** This problem is a variation of finding the **Next Greater Element** for every item in the array. You need to determine the distance (number of days) between the current index and the index of the next greater value.

---

## 🧠 Problem Category & Difficulty

- **Difficulty:** Medium
- **Topics:** `Array`, `Stack`, `Monotonic Stack`
- **Contest:** Weekly Contest 61

---

## 🔗 Related Problems

If you want to practice similar patterns, consider solving these first:
- [Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/) (Easy)
- [Online Stock Span](https://leetcode.com/problems/online-stock-span/) (Medium)

---

