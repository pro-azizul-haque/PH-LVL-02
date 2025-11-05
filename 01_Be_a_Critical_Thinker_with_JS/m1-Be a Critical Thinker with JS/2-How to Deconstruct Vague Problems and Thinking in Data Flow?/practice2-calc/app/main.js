import { evaluator } from "./modules/evaluator.js";
import { appendToDisplay, clearDisplay, getDisplayValue } from "./modules/inputHandler.js";
import { renderer } from "./modules/renderer.js";

const nums = document.querySelectorAll(".num");
nums.forEach((element) => {
  element.addEventListener("click", (e) => {
    appendToDisplay(element.textContent);
  });
});

const ops = document.querySelectorAll(".op");
ops.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    appendToDisplay(ele.textContent);
  });
});

document.querySelector("#clear").onclick = () => {
  clearDisplay();
};

document.querySelector("#equals").onclick = () => {
  const expression = getDisplayValue()
  const result = evaluator(expression)
  renderer(result)
};