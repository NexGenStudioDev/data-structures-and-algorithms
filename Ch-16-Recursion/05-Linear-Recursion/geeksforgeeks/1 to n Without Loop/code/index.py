import sys

# Increase recursion depth limit for large n (e.g. n >= 1000 on GFG)
sys.setrecursionlimit(5000)


class Solution:
    """
    GeeksforGeeks: Print 1 to N Without Using Loops
    Topic: Linear Recursion (Head Recursion)
    """

    def printTillN(self, n: int) -> None:
        # Base case: when n reaches 0 or negative, stop recursion
        if n <= 0:
            return

        # Recursive call: process smaller numbers first (1 to n - 1)
        self.printTillN(n - 1)

        # Work done during unwinding phase: print current number followed by space
        print(n, end=" ")

