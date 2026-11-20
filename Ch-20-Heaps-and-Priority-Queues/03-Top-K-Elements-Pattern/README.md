# Top K Elements

A heap can keep only the best `k` items seen so far. To find the `k` largest values, keep a min-heap of size `k`: if it grows past `k`, remove its smallest value. The heap root is then the smallest of the retained large values.

This takes `O(n log k)` time and `O(k)` extra space. For `k = 0`, return an empty result; if `k > n`, define whether to return all values or reject the input.
