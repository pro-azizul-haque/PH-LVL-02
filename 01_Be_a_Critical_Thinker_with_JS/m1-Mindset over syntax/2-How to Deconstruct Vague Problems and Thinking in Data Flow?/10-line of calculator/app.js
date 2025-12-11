const input = document.querySelector("#input");
const calculate = document.querySelector("button");
calculate.onclick = () => {
  // Safe check: only allow numbers and operators
  if (!/^[0-9+\-*/().\s]+$/.test(input.value)) {
    return (input.value = "Error");
  }
  const result = eval(input.value);
  input.value = result;
};
