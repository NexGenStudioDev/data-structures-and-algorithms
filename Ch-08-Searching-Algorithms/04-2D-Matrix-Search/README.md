# Search a Row-and-Column Sorted Matrix

Assume every row increases left to right and every column increases top to bottom. Start at the top-right corner. If the value is too large, move left; if too small, move down. Each move removes a full row or column from consideration.

This staircase search takes `O(rows + columns)` time and `O(1)` extra space. It is not the same as a matrix where each row begins above the previous row; that layout can be flattened and searched with binary search. See the code examples.
