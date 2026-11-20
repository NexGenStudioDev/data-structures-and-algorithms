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

For GFG and TakeUForward questions, see the [repository-wide Practice Tracker](../Abhishek%20tracker.md). LeetCode questions are linked below.

[Abhishek tracker](../Abhishek%20tracker.md) · [Akanksha tracker](../Akanksha%20tracker.md)


| Difficulty | Platform | Question | Subtopic | Local question | Local solution | Status |
|---|---|---|---|---|---|---|
| Medium | LeetCode | [Combination Sum II](https://leetcode.com/problems/combination-sum-ii) | Bounded Choices with Duplicates | N/A | N/A | To Do |
| Medium | LeetCode | [Combination Sum](https://leetcode.com/problems/combination-sum) | Unbounded Choices | N/A | N/A | To Do |
| Medium | LeetCode | [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning) | String Slicing | N/A | N/A | To Do |
| Medium | LeetCode | [Permutations II](https://leetcode.com/problems/permutations-ii) | Permutations with Duplicates | N/A | N/A | To Do |
| Medium | LeetCode | [Permutations](https://leetcode.com/problems/permutations) | Permutations of Distinct Numbers | N/A | N/A | To Do |
| Medium | GeeksforGeeks | [Rat in a Maze](https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1) | Backtracking | N/A | N/A | To Do |
| Medium | LeetCode | [Subsets II](https://leetcode.com/problems/subsets-ii) | Subsets with Duplicates | N/A | N/A | To Do |
| Medium | LeetCode | [Subsets](https://leetcode.com/problems/subsets) | Power Set / Combinations | N/A | N/A | To Do |
| Medium | LeetCode | [Word Search](https://leetcode.com/problems/word-search) | 2D Grid DFS Backtracking | N/A | N/A | To Do |
| Hard | LeetCode | [N-Queens](https://leetcode.com/problems/n-queens) | Constraint Satisfaction | N/A | N/A | To Do |
| Hard | LeetCode | [Sudoku Solver](https://leetcode.com/problems/sudoku-solver) | 9x9 Board Constraint Solving | N/A | N/A | To Do |
