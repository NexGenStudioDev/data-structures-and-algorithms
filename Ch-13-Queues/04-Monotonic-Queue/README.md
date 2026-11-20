# Monotonic Queue

A monotonic deque keeps values (or indexes) in increasing or decreasing order. For the maximum in each sliding window, keep indexes with decreasing values: remove smaller values from the back because a newer larger value will outlast them; remove expired indexes from the front.

Each index enters and leaves at most once, so the scan takes `O(n)` time. The deque holds at most `k` live indexes for window size `k`, so conceptual extra space is `O(k)`. Code is provided in JavaScript and Python.

C++ example: [`code/index.cpp`](./code/index.cpp).
