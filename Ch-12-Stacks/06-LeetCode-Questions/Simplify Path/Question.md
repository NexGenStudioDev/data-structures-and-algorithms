# 71. Simplify Path

You are given an **absolute path** representing a file or directory in a Unix-style file system.

An absolute path always starts with a slash `/`.

Your task is to **simplify the given path** and return its **canonical path**.

## Unix Path Rules

A path can contain directory names, `/`, `.`, and `..`. Each of them has a specific meaning:

1. **`/` — Directory Separator**

   A slash separates different directories.

   For example:

   ```text
   /home/user/Documents
   ```

   represents:

   ```text
   home → user → Documents
   ```

2. **`.` — Current Directory**

   A single `.` means the current directory, so it does not change the path.

   For example:

   ```text
   /home/./user
   ```

   is equivalent to:

   ```text
   /home/user
   ```

3. **`..` — Parent Directory**

   A double period `..` means move to the parent directory.

   For example:

   ```text
   /home/user/Documents/..
   ```

   becomes:

   ```text
   /home/user
   ```

4. **Multiple Consecutive Slashes**

   Multiple consecutive slashes are treated as a single slash.

   For example:

   ```text
   /home//user///Documents
   ```

   is equivalent to:

   ```text
   /home/user/Documents
   ```

5. **Other Period Sequences**

   Any sequence of periods that is **not exactly `.` or `..`** is treated as a normal directory or file name.

   For example:

   ```text
   ...
   ....
   .....
   ```

   are all valid names and must **not** be treated as parent-directory operations.

---

## Canonical Path Requirements

The returned path must follow these rules:

* It must start with exactly one `/`.
* Each directory must be separated by exactly one `/`.
* It must not end with `/`, unless the path is simply `/`.
* It must not contain `.` or `..` as special directory references.
* Attempts to move above the root directory `/` should be ignored.

---

## Examples

### Example 1

**Input:**

```text
path = "/home/"
```

**Output:**

```text
"/home"
```

**Explanation:**

The trailing `/` is removed because the canonical path should not end with a slash.

---

### Example 2

**Input:**

```text
path = "/home//foo/"
```

**Output:**

```text
"/home/foo"
```

**Explanation:**

The consecutive `//` is treated as a single `/`, and the trailing `/` is removed.

---

### Example 3

**Input:**

```text
path = "/home/user/Documents/../Pictures"
```

**Output:**

```text
"/home/user/Pictures"
```

**Explanation:**

`..` means move to the parent directory, so `Documents` is removed from the path.

---

### Example 4

**Input:**

```text
path = "/../"
```

**Output:**

```text
"/"
```

**Explanation:**

The root directory `/` has no parent. Therefore, trying to move above the root has no effect.

---

### Example 5

**Input:**

```text
path = "/.../a/../b/c/../d/./"
```

**Output:**

```text
"/.../b/d"
```

**Explanation:**

* `...` is a normal directory name because it is not `.` or `..`.
* `a/..` cancels out `a`.
* `c/..` cancels out `c`.
* `.` represents the current directory and is ignored.
* The remaining directories form `/.../b/d`.

---

## Constraints

* `1 <= path.length <= 3000`
* `path` consists of English letters, digits, periods `.`, and slashes `/`.
* `path` is guaranteed to be an absolute path.
