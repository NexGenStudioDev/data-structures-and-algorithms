# Same-Direction Two Pointers

Both pointers move left to right. A fast pointer reads each input value; a slow pointer marks where the next kept value should go. This is useful for in-place filtering and compacting sorted data.

When `k` items remain, the useful result is usually the first `k` array positions. Values after that prefix may be unspecified. Time is `O(n)`; extra space is `O(1)` when modifying the input.
