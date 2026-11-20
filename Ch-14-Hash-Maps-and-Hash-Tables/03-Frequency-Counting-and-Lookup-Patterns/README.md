# Frequency Maps and Lookup Patterns

A frequency map counts how often each value appears. A lookup map also stores information that helps answer a later question, such as whether a complement has already appeared.

- Count values with a map/dictionary.
- For two-sum, check `target - value` before storing the current value if the same item cannot be reused.
- For anagrams, compare frequency counts or canonical keys.

For `n` values, one pass is average `O(n)` map operations; key hashing and worst-case collisions depend on the keys and implementation. See `code/` examples.
