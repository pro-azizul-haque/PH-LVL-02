// core concepts & syntax
type User = {
  [K in "age" | "height"]: number  
};
type Admin = {
  readonly [K in keyof User]: number;
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

// Readonly<> != ReadOnly  (O != o)
interface Product {
  id: number;
  brand: string;
  price: number;
  industry: string;
}
type ReadOnlyProduct = ReadOnly<Product>; //

const product: ReadOnlyProduct = {
  id: 100,
  brand: "lenovo",
  price: 30,
  industry: "lenovo",
};

// product.brand = "apple"
