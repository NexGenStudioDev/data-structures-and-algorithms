# Approach 2: Two Pointers — Direct Index Placement (Single Pass)

## Intuition

The problem requires us to rearrange the given array such that positive and negative integers appear alternately while preserving the relative order of elements having the same sign.

Since the resulting array must always start with a positive integer, we can observe the following pattern:

![TimeComplexity](../Images/Arrangement%20-Pattern.png)

- Positive integers always occupy **even** indices: `0, 2, 4, 6, ...`
- Negative integers always occupy **odd** indices: `1, 3, 5, 7, ...`

A straightforward approach would be to store positive and negative elements in two separate arrays and then merge them alternately (see [Approach 1](Approch1.md)). However, that requires extra temporary arrays and two passes.

Instead, we can directly place each element into its correct position using two pointers:

- `Positive = 0` — tracks the next available even index.
- `Negative = 1` — tracks the next available odd index.

Whenever we encounter a positive integer, we place it at `result[Positive]` and increment `Positive` by `2`. Whenever we encounter a negative integer, we place it at `result[Negative]` and increment `Negative` by `2`.

Because we traverse `nums` from left to right, the relative order of elements having the same sign is automatically preserved—solving the problem in a single pass without sorting or extra grouping arrays.

---

## Approach

### Two Pointers — Direct Index Placement

#### Step 1: Initialize Two Pointers

```cpp
int Positive = 0;
int Negative = 1;
```

`Positive` starts at index `0` (first even index), and `Negative` starts at index `1` (first odd index).

#### Step 2: Create a Result Vector

```cpp
vector<int> result(nums.size());
```

Preallocate a vector of size `nums.size()`, initialized to `0`. Preallocation lets us assign elements directly at arbitrary valid indices.

#### Step 3: Traverse the Input Array

```cpp
for (int i = 0; i < nums.size(); i++)
```

Visit every element of `nums` from left to right.

#### Step 4: Handle Positive Integers

```cpp
if (nums[i] > 0) {
    result[Positive] = nums[i];
    Positive += 2;
}
```

If the current element is positive:
- Place it at `result[Positive]`.
- Increment `Positive` by `2` to advance to the next even index.
- Leave `Negative` unchanged.

#### Step 5: Handle Negative Integers

```cpp
else {
    result[Negative] = nums[i];
    Negative += 2;
}
```

If the current element is negative:
- Place it at `result[Negative]`.
- Increment `Negative` by `2` to advance to the next odd index.
- Leave `Positive` unchanged.

#### Step 6: Return the Result

```cpp
return result;
```

---

## Dry Run

### Input

```text
nums = [3, 1, -2, -5, 2, -4]
```

### Initial State

```text
Positive = 0, Negative = 1
result = [0, 0, 0, 0, 0, 0]

Index:      0    1    2    3    4    5
nums:      [3,   1,  -2,  -5,   2,  -4]

Index:      0    1    2    3    4    5
result:    [0,   0,   0,   0,   0,   0]
            P    N
```

Here, `P` represents `Positive` and `N` represents `Negative`.

### Iteration 1 (`i = 0`, `nums[0] = 3`)

- `Positive = 0`, `Negative = 1`
- Check `nums[0] > 0`: `3 > 0` → `true`
- `result[0] = 3`, `Positive = 0 + 2 = 2`

```text
Index:      0    1    2    3    4    5
result:    [3,   0,   0,   0,   0,   0]
                 N    P
```

| Variable | Before | After |
| --- | ---: | ---: |
| `Positive` | 0 | 2 |
| `Negative` | 1 | 1 |

### Iteration 2 (`i = 1`, `nums[1] = 1`)

- `Positive = 2`, `Negative = 1`
- Check `nums[1] > 0`: `1 > 0` → `true`
- `result[2] = 1`, `Positive = 2 + 2 = 4`

```text
Index:      0    1    2    3    4    5
result:    [3,   0,   1,   0,   0,   0]
                 N              P
```

| Variable | Before | After |
| --- | ---: | ---: |
| `Positive` | 2 | 4 |
| `Negative` | 1 | 1 |

Notice that index `1` is skipped because it is reserved for a negative integer.

### Iteration 3 (`i = 2`, `nums[2] = -2`)

- `Positive = 4`, `Negative = 1`
- Check `nums[2] > 0`: `-2 > 0` → `false`
- `result[1] = -2`, `Negative = 1 + 2 = 3`

```text
Index:      0    1    2    3    4    5
result:    [3,  -2,   1,   0,   0,   0]
                           N    P
```

| Variable | Before | After |
| --- | ---: | ---: |
| `Positive` | 4 | 4 |
| `Negative` | 1 | 3 |

### Iteration 4 (`i = 3`, `nums[3] = -5`)

- `Positive = 4`, `Negative = 3`
- Check `nums[3] > 0`: `-5 > 0` → `false`
- `result[3] = -5`, `Negative = 3 + 2 = 5`

```text
Index:      0    1    2    3    4    5
result:    [3,  -2,   1,  -5,   0,   0]
                                P    N
```

| Variable | Before | After |
| --- | ---: | ---: |
| `Positive` | 4 | 4 |
| `Negative` | 3 | 5 |

### Iteration 5 (`i = 4`, `nums[4] = 2`)

- `Positive = 4`, `Negative = 5`
- Check `nums[4] > 0`: `2 > 0` → `true`
- `result[4] = 2`, `Positive = 4 + 2 = 6`

```text
Index:      0    1    2    3    4    5
result:    [3,  -2,   1,  -5,   2,   0]
                                     N   (Positive = 6)
```

| Variable | Before | After |
| --- | ---: | ---: |
| `Positive` | 4 | 6 |
| `Negative` | 5 | 5 |

All positive elements are now placed in their final positions.

### Iteration 6 (`i = 5`, `nums[5] = -4`)

- `Positive = 6`, `Negative = 5`
- Check `nums[5] > 0`: `-4 > 0` → `false`
- `result[5] = -4`, `Negative = 5 + 2 = 7`

```text
Index:      0    1    2    3    4    5
result:    [3,  -2,   1,  -5,   2,  -4]
                                         (Positive = 6, Negative = 7)
```

| Variable | Before | After |
| --- | ---: | ---: |
| `Positive` | 6 | 6 |
| `Negative` | 5 | 7 |

The loop terminates when `i` becomes `6` (`i == nums.size()`).

### Complete Dry Run Table

The pointer columns show their values **after** each iteration.

| `i` | `nums[i]` | `nums[i] > 0` | Operation | `Positive` | `Negative` | `result` |
| ---: | ---: | --- | --- | ---: | ---: | --- |
| — | — | — | Initialize | 0 | 1 | `[0, 0, 0, 0, 0, 0]` |
| 0 | `3` | `true` | `result[0] = 3` | 2 | 1 | `[3, 0, 0, 0, 0, 0]` |
| 1 | `1` | `true` | `result[2] = 1` | 4 | 1 | `[3, 0, 1, 0, 0, 0]` |
| 2 | `-2` | `false` | `result[1] = -2` | 4 | 3 | `[3, -2, 1, 0, 0, 0]` |
| 3 | `-5` | `false` | `result[3] = -5` | 4 | 5 | `[3, -2, 1, -5, 0, 0]` |
| 4 | `2` | `true` | `result[4] = 2` | 6 | 5 | `[3, -2, 1, -5, 2, 0]` |
| 5 | `-4` | `false` | `result[5] = -4` | 6 | 7 | `[3, -2, 1, -5, 2, -4]` |

### Final Output

```text
[3, -2, 1, -5, 2, -4]
```

---

## Why Does This Approach Work?

### 1. Alternating Signs

Positive elements are always inserted at even indices, while negative elements are always inserted at odd indices:

```text
Index:     0    1    2    3    4    5
Result:   [3,  -2,   1,  -5,   2,  -4]
Sign:      +    -    +    -    +    -
```

Every pair of consecutive elements has opposite signs.

### 2. Relative Order Is Preserved

We traverse `nums` from left to right and write elements of each sign sequentially into their respective index streams:

```text
Original positive order:  3,  1,  2
Result positive order:    3,  1,  2

Original negative order: -2, -5, -4
Result negative order:   -2, -5, -4
```

### 3. The Array Starts With a Positive Integer

Since `Positive` starts at `0`, the first element (`result[0]`) is always positive.

### 4. No Element Is Overwritten

`Positive` only visits even indices (`0 → 2 → 4`), and `Negative` only visits odd indices (`1 → 3 → 5`). Their write positions never overlap, and since there are equal numbers of positive and negative integers, every index is filled exactly once.

---

## Complexity

Let $n$ be the number of elements in `nums`.

### Time Complexity: $O(n)$

Initializing `result` takes $O(n)$ time, and the single pass over `nums` performs $O(1)$ work per element:

| Operation | Complexity |
| --- | --- |
| Initialize pointers | $O(1)$ |
| Initialize result vector | $O(n)$ |
| Traverse input array | $O(n)$ |
| Element assignment | $O(1)$ per element |
| Pointer increment | $O(1)$ per element |
| **Overall** | **$O(n)$** |

$$O(1) + O(n) + O(n) = O(n)$$

This is optimal because every input element must be inspected at least once.

### Space Complexity: $O(n)$

We allocate `result` of size $n$, while `Positive`, `Negative`, and `i` use $O(1)$ space:

$$O(n) + O(1) = O(n)$$

If the required output vector is excluded, the **auxiliary space complexity is $O(1)$**.

---

## Code

### C++

```cpp
class Solution {
public:
    vector<int> rearrangeArray(vector<int>& nums) {
        int Positive = 0;
        int Negative = 1;

        vector<int> result(nums.size());

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] > 0) {
                result[Positive] = nums[i];
                Positive += 2;
            } else {
                result[Negative] = nums[i];
                Negative += 2;
            }
        }

        return result;
    }
};
```

---

## Important Observations

### Why Do We Initialize the Vector With `nums.size()`?

```cpp
vector<int> result;
```

This creates an empty vector of size `0`. Directly assigning `result[0] = 3` would cause undefined behavior because index `0` does not exist.

Instead:

```cpp
vector<int> result(nums.size());
```

This preallocates valid indices from `0` to `nums.size() - 1`, allowing direct index assignment.

### Why Do We Increment the Pointers by `2` Instead of `1`?

Incrementing by `1` would move the pointer onto an index reserved for the opposite sign. Incrementing by `2` preserves each pointer's index parity:

```text
Positive: 0 → 2 → 4 → 6
Negative: 1 → 3 → 5 → 7
```

### Why Don't the Final Pointer Values Cause an Out-of-Bounds Error?

At the end of the dry run, `Positive = 6` and `Negative = 7`. Although these values lie outside `[0, 5]`, we never read or write `result[6]` or `result[7]`. An out-of-bounds error only occurs when an invalid index is dereferenced, and the problem guarantees there are no extra elements remaining.

---

## Edge Cases

| Input | Expected Output | Scenario |
| --- | --- | --- |
| `[1, -1]` | `[1, -1]` | Minimum size |
| `[-1, 1]` | `[1, -1]` | Starts with negative |
| `[1, 2, 3, -1, -2, -3]` | `[1, -1, 2, -2, 3, -3]` | All positives first |
| `[-1, -2, -3, 1, 2, 3]` | `[1, -1, 2, -2, 3, -3]` | All negatives first |
| `[1, -1, 2, -2]` | `[1, -1, 2, -2]` | Already rearranged |
| `[2, 2, -3, -3]` | `[2, -3, 2, -3]` | Duplicate elements |

---

## Key Takeaways

| Property | Description |
| --- | --- |
| Problem | 2149. Rearrange Array Elements by Sign |
| Difficulty | Medium |
| DSA Pattern | Two Pointers |
| Technique | Direct Index Placement |
| Approach | Optimal |
| Traversal | Single Pass |
| Relative Order | Preserved |
| Sorting Required | No |
| In-place | No |
| Time Complexity | $O(n)$ |
| Space Complexity | $O(n)$ |
| Auxiliary Space (excluding output) | $O(1)$ |

> **Pattern Recognition:** Whenever a problem requires placing different categories of elements at alternating or predefined positions while preserving their relative order, consider using independent index pointers.

> **Note:** This solution preserves your original C++ logic and relies on the problem's guarantees that the input contains no zeros and has an equal number of positive and negative integers.

### LeetCode Solution Title

**Two Pointers (Direct Index Placement) | O(n) Time & O(1) Auxiliary Space | Single Pass | C++**
