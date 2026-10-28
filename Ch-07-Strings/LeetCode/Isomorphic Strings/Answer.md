
# 205. Isomorphic Strings

**Difficulty:** Easy

---

# Intuition

Two strings are **isomorphic** if the characters in one string can be replaced to get the other string while preserving the order of characters.

The mapping must satisfy two important rules:

1. Every character in `s` must always map to the **same** character in `t`.
2. Two different characters in `s` **cannot** map to the same character in `t`.

For example,

```text
s = "egg"
t = "add"
```

Mapping

```text
e → a
g → d
```

The character `g` always maps to `d`, so the strings are isomorphic.

However,

```text
s = "foo"
t = "bar"
```

Mapping

```text
f → b
o → a
o → r
```

Here, `o` is mapped to both `a` and `r`, which is invalid.

To efficiently verify these rules, we maintain **two hash maps**:

- One map stores the mapping from `s → t`.
- Another map stores the reverse mapping from `t → s`.

Using two maps guarantees a **one-to-one correspondence (bijection)** between characters.

---

# Approach

## Step 1

If the strings have different lengths, they can never be isomorphic.

```javascript
if (s.length !== t.length)
    return false;
```

---

## Step 2

Create two hash maps.

```javascript
let mapS = new Map();
let mapT = new Map();
```

- `mapS` stores mappings from `s` to `t`.
- `mapT` stores mappings from `t` to `s`.

---

## Step 3

Traverse both strings simultaneously.

```javascript
for (let i = 0; i < s.length; i++)
```

At every position,

```text
charS = s[i]
charT = t[i]
```

---

## Step 4

Check whether `charS` has already been mapped.

If it maps to a different character,

return `false`.

```javascript
if (
    mapS.has(charS) &&
    mapS.get(charS) !== charT
)
    return false;
```

---

## Step 5

Check the reverse mapping.

If `charT` already maps to another character,

return `false`.

```javascript
if (
    mapT.has(charT) &&
    mapT.get(charT) !== charS
)
    return false;
```

---

## Step 6

Store both mappings.

```javascript
mapS.set(charS, charT);
mapT.set(charT, charS);
```

---

## Step 7

If every character satisfies the mapping rules,

return

```text
true
```

---

# Algorithm

```text
1. If lengths are different,
      return false.

2. Create two hash maps.

3. Traverse both strings.

4. Check whether s[i] is already mapped.

5. Check whether t[i] is already mapped.

6. If either mapping is invalid,
      return false.

7. Store both mappings.

8. After traversal,
      return true.
```

---

# Dry Run

## Example 1

```text
s = "egg"

t = "add"
```

Initially

```text
mapS = {}

mapT = {}
```

---

### Index 0

```text
e

a
```

Neither exists.

Store

```text
mapS

e → a

mapT

a → e
```

---

### Index 1

```text
g

d
```

Store

```text
g → d

d → g
```

---

### Index 2

```text
g

d
```

Existing mapping

```text
g → d ✔

d → g ✔
```

Everything matches.

Return

```text
true
```

---

## Example 2

```text
s = "foo"

t = "bar"
```

Initially

```text
{}
{}
```

---

### Index 0

```text
f → b
```

Store.

---

### Index 1

```text
o → a
```

Store.

---

### Index 2

Current

```text
o

r
```

Existing mapping

```text
o → a
```

Current character

```text
r
```

Mismatch

```text
a ≠ r
```

Return

```text
false
```

---

## Example 3

```text
s = "paper"

t = "title"
```

Mappings become

```text
p → t

a → i

e → l

r → e
```

All repeated characters map consistently.

Return

```text
true
```

---

## Example 4

```text
s = "ab"

t = "aa"
```

### Index 0

```text
a → a
```

Store.

---

### Index 1

Need

```text
b → a
```

But

```text
a

already maps to

a
```

Reverse mapping fails because

```text
a

cannot map to both

a

and

b
```

Return

```text
false
```

---

# Visualization

```text
s

e   g   g
↓   ↓   ↓
a   d   d

t

Map S

e → a
g → d

Map T

a → e
d → g
```

---

# Why Two Hash Maps?

Suppose we only use one map.

Example

```text
s = "ab"

t = "aa"
```

One map would produce

```text
a → a

b → a
```

This appears valid.

But actually,

two different characters

```text
a

and

b
```

cannot map to the same character.

The reverse map detects this immediately.

---

# Code Explanation

```javascript
if (s.length !== t.length)
```

Different lengths mean the strings cannot be isomorphic.

---

```javascript
let mapS = new Map();
let mapT = new Map();
```

Create two hash maps.

---

```javascript
charS = s[i];

charT = t[i];
```

Read the current characters.

---

```javascript
if (
    mapS.has(charS) &&
    mapS.get(charS) !== charT
)
```

Check whether the current mapping from `s` is valid.

---

```javascript
if (
    mapT.has(charT) &&
    mapT.get(charT) !== charS
)
```

Check the reverse mapping.

---

```javascript
mapS.set(charS, charT);

mapT.set(charT, charS);
```

Store the mappings.

---

```javascript
return true;
```

All mappings are consistent.

---

# Correctness Proof

We maintain two maps:

- `mapS` ensures every character in `s` always maps to the same character in `t`.
- `mapT` ensures every character in `t` maps back to only one character in `s`.

If either condition is violated, the algorithm immediately returns `false`.

If the entire traversal finishes without conflicts, every mapping is one-to-one and consistent.

Therefore, the algorithm correctly determines whether the two strings are isomorphic.

---

# Time Complexity

Let

- **n = length of the strings**

Each character is processed exactly once.

Hash map operations (`get`, `set`, `has`) take **O(1)** on average.

Therefore,

```text
Time Complexity = O(n)
```

---

# Space Complexity

In the worst case, every character is unique.

Both hash maps together store at most

```text
n
```

entries.

Therefore,

```text
Space Complexity = O(n)
```

---

# JavaScript Code

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    if (s.length !== t.length)
        return false;

    let mapS = new Map();
    let mapT = new Map();

    for (let i = 0; i < s.length; i++) {

        const charS = s[i];
        const charT = t[i];

        if (
            mapS.has(charS) &&
            mapS.get(charS) !== charT
        ) {
            return false;
        }

        if (
            mapT.has(charT) &&
            mapT.get(charT) !== charS
        ) {
            return false;
        }

        mapS.set(charS, charT);
        mapT.set(charT, charS);
    }

    return true;
};
```

---

# Edge Cases

### Case 1

```text
Input

s = "egg"

t = "add"

Output

true
```

---

### Case 2

```text
Input

s = "foo"

t = "bar"

Output

false
```

---

### Case 3

```text
Input

s = "paper"

t = "title"

Output

true
```

---

### Case 4

```text
Input

s = "ab"

t = "aa"

Output

false
```

---

### Case 5

```text
Input

s = "a"

t = "z"

Output

true
```

---

### Case 6

```text
Input

s = "badc"

t = "baba"

Output

false
```

---

# Why This Solution is Optimal

- Only **one traversal** of both strings is required.
- Hash map lookups are **O(1)** on average.
- Two hash maps guarantee a valid **one-to-one mapping**.
- No nested loops are used.

This is the standard and interview-preferred solution.

---

# Key Takeaways

- Two strings are **isomorphic** when each character maps to exactly one unique character.
- A **single hash map is not enough** because different characters could incorrectly map to the same character.
- Using **two hash maps** ensures a valid bidirectional (one-to-one) mapping.
- Each character is processed only once, making the solution highly efficient.
- This approach is the optimal solution expected in coding interviews.

---

# Complexity Summary

| Metric | Complexity |
|---------|------------|
| Time | **O(n)** |
| Space | **O(n)** |

Where:

- **n = length of the input strings**

