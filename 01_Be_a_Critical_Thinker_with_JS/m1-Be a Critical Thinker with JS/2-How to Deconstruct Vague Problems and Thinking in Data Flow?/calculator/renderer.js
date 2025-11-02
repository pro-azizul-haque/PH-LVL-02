import { getDisplay, clearDisplay } from "./inputHandler.js";

export function renderResult(result) {
    const display = getDisplay();
    display.value = result;
}
