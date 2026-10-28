# Chapter 10: Two Pointers & Sliding Window

> **The two most powerful algorithmic paradigms for linear data structures.**  
> Transform brute-force $O(N^2)$ quadratic nested loops into optimal $O(N)$ linear scans.

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
Used primarily on sorted arrays, palindrome checking, or partition problems:
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
Find the longest/shortest contiguous subarray/substring satisfying condition $C$:
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

| Problem | Difficulty | Pattern | Status |
|---|---|---|:---:|
| LeetCode 167: Two Sum II (Sorted) | Medium | Opposite Direction | ⏳ To Do |
| LeetCode 15: 3Sum | Medium | Sort + Two Pointers | ⏳ To Do |
| LeetCode 11: Container With Most Water | Medium | Greedy Two Pointers | ⏳ To Do |
| LeetCode 42: Trapping Rain Water | Hard | Two Pointers Left/Right Max | ⏳ To Do |
| LeetCode 643: Maximum Average Subarray I | Easy | Fixed Sliding Window | ⏳ To Do |
| LeetCode 3: Longest Substring Without Repeating | Medium | Variable Sliding Window | ⏳ To Do |
| LeetCode 424: Longest Repeating Character Replacement | Medium | Variable Sliding Window | ⏳ To Do |
| LeetCode 76: Minimum Window Substring | Hard | Variable Sliding Window + Map | ⏳ To Do |
| LeetCode 141: Linked List Cycle | Easy | Fast & Slow Pointers | ⏳ To Do |
| LeetCode 142: Linked List Cycle II | Medium | Fast & Slow Cycle Entry | ⏳ To Do |
