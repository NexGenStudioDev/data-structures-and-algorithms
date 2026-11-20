// Basic Stack Implementation

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) return undefined;
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }

  printStack() {
    console.log([...this.stack].reverse());
  }
}

if (typeof module !== "undefined") module.exports = Stack;

if (typeof require !== "undefined" && require.main === module) {
  const stack = new Stack();
  stack.push(10);
  stack.push(69);
  stack.push(420);
  console.log(stack.size());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop()); // undefined: stack is empty
  console.log(stack.peek()); // undefined: stack is empty
  console.log(stack.isEmpty());
  console.log(stack.size());
}