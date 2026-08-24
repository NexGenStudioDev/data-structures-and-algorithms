# 682. Baseball Game

## Problem Statement

You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings `operations`, where `operations[i]` is the `ith` operation you must apply to the record. Each operation is one of the following:

*   **An integer `x`**: Record a new score of `x`.
*   **`'+'`**: Record a new score that is the sum of the previous two scores.
*   **`'D'`**: Record a new score that is double the previous score.
*   **`'C'`**: Invalidate the previous score, removing it from the record.

**Return the sum of all the scores on the record after applying all the operations.**

> **Note**: The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

---

## Examples

### Example 1
**Input**: `ops = ["5","2","C","D","+"]`  
**Output**: `30`  

**Explanation**:
1.  `"5"`: Add 5 to the record. Record is now `[5]`.
2.  `"2"`: Add 2 to the record. Record is now `[5, 2]`.
3.  `"C"`: Invalidate and remove the previous score (2). Record is now `[5]`.
4.  `"D"`: Add 2 * 5 = 10 to the record. Record is now `[5, 10]`.
5.  `"+"`: Add 5 + 10 = 15 to the record. Record is now `[5, 10, 15]`.
6.  **Total Sum**: 5 + 10 + 15 = **30**.

### Example 2
**Input**: `ops = ["5","-2","4","C","D","9","+","+"]`  
**Output**: `27`  

**Explanation**:
1.  `"5"`: Record `[5]`.
2.  `"-2"`: Record `[5, -2]`.
3.  `"4"`: Record `[5, -2, 4]`.
4.  `"C"`: Remove 4. Record `[5, -2]`.
5.  `"D"`: Add 2 * -2 = -4. Record `[5, -2, -4]`.
6.  `"9"`: Record `[5, -2, -4, 9]`.
7.  `"+"`: Add -4 + 9 = 5. Record `[5, -2, -4, 9, 5]`.
8.  `"+"`: Add 9 + 5 = 14. Record `[5, -2, -4, 9, 5, 14]`.
9.  **Total Sum**: 5 + (-2) + (-4) + 9 + 5 + 14 = **27**.

### Example 3
**Input**: `ops = ["1","C"]`  
**Output**: `0`  

**Explanation**:
1.  `"1"`: Record `[1]`.
2.  `"C"`: Remove 1. Record `[]`.
3.  **Total Sum**: **0** (empty record).

---

## Constraints

*   `1 <= operations.length <= 1000`
*   `operations[i]` is `"C"`, `"D"`, `"+"`, or a string representing an integer in the range `[-3 * 10^4, 3 * 10^4]`.
*   For operation `"+"`, there will always be at least two previous scores on the record.
*   For operations `"C"` and `"D"`, there will always be at least one previous score on the record.

---

## Topics
*   Array
*   Stack
*   Simulation

## Companies
*   (Listed under "Companies" on the platform, typically varies by rotation)

## Similar Questions
*   **Crawler Log Folder** (Easy)

---

## Hints
*   Use a **stack** to keep track of the scores.
*   Iterate through the operations and apply the logic based on the current operation type.
*   Finally, sum up all elements remaining in the stack.