## Merge k Sorted Lists | JavaScript | Sort All Values Approach

The input is an **array of linked list heads**, where each linked list is already sorted.

Instead of trying to merge all linked lists together one by one, we can think of the problem differently:

* Traverse every linked list.
* Collect all node values into a single array.
* Sort the array.
* Create a new sorted linked list from the sorted values.

This approach is very straightforward and easy to understand, although it is not the most optimal solution.

---

# Approach

### Step 1: Handle Edge Cases

If the input array is empty or doesn't exist, there are no linked lists to merge.

```javascript
if (!lists || lists.length === 0) return null;
```

---

### Step 2: Create an Array

We'll store every node value inside an array.

```javascript
let heap = [];
```

*(Here `heap` is just a normal array. It is **not** being used as a Heap/Priority Queue.)*

---

### Step 3: Traverse Every Linked List

The input is an array.

Each element of this array is the **head** of a linked list.

```javascript
for (let list of lists)
```

For every linked list:

```
lists
│
├── Head1 → 1 → 4 → 5
├── Head2 → 1 → 3 → 4
└── Head3 → 2 → 6
```

Now traverse each linked list.

```javascript
while (list) {
    heap.push(list.val);
    list = list.next;
}
```

Example:

First list

```
1 → 4 → 5
```

Store values

```
[1,4,5]
```

Second list

```
1 → 3 → 4
```

Store values

```
[1,4,5,1,3,4]
```

Third list

```
2 → 6
```

Final array

```
[1,4,5,1,3,4,2,6]
```

---

### Step 4: Sort the Array

Now simply sort all collected values.

```javascript
heap.sort((a, b) => a - b);
```

After sorting:

```
[1,1,2,3,4,4,5,6]
```

---

### Step 5: Create a Dummy Node

A dummy node makes linked list construction much easier.

```javascript
let dummyList = new ListNode(0);
let dummyListHead = dummyList;
```

Initially

```
dummy
  |
  v
[0]
```

---

### Step 6: Build the New Linked List

Loop through every sorted value.

```javascript
for (let i = 0; i < heap.length; i++) {
    dummyList.next = new ListNode(heap[i]);
    dummyList = dummyList.next;
}
```

Construction

```
0
 \
 1
  \
   1
    \
     2
      \
       3
        \
         4
          \
           4
            \
             5
              \
               6
```

Finally return

```javascript
return dummyListHead.next;
```

Skip the dummy node.

Result

```
1 → 1 → 2 → 3 → 4 → 4 → 5 → 6
```

---

# Dry Run

### Input

```
lists = [
  1→4→5,
  1→3→4,
  2→6
]
```

### Collect Values

```
heap = []

After List1

[1,4,5]

After List2

[1,4,5,1,3,4]

After List3

[1,4,5,1,3,4,2,6]
```

### Sort

```
[1,1,2,3,4,4,5,6]
```

### Build Linked List

```
dummy

↓

0 → 1 → 1 → 2 → 3 → 4 → 4 → 5 → 6
```

Return

```
1 → 1 → 2 → 3 → 4 → 4 → 5 → 6
```

---

# Complexity Analysis

Let:

* **k** = number of linked lists
* **N** = total number of nodes across all linked lists

### Time Complexity

Traversing all linked lists:

```
O(N)
```

Sorting all values:

```
O(N log N)
```

Building the new linked list:

```
O(N)
```

Overall:

**O(N log N)**

---

### Space Complexity

We store every node value inside an array.

```
O(N)
```

We also create a new linked list of size **N**.

Auxiliary space:

**O(N)**

## Code

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists || lists.length === 0) return null;


    let heap = [];

    // Add all nodes to heap
    for (let list of lists) {
        while (list) {
            heap.push(list.val);
            list = list.next;
        }
    }


    heap.sort((a, b) => a - b)

    let dummyList = new ListNode(0)
    let dummyListHead = dummyList

    for (let i = 0; i < heap.length; i++) {
        dummyList.next = new ListNode(heap[i])
        dummyList = dummyList.next
    }

    return dummyListHead.next

};

```
