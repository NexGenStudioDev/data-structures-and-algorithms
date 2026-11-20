# Cyclic Sort Pattern

Cyclic placement is useful when every value belongs to a known index range, such as distinct integers `1..n`. Move each value toward its matching index until the current slot is correct.

For the `1..n` convention, value `x` belongs at index `x - 1`. With valid range and careful duplicate handling, the work is `O(n)` and extra space is `O(1)`. Do not use this pattern for arbitrary values or assume duplicates are harmless.
