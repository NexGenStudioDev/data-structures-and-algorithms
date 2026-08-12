# 58. Length of Last Word Answer

**Difficulty:** Easy

---

# Intuition

The problem asks us to return the **length of the last word** in a given string.

A string may contain:

- Leading spaces
- Trailing spaces
- Multiple spaces between words

For example,

```text
"   fly me   to   the moon   "
```

If we directly split this string, we'll get empty strings because of the extra spaces.

So before splitting, we should remove all leading and trailing spaces.

After that:

1. Split the string into words.
2. Pick the last word.
3. Return its length.

This approach is simple, readable, and takes advantage of JavaScript's built-in string methods.

---

# Approach

## Step 1

Remove unnecessary spaces from both ends of the string.

```javascript
let trimmed = s.trim();
```

Example

```text
Input

"   Hello World   "

After trim()

"Hello World"
```

---

## Step 2

Split the string into individual words.

```javascript
let words = trimmed.split(" ");
```

Example

```text
"Hello World"

↓

["Hello", "World"]
```

---

## Step 3

Access the last word.

```javascript
words[words.length - 1]
```

Example

```text
["Hello", "World"]

Last Word

"World"
```

---

## Step 4

Return its length.

```javascript
return words[words.length - 1].length;
```

---

# Algorithm

```text
1. Remove leading and trailing spaces.

2. Split the string into words.

3. Access the last word.

4. Return the length of the last word.
```

---

# Dry Run

## Example 1

```text
Input

s = "Hello World"
```

### Step 1

Trim

```text
"Hello World"
```

(No change)

---

### Step 2

Split

```text
["Hello", "World"]
```

---

### Step 3

Last Word

```text
"World"
```

Length

```text
5
```

Output

```text
5
```

---

## Example 2

```text
Input

s = "   fly me   to   the moon   "
```

### Step 1

Trim

```text
"fly me   to   the moon"
```

---

### Step 2

Split

```text
[
"fly",
"me",
"",
"",
"to",
"",
"",
"the",
"moon"
]
```

Notice that multiple spaces create empty strings (`""`).

However, the last element is still `"moon"` because we removed the trailing spaces using `trim()`.

---

### Step 3

Last Word

```text
"moon"
```

Length

```text
4
```

Output

```text
4
```

---

## Example 3

```text
Input

s = "luffy is still joyboy"
```

Trim

```text
"luffy is still joyboy"
```

Split

```text
[
"luffy",
"is",
"still",
"joyboy"
]
```

Last Word

```text
"joyboy"
```

Length

```text
6
```

Output

```text
6
```

---

# Visualization

```text
Input

"   Hello World   "

          trim()

↓

"Hello World"

          split()

↓

+--------+--------+
| Hello  | World  |
+--------+--------+

               ↑
         Last Word

Length = 5
```

---

# Why `trim()`?

The `trim()` method removes whitespace from the beginning and end of a string.

Example

```javascript
let s = "   Hello World   ";

console.log(s.trim());
```

Output

```text
Hello World
```

Without using `trim()`, trailing spaces could cause incorrect processing.

---

# Why `split(" ")`?

The `split()` method divides a string into an array using the specified separator.

Example

```javascript
let str = "Hello World";

console.log(str.split(" "));
```

Output

```text
["Hello", "World"]
```

---

# Code Explanation

```javascript
let trimmed = s.trim();
```

Removes leading and trailing spaces.

---

```javascript
let words = trimmed.split(" ");
```

Converts the string into an array of words.

---

```javascript
words[words.length - 1]
```

Gets the last word.

---

```javascript
return words[words.length - 1].length;
```

Returns the number of characters in the last word.

---

# Correctness Proof

After applying `trim()`, the string has no leading or trailing spaces.

Splitting the string by spaces creates an array where the final element corresponds to the last word.

The algorithm returns the length of that last word.

Therefore, the algorithm always returns the correct answer.

---

# Time Complexity

Let **n** be the length of the string.

- `trim()` scans the string once.
- `split()` scans the string once.

Overall Time Complexity

```text
O(n)
```

---

# Space Complexity

The `split()` method creates an array containing all words.

Therefore,

```text
O(n)
```

---

# JavaScript Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let trimmed = s.trim();

    let words = trimmed.split(" ");

    return words[words.length - 1].length;
};
```

---

# Edge Cases

### Case 1

```text
Input

"Hello"

Output

5
```

---

### Case 2

```text
Input

"Hello "

Output

5
```

---

### Case 3

```text
Input

"   Hello"

Output

5
```

---

### Case 4

```text
Input

"a"

Output

1
```

---

### Case 5

```text
Input

"day"

Output

3
```

---

# Alternative Approach (More Space Efficient)

Instead of using `split()`, we can traverse the string from the end.

### Steps

1. Skip trailing spaces.
2. Count characters until another space appears.

This solution uses:

- **Time:** `O(n)`
- **Space:** `O(1)`

It is considered the optimal approach because no extra array is created.

---

# Key Takeaways

- Use `trim()` to remove unnecessary spaces.
- Use `split(" ")` to separate words.
- Access the last element using `words[words.length - 1]`.
- Return the length of the last word.
- This approach is simple, easy to understand, and ideal for beginners.
- An even more optimized solution can be achieved by traversing the string from right to left without using extra space.

---

# Complexity Summary

| Metric | Complexity |
|---------|------------|
| Time | **O(n)** |
| Space | **O(n)** |

Where:

- **n = length of the input string**

