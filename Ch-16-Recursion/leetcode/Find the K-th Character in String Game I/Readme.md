# **3304. Find the K-th Character in String Game I**

**Difficulty:** Easy\
**Topics:** String, Simulation, Recursion, Bit Manipulation, Math\
**Platform:** LeetCode\
**Problem Link:** [3304. Find the K-th Character in String Game I](https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/?utm_source=chatgpt.com)

# **Problem Statement**

Alice and Bob are playing a string game.

Initially, Alice has a string called `word`, which contains only one character:

```
word = "a";
```

You are given a positive integer `k`, which represents the position of the character you need to find.

Bob repeatedly asks Alice to perform an operation that increases the length of the string.

In each operation, Alice must:

1. Traverse every character of the current string.
2. Replace each character with its next character in the English alphabet to create a new string.
3. Append the newly generated string to the end of the original string.
4. Repeat the operation until the length of `word` becomes greater than or equal to `k`.

Your task is to return the **k-th character** of the final string.

# **Understanding the Operation**

## **1. What Is the Next Alphabetical Character?**

The next alphabetical character is simply the character that comes immediately after the current character in the English alphabet.

| Current character | Next character |
| ----------------- | -------------- |
| a                 | b              |
| b                 | c              |
| c                 | d              |
| d                 | e              |
| e                 | f              |
| ...               | ...            |
| x                 | y              |
| y                 | z              |
| z                 | a              |

There is one special condition: if the current character is `z`, its next character will be `a`.

This means the alphabet works in a circular manner.

```
a → b → c → d → ... → x → y → z → a
```

## **2. What Does Append Mean?**

Appending means adding something to the end of an existing string without removing its original characters.

For example:

```
let word = "abc";
let newWord = "bcd";
```

After appending:

```
word = word + newWord;
```

The result becomes:

```
"abcbcd"
```

The original characters remain unchanged.

Original string

# **a**

# **b**

# **c**

Generate the next character of every letter

# **b**

# **c**

# **d**

Append the generated string to the original string

## **a**

## **b**

## **c**

## **b**

## **c**

## **d**

## **Final word = "abcbcd"**

**Note:** `"abc"` is only an example to understand the operation. In the actual problem, the initial string is always `"a"`.

# **Understanding the String Generation Process**

Initially:

```
word = "a"
```

## **Operation 1**

Original string:

```
a
```

Find the next alphabetical character:

```
a → b
```

Generated string:

```
b
```

Append it to the original string:

```
word = "a" + "b"

word = "ab"
```

Length of the string: `2`

## **Operation 2**

Original string:

```
ab
```

Find the next alphabetical character of every character:

| Original character | Generated character |
| ------------------ | ------------------- |
| a                  | b                   |
| b                  | c                   |

Generated string:

```
bc
```

Append it to the original string:

```
word = "ab" + "bc"

word = "abbc"
```

Length of the string: `4`

## **Operation 3**

Original string:

```
abbc
```

Generate the next alphabetical characters:

| Original character | Generated character |
| ------------------ | ------------------- |
| a                  | b                   |
| b                  | c                   |
| b                  | c                   |
| c                  | d                   |

Generated string:

```
bccd
```

Append it to the original string:

```
word = "abbc" + "bccd"

word = "abbcbccd"
```

Length of the string: `8`

## **Operation 4**

Original string:

```
abbcbccd
```

Generated string:

```
bccdcdde
```

Append it to the original string:

```
word = "abbcbccd" + "bccdcdde"

word = "abbcbccdbccdcdde"
```

Length of the string: `16`

## **Complete String Generation Table**

| Operation | Original string | Generated string | Final string     | Length |
| --------- | --------------- | ---------------- | ---------------- | ------ |
| 0         | a               | —                | a                | 1      |
| 1         | a               | b                | ab               | 2      |
| 2         | ab              | bc               | abbc             | 4      |
| 3         | abbc            | bccd             | abbcbccd         | 8      |
| 4         | abbcbccd        | bccdcdde         | abbcbccdbccdcdde | 16     |

Notice that the length of the string doubles after every operation.

```
1 → 2 → 4 → 8 → 16 → 32 → 64 → ...
```

# **Understanding the K-th Character**

The value of `k` represents the position of the character we need to return.

However, the question uses **one-based positioning**, while programming languages such as JavaScript use zero-based indexing.

For example:

```
String = "abbc"

Position:   1  2  3  4
Index:      0  1  2  3
Character:  a  b  b  c
```

| Value of k | Required position | Index | Answer |
| ---------- | ----------------- | ----- | ------ |
| 1          | First character   | 0     | a      |
| 2          | Second character  | 1     | b      |
| 3          | Third character   | 2     | b      |
| 4          | Fourth character  | 3     | c      |

For example, if `k = 4`, we need the fourth character, which is present at index `3`.

# **Example 1**

**Input:**

```
k = 5
```

**Output:**

```
"b"
```

## **Explanation**

We need to find the fifth character of the string.

Initially, `word = "a"`.

| Operation | Word     | Length | At least 5 characters? |
| --------- | -------- | ------ | ---------------------- |
| 0         | a        | 1      | No                     |
| 1         | ab       | 2      | No                     |
| 2         | abbc     | 4      | No                     |
| 3         | abbcbccd | 8      | Yes                    |

After three operations, the string contains eight characters.

Since eight is greater than or equal to five, we have enough characters to find our answer.

Final string: "abbcbccd"

1

## **a**

0

2

## **b**

1

3

## **b**

2

4

## **c**

3

5

## **b**

4

6

## **c**

5

7

## **c**

6

8

## **d**

7

Top: Position | Bottom: Index

# **5th character = "b"**

Therefore, the answer is `"b"`.

# **Example 2**

**Input:**

```
k = 10
```

**Output:**

```
"c"
```

## **Explanation**

We need to find the tenth character of the string.

Initially:

```
word = "a"
```

Perform the operations until the string contains at least ten characters.

| Operation | Word             | Length |
| --------- | ---------------- | ------ |
| 0         | a                | 1      |
| 1         | ab               | 2      |
| 2         | abbc             | 4      |
| 3         | abbcbccd         | 8      |
| 4         | abbcbccdbccdcdde | 16     |

After four operations, the string contains sixteen characters.

Final string: "abbcbccdbccdcdde"

1

## **a**

Index 0

2

## **b**

Index 1

3

## **b**

Index 2

4

## **c**

Index 3

5

## **b**

Index 4

6

## **c**

Index 5

7

## **c**

Index 6

8

## **d**

Index 7

9

## **b**

Index 8

10

## **c**

Index 9

11

## **c**

Index 10

12

## **d**

Index 11

13

## **c**

Index 12

14

## **d**

Index 13

15

## **d**

Index 14

16

## **e**

Index 15

# **10th character = "c"**

The tenth character is present at index `9`.

Therefore, the answer is `"c"`.

# **Example 3: Understanding Alphabetical Wraparound**

Suppose the current string is:

```
word = "zb"
```

Generate the next alphabetical character of each character.

| Current character | Next character |
| ----------------- | -------------- |
| z                 | a              |
| b                 | c              |

Generated string:

```
ac
```

After appending:

```
word = "zb" + "ac"

word = "zbac"
```

This example explains how the character `z` changes back to `a`.

# **Example 4: Minimum Input**

**Input:**

```
k = 1
```

**Output:**

```
"a"
```

**Explanation:**

Initially, the string is already `"a"`.

Its length is `1`, which is enough to find the first character.

Therefore, no operation is required.

# **Interactive Example**

Use the following simulator to understand how the string grows and when the operations stop.

## **String Game Simulator**

Enter k (1–500)

Operation

# **0**

Current length

# **1**

Required length

# **5**

Current word

1

a

The current string does not have enough characters. Perform another operation.

&#x20;Reset

PreviousNext operation

# **Input Format**

A positive integer `k`, representing the position of the required character.

```
k = 5;
```

# **Output Format**

Return a single lowercase English character representing the k-th character of the generated string.

```
"b"
```

# **Constraints**

\\[ 1 \leq k \leq 500 \\]

| Constraint         | Meaning                   |
| ------------------ | ------------------------- |
| Minimum value of k | 1                         |
| Maximum value of k | 500                       |
| Initial string     | Always `"a"`              |
| Character type     | Lowercase English letters |
| Alphabet size      | 26                        |
| Return type        | A single character        |

# **Additional Test Cases**

| Input   | Expected output |
| ------- | --------------- |
| k = 1   | "a"             |
| k = 2   | "b"             |
| k = 3   | "b"             |
| k = 4   | "c"             |
| k = 5   | "b"             |
| k = 6   | "c"             |
| k = 7   | "c"             |
| k = 8   | "d"             |
| k = 9   | "b"             |
| k = 10  | "c"             |
| k = 16  | "e"             |
| k = 32  | "f"             |
| k = 500 | "h"             |

# **Important Points to Remember**

- The initial string is always `"a"`.
- Every character generates its next alphabetical character.
- The original characters are never removed or replaced.
- Newly generated characters are appended at the end.
- Only the characters present at the beginning of an operation are used to generate new characters in that operation.
- After `z`, the next character is `a`.
- The string length doubles after every complete operation.
- Stop performing operations once the string contains at least `k` characters.
- Return only the required character, not the entire generated string.

