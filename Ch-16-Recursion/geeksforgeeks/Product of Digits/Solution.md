# Solution: Product of Digits Using Recursion

## Idea

Take the last digit with `% 10`, then recursively solve the smaller number after removing that digit with `Math.floor(n / 10)`. Multiply the last digit by the result for the remaining digits.

The base case is a single digit. This also makes `0` return `0`, as required by the examples.

```js
function productOfDigits(n) {
  if (!Number.isSafeInteger(n) || n < 0) {
    throw new RangeError("n must be a non-negative safe integer");
  }
  if (n < 10) return n;
  const lastDigit = n % 10;
  const remainingDigits = Math.floor(n / 10);
  return lastDigit * productOfDigits(remainingDigits);
}
```

For `1234`: `4 × productOfDigits(123)` → `4 × 3 × productOfDigits(12)` → `4 × 3 × 2 × productOfDigits(1)` → `24`.

**Time:** `O(d)` for `d` digits. **Call-stack space:** `O(d)`. The input limit in the question keeps the product within JavaScript's exact integer range.

## Python

```python
def product_of_digits(n: int) -> int:
    if not isinstance(n, int) or isinstance(n, bool) or n < 0:
        raise ValueError("n must be a non-negative integer")
    if n < 10:
        return n
    return (n % 10) * product_of_digits(n // 10)
```
