# 2D Arrays & Matrix Algorithms

> **Master grid traversals, in-place rotations, 2D prefix sums, and coordinate mapping.**

---

## 🎯 Key Algorithms

### 1. Spiral Matrix Traversal
Maintain four boundaries: `top`, `bottom`, `left`, `right`.
Move:
1. Left to Right along `top`, then `top++`
2. Top to Bottom along `right`, then `right--`
3. Right to Left along `bottom`, then `bottom--`
4. Bottom to Top along `left`, then `left++`

### 2. Rotate Image 90 Degrees Clockwise In-Place
1. **Transpose Matrix:** Swap `matrix[i][j]` with `matrix[j][i]` for $i < j$.
2. **Reverse Each Row:** Swap `matrix[i][left]` with `matrix[i][right]`.

### 3. 2D Prefix Sum Array
Query any submatrix sum in $O(1)$ time:
$$\text{prefix}[r][c] = \text{mat}[r-1][c-1] + \text{prefix}[r-1][c] + \text{prefix}[r][c-1] - \text{prefix}[r-1][c-1]$$
$$\text{Sum}(r_1, c_1, r_2, c_2) = \text{prefix}[r_2+1][c_2+1] - \text{prefix}[r_1][c_2+1] - \text{prefix}[r_2+1][c_1] + \text{prefix}[r_1][c_1]$$
