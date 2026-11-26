
# Chapter 1: Introduction to Singly Linked List

---

# 1. What is a Linked List?

A Linked List is a linear data structure where elements are stored in individual blocks called **nodes**.

Each node contains two components:

- **Data:** Stores the actual value.
- **Next:** Stores a reference to the next node.

```text
Head
↓
[10 | next] → [20 | next] → [30 | null]
```

Unlike arrays, linked list nodes do not need to be stored in contiguous memory locations.

In a Singly Linked List:

- Traversal is possible only in the forward direction.
- Each node contains one reference to the next node.
- The last node points to `null` in a non-circular list.
- The size can grow or shrink dynamically.

---

## 1.1 Important Terminologies

| Term | Description |
|---|---|
| Node | Individual element of a linked list |
| Data | Actual value stored inside a node |
| Next | Reference to the next node |
| Head | Reference to the first node |
| Tail | Last node of the linked list |
| Null | Represents the end of the list |
| Length | Total number of nodes |
| Traversal | Visiting nodes one by one |

---

## 1.2 How Linked Lists Are Stored in Memory

### Array

A conventional array stores elements in contiguous memory locations.

```text
Address:  1000    1004    1008    1012
┌────┬────┬────┬────┐
Value:    │ 10 │ 20 │ 30 │ 40 │
└────┴────┴────┴────┘
Index:       0    1    2    3
```

### Linked List

Linked list nodes can be stored at different memory locations.

```text
Address:   1000          3500          2100

[10 | 3500] → [20 | 2100] → [30 | null]
```

Each node stores a reference to the next node.

These memory addresses are illustrative. JavaScript manages object references internally.

### Why does this matter?

In an array, we can directly access an element using its index.

```javascript
arr[2];
```

In a linked list, we must start from the head and follow the references.

```javascript
head.next.next;
```

Therefore:

- Array random access: **O(1)**
- Linked List random access: **O(n)**

---

# 2. Node Structure

A node is the fundamental building block of a linked list.

```javascript
function Node(value) {
    this.data = value;
    this.next = null;
}
```

### Explanation

| Property | Purpose |
|---|---|
| `this.data` | Stores the value |
| `this.next` | Stores the reference to the next node |

### Creating a Node

```javascript
const node = new Node(10);
```

Representation:

```text
┌──────┬──────┐
│  10  │ null │
└──────┴──────┘
data   next
```

### Connecting Two Nodes

```javascript
const first = new Node(10);
const second = new Node(20);

first.next = second;
```

Result:

```text
[10 | next] → [20 | null]
```

---

# 3. Linked List Class

```javascript
var MyLinkedList = function () {
    this.head = null;
    this.len = 0;
};
```

### Explanation

- `head`: Stores the reference to the first node.
- `len`: Stores the total number of nodes.
- Initially, the linked list is empty.

---

## 3.1 Different States of a Linked List

### Case 1: Empty Linked List

```text
head → null

len = 0
```

### Case 2: Single Node

```text
head → [10 | null]

len = 1
```

### Case 3: Multiple Nodes

```text
head → [10] → [20] → [30] → null

len = 3
```

Understanding these states is important because most edge cases occur when the linked list is empty or contains only one node.

---

## 3.2 Important Rules

- Always use 0-based indexing.
- Always validate the index before performing an operation.
- Update `len` exactly once after every successful insertion or deletion.
- Never accidentally break the reference chain.
- Always handle the empty linked list.
- Never access a property of `null`.
- Preserve existing references before changing them.

---

## 3.3 Valid and Invalid Indexes

Consider the following linked list:

```text
Index:    0    1    2
10 → 20 → 30 → null

len = 3
```

| Operation | Valid Index | Invalid Index |
|---|---|---|
| Get | 0 to len - 1 | index < 0 or index >= len |
| Delete | 0 to len - 1 | index < 0 or index >= len |
| Insert | 0 to len | index < 0 or index > len |

### Why is insertion at index = len allowed?

Because a new node can be inserted after the last existing node.

```text
Before:

10 → 20 → 30 → null

addAtIndex(3, 40)

After:

10 → 20 → 30 → 40 → null
```

However, accessing or deleting index `3` before insertion is invalid because no node exists at that index.

---

# 4. Traversing a Linked List

Traversal means visiting each node of the linked list one by one.

It is the foundation of almost every linked list operation.

## Idea

Start from the head and keep moving to the next node until the current node becomes `null`.

## Steps

1. Initialize `current` with `head`.
2. Access the data of the current node.
3. Move to the next node.
4. Repeat until `current` becomes `null`.

## Code

```javascript
MyLinkedList.prototype.print = function () {
    let current = this.head;
    
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
};
```

## Dry Run

```text
head → 10 → 20 → 30 → null
```

| Iteration | Current | Output | Next Current |
|---|---|---|---|
| 1 | 10 | 10 | 20 |
| 2 | 20 | 20 | 30 |
| 3 | 30 | 30 | null |
| 4 | null | Loop ends | — |

## Complexity

- Time Complexity: **O(n)**
- Auxiliary Space Complexity: **O(1)**

---

## 4.1 while(current) vs while(current.next)

### while(current)

```javascript
while (current) {
    console.log(current.data);
    current = current.next;
}
```

Visits every node, including the last node.

```text
10 → 20 → 30 → null
↑
Loop ends
```

### while(current.next)

```javascript
while (current.next) {
    current = current.next;
}
```

Stops when the current node reaches the last node.

```text
10 → 20 → 30 → null
↑
Loop ends
```

**Important:** Before using `current.next`, ensure that `current` is not `null`.

### When to Use Which?

| Condition | Use Case |
|---|---|
| `while (current)` | Printing, searching and counting nodes |
| `while (current.next)` | Reaching the last node |
| `for` loop | Reaching a specific index |

---

# 5. Add At Head

## Visualization

![Add at Head Step 1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/urdw4fnfkozm0g1y91kg.png)

![Add at Head Step 2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2mf912c9glp8vge0tlmx.png)

![Add at Head Step 3](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ktx0m83vl2p32pfn32lk.png)

![Add at Head Step 4](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ddy1otabiutzxa6q79oc.png)

## Idea

The new node becomes the first node of the linked list.

```text
Before:

head → 10 → 20 → 30 → null

Insert 5 at head:

head → 5 → 10 → 20 → 30 → null
```

## Steps

1. Create a new node.
2. Point the new node to the current head.
3. Move the head to the new node.
4. Increase the length.

## Code

```javascript
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new Node(val);
    
    node.next = this.head;
    this.head = node;
    
    this.len++;
};
```

## Complexity

- Time Complexity: **O(1)**
- Auxiliary Space Complexity: **O(1)**

No traversal is required.

---

# 6. Add At Tail

## Visualization

![Add at Tail](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dgnfc5bj0c343dw5q7w4.png)

## Idea

Traverse to the last node and connect the new node.

```text
Before:

head → 10 → 20 → 30 → null

Insert 40 at tail:

head → 10 → 20 → 30 → 40 → null
```

## Steps

1. Create a new node.
2. If the list is empty, make the new node the head.
3. Otherwise, traverse to the last node.
4. Connect the last node to the new node.
5. Increase the length.

## Code

```javascript
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new Node(val);
    
    if (!this.head) {
        this.head = node;
        this.len++;
        return;
    }
    
    let current = this.head;
    
    while (current.next) {
        current = current.next;
    }
    
    current.next = node;
    this.len++;
};
```

## Complexity

- Time Complexity: **O(n)**
- Auxiliary Space Complexity: **O(1)**

We need to traverse the linked list to find the last node.

### Can We Optimize It?

Yes. By maintaining a separate `tail` reference, insertion at the tail can be performed in **O(1)** time.

However, this requires maintaining the tail reference during insertion and deletion.

For this chapter, we will continue using the head-only implementation.

---

# 7. Get Value at Index

## Idea

Start from the head and traverse until the required index is reached.

```text
Index:    0    1    2    3
10 → 20 → 30 → 40 → null
↑
get(2)

Output: 30
```

## Steps

1. Validate the index.
2. Initialize `current` with the head.
3. Move forward exactly `index` times.
4. Return the current node's data.

## Code

```javascript
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.len) return -1;
    
    let current = this.head;
    
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    
    return current.data;
};
```

## Complexity

- Best Case: **O(1)** — accessing the head.
- Worst Case: **O(n)** — accessing the last node.
- Auxiliary Space Complexity: **O(1)**

---

# 8. Understanding Reference Manipulation

Reference manipulation is the most important concept in linked lists.

Unlike arrays, we do not need to shift elements during insertion or deletion.

Instead, we modify the connections between nodes.

Suppose we want to insert `99` between `10` and `20`.

```text
Before:

10 → 20 → 30 → null
```

### Step 1: Preserve the Existing Connection

```javascript
node.next = prev.next;
```

```text
10 ──────→ 20 → 30 → null
↑
99 ────────┘
```

### Step 2: Connect the Previous Node

```javascript
prev.next = node;
```

```text
10 → 99 → 20 → 30 → null
```

### Correct Order

```javascript
node.next = prev.next;
prev.next = node;
```

### Incorrect Order

```javascript
prev.next = node;
node.next = prev.next;
```

In the incorrect order, the new node points to itself, creating a self-loop. The original connection to the remaining list is lost.

> Golden Rule: Preserve the existing connection before changing it.

---

# 9. Add At Index

## Visualization

![Add at Index](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4w4w40dqypo3xk9at75l.png)

## Idea

Reach the previous node at `index - 1`, then insert the new node.

```text
Before:

Index:    0    1    2
10 → 20 → 30 → null

addAtIndex(1, 99)

After:

Index:    0    1    2    3
10 → 99 → 20 → 30 → null
```

## Steps

1. If the index is invalid, return.
2. If index = 0, call `addAtHead()`.
3. If index = len, call `addAtTail()`.
4. Otherwise, traverse to index - 1.
5. Create the new node.
6. Connect the new node to the next node.
7. Connect the previous node to the new node.
8. Increase the length.

## Code

```javascript
MyLinkedList.prototype.addAtIndex = function (index, val) {
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

## Why Do We Stop at Index - 1?

Because we need to modify the reference of the previous node to connect it to the new node.

```text
prev → nextNode

becomes

prev → newNode → nextNode
```

## Complexity

- Best Case: **O(1)** — insertion at head.
- Worst Case: **O(n)** — traversal required.
- Auxiliary Space Complexity: **O(1)**

---

# 10. Delete Node at Index

## Visualization

![Delete Node Step 1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rsbrqjiqn3i7nm48b0eg.png)

![Delete Node Step 2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kytmxylupk1dtq7q7vz0.png)

## Core Idea

To remove a node from a singly linked list, we change the references so that the unwanted node is skipped.

```text
Before:

10 → 20 → 30 → 40 → null

Delete index = 2

After:

10 → 20 → 40 → null
```

## Key Insight

For deleting a non-head node, we need to reach its previous node.

```javascript
prev.next = prev.next.next;
```

This skips the node we want to delete.

---

## Step 1: Validate Index

```javascript
if (index < 0 || index >= this.len) return;
```

This prevents:

- Negative indexes.
- Accessing indexes outside the linked list.
- Deleting from an empty linked list.

---

## Step 2: Special Case — Deleting the Head

```text
Before:

head → 10 → 20 → 30 → null

After:

head → 20 → 30 → null
```

Code:

```javascript
this.head = this.head.next;
this.len--;
```

We simply move the head to the next node.

---

## Step 3: Traverse to Index - 1

We need to reach the previous node.

```javascript
let prev = this.head;

for (let i = 0; i < index - 1; i++) {
    prev = prev.next;
}
```

---

## Step 4: Bypass the Node

```text
prev → toDelete → nextNode

becomes

prev ──────────→ nextNode
```

Code:

```javascript
let toDelete = prev.next;
prev.next = toDelete.next;
```

---

## Step 5: Detach the Removed Node (Optional)

```javascript
toDelete.next = null;
```

This explicitly detaches the removed node from the remaining list.

JavaScript automatically reclaims unreachable objects through garbage collection. Setting `next` to `null` is not required for garbage collection.

---

## Step 6: Update Length

```javascript
this.len--;
```

---

## Full Code

```javascript
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.len) return;
    
    if (index === 0) {
        this.head = this.head.next;
        this.len--;
        return;
    }
    
    let prev = this.head;
    
    for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
    }
    
    let toDelete = prev.next;
    
    prev.next = toDelete.next;
    toDelete.next = null;
    
    this.len--;
};
```

## Dry Run

Initial linked list:

```text
Index:    0    1    2    3
20 → 99 → 10 → 30 → null

Delete index = 1
```

### Step 1

Reach index - 1 = 0.

```text
prev = Node(20)
```

### Step 2

```text
toDelete = Node(99)
```

### Step 3

```javascript
prev.next = toDelete.next;
```

```text
20.next = Node(10)
```

### Step 4

```javascript
toDelete.next = null;
```

### Final Linked List

```text
20 → 10 → 30 → null

len = 3
```

## Complexity

- Best Case: **O(1)** — deleting the head.
- Worst Case: **O(n)** — traversal required.
- Auxiliary Space Complexity: **O(1)**

## Ultimate Pattern to Remember

```javascript
prev.next = prev.next.next;
```

> Deletion = Bypassing the unwanted node.

---

# 11. Searching in a Linked List

## Idea

Traverse the linked list and compare each node's data with the target value.

Return the index of the first matching node.

If the target is not found, return `-1`.

## Code

```javascript
MyLinkedList.prototype.search = function (target) {
    let current = this.head;
    let index = 0;
    
    while (current !== null) {
        if (current.data === target) {
            return index;
        }
        
        current = current.next;
        index++;
    }
    
    return -1;
};
```

## Example

```text
10 → 20 → 30 → 40 → null

search(30) → 2

search(10) → 0

search(50) → -1
```

## Complexity

- Best Case: **O(1)**
- Worst Case: **O(n)**
- Auxiliary Space Complexity: **O(1)**

---

# 12. Complete Working Implementation

```javascript
function Node(value) {
    this.data = value;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.len = 0;
};

// Get value at index
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.len) return -1;
    
    let current = this.head;
    
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    
    return current.data;
};

// Add at head
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new Node(val);
    
    node.next = this.head;
    this.head = node;
    
    this.len++;
};

// Add at tail
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new Node(val);
    
    if (!this.head) {
        this.head = node;
        this.len++;
        return;
    }
    
    let current = this.head;
    
    while (current.next) {
        current = current.next;
    }
    
    current.next = node;
    this.len++;
};

// Add at index
MyLinkedList.prototype.addAtIndex = function (index, val) {
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

// Delete at index
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.len) return;
    
    if (index === 0) {
        this.head = this.head.next;
        this.len--;
        return;
    }
    
    let prev = this.head;
    
    for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
    }
    
    let toDelete = prev.next;
    
    prev.next = toDelete.next;
    toDelete.next = null;
    
    this.len--;
};

// Search for a value
MyLinkedList.prototype.search = function (target) {
    let current = this.head;
    let index = 0;
    
    while (current !== null) {
        if (current.data === target) {
            return index;
        }
        
        current = current.next;
        index++;
    }
    
    return -1;
};

// Print linked list
MyLinkedList.prototype.print = function () {
    let current = this.head;
    
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
};
```

---

# 13. Testing the Linked List

```javascript
var obj = new MyLinkedList();

obj.addAtHead(10);
obj.addAtHead(20);
obj.addAtTail(30);
obj.addAtIndex(1, 99);

console.log(obj.get(1)); // 99

obj.deleteAtIndex(1);

console.log(obj.get(1)); // 10
console.log(obj.search(30)); // 2
console.log(obj.len); // 3

obj.print();
```

## Step-by-Step Result

| Operation | Linked List | Length |
|---|---|---|
| Initialize | null | 0 |
| addAtHead(10) | 10 | 1 |
| addAtHead(20) | 20 → 10 | 2 |
| addAtTail(30) | 20 → 10 → 30 | 3 |
| addAtIndex(1, 99) | 20 → 99 → 10 → 30 | 4 |
| get(1) | Returns 99 | 4 |
| deleteAtIndex(1) | 20 → 10 → 30 | 3 |
| get(1) | Returns 10 | 3 |
| search(30) | Returns 2 | 3 |

---

# 14. Time and Space Complexity

## 14.1 Singly Linked List Operations

| Operation | Best Case | Worst Case | Auxiliary Space |
|---|---|---|---|
| Access by Index | O(1) | O(n) | O(1) |
| Search | O(1) | O(n) | O(1) |
| Traversal | O(n) | O(n) | O(1) |
| Add at Head | O(1) | O(1) | O(1) |
| Add at Tail | O(1) | O(n) | O(1) |
| Add at Index | O(1) | O(n) | O(1) |
| Delete Head | O(1) | O(1) | O(1) |
| Delete Tail | O(1) | O(n) | O(1) |
| Delete at Index | O(1) | O(n) | O(1) |
| Insert After Known Node | O(1) | O(1) | O(1) |
| Delete After Known Node | O(1) | O(1) | O(1) |

**Total Storage Complexity: O(n)**

The table assumes the head-only implementation used in this chapter.

---

## 14.2 Array vs Singly Linked List

| Feature | Array | Singly Linked List |
|---|---|---|
| Memory Layout | Typically contiguous | Need not be contiguous |
| Size | Fixed or dynamic | Dynamic |
| Random Access | O(1) | O(n) |
| Search (Unsorted) | O(n) | O(n) |
| Insert at Head | O(n) | O(1) |
| Insert at Tail | Amortized O(1)* | O(n) |
| Insert at Index | O(n) | O(n) |
| Delete Head | O(n) | O(1) |
| Delete Tail | O(1)* | O(n) |
| Delete at Index | O(n) | O(n) |
| Extra References | Not required per element | Required |
| Cache Locality | Generally better | Generally poorer |

*For conventional dynamic arrays. JavaScript engine implementations may vary.

### Important Interview Insight

Insertion and deletion in a linked list are not always O(1).

- Finding the required previous node takes O(n).
- Modifying the references takes O(1).

If the required previous node is already known, insertion or deletion after it can be performed in O(1).

---

# 15. Advantages and Disadvantages

## Advantages

- Dynamic size.
- Efficient insertion and deletion at the head.
- No requirement for contiguous memory.
- No shifting of elements during insertion or deletion.
- Useful for implementing other data structures.

## Disadvantages

- No direct index-based access.
- Extra memory required for references.
- Sequential traversal is required.
- Cannot directly traverse backward.
- Generally poorer cache locality compared to arrays.

---

# 16. Real-World Applications

Linked lists can be used in:

- Stack implementation.
- Queue implementation.
- Hash table collision handling using separate chaining.
- Graph adjacency lists.
- Memory management structures.
- Collections requiring frequent insertion and deletion.

---

# 17. Important Edge Cases

Always test the following cases when implementing a linked list:

- [ ] Inserting into an empty linked list.
- [ ] Deleting from an empty linked list.
- [ ] Deleting the only node.
- [ ] Inserting at index 0.
- [ ] Inserting at index equal to length.
- [ ] Deleting the last node.
- [ ] Accessing an invalid index.
- [ ] Handling negative indexes.
- [ ] Searching for a nonexistent value.
- [ ] Searching in an empty linked list.
- [ ] Updating length correctly.
- [ ] Preserving the reference chain.

---

# 18. Common Mistakes

| Mistake | Consequence |
|---|---|
| Initializing length with 1 | Incorrect length |
| Forgetting `this.len++` | Incorrect index validation |
| Forgetting `this.len--` | Incorrect length |
| Accessing `null.next` | Runtime error |
| Incorrect reference update order | Broken chain or cycle |
| Forgetting `current = current.next` | Infinite loop |
| Not handling index 0 | Incorrect head operation |
| Traversing to index instead of index - 1 | Incorrect insertion or deletion |
| Updating length multiple times | Incorrect node count |
| Using `while(current.next)` on an empty list | Runtime error |

---

# 19. Quick Revision Cheat Sheet

| Operation | Core Logic |
|---|---|
| Create Node | `new Node(val)` |
| Access Data | `current.data` |
| Move Forward | `current = current.next` |
| Check Empty List | `head === null` |
| Check Last Node | `current.next === null` |
| Insert at Head | `node.next = head; head = node;` |
| Insert at Tail | `current.next = node;` |
| Insert After Previous | `node.next = prev.next; prev.next = node;` |
| Delete Head | `head = head.next;` |
| Delete After Previous | `prev.next = prev.next.next;` |
| Increase Length | `len++` |
| Decrease Length | `len--` |

---

## Core Patterns to Remember

### Pattern 1: Traversal

```javascript
let current = this.head;

while (current) {
    current = current.next;
}
```

### Pattern 2: Reach Previous Node

```javascript
let prev = this.head;

for (let i = 0; i < index - 1; i++) {
    prev = prev.next;
}
```

### Pattern 3: Insertion

```javascript
node.next = prev.next;
prev.next = node;
```

### Pattern 4: Deletion

```javascript
prev.next = prev.next.next;
```

---

# 20. Practice Problems

Complete the following problem to master the fundamental implementation of a singly linked list.

| Difficulty | Platform | Problem | Topic | Status |
|---|---|---|---|---|
| Medium | LeetCode | [707. Design Linked List](https://leetcode.com/problems/design-linked-list/) | Linked List Implementation | To Do |

---

# Key Takeaways

- A linked list is a collection of connected nodes.
- Each node stores data and a reference to the next node.
- The head stores the reference to the first node.
- Traversal is sequential.
- Insertion and deletion depend on reference manipulation.
- Always preserve the existing connection before modifying references.
- Always validate indexes and handle edge cases.
- Finding a node takes O(n), but modifying a known connection takes O(1).

> Linked List = Nodes + References + Traversal + Reference Manipulation

---


