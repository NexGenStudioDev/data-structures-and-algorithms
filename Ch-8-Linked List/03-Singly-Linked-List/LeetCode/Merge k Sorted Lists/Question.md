# 23. Merge K Sorted Lists

# Problem Statement

You are given an array named `lists` containing **k sorted singly linked lists**. Each element in the array represents the **head node** of a linked list, and every linked list is already sorted in **ascending order**.

Your task is to **merge all of these linked lists into one single sorted linked list** while maintaining the sorted order, and return the head of the merged linked list.

Unlike merging two linked lists, this problem requires merging **multiple linked lists (k lists)** efficiently. The challenge is to produce one sorted linked list containing **every node from every input list**.

The solution should be efficient enough to handle a large number of linked lists and nodes.

---

# Understanding the Input

The input is **not** a 2D array.

The input is an **array of linked list head nodes**.

For example,

```javascript
lists = [
    List1,
    List2,
    List3
]
```

Internally,

```text
lists
│
├── Head1 → 1 → 4 → 5
├── Head2 → 1 → 3 → 4
└── Head3 → 2 → 6
```

Each element inside `lists` points to the **head** of an already sorted linked list.

---

# Goal

Merge all linked lists into one sorted linked list.

Example

```text
Input

List1

1 → 4 → 5

List2

1 → 3 → 4

List3

2 → 6
```

Output

```text
1 → 1 → 2 → 3 → 4 → 4 → 5 → 6
```

---

# Input Format

* `lists` is an array containing `k` linked list head nodes.
* Each linked list is sorted in ascending order.
* Every node contains:

  * `val` → integer value
  * `next` → pointer to the next node
* Some linked lists may be empty (`null`).

---

# Output Format

Return the **head node** of the merged sorted linked list.

If every linked list is empty, return `null`.

---

# Example 1

### Input

```javascript
lists = [
    [1,4,5],
    [1,3,4],
    [2,6]
]
```

Internally,

```text
List1

1 → 4 → 5

List2

1 → 3 → 4

List3

2 → 6
```

### Output

```text
1 → 1 → 2 → 3 → 4 → 4 → 5 → 6
```

### Explanation

The merged linked list contains every node from all three linked lists while maintaining ascending order.

---

# Example 2

### Input

```javascript
lists = []
```

### Output

```text
[]
```

### Explanation

There are no linked lists to merge.

Return `null`.

---

# Example 3

### Input

```javascript
lists = [[]]
```

### Output

```text
[]
```

### Explanation

The array contains one linked list, but that linked list is empty.

Return `null`.

---

# Constraints

```text
k == lists.length

0 ≤ k ≤ 10^4

0 ≤ lists[i].length ≤ 500

-10^4 ≤ Node.val ≤ 10^4

lists[i] is sorted in ascending order.

The total number of nodes across all linked lists will not exceed 10^4.
```

---

# Visual Representation

```text
Input

lists

│
├── 1 → 4 → 5
├── 1 → 3 → 4
└── 2 → 6

            │
            ▼

Merge

            │
            ▼

1 → 1 → 2 → 3 → 4 → 4 → 5 → 6
```

---

# Important Observations

* Every linked list is **already sorted**.
* The input is an **array of linked lists**, not an array of integers.
* We need to merge nodes by changing their `next` pointers.
* Creating a completely new array and sorting it works but does not take advantage of the sorted input and is not the intended optimal solution.
* Since all linked lists are sorted, we should use this property to build a more efficient algorithm.

---

# Edge Cases

Handle the following carefully:

### Empty input

```javascript
lists = []
```

Return

```text
null
```

---

### All lists are empty

```javascript
lists = [
    [],
    [],
    []
]
```

Return

```text
null
```

---

### Only one linked list

```javascript
lists = [
    1 → 2 → 3
]
```

Return the same linked list.

---

### Duplicate values

```javascript
1 → 2 → 2

2 → 2 → 5
```

Output

```text
1 → 2 → 2 → 2 → 2 → 5
```

---

### Negative numbers

```javascript
-10 → -3 → 4

-8 → 2
```

Output

```text
-10 → -8 → -3 → 2 → 4
```

---

# Expected Complexity

Let

* **N** = Total number of nodes
* **k** = Number of linked lists

The optimal solution should run in

```text
Time : O(N log k)

Space : O(k)
```

---

# Function Signature

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

};
```

---

# Solution Approaches

There are multiple ways to solve this problem, each with different trade-offs.

## Approach 1: Collect All Values + Sort (Brute Force)

**Idea:**

* Traverse every linked list.
* Store all node values in an array.
* Sort the array.
* Create a new linked list from the sorted values.

**Time Complexity**

```text
O(N log N)
```

**Space Complexity**

```text
O(N)
```

**Pros**

* Very easy to understand.
* Simple to implement.

**Cons**

* Ignores the fact that the linked lists are already sorted.
* Not the optimal solution.


[Approach 1 Solution Link](./Solution/Approch1.md)


---

## Approach 2: Sequential Merge (Merge One by One)

**Idea:**

* Take the first linked list as the initial answer.
* Merge it with the second linked list.
* Store the merged result.
* Merge this result with the third linked list.
* Continue until every linked list has been merged.

**Time Complexity**

```text
O(N × k)
```

**Space Complexity**

```text
O(1)
```

**Pros**

* Easy to understand.
* Reuses the classic "Merge Two Sorted Lists" algorithm.

**Cons**

* The merged list becomes larger after every iteration.
* Previously processed nodes are traversed multiple times.
* Not efficient when `k` is large.

---

[Approach 2 Solution Link](./Solution/Approch2.md)

## Approach 3: Divide and Conquer

**Idea:**

* Similar to Merge Sort.
* Merge linked lists in pairs.
* After one round, the number of linked lists is reduced by half.
* Continue until only one linked list remains.

Example

```text
Round 1

L1 + L2

L3 + L4

L5 + L6

↓

Round 2

(L1+L2) + (L3+L4)

(L5+L6)

↓

Round 3

Final Merge
```

**Time Complexity**

```text
O(N log k)
```

**Space Complexity**

```text
O(1)
```

**Pros**

* Much faster than sequential merging.
* Very common interview solution.
* Optimal time complexity.

---

## Approach 4: Priority Queue (Min Heap) ⭐ Recommended

**Idea:**

* Insert the head node of every linked list into a Min Heap.
* Remove the smallest node.
* Add it to the answer.
* Insert its next node into the heap.
* Repeat until the heap becomes empty.

The heap always contains the smallest current node from each linked list.

**Time Complexity**

```text
O(N log k)
```

**Space Complexity**

```text
O(k)
```

**Pros**

* Optimal solution.
* Processes every node exactly once.
* Efficient even when the number of linked lists is very large.
* Most commonly expected solution in coding interviews and LeetCode discussions.

---

[Approach 4 Solution Link](./Solution/Approch3.md)

# Recommendation

If you're learning this problem progressively, solve it in this order:

1. **Collect & Sort** – Understand the problem.
2. **Sequential Merge** – Learn how to merge two sorted linked lists repeatedly.
3. **Divide & Conquer** – Learn the optimal recursive/iterative merge strategy.
4. **Priority Queue (Min Heap)** – Master the interview-preferred optimal solution with `O(N log k)` time complexity.
