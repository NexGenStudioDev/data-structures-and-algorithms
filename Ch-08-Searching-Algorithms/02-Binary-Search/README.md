# Binary Search

Binary search repeatedly halves a sorted search range. It runs in `O(log n)` time and uses `O(1)` extra space when written iteratively.

## Start here

- [Binary search idea and examples](doc/Binary%20Search.md)
- [Finding the middle value](doc/Finding%20the%20Middle%20Value%20in%20Binary%20Search.md)
- [JavaScript implementation](Code/binary_search.js)
- [Python implementation](Code/binary_search.py)
- [Square root walkthrough with diagrams and code](LeetCode/Sqrt%28x%29/Question.md)

## Interview checklist

1. Confirm the input is sorted, or that the condition being searched is monotonic.
2. Choose a clear interval convention. This chapter's base search uses inclusive `left` and `right` bounds.
3. Compute `mid = left + (right - left) // 2` in fixed-width integer languages.
4. Ensure every loop iteration shrinks the search range and test empty, one-element, and missing-target cases.
