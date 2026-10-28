# Daily Temperatures — Next Greater Element Using Monotonic Stack

## Intuition

For every day, we need to find the **next warmer temperature** and calculate how many days we have to wait.

For example:

```text
temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

Day:          1   2   3   4   5   6   7   8
Temperature: 73  74  75  71  69  72  76  73
Index:         0   1   2   3   4   5   6   7
```

For `75` at index `2`:

```text
75 → 71 ❌
75 → 69 ❌
75 → 72 ❌
75 → 76 ✅
```

The next warmer temperature is `76` at index `6`.

So:

```text
6 - 2 = 4
```

Therefore:

```text
ans[2] = 4
```

A brute-force solution would check every future temperature for every day, resulting in `O(n²)` time.

To optimize this, we process the array **from right to left** and maintain a **monotonic decreasing stack**.

The stack stores **indices**, not temperatures.

---

## Approach

### 1. Traverse from Right to Left

We start from the last day because we are looking for a warmer temperature **in the future**.

```text
[73, 74, 75, 71, 69, 72, 76, 73]
                                 ↑
                               Start
```

When processing an index, all elements to its right have already been processed.

---

### 2. Store Indices in the Stack

Instead of storing:

```text
[76, 72, 71]
```

we store their indices:

```text
[6, 5, 3]
```

This is useful because the answer is simply:

```text
warmerIndex - currentIndex
```

For example:

```text
currentIndex = 2
warmerIndex = 6

6 - 2 = 4
```

---

### 3. Remove Smaller or Equal Temperatures

For the current temperature:

```javascript
arr[i]
```

look at the temperature represented by the stack top:

```javascript
arr[top]
```

If:

```javascript
arr[i] >= arr[top]
```

then the stack-top temperature cannot be the answer.

Why?

Because we need a **strictly warmer** temperature.

So we remove it:

```javascript
stack.pop();
```

For example:

```text
Current = 75

Stack:
76
72
71
```

`71` and `72` are not warmer than `75`, so they are removed.

The remaining `76` is the next warmer temperature.

---

### 4. Find the Next Warmer Day

After removing all temperatures that are smaller than or equal to the current temperature:

```javascript
if (arr[i] < arr[top])
```

then the stack top contains the next warmer day.

We calculate:

```javascript
ans[i] = top - i;
```

For example:

```text
75 → index 2
76 → index 6

6 - 2 = 4
```

Therefore:

```text
ans[2] = 4
```

---

### 5. Push the Current Index

After finding the answer for the current index, push it into the stack:

```javascript
stack.push(i);
```

The current temperature can become the next warmer temperature for an element further to the left.

---

### 6. Why Does `ans` Start With `0`?

```javascript
let ans = Array(n).fill(0);
```

If there is no warmer temperature in the future, the answer should be:

```text
0
```

So we initialize every answer with `0`.

Any index that never finds a warmer temperature simply keeps its initial value.

---

## Dry Run

For:

```text
[73, 74, 75, 71, 69, 72, 76, 73]
```

Start:

```text
stack = [7]
ans   = [0,0,0,0,0,0,0,0]
```

### Index 6 → `76`

```text
76 > 73
```

Remove index `7`.

No warmer temperature exists:

```text
ans[6] = 0
```

Push `6`:

```text
stack = [6]
```

---

### Index 5 → `72`

```text
72 < 76
```

`76` is warmer.

```text
ans[5] = 6 - 5 = 1
```

Push `5`:

```text
stack = [6,5]
```

---

### Index 4 → `69`

```text
69 < 72
```

`72` is warmer.

```text
ans[4] = 5 - 4 = 1
```

Push `4`:

```text
stack = [6,5,4]
```

---

### Index 3 → `71`

Top is `69`.

```text
71 >= 69
```

Remove `69`.

Now top is `72`.

```text
71 < 72
```

So:

```text
ans[3] = 5 - 3 = 2
```

Push `3`.

```text
stack = [6,5,3]
```

---

### Index 2 → `75`

Top is `71`:

```text
75 >= 71
```

Pop.

Top is `72`:

```text
75 >= 72
```

Pop.

Top is `76`:

```text
75 < 76
```

So:

```text
ans[2] = 6 - 2 = 4
```

Push `2`.

---

Continue the same process for `74` and `73`.

Final result:

```text
[1,1,4,2,1,1,0,0]
```

---

## Complexity

* **Time complexity:** `O(n)`

  Every index is pushed into the stack exactly once and popped at most once.

  Therefore, although there is a `while` loop inside the `for` loop, the total number of stack operations is `O(n)`.

* **Space complexity:** `O(n)`

  The stack can contain up to `n` indices, and the answer array contains `n` elements.

## Code

```javascript
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function(arr) {

    let stack = [];

    let n = arr.length;

    let ans = Array(n).fill(0);

    // Start with the last index
    stack.push(n - 1);

    // Traverse from right to left
    for (let i = n - 2; i >= 0; i--) {

        while (stack.length) {

            let top = stack[stack.length - 1];

            // Remove temperatures that are
            // smaller than or equal to current
            if (arr[i] >= arr[top]) {

                stack.pop();

            } else {

                // Found the next warmer day
                ans[i] = top - i;

                break;
            }
        }

        // Current index can help previous days
        stack.push(i);
    }

    return ans;
};
```
