# First `n` Fibonacci Numbers Using Recursion

## Idea

Keep the next two Fibonacci values. Each call adds the current value to the answer, then calls itself with the next pair. The stopping case is when the answer already contains `n` values.

This approach is linear. The familiar definition `fib(n) = fib(n - 1) + fib(n - 2)` repeats the same work many times when used without memoization; the pair-based version avoids that repeated work.

## JavaScript

```javascript
function firstNFibonacci(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("n must be a non-negative integer");
  }

  function build(remaining, current, next, result) {
    if (remaining === 0) return result;

    result.push(current);
    return build(remaining - 1, next, current + next, result);
  }

  return build(n, 0, 1, []);
}

console.log(firstNFibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
```

The `result` array is shared by the calls. Each call appends one value before passing that same array to the next call.

## Dry run for `n = 5`

| Call | Value appended | Next pair | Values so far |
|---|---:|---|---|
| `build(5, 0, 1, [])` | 0 | `(1, 1)` | `[0]` |
| `build(4, 1, 1, result)` | 1 | `(1, 2)` | `[0, 1]` |
| `build(3, 1, 2, result)` | 1 | `(2, 3)` | `[0, 1, 1]` |
| `build(2, 2, 3, result)` | 2 | `(3, 5)` | `[0, 1, 1, 2]` |
| `build(1, 3, 5, result)` | 3 | `(5, 8)` | `[0, 1, 1, 2, 3]` |
| `build(0, 5, 8, result)` | — | Base case; return array | `[0, 1, 1, 2, 3]` |

## Complexity

- **Time:** `O(n)` calls, with constant work in each call.
- **Output space:** `O(n)` for the returned array.
- **Auxiliary call stack:** `O(n)` because each call waits for the next call to return.

For very large `n`, recursion may exceed JavaScript's call-stack limit. An iterative loop avoids that stack growth; this recursive version is for learning the call-and-return pattern.
