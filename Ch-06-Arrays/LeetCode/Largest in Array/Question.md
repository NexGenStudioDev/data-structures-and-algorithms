# Find the Largest Element in an Array

**Question link:** [TakeUForward problem](https://takeuforward.org/practice/dsa/largest-element?category=fundamentals&source=strivers-a2z-dsa-sheet)

**Level:** Beginner · **Topic:** Arrays · **Language focus:** JavaScript

## Problem

Given a non-empty array of numbers, return its largest value. Do not sort the array.

## Examples

### Example 1

```text
Input:  [3, 1, 9, 2]
Output: 9
```

### Example 2

```text
Input:  [-10, -3, -5, -20]
Output: -3
```

### Example 3

```text
Input:  [7]
Output: 7
```

## Constraints

- The array contains at least one number.
- Values are finite JavaScript numbers.

## Think before coding

1. What should the current largest value be before reading the first item?
2. When should that value change?
3. How many times does the array need to be scanned?

**Expected complexity:** one scan takes $O(n)$ time and uses $O(1)$ extra space.
