

##  Merge K Sorted Lists | Optimal Priority Queue (Min Heap) Solution | JavaScript

## Intuition

Each linked list is already sorted in ascending order. This means the smallest remaining element of a linked list is always at its current head.

Instead of repeatedly merging two linked lists, we can keep track of the smallest available node from every linked list using a **Priority Queue (Min Heap)**.

The algorithm works as follows:

- Insert the head node of every non-empty linked list into the min heap.
- Remove the smallest node from the heap.
- Append it to the merged linked list.
- If the removed node has a next node, insert that next node into the heap.
- Repeat until the heap becomes empty.

Since the heap always returns the smallest available node, the merged linked list is built in sorted order.

# Approach

### Step 1: Handle Edge Cases

If the input array is empty, there are no linked lists to merge.

```javascript
if (!lists || lists.length === 0) return null;
```

---

### Step 2: Create a Min Heap

Create a **Priority Queue (Min Heap)** that stores linked list nodes.

The heap compares nodes based on their values, so the smallest node is always at the top.

The priority queue stores **linked list nodes**, not integer values.

A custom comparator compares the node values (`node.val`) so that the node with the smallest value always stays at the top of the heap.

```javascript
const pq = new MinPriorityQueue({
    compare: (a, b) => a.val - b.val
});
```

---

### Step 3: Insert the Head of Every Linked List

Traverse the array of linked lists.

For every non-empty linked list, insert **only its head node** into the heap.




Suppose the input is

```text
List1

1 → 4 → 5

List2

1 → 3 → 4

List3

2 → 6
```

Initially we insert

```text
1
1
2
```

Heap

```text
      1
     / \
    1   2
```

Notice that **we do not insert every node**.

Only the current smallest node from each linked list is stored.

---

### Step 4: Create the Result Linked List

Create a dummy node.

```javascript
let dummy = new ListNode(0);
let current = dummy;
```

The dummy node helps us build the answer without handling special cases for the first node.

Initially

```text
dummy

0
```

---

### Step 5: Remove the Smallest Node

While the heap is not empty,

remove the smallest node.

```javascript
const node = pq.dequeue();
```

Suppose we remove

```text
1
```

Attach it to the answer.

```text
Answer

1
```

Move `current`.

```javascript
current.next = node;
current = current.next;
```

---

### Step 6: Insert the Next Node

The removed node came from

```text
1 → 4 → 5
```

After removing `1`, the next smallest candidate from that linked list becomes `4`.

Insert it into the heap.

```javascript
if (node.next) {
    pq.enqueue(node.next);
}
```

Heap now becomes

```text
      1
     / \
    2   4
```

Again remove the smallest node.

Answer

```text
1 → 1
```

Insert its next node (`3`).

Heap

```text
      2
     / \
    4   3
```

Continue this process until every node has been processed.

---

### Step 7: Return the Answer

When the heap becomes empty,

all nodes have already been added to the merged linked list.

Return

```javascript
return dummy.next;
```

---

# Dry Run

### Input

```text
lists =

[
  1 → 4 → 5,
  1 → 3 → 4,
  2 → 6
]
```

![Lists](../Image/Lists.png)

---

### Initial Heap

Insert every head.

```text
Heap

1
1
2
```

---

### Pop 1

Merged List

```text
1
```

Insert

```text
4
```

Heap

```text
1
2
4
```

---

### Pop 1

Merged List

```text
1 → 1
```

Insert

```text
3
```

Heap

```text
2
4
3
```

---

### Pop 2

Merged List

```text
1 → 1 → 2
```

Insert

```text
6
```

Heap

```text
3
4
6
```

---

### Pop 3

Merged List

```text
1 → 1 → 2 → 3
```

Insert

```text
4
```

Heap

```text
4
4
6
```

---

### Pop 4

Merged List

```text
1 → 1 → 2 → 3 → 4
```

Insert

```text
5
```

Heap

```text
4
5
6
```

---

### Pop 4

Merged List

```text
1 → 1 → 2 → 3 → 4 → 4
```

No next node.

---

### Pop 5

Merged List

```text
1 → 1 → 2 → 3 → 4 → 4 → 5
```

No next node.

---

### Pop 6

Merged List

```text
1 → 1 → 2 → 3 → 4 → 4 → 5 → 6
```

Heap becomes empty.

Final Answer

```text
1 → 1 → 2 → 3 → 4 → 4 → 5 → 6
```

---

# How the Priority Queue Works

The priority queue always contains **the smallest current node from each linked list**.

Initially

```text
List1

1 → 4 → 5

List2

1 → 3 → 4

List3

2 → 6
```

Heap

```text
1
1
2
```

After removing the first `1`,

the next node from the same linked list (`4`) is inserted.

Heap

```text
1
2
4
```

Again remove the smallest.

Insert the next node (`3`).

Heap

```text
2
4
3
```

Notice something important:

The heap **never stores all N nodes**.

It stores **at most one current node from each linked list**.

So if there are **k linked lists**, the heap size never exceeds **k**.

This is why every heap operation costs only **O(log k)**.

---

# Why This Works

Each linked list is already sorted, so its head is always the smallest remaining node in that list.

The priority queue keeps the smallest current node from every linked list. At every step, we remove the smallest node from the heap and add it to the merged linked list.

After removing a node, the next node from the same linked list becomes the next smallest candidate, so we insert it into the heap.

By always selecting the smallest available node, the merged linked list remains sorted throughout the entire process.

Every node is inserted into the heap exactly once and removed exactly once, ensuring that all nodes appear in the final answer in the correct order.

---

# Complexity Analysis

Let:

* **N** = Total number of nodes across all linked lists.
* **k** = Number of linked lists.

### Time Complexity

Initially, we insert the head of each linked list.

```text
O(k log k)
```

Each node is inserted into the heap once and removed once.

Each heap operation takes

```text
O(log k)
```

Since there are **N** nodes,

```text
Total Time = O(N log k)
```

---

### Space Complexity

The heap stores **at most one node from each linked list**.

Maximum heap size

```text
O(k)
```

---


# Code

```js

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
var mergeKLists = function (lists) {
    if (!lists || lists.length === 0) return null;

    const pq = new MinPriorityQueue({
        compare: (a, b) => a.val - b.val
    });

    // Insert the head of each linked list
    for (const head of lists) {
        if (head) {
            pq.enqueue(head);
        }
    }

    const dummy = new ListNode(0);
    let tail = dummy;

    while (!pq.isEmpty()) {
        const node = pq.dequeue();

        tail.next = node;
        tail = tail.next;

        if (node.next) {
            pq.enqueue(node.next);
        }
    }

    tail.next = null;

    return dummy.next;
};

```



