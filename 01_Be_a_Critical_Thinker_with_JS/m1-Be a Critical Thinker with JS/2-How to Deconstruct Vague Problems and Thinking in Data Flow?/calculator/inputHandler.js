export function getDisplay() {
    return document.getElementById("display");
}

export function appendToDisplay(value) {
    const display = getDisplay();
    display.value += value;
}

export function clearDisplay() {
    getDisplay().value = "";
}

export function getDisplayValue() {
    return getDisplay().value;
}
