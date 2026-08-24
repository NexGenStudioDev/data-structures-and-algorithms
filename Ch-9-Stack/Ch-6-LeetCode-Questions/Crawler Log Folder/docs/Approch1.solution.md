# Crawler Log Folder — PUSH, POP & IGNORE | Stack Pattern O(n) time complexity

# 📂 LeetCode — Crawler Log Folder

### Stack + Simulation | Interview Notes

**Problem:** Given folder navigation logs, find the **minimum number of operations needed to return to the main/root folder**.

---

## 1. 🧠 Problem Understanding

We start at the **main folder**.

We are given an array of logs:

```text
logs = ["d1/", "d2/", "./", "../", "d3/"]
```

There are only **3 types of operations**:

| Operation | Meaning                | Action   |
| --------- | ---------------------- | -------- |
| `"x/"`    | Enter child folder `x` | `push()` |
| `"../"`   | Go to parent folder    | `pop()`  |
| `"./"`    | Stay in current folder | Nothing  |

### Simple Example

```text
main
 └── d1
      └── d2
```

If we are inside `d2`:

```text
"../"
```

means:

```text
d2 → d1
```

So we remove `d2` from our path.

---

# 2. 🎯 What Do We Actually Need?

We **don't need to know the actual folder names**.

We only need to know:

> **How many folders deep are we currently?**

For example:

```text
main
 └── d1
      └── d2
           └── d3
```

We are:

```text
3 levels deep
```

Therefore, we need **3 operations** to return to `main`.

```text
d3 → d2 → d1 → main
```

Answer:

```text
3
```

---

# 3. 💡 Intuition

A **Stack** naturally represents the current folder path.

Suppose:

```text
main → d1 → d2 → d3
```

Stack:

```text
["d1/", "d2/", "d3/"]
```

### Enter a folder

```text
"d4/"
```

Push it:

```text
["d1/", "d2/", "d3/", "d4/"]
```

### Go back

```text
"../"
```

Pop the current folder:

```text
["d1/", "d2/", "d3/"]
```

### Stay

```text
"./"
```

Do nothing.

Therefore:

```text
x/  → push
../ → pop
./  → ignore
```

At the end:

```text
stack.length
```

is the answer.

---

# 4. 🧩 Algorithm

### Step 1

Create an empty stack:

```javascript
let stack = [];
```

### Step 2

Traverse every operation.

### Step 3

If operation is `"../"`:

```javascript
stack.pop();
```

### Step 4

If operation is `"./"`:

```javascript
continue;
```

### Step 5

Otherwise, it is a child folder:

```javascript
stack.push(op);
```

### Step 6

Return:

```javascript
stack.length;
```

---

# 5. 🔥 Dry Run

### Input

```text
logs = ["d1/","d2/","./","d3/","../","d31/"]
```

Initial:

```text
stack = []
```

---

### Operation 1: `"d1/"`

Child folder → `push`

```text
stack = ["d1/"]
```

Depth:

```text
1
```

---

### Operation 2: `"d2/"`

Child folder → `push`

```text
stack = ["d1/", "d2/"]
```

Depth:

```text
2
```

---

### Operation 3: `"./"`

Stay in current folder.

```text
stack = ["d1/", "d2/"]
```

Depth:

```text
2
```

Nothing changes.

---

### Operation 4: `"d3/"`

Child folder → `push`

```text
stack = ["d1/", "d2/", "d3/"]
```

Depth:

```text
3
```

---

### Operation 5: `"../"`

Go to parent → `pop`

Remove:

```text
"d3/"
```

Now:

```text
stack = ["d1/", "d2/"]
```

Depth:

```text
2
```

---

### Operation 6: `"d31/"`

Child folder → `push`

```text
stack = ["d1/", "d2/", "d31/"]
```

Final depth:

```text
3
```

Therefore:

```text
Answer = 3
```

---

# 6. 📊 Interview Dry-Run Table

|  # | Log    | Operation | Stack         | Depth |
| -: | ------ | --------- | ------------- | ----: |
|  0 | —      | Start     | `[]`          |     0 |
|  1 | `d1/`  | Push      | `[d1]`        |     1 |
|  2 | `d2/`  | Push      | `[d1,d2]`     |     2 |
|  3 | `./`   | Ignore    | `[d1,d2]`     |     2 |
|  4 | `d3/`  | Push      | `[d1,d2,d3]`  |     3 |
|  5 | `../`  | Pop       | `[d1,d2]`     |     2 |
|  6 | `d31/` | Push      | `[d1,d2,d31]` | **3** |

### Final:

```text
stack.length = 3
```

---

# 7. 💻 JavaScript Solution

```javascript
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    const stack = [];

    for (const op of logs) {
        if (op === "../") {
            // Move to parent folder
            stack.pop();
        } else if (op === "./") {
            // Stay in current folder
            continue;
        } else {
            // Enter child folder
            stack.push(op);
        }
    }

    return stack.length;
};
```

---

# 8. ⚡ Why `stack.pop()` Works?

This is the most important concept.

Suppose:

```text
main
 └── d1
      └── d2
           └── d3
```

Stack:

```text
["d1", "d2", "d3"]
```

Current folder is:

```text
d3
```

When we see:

```text
"../"
```

we need:

```text
d3 → d2
```

So we remove the **last element**:

```javascript
stack.pop();
```

Result:

```text
["d1", "d2"]
```

This is exactly **LIFO — Last In, First Out**, which is why Stack is the correct data structure.

---

# 9. 🎤 Interview Explanation

If the interviewer asks:

### **"Explain your approach."**

You can say:

> I use a stack to simulate the current folder path. Whenever I encounter a child-folder operation like `x/`, I push it onto the stack because I am moving one level deeper. For `../`, I pop the current folder because I am moving one level toward the parent. For `./`, I do nothing because the current location doesn't change. After processing all logs, the stack contains the folders from the root to the current directory, so its length represents the number of operations required to return to the main folder.

---

# 10. 🎤 Why Stack?

**Interviewer:** Why did you choose a stack?

**Answer:**

> Because folder navigation has a natural LIFO behavior. When I enter a folder, I add it to the top of the stack. When I go back using `../`, I need to remove the most recently entered folder. That's exactly the behavior provided by a stack.

---

# 11. 🎤 Do We Need the Actual Folder Names?

**No.**

We only care about the **depth**.

For example:

```text
["abc/", "xyz/", "hello/"]
```

and:

```text
["a/", "b/", "c/"]
```

both have:

```text
depth = 3
```

Therefore, the folder names themselves don't affect the answer.

---

# 12. ⚠️ Important Edge Case

Suppose:

```text
logs = ["d1/", "../", "../"]
```

After:

```text
"d1/"
```

we are at:

```text
["d1/"]
```

First `"../"`:

```text
[]
```

Now we are back at root.

The problem guarantees that we won't receive an operation that tries to move above the root, so another invalid `"../"` situation does not need special handling under the problem constraints.

---

# 13. 🚀 Complexity

Let `n` = number of logs.

### Time

```text
O(n)
```

We process every log exactly once.

Each `push()` and `pop()` is `O(1)`.

### Space

```text
O(n)
```

In the worst case, every operation enters a new folder:

```text
["d1/", "d2/", "d3/", "d4/", ...]
```

So the stack can contain `n` folders.

---

# 14. 🧠 Interview Cheat Sheet

```text
                FOLDER NAVIGATION
                       │
                       ▼
                    STACK
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
        "x/"          "../"        "./"
          │            │            │
          ▼            ▼            ▼
        PUSH          POP          IGNORE
          │            │            │
          └────────────┼────────────┘
                       ▼
                 stack.length
                       │
                       ▼
                    ANSWER
```

### Remember:

```text
"x/"   → PUSH
"../"  → POP
"./"   → NOTHING
```

### Pattern:

> **Stack + Simulation**

### Complexity:

```text
Time  → O(n)
Space → O(n)
```

### Core idea:

> **The stack represents the current path from the main folder to the current folder. Its size is the current depth.**
