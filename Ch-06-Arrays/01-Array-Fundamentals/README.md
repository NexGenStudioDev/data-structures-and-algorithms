# Array Fundamentals

An array stores an ordered sequence of values. In the usual data-structures model, an index lets us reach an element directly. JavaScript arrays are dynamic objects; the language does not promise a particular contiguous-memory layout.

## Start with indexes

For `values = [7, 4, 9]`, indexes are `0`, `1`, and `2`. `values[1]` is `4`. A loop should stop at `index < values.length`; the last valid index is `length - 1`.

## Common costs

| Operation | Typical DSA cost | Why |
|---|---:|---|
| Read or replace by index | `O(1)` | Go directly to the position |
| Search without order | `O(n)` | May inspect each value |
| Insert/delete in the middle | `O(n)` | Later values must shift |
| Add/remove at end | Usually amortized `O(1)` for a dynamic-array model | Occasional resizing can cost more |

`n` means the number of values. These are standard analysis models, not promises about a language engine's internal memory.

## Safe iteration checklist

1. Check whether the array may be empty.
2. Use the correct first and last indexes.
3. Avoid changing the array length while relying on a fixed bound.
4. Test one item and two items by hand.

Examples are in [`code/index.js`](./code/index.js) and [`code/index.py`](./code/index.py). Continue to [prefix sums and difference arrays](../02-Prefix-Sum-and-Difference-Array/README.md).

C++ example: [`code/index.cpp`](./code/index.cpp).
