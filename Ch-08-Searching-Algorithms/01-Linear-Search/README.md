# Linear Search

Linear search checks items one at a time from the start of a collection. It works whether the values are sorted or unsorted.

## Steps

1. Start at index `0`.
2. Compare the current value with the target.
3. Return the index when they match.
4. If no value matches, return `-1`.

```js
function linearSearch(values, target) {
  for (let index = 0; index < values.length; index++) {
    if (values[index] === target) return index;
  }
  return -1;
}

linearSearch([8, 3, 6], 3); // 1
linearSearch([8, 3, 6], 5); // -1
```

For duplicate values, this version returns the first matching index. An empty array returns `-1`.

| Case | Time |
|---|---:|
| Target is first item | `O(1)` |
| Target is last or missing | `O(n)` |
| Extra space | `O(1)` |

Use linear search when the data is unsorted, small, or searched only once. For repeated searches, sorting may help, but account for the sorting cost and whether original indexes must be preserved.

## Python

```python
def linear_search(values, target):
    for index, value in enumerate(values):
        if value == target:
            return index
    return -1
```

See the [chapter overview](../README.md) for binary search and other searching methods.
