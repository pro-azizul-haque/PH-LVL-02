
## ⚙️ মূল ধারণা:
👉 Time complexity বলে দেয়, **ইনপুট সাইজ (n)** বাড়লে অ্যালগরিদমের **কাজের সময় কত দ্রুত বাড়ে।**
কিছু অ্যালগরিদম ছোট n-এ ঠিকঠাক চলে, কিন্তু বড় n এ গেলে ভয়ানক slow হয়ে যায়।

---

## 📊 Time Complexity Comparison Table

| Time Complexity | নাম          | Growth Rate (বৃদ্ধির গতি)       | Example                          |
| --------------- | ------------ | ------------------------------- | -------------------------------- |
| **O(1)**        | Constant     | ইনপুট যতই বড় হোক, সময় একই       | Array index access, hash lookup  |
| **O(log n)**    | Logarithmic  | ইনপুট দ্বিগুণ হলে সময় অল্প বাড়ে | Binary Search                    |
| **O(n)**        | Linear       | সময় ইনপুটের সমানুপাতিক          | Simple loop, linear search       |
| **O(n log n)**  | Linearithmic | n ও log n দুইয়ের গুণফল          | Merge Sort, Quick Sort           |
| **O(n²)**       | Quadratic    | Nested loops                    | Bubble Sort, Insertion Sort      |
| **O(n³)**       | Cubic        | Triple nested loops             | 3D matrix operations             |
| **O(2ⁿ)**       | Exponential  | ইনপুট বাড়লে সময় দ্বিগুণ হয়ে যায় | Recursive Fibonacci              |
| **O(n!)**       | Factorial    | ভয়ানক দ্রুত বৃদ্ধি              | Permutations, Traveling Salesman |

---

## 🧠 বাস্তব ব্যাখ্যা:

ধরো তুমি ১টা প্রোগ্রাম লিখছ যেটা ১ মিলিয়ন (1,000,000) ডেটা নিয়ে কাজ করবে।

| Complexity | কাজ শেষ করতে সময় (ধরা যাক 1 operation = 1µs) |
| ---------- | -------------------------------------------- |
| O(1)       | ~1 µs                                        |
| O(log n)   | ~20 µs                                       |
| O(n)       | ~1 second                                    |
| O(n log n) | ~20 seconds                                  |
| O(n²)      | ~11 days 😱                                  |
| O(2ⁿ)      | > অনেক বছর 💀                                |
| O(n!)      | অসীম সময়ের মতো 🤯                            |

---

## 📉 Visual Growth (Conceptual Graph)

```
│
│                 O(2ⁿ)
│              /
│             /
│            /
│           /
│         O(n²)
│        /
│       /
│     O(n log n)
│    /
│   /
│ O(n)
│/
│ O(log n)
│________________________ n (Input Size)
```

---

## 🧭 সহজ মনে রাখার নিয়ম:

| Speed Rank    | Complexity | Mnemonic                |
| ------------- | ---------- | ----------------------- |
| 🥇 Fastest    | O(1)       | “Same every time”       |
| 🥈            | O(log n)   | “Divide and conquer”    |
| 🥉            | O(n)       | “Step by step”          |
| ⚖️ Medium     | O(n log n) | “Smart sorting”         |
| 🐢 Slow       | O(n²)      | “Nested loops”          |
| 🧊 Very Slow  | O(2ⁿ)      | “Exponential explosion” |
| 💀 Impossible | O(n!)      | “Too many combinations” |

---

### 🧩 **JavaScript Code: Time Complexity Experiment**

```js
// Helper function: measure execution time
function measureTime(fn, label) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${label.padEnd(10)} -> ${(end - start).toFixed(3)} ms`);
}

// Input size
const n = 10000;  // চাইলে বাড়াতে পারো (যেমন 100000 বা 1000000)

// O(1): Constant time
function constant() {
  const x = 5 + 10; // just one operation
}

// O(log n): Logarithmic time (Binary-like loop)
function logarithmic() {
  let i = n;
  while (i > 1) i = Math.floor(i / 2);
}

// O(n): Linear time
function linear() {
  for (let i = 0; i < n; i++) {}
}

// O(n log n): Linearithmic (simulate merge-sort style)
function nLogN() {
  for (let i = 1; i < n; i *= 2) {
    for (let j = 0; j < n; j++) {}
  }
}

// O(n²): Quadratic
function quadratic() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {}
  }
}

// O(2ⁿ): Exponential (very small n only!)
function exponential() {
  function recurse(k) {
    if (k === 0) return 1;
    return recurse(k - 1) + recurse(k - 1);
  }
  recurse(20); // সতর্ক: n বেশি দিলে ব্রাউজার হ্যাং করবে!
}

// 🧠 Measure all
console.log(`Input size: ${n}`);
measureTime(constant, "O(1)");
measureTime(logarithmic, "O(log n)");
measureTime(linear, "O(n)");
measureTime(nLogN, "O(n log n)");
measureTime(quadratic, "O(n²)");
measureTime(exponential, "O(2ⁿ)");
```

---