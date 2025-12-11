### Insights of video -> components of Critical thinking
1. Search how many tools available to develop this program
2. Decompose : how to decompse a problem/program ? 
- Just ask some effective question related this program/problem
- Edge case identify
3. Think a big picture then compose them again .


## 2 problem decomposition framework
1. Top-down approach
2. algorithmic thinking

**Decomposition** means breaking a large, complex problem into smaller, easier-to-handle parts (“chunks”).
Each chunk should be:

* **Independent** (can be reasoned about alone)
* **Meaningful** (solves a sub-problem)
* **Composable** (can combine with others to form the full solution)
 
## 🧩 3. Decomposition Process Step-by-Step

### Step 1. Clarify the **problem statement**

* Write what the system *must do*, not how.
* Example: “The user should be able to search products by keyword.”

### Step 2. Identify **major responsibilities**

Ask:

* What are the *main functions* of this system?
* What does it *input* and *output*?

→ Create a list of **modules** or **features**.

Example:

* Authentication
* Dashboard
* Search
* Profile settings

### Step 3. For each module, find **subtasks**

* Break down the module into “atomic” actions.
* Example (Search):

  * Take query input
  * Validate query
  * Send request to API
  * Display results

### Step 4. For each subtask, define **data flow**

Ask:

* What data does it need?
* What does it produce?

Example:

* Input: search term
* Output: array of products

### Step 5. Write **pseudo-code or flow**

Now turn it into step-by-step logic, **without worrying about syntax**.

Example:

```
function searchProducts(query):
    if query is empty:
        return "No input"
    results = database.find(query)
    return display(results)
```

### Step 6. Group similar subtasks → make **functions/classes**

* One function = one responsibility
* If multiple functions share data/state → consider a class/module.

---

## 🧭 4. Chunk Size Rule

When decomposing, always ensure:

* A chunk should be **understandable in 1 glance** (≈ 10–15 lines of code).
* A function should do **1 thing well**.
* If you can’t describe what a function does in one sentence → it’s too big.

---

## 🧠 5. Think Top-Down and Bottom-Up Together

| Approach      | When to use               | Idea                                        |
| ------------- | ------------------------- | ------------------------------------------- |
| **Top-Down**  | Starting new projects     | Break big goals → small tasks               |
| **Bottom-Up** | Optimizing or refactoring | Combine reusable utilities → bigger modules |

**Balanced approach = Mastery.**

---

## 🧩 6. Example: Decomposing a Calculator App

**Goal:** Make a calculator.

**Modules:**

1. Input handler
2. Evaluator
3. UI renderer

**Subtasks:**

* Input handler → read input, sanitize it
* Parser → convert string to tokens
* Evaluator → apply math rules
* Renderer → show output, errors

Each can be a separate file or class → easy to maintain and extend.

---

## 🧱 7. Practical Tools for Decomposition

* **Flowcharts / Diagrams** (draw logic before coding)
* **Pseudo-code**
* **Modular folder structure**
* **Design patterns** (e.g., MVC, Layered Architecture)

---

## ⚡️ 8. Decomposition Mindset Summary

| Principle                 | Description                   |
| ------------------------- | ----------------------------- |
| **Divide & conquer**      | Split big into small.         |
| **Single Responsibility** | Each part solves one problem. |
| **Abstract wisely**       | Hide inner complexity.        |
| **Reuse and combine**     | Build big from small.         |
| **Think in systems**      | How do parts interact?        |

 