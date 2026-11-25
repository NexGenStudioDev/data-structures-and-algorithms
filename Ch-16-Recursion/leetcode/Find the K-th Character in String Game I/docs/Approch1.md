# **Intuition**

Initially, we are given a string `word = "a"` and a positive integer `k`.

Our task is to find the k-th character after performing the operations described in the problem.

In each operation, we need to generate a new string by replacing every character of the existing string with its next alphabetical character and append it to the original string.

For example:

```
a → b
b → c
c → d
d → e
...
z → a
```

Let's understand how the string grows after each operation.

```
Initial string: "a"

Operation 1:
"a" + "b" = "ab"

Operation 2:
"ab" + "bc" = "abbc"

Operation 3:
"abbc" + "bccd" = "abbcbccd"

Operation 4:
"abbcbccd" + "bccdcdde" = "abbcbccdbccdcdde"
```

Our first thought is to generate the string until its length becomes greater than or equal to `k`.

Once the required length is reached, we can directly return the character at index `k - 1`, because JavaScript follows zero-based indexing.

## **How Can We Find the Next Alphabetical Character?**

Initially, we might think about creating an object that stores every character and its next alphabetical character.

```
let mapping = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    // Remaining characters
    y: "z",
    z: "a"
};
```

Now, whenever we want to find the next character, we can simply write:

```
mapping["a"]; // "b"
mapping["b"]; // "c"
mapping["z"]; // "a"
```

This approach works, but we need to manually define all 26 alphabetical characters.

Instead, JavaScript provides two useful methods that allow us to calculate the next character directly.

| Method                  | Purpose                                      |
| ----------------------- | -------------------------------------------- |
| `charCodeAt()`          | Converts a character into its numerical code |
| `String.fromCharCode()` | Converts a numerical code into a character   |

## **Understanding Character Codes**

Every English alphabetical character has a numerical code.

For lowercase English letters, their UTF-16 character codes are the same as their ASCII codes.

| Character | Character code |
| --------- | -------------- |
| a         | 97             |
| b         | 98             |
| c         | 99             |
| d         | 100            |
| e         | 101            |
| ...       | ...            |
| y         | 121            |
| z         | 122            |

We can use `charCodeAt()` to find the numerical code of a character.

```
"a".charCodeAt(0); // 97
"b".charCodeAt(0); // 98
"c".charCodeAt(0); // 99
```

Similarly, we can convert a numerical code back into a character.

```
String.fromCharCode(97); // "a"
String.fromCharCode(98); // "b"
String.fromCharCode(99); // "c"
```

Now, finding the next alphabetical character becomes simple.

```
let ch = "a";

let code = ch.charCodeAt(0);

let nextCode = code + 1;

let nextCharacter = String.fromCharCode(nextCode);

console.log(nextCharacter); // "b"
```

## **What Happens When the Character Is&#x20;**`z`**?**

If we simply increase the character code of `z` by one, we will get an incorrect result.

```
"z".charCodeAt(0); // 122

String.fromCharCode(123); // "{"
```

According to the problem, after `z`, we must return to `a`.

To solve this problem, we use the modulo operator `%`.

There are 26 characters in the English alphabet. We can represent them using positions from 0 to 25.

Modulo 26 allows us to return to the beginning of the alphabet after reaching z.

This is why we use the following expression:

```
String.fromCharCode((ch.charCodeAt(0) - 97 + 1) % 26 + 97);
```

# **Approach**

## **Step 1: Initialize the String**

```
let word = "a";
```

According to the problem, our initial string contains only the character `a`.

We will use this variable to store the generated string.

## **Step 2: Create a While Loop**

```
while (word.length < k) {

}
```

We continue generating characters as long as the current string length is smaller than `k`.

For example, if `k = 5`:

| Operation | Word     | Length | Continue? |
| --------- | -------- | ------ | --------- |
| 0         | a        | 1      | Yes       |
| 1         | ab       | 2      | Yes       |
| 2         | abbc     | 4      | Yes       |
| 3         | abbcbccd | 8      | No        |

Once the length becomes greater than or equal to `k`, the loop stops.

## **Step 3: Traverse Every Character**

```
for (let ch of word) {

}
```

The `for...of` loop allows us to access every character of the string directly.

For example:

```
let word = "abc";

for (let ch of word) {
    console.log(ch);
}
```

Output:

```
a
b
c
```

We do not need to maintain an additional index because `ch` directly contains the current character.

## **Step 4: Generate the Next Alphabetical Character**

```
String.fromCharCode((ch.charCodeAt(0) - 97 + 1) % 26 + 97);
```

This is the most important line of our solution.

Although it looks complicated, it performs six simple operations.

Let's rewrite it in a more readable way.

```
let code = ch.charCodeAt(0);

let position = code - 97;

let nextPosition = position + 1;

let circularPosition = nextPosition % 26;

let nextCode = circularPosition + 97;

let nextCharacter = String.fromCharCode(nextCode);
```

Both versions perform exactly the same operations.

### **Part A:&#x20;**`ch.charCodeAt(0)`

Convert the current character into its numerical code.

```
let ch = "b";

ch.charCodeAt(0); // 98
```

### **Part B: Subtract 97**

```
ch.charCodeAt(0) - 97
```

We subtract `97` because the character code of `a` is `97`.

This converts the character code into a zero-based alphabetical position.

| Character | Character code | After subtracting 97 |
| --------- | -------------- | -------------------- |
| a         | 97             | 0                    |
| b         | 98             | 1                    |
| c         | 99             | 2                    |
| d         | 100            | 3                    |
| z         | 122            | 25                   |

Now, we can work with positions between 0 and 25 instead of character codes between 97 and 122.

### **Part C: Add 1**

```
ch.charCodeAt(0) - 97 + 1
```

We add `1` to move to the next alphabetical position.

```
a: 0 + 1 = 1 → b
b: 1 + 1 = 2 → c
c: 2 + 1 = 3 → d
```

### **Part D: Modulo 26**

```
(ch.charCodeAt(0) - 97 + 1) % 26
```

We use `% 26` to ensure that the alphabetical position always remains between 0 and 25.

For example:

```
1 % 26 = 1
2 % 26 = 2
25 % 26 = 25
26 % 26 = 0
```

When the current character is `z`, its next position becomes `26`.

After applying modulo:

```
26 % 26; // 0
```

Position `0` represents `a`.

### **Part E: Add 97 Again**

```
(ch.charCodeAt(0) - 97 + 1) % 26 + 97
```

Previously, we subtracted `97` to obtain the alphabetical position.

Now, we add `97` again to convert the position back into a valid character code.

```
Position 0 + 97 = 97 → a
Position 1 + 97 = 98 → b
Position 2 + 97 = 99 → c
```

### **Part F: Convert Back into a Character**

```
String.fromCharCode(...)
```

Finally, we convert the calculated numerical code into an actual character.

### **Interactive Character Conversion**

Select the current characterz

Current character

## **z**

charCodeAt(0)

## **122**

Subtract 97

## **25**

Add 1

## **26**

Modulo 26

## **0**

Add 97

## **97**

String.fromCharCode()

# **"a"**

## **Step 5: Append the Generated Character**

```
word += String.fromCharCode((ch.charCodeAt(0) - 97 + 1) % 26 + 97);
```

The `+=` operator appends the newly generated character to the existing string.

It is equivalent to writing:

```
word = word + nextCharacter;
```

For example, suppose our existing string is `"abc"`.

| Current character | Generated character | Updated word |
| ----------------- | ------------------- | ------------ |
| a                 | b                   | abcb         |
| b                 | c                   | abcbc        |
| c                 | d                   | abcbcd       |

After completing the loop, our string becomes:

```
Original string:  abc
Generated string: bcd

Final string:     abcbcd
```

## **Important: Why Does the For Loop Not Run Forever?**

We are traversing `word` while also appending new characters to `word`.

```
for (let ch of word) {
    word += nextCharacter;
}
```

At first, it may look like the loop will never stop because the string keeps growing.

However, JavaScript strings are immutable. When the `for...of` loop starts, its iterator uses the original string value.

Appending a character creates a new string value and assigns it to `word`. It does not change the string value that the current iterator is traversing.

For example:

```
let word = "ab";

for (let ch of word) {
    word += String.fromCharCode(ch.charCodeAt(0) + 1);
}
```

The loop processes only `a` and `b`.

```
Original string: "ab"

Iteration 1:
ch = "a"
word = "abb"

Iteration 2:
ch = "b"
word = "abbc"

Loop ends.
```

The newly appended characters will be processed in the next operation of the `while` loop.

## **Step 6: Return the Required Character**

```
return word[k - 1];
```

The problem uses one-based positions, while JavaScript strings use zero-based indexing.

```
Position:  1  2  3  4
Index:     0  1  2  3
Character: a  b  b  c
```

Therefore, to find the k-th character, we access index `k - 1`.

# **Dry Run**

**Input:**

```
k = 5;
```

Initially:

```
word = "a";
```

## **Operation 1**

Check the while condition:

```
word.length < k
1 < 5 → true
```

The original string is `"a"`.

| ch | Character code | Calculation             | Generated | Updated word |
| -- | -------------- | ----------------------- | --------- | ------------ |
| a  | 97             | (97 − 97 + 1) % 26 + 97 | b         | ab           |

After operation 1:

```
word = "ab"
Length = 2
```

## **Operation 2**

Check the while condition:

```
2 < 5 → true
```

The original string is `"ab"`.

| ch | Character code | Calculation             | Generated | Updated word |
| -- | -------------- | ----------------------- | --------- | ------------ |
| a  | 97             | (97 − 97 + 1) % 26 + 97 | b         | abb          |
| b  | 98             | (98 − 97 + 1) % 26 + 97 | c         | abbc         |

After operation 2:

```
word = "abbc"
Length = 4
```

## **Operation 3**

Check the while condition:

```
4 < 5 → true
```

The original string is `"abbc"`.

| ch | Character code | Generated | Updated word |
| -- | -------------- | --------- | ------------ |
| a  | 97             | b         | abbcb        |
| b  | 98             | c         | abbcbc       |
| b  | 98             | c         | abbcbcc      |
| c  | 99             | d         | abbcbccd     |

After operation 3:

```
word = "abbcbccd"
Length = 8
```

## **Operation 4**

Check the while condition again:

```
8 < 5 → false
```

The loop stops.

## **Complete Dry Run Visualization**

## **String generation simulator**

Enter k (1–64)

Operation

# **0**

String length

# **1**

Target index

# **4**

0

## **a**

Original

New characters

Answer

Length 1 is smaller than 5. Generate the next string.

&#x20;Reset

PreviousNext operation

## **Final Calculation**

```
word = "abbcbccd"

Index:      0  1  2  3  4  5  6  7
Character:  a  b  b  c  b  c  c  d
                        ↑
                      k - 1
```

```
return word[k - 1];

return word[5 - 1];

return word[4];
```

**Output:**

```
"b"
```

# **Complexity**

## **Time Complexity: O(k)**

At every operation, the length of the string doubles.

```
1 → 2 → 4 → 8 → 16 → 32 → ...
```

Although the outer `while` loop runs approximately `log₂(k)` times, the inner `for...of` loop processes a different number of characters in every operation.

For example, if `k = 16`:

| Operation | Characters processed |
| --------- | -------------------- |
| 1         | 1                    |
| 2         | 2                    |
| 3         | 4                    |
| 4         | 8                    |
| Total     | 15                   |

The total number of characters processed follows a geometric series.

\\[ 1+2+4+8+\cdots+2^{m-1}=2^m-1 \\]

Here, \\(m=\lceil\log_2 k\rceil\\).

The final string length is at least `k` but smaller than `2k`.

Therefore, assuming amortized constant-time string concatenation:

\\[ \boxed{O(k)} \\]

**Note:** JavaScript strings are immutable. If the JavaScript engine copies the entire string during every concatenation, the worst-case time complexity can become O(k²). The commonly stated O(k) complexity assumes efficient string concatenation.

## **Space Complexity: O(k)**

We use the variable `word` to store the generated string.

The final string contains at least `k` characters but fewer than `2k` characters.

Therefore, the overall space complexity is:

\\[ \boxed{O(k)} \\]

# **Code**

```
/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {

    // Initialize the string
    let word = "a";

    // Continue until the required length is reached
    while (word.length < k) {

        // Traverse the original string of this operation
        for (let ch of word) {

            // Generate and append the next alphabetical character
            word += String.fromCharCode(
                (ch.charCodeAt(0) - 97 + 1) % 26 + 97
            );
        }
    }

    // Return the k-th character using zero-based indexing
    return word[k - 1];
};
```

# **Edge Cases**

| Input (k) | Generated string | Output |
| --------- | ---------------- | ------ |
| 1         | a                | a      |
| 2         | ab               | b      |
| 3         | abbc             | b      |
| 4         | abbc             | c      |
| 5         | abbcbccd         | b      |
| 8         | abbcbccd         | d      |
| 10        | abbcbccdbccdcdde | c      |
| 16        | abbcbccdbccdcdde | e      |

