# 143. Reorder List

**Difficulty:** Medium  
**Platform:** LeetCode  
**Topics:** Linked List, Two Pointers, Stack, Recursion  
**Problem Link:** https://leetcode.com/problems/reorder-list/

---

## 1. Problem Statement

You are given the `head` of a **singly linked list** containing `n` nodes.

A singly linked list is a linear data structure in which each node contains a value and a reference to the next node.

The given linked list is represented as:

```text
L0 → L1 → L2 → L3 → ... → Ln-1 → Ln
```

Your task is to **reorder the existing linked list** into the following pattern:

```text
L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...
```

The reordered linked list must contain the same nodes as the original linked list, but their connections must follow the specified order.

You must rearrange the nodes by alternately selecting them from the beginning and the end of the original linked list.

### Reordering Requirements

The nodes must appear in the following sequence:

1. The first node of the original linked list.
2. The last node of the original linked list.
3. The second node of the original linked list.
4. The second-last node of the original linked list.
5. The third node of the original linked list.
6. The third-last node of the original linked list.
7. Continue this alternating pattern until every node has been included.

### Important Conditions

- You must modify the original linked list **in-place**.
- You are not allowed to modify the values stored inside the nodes.
- Only the connections between existing nodes may be changed.
- You must not replace the original nodes with newly created nodes.
- Every original node must appear exactly once in the reordered linked list.
- No node should be lost or duplicated.
- The final linked list must not contain a cycle.
- The final node must point to `null`.
- You must not return an array or a new linked list.
- The function must return `void`.

---

## 2. Understanding the Input

The function receives one parameter:

**`head`** — A reference to the first node of a singly linked list.

Each node contains:

- `val`: An integer value stored in the node.
- `next`: A reference to the next node, or `null` if it is the last node.

For example, the input:

```text
head = [1, 2, 3, 4]
```

Represents the following linked list:

```text
head
 ↓
[1] → [2] → [3] → [4] → null
```

The array notation shown in the examples is only a representation of the linked list.

The actual input to the function is the `head` reference, not a JavaScript array.

---

## 3. Understanding the Expected Output

After reordering, the original linked list must follow the required alternating pattern.

For example:

**Original Linked List:**

```text
1 → 2 → 3 → 4 → null
```

**Required Linked List:**

```text
1 → 4 → 2 → 3 → null
```

The values stored in the nodes must remain unchanged.

Only the connections between nodes are allowed to change.

The function must not return the reordered linked list. The updated ordering must be accessible through the original `head`.

---

## 4. Example 1 — Even Number of Nodes

**Input:**

```text
head = [1, 2, 3, 4]
```

**Output:**

```text
[1, 4, 2, 3]
```

### Explanation

The original linked list contains four nodes:

```text
1 → 2 → 3 → 4 → null
```

The required ordering is:

```text
First node       → 1
Last node        → 4
Second node      → 2
Second-last node → 3
```

Therefore, the reordered linked list is:

```text
1 → 4 → 2 → 3 → null
```

All four original nodes must remain in the linked list.

---

## 5. Example 2 — Odd Number of Nodes

**Input:**

```text
head = [1, 2, 3, 4, 5]
```

**Output:**

```text
[1, 5, 2, 4, 3]
```

### Explanation

The original linked list contains five nodes:

```text
1 → 2 → 3 → 4 → 5 → null
```

The required ordering is:

```text
First node       → 1
Last node        → 5
Second node      → 2
Second-last node → 4
Middle node      → 3
```

The reordered linked list becomes:

```text
1 → 5 → 2 → 4 → 3 → null
```

Since the linked list contains an odd number of nodes, the middle node becomes the final node.

---

## 6. Example 3 — Single Node

**Input:**

```text
head = [10]
```

**Output:**

```text
[10]
```

### Explanation

The linked list contains only one node:

```text
10 → null
```

The output must contain the same single node.

---

## 7. Example 4 — Two Nodes

**Input:**

```text
head = [10, 20]
```

**Output:**

```text
[10, 20]
```

### Explanation

The linked list contains two nodes:

```text
10 → 20 → null
```

The required ordering produces the same sequence.

---

## 8. Example 5 — Six Nodes

**Input:**

```text
head = [1, 2, 3, 4, 5, 6]
```

**Output:**

```text
[1, 6, 2, 5, 3, 4]
```

### Explanation

The original linked list contains six nodes:

```text
1 → 2 → 3 → 4 → 5 → 6 → null
```

The reordered sequence must follow:

```text
First node       → 1
Last node        → 6
Second node      → 2
Second-last node → 5
Third node       → 3
Third-last node  → 4
```

The final linked list becomes:

```text
1 → 6 → 2 → 5 → 3 → 4 → null
```

---

## 9. Example 6 — Seven Nodes

**Input:**

```text
head = [1, 2, 3, 4, 5, 6, 7]
```

**Output:**

```text
[1, 7, 2, 6, 3, 5, 4]
```

### Explanation

The original linked list contains seven nodes:

```text
1 → 2 → 3 → 4 → 5 → 6 → 7 → null
```

The reordered linked list must follow the alternating first-last pattern:

```text
1 → 7 → 2 → 6 → 3 → 5 → 4 → null
```

The middle node appears at the end of the reordered linked list.

---

## 10. Constraints

```text
1 <= Number of nodes <= 5 × 10^4

1 <= Node.val <= 1000
```

### Constraint Details

**Number of nodes**

The linked list contains at least one node and at most 50,000 nodes.

Your implementation must support:

- Single-node linked lists.
- Two-node linked lists.
- Odd-length linked lists.
- Even-length linked lists.
- Large linked lists containing thousands of nodes.

**Node values**

Every node contains an integer between `1` and `1000`, inclusive.

Different nodes may contain the same value.

For example:

```text
1 → 2 → 1 → 2 → 1
```

This is a valid linked list.

Even when node values are repeated, each node must be treated as a separate node.

---

## 11. Function Signature — JavaScript

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

};
```

### Parameter

`head` — The first node of the original singly linked list.

### Return Type

`void`

The function must modify the existing linked list directly and must not return anything.

---

## 12. Additional Test Cases

| Test Case | Input | Expected Output |
|---|---|---|
| 1 | `[1]` | `[1]` |
| 2 | `[1,2]` | `[1,2]` |
| 3 | `[1,2,3]` | `[1,3,2]` |
| 4 | `[1,2,3,4]` | `[1,4,2,3]` |
| 5 | `[1,2,3,4,5]` | `[1,5,2,4,3]` |
| 6 | `[1,2,3,4,5,6]` | `[1,6,2,5,3,4]` |
| 7 | `[1,2,3,4,5,6,7]` | `[1,7,2,6,3,5,4]` |
| 8 | `[10,20,30,40]` | `[10,40,20,30]` |
| 9 | `[5,5,5,5]` | `[5,5,5,5]` |
| 10 | `[1,2,1,2,1]` | `[1,1,2,2,1]` |
| 11 | `[10,20,30,40,50,60]` | `[10,60,20,50,30,40]` |
| 12 | `[100,200,300]` | `[100,300,200]` |

---

## 13. Edge Cases

Your implementation must correctly handle the following situations.

### Edge Case 1: Minimum Number of Nodes

```text
Input:  [1]
Output: [1]
```

### Edge Case 2: Two Nodes

```text
Input:  [1,2]
Output: [1,2]
```

### Edge Case 3: Odd Number of Nodes

```text
Input:  [1,2,3,4,5]
Output: [1,5,2,4,3]
```

### Edge Case 4: Even Number of Nodes

```text
Input:  [1,2,3,4,5,6]
Output: [1,6,2,5,3,4]
```

### Edge Case 5: Duplicate Values

```text
Input:  [1,1,2,2]
Output: [1,2,1,2]
```

### Edge Case 6: All Values Are Equal

```text
Input:  [5,5,5,5,5]
Output: [5,5,5,5,5]
```

### Edge Case 7: Maximum Number of Nodes

The linked list may contain up to 50,000 nodes.

Your implementation must handle a large linked list without losing nodes or creating invalid connections.

---

## 14. Final Requirements

Complete the `reorderList(head)` function.

Your implementation must satisfy all the following conditions:

- [ ] Accept the head of a singly linked list.
- [ ] Reorder nodes according to the specified pattern.
- [ ] Preserve the original values of every node.
- [ ] Use the original nodes.
- [ ] Ensure every node appears exactly once.
- [ ] Handle odd-length linked lists.
- [ ] Handle even-length linked lists.
- [ ] Handle single-node linked lists.
- [ ] Handle duplicate node values.
- [ ] Avoid creating cycles.
- [ ] Ensure the final node points to `null`.
- [ ] Modify the original linked list in-place.
- [ ] Return nothing.

---

**Problem:** LeetCode 143 — Reorder List  
**Difficulty:** Medium  
**Language:** JavaScript  
**Task:** Reorder the original singly linked list without modifying node values.