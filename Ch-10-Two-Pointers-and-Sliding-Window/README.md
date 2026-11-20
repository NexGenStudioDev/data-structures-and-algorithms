# Chapter 10: Two Pointers & Sliding Window

> **The two most powerful algorithmic paradigms for linear data structures.**  
> These patterns can reduce work to a linear scan when the problem has the right structure. They do not turn every quadratic solution into a linear one.

---

## 📌 Chapter Directory Structure

```text
Ch-10-Two-Pointers-and-Sliding-Window/
├── 01-Opposite-Direction-Two-Pointers/
├── 02-Same-Direction-Two-Pointers/
├── 03-Fixed-Size-Sliding-Window/
├── 04-Variable-Size-Sliding-Window/
├── 05-Fast-and-Slow-Pointers/
├── 06-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 Master Templates

### 1. Opposite-Direction Two Pointers (Convergence)
For pair-sum pruning, the array must be sorted (or otherwise ordered in a way that justifies each pointer move). Palindrome checks and some partition problems use two pointers for different reasons. Example for a sorted array:
```javascript
let left = 0, right = arr.length - 1;
while (left < right) {
    let current = arr[left] + arr[right];
    if (current === target) {
        return [left, right];
    } else if (current < target) {
        left++;
    } else {
        right--;
    }
}
```

### 2. Variable-Size Sliding Window
Useful for contiguous ranges when expanding and shrinking the window maintains a condition that lets you discard earlier starts safely. Many sum-window problems need non-negative values; with negative values, use another method unless a different invariant applies:
```javascript
let left = 0, result = 0;
let windowState = {}; // or Map / Set / Count

for (let right = 0; right < arr.length; right++) {
    // 1. Expand: include arr[right] in window state
    add(arr[right], windowState);

    // 2. Shrink: while window violates condition, contract from left
    while (isInvalid(windowState)) {
        remove(arr[left], windowState);
        left++;
    }

    // 3. Update answer
    result = Math.max(result, right - left + 1);
}
```

### 3. Fast and Slow Pointers (Floyd's Tortoise and Hare)
Detect cycles in linked lists, find middle nodes, or detect duplicate values without extra space.
```javascript
let slow = head, fast = head;
while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
        return true; // Cycle detected!
    }
}
return false;
```

---

## 📝 Practice Roadmap

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Easy | LeetCode | [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i) | Fixed Sliding Window | N/A | N/A | To Do |
| Medium | LeetCode | [3Sum](https://leetcode.com/problems/3sum) | Sort + Two Pointers | N/A | N/A | To Do |
| Medium | TakeUForward | [4 Sum](https://takeuforward.org/practice/dsa/4-sum) | Two Pointers & Sliding Window | N/A | N/A | To Do |
| Medium | LeetCode | [Container With Most Water](https://leetcode.com/problems/container-with-most-water) | Greedy Two Pointers | N/A | N/A | To Do |
| Medium | GeeksforGeeks | [Count Pairs with Given Sum in a Sorted Array](https://www.geeksforgeeks.org/dsa/count-pairs-with-given-sum-in-sorted-array) | Two Pointers & Sliding Window | N/A | N/A | To Do |
| Medium | LeetCode | [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii) | Fast & Slow Cycle Entry | N/A | N/A | To Do |
| Medium | LeetCode | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement) | Variable Sliding Window | N/A | N/A | To Do |
| Medium | LeetCode | [Longest Substring Without Repeating](https://leetcode.com/problems/longest-substring-without-repeating-characters) | Variable Sliding Window | N/A | N/A | To Do |
| Medium | LeetCode | [Two Sum II (Sorted)](https://leetcode.com/problems/two-sum-ii-sorted) | Opposite Direction | N/A | N/A | To Do |
| Hard | LeetCode | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring) | Variable Sliding Window + Map | N/A | N/A | To Do |
| Hard | LeetCode | [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water) | Two Pointers Left/Right Max | N/A | N/A | To Do |
