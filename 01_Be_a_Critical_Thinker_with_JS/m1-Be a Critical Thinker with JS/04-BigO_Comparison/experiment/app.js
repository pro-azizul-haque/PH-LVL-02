// Helper function: measure execution time
function measureTime(fn, label) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${label.padEnd(10)} -> ${(end - start).toFixed(3)} ms`);
}

// Input size
const n = 100000;  // চাইলে বাড়াতে পারো (যেমন 100000 বা 1000000)

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
