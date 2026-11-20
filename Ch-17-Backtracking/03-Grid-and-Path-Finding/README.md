# Grid Search and Path Finding

A grid search state usually includes a row, column, and the choices already made. Check bounds and blocked cells before exploring. Mark a cell before recursion and unmark it afterward when a path cannot revisit that cell.

The examples count paths from the top-left to bottom-right using only right/down moves in an open grid. There are no cycles with those moves. Adding four-direction movement requires a `visited` set to prevent revisiting cells forever.
