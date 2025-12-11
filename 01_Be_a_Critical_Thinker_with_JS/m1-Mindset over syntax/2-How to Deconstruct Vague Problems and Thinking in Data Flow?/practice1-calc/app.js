import { evaluatorExpression } from "./evaluator.js";
import { appendToDisplay, clearDisplay, display, getDisplayValue } from "./inputHandler.js";
import { renderer } from "./renderer.js";

document.querySelectorAll(".num").forEach((ele) => {
  ele.addEventListener("click", (e) => {
    appendToDisplay(ele.textContent);
  });
});
document.querySelectorAll(".op").forEach((ele) => {
  ele.addEventListener("click", (e) => {
    appendToDisplay(ele.textContent);
  });
});

document.querySelector("#clear").onclick = () => {
  clearDisplay();
};

document.querySelector("#equals").onclick = () => {
    const expression = getDisplayValue()
  const result = evaluatorExpression(expression)
  renderer(result)
};

