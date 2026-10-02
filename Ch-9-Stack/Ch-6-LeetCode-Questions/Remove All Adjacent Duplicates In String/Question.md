# 1047. Remove All Adjacent Duplicates In String

**Difficulty:** Easy
**Topic:** String, Stack
**LeetCode:** 1047

---

## 📌 Problem Statement

You are given a string `s` consisting only of **lowercase English letters**.

A **duplicate removal** means:

> Choose **two adjacent characters** that are **equal** and remove both of them from the string.

You must repeatedly perform this operation **as long as possible**.

When there are no more adjacent equal characters that can be removed, return the **final remaining string**.

It is guaranteed that the final answer is **unique**, regardless of the order in which valid duplicate removals are performed.

---

## 🔹 What Does "Adjacent Duplicate" Mean?

Two characters are **adjacent duplicates** when:

1. They are next to each other.
2. They have the same value.

For example:

```text
"aa"  → duplicate
"bb"  → duplicate
"cc"  → duplicate
```

But:

```text
"ab"  → not a duplicate
"aba" → not adjacent
"abc" → no adjacent duplicates
```

---

## 🔹 Duplicate Removal Operation

Whenever you find two adjacent and equal characters:

```text
xx
```

remove **both** characters:

```text
xx → ""
```

The remaining characters then join together.

### Example:

```text
"abbaca"
```

Initially:

```text
a b b a c a
  ↑ ↑
  duplicate
```

Remove `"bb"`:

```text
"abbaca"
   ↓
"aaca"
```

Now `"aa"` is an adjacent duplicate:

```text
a a c a
↑ ↑
```

Remove `"aa"`:

```text
"ca"
```

There are no more adjacent duplicates.

Therefore:

```text
Answer = "ca"
```

---

## 🔹 Important Observation

Removing a pair can create a **new adjacent duplicate**.

For example:

```text
abbaca
```

Remove:

```text
bb
```

and we get:

```text
aaca
```

Now the two `a`s that were previously separated by `"bb"` become adjacent:

```text
aa
```

So we must continue checking until **no adjacent duplicates remain**.

---

## 🔹 Another Example

### Input

```text
s = "azxxzy"
```

Initially:

```text
a z x x z y
    ↑ ↑
```

Remove `"xx"`:

```text
"azzy"
```

Now:

```text
a z z y
  ↑ ↑
```

Remove `"zz"`:

```text
"ay"
```

No adjacent duplicates remain.

### Output

```text
"ay"
```

---

## 🔹 Example 1

```text
Input:
s = "abbaca"

Process:

abbaca
  ↓ remove "bb"

aaca
 ↓ remove "aa"

ca

Output:
"ca"
```

---

## 🔹 Example 2

```text
Input:
s = "azxxzy"

Process:

azxxzy
   ↓ remove "xx"

azzy
 ↓ remove "zz"

ay

Output:
"ay"
```

---

## 🔹 Example 3

```text
Input:
s = "aabbcc"
```

Process:

```text
aabbcc
 ↓
bbcc
 ↓
cc
 ↓
""
```

Output:

```text
""
```

The final string can be **empty**.

---

## 🔹 Example 4

```text
Input:
s = "abcde"
```

There are no adjacent equal characters.

Therefore, nothing can be removed.

Output:

```text
"abcde"
```

---

## 🔹 Example 5

```text
Input:
s = "aaaa"
```

Possible process:

```text
aaaa
 ↓ remove aa

aa
 ↓ remove aa

""
```

Output:

```text
""
```

---

## 🔹 Example 6

```text
Input:
s = "abba"
```

Process:

```text
abba
 ↓ remove "bb"

aa
 ↓ remove "aa"

""
```

Output:

```text
""
```

---

# 🎯 Your Task

Implement a function that:

1. Takes a string `s`.
2. Finds adjacent equal characters.
3. Removes both characters.
4. Continues performing removals until no adjacent duplicates remain.
5. Returns the final string.

---

## ⚠️ Important Points

* Only **adjacent** characters can be removed.
* The two characters must be **equal**.
* Whenever a pair is removed, the remaining characters become adjacent.
* A newly created adjacent duplicate must also be removed.
* Continue until **no more removals are possible**.
* The final answer is guaranteed to be unique.
* The final answer may be an **empty string**.
* `s` contains only lowercase English letters.

---

## 📏 Constraints

```text
1 <= s.length <= 10⁵
s consists of lowercase English letters.
```

Because `s.length` can be as large as **100,000**, the solution should be efficient.

### Target Complexity

```text
Time:  O(n)
Space: O(n)
```

where `n = s.length`.

---

# 🧠 Key Question to Think About

While processing the string from left to right:

> **When the current character is equal to the most recently remaining character, what should happen?**

And:

> **What data structure naturally allows us to add a character and remove the most recently added character?**

Think about this before looking at the solution.
