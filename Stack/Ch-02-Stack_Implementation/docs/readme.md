
# 📚 Chapter 2 – Stack Implementation in JavaScript

> **Goal:** Build a Stack from scratch and understand every line of code, every method, and every concept behind the implementation.

---

# 📖  Introduction to Stack Implementation



# Topics Covered

* Does JavaScript have a Stack?
* Why implement our own Stack?
* Why use an Array?
* Array vs Stack
* Creating the Stack class
* Constructor
* `this` keyword
* Internal storage
* Push
* Pop
* Peek
* isEmpty
* Size
* Clear
* Print
* Dry Runs
* Interview Questions

---

# 📖 Does JavaScript Have a Stack?

## Does JavaScript Provide a Stack?

The answer is **No**.

Unlike some programming languages, JavaScript does **not** include a built-in Stack data structure.

For example,

### Java

```java
Stack<Integer> stack = new Stack<>();
```

### C++

```cpp
stack<int> st;
```

### Python

```python
stack = []
```

Python also doesn't have a dedicated Stack class. Developers commonly use a list as a stack.

### JavaScript

```javascript
// ❌ There is no built-in Stack class.

const stack = new Stack(); // Error
```

Since JavaScript doesn't provide a Stack, we need to implement one ourselves.

---

## Why Doesn't JavaScript Include a Stack?

JavaScript Arrays already provide methods such as:

* `push()`
* `pop()`

These methods naturally support Stack behaviour.

Because of this, JavaScript leaves the implementation of a Stack to developers.

---

# 📖  Why Do We Need to Implement a Stack?

If Arrays already provide `push()` and `pop()`, then why do we create another Stack class?

This is one of the most common interview questions.

The answer is:

> **To enforce Stack rules.**

A Stack follows strict rules.

* Insert only at the Top.
* Remove only from the Top.

An Array, however, allows many operations that break these rules.

Example:

```javascript
const arr = [10,20,30,40];

arr.splice(2,1);
arr.shift();
arr.unshift(100);
```

These operations violate Stack behaviour.

Therefore, we create a Stack class that exposes only Stack operations.

---

# 📖  Why Do We Use an Array?

A Stack needs somewhere to store data.

We could store elements in:

* Variables
* Objects
* Arrays
* Linked Lists

Among these options, Arrays are the simplest.

---

## Why Not Variables?

```javascript
let first;
let second;
let third;
let fourth;
```

What happens if we need 10,000 elements?

Variables are not scalable.

---

## Why Not Objects?

Objects store data using keys.

```javascript
const student = {

    name: "Rahul",

    age:20

};
```

A Stack doesn't need key-value pairs.

It only needs an ordered collection of elements.

---

## Why Arrays?

Arrays provide:

* Dynamic storage
* Ordered elements
* Fast insertion at the end
* Fast removal from the end

Perfect for Stack implementation.

---

# 📖  Is Every Array a Stack?

No.

An Array is **not** a Stack.

An Array is a **general-purpose data structure**.

It becomes a Stack only when we use it according to Stack rules.

but make sure don't use Stack like a Array it's your responsibility as a Developer a stack is noting but just a array with restriction .

---

## Example

```javascript
const arr = [10,20,30];
```

This is just an Array.

---

Now,

```javascript
arr.push(40);

arr.pop();
```

The Array behaves like a Stack.

---

But,

```javascript
arr.shift();

arr.unshift(5);

arr.splice(1,1);
```

Now it no longer behaves like a Stack.

---

## Conclusion

> **A Stack is defined by its behaviour, not by the data structure used underneath.**

---

# 📖 Array vs Stack

| Array                | Stack                |
| -------------------- | -------------------- |
| General-purpose      | Specialized          |
| Can insert anywhere  | Insert only at Top   |
| Can delete anywhere  | Delete only from Top |
| Random access        | Top access only      |
| Many methods         | Limited methods      |
| Doesn't enforce LIFO | Always follows LIFO  |

---

# 📖 Creating the Stack Class

Now that we understand why we're using an Array, we can create our Stack.

```javascript
class Stack{

}
```

This creates a blueprint for Stack objects.

---

# 📖  Understanding Classes

A **class** is a blueprint.

Imagine a blueprint of a house.

From one blueprint, we can build many houses.

Similarly,

one Stack class can create many Stack objects.

---

Example

```javascript
const stack1 = new Stack();

const stack2 = new Stack();

const stack3 = new Stack();
```

Each Stack is completely independent.

---

# 📖  Constructor

Every class can have a special method called a constructor.

```javascript
class Stack{

    constructor(){

    }

}
```

The constructor executes automatically whenever we create a new object.

Example

```javascript
const stack = new Stack();
```

Internally,

```javascript
constructor(){

}
```

runs automatically.

---

# 📖 Why Do We Need a Constructor?

Whenever we create a Stack,

it should always start empty.

The constructor initializes the Stack.

```javascript
constructor(){

    this.stack=[];

}
```

---

# 📖 Understanding `this`

`this`

refers to the **current object**.

Example

```javascript
const stack1 = new Stack();

const stack2 = new Stack();
```

Internally

```
stack1

{

    stack:[]
}
```

```
stack2

{

    stack:[]
}
```

Each object has its own storage.

---

# 📖 Internal Storage

```javascript
this.stack = [];
```

This line creates an empty Array.

This Array stores every element of our Stack.

Initially,

```
Top

Empty
```

---

# 📖  Complete Code

```javascript
class Stack{

    constructor(){

        this.stack=[];

    }

}
```

---

# 📖 Dry Run

```javascript
const stack = new Stack();
```

### Step 1

Memory allocated.

↓

### Step 2

Constructor executes.

↓

### Step 3

`this.stack=[]`

↓

### Step 4

Object created.

Memory

```
stack
 │
 ▼

{

    stack:[]
}
```

---

# 📖 Chapter 2.15 – Summary

In this chapter, we learned:

* JavaScript has no built-in Stack.
* Arrays are commonly used to implement a Stack.
* Arrays are not Stacks by default.
* We create a Stack class to enforce Stack rules.
* A constructor initializes every Stack with an empty Array.
* `this` refers to the current object.
* Every Stack object has its own independent storage.

