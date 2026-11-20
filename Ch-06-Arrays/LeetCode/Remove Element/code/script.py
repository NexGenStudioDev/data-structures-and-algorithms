"""LeetCode 27: remove val in place and return the new logical length."""


def remove_element(nums, val):
    write = 0
    for value in nums:
        if value != val:
            nums[write] = value
            write += 1
    return write
