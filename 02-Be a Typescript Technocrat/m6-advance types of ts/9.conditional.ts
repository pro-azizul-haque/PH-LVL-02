type A = { name: string; age: number };
type A2 = { name: string; age: number };
// type C = A extends A2 ? true : false
type B = { brand: string; price: number; name: string };
type C = A extends B ? true : false;
type D = true;

const user: D = true;
type E = A extends D ? ["a", "0"] : string;


// conditional type mean logic-based type set  
type O = A extends A2 ? B : C 