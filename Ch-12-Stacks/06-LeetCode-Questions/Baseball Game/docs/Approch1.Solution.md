# Baseball Game — Efficient Stack Approach | 100% Runtime

## 🧠 Intuition

In this problem, every operation depends on the **previous valid scores**.

For example:

* `"C"` → remove the last score.
* `"D"` → double the last score.
* `"+"` → add the last two scores.

This is exactly what a **Stack** is good at because a stack gives us easy access to the **most recently added elements**.

So, we keep all valid scores inside a stack.

```text
Stack → [5, 10, 15]
                 ↑
             Last score
```

---

# 🔑 Operations

There are only **4 cases** to handle.

### 1. Number → Add Score

If the operation is a number:

```text
"5"
```

Simply push it into the stack.

```text
[] → [5]
```

---

### 2. `"C"` → Cancel Last Score

`"C"` means remove the previous score.

```text
[5, 10]
```

After `"C"`:

```text
[5]
```

Use:

```javascript
stack.pop();
```

---

### 3. `"D"` → Double Last Score

`"D"` means:

> Take the last score and multiply it by 2.

```text
[5, 10]
```

Last score:

```text
10
```

Double it:

```text
10 × 2 = 20
```

Stack:

```text
[5, 10, 20]
```

---

### 4. `"+"` → Add Last Two Scores

`"+"` means:

> Add the previous two scores and record the result.

Example:

```text
[5, 10]
```

Last two scores:

```text
5 + 10 = 15
```

So:

```text
[5, 10, 15]
```

⚠️ **Important:** We don't remove `5` and `10` permanently. They must remain in the stack.

---

# 📝 Example


```text
operations = ["5", "2", "C", "D", "+"]
```

![Screenshot_20260822_221713.png](https://assets.leetcode.com/users/images/b04983d0-f9ba-4458-a79b-fb678d822a7c_1787417264.401277.png)


Start:

```text
stack = []
```

![Screenshot_20260822_221801.png](https://assets.leetcode.com/users/images/b31824bf-e8fd-467b-bae0-04a0c01b6b96_1787417305.7337759.png)



### Step 1 → `"5"`

Number → push `5`

```text
[] → [5]
```

![Screenshot_20260822_221838.png](https://assets.leetcode.com/users/images/b7a02fc4-d485-41bf-b8cb-51618e67fb2b_1787417343.7392552.png)


---

### Step 2 → `"2"`



Number → push `2`

```text
[5] → [5, 2]
```



![Screenshot_20260822_221902.png](https://assets.leetcode.com/users/images/462c18c8-b69e-4d79-8cd8-940c6d268b44_1787417369.4498367.png)


---

### Step 3 → `"C"`

Remove last score:

```text
[5, 2] → [5]
```

`2` is cancelled.

![Screenshot_20260822_221944.png](https://assets.leetcode.com/users/images/9ba7bc4c-5174-45a0-84b7-96931bad940b_1787417414.1725898.png)


---

### Step 4 → `"D"`

Double last score:

```text
5 × 2 = 10
```

```text
[5] → [5, 10]
```

![Screenshot_20260822_222010.png](https://assets.leetcode.com/users/images/50541373-8eb4-4822-887d-1ac9fc36a522_1787417438.0239658.png)


---

### Step 5 → `"+"`

Add last two scores:

```text
5 + 10 = 15
```

Add `15` while keeping `5` and `10`:

```text
[5, 10] → [5, 10, 15]
```
![Screenshot_20260822_222141.png](https://assets.leetcode.com/users/images/37a3bed6-b1e3-42aa-ba62-75cf074f3deb_1787417525.4522865.png)



---

# 🎯 Final Stack

```text
[5, 10, 15]
```

Calculate total:

```text
5 + 10 + 15
= 30
```

### Answer

```text
30
```

---

# 💡 How `"+"` Works in Code

Suppose:

```javascript
stack = [5, 10];
```

We need the last two values.

```javascript
let last = stack.pop();        // 10
let secondLast = stack.pop();  // 5
```

Now:

```text
stack = []
```

Calculate:

```javascript
let newScore = last + secondLast;
```

```text
10 + 5 = 15
```

Put the old scores back:

```javascript
stack.push(secondLast); // 5
stack.push(last);       // 10
stack.push(newScore);   // 15
```

Final:

```text
[5, 10, 15]
```

### Why restore them?

Because `"+"` **adds a new score**. It does not remove the previous two scores.

---

# 🚀 Code

```javascript
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {

    let stack = [];

    for (let op of operations) {

        // Number → add new score
        if (op !== 'C' && op !== 'D' && op !== '+') {
            stack.push(parseInt(op, 10));
        }

        // C → remove last score
        else if (op === 'C') {
            stack.pop();
        }

        // D → double last score
        else if (op === 'D') {
            let last = stack[stack.length - 1];
            stack.push(last * 2);
        }

        // + → add last two scores
        else {
            let last = stack.pop();
            let secondLast = stack.pop();

            let newScore = last + secondLast;

            // Restore previous scores
            stack.push(secondLast);
            stack.push(last);

            // Add new score
            stack.push(newScore);
        }
    }

    // Sum all valid scores
    return stack.reduce((sum, score) => sum + score, 0);
};
```

---

# ⏱️ Complexity

### Time

We process every operation once.

```text
O(n)
```

The final `reduce()` is also `O(n)`.

So overall:

**Time: `O(n)`**

### Space

The stack can contain up to `n` scores.

**Space: `O(n)`**

---

# 📌 Quick Notes

```text
NUMBER → push
C      → pop
D      → last × 2 → push
+      → last + secondLast → push
```

### Stack Operations

```javascript
stack.push(x);              // Add
stack.pop();                // Remove last
stack[stack.length - 1];    // See last
```

### Remember

> **When a problem repeatedly asks for the previous/last elements and supports undo/remove operations, think about STACK.**
