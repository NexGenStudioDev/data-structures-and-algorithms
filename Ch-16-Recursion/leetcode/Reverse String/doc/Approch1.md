# 🔄 344. Reverse String — Recursive Two-Pointer Approach

The [runnable JavaScript solution](./code/index.js) uses iterative two-pointer swaps. It takes O(n) time and O(1) auxiliary space and supports the full input range. The recursive walkthrough below illustrates the same swaps and uses O(n) call-stack space.

**Difficulty:** Easy\
**Topics:** Array, String, Two Pointers, Recursion\
**LeetCode:** [https://leetcode.com/problems/reverse-string/](https://leetcode.com/problems/reverse-string/)

## Intuition

We are given an array of characters `s`, and our task is to **reverse the array in-place**, meaning we must modify the original array without creating another array.

For example:

```
Input:  ["h", "e", "l", "l", "o"]
Output: ["o", "l", "l", "e", "h"]
```

My first thought was that reversing an array simply means **swapping the characters from opposite ends**.

- The first character should move to the last position.
- The last character should move to the first position.
- The second character should move to the second-last position.
- This process continues until we reach the middle of the array.

Instead of using a traditional `for` or `while` loop, we can solve this problem using **recursion combined with the two-pointer technique**.

### Key Observation

We only need two pointers:

- `P1` — points to the beginning of the array.
- `P2` — points to the end of the array.

At every recursive call, we swap the characters at these two positions and move both pointers toward the center.

```
P1 moves → from left to right
P2 moves ← from right to left
```

Once both pointers meet or cross each other, the entire array has been reversed.

The important idea is that **recursion replaces the loop**. Each recursive call handles one pair of characters, while the next call handles the remaining inner portion of the array.

---

## Approach

We will use the **Recursive Two-Pointer Approach**.

### Step 1: Create a Recursive Helper Function

First, we create a helper function called `reverse(P1, P2)`.

```
function reverse(P1, P2) {
    // Recursive logic
}
```

Here:

- `P1` represents the left index.
- `P2` represents the right index.

The helper function will swap the characters and call itself with updated pointer positions.

### Step 2: Define the Base Case

Every recursive function must have a **base case**, otherwise it may continue calling itself indefinitely.

```
if (P1 >= P2) {
    return;
}
```

Why do we use `P1 >= P2`?

There are two possible situations:

**Case 1: Both pointers meet (`P1 === P2`)**

This happens when the array has an odd number of characters.

```
["a", "b", "c", "b", "a"]
             ↑
           P1, P2
```

The middle character does not need to be swapped because it is already in its correct position.

**Case 2: Both pointers cross (`P1 > P2`)**

This happens when the array has an even number of characters.

After swapping the final pair of characters, both pointers cross each other.

At this point, all required swaps have been completed.

Therefore, we stop the recursion using `return`.

### Step 3: Swap the Characters

Next, we swap the characters at indexes `P1` and `P2`.

```
let temp = s[P1];

s[P1] = s[P2];

s[P2] = temp;
```

We use a temporary variable because directly overwriting one element would cause us to lose its original value.

For example:

```
Before swapping:

s = ["h", "e", "l", "l", "o"]
      ↑                   ↑
     P1                  P2

temp = "h"

s[P1] = "o"
s[P2] = "h"

After swapping:

s = ["o", "e", "l", "l", "h"]
```

We have successfully exchanged the first and last characters without creating another array.

### Step 4: Make the Recursive Call

After swapping, we need to process the remaining characters.

```
reverse(P1 + 1, P2 - 1);
```

Here:

- `P1 + 1` moves the left pointer one position forward.
- `P2 - 1` moves the right pointer one position backward.

Instead of running a loop, we call the same function again with updated pointers.

Every recursive call works on a smaller section of the array.

### Step 5: Start the Recursion

Finally, we call our helper function:

```
reverse(0, s.length - 1);
```

Why these arguments?

- `0` is the index of the first character.
- `s.length - 1` is the index of the last character.

This starts the reversal process from both ends of the array.

We do not need to return the array because the original array `s` is modified directly.

---

## Dry Run — Step-by-Step Execution

Let's understand how recursion works using:

```
s = ["h", "e", "l", "l", "o"]
```

**Initial State**

```
Index:  0    1    2    3    4
Array:  h    e    l    l    o
        ↑                   ↑
       P1                  P2
```

### Recursive Call 1: reverse(0, 4)

```
P1 = 0
P2 = 4
```

Check base case:

```
0 >= 4 → false
```

Swap `s[0]` and `s[4]`.

```
Before: ["h", "e", "l", "l", "o"]
After:  ["o", "e", "l", "l", "h"]
```

Next recursive call:

```
reverse(1, 3);
```

### Recursive Call 2: reverse(1, 3)

```
P1 = 1
P2 = 3
```

Check base case:

```
1 >= 3 → false
```

Swap `s[1]` and `s[3]`.

```
Before: ["o", "e", "l", "l", "h"]
After:  ["o", "l", "l", "e", "h"]
```

Next recursive call:

```
reverse(2, 2);
```

### Recursive Call 3: reverse(2, 2)

```
P1 = 2
P2 = 2
```

Check base case:

```
2 >= 2 → true
```

Both pointers have reached the middle character.

The base case is satisfied, so the function returns without performing another swap.

### Recursive Call Summary

| Call           | P1 | P2 | Action            |
| -------------- | -- | -- | ----------------- |
| `reverse(0,4)` | 0  | 4  | Swap `h` and `o`  |
| `reverse(1,3)` | 1  | 3  | Swap `e` and `l`  |
| `reverse(2,2)` | 2  | 2  | Base case, return |

**Final Output:**

```
["o", "l", "l", "e", "h"]
```

The original array has been reversed successfully.

---

## Understanding the Recursion Call Stack

Recursion uses the **call stack** to keep track of function calls.

Each time `reverse()` calls itself, a new function call is added to the stack.

For our example:

```
reverse(0, 4)
    |
    | Swap h and o
    |
    └── reverse(1, 3)
            |
            | Swap e and l
            |
            └── reverse(2, 2)
                    |
                    | Base case reached
                    | return
```

Once the base case is reached, the recursive calls begin returning in reverse order.

```
reverse(2, 2) returns
        ↓
reverse(1, 3) returns
        ↓
reverse(0, 4) returns
        ↓
Function execution completed
```

**Important:** In this solution, swapping happens before the recursive call. Therefore, all characters are already reversed when the base case is reached. The returning phase does not perform any additional swaps.

---

## Complexity Analysis

### Time Complexity: O(n)

Let `n` be the number of characters in the array.

At every recursive call:

1. We check the base condition.
2. We swap two characters.
3. We move both pointers toward the center.
4. We make one recursive call.

Each call performs constant-time operations, O(1).

Because two characters are processed in each call, the total number of swaps is:

```
floor(n / 2)
```

Therefore:

```
T(n) = T(n - 2) + O(1)
```

The recursion continues until the pointers meet or cross.

So the total time complexity is:

**O(n)**

### Space Complexity: O(n)

Although we do not create any additional array, recursion uses memory for the function call stack.

Every recursive call adds a new stack frame.

The maximum recursion depth is approximately:

```
floor(n / 2) + 1
```

Therefore:

- Extra array storage: O(1)
- Recursive call stack: O(n)
- Total auxiliary space complexity: **O(n)**

**Note:** The original LeetCode problem specifies O(1) extra memory. Under standard space-complexity analysis, the recursive call stack counts as auxiliary memory, so this recursive solution does not strictly meet that requirement. It is appropriate for a recursion-focused variation of the problem.

---

## Code

```
/**
 * @param {character[]} s
 * @return {void} Do not return anything,
 * modify s in-place instead.
 */
var reverseString = function (s) {

    function reverse(P1, P2) {

        // Base case: pointers meet or cross
        if (P1 >= P2) {
            return;
        }

        // Swap the characters
        let temp = s[P1];

        s[P1] = s[P2];

        s[P2] = temp;

        // Recursive call with updated pointers
        reverse(P1 + 1, P2 - 1);
    }

    // Start recursion
    reverse(0, s.length - 1);
};
```

---

## Key Takeaways

1. **Recursion can replace iteration:** Instead of using a loop, we repeatedly call the same function with updated arguments.
2. **Two pointers simplify reversal:** One pointer starts from the beginning, while the other starts from the end.
3. **The base case prevents unnecessary calls:** When `P1 >= P2`, no more swaps are required.
4. **In-place modification avoids copying:** We modify the original input array directly.
5. **Each recursive call solves a smaller problem:** After swapping the outer characters, the function processes the inner characters.
6. **Recursion consumes stack memory:** Even though we use only one temporary variable, the recursive call stack requires O(n) space.

### Final Summary

| Property                 | Result                 |
| ------------------------ | ---------------------- |
| Algorithm                | Recursive Two Pointers |
| Time Complexity          | O(n)                   |
| Auxiliary Space          | O(n)                   |
| Additional Array Storage | O(1)                   |
| Modifies Original Array  | Yes                    |
| Uses Loops               | No                     |
| Uses Built-in Reverse    | No                     |

**Final Learning:** This problem demonstrates how to combine recursion and the two-pointer technique to reverse an array in-place. The main concepts are the base case, pointer movement, swapping, and recursive function calls.