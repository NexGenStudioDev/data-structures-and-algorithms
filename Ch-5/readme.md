# Mastering Time Complexity — Big O, Best/Worst/Average, and Real Examples

Progress: 0%
Status: Done

# ⏱️ What Is Time Complexity?

**Time Complexity** tells us **how fast or slow an algorithm works** when the input size grows bigger.

It shows **how many steps** an algorithm takes to finish its job for `n` items.

---

## 🔹 What Is Input Size (n)?

In time complexity, **`n` means the size of the input** — like:

- The number of elements in an array
- The number of items in a list
- The number of characters in a string

We use `n` to see **how the algorithm performs** when the input gets bigger.

---

## ❌ Why Not Measure Time in Seconds?

- Different computers have different speeds.
- Different programming languages run code at different speeds.
- Other programs on your computer can slow things down.
- Time in seconds is not the same everywhere.

So, we need a way to measure performance that works **on any machine**.

---

## 📏 How Do We Measure Time Then?

Instead of seconds, we count **how many important steps** the algorithm takes as the input grows.

---

## 📝 What Are Best, Worst, and Average Cases?

- The **Best Case** shows the **minimum number of steps** an algorithm takes (the easiest situation).
- The **Worst Case** shows the **maximum number of steps** it takes (the hardest situation).
- The **Average Case** shows the **typical or average number of steps** it takes in most situations.

---

## 🔤 What Notations Do We Use?

We use special symbols called **notions** to describe these cases:

- **Big-O (O):** Shows the **worst-case** (maximum steps).
- **Big-Omega (Ω):** Shows the **best-case** (minimum steps).
- **Big-Theta (Θ):** Shows the **average case** (typical steps).

---

# 📌 Why Do We Focus on Worst-Case Time Complexity?

In algorithm analysis, we usually consider three cases:

- **Best Case** – The minimum time taken (ideal situation)
- **Average Case** – Expected time taken over random inputs
- **Worst Case** – The maximum time the algorithm can take

In most **interviews** and **real-world systems**, the **worst-case time complexity** is emphasized. Here’s why:

## 🔍 1. Reliability in High-Traffic Scenarios

When building large-scale systems like **Amazon** or **Flipkart**, the platform might handle:

- Millions of users simultaneously
- Millions of product searches, transactions, or database queries
- Spikes in traffic during sales, festivals, or unexpected viral events

If the system is only optimized for the average or best case, it may **crash** or **slow down** significantly when traffic exceeds expectations.

> 👉 Example:
> 
> 
> If a product search algorithm is optimized for the average case (say `O(log n)`), but degrades to `O(n)` in the worst case (due to hash collisions or poor partitioning), the system may become **unresponsive during peak load**.
> 

---

---

## 🛡 2. System Stability and User Experience

Users expect:

- Fast response times
- Smooth browsing and checkout
- No downtime

By planning for the **worst-case**, developers ensure that:

- The system performs well even under high stress
- There’s no lag or delay that could drive users away

---

## 🧪 3. Scalability and Load Testing

During system design and testing, engineers simulate:

- Peak traffic
- Maximum concurrent sessions
- Unusual or edge-case user behavior

These tests verify that the system’s performance **under worst-case complexity** remains stable and doesn’t lead to unacceptable slowdowns.

---

## ⚙ 4. Security and Edge Cases

Attackers may try to **exploit weaknesses** by triggering worst-case behavior (e.g., input that causes hash table collisions). To defend against this:

- Algorithms must **resist performance degradation**
- Data structures should provide **worst-case time guarantees** (e.g., use **balanced trees** instead of simple hash maps)

## 🔍 Common Big O Notations (Worst Case)

This table explains common time complexities in easy words, shows how fast they are, and gives simple real-world examples.

| Time Complexity | What It Means (Simple Words) | Speed 🚦 | Example Use Case |
| --- | --- | --- | --- |
| **O(1)** | Always runs in the same time, no matter the input | ⚡ Fastest | Accessing an array element `arr[0]`, basic math |
| **O(log log n)** | Tiny growth — even faster than log n (rare) | 🚀 Extremely Fast | Some special binary search variants |
| **O(log n)** | Cuts the problem in half each time | ⚡⚡ Very Fast | Binary Search in a sorted array |
| **O(√n)** | Grows slowly, based on square root | ⚡⚡ Very Fast | Prime number check (optimized), Sieve |
| **O(n)** | Time grows directly with input size | ⚡⚡⚡ Fast | Looping through a list, Linear Search |
| **O(n log n)** | A bit slower than linear, divide and conquer | ⚡⚡⚡ Decent | Merge Sort, Quick Sort (average case) |
| **O(n²)** | Time = n × n, double nested loops | 🐢 Slow | Bubble Sort, Insertion Sort |
| **O(n³)** | Time = n × n × n, triple nested loops | 🐢🐢 Slower | 3D Matrix multiplication |
| **O(2ⁿ)** | Doubles every time input increases — grows fast | 🐌 Very Slow | Recursive Fibonacci, Subset problems |
| **O(kⁿ)** | Like 2ⁿ, but with more choices per step (k > 1) | 🐌🐌 Very Slow | Word Break (recursive with choices) |
| **O(n!)** | All possible arrangements — extremely slow | ☠️ Extremely Slow | Permutations, Traveling Salesman Problem |

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0t2pagnck4u8ch5e1itu.png)

## ✅ Speed Ranking (from Best to Worst):

As the input size `n` increases, the algorithm takes more time, especially with higher complexities.

```
O(1) < O(log log n) < O(log n) < O(√n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)

```

## O(1)

**O(1)** refers to **constant time** this means the time taken to perform the operation **does not increase** even if the size of the data increases.

### For example:

- Whether you're accessing the 10th element or the 10,000th element in an array, it still takes the **same amount of time**.

This makes **O(1)** the **fastest and best time complexity** for accessing elements even in the **worst case**.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6oq0xw8adyfqwv1lw5w6.png)

### 🔹 When is O(1) Used?

- O(1) is used when you **access an element using its index**.
    
    (This happens in **arrays**, **strings**, **lists**, and **tuples**.)
    
- If you **know the index**, you can **instantly get the value**.
- Adding or removing an item at the **end** of some data structures.
    
    (Like **stacks**, **queues**, and some **dynamic arrays**.)
    
- Looking up a value using a **key**.
    
    (Used in **hash tables**, **dictionaries**, and **sets**.)
    
- Doing a **simple check or operation** that doesn’t depend on data size.

### 🔹 Example of O(1) Access (Pseudocode)

```
// Given an array 'arr' and an index 'i'
value = arr[i]    // Access element at index i directly

```

### Explanation:

- `arr` is a list or array of elements.
- `i` is the index you want to access.
- Accessing `arr[i]` takes a fixed number of steps no matter how big `arr` is.
- This means accessing any element by its index is an **O(1)** operation.
- The operation does not depend on the size of the array.
- It is the fastest way to get an element if the index is known.
- This kind of access works in many data structures that support direct indexing, like arrays, strings, lists, and tuples.
- **O(1)** access is important because it allows quick retrieval or update without scanning the entire collection.
- This property is widely used in programming for efficiency and speed, especially in time-critical applications.

## O(n)

**O(n)** refers to **linear time complexity**, which means:

> If the size of the input increases, then the number of operations also increases at the same rate.
> 

### 2. Why “Linear”?

**Linear** means the time it takes to run an algorithm grows in a straight line as the input size increases.

### What does this mean?

- If you have more data, it takes more time — but in a simple and steady way.
- For example:
    - Doubling the input size will roughly double the time.
    - Tripling the input size will roughly triple the time.

### Why is it called “linear”?

- When you plot input size against time on a graph, the line goes straight up.
- This shows a direct one-to-one increase: more input means more time.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tlg2b67q1z476c50gc35.png)

### 3. When do we use O(n)?

We use **O(n)** time complexity when we need to check or process **every single item** in a collection one time.

This happens a lot when working with:

- **Arrays:** A list of items stored one after another.
- **Strings:** A sequence of characters.
- **Lists:** Any collection of items you want to go through.

### What kind of tasks use O(n)?

Here are some common examples where you do something to each item in the collection:

- **Printing every item:** Showing all elements on the screen, one by one.
- **Searching for an item:** Looking for a specific value by checking each element from start to finish (without any shortcut).
- **Calculating the sum:** Adding up all the numbers in a list.
- **Finding the maximum value:** Checking each item to find the biggest number.

### Why does this take O(n) time?

Because you have to visit **each item once**, the time it takes grows directly with the size of the input:

- If you have 10 items, you do 10 checks or operations.
- If you have 100 items, you do 100 checks or operations.

### Example:

```cpp

for(int i = 0; i < n; i++) {
    // do something
}

```

### Explanation in Simple Words

- The loop runs from 0 up to (but not including) `n`.
- So, it runs **n times**.
- Each time, it does one task inside the loop.
- This means the total work depends on how big `n` is.

### What is O(n) here?

- **O(n)** means the time it takes grows as the number `n` grows.
- If `n` is 5, the loop runs 5 times.
- If `n` is 100, the loop runs 100 times.
- So, when `n` gets bigger, it takes more time — in a straight line.

## O(log n)

**O(log n)** refers to **logarithmic time complexity**, which means that each time the loop runs, the size of the input is divided by 2.

Instead of checking every item one by one (like in O(n)), the algorithm cuts the problem in half at each step — making it much faster for large inputs.

### Why "logarithmic" time?

The word **logarithmic** comes from **"logarithm"**, which is a way of measuring how many times you can divide something by a number (usually 2) until you get down to 1.

In **O(log n)** algorithms, the input is **cut in half** every time.

For example:

- Start with 16 items
- Step 1: divide → 8
- Step 2: divide → 4
- Step 3: divide → 2
- Step 4: divide → 1

It took 4 steps — so we say the time is **log₂(16) = 4**

This is why it's called **logarithmic time** — the number of steps grows **based on how many times you can divide the input**, not how big the input is.

---

📌 **Logarithmic = Fast!**

Even for big inputs, the number of steps stays small.

- 1,000 items → about 10 steps
- 1,000,000 items → about 20 steps

### How to Apply an O(log n) Approach

To use an **O(log n)** (logarithmic time) approach, follow these steps:

### 1. Make sure the data is sorted or structured

- Many O(log n) algorithms, like binary search, require the input to be **sorted** or organized.
- If data isn’t sorted, you might need to sort it first (which can take O(n log n) time).

### 2. Divide the problem into smaller parts

- At each step, **cut the input size roughly in half**.
- Focus only on the part where the answer can be, ignoring the rest.

### 3. Repeat the process on the smaller part

- Keep dividing the problem in half until you find the solution or the input is empty.
- This repeated halving is what makes the algorithm logarithmic.

### Example: Binary Search

- Start with the whole sorted list.
- Check the middle element.
- If it’s the target, stop.
- If the target is smaller, search the left half.
- If larger, search the right half.
- Repeat until found or no elements left.

## 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w2ba2460huy5se5yj6i7.png)

### Key Points

- O(log n) works best when you can **reduce the search space quickly**.
- This approach is much faster than checking every element.
- It’s widely used in searching and divide-and-conquer algorithms.

## Sample Code: Binary Search in JavaScript

```jsx
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            return mid; // Found the target, return its index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;

const index = binarySearch(sortedArray, target);

if (index !== -1) {
    console.log(`Found ${target} at index ${index}`);
} else {
    console.log(`${target} not found in the array.`);
}

```

### O(n^2) - Nested Loop

**O(N²)** means that the **running time of an algorithm grows quadratically** with the size of the input.

> If the input size is n, the number of operations is approximately n × n = n².
> 

This is known as **quadratic time complexity**.

---

### 🔹 What Does “Quadratic” Mean?

The word **"quadratic"** comes from **"square"**, referring to `n²` (n squared). It means that the number of steps grows with the **square** of the input size.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e37lfys1hjkmrxibq2ns.png)

### Example:

- If `n = 10` → operations ≈ `10 × 10 = 100`
- If `n = 100` → operations ≈ `100 × 100 = 10,000`
- If `n = 1000` → operations ≈ `1,000 × 1,000 = 1,000,000`

---

### 🔹 Formula and Approach

When you have **two loops inside each other** (nested loops), each running `n` times, the total work is:

```
n × n = n²

```

This means if you have 5 items, you do about 25 operations; if you have 10 items, you do about 100 operations.

```cpp

for(int i = 0; i < n; i++) {
    for(int j = 0; j < n; j++) {
        // do something
    }
}

```

- Outer loop runs `n times`.
- Inner loop runs `n times` for each iteration of the outer loop.
- So total operations ≈ `n x n = n²`.

### O(n³) - Triple Nested Loop (3 levels)

When you have three loops nested inside each other, each running `n times`, the total operations grow as:

```
n × n × n = n³

```

### Example (3 nested loops):

```cpp
for(int i = 0; i < n; i++) {
    for(int j = 0; j < n; j++) {
        for(int k = 0; k < n; k++) {
            // some constant time operation
        }
    }
}

```

- The **outer loop** runs **n** times.
- For each time the outer loop runs, the **middle loop** also runs **n** times.
- For each time the middle loop runs, the **inner loop** runs **n** times.
- So, the total number of operations is: `n × n × n = n³`
- Example: If `n = 1000`, then

```cpp
1000 × 1000 × 1000 = 1,000,000,000

```

- This means the algorithm has to do **one billion steps**, which will take a lot of time to run.

## General Case: k Nested Loops — O(n^k) Time Complexity (Polynomial)

When you have **k loops nested one inside another**, each running from 0 up to n-1, the total number of operations your program performs grows very quickly as both **n** and **k** increase.

---

### What Does This Mean?

- **n** is the size of the input (for example, number of items you are processing).
- **k** is how many loops are nested inside each other.

For example, if you have 3 loops inside each other, that means **k = 3**.

---

### How It Works: Step by Step

Imagine the loops like this:

```cpp
for (int i1 = 0; i1 < n; i1++) {       // 1st loop runs n times
    for (int i2 = 0; i2 < n; i2++) {   // 2nd loop runs n times for each i1
        for (int i3 = 0; i3 < n; i3++) { // 3rd loop runs n times for each i2
            // ... and so on, up to k loops ...
            for (int ik = 0; ik < n; ik++) { // kth loop runs n times for each i(k-1)
                // some constant time operation here
            }
        }
    }
}

```

### How k Nested Loops Work

- The **first (outer) loop** runs **n** times.
- For each time the first loop runs, the **second loop** runs **n** times.
- For each time the second loop runs, the **third loop** runs **n** times.
- This continues for **k** loops nested inside each other.

So, the total number of operations is:

```
n * n * n * n (k times) = n^k

```

### # What Does This Growth Look Like?

The number of operations grows very fast as you increase the number of nested loops (`k`) or the input size (`n`).

| Input size (n) | k=1 (O(n)) | k=2 (O(n²)) | k=3 (O(n³)) | k=4 (O(n⁴)) | k=5 (O(n⁵)) |
| --- | --- | --- | --- | --- | --- |
| 10 | 10 | 100 | 1,000 | 10,000 | 100,000 |
| 100 | 100 | 10,000 | 1,000,000 | 100,000,000 | 10,000,000,000 |
| 1,000 | 1,000 | 1,000,000 | 1,000,000,000 | 1e12 | 1e15 |
- Even for small values of `n`, if `k` is large, the total operations can become **extremely large**.
- This makes the algorithm **very slow** and often **impractical** for real-world use.

---

### Why Is This Important?

- Each extra nested loop multiplies the total number of operations by `n`.
- This means an algorithm with many nested loops can quickly become **inefficient**.
- When writing or analyzing algorithms, **minimizing the number of nested loops** is crucial to improve performance.
- Sometimes, you can **optimize** the algorithm to avoid deep nesting or use different data structures and techniques to reduce complexity.

---

### Real-World Examples

- **O(n²)**: Comparing every pair of students in a class to find if they share the same birthday.
- **O(n³)**: Checking all triplets of numbers in a list for a certain condition.
- **O(n^k)**: Problems involving combinations or permutations of `k` items from `n`, done by brute force with `k` nested loops.

---

### Summary Table

| Number of Nested Loops (k) | Total Operations (Approximate) | Time Complexity |
| --- | --- | --- |
| 1 | n | O(n) |
| 2 | n × n = n² | O(n²) |
| 3 | n × n × n = n³ | O(n³) |
| k | n multiplied k times = n^k | O(n^k) |

---

**Remember:** Each extra loop increases complexity exponentially, so always look for ways to reduce nesting or optimize your algorithms!

### O (n log n)

used in Merged Short

### O (2n)

### O (n!)