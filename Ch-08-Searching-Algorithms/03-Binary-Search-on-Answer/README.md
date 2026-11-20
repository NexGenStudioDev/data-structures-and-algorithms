# Binary Search on the Answer

Sometimes the answer is not an element in an array. It may be the smallest capacity, speed, or time that makes a condition possible. Binary search works when feasibility changes monotonically.

## First feasible value

Imagine answers `0, 1, 2, ...` where the condition is false first, then true and stays true. Search for the first true value. State the bounds and prove why the condition is monotonic before coding.

## Example: minimum ship capacity

For ordered packages, larger capacity can never require more days than a smaller capacity. Feasibility is monotonic, so we can search between the heaviest package and the sum of all weights. See [`code/index.js`](./code/index.js) and [`code/index.py`](./code/index.py).

C++ example: [`code/index.cpp`](./code/index.cpp).

**Common mistake:** a plausible `mid` check is not enough; prove that changing the answer in one direction cannot make a feasible case infeasible.
