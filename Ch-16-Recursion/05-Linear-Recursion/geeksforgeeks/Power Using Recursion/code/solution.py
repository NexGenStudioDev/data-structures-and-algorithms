"""
GeeksforGeeks: Power Using Recursion
Problem Link: https://www.geeksforgeeks.org/problems/power-using-recursion/1

Given two numbers n and p, calculate n^p using recursion.

Constraints:
    1 <= n <= 10
    0 <= p <= 9
"""


class Solution:
    def recursivePower(self, n: int, p: int) -> int:
        """
        Calculates n raised to the power p using linear recursion.
        
        Time Complexity:  O(p) - exactly p recursive calls.
        Space Complexity: O(p) - call stack frames proportional to exponent p.
        """
        # Base Case: Any non-zero number raised to exponent 0 equals 1
        if p == 0:
            return 1

        # Recursive Relation: n^p = n * n^(p - 1)
        return n * self.recursivePower(n, p - 1)


if __name__ == "__main__":
    sol = Solution()

    # Test cases from problem statement
    assert sol.recursivePower(9, 9) == 387420489
    assert sol.recursivePower(2, 9) == 512
    assert sol.recursivePower(5, 0) == 1
    assert sol.recursivePower(2, 3) == 8
    assert sol.recursivePower(10, 2) == 100

    print("All Power Using Recursion tests passed successfully!")
