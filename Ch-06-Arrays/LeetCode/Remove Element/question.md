# 27. Remove Element

## 📖 Problem Description

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

### The Objective
Consider the number of elements in `nums` which are not equal to `val` to be `k`. To get accepted, you must:

1.  **Modify the Array In-Place:** Change the array `nums` such that the **first `k` elements** contain the elements which are **not equal to `val`**.
2.  **Ignore the Rest:** The remaining elements of `nums` (from index `k` to the end) are **not important**. Their values do not matter.
3.  **Return `k`:** Return the integer count of elements that are not equal to `val`.

### Key Rules
*   **In-Place Modification:** You must modify the original array `nums`. You **cannot** allocate extra space for another array (e.g., you cannot create a new list to store the results).
*   **Constant Memory:** The solution must use $O(1)$ extra memory.
*   **Order Flexibility:** The relative order of the elements **may be changed**. You do not need to preserve the original order of the remaining elements.

---

## ⚙️ How the Judge Works

The problem uses a custom judge to verify your solution. The logic is as follows:

1.  The judge provides an input array `nums` and a value `val`.
2.  It calls your implementation: `int k = removeElement(nums, val);`
3.  It asserts that `k` equals the expected length of the result array.
4.  **Sorting Check:** The judge **sorts the first `k` elements** of your modified `nums` array.
    *   *Why?* Because the problem allows the order of elements to change. By sorting, it ensures that the *set* of values is correct, regardless of their position.
5.  It compares the sorted first `k` elements against the expected sorted result.
6.  If all assertions pass, your solution is accepted.

> **Important:** You do not need to "delete" elements or shrink the array size. You simply need to overwrite the array so the first `k` positions hold the correct values. The values at indices `k` and beyond are ignored by the judge.

---

## 📝 Examples

### Example 1
**Input:**
```text
nums = [3, 2, 2, 3]
val = 3
```
**Output:**
```text
k = 2, nums = [2, 2, _, _]
```
**Explanation:**
*   The elements not equal to `3` are `2` and `2`.
*   Your function returns `k = 2`.
*   The first two elements of `nums` are updated to `2` and `2`.
*   The values at indices 2 and 3 are ignored (represented by `_`).

### Example 2
**Input:**
```text
nums = [0, 1, 2, 2, 3, 0, 4, 2]
val = 2
```
**Output:**
```text
k = 5, nums = [0, 1, 4, 0, 3, _, _, _]
```
**Explanation:**
*   The elements not equal to `2` are `0, 1, 3, 0, 4`.
*   Your function returns `k = 5`.
*   The first five elements of `nums` must contain these five numbers.
*   **Note:** The order of these five elements **does not matter**. The judge will sort them to verify.
    *   `[0, 1, 4, 0, 3]` is valid.
    *   `[0, 1, 3, 0, 4]` is valid.
    *   `[4, 3, 0, 0, 1]` is valid.
*   The values beyond index 4 are ignored.

---

## 🚧 Constraints

*   `0 <= nums.length <= 100`
*   `0 <= nums[i] <= 50`
*   `0 <= val <= 100`

---

## 💡 Strategic Hints

### Hint 1: Move, Don't Delete
You do not need to physically remove elements from the array. You simply need to **move** all elements that are **not equal to `val`** to the front of the array. The elements equal to `val` will naturally be pushed to the end, where they are ignored.

### Hint 2: Two-Pointer Technique
The most efficient approach uses two pointers:
*   **Pointer `k` (Slow Runner):** Tracks the position where the next valid element (not equal to `val`) should be placed.
*   **Pointer `i` (Fast Runner):** Iterates through the entire array.
*   **Logic:** If `nums[i]` is not `val`, copy it to `nums[k]` and increment `k`. If it is `val`, skip it.

### Hint 3: Swapping is Allowed
Since the order of elements **may be changed**, you can also use a swapping strategy. If you find `val` at the front, you can swap it with a valid element from the back of the array to avoid overwriting valid data.

---

## 📚 Related Questions

*   **Remove Duplicates from Sorted Array** (Easy) - Similar concept, but order must be preserved.
*   **Move Zeroes** (Easy) - Move all `0`s to the end while maintaining order.
*   **Remove Linked List Elements** (Easy) - Same logic applied to a linked list.

---

## 🏷️ Topics

*   **Array**
*   **Two Pointers**