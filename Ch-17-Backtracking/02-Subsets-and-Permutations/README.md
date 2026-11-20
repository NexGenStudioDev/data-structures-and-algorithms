# Subsets and Permutations

A subset chooses each input item zero or one times. A permutation arranges every item in a different order. For `n` distinct items, there are `2ⁿ` subsets and `n!` permutations.

Use a `start` index for subsets so each group is produced once. Use a `used` array for permutations so an item is not selected twice in one path. If input values can repeat, sort first and skip equal choices at the same depth.

Examples are in JavaScript and Python. Output size itself may be exponential, so no algorithm can return every result in less than the size of that output.
