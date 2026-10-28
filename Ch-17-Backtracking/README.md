# Chapter 17: Backtracking

> **Systematic exploration of solution search spaces with state pruning.**  
> Backtracking builds candidate solutions incrementally and abandons a candidate ("backtracks") as soon as it determines the candidate cannot lead to a valid solution.

---

## 📌 Chapter Directory Structure

```text
Ch-17-Backtracking/
├── 01-Backtracking-Basics-and-Template/
├── 02-Subsets-and-Permutations/
├── 03-Grid-and-Path-Finding/
├── 04-Classic-Problems/
├── 05-LeetCode-Problems/
├── README.md
└── .gitignore
```

---

## 🎯 Universal Backtracking Template

```javascript
function backtrack(state, choices, result) {
    if (isGoal(state)) {
        result.push(clone(state)); // Save copy of valid solution
        return;
    }

    for (let choice of choices) {
        if (!isValid(choice, state)) continue; // Pruning condition

        // 1. Make choice
        state.add(choice);

        // 2. Explore recursively
        backtrack(state, choices, result);

        // 3. Undo choice (Backtrack!)
        state.remove(choice);
    }
}
```

---

## 📝 Practice Roadmap

| Problem | Difficulty | Category | Status |
|---|---|---|:---:|
| LeetCode 78: Subsets | Medium | Power Set / Combinations | ⏳ To Do |
| LeetCode 90: Subsets II | Medium | Subsets with Duplicates | ⏳ To Do |
| LeetCode 46: Permutations | Medium | Permutations of Distinct Numbers | ⏳ To Do |
| LeetCode 47: Permutations II | Medium | Permutations with Duplicates | ⏳ To Do |
| LeetCode 39: Combination Sum | Medium | Unbounded Choices | ⏳ To Do |
| LeetCode 40: Combination Sum II | Medium | Bounded Choices with Duplicates | ⏳ To Do |
| LeetCode 79: Word Search | Medium | 2D Grid DFS Backtracking | ⏳ To Do |
| LeetCode 131: Palindrome Partitioning | Medium | String Slicing | ⏳ To Do |
| LeetCode 51: N-Queens | Hard | Constraint Satisfaction | ⏳ To Do |
| LeetCode 37: Sudoku Solver | Hard | 9x9 Board Constraint Solving | ⏳ To Do |
