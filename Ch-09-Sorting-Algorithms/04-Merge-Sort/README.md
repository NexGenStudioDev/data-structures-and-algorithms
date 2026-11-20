# Merge Sort

Merge sort repeatedly splits a list, sorts each half, then merges the sorted halves.

## Steps
1. Split the array into two halves until each part has at most one value.
2. Merge neighboring parts by repeatedly taking the smaller front value.
3. Continue until one sorted array remains.

The merge step is the key: it is linear in the number of values being combined. The algorithm is stable when equal values are taken from the left half first.

| Case | Time | Extra space |
|---|---:|---:|
| Best, average, worst | `O(n log n)` | `O(n)` |

Use merge sort when predictable running time and stability matter. Its extra memory can be a drawback for arrays. The JavaScript file in this folder is retained; `code/merge_sort.py` provides the Python version.

The C++ version is available at [`code/merge_sort.cpp`](code/merge_sort.cpp).

## Practice
Trace `[8, 3, 5, 1]` through the split and merge steps. At each merge, write the two sorted inputs and the merged output.
