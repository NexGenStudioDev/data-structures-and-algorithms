"""
LeetCode 69: Sqrt(x)
Problem Link: https://leetcode.com/problems/sqrtx/

Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
"""


class Solution:
    def mySqrt(self, x: int) -> int:
        """
        Calculates the integer square root of x using Binary Search on Answer Space.
        
        Time Complexity:  O(log x)
        Space Complexity: O(1)
        """
        left = 0
        right = x

        while left <= right:
            mid = left + (right - left) // 2
            sq = mid * mid

            if sq == x:
                return mid
            elif sq > x:
                right = mid - 1
            else:
                left = mid + 1

        return right


if __name__ == "__main__":
    sol = Solution()

    # Test cases
    assert sol.mySqrt(4) == 2
    assert sol.mySqrt(8) == 2
    assert sol.mySqrt(0) == 0
    assert sol.mySqrt(1) == 1
    assert sol.mySqrt(16) == 4
    assert sol.mySqrt(25) == 5
    assert sol.mySqrt(26) == 5

    print("All Sqrt(x) tests passed successfully!")
