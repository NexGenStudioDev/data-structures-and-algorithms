# Chapter 1: Introduction to Data Structures and Algorithms

This chapter gives you a map of the subject: what data structures organize, what algorithms do, and how to choose a useful representation for a problem. The examples use JavaScript, the repository's primary language.

## Learning path

Work through the levels in order. The later levels extend the same ideas; they do not require you to know every data structure already.

### Beginner: understand the building blocks

By the end of this level, you should be able to:

- Explain the difference between data, a data type, a data structure, and an algorithm.
- Recognize common linear and non-linear structures.
- Describe what a basic operation does, such as reading, adding, searching, or removing an item.
- Explain why the same information can be represented in different ways.

### Intermediate: compare representations

For a small problem, practice asking:

1. What information must be stored?
2. Which operations will happen most often?
3. Which representation makes those operations straightforward?
4. What time and memory costs come with that choice?

For example, an array is convenient when a program often reads items by index. A linked list can make insertion at a known node straightforward, but reaching that node still requires traversal. The best choice depends on the operations the program needs.

### Advanced: reason about trade-offs

At this level, connect the abstract structure to its implementation and workload. Distinguish the interface an abstract data type promises from the concrete representation used to implement it. Account for the cost of all operations, extra memory, mutation, input size, and language guarantees. Later chapters build on these ideas with amortized analysis, invariants, and implementation trade-offs.

## 1. What is data?

**Data** is information a program can represent and process. Examples include a number such as `42`, a name such as `"Mina"`, or a collection of task records. A program receives, transforms, stores, and returns data.

Data can be **raw** (as first received) or **processed** (organized or transformed for a particular use). For example, unsorted form responses are raw input; a validated, grouped report made from them is processed data. “Raw” and “processed” describe a stage in handling information, not different JavaScript data types.

In JavaScript, values have types. Common primitive types include `number`, `string`, `boolean`, `bigint`, `symbol`, `undefined`, and `null` (with `typeof null` being a historical exception that reports `"object"`). Arrays and ordinary objects are objects. A type describes the values and operations available; it is not the same thing as a data structure.

## 2. What is a data structure?

A **data structure** is a way to organize values so a program can perform the operations it needs. Examples include arrays, linked lists, stacks, queues, trees, graphs, hash maps, and sets.

Data structures do not belong to one programming language. Languages provide different built-in tools and guarantees, and programmers can implement additional structures using those tools.

### An everyday example

Imagine keeping a list of books. If you need to retrieve the book at position 20, an array-like representation is convenient. If you need to model which books are prerequisites for other books, a graph may represent those relationships more clearly. The information is still about books; the structure changes how the program organizes and accesses it.

## 3. What is an algorithm?

An **algorithm** is a finite, well-defined sequence of steps for solving a problem or performing a computation. For example, searching a list for a name is an algorithmic task. Chapter 2 develops this idea and explains how to describe and trace algorithms.

Data structures and algorithms work together: the structure stores the information, and the algorithm operates on it. Choosing a suitable structure can make an algorithm simpler or reduce the work it performs.

## 4. Why learn DSA?

Data structures and algorithms help you:

- Represent information in a form that matches the problem.
- Make common operations faster or use less extra memory.
- Break a large task into steps that can be reasoned about and checked.
- Explain the trade-offs in a solution, including its limits.

An implementation is not automatically better just because it uses a named data structure or has fewer lines. Correctness, required operations, input size, memory, and clarity all matter.

## 5. Common ways to classify data structures

These categories are useful mental models. They are not a complete taxonomy, and some structures fit more than one description.

### Linear and non-linear organization

- **Linear structures** present elements in a sequence. Arrays, linked lists, stacks, and queues are common examples.
- **Non-linear structures** represent relationships that branch or connect across many elements. Trees and graphs are common examples.

“Linear” describes the logical organization, not necessarily the physical layout in memory.

### Fixed-size and resizable structures

- A **fixed-size** structure has a capacity chosen in advance.
- A **resizable** structure can grow or shrink as items are added or removed, sometimes by allocating a larger internal buffer and copying elements.

This distinction depends on the particular implementation and language. For example, JavaScript arrays can grow and shrink, but the ECMAScript language does not require an engine to store every array as one contiguous block of memory.

## 6. First look at common structures

| Structure | Useful mental model | Common operations or uses |
| --- | --- | --- |
| Array | Indexed sequence | Read by index, scan, append, update |
| Linked list | Nodes connected by references | Traverse; add or remove near a known node |
| Stack | Last in, first out (LIFO) | Push and pop at the top; undo and nested work |
| Queue | First in, first out (FIFO) | Enqueue and dequeue; scheduling and breadth-first search |
| Tree | Parent-child hierarchy | Represent folders, syntax, and hierarchical data |
| Graph | Vertices connected by edges | Represent routes, dependencies, and networks |
| Map | Keys associated with values | Look up a value using its key |
| Set | Collection of distinct values | Track membership and remove duplicates |

These are conceptual summaries. Later chapters explain the operations, implementations, and complexity assumptions in detail.

## 7. Abstract data types and implementations

An **abstract data type (ADT)** describes what operations are available and what they mean, without requiring one particular storage layout. A stack ADT, for example, supports operations such as `push`, `pop`, and `peek` with last-in, first-out behavior.

An implementation chooses how to provide those operations. A stack can be implemented with an array or a linked list. Both can follow the same stack rules while having different implementation details and trade-offs.

Keeping the interface separate from the implementation makes it easier to reason about correctness first and representation choices next.

## 8. A small JavaScript example

An array can hold a sequence of tasks:

```javascript
const tasks = ["read", "practice", "review"];

console.log(tasks[0]); // "read": access the first item by index
tasks.push("break"); // add an item to the end
console.log(tasks.length); // 4
```

This example shows an array interface, not a promise about how a JavaScript engine stores the array internally. Also, `push` mutates this array: code that shares the same array reference can observe the added item.

## 9. Choosing a structure: a repeatable checklist

Before choosing a structure, write down the operations the program needs. Then consider:

1. **Access:** Do you need frequent access by position or key?
2. **Search:** Do you need to find an item by value, property, or relationship?
3. **Updates:** Are items mostly appended, inserted, removed, or replaced?
4. **Ordering:** Must insertion order, sorted order, or priority be preserved?
5. **Scale:** How much data is expected, and what time or memory limits apply?
6. **Language behavior:** What guarantees does JavaScript provide, and which details depend on the engine?

You will learn how to quantify these costs in Chapters 4 and 5. Avoid choosing based only on a broad label such as “fast”; the operation and its assumptions determine the cost.

## Chapter summary

- Data is information a program can represent and process.
- A type describes values and available operations; a data structure organizes values for particular operations.
- An algorithm is a finite sequence of steps for solving a problem.
- Linear and non-linear describe logical organization, not guaranteed memory layout.
- An abstract data type defines behavior; an implementation provides that behavior using a representation.
- Choose structures by considering required operations, correctness, input size, memory, and language guarantees.

## Prerequisites and next steps

No DSA background is required. Basic familiarity with JavaScript values, variables, arrays, and functions will help; Chapter 3 reviews programming fundamentals. Continue to [Chapter 2: What is an Algorithm](../Ch-02-What-is-an-Algorithm/README.md), then [Chapter 3: Basic Programming Questions](../Ch-03-Basic-Programming-Questions/README.md).
