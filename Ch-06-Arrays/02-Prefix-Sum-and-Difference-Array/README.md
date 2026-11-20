# Prefix Sums and Difference Arrays

Both techniques save repeated work on array ranges. A prefix sum answers range-sum questions; a difference array applies many range additions before one final pass.

## Prefix sum

Use a zero-prefixed array: `prefix[0] = 0` and `prefix[i + 1] = prefix[i] + values[i]`. Then the inclusive sum from `left` through `right` is `prefix[right + 1] - prefix[left]`. Building takes `O(n)`; each valid range-sum query takes `O(1)`.

## Difference array

For an inclusive update `[left, right] += value`, add `value` at `diff[left]` and subtract it at `diff[right + 1]`. Use an `n + 1` difference array, then take a running sum once. This supports `q` range updates in `O(n + q)` total work.

Check `0 <= left <= right < n`. If updates can be empty or out of range, define that behavior first. Examples: [`JavaScript`](./code/index.js) · [`Python`](./code/index.py).
