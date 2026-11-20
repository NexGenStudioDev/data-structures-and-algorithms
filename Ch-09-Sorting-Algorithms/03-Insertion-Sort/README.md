# Insertion Sort

Keep a sorted prefix. Take the next value, shift larger prefix values one position right, then insert the value in the open space.

**Time:** best `O(n)` on already sorted input; average/worst `O(n²)`. **Extra space:** `O(1)` in-place. It is stable when equal items are not shifted past each other and works well for small or nearly sorted arrays.
