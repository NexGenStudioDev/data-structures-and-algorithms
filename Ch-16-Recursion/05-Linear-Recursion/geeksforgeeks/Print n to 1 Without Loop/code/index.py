import sys

# Increase recursion depth limit for large n (e.g. n >= 1000 on GFG)
sys.setrecursionlimit(5000)


class Solution:
    """
    GeeksforGeeks: Print N to 1 Without Loop
    Topic: Linear Recursion (Tail Recursion)
    """

    def printNos(self, n: int) -> None:
        # Base case: stop when n reaches 0 or negative
        if n <= 0:
            return

        # Work done during winding phase (before recursive call)
        print(n, end=" ")

        # Recursive call: process smaller number (n - 1)
        self.printNos(n - 1)


# Standalone functional version
def print_nos(n: int) -> None:
    if n <= 0:
        return
    print(n, end=" ")
    print_nos(n - 1)


if __name__ == "__main__":
    sol = Solution()

    print("Test 1 (n = 5):")
    sol.printNos(5)
    print("\n")

    print("Test 2 (n = 10):")
    sol.printNos(10)
    print("\n")

    print("Test 3 (Functional, n = 7):")
    print_nos(7)
    print()
