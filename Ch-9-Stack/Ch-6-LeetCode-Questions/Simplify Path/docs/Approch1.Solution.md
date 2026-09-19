# Simplify Path | O(n) Stack Solution


# Intuition

We are given an **absolute file path** that always starts with `/`, and our job is to convert it into its **simplified canonical path**.

For example:

```text
/home/user/Documents/../Pictures
```

The important thing to understand is that `/` separates different parts of the path.

So the first thing we can do is **split the path using `/`**:

```javascript
path.split('/')
```

For the above path, we get:

```text
["", "home", "user", "Documents", "..", "Pictures"]
```

Now each part can be handled independently.

There are **three important cases**:

### 1. Normal directory → `push()`

If the part is a normal directory name such as:

```text
home
user
Documents
Pictures
```

we store it in a Stack.

```text
Stack = [home, user, Documents]
```

---

### 2. `.` → Ignore

`.` means:

> Stay in the current directory.

So it doesn't change anything.

For example:

```text
/home/./user
```

is simply:

```text
/home/user
```

Therefore, we can ignore `.`.

---

### 3. `..` → `pop()`

`..` means:

> Go to the parent directory.

So we need to remove the **last directory we added**.

That's exactly what a Stack's `pop()` does.

For example:

```text
/home/user/Documents/..
```

Before `..`:

```text
Stack = [home, user, Documents]
```

After `..`:

```text
Stack = [home, user]
```

So:

```text
/home/user/Documents/..
```

becomes:

```text
/home/user
```

---

### What about `//`?

Multiple `/` characters are treated as a single `/`.

For example:

```text
/home//user///Documents
```

is equivalent to:

```text
/home/user/Documents
```

When we use:

```javascript
path.split('/')
```

the extra `/` creates empty strings:

```text
["", "home", "", "user", "", "", "Documents"]
```

We simply ignore those empty strings.

---

# Approach

We can solve the problem in **three simple steps**.

### Step 1: Split the path

Use `/` as the separator:

```javascript
const parts = path.split('/');
```

For example:

```text
Input:
"/home/user/Documents/../Pictures/./"
```

After splitting:

```text
[
    "",
    "home",
    "user",
    "Documents",
    "..",
    "Pictures",
    ".",
    ""
]
```

---

### Step 2: Process every part using a Stack

Create an empty Stack:

```javascript
let stack = [];
```

Then process every part.

#### If the part is empty or `.`

Ignore it:

```javascript
if (part === '' || part === '.') {
    continue;
}
```

#### If the part is `..`

Remove the last directory:

```javascript
else if (part === '..') {
    stack.pop();
}
```

If the Stack is already empty, `pop()` does nothing, which is correct because we cannot go above the root `/`.

#### Otherwise

It is a normal directory, so add it:

```javascript
else {
    stack.push(part);
}
```

---

### Step 3: Build the final path

After processing everything, the Stack contains the directories that should remain.

For example:

```text
stack = ["home", "user", "Pictures"]
```

Convert it back into a path:

```javascript
stack.join('/')
```

Result:

```text
home/user/Pictures
```

Add `/` at the beginning:

```text
/home/user/Pictures
```

That is our simplified path.

---

# Dry Run

Let's take this example:

```text
/home/user/Documents/../Pictures/./
```

### Step 1 — Split

```text
["", "home", "user", "Documents", "..", "Pictures", ".", ""]
```

### Step 2 — Process

| Part        | What it means              | Stack                     |
| ----------- | -------------------------- | ------------------------- |
| `""`        | Ignore                     | `[]`                      |
| `home`      | Directory → Push           | `[home]`                  |
| `user`      | Directory → Push           | `[home, user]`            |
| `Documents` | Directory → Push           | `[home, user, Documents]` |
| `..`        | Go back → Pop              | `[home, user]`            |
| `Pictures`  | Directory → Push           | `[home, user, Pictures]`  |
| `.`         | Current directory → Ignore | `[home, user, Pictures]`  |
| `""`        | Ignore                     | `[home, user, Pictures]`  |

Final Stack:

```text
[home, user, Pictures]
```

Join the elements:

```text
home/user/Pictures
```

Add `/`:

```text
/home/user/Pictures
```

### Final Answer

```text
/home/user/Pictures
```

---

# Important Edge Cases

### Multiple `/`

```text
Input:
"/home//foo///bar/"
```

Output:

```text
/home/foo/bar
```

Empty parts are simply ignored.

---

### Current directory `.`

```text
Input:
"/home/./user/./documents"
```

Output:

```text
/home/user/documents
```

`.` does nothing.

---

### Parent directory `..`

```text
Input:
"/home/user/../documents"
```

Output:

```text
/home/documents
```

`..` removes `user`.

---

### Going above root

```text
Input:
"/../../home"
```

Output:

```text
/home
```

We cannot move above `/`, so extra `..` at the root are ignored.

---

### `...` is a normal directory

This is an important detail.

```text
Input:
"/.../a/../b"
```

Output:

```text
/.../b
```

Why?

Because:

```text
... ≠ ..
```

Only exactly `..` means "go to the parent directory".

Therefore, `...` is treated as a normal directory name.

---

# Complexity

### Time Complexity

\(O(n)\)

where `n` is the length of the input path.

We process each part of the path once. A directory can be pushed onto the Stack once and removed at most once.

### Space Complexity

\(O(n)\)

In the worst case, the Stack can contain all directory names from the path.

---

# Code

```javascript []
/**
 * @param {string} path
 * @return {string}
 */

var simplifyPath = function (path) {
    const stack = [];

    // Split the path using "/"
    const parts = path.split('/');

    for (const part of parts) {

        // Ignore empty parts and "."
        if (part === '' || part === '.') {
            continue;
        }

        // ".." means go to the parent directory
        if (part === '..') {
            stack.pop();
        }

        // Normal directory
        else {
            stack.push(part);
        }
    }

    // Convert the stack back into a valid path
    return '/' + stack.join('/');
};
```


```python []
class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []

        # Split the path using "/"
        for part in path.split("/"):
            
            # Ignore empty parts and "."
            if part == "" or part == ".":
                continue

            # ".." means go to the parent directory
            elif part == "..":
                if stack:
                    stack.pop()

            # Normal directory
            else:
                stack.append(part)

        # Build the simplified path
        return "/" + "/".join(stack)
```

## The Whole Idea in One Line

```text
Normal directory → push()
"."              → ignore
".."             → pop()
""               → ignore
```

So the key idea is:

> **Split the path by `/`, use a Stack to keep valid directories, `push()` normal directories, ignore `.` and empty parts, and `pop()` whenever we encounter `..`.**
