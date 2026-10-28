# Stone Game — Even/Odd Index Parity Strategy

## Intuition

This problem is a **two-player game** involving two players:

```text
1. Alice
2. Bob
```

We are given an array where every element represents a **pile of stones**.

For example:

![Screenshot_20261003_235558.png](https://assets.leetcode.com/users/images/9ef4c6db-b71b-4451-9c76-a0c00f2691a2_1791052010.5871217.png)

We can visualize the piles as:


![Screenshot_20261003_235647.png](https://assets.leetcode.com/users/images/b6f5eaa6-d603-4434-ad2c-5cf41de0f778_1791052051.1687224.png)


Here:

```text
piles[0] = 5
piles[1] = 3
piles[2] = 4
piles[3] = 5
```

There are `4` piles.

Alice and Bob take turns removing one pile.

The important rule is:

> A player can remove a pile **only from the beginning or the end** of the row.

They **cannot choose a pile from the middle**.

So from:

![Screenshot_20261003_235647.png](https://assets.leetcode.com/users/images/b6f5eaa6-d603-4434-ad2c-5cf41de0f778_1791052051.1687224.png)

the player can choose:

![Screenshot_20261003_235758.png](https://assets.leetcode.com/users/images/37558f1e-d3fb-47e7-bc3d-50bd4da7f75e_1791052126.3319771.png)


```text
5 ← Start
```

or:

```text
5 → End
```

But cannot directly choose:

```text
[5, 3, 4, 5]
    ↑
    3
```

or:

```text
[5, 3, 4, 5]
       ↑
       4
```

---

# What is the goal?

Every player collects the stones from the piles they remove.

For example:

```text
Alice takes 5
Alice takes 4

Alice = 5 + 4
      = 9
```

If Bob gets:

```text
Bob takes 5
Bob takes 3

Bob = 5 + 3
    = 8
```

Then:

```text
Alice = 9
Bob   = 8
```

Since:

```text
9 > 8
```

Alice wins.

Therefore:

```javascript
return true;
```

If Bob has more stones:

```text
Alice < Bob
```

then:

```javascript
return false;
```

---



# Important Rules

There are several rules that we must understand before writing the code.

## Rule 1 — Alice goes first

The first turn always belongs to Alice.

```text
Alice → Bob → Alice → Bob → ...
```

---

## Rule 2 — One pile per turn

A player can remove only **one pile** during their turn.

For example:

![Screenshot_20261003_235647.png](https://assets.leetcode.com/users/images/b6f5eaa6-d603-4434-ad2c-5cf41de0f778_1791052051.1687224.png)

Alice can take one `5`.

She cannot take:

```text
5 + 3
```

in one turn.

---

## Rule 3 — Only the Start and end can be selected

From:

![Screenshot_20261003_235758.png](https://assets.leetcode.com/users/images/37558f1e-d3fb-47e7-bc3d-50bd4da7f75e_1791052126.3319771.png)

the available piles are:

```text
5 ← Start

5 → End
```

The middle piles:

```text
3
4
```

are not directly available.

---

## Rule 4 — The selected pile is removed

If Alice takes the first `5`:

```text
Before:

[5, 3, 4, 5]
 ↑
Start
```

After removing it:

```text
[3, 4, 5]
```

The `Start` pointer moves forward.

---

## Rule 5 — Turns alternate

After Alice makes a move:

```text
Alice → Bob
```

After Bob makes a move:

```text
Bob → Alice
```

We can represent this using:

```javascript
Turn
```

where:

```text
Turn = true
```

means:

```text
Alice's turn
```

and:

```text
Turn = false
```

means:

```text
Bob's turn
```

To switch the player:

```javascript
Turn = !Turn;
```

This changes:

```text
true  → false
false → true
```

---

# Variables

To implement the simulation, we need a few variables.

---

## 1. `Alice`

```javascript
let Alice = 0;
```

This stores the total number of stones Alice has collected.

Initially:

```text
Alice = 0
```

After Alice takes `5`:

```text
Alice = 0 + 5
      = 5
```

If she later takes `4`:

```text
Alice = 5 + 4
      = 9
```

---

# 2. `Bob`

```javascript
let Bob = 0;
```

This stores Bob's total number of collected stones.

Initially:

```text
Bob = 0
```

If Bob takes `5`:

```text
Bob = 0 + 5
    = 5
```

If he later takes `3`:

```text
Bob = 5 + 3
    = 8
```

---

# 3. `Start`

```javascript
let Start = 0;
```

`Start` is a pointer/index that represents the **leftmost available pile**.

For:

```text
piles = [5, 3, 4, 5]
```

the indexes are:

```text
Index:    0    1    2    3
          ↓              ↓
Piles:   [5]  [3]  [4]  [5]
          ↑              ↑
        Start            End
```

Therefore:

```text
Start = 0
```

If we remove the pile at `Start`, we move `Start` forward:

```javascript
Start++;
```

For example:

```text
Before:

[5, 3, 4, 5]
 ↑
Start = 0

After removing 5:

[3, 4, 5]
 ↑
Start = 1
```

---

# 4. `End`

```javascript
let End = piles.length - 1;
```

`End` represents the **rightmost available pile**.

For:

```text
piles = [5, 3, 4, 5]
```

the length is:

```text
4
```

Therefore:

```javascript
End = 4 - 1;
```

which gives:

```text
End = 3
```

So:

```text
Index:    0    1    2    3
          ↑              ↑
        Start            End
```

> **Important:** `End` is `3`, not `4`, because JavaScript arrays use zero-based indexing.

When we remove the pile from the end:

```javascript
End--;
```

For example:

```text
Before:

[5, 3, 4, 5]
             ↑
           End = 3

After removing 5:

[5, 3, 4]
          ↑
        End = 2
```

---

# 5. `Turn`

```javascript
let Turn = true;
```

We use `Turn` to determine whose turn it is.

```text
Turn = true
      ↓
Alice's turn
```

```text
Turn = false
      ↓
Bob's turn
```

So:

```javascript
if (Turn) {
    // Alice's turn
} else {
    // Bob's turn
}
```

After every move:

```javascript
Turn = !Turn;
```

---

# Why Do We Need `Start` and `End`?

Without pointers, we would have to physically remove elements from the array.

Instead, we can simply keep track of the currently available range.

Initially:

```text
Start = 0
End = 3
```

Available range:

```text
[5, 3, 4, 5]
 ↑           ↑
Start       End
```

If we remove from the start:

```text
Start++
```

If we remove from the end:

```text
End--
```

Therefore, the available part of the array continuously becomes smaller.

---

# The Loop

We use:

```javascript
while (Start <= End)
```

This means:

> Keep playing as long as at least one pile is still available.

For example:

```text
Start = 1
End = 3
```

Then:

```text
1 <= 3
```

so piles are still available.

But eventually we can reach:

```text
Start = 2
End = 1
```

Now:

```text
2 <= 1
```

is false.

That means:

```text
No piles remain
```

and the game ends.

---

# Choosing a Pile

At every turn, we compare:

```javascript
piles[Start]
```

and:

```javascript
piles[End]
```

Conceptually:

```text
             Current piles
                  |
          ┌───────┴───────┐
          ↓               ↓
       Start             End
          ↓               ↓
       choose           choose
```

In the **greedy version** of the code, we choose the larger of the two available piles.

So:

```javascript
if (piles[Start] > piles[End])
```

we take from the start.

Otherwise:

```javascript
else
```

we take from the end.

---

# Taking From Start

Suppose:

```text
piles = [7, 3, 4, 5]
```

We have:

```text
Start pile = 7
End pile   = 5
```

Since:

```text
7 > 5
```

we choose the start.

If it is Alice's turn:

```javascript
Alice += piles[Start];
```

Then:

```javascript
Start++;
```

So:

```text
Before:

[7, 3, 4, 5]
 ↑           ↑
Start       End

After:

[7, 3, 4, 5]
     ↑       ↑
   Start    End
```

The `7` has been logically removed.

---

# Taking From End

Suppose:

```text
piles = [3, 4, 5]
```

Then:

```text
Start = 3
End = 5
```

Since:

```text
3 < 5
```

we choose the end.

If it is Bob's turn:

```javascript
Bob += piles[End];
```

Then:

```javascript
End--;
```

So:

```text
Before:

[3, 4, 5]
 ↑       ↑
Start   End

After:

[3, 4, 5]
 ↑   ↑
Start End
```

The `5` has been logically removed.

---

# Complete Dry Run

Let's use:

```text
piles = [5, 3, 4, 5]
```

Initial values:

```text
Alice = 0
Bob   = 0

Start = 0
End   = 3

Turn = true
```

Initial state:

![Screenshot_20261004_000137.png](https://assets.leetcode.com/users/images/cc94117b-3abb-4001-808c-5b93f5edb87d_1791052340.996508.png)


---

# Step 1 — Alice's Turn

![Screenshot_20261004_000405.png](https://assets.leetcode.com/users/images/935e974f-39d1-4d78-b3ed-d571438985d0_1791052487.4641366.png)


Current:

```text
Turn = true
```

Therefore:

```text
Alice's turn
```

Current piles:

![Screenshot_20261003_235758.png](https://assets.leetcode.com/users/images/57d24ca8-ced3-4da2-9d55-5ab236ed5767_1791052442.563361.png)


Compare:

```text
piles[Start] = 5
piles[End]   = 5
```

We check:

```javascript
5 > 5
```

This is:

```text
false
```

Therefore the `else` block executes.

We take from the **end**.

Alice gets:

```text
5
```

Update:

```text
Alice = 0 + 5
      = 5
```

Bob remains:

```text
Bob = 0
```

Move `End`:

```text
End--
```

So:

```text
End = 2
```

Then switch turn:

```text
Turn = !true
     = false
```

State:

```text
Alice = 5
Bob   = 0

Start = 0
End   = 2

Turn = false
```

Remaining piles:

```text
[5, 3, 4]
 ↑       ↑
Start   End
```

---

# Step 2 — Bob's Turn

Now:

```text
Turn = false
```

Therefore:

```text
Bob's turn
```

Current piles:


![Screenshot_20261004_000607.png](https://assets.leetcode.com/users/images/ea9f89ae-563e-4b4b-b859-63cc44c180cc_1791052609.7293875.png)


Compare:

```text
piles[Start] = 5
piles[End]   = 4
```

Check:

```text
5 > 4
```

This is:

```text
true
```

So we take from `Start`.

Bob gets:

```text
5
```

Update:

```text
Bob = 0 + 5
    = 5
```

Alice remains:

```text
Alice = 5
```

Move `Start`:

```text
Start++;
```

Therefore:

```text
Start = 1
```

Switch turn:

```text
Turn = !false
     = true
```

State:

```text
Alice = 5
Bob   = 5

Start = 1
End   = 2

Turn = true
```

Remaining:

```text
[5, 3, 4]
    ↑   ↑
  Start End
```

The currently available part is:

```text
[3, 4]
 ↑    ↑
Start End
```

---

# Step 3 — Alice's Turn

Now:

```text
Turn = true
```

Therefore:

```text
Alice's turn
```

Available piles:

![Screenshot_20261004_000723.png](https://assets.leetcode.com/users/images/594f534f-aa5e-4e28-b79c-f666d4436d45_1791052700.8534715.png)



Compare:

```text
piles[Start] = 3
piles[End]   = 4
```

Check:

```text
3 > 4
```

This is:

```text
false
```

So we take from the end.

Alice gets:

```text
4
```

Update:

```text
Alice = 5 + 4
      = 9
```

Bob:

```text
Bob = 5
```

Move `End`:

```text
End--
```

Therefore:

```text
End = 1
```

Switch turn:

```text
Turn = !true
     = false
```

State:

```text
Alice = 9
Bob   = 5

Start = 1
End   = 1

Turn = false
```

Remaining pile:

```text
[3]
 ↑
Start
 ↑
End
```

---

# Step 4 — Bob's Turn

Now:

```text
Turn = false
```

Therefore:

```text
Bob's turn
```

There is only one pile left:

![Screenshot_20261004_000825.png](https://assets.leetcode.com/users/images/6b0244c4-63a9-4b31-8c32-f1970c535b1c_1791052769.0667555.png)


Both pointers point to the same pile:

```text
Start = 1
End   = 1
```

So Bob takes `3`.

Update:

```text
Bob = 5 + 3
    = 8
```

Alice remains:

```text
Alice = 9
```

Now we move the end pointer:

```text
End--
```

Therefore:

```text
End = 0
```

Switch turn:

```text
Turn = !false
     = true
```

Now:

```text
Start = 1
End   = 0
```

Check the loop condition:

```text
Start <= End

1 <= 0
```

This is:

```text
false
```

Therefore the loop stops.

---

# Final Result

Final scores:

```text
Alice = 9
Bob   = 8
```

Compare:

```text
Alice > Bob

9 > 8
```

Therefore:

```javascript
return Alice > Bob;
```

becomes:

```javascript
return true;
```

Final answer:

```text
true
```

Alice wins.

---




# Code Explanation

```javascript
var stoneGame = function (piles) {
```

The function receives the array of piles.

Example:

```javascript
piles = [5, 3, 4, 5]
```

---

## Scores

```javascript
let Alice = 0;
let Bob = 0;
```

Both players start with zero stones.

---

## Pointers

```javascript
let Start = 0;
let End = piles.length - 1;
```

For:

```text
[5, 3, 4, 5]
```

we get:

```text
Start = 0
End = 3
```

---

## Turn

```javascript
let Turn = true;
```

Initially:

```text
true = Alice
```

because Alice always starts.

---

## Continue While Piles Exist

```javascript
while (Start <= End)
```

As long as:

```text
Start <= End
```

there is at least one available pile.

---

## Compare the Ends

```javascript
if (piles[Start] > piles[End])
```

If the start pile is larger, choose it.

```javascript
if (Turn) {
    Alice += piles[Start];
} else {
    Bob += piles[Start];
}

Start++;
```

The current player gets the pile, and `Start` moves forward.

---

## Otherwise Take From End

```javascript
else {
    if (Turn) {
        Alice += piles[End];
    } else {
        Bob += piles[End];
    }

    End--;
}
```

The current player gets the end pile, and `End` moves backward.

---

## Switch Turns

This line is essential:

```javascript
Turn = !Turn;
```

It changes:

```text
Alice → Bob
Bob   → Alice
```

Without this line, `Turn` would never change and the same player would keep collecting piles.

---

# Final Code

```javascript
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
    let Alice = 0;
    let Bob = 0;

    let Start = 0;
    let End = piles.length - 1;

    let Turn = true; // true = Alice, false = Bob

    while (Start <= End) {

        if (piles[Start] > piles[End]) {
            // Take from Start
            if (Turn) {
                Alice += piles[Start];
            } else {
                Bob += piles[Start];
            }

            Start++;
        } else {
            // Take from End
            if (Turn) {
                Alice += piles[End];
            } else {
                Bob += piles[End];
            }

            End--;
        }

        // Change the player
        Turn = !Turn;
    }

    return Alice > Bob;
};
```

---

# Complexity

There are `n` piles.

Every iteration removes exactly **one pile**.

Therefore, the loop runs at most `n` times.

### Time Complexity

```text
O(n)
```

because every pile is processed once.

### Space Complexity

```text
O(1)
```

because we only use a fixed number of variables:

```text
Alice
Bob
Start
End
Turn
```

No extra array, recursion, or DP table is created.

---

# ⚠️ Important: Greedy vs Actual Stone Game

The code above is useful for understanding:

* `Start` and `End` pointers
* alternating turns
* maintaining Alice/Bob scores
* choosing an end
* shrinking the available range

But there is an important algorithmic distinction.

The statement says **both players play optimally**. Simply doing:

```javascript
if (piles[Start] > piles[End]) {
    // take Start
} else {
    // take End
}
```

