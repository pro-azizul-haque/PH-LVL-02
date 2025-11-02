export function evaluateExpression(expression) {
    try {
        // Safe check: only allow numbers and operators
        if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
            return "Error";
        }
        return eval(expression);
    } catch {
        return "Error";
    }
}
