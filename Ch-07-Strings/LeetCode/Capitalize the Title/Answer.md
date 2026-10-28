
# 2129. Capitalize the Title Answer

**Difficulty:** Easy

---

# Intuition

The problem asks us to format each word in a title according to the following rules:

- If a word contains **1 or 2 characters**, convert the **entire word to lowercase**.
- If a word contains **3 or more characters**, capitalize **only the first letter** and convert the remaining letters to **lowercase**.

For example,

```text
Input

"capiTalIze tHe titLe"
```

Output

```text
"Capitalize The Title"
```

Notice that every word is processed independently.

Instead of manually checking every character, JavaScript provides built-in string methods that make the solution simple and clean.

The idea is:

1. Split the title into individual words.
2. Process every word according to its length.
3. Join all processed words back into a single string.

---

# Approach

## Step 1

Handle the empty string.

```javascript
if (title.length === 0)
    return "";
```

If the input string is empty, simply return an empty string.

> **Note:** In your code, `lenght` is a typo. It should be `length`.

---

## Step 2

Split the title into words.

```javascript
let words = title.split(" ");
```

Example

```text
"First leTTeR of EACH Word"

↓

[
"First",
"leTTeR",
"of",
"EACH",
"Word"
]
```

---

## Step 3

Process every word using `map()`.

For each word:

### If length ≤ 2

Convert the whole word to lowercase.

```javascript
word.toLowerCase()
```

Example

```text
"OF"

↓

"of"
```

---

### Otherwise

Capitalize only the first letter.

```javascript
word[0].toUpperCase() + word.slice(1).toLowerCase()
```

Example

```text
"capiTalIze"

↓

"C"

+

"apitalize"

↓

"Capitalize"
```

---

## Step 4

Join all transformed words back together.

```javascript
words.join(" ")
```

Output

```text
"First Letter of Each Word"
```

---

# Algorithm

```text
1. If the string is empty,
      return "".

2. Split the title into words.

3. Traverse each word.

4. If the word length is 1 or 2,
      convert the entire word to lowercase.

5. Otherwise,
      capitalize the first letter and
      convert the remaining letters to lowercase.

6. Join all words using spaces.

7. Return the formatted title.
```

---

# Dry Run

## Example 1

```text
Input

title = "capiTalIze tHe titLe"
```

### Step 1

Split

```text
[
"capiTalIze",
"tHe",
"titLe"
]
```

---

### Step 2

Process every word

#### Word 1

```text
"capiTalIze"

Length = 10

≥ 3
```

Result

```text
"Capitalize"
```

---

#### Word 2

```text
"tHe"

Length = 3
```

Result

```text
"The"
```

---

#### Word 3

```text
"titLe"

Length = 5
```

Result

```text
"Title"
```

---

### Step 3

Join

```text
"Capitalize The Title"
```

Output

```text
"Capitalize The Title"
```

---

## Example 2

```text
Input

title = "First leTTeR of EACH Word"
```

Split

```text
[
"First",
"leTTeR",
"of",
"EACH",
"Word"
]
```

---

Process

```text
"First"

↓

"First"

--------------------

"leTTeR"

↓

"Letter"

--------------------

"of"

↓

"of"

(length = 2)

--------------------

"EACH"

↓

"Each"

--------------------

"Word"

↓

"Word"
```

Join

```text
"First Letter of Each Word"
```

Output

```text
"First Letter of Each Word"
```

---

## Example 3

```text
Input

title = "i lOve leetcode"
```

Split

```text
[
"i",
"lOve",
"leetcode"
]
```

Process

```text
"i"

↓

"i"

(length = 1)

----------------

"lOve"

↓

"Love"

----------------

"leetcode"

↓

"Leetcode"
```

Join

```text
"i Love Leetcode"
```

Output

```text
"i Love Leetcode"
```

---

# Visualization

```text
Original

capiTalIze tHe titLe

↓

Split

+-------------+------+-------+
| capiTalIze  | tHe  | titLe |
+-------------+------+-------+

↓

Transform

+-------------+------+-------+
| Capitalize  | The  | Title |
+-------------+------+-------+

↓

Join

"Capitalize The Title"
```

---

# Why `split(" ")`?

The `split()` method divides the sentence into individual words.

Example

```javascript
"Hello World".split(" ");
```

Output

```text
["Hello", "World"]
```

---

# Why `map()`?

The `map()` method transforms every element of an array and returns a new array.

Example

```javascript
["abc","xyz"].map(word => word.toUpperCase());
```

Output

```text
["ABC","XYZ"]
```

In this problem, each word is transformed based on its length.

---

# Why `toLowerCase()`?

It converts every character into lowercase.

Example

```javascript
"HELLO".toLowerCase();
```

Output

```text
"hello"
```

---

# Why `toUpperCase()`?

It converts a character into uppercase.

Example

```javascript
"h".toUpperCase();
```

Output

```text
"H"
```

---

# Why `slice(1)`?

`slice(1)` returns the string from index `1` to the end.

Example

```javascript
"LeetCode".slice(1);
```

Output

```text
"eetCode"
```

Then

```javascript
.toLowerCase()
```

converts it into

```text
"eetcode"
```

---

# Code Explanation

```javascript
if (title.length === 0)
    return "";
```

Handle the empty string.

---

```javascript
let words = title.split(" ");
```

Convert the title into an array of words.

---

```javascript
.map(word => {
```

Process each word independently.

---

```javascript
if (word.length <= 2)
```

Check if the word has only one or two characters.

---

```javascript
return word.toLowerCase();
```

Convert short words completely to lowercase.

---

```javascript
return word[0].toUpperCase()
     + word.slice(1).toLowerCase();
```

For words of length **3 or more**:

- Capitalize the first character.
- Convert the remaining characters to lowercase.

---

```javascript
return words.join(" ");
```

Combine all transformed words into the final title.

---

# Correctness Proof

The algorithm processes every word exactly once.

For each word:

- If its length is **1 or 2**, it is converted entirely to lowercase.
- Otherwise, only the first letter is capitalized while the remaining letters are converted to lowercase.

Since every word is transformed according to the problem's rules and the original word order is preserved, the resulting string is always correct.

Therefore, the algorithm always produces the required formatted title.

---

# Time Complexity

Let:

- **n = total number of characters in the title**

Operations performed:

- `split()`
- `map()`
- `join()`

Each processes the string once.

Therefore,

```text
Time Complexity = O(n)
```

---

# Space Complexity

The algorithm creates:

- An array of words.
- A new transformed array.

Therefore,

```text
Space Complexity = O(n)
```

---

# JavaScript Code

```javascript
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {

    if (title.length === 0)
        return "";

    let words = title.split(" ").map(word => {

        if (word.length <= 2) {
            return word.toLowerCase();
        }

        return word[0].toUpperCase() +
               word.slice(1).toLowerCase();
    });

    return words.join(" ");
};
```

---

# Edge Cases

### Case 1

```text
Input

"a"

Output

"a"
```

---

### Case 2

```text
Input

"AN"

Output

"an"
```

---

### Case 3

```text
Input

"heLLo"

Output

"Hello"
```

---

### Case 4

```text
Input

"i LOVE leetcode"

Output

"i Love Leetcode"
```

---

### Case 5

```text
Input

""

Output

""
```

---

# Alternative Approach

Instead of using `split()` and `map()`, we can:

1. Traverse the string character by character.
2. Detect the beginning and end of each word.
3. Modify characters directly based on the word's length.

This avoids creating an extra array but makes the implementation more complex.

Complexities remain:

- **Time:** `O(n)`
- **Space:** `O(1)` (excluding immutable string operations)

---

# Key Takeaways

- Split the title into words using `split(" ")`.
- Use `map()` to process every word independently.
- Words with **1 or 2 characters** should be completely lowercase.
- Words with **3 or more characters** should have only the first letter capitalized.
- Use `join(" ")` to reconstruct the final title.
- The solution is clean, readable, beginner-friendly, and leverages JavaScript's built-in string methods effectively.

---

# Complexity Summary

| Metric | Complexity |
|---------|------------|
| Time | **O(n)** |
| Space | **O(n)** |

Where:

- **n = total number of characters in the input title**
