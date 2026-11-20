# Find the Largest and Smallest Array Values

`Infinity` and `-Infinity` are useful starting values when scanning a non-empty array. They ensure all-negative arrays still produce the right maximum and all-positive arrays still produce the right minimum.

For DSA problems such as finding the largest or smallest element in an array, these values are very useful.

## 1. Python vs JavaScript

| Purpose               | Python          | JavaScript  |
| --------------------- | --------------- | ----------- |
| Positive infinity     | `float('inf')`  | `Infinity`  |
| Negative infinity     | `float('-inf')` | `-Infinity` |
| Maximum initial value | `float('-inf')` | `-Infinity` |
| Minimum initial value | `float('inf')`  | `Infinity`  |

Important: JavaScript uses `Infinity` directly. You don't need to use `Number()` or `parseFloat()`.

## 2. JavaScript: Find the largest element

For the non-empty input promised by the problem:

```
class Solution {
    largest(arr) {
        let max = -Infinity;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        return max;
    }
}
```

### Dry Run

Input:

```
arr = [-10, -3, -5, -20];
```

Initially:

```
max = -Infinity;
```

| Iteration | arr[i] | Comparison       | max |
| --------- | ------ | ---------------- | --- |
| 1         | -10    | -10 > -Infinity  | -10 |
| 2         | -3     | -3 > -10         | -3  |
| 3         | -5     | -5 > -3 (False)  | -3  |
| 4         | -20    | -20 > -3 (False) | -3  |

Output:

```
-3
```

## 3. JavaScript: Find the smallest element

For finding the smallest element, use positive infinity.

```
class Solution {
    smallest(arr) {
        let min = Infinity;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        return min;
    }
}
```

## 4. Why use Infinity instead of 0?

Consider this array:

```
arr = [-50, -20, -100, -10];
```

If you initialize:

```
let max = 0;
```

Your answer will be `0`, which is incorrect because `0` doesn't exist in the array.

But if you initialize:

```
let max = -Infinity;
```

Your answer will correctly be `-10`.

Similarly, initializing the minimum with `0` can give an incorrect result for an array containing only positive numbers.

## 5. Important Infinity values in JavaScript

```
console.log(Infinity);             // Infinity
console.log(-Infinity);            // -Infinity

console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity

console.log(Number.MAX_VALUE);     // Largest finite JS number
console.log(Number.MIN_VALUE);     // Smallest positive JS number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
```

Important distinction:

- `Number.MAX_VALUE` is the largest finite JavaScript number.
- `Number.MIN_VALUE` is the smallest positive number, NOT the most negative number.
- `-Infinity` is smaller than every finite JavaScript number.
- `Infinity` is greater than every finite JavaScript number.

## 6. Python equivalents

```python
positive = float("inf")
negative = float("-inf")

print(positive)
print(negative)
```

## 7. DSA Cheat Sheet

| Problem                         | Best initialization                                   |
| ------------------------------- | ----------------------------------------------------- |
| Find maximum element            | `let max = -Infinity`                                 |
| Find minimum element            | `let min = Infinity`                                  |
| Maximum subarray sum (Kadane's) | `let maxSum = -Infinity`                              |
| Minimum cost                    | `let minCost = Infinity`                              |
| Find maximum profit             | Depends on problem; often `-Infinity` for best profit |
| Find minimum difference         | `let minDiff = Infinity`                              |

Remember for interviews

Maximum → `-Infinity`

Minimum → `Infinity`

These initializations work for non-empty arrays of finite numeric values. For an empty array, return a separate “no value” result (such as `undefined` in JavaScript) or handle it according to the problem's contract.

My recommendation: In JavaScript DSA, make `Infinity` and `-Infinity` part of your standard toolkit. They are generally safer than initializing maximum or minimum tracking variables with `0`.
