# Part 2: Sliding Window Technique

## Table of Contents

- [1. What is Sliding Window?](#1-what-is-sliding-window)
- [2. Why do we use Sliding Window?](#2-why-do-we-use-sliding-window)
- [3. Important Concepts](#3-important-concepts)
- [4. Types of Sliding Window](#4-types-of-sliding-window)
  - [4.1 Fixed Size Sliding Window](#41-fixed-size-sliding-window)
  - [4.2 Variable Size Sliding Window](#42-variable-size-sliding-window)
- [5. Fixed Size vs Variable Size Sliding Window](#5-fixed-size-vs-variable-size-sliding-window)
- [6. Important Sliding Window Patterns](#6-important-sliding-window-patterns)
- [7. Sliding Window with Frequency Tracking](#7-sliding-window-with-frequency-tracking)
- [8. At Most K, At Least K and Exactly K](#8-at-most-k-at-least-k-and-exactly-k)
- [9. Advanced Sliding Window — Monotonic Deque](#9-advanced-sliding-window--monotonic-deque)
- [10. How to Identify Sliding Window Problems?](#10-how-to-identify-sliding-window-problems)
- [11. When Not to Use Sliding Window?](#11-when-not-to-use-sliding-window)
- [12. Time and Space Complexity](#12-time-and-space-complexity)
- [13. Advantages and Disadvantages](#13-advantages-and-disadvantages)
- [14. Common Mistakes](#14-common-mistakes)
- [15. Frequently Asked Interview & Exam Questions](#15-frequently-asked-interview--exam-questions)
- [Practice Roadmap](#-practice-roadmap)
- [16. Quick Revision Cheat Sheet](#16-quick-revision-cheat-sheet)
- [17. Additional Learning Resources](#17-additional-learning-resources)
- [18. Chapter Completion Checklist](#18-chapter-completion-checklist)
- [19. Conclusion](#19-conclusion)

---

## 1. What is Sliding Window?

Sliding Window is a problem-solving technique where we maintain a continuous group of elements called a **window** and move it through an array or string to find the required answer efficiently.

Instead of processing the same elements repeatedly, we reuse the previous result by removing old elements and adding new elements to the window.

Sliding Window is commonly used to solve problems involving:

- Maximum or minimum sum.
- Maximum or minimum average.
- Longest or shortest subarray.
- Longest or shortest substring.
- Counting valid subarrays or substrings.

### How does it work?

Suppose we have an array and a window of size `3`.

```text
Array: [2, 4, 6, 8, 10, 12]

Window 1: [2, 4, 6]  8  10  12
Window 2:  2 [4, 6, 8] 10  12
Window 3:  2  4 [6, 8, 10] 12
Window 4:  2  4  6 [8, 10, 12]
```

We generally use two pointers to maintain the window.

```js
let low = 0;
let high = 0;
```

Here:

- `low` represents the starting position of the window.
- `high` represents the ending position of the window.
- Moving `high` forward expands the window.
- Moving `low` forward shrinks the window.

### Window Size Formula

```text
Window Size = high - low + 1
```

**Remember:** A window always represents a continuous range of elements.

---

## 2. Why do we use Sliding Window?

Suppose we want to find the maximum sum of three consecutive elements.

```text
arr = [2, 4, 6, 8, 10, 12]
k = 3
```

### Brute Force Approach

Calculate the sum of every possible window separately.

```text
2 + 4 + 6   = 12
4 + 6 + 8   = 18
6 + 8 + 10  = 24
8 + 10 + 12 = 30
```

Here, we repeatedly calculate elements that were already processed.

### Sliding Window Approach

Calculate the first window's sum and then reuse it to calculate the next window's sum.

```text
NewSum = PreviousSum - Outgoing + Incoming
```

| Property              | Brute Force              | Sliding Window        |
| --------------------- | ------------------------ | --------------------- |
| Approach              | Recalculate every window | Reuse previous result |
| Time Complexity       | O(n × k)                 | O(n)                  |
| Auxiliary Space       | O(1)                     | O(1)                  |
| Repeated calculations | More                     | Fewer                 |
| Efficiency            | Lower                    | Higher                |

**Main objective:** Reduce unnecessary calculations by reusing information from the previous window.

---

## 3. Important Concepts

Before learning Sliding Window, we should understand the difference between a subarray, substring and subsequence.

### 3.1 Subarray

A subarray is a continuous part of an array.

```text
Array: [1, 2, 3, 4, 5]

Valid:   [1, 2, 3]
Valid:   [3, 4, 5]
Invalid: [1, 3, 5]
```

### 3.2 Substring

A substring is a continuous part of a string.

```text
String: "abcdef"

Valid:   "abc"
Valid:   "cde"
Invalid: "ace"
```

### 3.3 Subsequence

A subsequence is formed by selecting elements without changing their original order. The elements do not need to be continuous.

```text
Array: [1, 2, 3, 4, 5]

Valid: [1, 3, 5]
Valid: [2, 4]
Valid: [1, 2, 5]
```

| Property                  | Subarray | Substring | Subsequence  |
| ------------------------- | -------- | --------- | ------------ |
| Used with                 | Array    | String    | Both         |
| Continuous                | Yes      | Yes       | Not required |
| Maintains original order  | Yes      | Yes       | Yes          |
| Sliding Window applicable | Often    | Often     | Generally no |

---

## 4. Types of Sliding Window

Sliding Window is mainly divided into two types based on how the window size is maintained during traversal.

```text
Sliding Window
│
├── 1. Fixed Size Sliding Window
│       └── Window size remains constant.
│
└── 2. Variable Size Sliding Window
        └── Window size changes based on a condition.
```

Both types use two pointers, but the main difference is **when and why we move these pointers.**

### 4.1 Fixed Size Sliding Window

#### Definition

Fixed Size Sliding Window is a technique where we maintain a window of a fixed size `K` and move it through an array or string to find the required answer efficiently.

Instead of calculating the result for every window from scratch, we reuse the previous window's information by removing the outgoing element and adding the incoming element.

#### Understanding the Concept

Suppose we have an array:

```text
arr = [2, 4, 6, 8, 10, 12]
k = 3
```

![Fixed Size Sliding Window](./Images/Sliding%20Window.png)

Here, every complete window must contain exactly three consecutive elements.

Notice that the position of the window changes, but its size remains constant.

#### How Does It Work?

The entire process can be divided into two phases.

**Phase 1: Build the Window**

Initially, we add elements using the `high` pointer until the window reaches the required size `K`.

```text
[2]          → Size = 1
[2, 4]       → Size = 2
[2, 4, 6]    → Size = 3
```

Once the window reaches size `K`, we calculate or update the answer.

**Phase 2: Slide the Window**

After processing the first complete window, we remove the first element and add the next element to maintain the same window size.

This process continues until all possible windows have been processed.

![Fixed Size Sliding Window Approach](./Images/Sliding%20Window%20Approach.png)

#### Important Formulas

| Formula                     | Purpose                              |
| --------------------------- | ------------------------------------ |
| `high - low + 1`            | Calculate current window size        |
| `high - low + 1 === k`      | Check whether the window is complete |
| `sum - outgoing + incoming` | Calculate the next window sum        |
| `n - k + 1`                 | Calculate total possible windows     |
| `sum / k`                   | Calculate window average             |

The total-window formula assumes `1 <= k <= n`.

#### General Algorithm

1. Initialize the `low` pointer and required window state.
2. Traverse the array using the `high` pointer.
3. Add the incoming element to the window.
4. Check whether the window size is equal to `K`.
5. If yes, update the required answer.
6. Remove the outgoing element.
7. Move the `low` pointer forward.
8. Repeat until the traversal is completed.

#### General Code Template

```js
let low = 0;

for (let high = 0; high < arr.length; high++) {

    // Step 1: Add incoming element

    // Step 2: Check window size
    if (high - low + 1 === k) {

        // Step 3: Update the answer

        // Step 4: Remove outgoing element

        // Step 5: Move the low pointer
        low++;
    }
}
```

This is a general template. The operations inside the window depend on the given problem.

#### Example: Maximum Sum Subarray of Size K

**Problem Statement:** Given an array of integers and an integer `K`, find the maximum sum of any contiguous subarray of size `K`.

```text
Input: arr = [2, 1, 5, 1, 3, 2]
       k = 3

Output: 9

Explanation:
The subarray [5, 1, 3] has the maximum sum.
```

##### JavaScript Implementation

```js
function maxSubarraySum(arr, k) {

    if (k <= 0 || k > arr.length) return null;

    let low = 0;
    let sum = 0;
    let maxSum = -Infinity;

    for (let high = 0; high < arr.length; high++) {

        // Add incoming element
        sum += arr[high];

        // Check whether the window is complete
        if (high - low + 1 === k) {

            // Update maximum sum
            maxSum = Math.max(maxSum, sum);

            // Remove outgoing element
            sum -= arr[low];

            // Move starting pointer
            low++;
        }
    }

    return maxSum;
}
```

#### Dry Run

| Low | High | Current Window | Sum | Max Sum |
| --- | ---- | -------------- | --- | ------- |
| 0   | 0    | `[2]`          | 2   | −∞      |
| 0   | 1    | `[2, 1]`       | 3   | −∞      |
| 0   | 2    | `[2, 1, 5]`    | 8   | 8       |
| 1   | 3    | `[1, 5, 1]`    | 7   | 8       |
| 2   | 4    | `[5, 1, 3]`    | 9   | 9       |
| 3   | 5    | `[1, 3, 2]`    | 6   | 9       |

The final answer is `9`.

#### Complexity Analysis

| Complexity      | Brute Force | Sliding Window |
| --------------- | ----------- | -------------- |
| Time Complexity | O(n × k)    | O(n)           |
| Auxiliary Space | O(1)        | O(1)           |

Sliding Window takes `O(n)` time because each element is added once and removed at most once.

#### How to Identify Fixed Size Sliding Window Problems?

Look for these keywords in the problem statement:

- `K` consecutive elements.
- Subarray of size `K`.
- Substring of length `K`.
- Maximum or minimum sum of `K` elements.
- Maximum or minimum average of `K` elements.
- Every window of size `K`.

#### Common Applications

| Application                             | Information Maintained |
| --------------------------------------- | ---------------------- |
| Maximum Sum Subarray                    | Window sum             |
| Minimum Sum Subarray                    | Window sum             |
| Maximum Average Subarray                | Window sum             |
| Find All Anagrams                       | Character frequency    |
| Permutation in String                   | Character frequency    |
| Sliding Window Maximum                  | Monotonic Deque        |
| Count Distinct Elements in Every Window | Hash Map               |

**Key Takeaway:** In Fixed Size Sliding Window, our main objective is to maintain the required window size while efficiently updating the information inside it.

---

### 4.2 Variable Size Sliding Window

#### Definition

Variable Size Sliding Window is a technique where the size of the window changes dynamically depending on a particular condition given in the problem.

Unlike Fixed Size Sliding Window, we do not maintain a constant window length. Instead, we expand or shrink the window to satisfy the required condition or find the optimal answer.

![Variable Size Sliding Window](./Images/Variable%20Size%20Sliding%20Window.png)

#### Understanding the Concept

Suppose we want to find the longest subarray whose sum is less than or equal to `6`.

```text
arr = [2, 1, 3, 4, 1]
target = 6
```

Notice that the window expands when we add new elements and shrinks when the sum exceeds the target.

The longest valid window is `[2, 1, 3]`, having a length of `3`.

#### Fundamental Concepts

Before implementing Variable Size Sliding Window, we need to understand four important concepts.

| Concept          | Description                                      |
| ---------------- | ------------------------------------------------ |
| Window State     | Information maintained inside the window         |
| Window Condition | Rule that determines whether a window is valid   |
| Expand           | Add an incoming element using the `high` pointer |
| Shrink           | Remove an outgoing element using the `low` pointer |

For the above example:

```text
Window State     = Sum of elements
Window Condition = Sum <= Target
Expand           = Add incoming element
Shrink           = Remove outgoing element
Required Answer  = Maximum valid window length
```

#### How Does It Work?

**Step 1: Expand the Window**

Add the next element using the `high` pointer.

```js
sum += arr[high];
```

**Step 2: Check the Condition**

Check whether the current window satisfies the given condition.

```js
sum <= target
```

**Step 3: Shrink the Window**

If the window becomes invalid in this longest-window example, remove elements from the beginning until it becomes valid again.

```js
while (sum > target) {
    sum -= arr[low];
    low++;
}
```

**Step 4: Update the Answer**

Once the window becomes valid, update the maximum length.

```js
maxLength = Math.max(
    maxLength,
    high - low + 1
);
```

The order of shrinking and updating depends on whether we are finding the longest window, shortest window or counting valid windows.

---

## 5. Fixed Size vs Variable Size Sliding Window

| Property            | Fixed Size                | Variable Size               |
| ------------------- | ------------------------- | --------------------------- |
| Window size         | Constant                  | Dynamic                     |
| Window length       | Given in the question     | Determined during traversal |
| Main objective      | Maintain window size      | Maintain window condition   |
| Expanding           | Add incoming element      | Add incoming element        |
| Shrinking           | Maintain size `K`         | Based on the condition      |
| Common loop         | `for` + `if`              | `for` + `while`             |
| Elements removed    | Usually one per iteration | One or multiple             |
| Answer update       | When size equals `K`      | Depends on window validity  |
| Time Complexity     | Usually `O(n)`            | Usually `O(n)`              |
| Common applications | Sum, average, anagrams    | Longest, shortest, counting |

---

## 6. Important Sliding Window Patterns

### 6.1 Maximum and Minimum Sum

When the question asks for the maximum or minimum sum of `K` consecutive elements, maintain the sum of the current window.

```js
sum += arr[high];

if (high - low + 1 === k) {

    maxSum = Math.max(maxSum, sum);
    minSum = Math.min(minSum, sum);

    sum -= arr[low];
    low++;
}
```

Initialize `maxSum` with `-Infinity` and `minSum` with `Infinity`.

### 6.2 Maximum and Minimum Average

When the window size is fixed, we can calculate the average using the window sum.

$$
\text{Average} = \frac{\text{WindowSum}}{K}
$$

For a fixed window size, finding the maximum sum also gives us the maximum average.

```js
return maxSum / k;
```

### 6.3 Longest Valid Window

In this pattern, we want to find the largest continuous range that satisfies a condition.

We expand the window and shrink it whenever the window becomes invalid.

```js
while (windowIsInvalid) {

    // Remove outgoing element
    low++;
}

maxLength = Math.max(
    maxLength,
    high - low + 1
);
```

**Remember:** Shrink while invalid, then update the answer.

### 6.4 Shortest Valid Window

In this pattern, we want to find the smallest continuous range that satisfies a condition.

We expand the window until it becomes valid and then try to reduce its size.

#### Example: Minimum Size Subarray Sum

```text
Input: nums = [2, 3, 1, 2, 4, 3]
Target = 7

Output: 2

Explanation: [4, 3] has sum equal to 7.
```

```js
function minSubArrayLen(target, nums) {
    let low = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let high = 0; high < nums.length; high++) {

        sum += nums[high];

        while (sum >= target) {

            minLength = Math.min(
                minLength,
                high - low + 1
            );

            sum -= nums[low];
            low++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}
```

This solution assumes positive elements and a positive target.

**Remember:** Update the answer and shrink while valid.

### Longest vs Shortest Window

| Longest Window         | Shortest Window            |
| ---------------------- | -------------------------- |
| Find maximum length    | Find minimum length        |
| Shrink while invalid   | Shrink while valid         |
| Update after shrinking | Update before removing     |
| Use `Math.max()`       | Use `Math.min()`           |
| Initialize with `0`    | Initialize with `Infinity` |

---

## 7. Sliding Window with Frequency Tracking

Sometimes maintaining the sum or size of the window is not enough. We also need to track which elements are present and how many times they appear.

For this purpose, we can use a Set, Hash Map or frequency array.

```text
Window: [a, b, a, c, b]

Frequency:

a → 2
b → 2
c → 1
```

### Adding an Element

```js
map.set(
    element,
    (map.get(element) || 0) + 1
);
```

### Removing an Element

```js
map.set(element, map.get(element) - 1);

if (map.get(element) === 0) {
    map.delete(element);
}
```

Deleting elements with zero frequency is important when using `map.size` to count distinct elements.

### Which Data Structure Should We Use?

| Data Structure  | Purpose                                  |
| --------------- | ---------------------------------------- |
| Variable        | Maintain sum, average or count           |
| Set             | Track unique elements                    |
| Hash Map        | Track element frequencies                |
| Frequency Array | Track characters from a limited alphabet |
| Monotonic Deque | Maintain maximum or minimum element      |

**Applications:** Fruit Into Baskets, Permutation in String, Find All Anagrams, Minimum Window Substring.

---

## 8. At Most K, At Least K and Exactly K

These patterns are commonly used when counting subarrays or substrings that satisfy a given condition.

### 8.1 At Most K

At Most K means the required value must be less than or equal to `K`.

```text
K = 3

Allowed:     0, 1, 2, 3
Not Allowed: 4, 5, 6...
```

#### Example: Count Subarrays With At Most K Distinct Elements

```js
function atMostK(nums, k) {
    if (k < 0) return 0;

    let low = 0;
    let count = 0;
    let map = new Map();

    for (let high = 0; high < nums.length; high++) {

        map.set(
            nums[high],
            (map.get(nums[high]) || 0) + 1
        );

        while (map.size > k) {

            map.set(
                nums[low],
                map.get(nums[low]) - 1
            );

            if (map.get(nums[low]) === 0) {
                map.delete(nums[low]);
            }

            low++;
        }

        count += high - low + 1;
    }

    return count;
}
```

#### Why do we add `high - low + 1`?

Suppose the current valid window is `[1, 2, 3]`.

**Total valid subarrays ending at `high` = `3`**

All three subarrays end at the current `high` pointer.

Therefore, when every suffix of the current valid window is also valid:

$$
\text{count} \mathrel{+}= \text{high} - \text{low} + 1
$$

### 8.2 At Least K

At Least K means the required value must be greater than or equal to `K`.

```text
K = 3

Allowed:     3, 4, 5, 6...
Not Allowed: 0, 1, 2
```

For counting subarrays with an integer-valued property:

$$
\text{AtLeast}(K) = \text{Total} - \text{AtMost}(K - 1)
$$

The total number of non-empty subarrays in an array of size `N` is:

$$
\text{Total} = \frac{n(n + 1)}{2}
$$

```js
function atLeastK(nums, k) {
    let n = nums.length;
    let total = n * (n + 1) / 2;

    return total - atMostK(nums, k - 1);
}
```

### 8.3 Exactly K

Exactly K means the required value must be equal to `K`.

```text
K = 3

Allowed:     3
Not Allowed: 0, 1, 2, 4, 5...
```

Finding Exactly K directly can be difficult. Instead, we can calculate the difference between two At Most K results.

$$
\text{Exactly}(K) = \text{AtMost}(K) - \text{AtMost}(K - 1)
$$

```js
function exactlyK(nums, k) {
    return atMostK(nums, k) - atMostK(nums, k - 1);
}
```

**Applications:** Binary Subarrays With Sum, Count Number of Nice Subarrays, Subarrays with K Different Integers.

These formulas are valid for integer-valued properties, but the At Most K function must be implemented according to the specific problem.

---

## 9. Advanced Sliding Window — Monotonic Deque

Sometimes the question asks for the maximum or minimum element inside every window.

Simply maintaining a sum or frequency map is not enough to solve these problems efficiently.

A Monotonic Deque helps us maintain useful elements in increasing or decreasing order.

### Example: Sliding Window Maximum

```text
Input: [1, 3, -1, -3, 5, 3, 6, 7]
K = 3

Output: [3, 3, 5, 5, 6, 7]
```

**How does it work?**

- Store indices of useful elements in a deque.
- Remove indices that are outside the current window.
- Remove smaller elements from the back when finding the maximum.
- The front of the deque represents the maximum element.

**Time Complexity:** `O(n)`

**Space Complexity:** `O(k)`

This is an advanced combination of Sliding Window and the Deque data structure.

---

## 10. How to Identify Sliding Window Problems?

Whenever you read a question, look for the following keywords and requirements.

| Keywords or Requirements     | Pattern to Consider      |
| ---------------------------- | ------------------------ |
| K consecutive elements       | Fixed Window             |
| Subarray of size K           | Fixed Window             |
| Maximum sum of K elements    | Fixed Window             |
| Maximum average              | Fixed Window             |
| Longest substring            | Variable Window          |
| Shortest valid subarray      | Variable Window          |
| Without repeating characters | Window + Set             |
| At most K distinct elements  | Window + Hash Map        |
| Exactly K distinct elements  | At Most K difference     |
| Anagrams or permutations     | Fixed Window + Frequency |
| Minimum covering substring   | Shortest Valid Window    |
| Maximum in every window      | Window + Monotonic Deque |
| Count valid subarrays        | Counting Window          |

**Remember:** These keywords help identify possible approaches. Always verify whether expanding and shrinking the window can correctly solve the problem.

---

## 11. When Not to Use Sliding Window?

Sliding Window is not suitable for every subarray or substring problem.

For example, consider the following array:

```text
arr = [4, -3, 2]
```

Adding a negative number decreases the window sum. Removing a negative number increases the window sum.

This can break the standard variable-size sum-based Sliding Window logic.

| Situation                                                  | Better Approach              |
| ---------------------------------------------------------- | ---------------------------- |
| Subarray Sum Equals K with negative numbers                | Prefix Sum + Hash Map        |
| Maximum Subarray Sum of any size                           | Kadane's Algorithm           |
| Shortest Subarray With Sum At Least K containing negatives | Prefix Sum + Monotonic Deque |
| Non-continuous elements                                    | Other techniques             |
| Repeated arbitrary range sum queries                       | Prefix Sum                   |
| Longest Increasing Subsequence                             | DP / Binary Search           |

**Important:** Fixed-size sum windows work with negative numbers. The limitation mainly affects certain variable-size sum-based problems.

---

## 12. Time and Space Complexity

A common question is why Sliding Window takes `O(n)` time even when it contains a nested `while` loop.

```js
for (let high = 0; high < n; high++) {

    while (windowIsInvalid) {
        low++;
    }
}
```

The reason is that both pointers only move forward.

- The `high` pointer moves at most `N` times.
- The `low` pointer moves at most `N` times.

$$
O(n + n) = O(2n) = O(n)
$$

This is an example of **amortized analysis**.

| Pattern                          | Time Complexity | Auxiliary Space |
| -------------------------------- | --------------- | --------------- |
| Fixed Window Sum                 | O(n)            | O(1)            |
| Variable Window Sum              | O(n)            | O(1)            |
| Sliding Window + Set             | O(n) expected   | O(k)            |
| Sliding Window + Hash Map        | O(n) expected   | O(k)            |
| Sliding Window + Monotonic Deque | O(n)            | O(k)            |
| Exactly K using At Most          | O(n) expected   | O(k)            |

The linear time complexity assumes efficient window updates. `K` represents the maximum amount of information maintained inside the window.

---

## 13. Advantages and Disadvantages

| Advantages                    | Disadvantages                                  |
| ----------------------------- | ---------------------------------------------- |
| Reduces repeated calculations | Requires continuous ranges                     |
| Improves time complexity      | Not suitable for every problem                 |
| Often requires less memory    | Incorrect shrinking can miss answers           |
| Efficient for large inputs    | Some conditions require extra data structures  |
| Useful for arrays and strings | Negative numbers can affect certain approaches |

---

## 14. Common Mistakes

| Mistake                               | Correct Approach                                     |
| ------------------------------------- | ---------------------------------------------------- |
| Using `high - low` as window size     | Use `high - low + 1`                                 |
| Forgetting outgoing elements          | Remove elements before moving `low`                  |
| Using `if` for repeated shrinking     | Use `while`                                          |
| Forgetting zero-frequency keys        | Delete keys when frequency becomes zero              |
| Initializing maximum sum with `0`     | Use `-Infinity`                                      |
| Updating the answer at the wrong time | Understand the window condition                      |
| Ignoring negative numbers             | Verify whether the condition supports Sliding Window |
| Counting only one valid subarray      | Count all valid suffixes when applicable             |
| Ignoring invalid K values             | Validate the window size                             |

---

## 15. Frequently Asked Interview & Exam Questions

**Q1. What is Sliding Window?**  
Sliding Window is a problem-solving technique that maintains and processes a continuous range of elements efficiently.

**Q2. Why do we use Sliding Window?**  
To avoid repeated calculations and improve the performance of our solution.

**Q3. What are the types of Sliding Window?**  
Fixed Size Sliding Window and Variable Size Sliding Window.

**Q4. What is the formula for window size?**  
`high - low + 1`

**Q5. What is expanding a window?**  
Adding a new element to the window by moving the ending pointer forward.

**Q6. What is shrinking a window?**  
Removing the first element from the window by moving the starting pointer forward.

**Q7. What is the difference between Two Pointers and Sliding Window?**  
Two Pointers is a general traversal technique, while Sliding Window maintains a continuous range of elements.

**Q8. Why do we use a Hash Map in Sliding Window?**  
To maintain the frequency of elements inside the current window.

**Q9. Is Sliding Window always O(n)?**  
No. The complexity depends on pointer movements and the operations performed inside the window.

**Q10. Can Sliding Window work with negative numbers?**  
Yes. Fixed-size sum windows work with negative numbers, but certain variable-size sum-based approaches may fail.

**Q11. How do we calculate Exactly K?**  
By subtracting `AtMost(K - 1)` from `AtMost(K)`.

**Q12. Why do we use a Monotonic Deque?**  
To efficiently maintain the maximum or minimum element inside a moving window.

---

## 📝 Practice Roadmap

The following 15 essential problems cover the major Sliding Window patterns, from beginner to advanced level.

Each problem uses Sliding Window as a primary or efficient approach.

**Problem Breakdown (15 Essential Problems):** 2 Easy · 10 Medium · 3 Hard

| Difficulty | Platform      | Question                                                                                                                                               | Subtopic                    | Local question | Local solution | Status |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- | -------------- | -------------- | ------ |
| Easy       | GeeksforGeeks | [Max Sum Subarray of Size K](https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1)                                                   | Fixed Window                | N/A            | N/A            | To Do  |
| Easy       | LeetCode      | [643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)                                                           | Fixed Window Average        | N/A            | N/A            | To Do  |
| Medium     | LeetCode      | [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)                     | Variable Window + Set       | N/A            | N/A            | To Do  |
| Medium     | LeetCode      | [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)                                                             | Shortest Window             | N/A            | N/A            | To Do  |
| Medium     | LeetCode      | [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)                                                              | Longest Window              | N/A            | N/A            | To Do  |
| Medium     | LeetCode      | [904. Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)                                                                           | At Most K Distinct          | N/A            | N/A            | To Do  |
| Medium     | LeetCode      | [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)                                 | Frequency Tracking          | N/A            | N/A            | To Do  |
| Medium     | LeetCode      | [567. Permutation in String](https://leetcode.com/problems/permutation-in-string/)                                                                     | Fixed Window + Frequency    | N/A            | N/A            | To Do  |
| Medium     | LeetCode      | [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)                                                     | Fixed Window + Frequency    | N/A            | N/A            | To Do  |
| Medium     | LeetCode      | [713. Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)                                                       | Counting Valid Subarrays    | N/A            | N/A            | To Do  |
| Medium     | LeetCode      | [930. Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/)                                                             | Exactly K                   | N/A            | N/A            | To Do  |
| Medium     | LeetCode      | [1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/) | Variable Window + Deques | N/A | N/A | To Do |
| Hard       | LeetCode      | [992. Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)                                         | Exactly K Distinct          | N/A            | N/A            | To Do  |
| Hard       | LeetCode      | [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)                                                                | Shortest Window + Frequency | N/A            | N/A            | To Do  |
| Hard       | LeetCode      | [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)                                                                   | Monotonic Deque             | N/A            | N/A            | To Do  |

---

## 16. Quick Revision Cheat Sheet

| Concept                   | Formula / Logic                    |
| ------------------------- | ---------------------------------- |
| Window Size               | `high - low + 1`                   |
| Expand                    | Add `arr[high]`                    |
| Shrink                    | Remove `arr[low]`, then `low++`    |
| Fixed Window Sum          | Previous Sum − Outgoing + Incoming |
| Average                   | Window Sum / K                     |
| Longest Window            | Shrink while invalid               |
| Shortest Window           | Shrink while valid                 |
| At Most K                 | Value ≤ K                          |
| At Least K                | Value ≥ K                          |
| Exactly K                 | `AtMost(K) - AtMost(K - 1)`        |
| At Least K Count          | `Total - AtMost(K - 1)`            |
| Total Non-empty Subarrays | `n * (n + 1) / 2`                  |
| Count Valid Suffixes      | `high - low + 1`, when applicable  |

### Pattern Recognition

```text
Sliding Window
│
├── Fixed Size Sliding Window
│   ├── Maximum Sum
│   ├── Minimum Sum
│   ├── Maximum Average
│   ├── Anagrams
│   └── Permutations
│
├── Variable Size Sliding Window
│   ├── Longest Valid Window
│   ├── Shortest Valid Window
│   └── Counting Valid Windows
│
├── Advanced Counting
│   ├── At Most K
│   ├── At Least K
│   └── Exactly K
│
└── Supporting Data Structures
    ├── Set
    ├── Hash Map
    ├── Frequency Array
    └── Monotonic Deque
```

---

## 17. Additional Learning Resources

| Platform      | Resource                                                                                                                    |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| LeetCode      | [Sliding Window Problems](https://leetcode.com/tag/sliding-window/)                                                         |
| GeeksforGeeks | [Sliding Window Technique](https://www.geeksforgeeks.org/dsa/window-sliding-technique/)                                     |
| TakeUForward  | [Striver's DSA Practice Sheet](https://takeuforward.org/practice/dsa)                                                       |
| GitHub        | [Chapter 10: Two Pointers & Sliding Window](https://github.com/NexGenStudioDev/data-structures-and-algorithms/tree/master/Ch-10-Two-Pointers-and-Sliding-Window) |

---

## 18. Chapter Completion Checklist

- [ ] Understand Sliding Window and its purpose
- [ ] Understand subarrays and substrings
- [ ] Understand Fixed Size Sliding Window
- [ ] Understand Variable Size Sliding Window
- [ ] Understand expanding and shrinking
- [ ] Solve maximum and minimum sum problems
- [ ] Solve longest and shortest window problems
- [ ] Understand frequency tracking
- [ ] Understand counting valid subarrays
- [ ] Understand At Most, At Least and Exactly K
- [ ] Understand Monotonic Deque
- [ ] Calculate time and space complexity
- [ ] Complete all 15 practice problems

---

## 19. Conclusion

Sliding Window is an important problem-solving technique that helps us process continuous ranges efficiently.

The main idea is not simply to move two pointers, but to understand how to maintain the required information inside a window.

Before solving any Sliding Window problem, always ask yourself:

1. Is the required range continuous?
2. Is the window size fixed or variable?
3. What information should I maintain?
4. When should I expand the window?
5. When should I shrink the window?
6. When should I update the answer?

**Don't memorize the code. Understand the window, its condition and pointer movement.**

---

**End of Part 2 — Sliding Window Technique**

**Chapter 10: Two Pointers & Sliding Window — Completed.**

*Note: JavaScript is used throughout to maintain consistency with Part 1. The roadmap is intentionally limited to 15 problems, and external question links have not been live-verified.*
