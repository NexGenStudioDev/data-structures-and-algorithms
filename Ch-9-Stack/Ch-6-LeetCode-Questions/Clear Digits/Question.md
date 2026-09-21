## 🧩 LeetCode 3174 — Clear Digits

**Difficulty:** Easy
**Topic:** Stack, String

You are given a string `s` containing lowercase English letters and digits.

Your task is to remove **all digits** by repeatedly performing the following operation:

* Find the **first digit** in the string.
* Delete that digit.
* Delete the **closest non-digit character to its left**.

Return the resulting string after removing all digits.

---

### Example 1

**Input:**

```text
s = "abc"
```

**Output:**

```text
"abc"
```

**Explanation:**

There is no digit in the string, so no characters are removed.

---

### Example 2

**Input:**

```text
s = "cb34"
```

**Output:**

```text
""
```

**Explanation:**

First, we find the digit `3`.

The closest non-digit character to its left is `b`.

```text
"cb34"
   ↓
"c4"
```

Next, we find the digit `4`.

The closest non-digit character to its left is `c`.

```text
"c4"
  ↓
""
```

Therefore, the final result is:

```text
""
```

---

### Example 3

**Input:**

```text
s = "abc2d3"
```

**Output:**

```text
"ab"
```

**Explanation:**

First, we find the digit `2`.

The closest non-digit character to its left is `c`.

```text
"abc2d3"
   ↓
"abd3"
```

Next, we find the digit `3`.

The closest non-digit character to its left is `d`.

```text
"abd3"
    ↓
"ab"
```

Therefore, the final result is:

```text
"ab"
```

---

### Example 4

**Input:**

```text
s = "a1b2c3"
```

**Output:**

```text
""
```

**Explanation:**

```text
"a1b2c3"
 ↓
"b2c3"
 ↓
"c3"
 ↓
""
```

Each digit removes itself and the closest non-digit character to its left.

---

### Constraints

```text
1 <= s.length <= 100
```

* `s` consists only of lowercase English letters and digits.
* The input is guaranteed to be such that all digits can be removed.
