# Fixed-Size Sliding Window

For a window of size `k`, compute the first window once. Then remove the value leaving the left edge and add the value entering the right edge. This avoids re-summing all `k` values.

For `n` values, each window update is `O(1)`, so the full scan is `O(n)` time and `O(1)` extra space. Check `1 <= k <= n`, or define what an invalid window should return.
