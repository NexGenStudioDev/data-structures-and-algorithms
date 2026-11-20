# Selection Sort

Find the smallest value in the unsorted part, then swap it into the next output position. The sorted prefix grows by one item each pass.

**Time:** `O(n²)` in best, average, and worst cases. **Extra space:** `O(1)` if sorting in place. The usual swap version is not stable. It performs few swaps, but comparisons still make it slow on large inputs.
