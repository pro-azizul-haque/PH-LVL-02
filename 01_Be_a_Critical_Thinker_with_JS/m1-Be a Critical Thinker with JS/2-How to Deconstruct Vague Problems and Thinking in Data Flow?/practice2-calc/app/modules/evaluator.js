export function evaluator(expression) {
  try {
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
      return "Error";
    }
    return eval(expression);
  } catch (error) {
    return error.message;
  }
}
