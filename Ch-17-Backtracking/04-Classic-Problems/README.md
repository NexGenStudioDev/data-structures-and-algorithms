# Classic Backtracking Problems

## N-Queens

Place one queen in each row. A column or diagonal already used makes a choice invalid. The search depth is `n`; the number of candidate boards can be large.

## Sudoku

Choose an empty cell, try each allowed digit, and check its row, column, and box. If no digit works, return to the previous cell and try its next choice.

## Combination Sum

Choose a candidate and recurse with the remaining target. The problem's rules determine whether the same candidate can be reused and how to avoid duplicate combinations.

The N-Queens examples show the choose/check/undo steps.
