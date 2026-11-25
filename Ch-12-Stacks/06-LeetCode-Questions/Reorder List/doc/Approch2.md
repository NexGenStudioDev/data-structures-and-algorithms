# Approach 2: Pure Recursion Using Backtracking | JavaScript

## Intuition

In the previous approach, we used an array as a stack to store all the nodes of the linked list.

We then used `stack.pop()` to access nodes from the end and insert them between nodes from the beginning.

However, we can solve the same problem **without manually creating a stack** by using recursion.

The main idea is that **recursion uses the call stack internally**.

When a recursive function reaches the end of a linked list, the recursive calls start returning in reverse order. This process is called **backtracking**.

We can use this behavior to access the nodes from the end while maintaining another pointer that moves from the beginning.

For example:

```
Original List:

1 → 2 → 3 → 4 → 5 → null

Expected List:

1 → 5 → 2 → 4 → 3 → null
```

We need to connect:

- The first node with the last node.
- The second node with the second-last node.
- Continue until the pointers meet or cross.

Instead of storing nodes in an additional array, we can use recursive backtracking to process the nodes in reverse order.

### Key Observation

When we call:

```
reorder(right.next);
```

the recursive function moves forward until it reaches `null`.

During backtracking, the nodes are processed in the opposite order.

```
Forward recursion:

1 → 2 → 3 → 4 → 5 → null

Backtracking:

5 → 4 → 3 → 2 → 1
```

This gives us access to the last nodes without explicitly using `stack.push()` or `stack.pop()`.

---

## Approach

We use two pointers:

- `left`: Starts at the head and moves forward.
- `right`: Represents the node being processed during recursive backtracking.

We also use a boolean variable `finished` to stop modifying the list once the middle is reached.

### Step 1: Handle Edge Cases

```
if (!head || !head.next) return;
```

If the linked list is empty or contains only one node, no reordering is required.

### Step 2: Initialize the Left Pointer

```
let left = head;
let finished = false;
```

The `left` pointer starts at the first node.

The `finished` variable indicates whether the reordering process is complete.

### Step 3: Create a Recursive Function

```
function reorder(right) {
    if (!right) return;

    reorder(right.next);
}
```

The function recursively moves toward the end of the linked list.

When `right` becomes `null`, the base case is reached.

The recursive calls then begin returning.

### Step 4: Stop If Reordering Is Complete

```
if (finished) return;
```

Once the middle of the list has been reached, we must stop modifying pointers.

Otherwise, later recursive calls could change the already reordered list.

### Step 5: Check Whether the Pointers Have Met or Crossed

```
if (left === right || left.next === right) {
    right.next = null;
    finished = true;
    return;
}
```

There are two stopping conditions.

**Condition 1: `left === right`**

Both pointers are pointing to the same node.

This occurs at the middle node of an odd-length linked list.

Example:

```
1 → 2 → 3 → 4 → 5

        ↑
     Middle
```

**Condition 2: `left.next === right`**

The pointers have reached the two adjacent middle nodes.

This occurs in an even-length linked list.

Example:

```
1 → 2 → 3 → 4

    ↑   ↑
   left right
```

In either case, we set:

```
right.next = null;
```

This ensures the reordered linked list ends correctly and does not contain a cycle.

### Step 6: Insert the Right Node After the Left Node

```
let next = left.next;

left.next = right;
right.next = next;
```

First, we save the original next node of `left`.

Then, we connect the current `left` node to the `right` node.

Finally, we connect the `right` node to the saved next node.

Example:

```
Before:

1 → 2 → 3 → 4 → 5

left = 1
right = 5
next = 2
```

After:

```
1 → 5 → 2 → 3 → 4
```

The remaining links are adjusted during subsequent recursive calls.

### Step 7: Move the Left Pointer Forward

```
left = next;
```

After inserting the right node, move `left` to the next original node.

The next recursive return will process the previous node from the end.

---

## Detailed Dry Run

### Example 1: Odd-Length Linked List

**Input:**

```
1 → 2 → 3 → 4 → 5 → null
```

### Phase 1: Recursive Calls

The recursive function moves to the end.

```
reorder(1)
    reorder(2)
        reorder(3)
            reorder(4)
                reorder(5)
                    reorder(null)
```

When `right === null`, the base case is reached.

Now backtracking begins.

### Phase 2: Backtracking

| Step | Left | Right | Action              |
| ---- | ---- | ----- | ------------------- |
| 1    | 1    | 5     | Insert 5 after 1    |
| 2    | 2    | 4     | Insert 4 after 2    |
| 3    | 3    | 3     | Pointers meet; stop |

**Step 1:**

```
left = 1
right = 5
next = 2
```

Connect:

```
1 → 5 → 2
```

Move `left` to node `2`.

**Step 2:**

```
left = 2
right = 4
next = 3
```

Connect:

```
1 → 5 → 2 → 4 → 3
```

Move `left` to node `3`.

**Step 3:**

```
left = 3
right = 3
```

Both pointers meet.

Set:

```
right.next = null;
finished = true;
```

Stop modifying the linked list.

**Final Output:**

```
1 → 5 → 2 → 4 → 3 → null
```

### Example 2: Even-Length Linked List

**Input:**

```
1 → 2 → 3 → 4 → null
```

| Step | Left | Right | Action                      |
| ---- | ---- | ----- | --------------------------- |
| 1    | 1    | 4     | Insert 4 after 1            |
| 2    | 2    | 3     | Adjacent middle nodes; stop |

**Final Output:**

```
1 → 4 → 2 → 3 → null
```

---

## Complexity Analysis

### Time Complexity: O(n)

We recursively visit every node once while moving toward the end of the linked list.

During backtracking, each recursive call performs a constant amount of work.

Therefore:

```
Forward recursion = O(n)

Backtracking = O(n)

Total = O(n) + O(n)
```

Ignoring constant factors:

**Time Complexity: O(n)**

### Space Complexity: O(n)

We do not create an additional array or explicit stack.

However, recursion internally uses the JavaScript call stack.

For a linked list containing `n` nodes, the recursion depth can reach `n`.

Therefore:

**Space Complexity: O(n)**

The algorithm uses O(1) explicit auxiliary variables, but O(n) total auxiliary space because of recursion.

---

## JavaScript Code

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Modify head in-place.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;

    let left = head;
    let finished = false;

    function reorder(right) {
        // Base case
        if (!right) return;

        // Move to the end of the linked list
        reorder(right.next);

        // Stop modifying nodes after reaching the middle
        if (finished) return;

        // Stop when pointers meet or become adjacent
        if (left === right || left.next === right) {
            right.next = null;
            finished = true;
            return;
        }

        // Save the next original node
        let next = left.next;

        // Insert the right node after the left node
        left.next = right;
        right.next = next;

        // Move the left pointer forward
        left = next;
    }

    reorder(head);
};
```

---

## Comparison With Approach 1

| Feature                | Approach 1: Explicit Stack | Approach 2: Pure Recursion |
| ---------------------- | -------------------------- | -------------------------- |
| Technique              | Array used as stack        | Recursive backtracking     |
| Access last nodes      | `stack.pop()`              | Returning recursive calls  |
| Additional array       | Yes                        | No                         |
| Time complexity        | O(n)                       | O(n)                       |
| Space complexity       | O(n)                       | O(n)                       |
| Modifies list in-place | Yes                        | Yes                        |
| Main concept           | LIFO using array           | LIFO using call stack      |

Both approaches are valid.

The main difference is that Approach 1 explicitly stores node references in an array, while Approach 2 relies on the recursive call stack.

---

## Important Interview Questions

### Q1. How can recursion access nodes in reverse order?

Recursion moves forward through the linked list until it reaches the base case.

When the recursive calls return, the nodes are processed in reverse order because the call stack follows the Last In, First Out (LIFO) principle.

### Q2. Does this approach use a stack?

Yes.

It uses the **implicit recursion call stack**, not a manually created stack array.

### Q3. Why do we need two pointers?

The `left` pointer accesses nodes from the beginning.

The `right` parameter accesses nodes from the end during backtracking.

Together, they allow us to reorder the linked list.

### Q4. Why do we save `left.next` before changing pointers?

Because we need to remember the next original node.

If we overwrite `left.next` without saving it, we may lose access to the remaining nodes.

### Q5. Why do we need a finished variable?

Because the recursive calls continue returning even after the middle is reached.

The `finished` variable prevents additional pointer modifications.

### Q6. Why do we set right.next to null?

To terminate the reordered linked list and prevent cycles.

### Q7. Is this approach O(1) space?

No.

Although we do not use an additional array, the recursive call stack requires O(n) space.

---

## Key Takeaways

1. Recursion can process linked-list nodes in reverse order through backtracking.
2. We do not need to create a separate stack array.
3. The JavaScript call stack internally stores the recursive function calls.
4. The `left` pointer moves from the beginning.
5. The `right` parameter processes nodes from the end during backtracking.
6. We must save the original next node before modifying pointers.
7. We must stop when the pointers meet or become adjacent.
8. The reordered list must end with `null` to avoid cycles.
9. The algorithm runs in O(n) time and uses O(n) recursion stack space.

**Final Complexity:**

- **Time:** O(n)
- **Space:** O(n)
- **Technique:** Recursion + Backtracking + Two Pointers

