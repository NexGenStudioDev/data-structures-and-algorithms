# Binary Search – Calculating the Middle Index & Integer Overflow



Complete DSA Notes

Interview + Conceptual Understanding



This topic looks small, but it teaches an important programming concept: how computers represent numbers, how data types work, and how arithmetic operations can produce unexpected results.

Let's understand it from the basics, step by step.

# 1. Why Do We Need a Middle Index in Binary Search?

Before discussing Integer Overflow, let's understand why we calculate the middle index.

Binary Search is a searching algorithm that works on a sorted array. Instead of searching every element one by one, it repeatedly divides the search space into two halves.

For example, consider this array:

```
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
```

Suppose we want to find the target:

```
target = 70;
```

Initially, we have two pointers:

```
let left = 0;
let right = arr.length - 1;
```

Therefore:

```
left  = 0
right = 8
```

Now, we need to find the middle index.

The traditional formula is:

\\[ mid = \frac{left + right}{2} \\]

Substituting the values:

\\[ mid = \frac{0+8}{2}=4 \\]

The middle index is `4`, and the element at that index is `50`.

Binary Search – First Iteration

### 10

0

### 20

1

### 30

2

### 40

3

### 50

4

### 60

5

### 70

6

### 80

7

### 90

8

Left = 0

Mid = 4

Right = 8

The middle element is 50. Since 70 is greater than 50, we search the right half.

We update:

```
left = mid + 1;
```

Now:

```
left  = 5
right = 8
```

We calculate the middle again:

\\[ mid = \frac{5+8}{2}=6.5 \\]

Since an array index must be an integer, we take the floor:

```
mid = Math.floor((left + right) / 2);

// mid = 6
```

The element at index `6` is `70`.

We found our target!

Time Complexity: \\(O(\log n)\\)

Space Complexity: \\(O(1)\\) for the iterative implementation.

# 2. Understanding Variables and Data Types

Now let's understand where the actual problem starts.

When we write a program, we use variables to store data.

For example:

```
int age = 22;
int marks = 95;
```

Here:

- `int` is the data type.
- `age` and `marks` are variables.
- `22` and `95` are values stored in those variables.

But have you ever wondered how a computer stores these values?

A computer does not directly understand numbers like humans do. Internally, computers represent information using binary digits:

```
0 and 1
```

These binary digits are called bits.

### What is a bit?

A bit is the smallest unit of digital information.

It can represent only two possible values:

```
0 or 1
```

For example:

```
Decimal: 5

Binary:  101
```

### What is a byte?

One byte contains 8 bits.

\\[ 1\ Byte = 8\ Bits \\]

Therefore:

| Unit   | Size           |
| ------ | -------------- |
| 1 bit  | 1 binary digit |
| 1 byte | 8 bits         |
| 1 KB   | 1024 bytes     |
| 1 MB   | 1024 KB        |
| 1 GB   | 1024 MB        |

### How does this relate to data types?

Different data types use different amounts of memory and support different ranges of values.

For example, in a typical C++ environment:

| Data type   | Typical size | Purpose                                |
| ----------- | ------------ | -------------------------------------- |
| `char`      | 1 byte       | Character / small integer              |
| `short`     | 2 bytes      | Small integer                          |
| `int`       | 4 bytes      | Integer                                |
| `long long` | 8 bytes      | Large integer                          |
| `float`     | 4 bytes      | Floating-point number                  |
| `double`    | 8 bytes      | Higher-precision floating-point number |

Note: These are common sizes, not universal guarantees for every platform and language.

The important concept is:

A data type has a representation and a supported range. It cannot represent every possible number.

# 3. Understanding Signed and Unsigned Integers

This is important because integer overflow is closely related to the range of a data type.

In C++, we commonly use two types of integers:

1. Signed Integer
2. Unsigned Integer

### A. Signed Integer

A signed integer can store both positive and negative numbers, including zero.

For a typical 32-bit signed integer:

\\[ -2^{31}\leq int\leq 2^{31}-1 \\]

Therefore:

```
Minimum: -2,147,483,648

Maximum:  2,147,483,647
```

Why \\(2^{31}\\)?

Because one bit is used for the sign representation, leaving 31 bits for the remaining representation.

### B. Unsigned Integer

An unsigned integer stores only non-negative numbers.

For a 32-bit unsigned integer:

\\[ 0\leq unsigned\ int\leq 2^{32}-1 \\]

Therefore:

```
Minimum: 0

Maximum: 4,294,967,295
```

### Difference

| Signed integer                 | Unsigned integer                  |
| ------------------------------ | --------------------------------- |
| Positive and negative values   | Only non-negative values          |
| Maximum is \\(2^{31}-1\\)      | Maximum is \\(2^{32}-1\\)         |
| Can represent negative numbers | Cannot represent negative numbers |

Interview question: Why can an unsigned integer store a larger positive number than a signed integer of the same bit width?

Because all its bits are available to represent non-negative values, whereas a signed integer uses a representation that includes negative values.

# 4. What Is Integer Overflow?

Now we can understand the main topic.

Every fixed-width integer data type has a maximum and minimum representable value.

What happens if we perform an arithmetic operation and the result goes beyond that range?

This is called Integer Overflow.

### Simple Example

Suppose we have:

```
int a = 2000000000;
int b = 2000000000;

int result = a + b;
```

Let's calculate:

\\[ 2,000,000,000+2,000,000,000 \\]

\\[ =4,000,000,000 \\]

But the maximum value of a typical 32-bit signed integer is:

\\[ 2,147,483,647 \\]

Our calculated result is greater than the maximum supported value.

Therefore, the result cannot be represented as a 32-bit signed integer.

This situation is called Integer Overflow.

Integer Overflow – Visual Explanation

Maximum 32-bit signed integer

2.147 billion

Calculated result

4 billion

Result exceeds the supported range

### What happens internally?

In fixed-width arithmetic, only a limited number of bits are available.

A result requiring more representable bits cannot simply be stored as an ordinary value of that type.

The precise behavior depends on the language:

- In C++, signed integer overflow is undefined behavior. Do not rely on a particular wrapped result.
- In Java, integer arithmetic wraps around in two's-complement representation.
- In JavaScript, ordinary `Number` values use floating-point representation and have a different precision limitation.

### Important distinction

Overflow is not the same as a memory allocation error.

It happens because the arithmetic result cannot be represented by the numeric type being used.

# 5. How Does Integer Overflow Affect Binary Search?

Now let's connect everything to Binary Search.

Our traditional formula is:

\\[ mid=\frac{left+right}{2} \\]

Suppose:

```
int left = 2000000000;
int right = 2100000000;
```

Both variables can individually store their values in a typical 32-bit signed integer.

Now calculate the middle:

```
int mid = (left + right) / 2;
```

Let's break it down.

Step 1: Addition

\\[ left+right \\]

\\[ =2,000,000,000+2,100,000,000 \\]

\\[ =4,100,000,000 \\]

Step 2: Compare with the maximum integer value

```
Maximum int = 2,147,483,647

Calculated sum = 4,100,000,000
```

The addition overflows before the division by 2 can happen.

Step 3: Consequence

The program cannot safely calculate the correct middle index using this expression.

This is why the traditional formula is not recommended when working with potentially large fixed-width integer values.

### Why is this dangerous?

Imagine that the middle index is incorrect.

Binary Search uses this index to make decisions:

```
if (arr[mid] === target) {
    return mid;
}

if (arr[mid] < target) {
    left = mid + 1;
} else {
    right = mid - 1;
}
```

If `mid` is incorrect, the entire search process can fail.

Possible consequences include:

- Wrong search results.
- Invalid index calculations.
- Out-of-bounds array access.
- Unexpected program behavior.

# 6. The Optimized Formula

Now comes the most important part.

Instead of calculating:

\\[ mid=\frac{left+right}{2} \\]

We calculate:

Recommended Formula

\\[ \boxed{mid=left+\frac{right-left}{2}} \\]

C++

```
int mid = left + (right - left) / 2;
```

JavaScript

```
let mid = Math.floor(left + (right - left) / 2);
```

Let's understand the formula rather than just memorizing it.

### Why does this formula work?

Suppose:

```
left  = 2
right = 10
```

We know that the middle is halfway between 2 and 10.

The distance between these two values is:

\\[ right-left=10-2=8 \\]

Half the distance is:

\\[ 8/2=4 \\]

Now start from the left value and move 4 positions:

\\[ 2+4=6 \\]

Therefore:

\\[ mid=6 \\]

### Visual explanation

Finding the middle using distance

Left: 2

Middle: 6

Right: 10

2

3

4

5

6

7

8

9

10

Step-by-step calculation

\\(right-left=10-2=8\\)\\(distance/2=8/2=4\\)\\(mid=left+4=6\\)

### Let's understand it with large values

Given:

```
int left = 2000000000;
int right = 2100000000;
```

Using the traditional formula:

```
mid = (left + right) / 2

mid = (2000000000 + 2100000000) / 2

mid = 4100000000 / 2
```

The addition exceeds the typical 32-bit signed integer range.

Now using the optimized formula:

```
mid = left + (right - left) / 2

mid = 2000000000 + (2100000000 - 2000000000) / 2

mid = 2000000000 + 100000000 / 2

mid = 2000000000 + 50000000

mid = 2050000000
```

Correct middle value

Notice the difference:

- Traditional approach: Adds two large numbers first.
- Optimized approach: Calculates their difference first.

This is the main reason we prefer the optimized formula.

# 7. Mathematical Proof of the Optimized Formula

This is useful if an interviewer asks why both formulas are equivalent.

We know:

\\[ mid=\frac{left+right}{2} \\]

Multiply and rearrange:

\\[ mid=\frac{2left+right-left}{2} \\]

Separate the terms:

\\[ mid=\frac{2left}{2}+\frac{right-left}{2} \\]

Simplify:

\\[ mid=left+\frac{right-left}{2} \\]

Therefore:

\\[ \boxed{mid=left+\frac{right-left}{2}} \\]

Both formulas are mathematically equivalent.

However, they are not necessarily equally safe when implemented using fixed-width integer arithmetic.

Important: In integer arithmetic, division truncates toward zero in C++ and Java. With the normal Binary Search condition `left <= right` and non-negative indices, both approaches produce the same middle index.

# 8. Is the Optimized Formula Always Safe?

This is a deeper interview question.

The optimized formula significantly reduces the common overflow risk, but it does not guarantee safety for every possible integer value.

Consider:

```
mid = left + (right - left) / 2;
```

There are two arithmetic operations:

1. `right - left`
2. `left + (right - left) / 2`

If `right - left` itself exceeds the integer range, overflow is still possible.

However, in ordinary Binary Search:

```
left >= 0
right >= left
```

If both indices are valid non-negative values within the same integer range, their difference is also representable.

Therefore, the optimized formula is safe for the usual Binary Search index constraints.

Interview takeaway: Always check the range of intermediate calculations, not just the final answer.

# 9. Alternative Approach: Using a Larger Data Type

Another way to avoid integer overflow is to use a larger integer data type.

For example, in C++:

```
int left = 2000000000;
int right = 2100000000;

long long mid = ((long long)left + right) / 2;
```

Here, we convert `left` to `long long` before addition.

Why?

Because converting the result after addition would be too late.

Incorrect:

```
long long mid = (left + right) / 2;
```

The addition happens using `int` first. Assigning the result to `long long` does not repair an overflow that has already occurred.

Correct:

```
long long mid = ((long long)left + right) / 2;
```

Or simply use the optimized formula:

```
int mid = left + (right - left) / 2;
```

### Comparison

| Approach            | Explanation                         |
| ------------------- | ----------------------------------- |
| Traditional formula | Can overflow during addition        |
| Optimized formula   | Avoids the common addition overflow |
| Larger data type    | Provides a wider numeric range      |
| Arbitrary precision | Can represent much larger integers  |

# 10. How Does This Work in JavaScript?

Since you are learning DSA using JavaScript, this distinction is particularly important.

JavaScript does not have a normal `int` data type like C++.

When we write:

```
let left = 10;
let right = 20;
```

JavaScript normally stores these numbers using the `Number` type.

The `Number` type follows the IEEE 754 double-precision floating-point standard.

It can represent integers exactly within this range:

\\[ -(2^{53}-1)\text{ to }(2^{53}-1) \\]

The maximum safe integer is:

```
Number.MAX_SAFE_INTEGER;

// 9007199254740991
```

Therefore, normal Binary Search array indices are not going to cause the typical 32-bit integer overflow problem.

### Then why should we use the optimized formula in JavaScript?

Because:

1. It is a good programming habit.
2. It makes your code consistent with common implementations in C++ and Java.
3. It helps you understand overflow prevention.
4. It avoids the unnecessary addition of two potentially large values.

Use:

```
let mid = Math.floor(left + (right - left) / 2);
```

### Important: Avoid this JavaScript shortcut

```
let mid = (left + right) >> 1;
```

Why?

JavaScript bitwise operators convert their operands to signed 32-bit integers.

Therefore, large numbers can be truncated during this conversion, producing an incorrect result.

For general Binary Search, use `Math.floor()` instead.

# 11. Complete Binary Search Implementation

Now let's put everything together.

```
function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        // Calculate middle index safely
        let mid = Math.floor(
            left + (right - left) / 2
        );

        // Target found
        if (arr[mid] === target) {
            return mid;
        }

        // Search right half
        if (arr[mid] < target) {
            left = mid + 1;
        }

        // Search left half
        else {
            right = mid - 1;
        }
    }

    // Target not found
    return -1;
}

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log(binarySearch(arr, 70));

// Output: 6
```

### Dry Run

Target = `70`

| Iteration | Left | Right | Mid | Element | Action       |
| --------- | ---- | ----- | --- | ------- | ------------ |
| 1         | 0    | 8     | 4   | 50      | Search right |
| 2         | 5    | 8     | 6   | 70      | Found        |

Target found at index 6

# 12. Time and Space Complexity

An interviewer may ask whether using the optimized formula improves the performance of Binary Search.

The answer is no. Both middle-index calculations take constant time.

| Operation                   | Complexity |
| --------------------------- | ---------- |
| Calculate middle index      | O(1)       |
| Complete Binary Search      | O(log n)   |
| Auxiliary space (iterative) | O(1)       |

The optimized formula improves arithmetic safety, not the algorithm's time complexity.

# 13. Interview Questions and Answers

Here are some important questions to prepare.

### Basic Questions

Q1. What is the purpose of calculating the middle index in Binary Search?

The middle index helps divide the sorted search space into two halves. Based on the comparison between the middle element and the target, we eliminate one half.

Q2. What is the traditional formula for calculating the middle index?

\\[ mid=\frac{left+right}{2} \\]

Q3. What is Integer Overflow?

Integer Overflow occurs when the result of an arithmetic operation exceeds the maximum or minimum value supported by a particular integer data type.

Q4. Why can `(left + right) / 2` cause Integer Overflow?

Because the addition of two large integer values may exceed the maximum range of the integer data type before division takes place.

Q5. What is the optimized formula?

\\[ mid=left+\frac{right-left}{2} \\]

### Intermediate Questions

Q6. Why is subtraction performed before addition in the optimized formula?

Because the difference between two ordered, non-negative Binary Search indices is generally smaller than their sum. This avoids the common overflow problem caused by directly adding both pointers.

Q7. Are both formulas mathematically equivalent?

Yes. Both calculate the midpoint. The optimized formula is preferred because of its safer intermediate arithmetic for typical Binary Search ranges.

Q8. Can Integer Overflow happen in JavaScript?

JavaScript `Number` does not have ordinary 32-bit integer overflow, but it has a safe integer limit of \\(2^{53}-1\\). Beyond that, not every integer can be represented exactly.

Q9. Does the optimized formula improve time complexity?

No. Both approaches take O(1) time to calculate the middle index. Binary Search remains O(log n).

Q10. Why should we not use `>> 1` in JavaScript for calculating the middle?

Because JavaScript bitwise operators convert numbers to signed 32-bit integers, which can produce incorrect results for large values.

### Advanced Questions

Q11. Can the optimized formula also overflow?

Yes. If `right - left` or the final addition exceeds the representable range of the chosen data type, overflow can still occur.

Q12. How can you prevent overflow if you need to add two large integers in C++?

Use a sufficiently wide type before performing the addition, such as `long long`, or use an appropriate overflow-safe calculation.

Q13. Why doesn't assigning an overflowing `int` result to `long long` solve the problem?

Because the arithmetic operation happens before assignment. If the addition overflows as an `int`, storing the result in `long long` cannot recover the original correct value.

Q14. What is the difference between Integer Overflow and Floating-Point Precision Loss?

Integer Overflow occurs when an integer operation exceeds the representable range of its integer type. Floating-point precision loss occurs when a number cannot be represented exactly using the available floating-point precision.

# 14. Common Mistakes to Avoid

| Mistake                                            | Why it is wrong                            |
| -------------------------------------------------- | ------------------------------------------ |
| Directly adding two large integers                 | Can overflow                               |
| Thinking `long long` fixes every possible overflow | Even larger types have limits              |
| Casting after addition                             | Overflow may already have occurred         |
| Using `>> 1` for large JS numbers                  | Causes 32-bit conversion                   |
| Assuming optimized formula is universally safe     | Intermediate subtraction can also overflow |
| Confusing integer overflow with memory overflow    | They are different problems                |

# 15. Quick Revision Cheat Sheet

## Finding the Middle Index

Traditional formula

\\[ mid=\frac{left+right}{2} \\]

Potential integer overflow

Optimized formula

\\[ \boxed{mid=left+\frac{right-left}{2}} \\]

Recommended for typical fixed-width integer indices

Important concepts

- Bit = smallest unit of digital information.
- Byte = 8 bits.
- Data types have supported numeric ranges.
- Integer Overflow occurs when an integer result exceeds its representable range.
- JavaScript `Number.MAX_SAFE_INTEGER` = 9007199254740991.
- Binary Search time complexity = O(log n).

## 16. Test Your Understanding