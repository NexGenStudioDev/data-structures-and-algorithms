# 205. Isomorphic Strings – Comprehensive Guide

## 🧐 What Are "Isomorphic Strings"?

In simple terms, two strings are **isomorphic** if they share the exact same **structural pattern** of character repetition, regardless of what the actual characters are.

Imagine you have a secret code where you replace every letter in a word with a different letter. If you can turn string `s` into string `t` by following a consistent set of replacement rules, they are isomorphic.

### The "Shape" Analogy
Think of the strings as patterns of shapes:
*   `"egg"` looks like: **Shape A - Shape B - Shape B**
*   `"add"` looks like: **Shape X - Shape Y - Shape Y**
*   `"foo"` looks like: **Shape P - Shape Q - Shape Q**

Since `"egg"`, `"add"`, and `"foo"` all follow the `A-B-B` pattern, they are all isomorphic to each other.

However, `"abc"` (A-B-C, all different) is **not** isomorphic to `"egg"` (A-B-B) because the repetition structure is different.

---

## ⚙️ The Rules of Transformation

For `s` to become `t`, the following **strict rules** must apply:

1.  **Consistency (Forward Mapping):**
    *   Every time a specific character appears in `s`, it **must** be replaced by the *same* character in `t`.
    *   *Example:* If `s[0] = 'e'` maps to `t[0] = 'a'`, then *every* `'e'` in `s` must become `'a'` in `t`.

2.  **Uniqueness (No Collisions):**
    *   **No two different characters** in `s` can map to the **same** character in `t`.
    *   *Example:* You cannot have `'e'` map to `'a'` AND `'g'` map to `'a'`. Each target character in `t` must come from exactly one source character in `s`.

3.  **Order Preservation:**
    *   The relative order of characters cannot change. The first character of `s` maps to the first of `t`, the second to the second, and so on.

4.  **Self-Mapping Allowed:**
    *   A character can map to itself (e.g., `'a'` → `'a'`).

---

## 🔍 Deep Dive into Examples

### ✅ Example 1: `s = "egg"`, `t = "add"`
*   **Step 1:** `s[0] = 'e'`, `t[0] = 'a'`. Map: `e → a`.
*   **Step 2:** `s[1] = 'g'`, `t[1] = 'd'`. Map: `g → d`.
*   **Step 3:** `s[2] = 'g'`, `t[2] = 'd'`. Check map: `g` is already mapped to `d`. Match!
*   **Check Uniqueness:** `a` is used by `e`, `d` is used by `g`. No collisions.
*   **Result:** `true`

### ❌ Example 2: `s = "f11"`, `t = "b23"`
*   **Step 1:** `s[0] = 'f'`, `t[0] = 'b'`. Map: `f → b`.
*   **Step 2:** `s[1] = '1'`, `t[1] = '2'`. Map: `1 → 2`.
*   **Step 3:** `s[2] = '1'`, `t[2] = '3'`.
    *   *Conflict:* We previously mapped `1` to `2`. Now we are trying to map `1` to `3`.
    *   This violates the **Consistency** rule.
*   **Result:** `false`

### ❌ Example 3 (The "Collision" Trap): `s = "ab"`, `t = "aa"`
*   **Step 1:** `s[0] = 'a'`, `t[0] = 'a'`. Map: `a → a`.
*   **Step 2:** `s[1] = 'b'`, `t[1] = 'a'`.
    *   *Conflict:* We are trying to map `b` to `a`. But `a` is *already* mapped to by `a` in `s`.
    *   This violates the **Uniqueness** rule (Two characters in `s` cannot map to the same character in `t`).
*   **Result:** `false`

### ✅ Example 4: `s = "paper"`, `t = "title"`
*   `p` → `t`
*   `a` → `i`
*   `p` → `t` (Consistent)
*   `e` → `l`
*   `r` → `e`
*   *Check:* All mappings are unique. `t`, `i`, `l`, `e` are distinct targets.
*   **Result:** `true`

---


asdfasefsgfvsdfg
dsfgsgfvd
dsfzxv


# 205. Isomorphic Strings

## Description

Given two strings `s` and `t`, determine if they are **isomorphic**.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

**Rules for Replacement:**
*   All occurrences of a character must be replaced with another character while preserving the order of characters.
*   **No two characters** may map to the same character (the mapping must be one-to-one/bijective).
*   A character may map to itself.


### Examples

**Example 1:**
```text
Input: s = "egg", t = "add"
Output: true
Explanation: 
'e' maps to 'a'
'g' maps to 'd'
```

**Example 2:**
```text
Input: s = "f11", t = "b23"
Output: false
Explanation: 
'1' would need to map to both '2' and '3', which is not allowed.
```

**Example 3:**
```text
Input: s = "paper", t = "title"
Output: true
Explanation:
'p' -> 't'
'a' -> 'i'
'e' -> 'l'
'r' -> 'e'
```

### Constraints

*   `1 <= s.length <= 5 * 10^4`
*   `t.length == s.length`
*   `s` and `t` consist of any valid ASCII character.

### Key Logic Note
To be isomorphic, the mapping must be **bijective** (one-to-one and onto).
*   If `s[i]` maps to `t[i]`, then every occurrence of `s[i]` must map to `t[i]`.
*   No two different characters in `s` can map to the same character in `t`.
*   This effectively means you must be able to map `s -> t` AND `t -> s` without conflicts.

### Related Questions
*   [Word Pattern](https://leetcode.com/problems/word-pattern/) (Easy)
*   [Find and Replace Pattern](https://leetcode.com/problems/find-and-replace-pattern/) (Medium)

### Topics
*   Hash Table
*   String