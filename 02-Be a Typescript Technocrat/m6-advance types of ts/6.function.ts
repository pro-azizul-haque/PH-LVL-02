let add: (a: number, b: number) => number;
add = (a, b) => a + b;
add(10, 10);

let calc: (n1: number, n2: number, ops: string) => number;

calc = (n1, n2, ops) => {
  if (/"+-*"/.test(ops)) {
    return eval(`${n1}${ops}${n2}`);
  }
};

console.log(calc(10, 10, "+"));

// function signature
type Calc = (n1: number, n2: number, ops: string) => number;

const calc2: Calc = (a, b) => a + b;
console.log(calc2(1, 1, ""));

// more clarity sadaron function er jonno type alias bananu jaina , karon holo "type shape" kebol variable er jonnoy kaj kore jemon

function calc3(a: number, b: number): number {
  return a + b;
}
console.log(calc3(1, 1));

const calc4 = (a: number, b: number): string => "" + a + b;
console.log(calc4(10, 10));
