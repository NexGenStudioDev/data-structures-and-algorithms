# Intuition

Instead of checking every element to the right each time, we first create a mapping where every number points to its immediate next element in `nums2`.

For each element in `nums1`, we simply follow this chain of "next" elements until we find a value greater than the original number. If we reach the end of the chain without finding one, the answer is `-1`.

This avoids repeatedly searching from the beginning of `nums2` and makes the implementation straightforward.

---

# Approach

1. Create a `Map` that stores the immediate right neighbour of every element in `nums2`.

   * Example:

     ```
     nums2 = [1,3,4,2]

     1 → 3
     3 → 4
     4 → 2
     ```

2. Iterate through every number in `nums1`.

3. Starting from that number, repeatedly follow the neighbour chain:

   * If the next value is greater than the original number, store it as the answer.
   * Otherwise, continue following the chain.

4. If the chain ends without finding a greater element, store `-1`.

---

# Complexity

* **Time complexity:** `O(n × m)` in the worst case, where:

  * `n = nums1.length`
  * `m = nums2.length`

  In the worst case, every element in `nums1` may traverse almost the entire neighbour chain.

* **Space complexity:** `O(m)`

  * The map stores one neighbour for each element in `nums2`.

---

# Code

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const nextMap = new Map();
    const result = [];

    // Build a map: current element -> immediate next element
    let current = 0;
    let next = 1;

    while (next < nums2.length) {
        nextMap.set(nums2[current], nums2[next]);
        current++;
        next++;
    }

    // Find the next greater element for every number in nums1
    for (const num of nums1) {
        let search = num;
        let found = false;

        while (nextMap.has(search)) {
            const nextVal = nextMap.get(search);

            if (nextVal > num) {
                result.push(nextVal);
                found = true;
                break;
            }

            search = nextVal;
        }

        if (!found) {
            result.push(-1);
        }
    }

    return result;
};
```

### Note

This solution **passes LeetCode**, but it is **not the optimal approach**.

* **This approach:** `O(n × m)` worst-case time.
* **Optimal approach (Monotonic Stack):** `O(n + m)` time.

The official interview-preferred solution uses a **Monotonic Decreasing Stack**, which preprocesses the next greater element for every value in `nums2` before answering queries from `nums1`.
