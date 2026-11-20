# Two Pointers: First Patterns

Two pointers are indexes that move through a sequence. The pattern works when each move has a reason that cannot skip a valid answer.

## Opposite directions

On a sorted array, begin at both ends. For a target pair sum, if the sum is too small, move the left pointer up; if too large, move the right pointer down. Sorting is a precondition for that decision rule.

## Same direction

Use a slow pointer for the next place to write and a fast pointer to inspect values. This is common for in-place filtering and removing duplicates from sorted arrays.

## Checklist

- Is the input sorted, or does another invariant justify each move?
- Are pointers allowed to meet or cross?
- Do you need original indexes after sorting?
- Test empty, one-item, duplicates, and no-answer cases.

See [`code/index.js`](./code/index.js) and [`code/index.py`](./code/index.py). The LeetCode folder has a [remove duplicates](../LeetCode/Remove%20Duplicates%20from%20Sorted%20Array/question.md) exercise.

C++ example: [`code/index.cpp`](./code/index.cpp).
