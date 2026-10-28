# What is Time Complexity? (and Why You’re Probably Thinking About it Wrong)


# 

[https://youtu.be/_51KFwT1IGY?si=UR-Ba0Bpa_UBEbRC](https://youtu.be/_51KFwT1IGY?si=UR-Ba0Bpa_UBEbRC)

## ❌ The Wrong Belief:

When people first hear about Time Complexity, they often think:

![TimeComplexity](./Image/wemvwcj0alirff9n4pzz.png)

But this is not correct

![TimeComplexity](./Image/futpllu8bzoqnsdt0k6u.png)

## Let’s Prove Why This Is Wrong:

### 👨‍🎓 Student A

Student A writes this simple code in JavaScript:

```jsx
for (let i = 0; i < 1000000; i++) {
    console.log(i);
}

```

### He uses a modern, powerful laptop:

- 💻 16GB RAM
- ⚡ SSD (Solid State Drive)
- 🚀 Fast multi-core CPU

### 🕐 Result:

His program runs and finishes in just 1 second.

### 👩‍🎓 Student B

Student B writes exactly the same code:

```jsx
for (let i = 0; i < 1000000; i++) {
    console.log(i);
}

```

### But she is using an older laptop:

- 🖥️ 4GB RAM
- 🐢 Slower CPU
- 🧓 Mechanical hard drive

### 🕓 Result:

Her program takes around 5 seconds to finish.

## ❓ So, Is Student A’s Code Better?

**No! Absolutely not.**

Both students wrote the **exact same code** using the **same algorithm** — a simple `for` loop that runs 1 million times.

So why the performance difference?

| **Factor** | **Student A (Faster)** | **Student B (Slower)** |
| --- | --- | --- |
| **RAM** | 16GB | 4GB |
| **CPU Speed** | Fast, modern processor | Older, slower processor |
| **Disk Type** | SSD (fast) | HDD (slower) |
| **System Performance** | High | Low |

### 🧑‍💻 And it’s also dependent on the programming language used.

For example, the same algorithm written in **C++** may run faster than in **Python** because:

- **C++** is a **compiled language** — the code is converted directly into machine code before execution, which makes it run very fast.
- **Python** is an **interpreted language** — the code is executed line-by-line by an interpreter at runtime, which usually makes it slower.

### Examples of compiled vs interpreted languages:

| Language | Type | Performance Impact |
| --- | --- | --- |
| **C, C++, Rust** | Compiled | Generally faster execution times due to direct machine code output |
| **Python, JavaScript, Ruby** | Interpreted | Slower because code runs through an interpreter or virtual machine |

---

## ✅ So What Is Time Complexity Then?

Time Complexity measures how the number of steps an algorithm takes to run **grows as the input size (n) increases**.

Here, **n** can represent:

- The number of elements in a list or array
- The value of the input number
- The number of nodes or edges in a graph
- Any parameter that affects the amount of work the algorithm needs to perform

### 📐 Time Complexity = Growth Rate, Not Runtime

Let’s visualize this.

- If `n = 10`, then `10` operations.
- If `n = 1000`, then `1000` operations.
- If `n = 1,000,000`, then `1,000,000` operations.

![TimeComplexity](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0l7b9nivwrsmwy3qyd8l.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kfsa08n00k63kgt5azyr.png)

## Linear Search and Binary Search

To better understand Time Complexity, let’s talk about two common search techniques: Linear Search and Binary Search. These examples will help you see how different algorithms perform and how their efficiency changes as input size grows.

### 1. Linear Search (Easy but Slow)

**What it is:**

Checking every item in a list, one by one, until you find what you want.

**How it works:**

Start from the first item, compare it to the target, then move to the next until you find it or reach the end.

**When to use:**

When the list is not sorted or is small.

**Example:**

You have this list: `["Ali", "Ravi", "Maya", "Sara", "Tom"]`

You want to find `"Maya"` — Linear Search checks `"Ali"`, then `"Ravi"`, then `"Maya"` and stops.

**Time Complexity:**

O(n) — it can take up to n steps if the item is at the end or not in the list.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6izn2239qonwq0j0u7kx.png)

```jsx
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;  // Found at index i
    }
  }
  return -1;  // Not found
}

const names = ["Ali", "Ravi", "Maya", "Sara", "Tom"];
console.log(linearSearch(names, "Maya"));  // Output: 2

```

### 2️2 Binary Search (Fast but Needs Sorted List)

- Binary Search Always Works on the Shorted Array or list

**What it is:**

Quickly finding an item by repeatedly dividing the sorted list in half `n/2`.

**How it works:**

Check the middle item; if it’s the target, done. If the target is smaller, search the left half; if bigger, search the right half. Repeat until found or no items left.

**When to use:**

When the list is sorted and large.

**Example:**

Sorted list: `["Ali", "Maya", "Ravi", "Sara", "Tom"]`

To find `"Maya"`, check the middle item `"Ravi"`. Since `"Maya"` comes before `"Ravi"`, search the left half, where `"Maya"` is found quickly.

**Time Complexity:**

O(log n) — very fast even for huge lists.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/52aypjpkd909wwzub0p7.png)

```jsx
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;  // Found at index mid
    } else if (arr[mid] < target) {
      left = mid + 1;  // Search right half
    } else {
      right = mid - 1;  // Search left half
    }
  }

  return -1;  // Not found
}

const sortedNames = ["Ali", "Maya", "Ravi", "Sara", "Tom"];
console.log(binarySearch(sortedNames, "Maya"));  // Output: 1

```

**Why Binary Search is Faster than Linear Search**

As the input size *n* increases, Linear Search runs up to *n* operations, making it slower for large data sets.

That’s why Binary Search is much, much more efficient — because it only needs about log₂(*n*) steps by cutting the search space in half each time.

In simple words:

- Linear Search checks every item one by one (slow for big lists).
- Binary Search quickly narrows down the search (fast even for huge lists).

