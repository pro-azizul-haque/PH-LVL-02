// <params>  means Generic

const products: Array<string> = ["chanchur", "keyboard", "mouse"];

// Use Generics with interface
interface Box<T> {
  item: T;
}
const box2: Box<string> = { item: "dustbin" };

interface Box2 extends Box<20> {
  boxname: string;
}

const box: Box2 = {
  item: 20,
  boxname: "abc",
};

// Use Generics with function
// generic with general funcion
function wrap<T>(value: T): T {
  // T mean type
  return value;
}
const wrapedName = wrap<string>("azizul");
const wrapedName2 = wrap("azizul");

// generic with arrow funcion
const wrapArr = <T>(a: T, b: T): T => {
  return a;
};
wrapArr<string>("a", "b");

// generic with type
type Product<T, X> = {
  brand: T;
  price: X;
  description: string;
};

const product: Product<string, number> = {
  brand: "lenovo",
  price: 10000,
  description: "this is an laptop us",
};

type User<T> = {
  name: string;
  age: number;
  isMarried: T;
};

const user: User<string> = {
  name: "a",
  age: 18,
  isMarried: "No",
};
const user2: User<boolean> = {
  name: "ab",
  age: 18,
  isMarried: true,
};
