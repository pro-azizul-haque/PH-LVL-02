interface Product {
  name: "Arnicha" | "Sampo"; // literals type
  price: number;
  brand: "Square"; // literals type
}

const product1: Product = {
  name: "Sampo",
  price: 100,
  brand: "Square",
};

type Status = "Pending" 
type Role = "Admin" | "User"
 
function checkStatus(s:Status) {
  return s
}
checkStatus("Pending")