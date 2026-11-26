
# Chapter 3: Introduction to Circular Linked List

---

# 1. What is a Circular Linked List?

A Circular Linked List is a linear data structure in which the last node points back to the first node instead of pointing to `null`.

This creates a circular connection between the nodes.

Unlike a normal linked list, a circular linked list does not have a null reference marking the end of the list.

## Visualization

```text
head
↓
[10] → [20] → [30] → [40]
↑                    │
└────────────────────┘
```

Here, the last node points back to the first node.

```javascript
tail.next === head;
```

## Important Properties

- The last node points back to the first node.
- A non-empty circular linked list has no `null` next reference.
- Traversal can start from any node.
- Nodes can be visited repeatedly.
- Incorrect traversal conditions can cause infinite loops.
- The size can grow or shrink dynamically.

---

# 2. Types of Circular Linked Lists

There are two main types of Circular Linked Lists.

## 2.1 Circular Singly Linked List (CSLL)

Each node contains:

- Data
- Next reference

The last node points back to the first node.

```text
head
↓
[10] → [20] → [30]
↑             │
└─────────────┘
```

Traversal is possible only in the forward direction.

```javascript
tail.next = head;
```

---

## 2.2 Circular Doubly Linked List (CDLL)

Each node contains:

- Previous reference
- Data
- Next reference

The last node points to the first node, and the first node points back to the last node.

```text
┌──────────────────────┐
↓                      │
[10] ⇄ [20] ⇄ [30] ⇄ [40]
│                      ↑
└──────────────────────┘
```

Traversal is possible in both directions.

```javascript
tail.next = head;
head.prev = tail;
```

In this chapter, we will primarily implement a Circular Singly Linked List.

---

# 3. Normal vs Circular Linked List

## Normal Singly Linked List

```text
head → [10] → [20] → [30] → null
```

The last node points to `null`.

## Circular Singly Linked List

```text
head → [10] → [20] → [30]
↑             │
└─────────────┘
```

The last node points back to the head.

## Comparison

| Feature | Singly Linked List | Circular Singly Linked List |
|---|---|---|
| Last node points to | null | Head |
| Traversal direction | Forward | Forward |
| Structure | Open chain | Circular chain |
| Traversal termination | current === null | current === startingNode |
| Repeated traversal | Requires restarting | Naturally supported |
| Infinite loop risk | Lower | Higher |
| References per node | One | One |

---

# 4. Node Structure

The node structure of a Circular Singly Linked List is the same as a normal Singly Linked List.

```javascript
function Node(value) {
  this.data = value;
  this.next = null;
}
```

## Explanation

| Property | Purpose |
|---|---|
| `this.data` | Stores the actual value |
| `this.next` | Stores the reference to the next node |

## Creating a Node

```javascript
const node = new Node(10);
```

Initially:

```text
[10 | null]
```

To make this single node circular:

```javascript
node.next = node;
```

Result:

```text
┌───────┐
↓       │
[10] ────┘
```

The node points to itself.

This is a valid single-node Circular Linked List.

---

# 5. Circular Linked List Class

```javascript
var MyCircularLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.len = 0;
};
```

## Explanation

- `head`: Reference to the first node.
- `tail`: Reference to the last node.
- `len`: Total number of nodes.

Initially, the linked list is empty.

## Why Maintain a Tail Reference?

Maintaining a tail reference allows us to:

- Insert at the head in O(1).
- Insert at the tail in O(1).
- Maintain the circular connection easily.
- Access the last node directly.

The most important relationship is:

```javascript
this.tail.next === this.head;
```

This relationship must remain true after every successful insertion or deletion in a non-empty list.

---

## 5.1 Different States of a Circular Linked List

### Case 1: Empty Linked List

```text
head → null

tail → null

len = 0
```

### Case 2: Single Node

```text
head
↓
[10] ────┐
↑       │
tail     │
↑       │
└───────┘

len = 1
```

Both head and tail point to the same node.

```javascript
this.head === this.tail;

this.head.next === this.head;
```

### Case 3: Multiple Nodes

```text
head             tail
↓                ↓
[10] → [20] → [30]
↑             │
└─────────────┘

len = 3
```

The last node points back to the first node.

---

## 5.2 Important Rules

- Always use 0-based indexing.
- Always validate the index.
- Always update the length after successful insertion or deletion.
- Maintain both head and tail references.
- Never accidentally break the circular connection.
- Never use null-based traversal on a non-empty circular list.
- Handle empty and single-node lists separately.
- Always ensure `tail.next === head` for a non-empty list.

---

## 5.3 Valid and Invalid Indexes

Consider the following list:

```text
Index:    0      1      2
10  →  20  →  30
↑             │
└─────────────┘

len = 3
```

| Operation | Valid Index | Invalid Index |
|---|---|---|
| Get | 0 to len - 1 | index < 0 or index >= len |
| Delete | 0 to len - 1 | index < 0 or index >= len |
| Insert | 0 to len | index < 0 or index > len |

Even though the list is circular, indexes do not automatically wrap around in this implementation.

For example, `get(3)` is invalid when the length is 3.

---

# 6. Traversing a Circular Linked List

Traversal is the most important concept to understand before implementing circular linked list operations.

Unlike a normal linked list, a circular linked list does not end at `null`.

---

## 6.1 Why Normal Traversal Does Not Work

In a normal singly linked list, we use:

```javascript
let current = this.head;

while (current !== null) {
  console.log(current.data);
  current = current.next;
}
```

However, this does not work for a non-empty circular linked list.

Consider:

```text
10 → 20 → 30
↑           │
└───────────┘
```

The traversal becomes:

```text
10 → 20 → 30 → 10 → 20 → 30 → ...
```

The current node never becomes `null`.

Therefore, the loop continues infinitely.

---

## 6.2 Correct Approach — Using do...while

### Idea

Start from the head, visit each node and stop when we return to the head.

### Code

```javascript
MyCircularLinkedList.prototype.print = function () {
  if (this.head === null) return;
  
  let current = this.head;
  
  do {
    console.log(current.data);
    current = current.next;
  } while (current !== this.head);
};
```

---

## 6.3 Why Use do...while?

A `do...while` loop executes its body at least once before checking the condition.

Initially:

```javascript
current === this.head;
```

If we directly write:

```javascript
while (current !== this.head) {
  console.log(current.data);
  current = current.next;
}
```

The condition is false during the first iteration.

Therefore, no node is visited.

A `do...while` loop solves this problem by processing the first node before checking whether we have returned to the head.

---

## 6.4 Dry Run

Initial list:

```text
head → 10 → 20 → 30
↑          │
└──────────┘
```

| Iteration | Current | Output | Next Current | Continue? |
|---|---|---|---|---|
| 1 | 10 | 10 | 20 | Yes |
| 2 | 20 | 20 | 30 | Yes |
| 3 | 30 | 30 | 10 | No |

Final output:

```text
10
20
30
```

The loop terminates when `current` returns to the head.

---

## 6.5 Alternative Approach — Using Length

Since we maintain the length, we can also traverse exactly `len` times.

```javascript
MyCircularLinkedList.prototype.print = function () {
  let current = this.head;
  
  for (let i = 0; i < this.len; i++) {
    console.log(current.data);
    current = current.next;
  }
};
```

Both approaches are valid when the list is correctly maintained.

### When to Use Which?

| Approach | Use Case |
|---|---|
| do...while | Traverse until returning to the starting node |
| for loop | Traverse a known number of nodes |
| while(current !== null) | Normal non-circular linked list |

## Complexity

- Time Complexity: **O(n)**
- Auxiliary Space Complexity: **O(1)**

---

# 7. Add At Head

## Idea

The new node becomes the first node of the circular linked list.

After updating the head, we must also update the tail's next reference.

## Visualization

```text
Before:

head → 10 → 20 → 30
↑          │
└──────────┘

Insert 5 at head:

head → 5 → 10 → 20 → 30
↑              │
└──────────────┘
```

## Steps

1. Create a new node.
2. If the list is empty:
- Set head to the new node.
- Set tail to the new node.
- Make the node point to itself.
3. Otherwise:
- Point the new node to the current head.
- Move head to the new node.
- Connect the tail to the new head.
4. Increase the length.

## Code

```javascript
MyCircularLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  
  if (this.head === null) {
    this.head = node;
    this.tail = node;
    
    node.next = node;
  } else {
    node.next = this.head;
    this.head = node;
    
    this.tail.next = this.head;
  }
  
  this.len++;
};
```

---

## 7.1 Step-by-Step Dry Run

Initial list:

```text
10 → 20 → 30
↑           │
└───────────┘

head = 10
tail = 30
len = 3
```

Insert `5`.

### Step 1: Create a New Node

```javascript
const node = new Node(5);
```

```text
[5 | null]
```

### Step 2: Connect the New Node to the Old Head

```javascript
node.next = this.head;
```

```text
5 → 10 → 20 → 30
↑          │
└──────────┘
```

### Step 3: Update Head

```javascript
this.head = node;
```

```text
head = 5
```

### Step 4: Restore the Circular Connection

```javascript
this.tail.next = this.head;
```

```text
head → 5 → 10 → 20 → 30
↑              │
└──────────────┘
```

### Step 5: Update Length

```javascript
this.len++;
```

```text
len = 4
```

## Complexity

- Time Complexity: **O(1)**
- Auxiliary Space Complexity: **O(1)**

---

# 8. Add At Tail

## Idea

The new node becomes the last node of the circular linked list.

Since we maintain a tail reference, no traversal is required.

## Visualization

```text
Before:

10 → 20 → 30
↑           │
└───────────┘

Insert 40:

10 → 20 → 30 → 40
↑                │
└────────────────┘
```

## Steps

1. Create a new node.
2. If the list is empty:
- Set head and tail to the new node.
- Make the node point to itself.
3. Otherwise:
- Connect the new node to the head.
- Connect the current tail to the new node.
- Move tail to the new node.
4. Increase the length.

## Code

```javascript
MyCircularLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);
  
  if (this.tail === null) {
    this.head = node;
    this.tail = node;
    
    node.next = node;
  } else {
    node.next = this.head;
    this.tail.next = node;
    
    this.tail = node;
  }
  
  this.len++;
};
```

---

## 8.1 Dry Run

Initial list:

```text
10 → 20 → 30
↑           │
└───────────┘

head = 10
tail = 30
```

Insert `40`.

### Step 1

```javascript
node.next = this.head;
```

```text
40.next = 10
```

### Step 2

```javascript
this.tail.next = node;
```

```text
30.next = 40
```

### Step 3

```javascript
this.tail = node;
```

```text
tail = 40
```

### Final Result

```text
10 → 20 → 30 → 40
↑                │
└────────────────┘

head = 10
tail = 40
len = 4
```

## Complexity

- Time Complexity: **O(1)**
- Auxiliary Space Complexity: **O(1)**

---

# 9. Get Value at Index

## Idea

Start from the head and move forward exactly `index` times.

Although the linked list is circular, we must validate the index to prevent unintended repeated traversal.

## Visualization

```text
Index:    0     1     2     3
10 →  20 →  30 →  40
↑                 │
└─────────────────┘

get(2) = 30
```

## Steps

1. Validate the index.
2. Initialize current with head.
3. Move forward exactly index times.
4. Return the current node's data.

## Code

```javascript
MyCircularLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.len) return -1;
  
  let current = this.head;
  
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  
  return current.data;
};
```

## Dry Run

```text
10 → 20 → 30 → 40

index = 2
```

| Iteration | Current |
|---|---|
| Initial | 10 |
| 1 | 20 |
| 2 | 30 |

Return `30`.

## Complexity

- Best Case: **O(1)**
- Worst Case: **O(n)**
- Auxiliary Space Complexity: **O(1)**

---

# 10. Understanding Reference Manipulation

The basic insertion and deletion patterns are similar to a normal singly linked list.

However, we must preserve the circular connection whenever the head or tail changes.

## Insertion Between Two Nodes

```text
Before:

10 → 20 → 30
↑           │
└───────────┘

Insert 99 after 10:

10 → 99 → 20 → 30
↑                │
└────────────────┘
```

### Core Logic

```javascript
node.next = prev.next;
prev.next = node;
```

## Deletion Between Two Nodes

```text
Before:

10 → 20 → 30 → 40
↑                │
└────────────────┘

Delete 20:

10 → 30 → 40
↑           │
└───────────┘
```

### Core Logic

```javascript
prev.next = prev.next.next;
```

## Most Important Difference

Whenever the head changes, update the tail's next reference.

```javascript
this.tail.next = this.head;
```

Whenever the tail changes, ensure the new tail points to the head.

```javascript
this.tail.next = this.head;
```

> Golden Rule: Never break the circular connection.

---

# 11. Add At Index

## Idea

Reach the previous node at `index - 1`, then insert the new node.

## Visualization

```text
Before:

Index:    0     1     2
10 →  20 →  30
↑           │
└───────────┘

addAtIndex(1, 99)

After:

Index:    0     1     2     3
10 →  99 →  20 →  30
↑                 │
└─────────────────┘
```

## Steps

1. Validate the index.
2. If index = 0, call `addAtHead()`.
3. If index = len, call `addAtTail()`.
4. Otherwise, traverse to index - 1.
5. Create the new node.
6. Preserve the next reference.
7. Connect the previous node to the new node.
8. Increase the length.

## Code

```javascript
MyCircularLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.len) return;
  
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  
  if (index === this.len) {
    this.addAtTail(val);
    return;
  }
  
  let prev = this.head;
  
  for (let i = 0; i < index - 1; i++) {
    prev = prev.next;
  }
  
  const node = new Node(val);
  
  node.next = prev.next;
  prev.next = node;
  
  this.len++;
};
```

## Dry Run

```text
Initial List: 10 → 20 → 30

index = 1
val = 99
```

### Step 1: Reach the Previous Node

```text
prev = 10
```

### Step 2: Preserve the Existing Connection

```javascript
node.next = prev.next;
```

```text
99.next = 20
```

### Step 3: Insert the New Node

```javascript
prev.next = node;
```

```text
10.next = 99
```

### Final Result

```text
10 → 99 → 20 → 30
↑                │
└────────────────┘

len = 4
```

## Complexity

- Best Case: **O(1)** — insertion at head or tail.
- Worst Case: **O(n)** — traversal required.
- Auxiliary Space Complexity: **O(1)**

---

# 12. Delete At Head

## Idea

Remove the first node by moving the head to the next node.

Since the tail points to the head, we must also update the tail's next reference.

## Visualization

```text
Before:

head → 10 → 20 → 30
↑          │
└──────────┘

After:

head → 20 → 30
↑     │
└─────┘
```

## Steps

1. If the list is empty, return.
2. If the list contains only one node:
- Set head to null.
- Set tail to null.
3. Otherwise:
- Move head to the next node.
- Connect tail to the new head.
4. Decrease the length.

## Code

```javascript
MyCircularLinkedList.prototype.deleteAtHead = function () {
  if (this.head === null) return;
  
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.tail.next = this.head;
  }
  
  this.len--;
};
```

---

## 12.1 Dry Run

Initial list:

```text
10 → 20 → 30
↑           │
└───────────┘

head = 10
tail = 30
```

### Step 1: Move Head

```javascript
this.head = this.head.next;
```

```text
head = 20
```

### Step 2: Restore Circular Connection

```javascript
this.tail.next = this.head;
```

```text
30.next = 20
```

### Final Result

```text
20 → 30
↑     │
└─────┘

head = 20
tail = 30
len = 2
```

## Complexity

- Time Complexity: **O(1)**
- Auxiliary Space Complexity: **O(1)**

---

# 13. Delete At Tail

## Idea

Remove the last node by finding the second-last node.

Although we maintain a tail reference, a Circular Singly Linked List does not have a previous reference.

Therefore, we must traverse to find the node before the tail.

## Visualization

```text
Before:

10 → 20 → 30 → 40
↑                │
└────────────────┘

After:

10 → 20 → 30
↑           │
└───────────┘
```

## Steps

1. If the list is empty, return.
2. If the list contains only one node:
- Set head and tail to null.
3. Otherwise:
- Start from the head.
- Traverse until current.next equals tail.
- Make current the new tail.
- Connect the new tail to the head.
4. Decrease the length.

## Code

```javascript
MyCircularLinkedList.prototype.deleteAtTail = function () {
  if (this.tail === null) return;
  
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    let current = this.head;
    
    while (current.next !== this.tail) {
      current = current.next;
    }
    
    this.tail = current;
    this.tail.next = this.head;
  }
  
  this.len--;
};
```

---

## 13.1 Dry Run

Initial list:

```text
10 → 20 → 30 → 40
↑                │
└────────────────┘

head = 10
tail = 40
```

Find the second-last node.

| Iteration | Current | Current.next | Equals Tail? |
|---|---|---|---|
| 1 | 10 | 20 | No |
| 2 | 20 | 30 | No |
| 3 | 30 | 40 | Yes |

The loop stops at node `30`.

### Step 1: Update Tail

```javascript
this.tail = current;
```

```text
tail = 30
```

### Step 2: Restore Circular Connection

```javascript
this.tail.next = this.head;
```

```text
30.next = 10
```

### Final Result

```text
10 → 20 → 30
↑           │
└───────────┘

len = 3
```

## Complexity

- Best Case: **O(1)** — single-node list.
- Worst Case: **O(n)**
- Auxiliary Space Complexity: **O(1)**

## Important Interview Insight

Maintaining a tail reference makes insertion at the tail O(1).

However, deleting the tail still takes O(n) because we need to find its previous node.

A Circular Doubly Linked List can perform tail deletion in O(1) using `tail.prev`.

---

# 14. Delete At Index

## Idea

Reach the previous node and bypass the node that needs to be deleted.

## Visualization

```text
Before:

Index:    0     1     2     3
10 →  20 →  30 →  40
↑                 │
└─────────────────┘

deleteAtIndex(2)

After:

Index:    0     1     2
10 →  20 →  40
↑           │
└───────────┘
```

## Steps

1. Validate the index.
2. If index = 0, call `deleteAtHead()`.
3. If index = len - 1, call `deleteAtTail()`.
4. Otherwise, traverse to index - 1.
5. Store the node to delete.
6. Bypass the unwanted node.
7. Optionally detach the removed node.
8. Decrease the length.

## Code

```javascript
MyCircularLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.len) return;
  
  if (index === 0) {
    this.deleteAtHead();
    return;
  }
  
  if (index === this.len - 1) {
    this.deleteAtTail();
    return;
  }
  
  let prev = this.head;
  
  for (let i = 0; i < index - 1; i++) {
    prev = prev.next;
  }
  
  const toDelete = prev.next;
  
  prev.next = toDelete.next;
  
  // Optional: Detach the removed node
  toDelete.next = null;
  
  this.len--;
};
```

---

## 14.1 Detailed Dry Run

Initial list:

```text
10 → 20 → 30 → 40
↑                │
└────────────────┘

index = 2
```

### Step 1: Reach Index - 1

```text
prev = 20
```

### Step 2: Identify the Node to Delete

```javascript
const toDelete = prev.next;
```

```text
toDelete = 30
```

### Step 3: Bypass the Node

```javascript
prev.next = toDelete.next;
```

```text
20.next = 40
```

### Step 4: Detach the Removed Node

```javascript
toDelete.next = null;
```

This step is optional in JavaScript.

### Final Result

```text
10 → 20 → 40
↑           │
└───────────┘

head = 10
tail = 40
len = 3
```

## Complexity

- Best Case: **O(1)**
- Worst Case: **O(n)**
- Auxiliary Space Complexity: **O(1)**

## Ultimate Pattern to Remember

```javascript
prev.next = prev.next.next;
```

---

# 15. Searching in a Circular Linked List

## Idea

Start from the head and compare each node's data with the target value.

Stop when:

- The target is found.
- We return to the head.

## Code

```javascript
MyCircularLinkedList.prototype.search = function (target) {
  if (this.head === null) return -1;
  
  let current = this.head;
  let index = 0;
  
  do {
    if (current.data === target) {
      return index;
    }
    
    current = current.next;
    index++;
    
  } while (current !== this.head);
  
  return -1;
};
```

## Example

```text
10 → 20 → 30 → 40
↑                │
└────────────────┘

search(30) → 2

search(10) → 0

search(50) → -1
```

## Complexity

- Best Case: **O(1)**
- Worst Case: **O(n)**
- Auxiliary Space Complexity: **O(1)**

---

# 16. Complete Working Implementation

```javascript
function Node(value) {
  this.data = value;
  this.next = null;
}

var MyCircularLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.len = 0;
};

// Add at head
MyCircularLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  
  if (this.head === null) {
    this.head = node;
    this.tail = node;
    
    node.next = node;
  } else {
    node.next = this.head;
    this.head = node;
    
    this.tail.next = this.head;
  }
  
  this.len++;
};

// Add at tail
MyCircularLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);
  
  if (this.tail === null) {
    this.head = node;
    this.tail = node;
    
    node.next = node;
  } else {
    node.next = this.head;
    this.tail.next = node;
    
    this.tail = node;
  }
  
  this.len++;
};

// Get value at index
MyCircularLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.len) return -1;
  
  let current = this.head;
  
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  
  return current.data;
};

// Add at index
MyCircularLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.len) return;
  
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  
  if (index === this.len) {
    this.addAtTail(val);
    return;
  }
  
  let prev = this.head;
  
  for (let i = 0; i < index - 1; i++) {
    prev = prev.next;
  }
  
  const node = new Node(val);
  
  node.next = prev.next;
  prev.next = node;
  
  this.len++;
};

// Delete at head
MyCircularLinkedList.prototype.deleteAtHead = function () {
  if (this.head === null) return;
  
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.tail.next = this.head;
  }
  
  this.len--;
};

// Delete at tail
MyCircularLinkedList.prototype.deleteAtTail = function () {
  if (this.tail === null) return;
  
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    let current = this.head;
    
    while (current.next !== this.tail) {
      current = current.next;
    }
    
    this.tail = current;
    this.tail.next = this.head;
  }
  
  this.len--;
};

// Delete at index
MyCircularLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.len) return;
  
  if (index === 0) {
    this.deleteAtHead();
    return;
  }
  
  if (index === this.len - 1) {
    this.deleteAtTail();
    return;
  }
  
  let prev = this.head;
  
  for (let i = 0; i < index - 1; i++) {
    prev = prev.next;
  }
  
  const toDelete = prev.next;
  
  prev.next = toDelete.next;
  toDelete.next = null;
  
  this.len--;
};

// Search
MyCircularLinkedList.prototype.search = function (target) {
  if (this.head === null) return -1;
  
  let current = this.head;
  let index = 0;
  
  do {
    if (current.data === target) {
      return index;
    }
    
    current = current.next;
    index++;
    
  } while (current !== this.head);
  
  return -1;
};

// Print circular linked list
MyCircularLinkedList.prototype.print = function () {
  if (this.head === null) return;
  
  let current = this.head;
  
  do {
    console.log(current.data);
    current = current.next;
  } while (current !== this.head);
};
```

---

# 17. Testing the Circular Linked List

```javascript
const obj = new MyCircularLinkedList();

obj.addAtHead(10);
obj.addAtHead(20);
obj.addAtTail(30);
obj.addAtIndex(1, 99);

console.log(obj.get(1)); // 99

obj.deleteAtIndex(1);

console.log(obj.get(1)); // 10

console.log(obj.search(30)); // 2

console.log(obj.len); // 3

console.log(obj.tail.next === obj.head); // true

obj.print();
```

## Step-by-Step Result

| Operation | Linked List (One Round) | Length |
|---|---|---|
| Initialize | Empty | 0 |
| addAtHead(10) | 10 | 1 |
| addAtHead(20) | 20 → 10 | 2 |
| addAtTail(30) | 20 → 10 → 30 | 3 |
| addAtIndex(1, 99) | 20 → 99 → 10 → 30 | 4 |
| get(1) | Returns 99 | 4 |
| deleteAtIndex(1) | 20 → 10 → 30 | 3 |
| get(1) | Returns 10 | 3 |
| search(30) | Returns 2 | 3 |

## Final Structure

```text
20 → 10 → 30
↑           │
└───────────┘
```

---

# 18. Time and Space Complexity

## Circular Singly Linked List Operations

| Operation | Best Case | Worst Case | Auxiliary Space |
|---|---|---|---|
| Access by Index | O(1) | O(n) | O(1) |
| Search | O(1) | O(n) | O(1) |
| Traversal | O(n) | O(n) | O(1) |
| Add at Head | O(1) | O(1) | O(1) |
| Add at Tail | O(1) | O(1) | O(1) |
| Add at Index | O(1) | O(n) | O(1) |
| Delete Head | O(1) | O(1) | O(1) |
| Delete Tail | O(1) | O(n) | O(1) |
| Delete at Index | O(1) | O(n) | O(1) |
| Insert After Known Node | O(1) | O(1) | O(1) |
| Delete After Known Node | O(1) | O(1) | O(1) |

**Total Storage Complexity: O(n)**

The complexity assumes that both head and tail references are maintained and that the given node references are valid.

---

# 19. Comparison of All Linked List Types

The following table assumes that both head and tail references are maintained.

| Feature | Singly | Doubly | Circular Singly | Circular Doubly |
|---|---|---|---|---|
| References per Node | 1 | 2 | 1 | 2 |
| Forward Traversal | Yes | Yes | Yes | Yes |
| Backward Traversal | No | Yes | No | Yes |
| Circular Structure | No | No | Yes | Yes |
| Add at Head | O(1) | O(1) | O(1) | O(1) |
| Add at Tail | O(1) | O(1) | O(1) | O(1) |
| Delete Head | O(1) | O(1) | O(1) | O(1) |
| Delete Tail | O(n) | O(1) | O(n) | O(1) |
| Access by Index | O(n) | O(n) | O(n) | O(n) |
| Search | O(n) | O(n) | O(n) | O(n) |
| Storage | O(n) | O(n) | O(n) | O(n) |

---

# 20. Advantages and Disadvantages

## Advantages

- Supports continuous traversal.
- Traversal can start from any node.
- Efficient insertion at both ends when a tail is maintained.
- Useful for implementing circular queues.
- Naturally supports cyclic scheduling.
- No need to manually restart traversal after reaching the last node.

## Disadvantages

- Incorrect traversal can cause infinite loops.
- More complex termination conditions.
- Requires careful maintenance of circular connections.
- No direct index-based access.
- Circular Singly Linked List cannot traverse backward.
- Deleting the tail requires traversal in a Circular Singly Linked List.

---

# 21. Real-World Applications

## 21.1 Round Robin Scheduling

Processes are executed repeatedly in a circular order.

```text
P1 → P2 → P3 → P4
↑               │
└───────────────┘
```

After P4, execution returns to P1.

A circular linked list can model this scheduling pattern.

## 21.2 Music Playlist — Repeat Mode

```text
Song 1 → Song 2 → Song 3
↑                 │
└─────────────────┘
```

After the last song, playback returns to the first song.

## 21.3 Multiplayer Turn-Based Games

```text
Player 1 → Player 2 → Player 3
↑                     │
└─────────────────────┘
```

Each player gets a turn repeatedly.

## 21.4 Circular Queue

A circular linked list can be used to implement a queue with efficient enqueue and dequeue operations.

## 21.5 Josephus Problem

People are arranged in a circle, and every kth remaining person is eliminated until one person remains.

A circular linked list can be used to simulate this process.

---

# 22. Important Edge Cases

Always test the following cases:

- [ ] Traversing an empty list.
- [ ] Inserting into an empty list.
- [ ] Creating a valid single-node circular list.
- [ ] Deleting the only node.
- [ ] Inserting at the head.
- [ ] Inserting at the tail.
- [ ] Deleting the head.
- [ ] Deleting the tail.
- [ ] Inserting at index equal to length.
- [ ] Accessing an invalid index.
- [ ] Searching for a nonexistent value.
- [ ] Updating the length correctly.
- [ ] Maintaining the circular connection.
- [ ] Preventing infinite traversal.

---

# 23. Common Mistakes

| Mistake | Consequence |
|---|---|
| Using while(current !== null) | Infinite loop |
| Using while(current !== head) directly | First node is never visited |
| Forgetting tail.next = head | Broken circular connection |
| Forgetting node.next = node for first node | Invalid single-node structure |
| Not updating tail after insertion | Incorrect tail reference |
| Not updating head after deletion | Incorrect head reference |
| Not handling a single-node deletion | Invalid list state |
| Forgetting to update length | Incorrect index validation |
| Forgetting current = current.next | Infinite loop |
| Comparing node values instead of references | Incorrect traversal termination |

---

## 23.1 Compare References, Not Values

Incorrect:

```javascript
while (current.data !== this.head.data);
```

Different nodes can contain the same value.

For example:

```text
10 → 20 → 10 → 30
↑                │
└────────────────┘
```

The loop may stop at the second node containing 10, even though we have not completed the traversal.

Correct:

```javascript
while (current !== this.head);
```

Always compare node references when checking whether we have returned to the starting node.

---

# 24. Important Structural Invariants

An invariant is a condition that must remain true whenever the data structure is in a valid state.

## Empty List

```javascript
this.head === null;
this.tail === null;
this.len === 0;
```

## Single-Node List

```javascript
this.head === this.tail;
this.head.next === this.head;
this.len === 1;
```

## Non-Empty List

```javascript
this.head !== null;
this.tail !== null;
this.tail.next === this.head;
this.len > 0;
```

Additionally:

- Starting from the head must visit exactly `len` distinct nodes before returning to the head.
- The node visited immediately before returning to the head must be the tail.
- No reachable node should have a null next reference.

These conditions help verify whether insertion and deletion operations are working correctly.

---

# 25. Quick Revision Cheat Sheet

| Operation | Core Logic |
|---|---|
| Create Node | `new Node(val)` |
| Move Forward | `current = current.next` |
| Create Single-Node Circle | `node.next = node` |
| Maintain Circular Connection | `tail.next = head` |
| Check Empty List | `head === null` |
| Check Single Node | `head !== null && head === tail` |
| Check Last Node | `current.next === head` |
| Insert at Head | `node.next = head; head = node; tail.next = head;` |
| Insert at Tail | `node.next = head; tail.next = node; tail = node;` |
| Insert After Previous | `node.next = prev.next; prev.next = node;` |
| Delete Head | `head = head.next; tail.next = head;` |
| Delete After Previous | `prev.next = prev.next.next;` |
| Restore Circular Connection | `tail.next = head;` |

The insertion and deletion formulas assume that the necessary empty-list and single-node cases have already been handled.

---

# 26. Core Patterns to Remember

## Pattern 1: Circular Traversal

```javascript
if (this.head === null) return;

let current = this.head;

do {
  current = current.next;
} while (current !== this.head);
```

## Pattern 2: Reach Previous Node

```javascript
let prev = this.head;

for (let i = 0; i < index - 1; i++) {
  prev = prev.next;
}
```

## Pattern 3: Insertion

```javascript
node.next = prev.next;
prev.next = node;
```

## Pattern 4: Deletion

```javascript
prev.next = prev.next.next;
```

## Pattern 5: Restore Circular Connection

```javascript
this.tail.next = this.head;
```

## Pattern 6: Find the Second-Last Node

```javascript
let current = this.head;

while (current.next !== this.tail) {
  current = current.next;
}
```

This pattern assumes that the list contains at least two nodes.

---

# 27. Practice Problems

Complete a limited number of problems to understand circular linked list implementation and its applications.

| Difficulty | Platform | Problem | Subtopic | Status |
|---|---|---|---|---|
| Easy | Local Practice | Implement Circular Singly Linked List | Basic Implementation | To Do |
| Easy | GeeksforGeeks | Check If Linked List Is Circular | Circular Structure | To Do |
| Medium | GeeksforGeeks | Split a Circular Linked List into Two Halves | Circular Traversal | To Do |
| Medium | LeetCode | [708. Insert into a Sorted Circular Linked List](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/) | Circular Insertion | To Do |
| Medium | LeetCode | [1823. Find the Winner of the Circular Game](https://leetcode.com/problems/find-the-winner-of-the-circular-game/) | Josephus Problem | To Do |

Note: The last problem can also be solved using queues, simulation or mathematics. Try implementing it using a circular linked list for practice.

---

# Key Takeaways

- A Circular Linked List connects its last node back to its first node.
- A Circular Singly Linked List contains one next reference per node.
- A Circular Doubly Linked List contains both previous and next references.
- A non-empty circular linked list does not terminate at null.
- Use do...while or length-based traversal.
- Maintaining a tail reference makes insertion at both ends O(1).
- Deleting the tail of a Circular Singly Linked List requires O(n) traversal.
- Always handle empty and single-node lists separately.
- Compare node references instead of node values during traversal.
- Always preserve the circular connection.

> Singly Linked List = Nodes + References

> Doubly Linked List = Nodes + Forward and Backward References

> Circular Linked List = Nodes + References + Circular Connection

---


