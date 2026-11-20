# Backtracking Basics

Backtracking builds a candidate step by step. At each step, choose an option, explore it, then undo the choice so another option can be tried.

```text
if the current state is a complete answer: save it
for each allowed choice:
    make the choice
    solve the smaller state
    undo the choice
```

Every recursive path must make progress. A constraint check can prune a branch only when that branch cannot lead to a valid answer. Worst-case work is often exponential; state how many choices and how deep the search can go. See the bilingual subset examples.
