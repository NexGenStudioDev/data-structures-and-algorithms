# **2094. Finding 3-Digit Even Numbers**



**Problem Link:** [LeetCode 2094](https://leetcode.com/problems/finding-3-digit-even-numbers/?utm_source=chatgpt.com)

## **Problem Description**

You are given an integer array `digits`, where each element represents a single digit between `0` and `9`.

The array may contain **duplicate digits**, meaning the same digit can appear multiple times.

Your task is to find **all possible unique three-digit even integers** that can be formed by selecting exactly three elements from the given array and arranging them in any order.

However, not every arrangement is considered valid. Each generated integer must satisfy the requirements described below.

## **Rules and Requirements**

### **1. The integer must contain exactly three digits**

Every valid integer must be a three-digit number.

This means its numerical value must be between `100` and `999`, inclusive.

Numbers containing fewer or more than three digits are not allowed.

### **2. The integer must be even**

A valid integer must be divisible by `2` without leaving a remainder.

For example:

- `124` is an even integer.
- `238` is an even integer.
- `135` is an odd integer.
- `321` is an odd integer.

Only even integers are allowed in the final output.

### **3. Leading zeros are not allowed**

A three-digit integer cannot begin with `0`.

For example:

- `024` is not a valid three-digit integer because its numerical value is `24`.
- `008` is not a valid three-digit integer because its numerical value is `8`.
- `204` is a valid three-digit integer.

A zero may appear in other positions, provided the resulting integer satisfies all requirements.

### **4. Each array element can be used only once**

While forming a single three-digit integer, you may select each array element at most once.

However, the same digit value may be used multiple times if it appears multiple times in the input array.

For example, consider:

```
digits = [2, 2, 8]
```

The array contains two separate occurrences of `2`.

Therefore, using both occurrences within the same integer is allowed.

The number of times a digit appears in a generated integer must not exceed the number of times that digit appears in the input array.

### **5. The digits can be arranged in any order**

You are not required to preserve the original order of the elements in the input array.

You may rearrange the selected digits in any order, provided the resulting integer satisfies all the given requirements.

### **6. Every integer in the output must be unique**

The same three-digit integer might be formed through different selections of array elements, especially when the input contains duplicate digits.

However, each distinct integer must appear **only once** in the final output.

### **7. Return the integers in sorted order**

The final array must contain all valid, unique three-digit even integers in **ascending numerical order**.

If no valid integer can be formed, return an empty array `[]`.

## **Examples**

### **Example 1**

**Input:**

```
digits = [2, 1, 3, 0]
```

**Output:**

```
[102, 120, 130, 132, 210, 230, 302, 310, 312, 320]
```

**Explanation:**

The given array contains four digits: `2`, `1`, `3`, and `0`.

Using these digits, multiple three-digit integers can be formed by selecting three elements and arranging them in different orders.

The output contains every unique integer that satisfies the requirements.

All returned integers:

- Contain exactly three digits.
- Are even.
- Do not begin with zero.
- Do not reuse an array element.
- Appear only once in the output.

The integers are returned in ascending order.

### **Example 2**

**Input:**

```
digits = [2, 2, 8, 8, 2]
```

**Output:**

```
[222, 228, 282, 288, 822, 828, 882]
```

**Explanation:**

The given array contains repeated digits.

The digit `2` appears three times, while the digit `8` appears twice.

Because duplicate digit values are allowed when multiple occurrences exist in the input, integers such as `222`, `288`, `828`, and `882` are valid.

For example, `288` uses one occurrence of `2` and two occurrences of `8`.

Every integer in the output satisfies the requirements and appears only once.

### **Example 3**

**Input:**

```
digits = [3, 7, 5]
```

**Output:**

```
[]
```

**Explanation:**

The given array contains only the digits `3`, `7`, and `5`.

No three-digit even integer can be formed using these digits.

Therefore, the result is an empty array.

## **Constraints**

- `3 <= digits.length <= 100`
- `0 <= digits[i] <= 9`

These constraints mean:

- The input array contains at least `3` elements and at most `100` elements.
- Every element is a single digit between `0` and `9`, inclusive.
- The input array may contain duplicate values.

## **Function Signature**

```
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {

};
```

## **Your Task**

Complete the function `findEvenNumbers(digits)`.

The function receives an array of digits and must return an array containing **all unique three-digit even integers** that can be formed using the available array elements.

The returned array must be sorted in ascending order.

If no valid integer exists, return `[]`.

You do not need to handle console input or output. Simply implement the function and return the required array.