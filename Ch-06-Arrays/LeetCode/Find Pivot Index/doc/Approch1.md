# 724. Find Pivot Index — JavaScript | Prefix Sum | O(n) Time & O(1) Space

**Difficulty:** Easy  
**Topics:** Array, Prefix Sum  
**Approach:** Running Sum + Total Sum

---

## 1. Intuition

We are given an array of integers `nums`, and we need to find the **leftmost pivot index**.

A pivot index is an index where the sum of all elements strictly to its left is equal to the sum of all elements strictly to its right.

In simple words:

Imagine that we are standing at a particular index in the array.

We need to answer three questions:

1. What is the sum of all elements before the current index?
2. What is the sum of all elements after the current index?
3. Are both sums equal?

If both sums are equal, the current index is a valid pivot index.

**Important:** The element at the current index is not included in either sum.

### Understanding the problem with an example

Consider:

```text
nums = [1, 7, 3, 6, 5, 6]
```

Suppose we are standing at index `3`, where the element is `6`.

```text
Index:        0    1    2    3    4    5

Elements:    [1,   7,   3,   6,   5,   6]
              \_______/    ↑    \______/
                  |        |        |
               Left      Current   Right
               Side      Element   Side
```

The left side contains:

```text
1 + 7 + 3 = 11
```

The right side contains:

```text
5 + 6 = 11
```

Both sums are equal.

Therefore, index `3` is a pivot index.

Notice that we did not include the current element `6` in either sum.

### My Initial Thought

My first thought was to visit every index and calculate the sum of all elements on its left and right.

For example, if we are at index `2`, we calculate:

```text
Left Sum  = Sum of elements before index 2
Right Sum = Sum of elements after index 2
```

Then we compare them.

If they are not equal, we move to the next index and repeat the process.

This approach works, but there is a problem.

If we calculate the left and right sums from scratch for every index, we repeatedly visit the same elements.

This can result in **O(n²) time complexity**.

So I started thinking:

**Can we calculate the right sum without traversing the right side of the array every time?**

The answer is yes.

We can do this using the **total sum of the array and a running left sum**.

---

## 2. The Main Observation — Can We Find the Right Sum Using the Total Sum and Left Sum?

This is the most important concept in the entire problem.

Before writing code, we need to understand one mathematical relationship.

Consider the array:

```text
nums = [1, 7, 3, 6, 5, 6]
```

First, calculate the total sum.

```text
Total Sum = 1 + 7 + 3 + 6 + 5 + 6

Total Sum = 28
```

Now suppose we are standing at index `2`.

The current element is `3`.

We can divide the array into three parts:

```text
[1, 7]     [3]     [6, 5, 6]
  Left    Current     Right
```

Let's calculate each part.

```text
Left Sum        = 1 + 7 = 8

Current Element = 3

Right Sum       = 6 + 5 + 6 = 17
```

Now observe:

```text
Total Sum = Left Sum + Current Element + Right Sum

28 = 8 + 3 + 17
```

This means the total sum is made up of three parts.

If we already know the total sum, left sum, and current element, we can find the remaining part.

That remaining part is the right sum.

### Deriving the Formula Step by Step

We know:

```text
Total Sum = Left Sum + Current Element + Right Sum
```

We want to calculate the right sum.

**Step 1: Start with the total sum**

```text
Total Sum = 28
```

**Step 2: Remove the left sum**

```text
28 - 8 = 20
```

What does `20` represent?

It represents the sum of the current element and all elements on its right.

```text
[3, 6, 5, 6]

3 + 6 + 5 + 6 = 20
```

But this is not the right sum yet!

Why?

Because the current element `3` is still included.

**Step 3: Remove the current element**

```text
20 - 3 = 17
```

Now we have:

```text
Right Sum = 17
```

And this is exactly:

```text
6 + 5 + 6 = 17
```

Therefore, we have discovered the formula:

```text
Right Sum = Total Sum - Left Sum - Current Element
```

### Why Do We Subtract the Current Element?

This is a very important question.

Suppose we calculate:

```text
Right Sum = Total Sum - Left Sum
```

Using our example:

```text
28 - 8 = 20
```

But the actual right sum is `17`, not `20`.

The reason is that `20` still includes the current element `3`.

The pivot index element must not belong to either side.

Therefore, we must subtract it.

```text
Right Sum = 28 - 8 - 3

Right Sum = 17
```

### Final Mathematical Formula

```text
Total = Left + Current + Right

Right = Total - Left - Current
```

In JavaScript:

```javascript
let rightSum = sum - leftSum - nums[i];
```

Now we can calculate the right sum in **O(1) time** at every index.

We no longer need another loop to calculate the right side.

---

## 3. How Can We Find the Left Sum Without Recalculating It?

We have understood how to calculate the right sum.

But another question remains:

**How do we know the left sum at every index?**

We could use a loop to calculate it again and again.

However, that would perform unnecessary work.

Instead, we maintain a variable called `leftSum`.

This variable stores the sum of all elements strictly before the current index.

This technique is called a **running sum**.

### Understanding Running Sum

Consider:

```text
nums = [1, 7, 3, 6, 5, 6]
```

Initially:

```javascript
let leftSum = 0;
```

Why `0`?

Because when we stand at index `0`, there are no elements on the left.

Now imagine moving through the array from left to right.

**At index 0**

```text
Current Element = 1

Left Elements = []

Left Sum = 0
```

After checking index `0`, we move to index `1`.

The element `1` now becomes part of the left side.

So:

```text
leftSum = 0 + 1 = 1
```

**At index 1**

```text
Current Element = 7

Left Elements = [1]

Left Sum = 1
```

After checking index `1`, we move to index `2`.

Now `7` also becomes part of the left side.

```text
leftSum = 1 + 7 = 8
```

**At index 2**

```text
Current Element = 3

Left Elements = [1, 7]

Left Sum = 8
```

After checking index `2`:

```text
leftSum = 8 + 3 = 11
```

**At index 3**

```text
Current Element = 6

Left Elements = [1, 7, 3]

Left Sum = 11
```

We can see that the left sum is updated as we move forward.

We never need to calculate it again from the beginning.

### Running Left Sum Table

| Index | Current Element | Elements on Left | Left Sum |
|---|---|---|---|
| 0 | 1 | None | 0 |
| 1 | 7 | 1 | 1 |
| 2 | 3 | 1, 7 | 8 |
| 3 | 6 | 1, 7, 3 | 11 |
| 4 | 5 | 1, 7, 3, 6 | 17 |
| 5 | 6 | 1, 7, 3, 6, 5 | 22 |

This table shows the left sum that would be available at each index if we continued traversing the entire array.

In our actual solution, we return at index `3`, so indices `4` and `5` are not checked.

---

## 4. Approach — Step-by-Step Explanation

We can now combine both ideas:

- Use the total sum to calculate the right sum.
- Use a running left sum to avoid recalculating the left side.

We need only two sequential loops.

### Step 1: Initialize Two Variables

```javascript
let sum = 0;
let leftSum = 0;
```

**`sum`**

Stores the sum of every element in the array.

**`leftSum`**

Stores the sum of all elements strictly to the left of the current index.

Initially, both are `0`.

### Step 2: Calculate the Total Sum

```javascript
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
```

We visit each element and add its value to `sum`.

For example:

```text
nums = [1, 7, 3, 6, 5, 6]
```

| Iteration | nums[i] | sum Before | sum After |
|---|---|---|---|
| 0 | 1 | 0 | 1 |
| 1 | 7 | 1 | 8 |
| 2 | 3 | 8 | 11 |
| 3 | 6 | 11 | 17 |
| 4 | 5 | 17 | 22 |
| 5 | 6 | 22 | 28 |

After the loop:

```text
sum = 28
```

We now know the total sum of the array.

### Step 3: Start Traversing the Array Again

```javascript
for (let i = 0; i < nums.length; i++) {

}
```

This loop checks each index as a possible pivot.

We start from index `0` because the problem asks for the **leftmost pivot index**.

### Step 4: Calculate the Right Sum

Inside the loop:

```javascript
let rightSum = sum - leftSum - nums[i];
```

At every index, we already know:

- `sum`: Total sum of the array.
- `leftSum`: Sum of all previous elements.
- `nums[i]`: Current element.

Using these three values, we calculate the right sum.

We do not need another loop.

### Step 5: Compare Left Sum and Right Sum

```javascript
if (leftSum === rightSum) {
    return i;
}
```

If the left and right sums are equal, we have found a valid pivot.

We immediately return `i`.

**Why return `i` instead of `nums[i]`?**

Because the problem asks for the pivot **index**, not the pivot element.

For example:

```text
nums = [1, 7, 3, 6, 5, 6]

Pivot Element = 6

Pivot Index = 3
```

The answer is `3`, not `6`.

### Step 6: Update the Left Sum

```javascript
leftSum += nums[i];
```

If the current index is not a pivot, we add its value to `leftSum`.

This prepares the left sum for the next index.

### Why Must We Update leftSum After the Comparison?

Suppose we are at index `2`:

```text
nums = [1, 7, 3, 6, 5, 6]
```

Current element:

```text
nums[2] = 3
```

The correct left sum is:

```text
1 + 7 = 8
```

If we update `leftSum` before checking:

```javascript
leftSum += nums[i];
```

Then:

```text
leftSum = 8 + 3 = 11
```

This would incorrectly include the current element in the left sum.

But the problem clearly says that the current element must be excluded.

Therefore, the correct order is:

```javascript
// First: Calculate right sum
let rightSum = sum - leftSum - nums[i];

// Second: Compare both sums
if (leftSum === rightSum) {
    return i;
}

// Third: Update left sum
leftSum += nums[i];
```

**Remember: Check first, update afterward.**

### Step 7: Return -1

```javascript
return -1;
```

If the loop finishes without finding any valid pivot index, return `-1`.

---

## 5. Complete Dry Run

### Example 1

**Input:**

```javascript
nums = [1, 7, 3, 6, 5, 6]
```

**Expected Output:**

```text
3
```

### Phase 1: Calculate Total Sum

```text
sum = 0

sum = 0 + 1 = 1
sum = 1 + 7 = 8
sum = 8 + 3 = 11
sum = 11 + 6 = 17
sum = 17 + 5 = 22
sum = 22 + 6 = 28
```

After the first loop:

```text
sum = 28
leftSum = 0
```

### Phase 2: Find Pivot Index

| Index | Current | Left Sum | Right Sum | Comparison | Action |
|---|---|---|---|---|---|
| 0 | 1 | 0 | 28 − 0 − 1 = 27 | 0 ≠ 27 | Update leftSum to 1 |
| 1 | 7 | 1 | 28 − 1 − 7 = 20 | 1 ≠ 20 | Update leftSum to 8 |
| 2 | 3 | 8 | 28 − 8 − 3 = 17 | 8 ≠ 17 | Update leftSum to 11 |
| 3 | 6 | 11 | 28 − 11 − 6 = 11 | 11 = 11 | Return 3 |

### Iteration 1 — Index 0

We are standing at the first element.

```text
Current Index   = 0
Current Element = 1

Total Sum = 28
Left Sum  = 0
```

Calculate right sum:

```text
Right Sum = 28 - 0 - 1

Right Sum = 27
```

Compare:

```text
0 === 27

false
```

This is not the pivot.

Update:

```text
leftSum = 0 + 1 = 1
```

Move to the next index.

### Iteration 2 — Index 1

```text
Current Index   = 1
Current Element = 7

Total Sum = 28
Left Sum  = 1
```

Calculate right sum:

```text
Right Sum = 28 - 1 - 7

Right Sum = 20
```

Compare:

```text
1 === 20

false
```

Not a pivot.

Update:

```text
leftSum = 1 + 7 = 8
```

### Iteration 3 — Index 2

```text
Current Index   = 2
Current Element = 3

Total Sum = 28
Left Sum  = 8
```

Calculate right sum:

```text
Right Sum = 28 - 8 - 3

Right Sum = 17
```

Compare:

```text
8 === 17

false
```

Not a pivot.

Update:

```text
leftSum = 8 + 3 = 11
```

### Iteration 4 — Index 3

```text
Current Index   = 3
Current Element = 6

Total Sum = 28
Left Sum  = 11
```

Calculate right sum:

```text
Right Sum = 28 - 11 - 6

Right Sum = 11
```

Compare:

```text
11 === 11

true
```

Both sums are equal.

Therefore:

```javascript
return 3;
```

The function stops immediately.

**Final Output: `3`**

---

## 6. Understanding Important Edge Cases

### Case 1: Pivot at Index 0

```text
nums = [2, 1, -1]
```

Total sum:

```text
2 + 1 + (-1) = 2
```

At index `0`:

```text
Left Sum = 0

Right Sum = 2 - 0 - 2 = 0
```

Both sums are equal.

Therefore:

```text
Output = 0
```

**Why is leftSum zero?**

Because no element exists before index `0`.

### Case 2: Pivot at the Last Index

```text
nums = [-1, 1, 0]
```

At index `2`:

```text
Left Sum = -1 + 1 = 0

Right Sum = 0
```

Both sums are equal.

Therefore:

```text
Output = 2
```

The right sum is `0` because there are no elements after the last index.

### Case 3: Single Element

```text
nums = [5]
```

At index `0`:

```text
Left Sum = 0
Right Sum = 0
```

Therefore:

```text
Output = 0
```

A single-element array always has pivot index `0`.

### Case 4: Multiple Pivot Indices

```text
nums = [0, 0, 0, 0]
```

Every index satisfies the condition.

However, the problem asks for the leftmost pivot index.

Therefore:

```text
Output = 0
```

### Case 5: No Pivot Index

```text
nums = [1, 2, 3]
```

There is no index where the left and right sums are equal.

Therefore:

```text
Output = -1
```

---

## 7. Complexity Analysis

### Time Complexity: O(n)

Let `n` represent the number of elements in the array.

We use two separate loops.

**First Loop: Calculate Total Sum**

```javascript
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
```

This loop visits every element exactly once.

Time complexity:

```text
O(n)
```

**Second Loop: Find Pivot Index**

```javascript
for (let i = 0; i < nums.length; i++) {
    let rightSum = sum - leftSum - nums[i];

    if (leftSum === rightSum) {
        return i;
    }

    leftSum += nums[i];
}
```

In the worst case, this loop also visits every element once.

Each iteration performs a constant number of operations.

Time complexity:

```text
O(n)
```

### Why Is the Overall Complexity O(n) When We Have Two Loops?

This is an important concept.

The loops are **sequential**, not nested.

Suppose:

```text
n = 5
```

First loop:

```text
5 iterations
```

Second loop:

```text
At most 5 iterations
```

Total:

```text
5 + 5 = 10 iterations
```

Now suppose:

```text
n = 100
```

First loop:

```text
100 iterations
```

Second loop:

```text
At most 100 iterations
```

Total:

```text
100 + 100 = 200 iterations
```

In general:

```text
Total Work = n + n

Total Work = 2n
```

Big O notation ignores constant multipliers.

Therefore:

```text
O(n) + O(n) = O(2n) = O(n)
```

**Final Time Complexity: O(n)**

### Why Not O(n²)?

We would generally get O(n²) if one full-length loop were nested inside another.

For example:

```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // Some operation
    }
}
```

Here:

```text
n × n = n²
```

But our loops run one after another.

```javascript
for (let i = 0; i < n; i++) {
    // First loop
}

for (let i = 0; i < n; i++) {
    // Second loop
}
```

Here:

```text
n + n = 2n
```

Therefore, the complexity remains O(n).

### Space Complexity: O(1)

We only use a few variables:

```javascript
let sum = 0;
let leftSum = 0;
let rightSum;
```

And the loop counter `i`.

We do not create an additional array, hash map, stack, or other data structure.

Even if the input array contains 10 elements or 10,000 elements, the number of extra variables remains the same.

Therefore:

**Final Space Complexity: O(1)**

---

## 8. JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sum = 0;
    let leftSum = 0;

    // Step 1: Calculate total sum
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    // Step 2: Check each index
    for (let i = 0; i < nums.length; i++) {

        // Calculate right sum
        let rightSum = sum - leftSum - nums[i];

        // Check pivot condition
        if (leftSum === rightSum) {
            return i;
        }

        // Update left sum for next index
        leftSum += nums[i];
    }

    // No pivot index found
    return -1;
};
```

---

## 9. Frequently Asked Questions

### Q1. Why do we calculate the total sum first?

Because the total sum allows us to calculate the right sum without traversing the right side repeatedly.

We use:

```text
Right Sum = Total Sum - Left Sum - Current Element
```

### Q2. Why is leftSum initialized to 0?

Because at index `0`, there are no elements to the left.

The sum of an empty side is considered `0`.

### Q3. Why do we subtract nums[i]?

Because the current element is not included in either the left sum or the right sum.

If we do not subtract it, the calculated right sum will incorrectly include the current element.

### Q4. Why do we update leftSum after comparison?

Because the current element must not be part of the left sum while checking its own index.

After moving to the next index, the previous element becomes part of the left side.

### Q5. Why do we return i instead of nums[i]?

Because the problem asks for the index, not the value of the element.

### Q6. Why do we traverse from left to right?

Because the problem requires the leftmost valid pivot index.

By checking indices in increasing order, the first valid pivot we find is the required answer.

### Q7. Why do we return -1?

Because `-1` indicates that no index satisfies the pivot condition.

### Q8. Is this a prefix sum problem?

Yes.

We use the idea of prefix sums, but instead of storing prefix sums in an additional array, we maintain a running `leftSum`.

This allows us to use O(1) extra space.

### Q9. Can the pivot index be at the beginning or end?

Yes.

At the beginning, the left sum is `0`.

At the end, the right sum is `0`.

### Q10. Does the array need to be sorted?

No.

The array can contain positive numbers, negative numbers, zeros, and duplicate values in any order.

---

## 10. Common Mistakes to Avoid

**Mistake 1: Including the current element in the left sum**

Incorrect:

```javascript
leftSum += nums[i];

let rightSum = sum - leftSum - nums[i];
```

This updates the left sum too early.

The current element is incorrectly included in the left side.

**Mistake 2: Forgetting to subtract the current element**

Incorrect:

```javascript
let rightSum = sum - leftSum;
```

This includes the current element in the calculated right sum.

Correct:

```javascript
let rightSum = sum - leftSum - nums[i];
```

**Mistake 3: Returning the element instead of the index**

Incorrect:

```javascript
return nums[i];
```

Correct:

```javascript
return i;
```

**Mistake 4: Starting from the middle**

A pivot index does not necessarily exist in the middle.

It can occur at any position, including index `0` or the last index.

**Mistake 5: Recalculating the right sum with another loop**

Repeatedly traversing the right side increases the time complexity unnecessarily.

We can calculate the right sum directly using the total sum and running left sum.

---

## 11. Key Takeaways

1. A pivot index is a position where the sum of all elements strictly to the left equals the sum of all elements strictly to the right.
2. The current element is excluded from both sums.
3. The total sum is the combination of the left sum, current element, and right sum.
4. We can calculate the right sum using the total sum, left sum, and current element.
5. A running left sum avoids repeatedly calculating the sum of previous elements.
6. We must compare the left and right sums before updating `leftSum`.
7. Traversing from left to right ensures that we return the leftmost valid pivot.
8. Two sequential loops result in O(n) time complexity, not O(n²).
9. We only use a fixed number of variables, resulting in O(1) auxiliary space.

### Final Formula to Remember

```text
Total Sum = Left Sum + Current Element + Right Sum

Right Sum = Total Sum - Left Sum - Current Element
```

### Final Algorithm Summary

```text
1. Calculate the total sum of the array.

2. Initialize leftSum = 0.

3. Start traversing from index 0.

4. At each index:
   - Calculate rightSum.
   - Compare leftSum and rightSum.
   - If equal, return the current index.
   - Otherwise, add the current element to leftSum.

5. If no pivot is found, return -1.
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)  
**Pattern:** Prefix Sum / Running Sum  
**Problem:** [LeetCode 724 — Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)

**Main Learning:** When a problem asks us to compare the sum of elements on the left and right of an index, we should check whether the total sum and a running sum can help us avoid repeated calculations.