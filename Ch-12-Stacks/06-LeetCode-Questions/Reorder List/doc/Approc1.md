# Intuition

We are given the `head` of a singly linked list, and we need to reorder its nodes in the following pattern:

```
L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...
```

For example:

**Input:**

```
1 → 2 → 3 → 4 → 5 → null
```

**Expected Output:**

```
1 → 5 → 2 → 4 → 3 → null
```

My first thought was to use a **Stack and Two Pointers**.

A stack follows the **LIFO (Last In, First Out)** principle. This means the last node pushed into the stack will be the first node popped.

If we store the memory references of all linked list nodes in a stack, we can easily access the nodes from the end of the list.

At the same time, we can use two pointers to traverse the original linked list from the beginning.

By combining these two techniques, we can connect nodes alternately from the beginning and end without changing their values.

The main idea is:

- Use a stack to access nodes from the end.
- Use two pointers (`P1` and `P2`) to track nodes from the beginning.
- Reconnect the existing nodes in the required order.
- Stop after processing half of the linked list.
- Set the last node's `next` to `null` to prevent a cycle.

# Approach

### Step 1: Create a Stack

Create an empty array named `stack`.

Traverse the linked list using a pointer called `current`.

Push each node's reference into the stack.

```
let stack = [];

let current = head;

while (current) {
    stack.push(current);
    current = current.next;
}
```

We store the **actual nodes**, not just their values.

### Step 2: Initialize Two Pointers

Create two pointers:

```
let P1 = head;
let P2 = head.next;
```

- `P1` points to the current node.
- `P2` points to the next node in the original linked list.

### Step 3: Calculate the Middle

Since the stack already contains all the nodes, we can use its length.

```
let len = stack.length;
let mid = Math.floor(len / 2);
```

We only need `mid` iterations to reorder the linked list.

### Step 4: Reorder the Nodes

For each iteration:

1. Store `P2` in `temp`.
2. Pop the last node from the stack.
3. Connect `P1.next` to the popped node.
4. Connect the popped node's `next` to `temp`.
5. Move `P1` and `P2` forward.

```
for (let i = 0; i < mid; i++) {
    let temp = P2;
    let node = stack.pop();

    P1.next = node;
    P1.next.next = temp;

    P1 = temp;
    P2 = temp.next;
}
```

### Step 5: Terminate the Linked List

After reordering, set the last node's `next` to `null`.

```
P1.next = null;
```

This prevents unwanted connections or cycles.

---

# Dry Run

**Input:**

```
head = [1, 2, 3, 4, 5]
```

**Expected Output:**

```
[1, 5, 2, 4, 3]
```

## Step 1: Push All Nodes into Stack

Initial Linked List:

```
1 → 2 → 3 → 4 → 5 → null
```

We traverse the linked list and push each node reference into the stack.

| Iteration | Current Node | Stack           |
| --------- | ------------ | --------------- |
| 1         | 1            | [1]             |
| 2         | 2            | [1, 2]          |
| 3         | 3            | [1, 2, 3]       |
| 4         | 4            | [1, 2, 3, 4]    |
| 5         | 5            | [1, 2, 3, 4, 5] |

After traversal:

```
Stack = [1, 2, 3, 4, 5]
                      ↑
                     TOP
```

## Step 2: Initialize Variables

```
P1 = head;       // Node 1
P2 = head.next;  // Node 2

len = 5;
mid = Math.floor(5 / 2); // 2
```

We will execute the reordering loop **2 times**.

## Step 3: First Iteration (i = 0)

**Current state:**

```
P1 = 1
P2 = 2
Stack = [1, 2, 3, 4, 5]
```

**Operation 1: Store P2**

```
let temp = P2;
```

```
temp = Node 2
```

**Operation 2: Pop from Stack**

```
let node = stack.pop();
```

```
node = Node 5
Stack = [1, 2, 3, 4]
```

**Operation 3: Connect P1 to Node 5**

```
P1.next = node;
```

```
1 → 5
```

**Operation 4: Connect Node 5 to Node 2**

```
P1.next.next = temp;
```

```
1 → 5 → 2 → 3 → 4
```

**Operation 5: Update Pointers**

```
P1 = temp;
P2 = temp.next;
```

Now:

```
P1 = Node 2
P2 = Node 3
```

## Step 4: Second Iteration (i = 1)

**Current state:**

```
P1 = 2
P2 = 3
Stack = [1, 2, 3, 4]
```

**Operation 1: Store P2**

```
let temp = P2;
```

```
temp = Node 3
```

**Operation 2: Pop from Stack**

```
let node = stack.pop();
```

```
node = Node 4
Stack = [1, 2, 3]
```

**Operation 3: Connect P1 to Node 4**

```
P1.next = node;
```

```
1 → 5 → 2 → 4
```

**Operation 4: Connect Node 4 to Node 3**

```
P1.next.next = temp;
```

```
1 → 5 → 2 → 4 → 3
```

**Operation 5: Update Pointers**

```
P1 = temp;
P2 = temp.next;
```

Now:

```
P1 = Node 3
P2 = Node 4
```

## Step 5: End the Linked List

After two iterations, the loop ends.

However, node `3` still has its original `next` reference pointing to node `4`.

This can create a cycle.

To prevent this:

```
P1.next = null;
```

Now the final linked list is:

```
1 → 5 → 2 → 4 → 3 → null
```

## Dry Run Summary

| Iteration | P1 | P2 | Popped Node | Reordered Sequence |
| --------- | -- | -- | ----------- | ------------------ |
| 0         | 1  | 2  | 5           | 1 → 5 → 2          |
| 1         | 2  | 3  | 4           | 1 → 5 → 2 → 4 → 3  |

**Final Output:**

```
[1, 5, 2, 4, 3]
```

---

# Complexity

### Time Complexity: O(n)

We traverse the linked list once to push all nodes into the stack.

- Stack creation: `O(n)`
- Reordering: `O(n/2)`
- Final pointer update: `O(1)`

Total:

```
O(n) + O(n/2) + O(1) = O(n)
```

Therefore, the overall **time complexity is O(n)**.

### Space Complexity: O(n)

We use a stack to store references to all nodes.

For a linked list containing `n` nodes, the stack stores `n` references.

Therefore, the **auxiliary space complexity is O(n)**.

---

# Code

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {

    let stack = [];

    let current = head;

    while (current) {
        stack.push(current);
        current = current.next;
    }

    let P1 = head;
    let P2 = head.next;

    let len = stack.length;
    let mid = Math.floor(len / 2);

    for (let i = 0; i < mid; i++) {

        let temp = P2;
        let node = stack.pop();

        P1.next = node;
        P1.next.next = temp;

        P1 = temp;
        P2 = temp.next;
    }

    P1.next = null;
};
```

**Final Result:** `[1, 5, 2, 4, 3]`

**Time Complexity:** `O(n)`\
**Space Complexity:** `O(n)`
