# 🪨 877. Stone Game

## 📝 Problem Statement

Alice and Bob are playing a game with a row of stone piles.

You are given an integer array `piles`, where `piles[i]` represents the number of stones in the `i-th` pile.

There are some important rules:

* The number of piles is always **even**.
* Every pile contains a **positive** number of stones.
* Alice always makes the **first move**.
* Alice and Bob take turns.
* On each turn, a player can take **only one pile**.
* The selected pile must be either:

  * the **first pile** (beginning), or
  * the **last pile** (end).
* A player cannot take a pile from the middle.
* Once a pile is taken, it is removed from the game.
* The game continues until all piles have been taken.
* The player with the **most stones** at the end wins.
* The total number of stones is **odd**, so a tie is impossible.
* Both Alice and Bob play **optimally**.

Your task is to return `true` if **Alice wins**, otherwise return `false`.

---

## 🔍 Example 1

```text
Input:
piles = [5,3,4,5]

Output:
true
```

### Explanation

Alice starts and can choose either:

```text
[5, 3, 4, 5]
 ↑           ↑
beginning    end
```

Suppose Alice takes the first `5`:

```text
[3, 4, 5]
```

Now Bob has two choices.

If Bob takes `3`:

```text
[4, 5]
```

Alice takes `5`.

Alice gets:

```text
5 + 5 = 10
```

Bob gets:

```text
3 + 4 = 7
```

Alice wins.

If Bob instead takes the last `5`:

```text
[3, 4]
```

Alice takes `4`.

Alice gets:

```text
5 + 4 = 9
```

Bob gets:

```text
5 + 3 = 8
```

Alice still wins.

Therefore:

```text
Output: true
```

---

## 🔍 Example 2

```text
Input:
piles = [3,7,2,3]

Output:
true
```

Alice can make her moves strategically so that she finishes with more stones than Bob.

---

## 🎯 Goal

Given the array `piles`, determine whether Alice can **guarantee a win** when both players play optimally.

Return:

```text
true  → Alice wins
false → Bob wins
```

---

## 📌 Constraints

```text
2 <= piles.length <= 500

piles.length is even

1 <= piles[i] <= 500

sum(piles[i]) is odd
```

### Important Conditions

```text
Alice → starts first
        ↓
Choose first OR last pile
        ↓
Bob → chooses first OR last pile
        ↓
Continue until no piles remain
        ↓
Compare total stones
        ↓
Return whether Alice wins
```
