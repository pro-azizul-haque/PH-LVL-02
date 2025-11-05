import { getDisplay } from "./inputHandler.js";

export function renderer(result) {
  const display = getDisplay();
  display.value = result;
 
}
