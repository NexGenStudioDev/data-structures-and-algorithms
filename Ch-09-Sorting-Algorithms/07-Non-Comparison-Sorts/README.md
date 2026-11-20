# Non-Comparison Sorting

Comparison sorts order values by asking which pair is smaller. Counting Sort uses a known, limited integer range instead. For `n` values in `0..k`, count each value, then write the values back in order.

**Time:** `O(n + k)`. **Extra space:** `O(k)` for counts, plus output if returning a new array. It is useful when `k` is not much larger than `n`; a huge range can waste memory. The example accepts non-negative integers only.
