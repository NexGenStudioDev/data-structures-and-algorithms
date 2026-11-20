class Solution:
    def largest(self, arr):
        if not arr:
            return None

        largest_value = float('-inf')

        for value in arr:
            if value > largest_value:
                largest_value = value

        return largest_value
