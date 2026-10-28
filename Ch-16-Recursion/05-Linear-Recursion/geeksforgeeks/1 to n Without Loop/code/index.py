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


# Standalone functional version
def print_till_n(n: int) -> None:
    if n <= 0:
        return
    print_till_n(n - 1)
    print(n, end=" ")


if __name__ == "__main__":
    sol = Solution()

    print("Test 1 (n = 5):")
    sol.printTillN(5)
    print("\n")

    print("Test 2 (n = 10):")
    sol.printTillN(10)
    print("\n")

    print("Test 3 (Functional, n = 7):")
    print_till_n(7)
    print()
        # Recursive call: process smaller numbers first (1 to n - 1)
        self.printTillN(n - 1)

        # Work done during unwinding phase: print current number followed by space
        print(n, end=" ")


# Standalone functional version
def print_till_n(n: int) -> None:
    if n <= 0:
        return
    print_till_n(n - 1)
    print(n, end=" ")


if __name__ == "__main__":
    sol = Solution()

    print("Test 1 (n = 5):")
    sol.printTillN(5)
    print("\n")

    print("Test 2 (n = 10):")
    sol.printTillN(10)
    print("\n")

    print("Test 3 (Functional, n = 7):")
    print_till_n(7)
    print()
