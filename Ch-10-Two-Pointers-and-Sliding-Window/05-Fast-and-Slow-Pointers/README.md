# Fast and Slow Pointers

Move one pointer one step and another two steps. In a linked list, if a cycle exists, the faster pointer eventually meets the slower one. If the fast pointer reaches `null`, there is no cycle. Compare node identity, not node values.

This Floyd cycle check takes `O(n)` time and `O(1)` extra space. The technique also helps find a linked-list midpoint. In arrays, the “next” rule must define a valid state transition before cycle detection applies.
