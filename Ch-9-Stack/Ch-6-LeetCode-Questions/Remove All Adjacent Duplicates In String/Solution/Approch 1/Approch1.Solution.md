# Intuition

We need to remove **two adjacent characters if they are the same**.

For example:

```text
"aa" → remove
"bb" → remove
"cc" → remove
```

We can use a **stack** to solve this easily.

The important idea is:

> The **top of the stack** is the last character that is currently present.

So, for every character in the string, we compare it with the **top of the stack**.

### Two cases

**1. Current character is equal to stack top**

Then we have found two adjacent equal characters.

```text
stack = [a, b]
current = b

top = b
current = b

b == b
```

So we remove the top:

```text
stack.pop()
```

Both `b`s are effectively removed.

---

**2. Current character is different from stack top**

There is no duplicate, so we simply add the current character:

```text
stack.push(char)
```

---

### Example

```text
s = "abbaca"
```

We process the string **one character at a time** and compare each character with the **top of the stack**.

### Step 1 — Current character = `'a'`

The stack is empty, so there is nothing to compare.

```text
current = 'a'
stack = []
```

![Screenshot_20261002_234331.png](https://assets.leetcode.com/users/images/5b9adeb0-6698-43de-b03d-3681269c35d3_1790964874.1300743.png)



Push `'a'`:

![Screenshot_20261002_232043.png](https://assets.leetcode.com/users/images/c50676d4-d451-4fd0-bae4-408a33839c28_1790964859.1560915.png)

---

### Step 2 — Current character = `'b'`

The top of the stack is `'a'`.

```text
current = 'b'
top = 'a'
```

![Screenshot_20261002_234528.png](https://assets.leetcode.com/users/images/af5491b2-6a33-4289-8b17-4ab432818119_1790964971.2036097.png)


They are different:

```text
'b' !== 'a'
```

So push `'b'`:

![Screenshot_20261002_234652.png](https://assets.leetcode.com/users/images/d77ecb34-d204-447f-8d63-6db7a9729c7f_1790965055.3742032.png)


---

### Step 3 — Current character = `'b'`

The top of the stack is `'b'`.

```text
current = 'b'
top = 'b'
```

![Screenshot_20261002_234755.png](https://assets.leetcode.com/users/images/a83ef667-435c-420d-842b-90fec0447661_1790965119.0700471.png)


They are equal:

```text
'b' === 'b'
```

So we found an adjacent duplicate:

```text
"bb"
```

Remove the top element:

```text
stack.pop()
```

Now:

![Screenshot_20261002_232043.png](https://assets.leetcode.com/users/images/c50676d4-d451-4fd0-bae4-408a33839c28_1790964859.1560915.png)


The current `'b'` is **not pushed**, because both `'b'` characters are removed.

---

### Step 4 — Current character = `'a'`

The top of the stack is `'a'`.

![Screenshot_20261003_000602.png](https://assets.leetcode.com/users/images/d906b307-b37d-4eaf-bc36-b80c8a022a3e_1790966215.0745535.png)

```text
current = 'a'
top = 'a'
```

They are equal:

```text
'a' === 'a'
```

So we found another duplicate:

```text
"aa"
```

Remove the top:

```text
stack.pop()
```

Now:

![Screenshot_20261003_000914.png](https://assets.leetcode.com/users/images/0de579ab-6f28-4d78-9153-1ad05ee1f7b2_1790966408.4420078.png)


Both `'a'` characters are removed.

---

### Step 5 — Current character = `'c'`

The stack is empty.

```text
current = 'c'
stack = []
```

![Screenshot_20261003_001735.png](https://assets.leetcode.com/users/images/9cd67e98-185e-4522-bab9-98873fc65cb4_1790966895.10945.png)


There is nothing to compare, so push `'c'`:

```text
stack = ['c']
```
![Screenshot_20261003_001709.png](https://assets.leetcode.com/users/images/424d4bac-caec-47ab-852f-e5fb867845a0_1790966921.5681562.png)



---

### Step 6 — Current character = `'a'`

The top of the stack is `'c'`.

```text
current = 'a'
top = 'c'
```

![Screenshot_20261003_001900.png](https://assets.leetcode.com/users/images/7be0254f-51f5-4e92-a12b-1ae55357981e_1790966982.4006228.png)


They are different:

```text
'a' !== 'c'
```

So push `'a'`:

```text
stack = ['c', 'a']
```


![Screenshot_20261003_001956.png](https://assets.leetcode.com/users/images/17d244cd-7537-44a8-afe6-e2122cbd9184_1790967038.8368196.png)



---

### Complete Dry Run

| Step | Current character | Stack before | Comparison | Action   | Stack after  |
| ---- | ----------------- | ------------ | ---------- | -------- | ------------ |
| 1    | `'a'`             | `[]`         | Empty      | Push `a` | `['a']`      |
| 2    | `'b'`             | `['a']`      | `a !== b`  | Push `b` | `['a', 'b']` |
| 3    | `'b'`             | `['a', 'b']` | `b === b`  | Pop `b`  | `['a']`      |
| 4    | `'a'`             | `['a']`      | `a === a`  | Pop `a`  | `[]`         |
| 5    | `'c'`             | `[]`         | Empty      | Push `c` | `['c']`      |
| 6    | `'a'`             | `['c']`      | `c !== a`  | Push `a` | `['c', 'a']` |

Finally:

```text
stack = ['c', 'a']
```

Convert the stack into a string:

```javascript
stack.join('')
```

Result:

```text
"ca"
```

### Final Answer

```text
"ca"
```

### The important pattern

```text
Current character
       ↓
Compare with stack top
       ↓
 ┌─────┴─────┐
 ↓           ↓
Same       Different
 ↓           ↓
pop()      push()
```

So, **same → remove the top, different → add the character**.



# Approach

1. Create an empty `stack`.
2. Traverse the string from left to right.
3. For every character, check the **top element of the stack**.
4. If the top element is equal to the current character:

   * Remove the top using `pop()`.
   * This means both equal characters are removed.
5. If they are different:

   * Add the current character using `push()`.
6. After processing the complete string, join the stack and return it.

### Why does this work?

Suppose we have:

```text
abbaca
```

After removing `bb`:

```text
aaca
```

Now the two `a`s become adjacent.

Our stack automatically handles this:

```text
a → [a]
b → [a,b]
b → [a]       ← bb removed
a → []        ← aa removed
```

So we don't need to manually modify the string or repeatedly search for duplicates.

The stack always keeps the **characters that have survived so far**.

# Complexity

* **Time complexity:** \(O(n)\)

We visit every character once.

Each character can be:

* pushed into the stack once
* popped from the stack at most once

So the total work is `O(n)`.

* **Space complexity:** \(O(n)\)

In the worst case, there are no duplicates and all characters are stored in the stack.

# Code

```javascript
/**
 * @param {string} s
 * @return {string}
 */

var removeDuplicates = function (s) {

    let stack = []

    for (const char of s) {

        let len = stack.length - 1

        if (stack[len] === char) {
            stack.pop()
        } else {
            stack.push(char)
        }

    }

    return stack.join('')

};
```

### ⭐ Remember

The main pattern for this problem is:

```text
current character == stack top
            ↓
          YES
            ↓
          pop()

          NO
            ↓
          push()
```

**Stack = characters that are still remaining after all removals so far.**
