# Variable-Size Sliding Window

Grow the right edge and shrink the left edge while a condition is invalid. The key requirement is that shrinking can safely discard earlier starts.

For finding the shortest subarray with sum at least `target`, the common positive-number approach depends on values being non-negative. Negative values break the monotonic reasoning; use a different algorithm unless the problem gives another useful property.

The usual scan is `O(n)` because each pointer moves forward at most `n` times.
