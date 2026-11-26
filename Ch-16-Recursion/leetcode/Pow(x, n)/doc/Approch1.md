## Intuition

The first approach that comes to mind is to multiply `x` by itself
`n` times.


For example, if `x = 2` and `n = 8`:



![Screenshot_20261126_221116.png](https://assets.leetcode.com/users/images/f02f52a6-edad-42bc-9bc2-b704285c24cb_1795711347.9541712.png)


This brute-force approach takes O(n) time. However, when the
exponent is extremely large, performing so many multiplications
can result in a Time Limit Exceeded (TLE) error.

Instead of calculating the power one multiplication at a time,
can we divide the problem into smaller subproblems?

Yes! We can use **Binary Exponentiation**, also known as
**Exponentiation by Squaring**.

The main idea is to reduce the exponent by half whenever possible
and reuse the previously calculated result.

To understand this approach, we need to understand four cases.

---

### Case 1: When the Exponent is Zero

Any non-zero number raised to the power of zero is equal to 1.

```text
x⁰ = 1
```

Examples:

```text
2⁰   = 1
5⁰   = 1
100⁰ = 1
```

This becomes the base case of our recursive function.

Without a base case, recursion would not know when to stop.

```javascript
if (n === 0) return 1;
```

---

### Case 2: When the Exponent is Even

![Screenshot_20261126_214953.png](https://assets.leetcode.com/users/images/1115d197-498f-41db-8887-f24ce84105a1_1795710419.807684.png)

Suppose we want to calculate:

```text
2⁸
```

Instead of multiplying 2 repeatedly, we can divide the exponent
into two equal parts.

```text
2⁸ = 2⁴ × 2⁴
```

Here, we only need to calculate `2⁴` once and multiply the result
by itself.

But we can optimize it even further:





```text
2⁸ = 2⁴ × 2⁴
2⁴ = 2² × 2²
2² = 2¹ × 2¹
2¹ = 2
```

Now, while returning from recursion:

```text
2¹ = 2
2² = 2 × 2   = 4
2⁴ = 4 × 4   = 16
2⁸ = 16 × 16 = 256
```

Notice that instead of calculating every power individually,
we are reusing the previously calculated result.

#### General Formula

$$
x^n = x^{n/2} \times x^{n/2}
$$

Or:

$$
x^n = (x^{n/2})^2
$$

#### Implementation

```javascript
if (n % 2 === 0) {
    let half = myPow(x, n / 2);
    return half * half;
}
```

#### Code Explanation

- `n % 2 === 0` checks whether the exponent is even.
- `myPow(x, n / 2)` calculates half of the required power.
- `half` stores the calculated result.
- `half * half` gives us the final answer.

#### Why Do We Store the Result in a Variable?

We could also write:

```javascript
return myPow(x, n / 2) * myPow(x, n / 2);
```

However, this creates two recursive calls for the same subproblem.

For example:

```text
             pow(2, 8)
              /     \
       pow(2, 4)   pow(2, 4)
         /   \       /   \
       2²    2²     2²    2²
```

We are unnecessarily calculating the same values multiple times.

Instead, we calculate the result once:

```javascript
let half = myPow(x, n / 2);
return half * half;
```

Optimized recursive calls:

```text
pow(2, 8)
    |
pow(2, 4)
    |
pow(2, 2)
    |
pow(2, 1)
    |
pow(2, 0)
```

By avoiding duplicate recursive calls, we reduce the time
complexity from O(n) to O(log n).

---

### Case 3: When the Exponent is Odd


![Screenshot_20261126_215123.png](https://assets.leetcode.com/users/images/f89ce6cb-5610-4e04-95ec-c6399d6d8310_1795710564.514229.png)


Suppose we want to calculate:

```text
2⁹
```

Since 9 is an odd number, we cannot divide it into two equal
integer exponents.

However, we can separate one `x` from the expression and
reduce the exponent by 1.

```text
2⁹ = 2 × 2⁸
```

Now the remaining exponent becomes even, which means we can
apply our previous optimization.

```text
2⁹ = 2 × 2⁸
   = 2 × (2⁴ × 2⁴)
   = 2 × (16 × 16)
   = 2 × 256
   = 512
```

#### General Formula

$$
x^n = x \times x^{n-1}
$$

#### Implementation

```javascript
return x * myPow(x, n - 1);
```

#### Code Explanation

- Subtract 1 from the odd exponent to make it even.
- Recursively calculate the remaining power.
- Multiply the returned result by `x`.

#### Why Do We Subtract 1?

Because every positive odd number becomes even when we
subtract 1 from it.

```text
9  - 1 = 8
15 - 1 = 14
21 - 1 = 20
```

After converting the exponent into an even number, we can
divide it by 2 in the next recursive call.

For example:

```text
9 → 8 → 4 → 2 → 1 → 0
```

This allows us to maintain logarithmic time complexity even
when the exponent is odd.

---

### Case 4: When the Exponent is Negative

![07dab878-2edd-4943-8716-2132da038870.png](https://assets.leetcode.com/users/images/4e39bf79-f370-4071-a3a9-5d80faf65d71_1795712393.7642858.png)



A negative exponent represents the reciprocal of a positive
exponent.

For example:

```text
2⁻⁴ = 1 / 2⁴
```

First, calculate the positive power:

```text
2⁴ = 16
```

Then take its reciprocal:

```text
2⁻⁴ = 1 / 16
     = 0.0625
```

#### General Formula

For a negative exponent `n`:

$$
x^n = \frac{1}{x^{-n}}
$$

#### Implementation

```javascript
if (n < 0) {
    return 1 / myPow(x, -n);
}
```

#### Code Explanation

- `n < 0` checks whether the exponent is negative.
- `-n` converts the negative exponent into a positive exponent.
- `myPow(x, -n)` calculates the positive power.
- `1 / result` converts it into the required negative power.

#### Why Do We Calculate the Reciprocal at the End?

There are two mathematically equivalent ways to calculate
a negative power.

Method 1: Convert the base first.

```javascript
x = 1 / x;
n = -n;
```

Method 2: Calculate the positive power first.

```javascript
return 1 / myPow(x, -n);
```

JavaScript uses IEEE 754 double-precision floating-point
numbers, which have limited numerical precision.

Taking the reciprocal at the beginning may introduce a small
rounding error that can grow during repeated squaring.

Therefore, we use the second approach to avoid introducing
that particular rounding error before exponentiation.

However, floating-point rounding errors may still occur,
and calculating the positive power first is not universally
more numerically stable for every possible input.

---

## Approach

We use recursion and the Divide and Conquer technique to
calculate the power efficiently.

1. Check if the exponent is zero.
   - If yes, return `1`.
   - This is our base case.

2. Check if the exponent is negative.
   - Convert it into a positive exponent.
   - Recursively calculate the positive power.
   - Return its reciprocal.

3. Check if the exponent is even.
   - Divide the exponent by 2.
   - Recursively calculate half of the power.
   - Store the result in a variable.
   - Multiply the result by itself.

4. If the exponent is odd:
   - Subtract 1 from the exponent.
   - Recursively calculate the remaining power.
   - Multiply the result by `x`.

5. Return the final calculated result.

### Algorithm Summary

| Condition | Mathematical Formula | Operation |
|-----------|----------------------|-----------|
| Zero | x⁰ = 1 | Return 1 |
| Negative | xⁿ = 1 / x⁻ⁿ | Take reciprocal |
| Even | xⁿ = (xⁿ/²)² | Divide exponent by 2 |
| Odd | xⁿ = x × xⁿ⁻¹ | Subtract 1 |

---

### Algorithm Flowchart

```text
                START
                  |
                  v
             myPow(x, n)
                  |
                  v
            Is n == 0?
            /         \
          Yes          No
           |            |
       Return 1         v
                   Is n < 0?
                   /        \
                 Yes         No
                  |           |
       Return 1 / pow(x,-n)   v
                       Is n even?
                        /       \
                      Yes        No
                       |          |
             half = pow(x,n/2)    |
                       |          |
             Return half * half   |
                                  |
                         Return x * pow(x,n-1)
```

---

## Dry Run

### Example 1: Even Exponent

**Input:**

```text
x = 2
n = 8
```

### Recursive Calls

```text
myPow(2, 8)
    |
    └── myPow(2, 4)
            |
            └── myPow(2, 2)
                    |
                    └── myPow(2, 1)
                            |
                            └── myPow(2, 0)
                                    |
                                    └── return 1
```

### Returning from Recursion

| Function Call | Calculation | Returned Value |
|---------------|-------------|----------------|
| myPow(2, 0) | Base case | 1 |
| myPow(2, 1) | 2 × 1 | 2 |
| myPow(2, 2) | 2 × 2 | 4 |
| myPow(2, 4) | 4 × 4 | 16 |
| myPow(2, 8) | 16 × 16 | 256 |

**Output:**

```text
256
```

---

### Example 2: Odd Exponent

**Input:**

```text
x = 2
n = 9
```

### Recursive Calls

| Function Call | Condition | Operation |
|---------------|-----------|-----------|
| myPow(2, 9) | Odd | 2 × myPow(2, 8) |
| myPow(2, 8) | Even | myPow(2, 4) |
| myPow(2, 4) | Even | myPow(2, 2) |
| myPow(2, 2) | Even | myPow(2, 1) |
| myPow(2, 1) | Odd | 2 × myPow(2, 0) |
| myPow(2, 0) | Base case | Return 1 |

### Returning from Recursion

| Function Call | Calculation | Returned Value |
|---------------|-------------|----------------|
| myPow(2, 0) | Base case | 1 |
| myPow(2, 1) | 2 × 1 | 2 |
| myPow(2, 2) | 2 × 2 | 4 |
| myPow(2, 4) | 4 × 4 | 16 |
| myPow(2, 8) | 16 × 16 | 256 |
| myPow(2, 9) | 2 × 256 | 512 |

**Output:**

```text
512
```

---

### Example 3: Negative Exponent

**Input:**

```text
x = 2
n = -9
```

### Recursive Calls

```text
myPow(2, -9)
    |
    └── 1 / myPow(2, 9)
                |
                └── 2 * myPow(2, 8)
                            |
                            └── myPow(2, 4)
                                    |
                                    └── myPow(2, 2)
                                            |
                                            └── myPow(2, 1)
                                                    |
                                                    └── myPow(2, 0)
                                                            |
                                                            └── 1
```

### Returning from Recursion

| Function Call | Calculation | Returned Value |
|---------------|-------------|----------------|
| myPow(2, 0) | Base case | 1 |
| myPow(2, 1) | 2 × 1 | 2 |
| myPow(2, 2) | 2 × 2 | 4 |
| myPow(2, 4) | 4 × 4 | 16 |
| myPow(2, 8) | 16 × 16 | 256 |
| myPow(2, 9) | 2 × 256 | 512 |
| myPow(2, -9) | 1 / 512 | 0.001953125 |

**Output:**

```text
0.001953125
```

---

## Complexity

### Time Complexity: O(log |n|)

Whenever the exponent is even, we divide it by 2.

Whenever the exponent is odd, we subtract 1, making it even
for the next recursive call.

For example, if `n = 64`:

```text
64 → 32 → 16 → 8 → 4 → 2 → 1 → 0
```

Instead of reducing the exponent one by one, we repeatedly
reduce it to half its size.

For positive even exponents, the recurrence relation is:

$$
T(n) = T(n/2) + O(1)
$$

For odd exponents:

$$
T(n) = T(n-1) + O(1)
$$

Since subtracting 1 from an odd exponent makes it even,
the next recursive call divides it by 2.

Therefore, the overall time complexity for non-zero
exponents is:

$$
O(\log |n|)
$$

### Brute Force vs Binary Exponentiation

The following table shows the number of multiplications
performed by both approaches for selected positive exponents.

| Exponent | Brute Force | Binary Exponentiation |
|---------:|------------:|----------------------:|
| 8 | 8 | 4 |
| 16 | 16 | 5 |
| 32 | 32 | 6 |
| 64 | 64 | 7 |
| 128 | 128 | 8 |
| 1024 | 1024 | 11 |
| 1048576 | 1048576 | 21 |

The brute-force approach assumes the result starts at 1
and is multiplied by x exactly n times.

Binary Exponentiation significantly reduces the number
of operations required.

### Space Complexity: O(log |n|)

Since we are using recursion, each recursive call occupies
some space in the call stack.

As the exponent is reduced by half at regular intervals,
the maximum depth of the recursive call stack is logarithmic.

Therefore, the auxiliary space complexity is:

$$
O(\log |n|)
$$

For `n = 0`, both time and space complexity are O(1).

---

## Code

```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {

    // Base Case: x^0 = 1
    if (n === 0) return 1;

    // Negative Exponent:
    // x^(-n) = 1 / x^n
    if (n < 0) {
        return 1 / myPow(x, -n);
    }

    // Even Exponent:
    // x^n = x^(n/2) * x^(n/2)
    if (n % 2 === 0) {

        // Calculate the subproblem only once
        let half = myPow(x, n / 2);

        // Reuse the calculated result
        return half * half;
    }

    // Odd Exponent:
    // x^n = x * x^(n-1)
    return x * myPow(x, n - 1);
};
```

---

## Edge Cases

| Input (x, n) | Expected Output | Reason |
|--------------|-----------------|--------|
| (2, 0) | 1 | Zero exponent |
| (2, 1) | 2 | Power of one |
| (1, 100) | 1 | Any power of 1 is 1 |
| (0, 5) | 0 | Zero raised to a positive power |
| (2, -2) | 0.25 | Negative exponent |
| (-2, 3) | -8 | Negative base with odd exponent |
| (-2, 4) | 16 | Negative base with even exponent |
| (2, 10) | 1024 | Positive even exponent |

---


