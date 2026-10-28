## **Intuition**

We are given a string containing uppercase and lowercase English letters. Our task is to remove two adjacent characters if they represent the same letter but have different cases.

For example, `'a'` and `'A'` are the same letter, but one is lowercase and the other is uppercase, so we remove both.

We continue removing such pairs until no more valid pairs exist.

**Example:**
- `"leEe"` → `"le"` because `'E'` and `'e'` cancel each other out, and then the remaining `'e'` and `'E'` cancel.
- `"abBA"` → `""` because all characters cancel each other out.
- `"s"` → `"s"` because there is no pair to remove.

A **stack** is a good choice because it allows us to compare the current character with the most recently added character and remove both when they form a valid pair.

## **Approach**

1. Create an empty stack to store the characters that remain in the string.
2. Iterate through each character of the input string.
3. If the stack is not empty, compare the current character with the character at the top of the stack:
   - They must be different characters.
   - Their lowercase versions must be equal.
4. If both conditions are true, remove the top character using `pop()`. This removes the previous character and the current character together.
5. Otherwise, push the current character onto the stack.
6. After processing all characters, join the stack into a string and return the result.

**Dry Run**

Input: `s = "leEe"`

| Current character | Stack before | Action | Stack after |
|---|---|---|---|
| `l` | `[]` | Push `l` | `[l]` |
| `e` | `[l]` | Push `e` | `[l, e]` |
| `E` | `[l, e]` | Remove `e` and `E` | `[l]` |
| `e` | `[l]` | Push `e` | `[l, e]` |

Output: `"le"`

The stack automatically handles newly adjacent pairs created after a removal.

## **Complexity**

- **Time Complexity:** \(O(n)\) — We iterate through the string once, and each character is pushed onto and popped from the stack at most once.
- **Space Complexity:** \(O(n)\) — In the worst case, the stack stores all characters when no valid pairs exist.

## **Code**

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    const stack = [];

    for (const chr of s) {
        const top = stack[stack.length - 1];

        if (
            stack.length > 0 &&
            top !== chr &&
            top.toLowerCase() === chr.toLowerCase()
        ) {
            stack.pop();
        } else {
            stack.push(chr);
        }
    }

    return stack.join('');
};
```

