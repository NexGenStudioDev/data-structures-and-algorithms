# Binary Search — Complete Notes (Zero to Advanced)


# 1. What Is Binary Search?

**Binary Search** is an efficient searching algorithm used to find a target element in a sorted array.

It follows the **Divide and Conquer** approach.

Instead of checking every element one by one, Binary Search repeatedly divides the search space into two halves.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0o1taz9bf7xxhnkrbsg4.png)

At every step:
1. Find the middle element.
2. Compare it with the target.
3. If both are equal, the element is found.
4. If the target is greater, search the right half.
5. If the target is smaller, search the left half.

This process continues until the target is found or the search space becomes empty.

### Simple Example

Suppose we have:

```js
const arr = [10, 20, 30, 40, 50, 60, 70];
const target = 60;
```

We want to find the index of `60`.

Instead of checking every element, Binary Search starts from the middle.

- Middle element = 40
- 60 is greater than 40.
- Ignore the left half.
- Search the right half.
- Find 60.

**Output:**

```js
5
```

---

# 2. Real-Life Example: Searching in a Dictionary

Imagine you want to find the word **Tiger** in a dictionary.

You don't start from the first page and check every word.

Instead:
1. Open the dictionary around the middle.
2. Check the word.
3. If the word comes before Tiger alphabetically, search the right side.
4. If it comes after Tiger, search the left side.
5. Repeat until you find Tiger.

This is exactly how Binary Search works.

**Remember:** Binary Search eliminates half of the remaining search space at every step.

---

# 3. Why Do We Need Binary Search?

Before Binary Search, understand Linear Search.

### Linear Search

Linear Search checks elements one by one until it finds the target.

```js
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([10, 20, 30, 40, 50], 40));
// Output: 3
```

### Linear Search vs Binary Search

| Feature | Linear Search | Binary Search |
|---|---|---|
| Data sorted? | Not required | Required for standard array search |
| Approach | Check one by one | Divide into halves |
| Best case | O(1) | O(1) |
| Average case | O(n) | O(log n) |
| Worst case | O(n) | O(log n) |
| Large sorted data | Less efficient | More efficient |

### Example: Searching in 1 Million Elements

| Algorithm | Approximate comparisons |
|---|---:|
| Linear Search | Up to 1,000,000 |
| Binary Search | Around 20 |

Why around 20?

Because:

```text
log₂(1,000,000) ≈ 19.93
```

Binary Search is extremely useful when the data is sorted and supports efficient random access.

---

# 4. Prerequisites and Conditions

Before applying standard Binary Search, understand these conditions.

### 1. Sorted Data

The array must be sorted.

Ascending order:

```js
[10, 20, 30, 40, 50]
```

Descending order:

```js
[50, 40, 30, 20, 10]
```

Standard Binary Search must use comparison logic that matches the sorting order.

### 2. Random Access

You should be able to access an element directly using its index.

```js
arr[3];
```

Arrays support direct indexed access.

Linked lists do not provide the same efficient random access, so standard index-based Binary Search is generally unsuitable for them.

### 3. Stable Data During Search

The array should not be modified while the search is running. Otherwise, the sorted-order assumptions may become invalid.

### 4. A Monotonic Search Condition

In advanced Binary Search problems, we do not always search for a particular array element.

Sometimes we search for the first or last position where a condition changes from false to true or true to false.

This is called a **monotonic condition**.

We will study this in the Binary Search on Answer section.

### Important Note About Sorting

If the array is not sorted, you may sort it before searching.

However, sorting takes time and may change the original indexes.

For one search, sorting first may not be worthwhile. If you need many searches on the same data, sorting once may be useful.

---

# 5. Important Terminologies

| Term | Meaning |
|---|---|
| `arr` | Input array |
| `target` | Element we want to find |
| `n` | Number of elements |
| `left` | Starting index of the search range |
| `right` | Ending index of the search range |
| `mid` | Middle index |
| Search space | Current range where the answer may exist |
| Boundary | Starting or ending limit of the search range |

### Important Variables

```js
let left = 0;
let right = arr.length - 1;

let mid = Math.floor((left + right) / 2);
```

Example:

```js
const arr = [10, 20, 30, 40, 50];

left = 0;
right = 4;
mid = 2;
```

The middle element is:

```js
arr[mid] // 30
```

---

# 6. Binary Search Formula

The basic middle-index formula is:

```js
mid = Math.floor((left + right) / 2);
```

A safer general formula is:

```js
mid = left + Math.floor((right - left) / 2);
```

### Why use the second formula?

In languages such as C++, Java, and C, `left + right` can overflow when indexes are extremely large.

The second formula avoids that addition.

JavaScript uses floating-point numbers for ordinary `Number` values, so integer overflow is not the same concern for normal array indexes, but the safer formula is still a good habit.

---

# 7. How Binary Search Works: Step-by-Step Dry Run

Consider:

```js
const arr = [-1, 0, 3, 5, 9, 12];
const target = 9;
```

We want to find the index of `9`.

### Initial Setup

```text
left = 0
right = 5
```

### Iteration 1




Calculate middle:

```text
mid = floor((0 + 5) / 2)
mid = 2
```

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pxjjjpuyf63wdkm74x45.png)

Check:

```text
arr[2] = 3
target = 9
```


Since:

```text
3 < 9
```

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v78i3kmxvvmyioi8a1qi.png)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oi9ioc026lgyhaoa32e4.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/foq6afg0txrhd6i2l0zh.png)



The target must be on the right side.

Update:

```js
left = mid + 1;
```

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/amvi5o5d43rasa2hkmwu.png)

Now:

```text
left = 3
right = 5
```









### Iteration 2
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kxwdrzhlunmuecc3802l.png)

Calculate middle:

```text
mid = floor((3 + 5) / 2)
mid = 4
```

Check:

```text
arr[4] = 9
target = 9
```

Both are equal.

**Target found at index 4.**

### Complete Dry Run

| Iteration | Left | Right | Mid | arr[mid] | Decision |
|---|---:|---:|---:|---:|---|
| 1 | 0 | 5 | 2 | 3 | Search right |
| 2 | 3 | 5 | 4 | 9 | Found |

Output:

```js
4
```

---

# 8. Three Important Decision Cases

At every iteration, we compare:

```js
arr[mid]
```

with:

```js
target
```

There are three possible cases.

### Case 1: Element Found

```js
if (arr[mid] === target) {
    return mid;
}
```

The middle element is equal to the target.

Return the index.

### Case 2: Search in the Right Half

```js
if (arr[mid] < target) {
    left = mid + 1;
}
```

The middle element is smaller than the target.

So, search the right half.

### Case 3: Search in the Left Half

```js
if (arr[mid] > target) {
    right = mid - 1;
}
```

The middle element is greater than the target.

So, search the left half.

### Remember This Table

| Condition | Action |
|---|---|
| `arr[mid] === target` | Return `mid` |
| `arr[mid] < target` | `left = mid + 1` |
| `arr[mid] > target` | `right = mid - 1` |

---

# 9. Standard Binary Search Algorithm

### Algorithm Steps

1. Initialize `left = 0`.
2. Initialize `right = arr.length - 1`.
3. Run a loop while `left <= right`.
4. Calculate the middle index.
5. Compare the middle element with the target.
6. If equal, return the middle index.
7. If smaller, move the left boundary.
8. If greater, move the right boundary.
9. If the loop finishes, return `-1`.

### JavaScript Implementation

```js
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Example
const arr = [-1, 0, 3, 5, 9, 12];

console.log(binarySearch(arr, 9));  // 4
console.log(binarySearch(arr, 15)); // -1
```

### Code Explanation

**1. Initialize boundaries**

```js
let left = 0;
let right = arr.length - 1;
```

We start from the first and last indexes.

**2. Continue while the search range exists**

```js
while (left <= right)
```

As long as the search range contains at least one index, continue searching.

**3. Calculate the middle index**

```js
let mid = left + Math.floor((right - left) / 2);
```

Find the middle position.

**4. Check whether the target is found**

```js
if (arr[mid] === target) {
    return mid;
}
```

**5. Search the right half**

```js
if (arr[mid] < target) {
    left = mid + 1;
}
```

**6. Search the left half**

```js
else {
    right = mid - 1;
}
```

**7. Target not found**

```js
return -1;
```

---

# 10. Why Do We Use `left <= right`?

This is one of the most common Binary Search interview questions.

Consider:

```js
while (left <= right)
```

This means the search continues even when only one element remains.

Example:

```js
const arr = [10];
const target = 10;
```

Initially:

```text
left = 0
right = 0
```

The condition:

```text
0 <= 0
```

is true.

We check the only element and find the target.

If we use:

```js
while (left < right)
```

the standard exact-search implementation may skip checking the final remaining element.

**Interview answer:** We use `left <= right` because both boundaries are included in the current search range.

---

# 11. Why Do We Use `mid + 1` and `mid - 1`?

Suppose:

```js
arr[mid] < target
```

We already checked `mid`.

The middle element cannot be the answer, so we remove it from the search space.

Therefore:

```js
left = mid + 1;
```

Similarly, if:

```js
arr[mid] > target
```

We remove the middle element and everything to its right.

Therefore:

```js
right = mid - 1;
```

**Important:** Forgetting `+1` or `-1` can cause an infinite loop.

---

# 12. Recursive Binary Search

Binary Search can be implemented in two ways:

1. Iterative approach — using a loop.
2. Recursive approach — calling the same function again.

### What Is Recursion?

Recursion is a programming technique in which a function calls itself to solve a smaller version of the same problem.

### Recursive Binary Search Code

```js
function binarySearchRecursive(arr, left, right, target) {
    // Base case: target does not exist
    if (left > right) {
        return -1;
    }

    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] < target) {
        return binarySearchRecursive(
            arr,
            mid + 1,
            right,
            target
        );
    }

    return binarySearchRecursive(
        arr,
        left,
        mid - 1,
        target
    );
}

// Example
const arr = [10, 20, 30, 40, 50];

console.log(
    binarySearchRecursive(arr, 0, arr.length - 1, 40)
);

// Output: 3
```

### Understanding the Base Case

```js
if (left > right) {
    return -1;
}
```

When `left` becomes greater than `right`, no search space remains.

The target is not present.

### Iterative vs Recursive

| Feature | Iterative | Recursive |
|---|---|---|
| Technique | Loop | Function calls |
| Time | O(log n) | O(log n) |
| Auxiliary space | O(1) | O(log n) |
| Implementation | Usually simpler | Uses recursion |
| Stack usage | No recursive stack | Uses call stack |

**Interview recommendation:** Know both implementations, but use iterative Binary Search as your default unless recursion is specifically requested.

---

# 13. Time and Space Complexity

Complexity tells us how the algorithm performs as the input size increases.

### Time Complexity

| Case | Complexity | Explanation |
|---|---|---|
| Best | O(1) | Target is at the first middle position |
| Average | O(log n) | Search space repeatedly reduces |
| Worst | O(log n) | Target is absent or found at the last step |

### Space Complexity

| Implementation | Space Complexity |
|---|---|
| Iterative | O(1) |
| Recursive | O(log n) |

### Why Is Binary Search O(log n)?

Suppose we have 16 elements.

```text
16 → 8 → 4 → 2 → 1
```

The search space is divided by 2 at every step.

Mathematically:

```text
n / 2^k = 1
```

Therefore:

```text
2^k = n
k = log₂(n)
```

So, Binary Search has logarithmic time complexity:

```text
O(log n)
```

---

# 14. Binary Search with Duplicate Elements

Consider:

```js
const arr = [1, 2, 2, 2, 2, 3, 4];
const target = 2;
```

Normal Binary Search may return any index containing `2`.

But interview questions often ask for:

1. First occurrence.
2. Last occurrence.
3. Total number of occurrences.

We need modified Binary Search for these problems.

## 14.1 First Occurrence

We want the smallest index where the target appears.

### Logic

When we find the target, do not return immediately.

Store the answer and continue searching on the left side.

### Code

```js
function firstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            ans = mid;
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}

console.log(firstOccurrence([1, 2, 2, 2, 3], 2));
// Output: 1
```

## 14.2 Last Occurrence

We want the largest index where the target appears.

### Logic

When we find the target, store the answer and continue searching on the right side.

### Code

```js
function lastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            ans = mid;
            left = mid + 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}

console.log(lastOccurrence([1, 2, 2, 2, 3], 2));
// Output: 3
```

## 14.3 Count Occurrences

Formula:

```text
Count = Last Occurrence - First Occurrence + 1
```

### Code

```js
function countOccurrences(arr, target) {
    let first = firstOccurrence(arr, target);
    let last = lastOccurrence(arr, target);

    if (first === -1) {
        return 0;
    }

    return last - first + 1;
}

console.log(countOccurrences([1, 2, 2, 2, 3], 2));
// Output: 3
```

**Time Complexity:** O(log n) for each search, so the complete operation remains O(log n).

---

# 15. Lower Bound and Upper Bound

These are extremely important Binary Search concepts.

## 15.1 Lower Bound

**Lower Bound** is the first index where the element is greater than or equal to the target.

In simple words:

Find the first position where:

```js
arr[index] >= target
```

Example:

```js
const arr = [1, 2, 2, 2, 4, 5];
const target = 2;
```

Lower Bound returns:

```text
1
```

Because index 1 is the first position where the value is at least 2.

### JavaScript Code

```js
function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

console.log(lowerBound([1, 2, 2, 2, 4, 5], 2));
// Output: 1
```

If no element is greater than or equal to the target, it returns `arr.length`.

## 15.2 Upper Bound

**Upper Bound** is the first index where the element is strictly greater than the target.

In simple words:

Find the first position where:

```js
arr[index] > target
```

Example:

```js
const arr = [1, 2, 2, 2, 4, 5];
const target = 2;
```

Upper Bound returns:

```text
4
```

Because index 4 contains 4, the first value greater than 2.

### JavaScript Code

```js
function upperBound(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

console.log(upperBound([1, 2, 2, 2, 4, 5], 2));
// Output: 4
```

### Lower Bound vs Upper Bound

| Concept | Condition |
|---|---|
| Lower Bound | First element `>= target` |
| Upper Bound | First element `> target` |
| First occurrence | Lower Bound, if target exists |
| Last occurrence | Upper Bound minus 1, if target exists |

### Important Interview Formula

```text
First occurrence = lowerBound(arr, target)

Last occurrence = upperBound(arr, target) - 1
```

Always check whether the target actually exists before treating these positions as occurrences.

---

# 16. Binary Search in Descending Arrays

Binary Search can also work on descending sorted arrays.

Example:

```js
const arr = [90, 80, 70, 60, 50, 40];
const target = 60;
```

The comparison conditions must be reversed.

### Code

```js
function binarySearchDescending(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] > target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearchDescending([90, 80, 70, 60, 50], 60));
// Output: 3
```

**Remember:** Ascending and descending arrays need different comparison directions.

---

# 17. Search Insert Position

This is a common interview problem.

### Problem

Given a sorted array and a target, return:
- The index if the target exists.
- Otherwise, the index where the target should be inserted to maintain sorted order.

Example:

```js
arr = [1, 3, 5, 6];
target = 5;
```

Output:

```text
2
```

Another example:

```js
arr = [1, 3, 5, 6];
target = 2;
```

Output:

```text
1
```

### Code

```js
function searchInsert(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

console.log(searchInsert([1, 3, 5, 6], 2));
// Output: 1
```

This is exactly the Lower Bound pattern.

---

# 18. Floor and Ceiling Using Binary Search

These concepts are frequently asked in DSA interviews.

### Floor

The floor of a target is the largest element that is less than or equal to the target.

Example:

```js
arr = [1, 2, 4, 6, 8];
target = 5;
```

Floor = 4.

### Ceiling

The ceiling of a target is the smallest element that is greater than or equal to the target.

Example:

```js
arr = [1, 2, 4, 6, 8];
target = 5;
```

Ceiling = 6.

### Floor Code

```js
function findFloor(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] <= target) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}
```

This returns the index of the floor element.

### Ceiling Code

```js
function findCeiling(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] >= target) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
}
```

This returns the index of the ceiling element.

---

# 19. Search in a Rotated Sorted Array

This is a popular medium-level interview problem.

### What Is a Rotated Sorted Array?

An array is originally sorted, but some elements are moved from the beginning to the end.

Original:

```js
[1, 2, 3, 4, 5, 6, 7]
```

Rotated:

```js
[4, 5, 6, 7, 1, 2, 3]
```

The array is not fully sorted anymore, but at least one half of the current search range is sorted.

### Main Idea

At every step:
1. Find the middle.
2. Check whether the left half is sorted.
3. If it is sorted, check whether the target belongs to that half.
4. Otherwise, search the other half.
5. If the left half is not sorted, the right half must be sorted in the distinct-element version.

### JavaScript Code

```js
function searchRotated(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        // Left half is sorted
        if (arr[left] <= arr[mid]) {
            if (target >= arr[left] && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (target > arr[mid] && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 0));
// Output: 4
```

**Time Complexity:** O(log n) when elements are distinct.

**Note:** Duplicate elements can make it impossible to determine the sorted half immediately. In some cases, we must shrink both boundaries, and worst-case complexity can become O(n).

---

# 20. Find the Minimum in a Rotated Sorted Array

### Problem

Given a rotated sorted array with distinct elements, find its minimum element.

Example:

```js
[4, 5, 6, 7, 0, 1, 2]
```

Output:

```text
0
```

### Logic

Compare the middle element with the rightmost element.

- If `arr[mid] > arr[right]`, the minimum is to the right.
- Otherwise, the minimum is at `mid` or to its left.

### Code

```js
function findMin(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr[left];
}

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
// Output: 0
```

---

# 21. Find Peak Element

### What Is a Peak Element?

A peak element is an element that is greater than its neighboring elements.

Example:

```js
[1, 2, 3, 1]
```

Here, `3` is a peak.

### Logic

Compare the middle element with the next element.

- If `arr[mid] < arr[mid + 1]`, a peak exists on the right.
- Otherwise, a peak exists at `mid` or on the left.

### Code

```js
function findPeakElement(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

console.log(findPeakElement([1, 2, 3, 1]));
// Output: 2
```

**Time Complexity:** O(log n).

This version returns the index of one peak. For an array with one element, index 0 is returned.

---

# 22. Search in a 2D Matrix

Binary Search can also be used on a matrix when its ordering properties allow it.

Consider:

```js
const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];
```

In this problem:
- Each row is sorted.
- The first element of each row is greater than the last element of the previous row.

We can treat the matrix as one sorted array without actually creating a new array.

### Index Conversion

For a matrix with `cols` columns:

```text
row = Math.floor(mid / cols)
col = mid % cols
```

### Code

```js
function searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let rows = matrix.length;
    let cols = matrix[0].length;

    let left = 0;
    let right = rows * cols - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        let row = Math.floor(mid / cols);
        let col = mid % cols;

        if (matrix[row][col] === target) {
            return true;
        }

        if (matrix[row][col] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

console.log(searchMatrix(matrix, 16));
// Output: true
```

**Time Complexity:** O(log(m × n)).

**Important:** This approach requires the entire matrix to behave like one sorted sequence. A matrix where only rows and columns are independently sorted is a different problem and needs a different strategy.

---

# 23. Binary Search on Answer

This is one of the most important advanced Binary Search patterns.

In normal Binary Search, we search for an element.

In **Binary Search on Answer**, we search for the smallest or largest valid answer in a range.

### Simple Example

Imagine you want to find the minimum speed needed to complete a task within a given time.

You can test different speeds:

```text
Speed 1 → Not possible
Speed 2 → Not possible
Speed 3 → Possible
Speed 4 → Possible
Speed 5 → Possible
```

Notice the pattern:

```text
False False True True True
```

The answer is the first `True`.

This is a monotonic condition.

### General Pattern

```js
function binarySearchAnswer() {
    let left = minimumPossibleAnswer;
    let right = maximumPossibleAnswer;
    let ans = -1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (isPossible(mid)) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
}
```

This example searches for the minimum feasible answer.

### Important Recognition Rule

Use Binary Search on Answer when:
- The answer lies in a known numeric range.
- You can test whether a candidate answer is valid.
- The validity condition is monotonic.
- You need the minimum feasible or maximum feasible answer.

---

# 24. Important Binary Search on Answer Problems

## 24.1 Square Root of a Number

### Problem

Find the integer square root of a non-negative number.

Example:

```text
Input: 25
Output: 5
```

Another example:

```text
Input: 30
Output: 5
```

Because:

```text
5 × 5 = 25
6 × 6 = 36
```

The integer square root is 5.

### Code

```js
function mySqrt(x) {
    if (x < 2) {
        return x;
    }

    let left = 1;
    let right = x;
    let ans = 0;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (mid <= Math.floor(x / mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}

console.log(mySqrt(30));
// Output: 5
```

Using `x / mid` instead of `mid * mid` avoids potential multiplication overflow in languages with fixed-width integer types.

## 24.2 Koko Eating Bananas

### Problem

Koko has several piles of bananas and must finish eating within `h` hours.

Find the minimum eating speed.

Example:

```js
piles = [3, 6, 7, 11];
h = 8;
```

### Idea

Try different speeds.

For a given speed `k`, hours required are:

```text
ceil(pile1 / k) +
ceil(pile2 / k) +
ceil(pile3 / k) + ...
```

If the required hours are less than or equal to `h`, the speed is valid.

### Code

```js
function minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let ans = right;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        let hours = 0;

        for (let pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        if (hours <= h) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
// Output: 4
```

## 24.3 Capacity to Ship Packages Within D Days

### Problem

You are given package weights and a number of days.

Find the minimum ship capacity required to ship all packages within the given number of days, while keeping their order.

### Idea

Minimum capacity:

```text
Maximum package weight
```

Maximum capacity:

```text
Sum of all package weights
```

For every candidate capacity, calculate how many days are needed.

If the number of days is valid, try a smaller capacity.

### Code

```js
function shipWithinDays(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((sum, weight) => sum + weight, 0);

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        let requiredDays = 1;
        let currentLoad = 0;

        for (let weight of weights) {
            if (currentLoad + weight > mid) {
                requiredDays++;
                currentLoad = 0;
            }

            currentLoad += weight;
        }

        if (requiredDays <= days) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// Output: 15
```

## 24.4 Aggressive Cows

### Problem

You are given positions of stalls and a number of cows.

Place cows in stalls so that the minimum distance between any two placed cows is as large as possible.

### Idea

1. Sort the stall positions.
2. Set minimum distance to 1.
3. Set maximum distance to the difference between the last and first stall.
4. Check whether cows can be placed with a given minimum distance.
5. If possible, try a larger distance.
6. Otherwise, try a smaller distance.

### Code

```js
function canPlaceCows(stalls, cows, distance) {
    let count = 1;
    let lastPosition = stalls[0];

    for (let i = 1; i < stalls.length; i++) {
        if (stalls[i] - lastPosition >= distance) {
            count++;
            lastPosition = stalls[i];
        }

        if (count >= cows) {
            return true;
        }
    }

    return false;
}

function aggressiveCows(stalls, cows) {
    stalls.sort((a, b) => a - b);

    let left = 1;
    let right = stalls[stalls.length - 1] - stalls[0];
    let ans = 0;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (canPlaceCows(stalls, cows, mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}

console.log(aggressiveCows([1, 2, 4, 8, 9], 3));
// Output: 3
```

## 24.5 Book Allocation Problem

### Problem

Given the number of pages in each book and the number of students, allocate books so that:
- Every student receives at least one book.
- Books are allocated in contiguous order.
- The maximum pages assigned to any student are minimized.

### Idea

Search for the minimum possible maximum page count.

For a candidate maximum, check whether the books can be allocated to the available students.

### Code

```js
function canAllocateBooks(pages, students, limit) {
    let usedStudents = 1;
    let currentPages = 0;

    for (let page of pages) {
        if (page > limit) {
            return false;
        }

        if (currentPages + page > limit) {
            usedStudents++;
            currentPages = page;
        } else {
            currentPages += page;
        }
    }

    return usedStudents <= students;
}

function allocateBooks(pages, students) {
    if (students > pages.length || students <= 0) {
        return -1;
    }

    let left = Math.max(...pages);
    let right = pages.reduce((sum, page) => sum + page, 0);

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (canAllocateBooks(pages, students, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

console.log(allocateBooks([12, 34, 67, 90], 2));
// Output: 113
```

**Important:** These problems share the same pattern: define a search range, write a feasibility function, and move the boundary according to whether the candidate answer is valid.

---

# 25. Advanced: Median of Two Sorted Arrays

This is a hard-level interview problem.

### Problem

Given two sorted arrays, find their median.

Example:

```js
nums1 = [1, 3];
nums2 = [2];
```

Combined sorted array:

```js
[1, 2, 3]
```

Median:

```text
2
```

The challenge is to solve it in:

```text
O(log(min(m, n)))
```

### Main Idea

We use Binary Search to partition the smaller array.

We want to divide both arrays into left and right parts such that:
- Every element on the left is less than or equal to every element on the right.
- The left side has the correct number of elements.

### JavaScript Code

```js
function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;

    let left = 0;
    let right = m;

    while (left <= right) {
        let cut1 = Math.floor((left + right) / 2);
        let cut2 = Math.floor((m + n + 1) / 2) - cut1;

        let l1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
        let r1 = cut1 === m ? Infinity : nums1[cut1];

        let l2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
        let r2 = cut2 === n ? Infinity : nums2[cut2];

        if (l1 <= r2 && l2 <= r1) {
            if ((m + n) % 2 === 0) {
                return (
                    Math.max(l1, l2) +
                    Math.min(r1, r2)
                ) / 2;
            }

            return Math.max(l1, l2);
        }

        if (l1 > r2) {
            right = cut1 - 1;
        } else {
            left = cut1 + 1;
        }
    }

    return 0;
}

console.log(findMedianSortedArrays([1, 3], [2]));
// Output: 2

console.log(findMedianSortedArrays([1, 2], [3, 4]));
// Output: 2.5
```

**Time Complexity:** O(log(min(m, n))).

This is an advanced problem. First become comfortable with ordinary Binary Search, boundaries, and lower/upper bounds.

---

# 26. Important Binary Search Patterns

Learn to recognize these patterns in interviews.

| Pattern | What to Find | Typical Example |
|---|---|---|
| Basic Binary Search | Exact element | Search in Sorted Array |
| First Occurrence | First matching index | First and Last Position |
| Last Occurrence | Last matching index | Count Occurrences |
| Lower Bound | First value >= target | Search Insert Position |
| Upper Bound | First value > target | Count Duplicates |
| Floor | Largest value <= target | Floor in Sorted Array |
| Ceiling | Smallest value >= target | Ceiling in Sorted Array |
| Rotated Array | Search after rotation | Search in Rotated Sorted Array |
| Minimum in Rotated Array | Minimum value | Find Minimum |
| Peak Search | Peak index | Find Peak Element |
| Matrix Search | Find target in ordered matrix | Search a 2D Matrix |
| Binary Search on Answer | Minimum/maximum valid answer | Koko Eating Bananas |
| Partition Search | Correct division of two arrays | Median of Two Sorted Arrays |

---

# 27. Common Mistakes in Binary Search

### Mistake 1: Using Binary Search on Unsorted Data

Incorrect:

```js
const arr = [40, 10, 50, 20, 30];
```

The normal ascending-order Binary Search logic cannot be used directly.

### Mistake 2: Incorrect Loop Condition

For standard exact search:

```js
while (left <= right)
```

Using `<` can skip the last remaining candidate.

For boundary searches, however, `left < right` is often correct because the right boundary may be exclusive.

### Mistake 3: Not Updating the Search Range Correctly

Correct:

```js
left = mid + 1;
right = mid - 1;
```

Incorrect:

```js
left = mid;
right = mid;
```

These incorrect updates can cause an infinite loop.

### Mistake 4: Forgetting Duplicates

Normal Binary Search may return any matching index.

If the problem asks for the first or last occurrence, use a modified search.

### Mistake 5: Confusing Inclusive and Exclusive Boundaries

Two common styles exist:

**Inclusive interval:**

```js
let left = 0;
let right = arr.length - 1;

while (left <= right) {
    // ...
}
```

**Half-open interval:**

```js
let left = 0;
let right = arr.length;

while (left < right) {
    // ...
}
```

Do not mix their update rules.

### Mistake 6: Incorrect Mid Calculation

Use:

```js
let mid = left + Math.floor((right - left) / 2);
```

### Mistake 7: Ignoring Empty Arrays

Always consider:

```js
[]
```

An empty array should not cause invalid indexing.

### Mistake 8: Forgetting That Duplicates Affect Rotated Search

The distinct-element rotated-array algorithm cannot always determine the sorted half when duplicates are present.

### Mistake 9: Wrong Binary Search on Answer Direction

Ask yourself:

- If a candidate answer is valid, should I try a smaller answer?
- Or should I try a larger answer?

This determines which boundary to update.

---

# 28. Edge Cases to Test in Interviews

Always test your implementation with these cases.

| Case | Input | Expected Result |
|---|---|---|
| Empty array | `[]`, target `5` | `-1` |
| Single element found | `[5]`, target `5` | `0` |
| Single element missing | `[5]`, target `3` | `-1` |
| First element | `[1, 2, 3]`, target `1` | `0` |
| Last element | `[1, 2, 3]`, target `3` | `2` |
| Target smaller | `[2, 4, 6]`, target `1` | `-1` |
| Target larger | `[2, 4, 6]`, target `8` | `-1` |
| Duplicate elements | `[1, 2, 2, 3]` | Depends on required occurrence |
| Large array | Large sorted input | Correct result in O(log n) |

---

# 29. Binary Search Interview Questions and Answers

### Q1. What is Binary Search?

Binary Search is an efficient searching algorithm that repeatedly divides a sorted search space into two halves to find a target.

### Q2. Which technique does Binary Search use?

Divide and Conquer.

### Q3. What is the time complexity?

O(log n).

### Q4. What is the space complexity of iterative Binary Search?

O(1).

### Q5. What is the space complexity of recursive Binary Search?

O(log n) due to recursive function calls.

### Q6. Why does Binary Search require sorted data?

Because it uses ordering to determine which half can be safely eliminated.

### Q7. Can Binary Search work on descending arrays?

Yes. The comparison conditions must be reversed.

### Q8. Can Binary Search work with duplicate elements?

Yes. But normal Binary Search does not guarantee the first or last occurrence.

### Q9. What is the difference between Lower Bound and Upper Bound?

- Lower Bound: First element greater than or equal to the target.
- Upper Bound: First element strictly greater than the target.

### Q10. Why do we use `mid + 1`?

Because the middle element has already been checked and must be excluded from the remaining search range.

### Q11. Why do we use `left <= right`?

Because the current search interval includes both boundaries, and one remaining element must still be checked.

### Q12. What happens when the target is not found?

The search range becomes empty, and standard exact search returns `-1`.

### Q13. Can we use Binary Search on an unsorted array?

Not with standard sorted-array logic. First establish a valid ordering or use another algorithm.

### Q14. What is Binary Search on Answer?

It is a technique where we search over possible answers using a monotonic feasibility condition.

### Q15. What is a monotonic function?

A function or condition is monotonic when its result changes in only one direction over the search range, such as:

```text
False False False True True True
```

### Q16. What is the difference between `left < right` and `left <= right`?

- `left <= right`: Common with inclusive boundaries.
- `left < right`: Common with half-open intervals or boundary searches where the answer is retained in the range.

### Q17. Can Binary Search be applied to a linked list?

It is generally not efficient because linked lists do not support constant-time random access by index.

### Q18. Is Binary Search always better than Linear Search?

No. Linear Search may be better for small or unsorted data, or when random access is unavailable.

### Q19. What is the maximum number of comparisons for n elements?

It is proportional to log₂(n), with exact counts depending on the implementation and whether the target is found.

### Q20. What is the most important skill in Binary Search interviews?

Maintaining the correct search-space invariant and updating boundaries correctly.

---

# 30. When Should You Think About Binary Search?

During interviews, look for these clues:

- The array is sorted.
- The problem asks for first or last occurrence.
- The problem asks for minimum or maximum in a rotated array.
- The answer lies within a numeric range.
- You need the minimum feasible value.
- You need the maximum possible value.
- A condition changes monotonically from false to true.
- The brute-force solution checks every possible answer.

**Important:** A problem does not need to contain the words "Binary Search" to require Binary Search.

---

# 31. DSA Practice Roadmap: Beginner to Advanced

Follow this order. Do not jump directly to hard problems.

## Level 1: Beginner — Basic Binary Search

1. Binary Search
2. Search Insert Position
3. Sqrt(x)
4. Search in a Sorted Array
5. Binary Search in a Descending Array

**Goal:** Understand `left`, `right`, `mid`, and the three comparison cases.

## Level 2: Easy to Medium — Boundary Problems

6. First and Last Position of Element in Sorted Array
7. Count Occurrences in Sorted Array
8. Lower Bound
9. Upper Bound
10. Floor in a Sorted Array
11. Ceiling in a Sorted Array

**Goal:** Learn how to continue searching after finding a matching value.

## Level 3: Medium — Modified Binary Search

12. Search in Rotated Sorted Array
13. Find Minimum in Rotated Sorted Array
14. Search in Rotated Sorted Array II
15. Find Peak Element
16. Find Single Element in a Sorted Array
17. Search a 2D Matrix

**Goal:** Learn how to recognize a sorted portion or a boundary condition.

## Level 4: Medium to Hard — Binary Search on Answer

18. Koko Eating Bananas
19. Capacity to Ship Packages Within D Days
20. Minimum Days to Make Bouquets
21. Aggressive Cows
22. Book Allocation Problem
23. Split Array Largest Sum
24. Find the Smallest Divisor Given a Threshold

**Goal:** Learn to create and validate a feasibility function.

## Level 5: Advanced — Interview-Level Problems

25. Median of Two Sorted Arrays
26. Kth Element of Two Sorted Arrays
27. Find K-th Smallest Pair Distance
28. Maximum Number of Removable Characters
29. Find in Mountain Array
30. Search in an Infinite Sorted Array

**Goal:** Become comfortable with complex search spaces, partitioning, and boundary conditions.

---

# 32. Final Revision Cheat Sheet

### Standard Binary Search

```js
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

### Important Formulas

```text
Middle index:
mid = left + floor((right - left) / 2)

First occurrence:
Lower Bound

Last occurrence:
Upper Bound - 1

Count:
Last - First + 1

Lower Bound:
First element >= target

Upper Bound:
First element > target

Binary Search Time:
O(log n)

Iterative Space:
O(1)

Recursive Space:
O(log n)
```

### Boundary Update Cheat Sheet

| Situation | Update |
|---|---|
| Exact target found | Return `mid` |
| Search right | `left = mid + 1` |
| Search left | `right = mid - 1` |
| Found target, seek first | `right = mid - 1` |
| Found target, seek last | `left = mid + 1` |
| Candidate is valid, seek minimum | Move right boundary left |
| Candidate is valid, seek maximum | Move left boundary right |

---

# 33. Final Learning Checklist

Use this checklist to track your progress.

## Fundamentals
- [ ] Understand Linear Search.
- [ ] Understand Binary Search.
- [ ] Understand Divide and Conquer.
- [ ] Understand sorted-data requirements.
- [ ] Understand `left`, `right`, and `mid`.
- [ ] Implement iterative Binary Search.
- [ ] Implement recursive Binary Search.
- [ ] Understand time and space complexity.

## Intermediate
- [ ] Find first occurrence.
- [ ] Find last occurrence.
- [ ] Count occurrences.
- [ ] Implement Lower Bound.
- [ ] Implement Upper Bound.
- [ ] Solve Search Insert Position.
- [ ] Find Floor and Ceiling.
- [ ] Search in a rotated sorted array.
- [ ] Find minimum in a rotated array.
- [ ] Find a peak element.
- [ ] Search in a 2D matrix.

## Advanced
- [ ] Understand monotonic functions.
- [ ] Understand Binary Search on Answer.
- [ ] Solve Square Root.
- [ ] Solve Koko Eating Bananas.
- [ ] Solve Ship Packages Within D Days.
- [ ] Solve Aggressive Cows.
- [ ] Solve Book Allocation.
- [ ] Solve Median of Two Sorted Arrays.

---

# 34. Final Advice for Interviews

Do not memorize every Binary Search solution separately.

Understand the common pattern.

Most Binary Search problems are built around three questions:

1. **What is my search space?**  
   Identify the possible indexes or answer range.

2. **What condition tells me which direction to move?**  
   Compare the middle value or evaluate a feasibility function.

3. **What should happen when the answer is found or the range becomes empty?**  
   Return the index, save the answer, or return the correct boundary.

Master these concepts:

- Standard Binary Search
- First and Last Occurrence
- Lower Bound and Upper Bound
- Search in Rotated Sorted Array
- Binary Search on Answer

Once these patterns become clear, many medium and hard Binary Search interview problems become easier to understand.

**Your target:** Learn the logic, dry-run the code manually, implement it without looking at notes, and then solve problems independently.

---

# 35. Solved Practice Walkthroughs

Explore the dedicated step-by-step problem walkthroughs, dry runs, diagrams, and implementations:

| Problem | Difficulty | Search Type | Walkthrough & Code |
|---|:---:|---|---|
| [LeetCode 69: Sqrt(x)](./LeetCode/Sqrt%28x%29/Question.md) | Easy | Binary Search on Answer Space | [Full Guide & Diagrams](./LeetCode/Sqrt%28x%29/Approch1.md) • [JS](./LeetCode/Sqrt%28x%29/code/solution.js) • [Python](./LeetCode/Sqrt%28x%29/code/solution.py) |

### Code Implementations in this Chapter:
- [Classical Binary Search (JavaScript)](./binary_search.js)
- [Classical Binary Search & Bisect (Python)](./binary_search.py)
