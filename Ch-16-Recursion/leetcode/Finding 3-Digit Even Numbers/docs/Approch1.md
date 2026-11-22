# **LeetCode 2094 — Finding 3-Digit Even Numbers**

## **Intuition**

My first thought was to generate all possible 3-digit numbers using the given digits.

Since we need to form a 3-digit number, we can use **three nested loops**, where each loop selects one digit:

- `i` selects the hundreds digit.
- `j` selects the tens digit.
- `k` selects the ones digit.

However, we need to follow some conditions.

First, we cannot use the same array index more than once while forming a number. That's why we check:

```
if (i === j || j === k || i === k) {
    continue;
}
```

Next, a 3-digit number cannot start with `0`, and an even number must have an even digit at the last position.

```
if (digits[i] === 0 || digits[k] % 2 !== 0) {
    continue;
}
```

Another important observation is that different combinations of indices can generate the same number.

To avoid storing duplicate numbers, we can use a **Set**, which automatically stores only unique values.

Finally, we convert the Set into an array and sort it in ascending order.

## **Approach — Brute Force + Set**

1. Initialize an empty `Set` to store unique numbers.
2. Use three nested loops to generate all possible ordered selections of three digits.
3. Skip the combination if any two indices are equal.
4. Skip the combination if the first digit is `0` or the last digit is odd.
5. Construct the number using `digits[i] * 100 + digits[j] * 10 + digits[k]`.
6. Insert the generated number into the Set.
7. Convert the Set into an array, sort it in ascending order, and return the result.

## **Code**

```js

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {

    let myset = new Set();

    let len = digits.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            for (let k = 0; k < len; k++) {

                // Avoid using the same index twice
                if (i === j || j === k || i === k) {
                    continue;
                }

                // No leading zero and last digit must be even
                if (digits[i] === 0 || digits[k] % 2 !== 0) {
                    continue;
                }

                // Construct the 3-digit number
                myset.add(
                    digits[i] * 100 +
                    digits[j] * 10 +
                    digits[k]
                );
            }
        }
    }

    return [...myset].sort((a, b) => a - b);
};

```

## **Dry Run**

**Input:** `digits = [2, 1, 3, 0]`

Initially, `myset = {}`.

The following combinations pass all conditions:

| i | j | k | Generated number |
| - | - | - | ---------------- |
| 0 | 1 | 3 | 210              |
| 0 | 2 | 3 | 230              |
| 1 | 0 | 3 | 120              |
| 1 | 2 | 0 | 132              |
| 1 | 2 | 3 | 130              |
| 1 | 3 | 0 | 102              |
| 2 | 0 | 3 | 320              |
| 2 | 1 | 0 | 312              |
| 2 | 1 | 3 | 310              |
| 2 | 3 | 0 | 302              |

For example, when `i = 1`, `j = 3`, and `k = 0`:

```
digits[i] = 1
digits[j] = 0
digits[k] = 2

number = 1 * 100 + 0 * 10 + 2
       = 102
```

All three indices are different, the first digit is not zero, and the last digit is even. Therefore, `102` is added to the Set.

After completing all iterations, we sort the unique numbers.

**Output:**

```
[102, 120, 130, 132, 210, 230, 302, 310, 312, 320]
```

## **Complexity Analysis**

**Time Complexity: O(n³)**

We use three nested loops, each running `n` times, so generating the combinations takes `O(n³)`.

Sorting the unique numbers takes `O(m log m)`, where `m` is the number of unique valid numbers. Since there are at most 450 possible 3-digit even numbers, this sorting cost is bounded.

Therefore, the overall time complexity is **O(n³)**.

**Space Complexity: O(1)**

We use a Set to store unique 3-digit even numbers. Since there are at most 450 possible values, the required storage is bounded regardless of the input size.

Therefore, the overall auxiliary space complexity is **O(1)**.