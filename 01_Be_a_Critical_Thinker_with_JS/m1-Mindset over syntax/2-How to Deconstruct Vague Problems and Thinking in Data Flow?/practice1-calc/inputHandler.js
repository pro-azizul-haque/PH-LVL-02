export const display = document.querySelector("#display");

export function appendToDisplay(value) {
  display.value += value;
}

export function clearDisplay() {
  display.value = "";
}

export function getDisplayValue() {
  return display.value;
}
