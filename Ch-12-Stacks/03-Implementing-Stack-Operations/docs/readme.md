

# 📚 Chapter 3 – Implementing Stack Operations

## 3.1 Introduction

In the previous chapter, we created an empty Stack.

```javascript
class Stack {

    constructor() {
        this.stack = [];
    }

}
```

Currently, our Stack can only be created.

It cannot:

* Add elements
* Remove elements
* View the Top element
* Check whether it is empty
* Count elements

To make our Stack useful, we need to implement these operations.

---

# What Will We Learn?

In this chapter we will implement:

* Push
* Pop
* Peek
* isEmpty
* Size
* Print
* Clear

Finally, we will combine everything into a complete Stack class.

---

# Stack Operations Overview

| Operation | Description         | Time |
| --------- | ------------------- | ---- |
| Push      | Insert at Top       | O(1) |
| Pop       | Remove from Top     | O(1) |
| Peek      | View Top element    | O(1) |
| isEmpty   | Check empty         | O(1) |
| Size      | Number of elements  | O(1) |
| Print     | Display Stack       | O(n) |
| Clear     | Remove all elements | O(1) |

---

# 3.2 Push()

Definition

Push inserts a new element at the Top of the Stack.

Syntax

```javascript
push(value)
```

Implementation

```javascript
push(value){

    this.stack.push(value);

}
```

Dry Run

```
Initial

[]

↓

push(10)

[10]

↓

push(20)

[10,20]

↓

push(30)

[10,20,30]
```

Visualization

```
Top
 ↓

30
20
10
```

Complexity

```
Time : O(1)

Space : O(1)
```

---

# 3.3 Pop()

Definition

Pop removes the Top element from the Stack.

Implementation

```javascript
pop(){

    return this.stack.pop();

}
```

Dry Run

```
Before

10
20
30

↓

Pop()

↓

Removed : 30

Remaining

10
20
```

Complexity

```
Time : O(1)

Space : O(1)
```

---

# 3.4 Peek()

Definition

Peek returns the Top element without removing it.

Implementation

```javascript
peek(){

    return this.stack[this.stack.length-1];

}
```

Dry Run

```
10
20
30

↓

Peek()

↓

30
```

Remaining

```
10
20
30
```

Nothing is removed.

---

# 3.5 isEmpty()

Definition

Checks whether the Stack contains any elements.

Implementation

```javascript
isEmpty(){

    return this.stack.length===0;

}
```

Example

```
[]

↓

true
```

```
[10]

↓

false
```

---

# 3.6 Size()

Definition

Returns the total number of elements inside the Stack.

Implementation

```javascript
size(){

    return this.stack.length;

}
```

Example

```
[10,20,30]

↓

3
```

---

# 3.7 Print()

Definition

Displays every element in the Stack.

Implementation

```javascript
print(){

    console.log(this.stack);

}
```

Output

```
[10,20,30]
```

---

# 3.8 Clear()

Definition

Removes every element from the Stack.

Implementation

```javascript
clear(){

    this.stack=[];

}
```

Before

```
[10,20,30]
```

↓

After

```
[]
```

---

# 3.9 Complete Stack Class

```javascript
class Stack{

    constructor(){

        this.stack=[];

    }

    push(value){

        this.stack.push(value);

    }

    pop(){

        return this.stack.pop();

    }

    peek(){

        return this.stack[this.stack.length-1];

    }

    isEmpty(){

        return this.stack.length===0;

    }

    size(){

        return this.stack.length;

    }

    print(){

        console.log(this.stack);

    }

    clear(){

        this.stack=[];

    }

}
```

---

# Using the Stack

```javascript
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();

console.log(stack.peek());

console.log(stack.pop());

console.log(stack.size());

console.log(stack.isEmpty());

stack.clear();

stack.print();
```

Output

```
[10,20,30]

30

30

2

false

[]
```

---

# Complete Dry Run

```
Create Stack

↓

[]

↓

Push(10)

↓

[10]

↓

Push(20)

↓

[10,20]

↓

Push(30)

↓

[10,20,30]

↓

Peek()

↓

30

↓

Pop()

↓

Removed 30

↓

[10,20]

↓

Size()

↓

2

↓

isEmpty()

↓

false

↓

Clear()

↓

[]
```

---

# Time Complexity

| Operation | Complexity |
| --------- | ---------- |
| Push      | O(1)       |
| Pop       | O(1)       |
| Peek      | O(1)       |
| isEmpty   | O(1)       |
| Size      | O(1)       |
| Clear     | O(1)       |
| Print     | O(n)       |

---

# Interview Questions

1. Why is `push()` an O(1) operation?
2. Why is `pop()` an O(1) operation?
3. What is the difference between `peek()` and `pop()`?
4. Why does `isEmpty()` use `length === 0`?
5. Can `peek()` modify the Stack?
6. What happens if `pop()` is called on an empty Stack?
7. Why do we return a value from `pop()`?
8. Why does `clear()` assign a new empty array instead of repeatedly calling `pop()`?
9. Why is `print()` O(n)?
10. Can a Stack be implemented without using an Array?
