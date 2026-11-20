# Quick Sort

Quick sort chooses a pivot, partitions values into groups, then sorts the groups. This folder's JavaScript example uses a simple Lomuto partition.

## Steps
1. Select a pivot (the example uses the last value).
2. Move values smaller than or equal to it to the left.
3. Put the pivot in its final position.
4. Repeat on the left and right ranges.

| Case | Time | Extra space |
|---|---:|---:|
| Best / average | `O(n log n)` | `O(log n)` expected recursion stack |
| Worst | `O(n²)` | `O(n)` recursion stack |

Quick sort is usually in-place, but its recursive calls still use stack space. A poor pivot on already ordered input can cause the worst case; randomized or median-based pivot choices help reduce that risk.

## Practice
After each partition, mark the pivot's final index and the two ranges that still need sorting. Compare a sorted array with a shuffled array.
