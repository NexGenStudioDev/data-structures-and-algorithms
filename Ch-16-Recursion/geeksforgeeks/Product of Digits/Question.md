#  Product of Digits Using Recursion

**Question link:** [GeeksforGeeks reference](https://www.geeksforgeeks.org/dsa/program-to-calculate-product-of-digits-of-a-number/)


## **1. Problem Statement**

You are given a non-negative integer `n`.

Your task is to write a recursive function that calculates the **product of all digits** of the given number.

You must solve this problem using **recursion only**, without using loops.

### **Example 1**

**Input:**

```
n = 1234
```

**Output:**

```
24
```

**Explanation:**

```
Digits = 1, 2, 3, 4

Product = 1 × 2 × 3 × 4
        = 24
```

### **Example 2**

**Input:**

```
n = 205
```

**Output:**

```
0
```

**Explanation:**

```
Digits = 2, 0, 5

Product = 2 × 0 × 5
        = 0
```

### **Example 3**

**Input:**

```
n = 789
```

**Output:**

```
504
```

**Explanation:**

```
Digits = 7, 8, 9

Product = 7 × 8 × 9
        = 504
```

### **Example 4**

**Input:**

```
n = 7
```

**Output:**

```
7
```

**Explanation:** Since the number contains only one digit, return that digit.

## **2. Constraints**

```
0 <= n <= 999999999
```

- You must use recursion.
- Do not use `for`, `while`, or `do...while` loops.
- Do not convert the number into a string or array.
- You may use mathematical operations such as `%` and `Math.floor()`.

## **3. Function Signature (JavaScript)**

```js

/**
 * @param {number} n
 * @return {number}
 */
var productOfDigits = function(n) {
    // Write your recursive solution here

};

```



## **4. Practice Test Cases**

Try running your solution against these cases.

### 01

```
n = 1234
```

Hidden

Reveal

02

n = 205

Hidden

Reveal

03

n = 789

Hidden

Reveal

04

n = 7

Hidden

Reveal

05

n = 0

Hidden

Reveal

06

n = 11111

Hidden

Reveal

07

n = 999

Hidden

Reveal

08

n = 1002

Hidden

Reveal

Reveal all answers

## **6. Follow-Up Interview Questions**

Once you solve the main problem, try answering these:

1. What is the base case of your recursive function?
2. What happens when the input is `0`?
3. What happens when one of the digits is `0`?
4. What is the time complexity of your recursive solution?
5. What is the space complexity due to the recursion call stack?
6. Can you solve this problem without using any extra variables?

**Your challenge:** First write your own JavaScript solution and send it here. I'll review your recursion logic, identify mistakes, and explain how to improve it without immediately replacing your approach.
