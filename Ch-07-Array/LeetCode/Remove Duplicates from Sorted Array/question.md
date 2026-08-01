# 26. Remove Duplicates from Sorted Array

## 📖 Problem Description

Given an integer array `nums` **sorted in non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only once. The relative order of the elements should be kept the same.

### The Goal
1.  **Modify the Array:** Change the input array `nums` so that the **first `k` elements** contain the unique numbers in sorted order.
2.  **Return `k`:** Return the number of unique elements (`k`).
3.  **Ignore the Rest:** The values in `nums` beyond index `k - 1` do not matter and can be anything.

### Key Constraints
*   **In-Place:** You must modify the original array `nums`. You **cannot** allocate extra space for another array (e.g., you cannot create a new list to store results).
*   **Constant Memory:** The solution must use $O(1)$ extra memory.
*   **Sorted Input:** The input array is guaranteed to be sorted in non-decreasing order.

---


## 📝 Examples

### Example 1
**Input:**
```text
nums = [1, 1, 2]
```
**Output:**
```text
k = 2, nums = [1, 2, _]
```
**Explanation:**
*   The unique elements are `1` and `2`.
*   Your function returns `k = 2`.
*   The first two elements of `nums` are updated to `1` and `2`.
*   The value at index `2` (originally `2`) is ignored (represented by `_`).

### Example 2
**Input:**
```text
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
```
**Output:**
```text
k = 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
```
**Explanation:**
*   The unique elements are `0, 1, 2, 3, 4`.
*   Your function returns `k = 5`.
*   The first five elements of `nums` are updated to `0, 1, 2, 3, 4`.
*   The remaining elements are ignored.

---

## 🚧 Constraints

*   `1 <= nums.length <= 3 * 10^4`
*   `-100 <= nums[i] <= 100`
*   `nums` is sorted in **non-decreasing order**.
    *   *Note: "Non-decreasing" means the array is sorted in ascending order, allowing for duplicates (e.g., `1, 1, 2`).*

---

## 💡 Hints & Logic

### Hint 1: The Power of Sorting
Since the array is sorted, all duplicate elements are **adjacent**.
*   If `nums[i] == nums[i+1]`, they are duplicates.
*   If `nums[i] != nums[i+1]`, then `nums[i+1]` is a new unique element.

### Hint 2: Two-Pointer Technique
Because you must modify the array in-place without extra space, use two pointers:
1.  **Slow Pointer (`i`):** Points to the position where the next unique element should be placed.
2.  **Fast Pointer (`j`):** Iterates through the array to find new unique elements.

**Logic Flow:**
1.  Initialize `i = 0` (since the first element is always unique).
2.  Loop `j` from `1` to the end of the array.
3.  If `nums[j]` is different from `nums[i]`:
    *   Increment `i`.
    *   Set `nums[i] = nums[j]`.
4.  Return `i + 1` (which is the count of unique elements).

### Hint 3: What to Ignore
Do not worry about the values at the end of the array after the unique elements are placed. The judge will only check the first `k` elements.

---

## 📚 Related Questions

*   **Remove Element** (Easy) - Remove all instances of a specific value.
*   **Remove Duplicates from Sorted Array II** (Medium) - Allow at most two duplicates of each element.
*   **Apply Operations to an Array** (Easy) - Move zeros to the end while maintaining order.

---

## 🏷️ Topics

*   **Array**
*   **Two Pointers**
*   **Sorting** (Implicit, as input is already sorted)