5; // keyof মানে holo একটা object type এর সব keys এর union।
/**
 * Summary (একদম short re-memorizable)
keyof → object-এর সব key-এর union

Used for:
Safe property access
Constraints
Mapped types
Utility types
Strong generic APIs
Formula মনে রাখো:
keyof T = "prop1" | "prop2" | ...
 */

type Productx = {
  name: string;
  value: string;
  brand: string;
  price: number;
};

type ProductKeys = keyof Productx;

const productx: ProductKeys = "price";
// console.log(productx);

type User = {
  name: string;
  id: number;
};

// function getProps(obj: User, key: "name"| "id") { // in this case the key is hard coded union type
//   return obj[key];
// }
// function getProps(obj: User, key: keyof User) { // problem is its not generalized
//   return obj[key];
// }
function getProps<T>(obj: T, key: keyof T) {
  // problem is its not generalized
  return obj[key];
}

const user = {
  name: "azizul",
  id: 100,
};

console.log(getProps(user, "id"));

const product1 = {
  brand: "enovo",
  price: 10000,
  specs: {
    cpu: "8core",
    ram: "8GiB",
  },
};

console.log(getProps(product1, "specs"));

type Producty = {
  name: string;
  brand: string;
  price: number;
};

// type KeysOfProducty = keyof Producty;
const producty: Producty = {
  name: "laptop",
  brand: "enovo",
  price: 10000,
};
function getValueOfProducty(key: keyof Producty) {
  return producty[key];
}

console.log(getValueOfProducty("brand"));
console.log(getValueOfProducty("price"));