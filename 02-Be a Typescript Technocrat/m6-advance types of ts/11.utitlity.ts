interface User {
  id: number;
  name: string;
  email: string;
}

const updateUser: Partial<User> = {
  name: "Azizul", // can update only a subset of properties
};

interface Product {
  id: number;
  brand: string;
  price: number;
  industry: string;
}

type ProductSummary = Pick<Product, "brand" | "industry">;
type ProductWithoutPrice = Omit<Product, "price">;

type ReadOnlyProduct = Readonly<Product>