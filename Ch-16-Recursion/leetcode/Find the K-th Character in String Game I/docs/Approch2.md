**Title: From Brute Force to Optimized Recursion | O(log k) | Binary Pattern Explained from Scratch | JavaScript | Detailed Dry Run**

# **Intuition**

Initially, we are given a string `word = "a"` and a positive integer `k`.

Our task is to find the k-th character after performing the operations mentioned in the question.

In every operation, we generate a new string by replacing each existing character with its next alphabetical character and append the newly generated string to the original string.

```
Operation 0: a
Operation 1: a        + b        = ab
Operation 2: ab       + bc       = abbc
Operation 3: abbc     + bccd     = abbcbccd
Operation 4: abbcbccd + bccdcdde = abbcbccdbccdcdde
```

## **1. Thinking About the Brute Force Approach**

Our first thought is to generate the entire string using a `while` loop and a `for...of` loop.

We continue generating characters until the string contains at least `k` characters.

Finally, we return:

```
return word[k - 1];
```

This approach works correctly. However, we are generating and storing many characters even though we only need one character.

For example, if `k = 500`, we generate a string containing 512 characters just to find the character at index 499.

Can we avoid generating the entire string and directly calculate the required character?

To answer this question, we need to observe the string generation pattern carefully.

## **2. Observing How the String Grows**

After every operation, the length of the string doubles.

```
1 → 2 → 4 → 8 → 16 → 32 → 64 → ...
```

These numbers are powers of two.

```
2⁰ → 2¹ → 2² → 2³ → 2⁴ → 2⁵ → ...
```

Another important observation is that every generated string contains two equal halves.

Operation 1 — Length: 2

## **a**

Original half

## **b**

Shifted half (+1)

Operation 2 — Length: 4

## **ab**

Original half

## **bc**

Shifted half (+1)

Operation 3 — Length: 8

## **abbc**

Original half

## **bccd**

Shifted half (+1)

Operation 4 — Length: 16

## **abbcbccd**

Original half

## **bccdcdde**

Shifted half (+1)

The first half contains the original string, while the second half contains the same characters shifted by one alphabetical position.

For example:

```
Original string:  abbc
Generated string: bccd

Final string:     abbc | bccd
```

If our required character belongs to the first half, no additional shift is needed.

If our required character belongs to the second half, one additional alphabetical shift is needed.

This observation helps us find a mathematical pattern.

## **3. Understanding Binary Numbers**

Before moving towards the optimized solution, we need to understand a basic concept of binary numbers.

Normally, we represent numbers using the decimal number system, which contains ten digits from `0` to `9`.

However, the binary number system contains only two digits:

```
0 and 1
```

Every decimal number can also be represented in binary.

| Decimal number | Binary representation |
| -------------- | --------------------- |
| 0              | 000                   |
| 1              | 001                   |
| 2              | 010                   |
| 3              | 011                   |
| 4              | 100                   |
| 5              | 101                   |
| 6              | 110                   |
| 7              | 111                   |
| 8              | 1000                  |
| 9              | 1001                  |

In binary, a digit containing `1` is called a **set bit**.

For example:

```
Binary number = 1001

Number of set bits = 2
```

We can convert a decimal number into binary in JavaScript using:

```
let n = 9;

console.log(n.toString(2));

// Output: "1001"
```

However, in our optimized solution, we will count the set bits directly without converting the number into a binary string.

## **4. Finding the Hidden Pattern**

Let's compare the generated characters with their zero-based indices and binary representations.

| Position (k) | Index (k - 1) | Binary index | Number of 1s | Character |
| ------------ | ------------- | ------------ | ------------ | --------- |
| 1            | 0             | 0000         | 0            | a         |
| 2            | 1             | 0001         | 1            | b         |
| 3            | 2             | 0010         | 1            | b         |
| 4            | 3             | 0011         | 2            | c         |
| 5            | 4             | 0100         | 1            | b         |
| 6            | 5             | 0101         | 2            | c         |
| 7            | 6             | 0110         | 2            | c         |
| 8            | 7             | 0111         | 3            | d         |
| 9            | 8             | 1000         | 1            | b         |
| 10           | 9             | 1001         | 2            | c         |
| 11           | 10            | 1010         | 2            | c         |
| 12           | 11            | 1011         | 3            | d         |
| 13           | 12            | 1100         | 2            | c         |
| 14           | 13            | 1101         | 3            | d         |
| 15           | 14            | 1110         | 3            | d         |
| 16           | 15            | 1111         | 4            | e         |

After observing the table, we discover that the number of `1`s in the binary representation of the index determines the required character.

### **0**

### **0**

### **0**

### **0**

0 shifts

# **a**

### **0**

### **0**

### **0**

### **1**

1 shifts

# **b**

### **0**

### **0**

### **1**

### **1**

2 shifts

# **c**

### **0**

### **1**

### **1**

### **1**

3 shifts

# **d**

### **1**

### **1**

### **1**

### **1**

4 shifts

# **e**

For example:

```
0 set bits → a
1 set bit  → b
2 set bits → c
3 set bits → d
4 set bits → e
```

Therefore, instead of generating the entire string, we only need to find the number of set bits in `k - 1`.

## **5. Why Does This Pattern Actually Work?**

Every operation divides the generated string into two equal halves.

A binary digit tells us which half contains our required character at each level.

- `0` represents the first half, where the character remains unchanged.
- `1` represents the second half, where the character is shifted by one.

Let's understand this with `k = 10`.

```
k = 10

Index = k - 1
      = 10 - 1
      = 9

Binary representation of 9 = 1001
```

We need a string of length 16 to access index 9.

Level 1 — Length 16, index 9

**abbcbccd**

0 — First half

**bccdcdde**

1 — Second half

+1 alphabetical shift

Level 2 — Length 8, index 1

**abbc**

0 — First half

**bccd**

1 — Second half

No alphabetical shift

Level 3 — Length 4, index 1

**ab**

0 — First half

**bc**

1 — Second half

No alphabetical shift

Level 4 — Length 2, index 1

**a**

0 — First half

**b**

1 — Second half

+1 alphabetical shift

# **a**

Original character

Total shifts = 1 + 0 + 0 + 1 = 2

# **a → b → c**

When we reach the original character `a`, we have collected two alphabetical shifts.

Therefore, the answer is `c`.

Now our original string problem has become a much simpler mathematical problem:

**Count the number of&#x20;**`1`**s in the binary representation of&#x20;**`k - 1`**&#x20;and shift the character&#x20;**`a`**&#x20;by that amount.**

# **Approach**

## **Step 1: Think About Counting Binary Digits**

One simple way to count binary digits would be to convert the number into a binary string.

```
let n = 9;

let binary = n.toString(2);

let count = 0;

for (let bit of binary) {
    if (bit === "1") {
        count++;
    }
}

console.log(count); // 2
```

This works, but we are creating an additional string and using a loop.

Since we want to solve this problem using recursion, we can directly count binary digits using two mathematical operations:

```
n % 2
```

```
Math.floor(n / 2)
```

Let's understand these operations properly before writing the recursive function.

## **Step 2: Understand Why We Use&#x20;**`n % 2`

The modulo operator `%` returns the remainder after division.

For example:

```
9 % 2; // 1
8 % 2; // 0
7 % 2; // 1
6 % 2; // 0
```

When we divide a non-negative integer by `2`, the remainder is always either `0` or `1`.

Interestingly, this remainder is also the last digit of the number's binary representation.

| Number | Binary | Last binary digit | n % 2 |
| ------ | ------ | ----------------- | ----- |
| 9      | 1001   | 1                 | 1     |
| 8      | 1000   | 0                 | 0     |
| 7      | 111    | 1                 | 1     |
| 6      | 110    | 0                 | 0     |
| 5      | 101    | 1                 | 1     |
| 4      | 100    | 0                 | 0     |

For example:

```
9 ÷ 2

Quotient  = 4
Remainder = 1

9 % 2 = 1
```

Therefore, `n % 2` helps us extract the last binary digit.

If the result is `1`, we need to count one alphabetical shift.

If the result is `0`, no additional shift is needed.

## **Step 3: Understand Why We Use&#x20;**`Math.floor(n / 2)`

After extracting the last binary digit, we need to remove it so that we can process the remaining digits.

We can achieve this by dividing the number by `2`.

```
9 / 2; // 4.5
```

However, we only need the integer part of the result.

Therefore, we use `Math.floor()`.

```
Math.floor(9 / 2); // 4
```

In binary representation:

```
9 = 1001

After removing the last digit:

4 = 100
```

Let's repeat this process.

**9**

### **1**

### **0**

### **0**

### **1**

Extract: 1

Next number: 4

**4**

### **1**

### **0**

### **0**

Extract: 0

Next number: 2

**2**

### **1**

### **0**

Extract: 0

Next number: 1

**1**

### **1**

Extract: 1

Next number: 0

**Total extracted bits**\
**1 + 0 + 0 + 1 = 2**

Notice that we can extract every binary digit without actually converting the number into a binary string.

## **Step 4: Create a Recursive Helper Function**

```
function Character(n) {

}
```

The purpose of this function is to count the total number of set bits in the given number `n`.

Despite its name, this function does not return a character. It returns a number representing the total alphabetical shifts required.

For example:

```
Character(9); // 2

Character(7); // 3

Character(0); // 0
```

## **Step 5: Define the Base Case**

```
if (n === 0) return 0;
```

Every recursive function needs a stopping condition, which is known as the base case.

We keep dividing the number by `2` during every recursive call.

Eventually, the number becomes `0`.

```
9 → 4 → 2 → 1 → 0
```

When `n` becomes `0`, there are no more set bits to count.

Therefore, we return `0` and stop making further recursive calls.

Without this base condition, the function would keep calling itself with `0`, eventually causing a stack overflow.

## **Step 6: Understand the Most Important Line**

```
return (n % 2) + Character(Math.floor(n / 2));
```

This single line performs multiple operations together, which can make it difficult for beginners to understand.

Instead of understanding everything at once, let's divide it into smaller steps.

```
let currentBit = n % 2;

let nextNumber = Math.floor(n / 2);

let remainingBits = Character(nextNumber);

let total = currentBit + remainingBits;

return total;
```

Both versions perform exactly the same operations.

### **Part A: Find the current binary digit**

```
let currentBit = n % 2;
```

Suppose `n = 9`.

```
let currentBit = 9 % 2;

// currentBit = 1
```

We have found one binary digit.

### **Part B: Calculate the next number**

```
let nextNumber = Math.floor(n / 2);
```

Since `n = 9`:

```
let nextNumber = Math.floor(9 / 2);

// nextNumber = 4
```

We have removed the last binary digit.

### **Part C: Make the recursive call**

```
let remainingBits = Character(nextNumber);
```

Since `nextNumber = 4`, this becomes:

```
let remainingBits = Character(4);
```

Now, the function `Character(9)` cannot finish immediately because it needs the result of `Character(4)`.

It pauses its execution and waits for the recursive function to return its result.

This is one of the most important concepts of recursion.

### **Part D: Add the returned result**

```
let total = currentBit + remainingBits;
```

Suppose `Character(4)` returns `1`.

We already know that `currentBit = 1`.

Therefore:

```
let total = 1 + 1;

// total = 2
```

### **Part E: Return the final result**

```
return total;
```

The function returns `2`, meaning that the binary representation of `9` contains two set bits.

The complete beginner-friendly recursive function becomes:

```
function Character(n) {

    if (n === 0) return 0;

    let currentBit = n % 2;

    let nextNumber = Math.floor(n / 2);

    let remainingBits = Character(nextNumber);

    let total = currentBit + remainingBits;

    return total;
}
```

Once we understand this version, we can combine everything into a single line.

```
function Character(n) {

    if (n === 0) return 0;

    return (n % 2) + Character(Math.floor(n / 2));
}
```

# **Detailed Dry Run**

**Input:**

```
k = 10;
```

We need to find the tenth character.

Since JavaScript uses zero-based indexing:

```
Index = k - 1
      = 10 - 1
      = 9
```

Therefore, our first recursive call is:

```
Character(9);
```

Recursion works in two phases:

- **Going down:** Functions keep calling themselves with smaller inputs.
- **Coming back:** Functions return their results after reaching the base case.

## **Phase 1: Going Deeper Into Recursion**

### **Call 1: Character(9)**

```
function Character(9) {

    if (9 === 0) return 0;

    return (9 % 2) + Character(Math.floor(9 / 2));
}
```

Calculate the current bit:

```
9 % 2 = 1
```

Calculate the next number:

```
Math.floor(9 / 2) = 4
```

The return statement becomes:

```
return 1 + Character(4);
```

But we do not know the result of `Character(4)` yet.

Therefore, the addition remains pending.

```
Character(9) is waiting for Character(4).
```

### **Call 2: Character(4)**

Now a new function call starts with `n = 4`.

```
n = 4

4 === 0? No

4 % 2 = 0

Math.floor(4 / 2) = 2
```

The return statement becomes:

```
return 0 + Character(2);
```

Now `Character(4)` is also waiting.

```
Character(9) waits for Character(4).

Character(4) waits for Character(2).
```

### **Call 3: Character(2)**

```
n = 2

2 === 0? No

2 % 2 = 0

Math.floor(2 / 2) = 1
```

The return statement becomes:

```
return 0 + Character(1);
```

Now three functions are waiting for their results.

### **Call 4: Character(1)**

```
n = 1

1 === 0? No

1 % 2 = 1

Math.floor(1 / 2) = 0
```

The return statement becomes:

```
return 1 + Character(0);
```

Now we call the function with `n = 0`.

### **Call 5: Character(0)**

```
if (n === 0) return 0;
```

This time, the condition becomes true.

```
0 === 0 → true
```

Therefore:

```
return 0;
```

We have reached the base case.

No more recursive calls will be made.

## **Understanding the Call Stack**

The call stack stores information about functions that are currently executing or waiting for another function to finish.

Think of it as a stack of plates.

Whenever a new recursive function is called, it is placed on top of the stack. When a function finishes, it is removed from the top.

This follows the **LIFO (Last In, First Out)** principle.

## **Interactive recursion call stack**

Step 5/10

**Base case reached**

Character(0) returns 0

Call stack (top to bottom)

**Character(0)**

return 0

**Character(1)**

1 + Character(0)

**Character(2)**

0 + Character(1)

**Character(4)**

0 + Character(2)

**Character(9)**

1 + Character(4)

Completed functions

Functions are still waiting for the base case.

&#x20;Restart

PreviousNext&#x20;

At the deepest point of recursion, the call stack looks like this:

```
┌───────────────────────────────┐
│ Character(0) → return 0       │ ← Top
├───────────────────────────────┤
│ Character(1) → 1 + waiting    │
├───────────────────────────────┤
│ Character(2) → 0 + waiting    │
├───────────────────────────────┤
│ Character(4) → 0 + waiting    │
├───────────────────────────────┤
│ Character(9) → 1 + waiting    │ ← Bottom
└───────────────────────────────┘
```

Every previous function is waiting for the function above it to finish.

## **Phase 2: Returning From Recursion**

Now that we have reached the base case, the functions start returning their values in reverse order.

### **Return 1: Character(0)**

```
return 0;
```

Returned value:

```
Character(0) = 0
```

This value is sent back to `Character(1)`.

### **Return 2: Character(1)**

Previously, this function was waiting at:

```
return 1 + Character(0);
```

Now `Character(0)` has returned `0`.

Therefore:

```
return 1 + 0;
```

Returned value:

```
Character(1) = 1
```

This value is sent back to `Character(2)`.

### **Return 3: Character(2)**

Previously:

```
return 0 + Character(1);
```

Now `Character(1)` has returned `1`.

Therefore:

```
return 0 + 1;
```

Returned value:

```
Character(2) = 1
```

### **Return 4: Character(4)**

Previously:

```
return 0 + Character(2);
```

Now `Character(2)` has returned `1`.

Therefore:

```
return 0 + 1;
```

Returned value:

```
Character(4) = 1
```

### **Return 5: Character(9)**

Previously:

```
return 1 + Character(4);
```

Now `Character(4)` has returned `1`.

Therefore:

```
return 1 + 1;
```

Returned value:

```
Character(9) = 2
```

Finally, all recursive calls have completed.

## **Complete Recursion Diagram**

## **Complete Dry Run Table**

| Function call | Binary | Current bit | Next number | Pending expression | Final return |
| ------------- | ------ | ----------- | ----------- | ------------------ | ------------ |
| Character(9)  | 1001   | 1           | 4           | 1 + Character(4)   | 2            |
| Character(4)  | 100    | 0           | 2           | 0 + Character(2)   | 1            |
| Character(2)  | 10     | 0           | 1           | 0 + Character(1)   | 1            |
| Character(1)  | 1      | 1           | 0           | 1 + Character(0)   | 1            |
| Character(0)  | 0      | —           | —           | Base case          | 0            |

The entire recursive calculation can also be written as:

```
Character(9)

= 1 + Character(4)

= 1 + (0 + Character(2))

= 1 + (0 + (0 + Character(1)))

= 1 + (0 + (0 + (1 + Character(0))))

= 1 + (0 + (0 + (1 + 0)))

= 1 + 0 + 0 + 1 + 0

= 2
```

We have successfully counted the number of `1`s without using any loop or generating any binary string.

# **Phase 3: Convert the Result Into a Character**

After completing the recursion, we know the number of alphabetical shifts required.

Now we need to convert that number into an actual character.

```
return String.fromCharCode(97 + Character(k - 1) % 26);
```

Let's understand this line step by step.

## **1. Why Do We Use&#x20;**`k - 1`**?**

The question gives us a one-based position, but our binary pattern depends on zero-based indexing.

```
Position:   1  2  3  4
Index:      0  1  2  3
Character:  a  b  b  c
```

Therefore:

```
Character(k - 1);
```

For `k = 10`:

```
Character(10 - 1);

Character(9);

// Returns 2
```

## **2. Why Do We Use&#x20;**`% 26`**?**

The English alphabet contains 26 characters.

After reaching `z`, we need to start again from `a`.

```
a → b → c → ... → y → z → a
```

Using modulo 26 ensures that the number of shifts remains between `0` and `25`.

| Number of shifts | After % 26 | Character |
| ---------------- | ---------- | --------- |
| 0                | 0          | a         |
| 1                | 1          | b         |
| 2                | 2          | c         |
| 25               | 25         | z         |
| 26               | 0          | a         |
| 27               | 1          | b         |

For our example:

```
2 % 26; // 2
```

Under the constraints of this particular problem, the number of shifts never reaches 26. However, using `% 26` correctly represents the circular alphabet rule.

## **3. Why Do We Add 97?**

Every English character has a numerical character code.

For lowercase English letters, JavaScript's UTF-16 character codes match their ASCII codes.

| Character | Character code | Alphabetical position |
| --------- | -------------- | --------------------- |
| a         | 97             | 0                     |
| b         | 98             | 1                     |
| c         | 99             | 2                     |
| d         | 100            | 3                     |
| e         | 101            | 4                     |
| z         | 122            | 25                    |

Since our original character is `a`, we start with its character code, which is `97`.

Then we add the number of required shifts.

```
97 + 2;

// 99
```

## **4. Why Do We Use&#x20;**`String.fromCharCode()`**?**

Currently, our result is a number.

```
99
```

However, the question requires us to return a character.

JavaScript provides the `String.fromCharCode()` method to convert a numerical character code into a character.

```
String.fromCharCode(97);  // "a"

String.fromCharCode(98);  // "b"

String.fromCharCode(99);  // "c"

String.fromCharCode(100); // "d"
```

Therefore:

```
String.fromCharCode(99);

// "c"
```

## **Final Calculation**

```
k = 10

k - 1 = 9

Character(9) = 2

2 % 26 = 2

97 + 2 = 99

String.fromCharCode(99) = "c"
```

**Output:**

```
"c"
```

# **Interactive Solution Simulator**

Enter any value of k (1–500)

Index (k - 1)

# **9**

Number of set bits

# **2**

Binary representation

## **1**

## **0**

## **0**

## **1**

| n | n % 2 | Next n    | Return |
| - | ----- | --------- | ------ |
| 9 | 1     | 4         | 2      |
| 4 | 0     | 2         | 1      |
| 2 | 0     | 1         | 1      |
| 1 | 1     | 0         | 1      |
| 0 | —     | Base case | 0      |

String.fromCharCode(97 + 2 % 26)

Character code = 99

# **Answer = "c"**

# **Complexity**

## **Time Complexity: O(log k)**

In every recursive call, we divide the current number by `2`.

```
Character(Math.floor(n / 2));
```

For example, suppose `k = 17`.

The initial number will be `k - 1 = 16`.

```
16 → 8 → 4 → 2 → 1 → 0
```

Instead of reducing the number by one, we are reducing it by half.

| Initial number | Recursive calls, including base case |
| -------------- | ------------------------------------ |
| 8              | 5                                    |
| 16             | 6                                    |
| 32             | 7                                    |
| 64             | 8                                    |
| 128            | 9                                    |
| 256            | 10                                   |
| 499            | 10                                   |

Notice that even when the input becomes twice as large, we only need approximately one additional recursive call.

Each recursive call performs a constant amount of work.

Therefore, the overall time complexity is:

\\[ \boxed{O(\log k)} \\]

### **Linear generation vs logarithmic recursion**

Character generation operations compared with recursive helper calls

String simulationRecursive bit counting

01503004506008163264128256500

These are operation counts, not measured execution times.

## **Space Complexity: O(log k)**

We are not creating any additional array, object, or string to store the generated characters.

However, every recursive function call occupies some memory in the call stack.

For example:

```
Character(9)
Character(4)
Character(2)
Character(1)
Character(0)
```

At the deepest point, all five function calls are present in the call stack.

Since the number of recursive calls grows logarithmically, the auxiliary space complexity is:

\\[ \boxed{O(\log k)} \\]

For `k = 1`, both time and space complexity are constant.

# **Code**

## **Beginner-Friendly Version**

This version separates every operation into individual variables so that the recursive logic is easier to understand.

```
/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {

    function Character(n) {

        // Base case
        if (n === 0) return 0;

        // Find the last binary digit
        let currentBit = n % 2;

        // Remove the last binary digit
        let nextNumber = Math.floor(n / 2);

        // Count the remaining set bits recursively
        let remainingBits = Character(nextNumber);

        // Add the current bit and remaining set bits
        let total = currentBit + remainingBits;

        return total;
    }

    // Convert position into zero-based index
    let index = k - 1;

    // Count the required alphabetical shifts
    let shifts = Character(index);

    // Calculate the final character code
    let charCode = 97 + shifts % 26;

    // Convert the character code into a character
    return String.fromCharCode(charCode);
};
```

## **Optimized and Clean Version**

```
/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {

    function Character(n) {

        // Base case
        if (n === 0) return 0;

        // Count current bit and remaining bits
        return (n % 2) + Character(Math.floor(n / 2));
    }

    // Convert the required shifts into a character
    return String.fromCharCode(97 + Character(k - 1) % 26);
};
```

Both versions have exactly the same algorithm, time complexity, and space complexity. The second version simply combines the individual operations into fewer lines.

# **Edge Cases**

| Input (k) | Index | Binary    | Set bits | Output |
| --------- | ----- | --------- | -------- | ------ |
| 1         | 0     | 0         | 0        | "a"    |
| 2         | 1     | 1         | 1        | "b"    |
| 3         | 2     | 10        | 1        | "b"    |
| 4         | 3     | 11        | 2        | "c"    |
| 5         | 4     | 100       | 1        | "b"    |
| 8         | 7     | 111       | 3        | "d"    |
| 10        | 9     | 1001      | 2        | "c"    |
| 16        | 15    | 1111      | 4        | "e"    |
| 32        | 31    | 11111     | 5        | "f"    |
| 500       | 499   | 111110011 | 7        | "h"    |

# **Comparison of Approaches**

| Feature                        | Brute Force | Optimized Recursion |
| ------------------------------ | ----------- | ------------------- |
| Time complexity                | O(k)\*      | O(log k)            |
| Space complexity               | O(k)        | O(log k)            |
| Generates entire string        | Yes         | No                  |
| Uses loops                     | Yes         | No                  |
| Uses recursion                 | No          | Yes                 |
| Uses binary pattern            | No          | Yes                 |
| Stores generated characters    | Yes         | No                  |
| Directly calculates the answer | No          | Yes                 |

\*Assuming efficient amortized string concatenation.

# **Pattern Recognition**

## **How to Identify Similar Problems in the Future?**

Whenever you encounter a DSA problem where the size of a sequence doubles after every operation, the second half is a modified version of the first half, and the question asks for only one element at a particular position, consider whether you can use recursion or binary representation instead of generating the entire sequence.

In this problem, we followed this optimization journey:

```
Understand the question
          ↓
Generate the entire string
          ↓
Observe repeated doubling
          ↓
Identify the two equal halves
          ↓
Discover the binary pattern
          ↓
Count the number of set bits
          ↓
Use recursion to count set bits
          ↓
Convert the result into a character
          ↓
Optimized O(log k) solution
```

