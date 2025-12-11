Example: Decomposing a Calculator App

Goal: Make a calculator.

Modules:
1. Input handler 

2. Evaluator

3. UI renderer

Subtasks inside each module :
Input handler → read input, sanitize it

Evaluator → apply math rules

Renderer → show output, errors

- Each can be a separate file or class → easy to maintain and extend.

calculator/
│
├── index.html      // UI
├── style.css       // Styling
├── inputHandler.js // Handles input
├── parser.js       // Tokenizes input (optional)
├── evaluator.js    // Calculates result
├── renderer.js     // Updates UI
└── main.js         // App initialization
