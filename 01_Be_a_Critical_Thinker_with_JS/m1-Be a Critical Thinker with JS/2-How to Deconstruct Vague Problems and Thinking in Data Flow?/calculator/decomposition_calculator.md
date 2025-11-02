Example: Decomposing a Calculator App

Goal: Make a calculator.

Modules:

Input handler

Parser

Evaluator

UI renderer

Subtasks:

Input handler → read input, sanitize it

Parser → convert string to tokens

Evaluator → apply math rules

Renderer → show output, errors

Each can be a separate file or class → easy to maintain and extend.

calculator/
│
├── index.html      // UI
├── style.css       // Styling
├── inputHandler.js // Handles input
├── parser.js       // Tokenizes input (optional)
├── evaluator.js    // Calculates result
├── renderer.js     // Updates UI
└── main.js         // App initialization
