# 1544. Make The String Great

**Difficulty:** Easy  
**Topics:** String, Stack

## Problem Statement

You are given a string `s` containing lowercase and uppercase English letters.

A string is called **good** if it does not contain two adjacent characters that represent the same letter but have different cases.

In other words, a string is not good if two adjacent characters satisfy either of these conditions:

- The first character is lowercase and the second character is the same letter in uppercase.
- The first character is uppercase and the second character is the same letter in lowercase.

For example, `'aA'`, `'Aa'`, `'bB'`, and `'Bb'` are bad pairs because both characters represent the same letter but have different cases.

To make the string good, you can repeatedly choose any two adjacent characters that form a bad pair and remove both of them.

Continue this process until no such pair remains.

Your task is to return the final string after removing all bad adjacent pairs.

**Note:** An empty string is also considered a good string. The final answer is guaranteed to be unique, regardless of the order in which valid pairs are removed.

## Examples

### Example 1

**Input:**
```text
s = "leEeetcode"
```

**Output:**
```text
"leetcode"
```

**Explanation:**

We can remove adjacent characters that have the same letter but different cases.

```text
"leEeetcode"
      ↓ Remove 'E' and 'e'
"leetcode"
```

After removing the bad pair, the remaining string is `"leetcode"`, which is a good string.

### Example 2

**Input:**
```text
s = "abBAcC"
```

**Output:**
```text
""
```

**Explanation:**

We repeatedly remove adjacent bad pairs until the string becomes empty.

```text
"abBAcC"
   ↓ Remove 'b' and 'B'
"aAcC"
 ↓ Remove 'a' and 'A'
"cC"
 ↓ Remove 'c' and 'C'
""
```

The final string is empty, which is a good string.

### Example 3

**Input:**
```text
s = "s"
```

**Output:**
```text
"s"
```

**Explanation:**

The string contains only one character. There are no adjacent characters to compare, so no removal is needed.

## Constraints

- \(1 \leq s.length \leq 100\)
- `s` contains only lowercase and uppercase English letters.
- The answer is guaranteed to be unique.

## Expected Result

Return the resulting string after removing all adjacent pairs that contain the same letter in different cases.