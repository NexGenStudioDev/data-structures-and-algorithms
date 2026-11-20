# Hollow Square Pattern

Print a square border of stars. Print a star when a cell is on the first or last row, or on the first or last column. Print a space inside.

For side length `4`:

```text
****
*  *
*  *
****
```

For `n >= 1`, time is `O(n²)` because the output has `n²` cells; extra working space is `O(1)` aside from the output. See both language examples in `code/`.
