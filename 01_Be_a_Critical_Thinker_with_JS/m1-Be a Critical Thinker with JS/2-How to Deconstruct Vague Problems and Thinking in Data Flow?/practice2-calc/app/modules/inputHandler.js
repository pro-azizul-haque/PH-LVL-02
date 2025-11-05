export function getDisplay() {
  return document.querySelector("#display");
}
export function getDisplayValue() {
  return getDisplay().value;
}
export function appendToDisplay(input) {
  const display = getDisplay();
  display.value += input;
 
}
export function clearDisplay() {
  const display = getDisplay();
  display.value = "";
}
