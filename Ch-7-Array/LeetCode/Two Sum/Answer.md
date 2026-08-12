# 1. Two Sum

**Difficulty:** Easy

---

# Intuition

The problem asks us to find **two distinct numbers** in the array whose sum equals the given `target`.

Instead of returning the numbers themselves, we must return **their indices**.

For example,

```text
nums = [2,7,11,15]

target = 9
```

Since

```text
2 + 7 = 9
```

their indices are

```text
[0,1]
```

There are multiple ways to solve this problem.

1. Brute Force (Nested Loops)
2. Hash Map (Optimal)
3. Two Pointer (Works only after sorting, not suitable here because indices change)

Let's understand each approach.

---

# Approach 1 — Brute Force (Nested Loops)

## Idea

Check every possible pair.

For every element,

compare it with every remaining element.

If their sum equals the target,

return their indices.

---

## Algorithm

```text
for every i

    for every j > i

        if nums[i] + nums[j] == target

            return [i,j]
```

---

## Dry Run

```text
nums = [2,7,11,15]

target = 9
```

### i = 0

```text
2
```

Compare with

```text
7

2 + 7 = 9 ✔
```

Return

```text
[0,1]
```

---

## Visualization

```text
2   7   11   15
↑   ↑

2 + 7 = 9 ✔
```

---

## Correctness

Every possible pair is checked exactly once.

If a valid pair exists,

it will definitely be found.

---

## Time Complexity

There are

```text
n(n-1)/2
```

pairs.

So

```text
O(n²)
```

---

## Space Complexity

```text
O(1)
```

---

## JavaScript Code

```javascript
var twoSum = function(nums, target) {

    if (nums.length < 2)
        return [];

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {

                return [i, j];

            }

        }

    }

    return [];
};
```

---

# Approach 2 — Hash Map (Optimal)

## Intuition

Instead of checking every pair,

we can remember every number we've already visited.

For every number,

calculate

```text
remaining = target - currentNumber
```

If the remaining number has already been seen,

we've found the answer.

Otherwise,

store the current number in the hash map.

---

## Example

```text
nums = [2,7,11,15]

target = 9
```

Start with

```text
Map = {}
```

---

### Number = 2

Need

```text
9 - 2 = 7
```

7 doesn't exist.

Store

```text
2 → index 0
```

Map

```text
{
2 : 0
}
```

---

### Number = 7

Need

```text
9 - 7 = 2
```

2 already exists.

Return

```text
[0,1]
```

Done.

---

# Algorithm

```text
Create empty HashMap

For every number

    complement = target - current

    If complement exists

        return indices

    Store current number
```

---

# Dry Run

```text
nums = [3,2,4]

target = 6
```

Initially

```text
Map = {}
```

---

Current

```text
3
```

Need

```text
3
```

Not found.

Store

```text
3 → 0
```

---

Current

```text
2
```

Need

```text
4
```

Not found.

Store

```text
2 → 1
```

---

Current

```text
4
```

Need

```text
2
```

Found.

Return

```text
[1,2]
```

---

# Visualization

```text
nums

3   2   4

Map

{}

↓

{3:0}

↓

{3:0,2:1}

↓

Need = 2

Found ✔
```

---

# Correctness

The HashMap always stores every previously visited number.

When we reach the second number of the required pair,

its complement has already been stored.

Therefore,

the correct indices are returned immediately.

---

## Time Complexity

Each element is visited once.

HashMap lookup is

```text
O(1)
```

Average.

Therefore

```text
O(n)
```

---

## Space Complexity

HashMap stores at most

```text
n
```

elements.

```text
O(n)
```

---

## JavaScript Code

```javascript
var twoSum = function(nums, target) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {

        let complement = target - nums[i];

        if (map.has(complement)) {

            return [map.get(complement), i];

        }

        map.set(nums[i], i);

    }

    return [];
};
```

---

# Approach 3 — Two Pointer (After Sorting)

## Intuition

If the array were sorted,

we could use two pointers.

- Left pointer starts from beginning.
- Right pointer starts from end.

Compare the sum.

If

```text
sum > target
```

Move right pointer.

If

```text
sum < target
```

Move left pointer.

Otherwise,

answer found.

---

## Example

```text
Sorted

[2,7,11,15]
```

Pointers

```text
L         R

2 7 11 15

2 + 15 = 17

Too large

↓

Move R

L      R

2 7 11

13

↓

Move R

L   R

2 7

9 ✔
```

---

## Why This Doesn't Work Directly?

The original array isn't sorted.

Sorting changes indices.

Example

```text
Original

[3,2,4]
```

Sorted

```text
[2,3,4]
```

Original indices are lost.

To use this approach,

we must store original indices before sorting.

---

## Time Complexity

Sorting

```text
O(n log n)
```

Searching

```text
O(n)
```

Overall

```text
O(n log n)
```

---

## Space Complexity

```text
O(n)
```

---

## JavaScript Code

```javascript
var twoSum = function(nums, target) {

    const arr = nums.map((value, index) => ({
        value,
        index
    }));

    arr.sort((a, b) => a.value - b.value);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        let sum = arr[left].value + arr[right].value;

        if (sum === target) {

            return [arr[left].index, arr[right].index];

        }

        if (sum < target) {

            left++;

        } else {

            right--;

        }

    }

    return [];
};
```

---

# Comparison of All Approaches

| Approach | Time | Space | Recommended |
|-----------|------|--------|-------------|
| Brute Force | **O(n²)** | **O(1)** | ⭐ Beginner |
| Hash Map | **O(n)** | **O(n)** | ✅ Best |
| Two Pointer (Sorting) | **O(n log n)** | **O(n)** | ❌ Not preferred |

---

# Dry Run (Brute Force)

```text
nums = [3,3]

target = 6
```

Check

```text
3 + 3 = 6 ✔
```

Return

```text
[0,1]
```

---

# Edge Cases

### Case 1

```text
nums = [2,7,11,15]

target = 9

Output

[0,1]
```

---

### Case 2

```text
nums = [3,2,4]

target = 6

Output

[1,2]
```

---

### Case 3

```text
nums = [3,3]

target = 6

Output

[0,1]
```

---

### Case 4

```text
nums = [1,5,8]

target = 20

Output

[]
```

---

# Interview Discussion

### Why is Brute Force slow?

Because every element is compared with every other element.

```text
O(n²)
```

---

### Why is Hash Map faster?

Instead of searching the whole array,

we perform constant-time lookups using a hash table.

```text
O(1)
```

lookup

↓

Overall

```text
O(n)
```

---

### Which solution should you use?

✅ **Hash Map**

Reason:

- Fastest
- Single traversal
- Most commonly expected in coding interviews
- LeetCode's optimal solution

---

# Complexity Summary

| Approach | Time Complexity | Space Complexity |
|----------|-----------------|------------------|
| Brute Force | **O(n²)** | **O(1)** |
| Hash Map | **O(n)** | **O(n)** |
| Two Pointer (Sorted) | **O(n log n)** | **O(n)** |

---

# Final Recommendation

- ✅ Learn the **Brute Force** approach first to understand the problem.
- ✅ Master the **Hash Map** approach, as it is the optimal and interview-preferred solution.
- ⚠️ Understand the **Two Pointer** technique conceptually, but remember it cannot be applied directly because sorting changes the original indices.

