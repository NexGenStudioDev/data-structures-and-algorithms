# Digit Dynamic Programming

> **Count numbers in range $[L, R]$ satisfying digit-level constraints.**

---

## 🎯 Universal State Parameters
`dp[index][tight][leading_zero][constraint_state]`
- `index`: Current digit position being placed.
- `tight`: Boolean flag (`1` if current prefix matches upper bound limit, `0` if free to choose $0..9$).
- `leading_zero`: Boolean flag to handle numbers with fewer digits than the bound.
