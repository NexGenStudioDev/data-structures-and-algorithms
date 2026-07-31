
# 557. Reverse Words in a String III Answer

**Difficulty:** Easy

---

# Intuition

The problem asks us to **reverse each individual word** in the string while **keeping the original order of the words unchanged**.

For example,

```text
Input

"Let's take LeetCode contest"
```

Output

```text
"s'teL ekat edoCteeL tsetnoc"
```

Notice that:

- Every word is reversed.
- The positions of the words remain exactly the same.
- Spaces between words are preserved.

Instead of reversing the entire string, we can process one word at a time.

The idea is:

1. Split the sentence into words.
2. Reverse each word individually.
3. Join all reversed words back together.

JavaScript provides built-in methods that make this implementation concise and easy to understand.

---

# Approach

## Step 1

Split the sentence into an array of words.

```javascript
let words = s.split(" ");
```

Example

```text
"Let's take LeetCode contest"

↓

[
"Let's",
"take",
"LeetCode",
"contest"
]
```

---

## Step 2

Traverse every word using `map()`.

For each word,

- Convert it into an array of characters.
- Reverse the character array.
- Join it back into a string.

```javascript
word.split("").reverse().join("")
```

Example

```text
"take"

↓

["t","a","k","e"]

↓

["e","k","a","t"]

↓

"ekat"
```

---

## Step 3

Join all reversed words back into a sentence.

```javascript
.join(" ")
```

Output

```text
"s'teL ekat edoCteeL tsetnoc"
```

---

# Algorithm

```text
1. If the string is empty, return an empty string.

2. Split the string into words.

3. For every word:
      Reverse its characters.

4. Join all reversed words using spaces.

5. Return the final string.
```

---

# Dry Run

## Example 1

```text
Input

s = "Let's take LeetCode contest"
```

### Step 1

Split

```text
[
"Let's",
"take",
"LeetCode",
"contest"
]
```

---

### Step 2

Reverse every word

```text
"Let's"

↓

"s'teL"

----------------

"take"

↓

"ekat"

----------------

"LeetCode"

↓

"edoCteeL"

----------------

"contest"

↓

"tsetnoc"
```

---

### Step 3

Join

```text
"s'teL ekat edoCteeL tsetnoc"
```

Output

```text
"s'teL ekat edoCteeL tsetnoc"
```

---

## Example 2

```text
Input

s = "God Ding"
```

Split

```text
[
"God",
"Ding"
]
```

Reverse

```text
"God"

↓

"doG"

--------------

"Ding"

↓

"gniD"
```

Join

```text
"doG gniD"
```

Output

```text
"doG gniD"
```

---

# Complete Walkthrough

Consider

```text
Input

"I love JavaScript"
```

Split

```text
[
"I",
"love",
"JavaScript"
]
```

Reverse

```text
"I"

↓

"I"

----------------

"love"

↓

"evol"

----------------

"JavaScript"

↓

"tpircSavaJ"
```

Join

```text
"I evol tpircSavaJ"
```

---

# Visualization

```text
Original

Let's take LeetCode contest

↓

Split

+-------+------+----------+---------+
| Let's | take | LeetCode | contest |
+-------+------+----------+---------+

↓

Reverse Each Word

+-------+------+----------+---------+
| s'teL | ekat | edoCteeL | tsetnoc |
+-------+------+----------+---------+

↓

Join

"s'teL ekat edoCteeL tsetnoc"
```

---

# Why `split(" ")`?

The `split()` method separates the sentence into individual words.

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

The `map()` method applies an operation to every element and returns a new array.

Example

```javascript
["abc","xyz"].map(word => word.toUpperCase());
```

Output

```text
["ABC","XYZ"]
```

Here, instead of converting to uppercase, we reverse every word.

---

# Why `reverse()`?

The `reverse()` method reverses the elements of an array.

Example

```javascript
["a","b","c"].reverse();
```

Output

```text
["c","b","a"]
```

Since strings cannot be reversed directly, we first convert them into arrays.

---

# Code Explanation

```javascript
if (s.length === 0)
    return "";
```

Handle the empty string case.

---

```javascript
s.split(" ")
```

Convert the sentence into an array of words.

---

```javascript
.map(word => {
```

Process every word individually.

---

```javascript
word.split("")
```

Convert the word into an array of characters.

---

```javascript
.reverse()
```

Reverse the characters.

---

```javascript
.join("")
```

Convert the reversed character array back into a string.

---

```javascript
.join(" ")
```

Combine all reversed words into the final sentence.

---

# Correctness Proof

The algorithm processes every word independently.

For each word:

- All characters are reversed.
- No characters are removed or added.
- The order of the words never changes.

Finally, joining the processed words with spaces reconstructs the original sentence structure.

Therefore, every word is reversed correctly while preserving the word order, proving the algorithm is correct.

---

# Time Complexity

Let:

- **n = length of the string**

Each character is processed during:

- `split()`
- `reverse()`
- `join()`

Overall,

```text
Time Complexity = O(n)
```

---

# Space Complexity

The algorithm creates:

- An array of words
- Temporary arrays of characters while reversing

Therefore,

```text
Space Complexity = O(n)
```

---

# JavaScript Code

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    if (s.length === 0)
        return "";

    return s
        .split(" ")
        .map(word => {
            return word
                .split("")
                .reverse()
                .join("");
        })
        .join(" ");
};
```

---

# Edge Cases

### Case 1

```text
Input

"Hello"

Output

"olleH"
```

---

### Case 2

```text
Input

"a"

Output

"a"
```

---

### Case 3

```text
Input

"ab cd"

Output

"ba dc"
```

---

### Case 4

```text
Input

""

Output

""
```

---

### Case 5

```text
Input

"Code"

Output

"edoC"
```

---

# Alternative Approach

Instead of using built-in methods, we can:

1. Convert the string into a character array.
2. Use two pointers to identify each word.
3. Reverse the characters in-place for every word.

This approach achieves:

- **Time:** `O(n)`
- **Space:** `O(1)` (excluding immutable string conversion)

It is more memory-efficient and is commonly asked in interviews.

---

# Key Takeaways

- Split the sentence into words using `split(" ")`.
- Use `map()` to process every word independently.
- Reverse each word with `split("")`, `reverse()`, and `join("")`.
- Join the reversed words back together using `join(" ")`.
- The order of words remains unchanged while each word's characters are reversed.
- This solution is concise, beginner-friendly, and leverages JavaScript's built-in string and array methods.

---

# Complexity Summary

| Metric | Complexity |
|---------|------------|
| Time | **O(n)** |
| Space | **O(n)** |

Where:

- **n = total number of characters in the input string**

