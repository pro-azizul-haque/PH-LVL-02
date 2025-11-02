import { appendToDisplay, clearDisplay, getDisplayValue } from "./inputHandler.js";
import { evaluateExpression } from "./evaluator.js";
import { renderResult } from "./renderer.js";

// Number Buttons
document.querySelectorAll(".num").forEach(btn => {
    btn.addEventListener("click", () => appendToDisplay(btn.textContent));
});

// Operator Buttons
document.querySelectorAll(".op").forEach(btn => {
    btn.addEventListener("click", () => appendToDisplay(btn.textContent));
});

// Clear Button
document.getElementById("clear").addEventListener("click", clearDisplay);

// Equals Button
document.getElementById("equals").addEventListener("click", () => {
    const value = getDisplayValue();
    const result = evaluateExpression(value);
    renderResult(result);
});
