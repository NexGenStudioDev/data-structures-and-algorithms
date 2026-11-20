# Opposite-Direction Two Pointers

Start one pointer at the beginning and one at the end. For pair-sum search, the sequence must be sorted: a small sum needs a larger left value, while a large sum needs a smaller right value.

This scans in `O(n)` time and `O(1)` extra space. If sorting first is required, include its cost and remember that sorting changes index positions. See code in both languages.
