// interface holo  type alias er jat vai but it can merge automatically , extends others properties

interface Product {
  id: number;
  brand: string;
  price: number;
  industry: string;
}

// we can redefine Product interface but its merge with previous
interface Product {
  productionDate: number;
  expireDate: number;
}
interface Chocolate {
  color: string;
  flavor: string;
}
// we can extends pros from another
interface Product extends Chocolate {}

const product1: Product = {
  id: 10,
  brand: "shera",
  price: 100,
  industry: "chemical",
  productionDate: 1765774225318,
  expireDate: 1765776625318,
  color: "black",
  flavor: "sweet",
};

console.log(product1);
