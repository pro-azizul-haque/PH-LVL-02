const products = [
  {
    id: 101,
    name: "Wireless Mouse",
    category: "Electronics",
    brand: "Logitech",
    price: 1200,
    stock: 35,
    rating: 4.5,
  },
  {
    id: 102,
    name: "Mechanical Keyboard",
    category: "Electronics",
    brand: "Redragon",
    price: 4500,
    stock: 12,
    rating: 4.7,
  },
  {
    id: 103,
    name: "USB-C Charger",
    category: "Electronics",
    brand: "Anker",
    price: 1800,
    stock: 50,
    rating: 4.6,
  },
  {
    id: 104,
    name: "Water Bottle",
    category: "Lifestyle",
    brand: "Milton",
    price: 650,
    stock: 80,
    rating: 4.2,
  },
  {
    id: 105,
    name: "Notebook A5",
    category: "Stationery",
    brand: "Classmate",
    price: 120,
    stock: 200,
    rating: 4.0,
  },
  {
    id: 106,
    name: "Pen Blue",
    category: "Stationery",
    brand: "Matador",
    price: 10,
    stock: 1000,
    rating: 3.9,
  },
  {
    id: 107,
    name: "Running Shoes",
    category: "Fashion",
    brand: "Nike",
    price: 8500,
    stock: 20,
    rating: 4.8,
  },
  {
    id: 108,
    name: "T-Shirt",
    category: "Fashion",
    brand: "H&M",
    price: 1500,
    stock: 60,
    rating: 4.3,
  },
  {
    id: 109,
    name: "Backpack",
    category: "Accessories",
    brand: "Wildcraft",
    price: 3200,
    stock: 25,
    rating: 4.4,
  },
  {
    id: 110,
    name: "Headphones",
    category: "Electronics",
    brand: "Sony",
    price: 6200,
    stock: 15,
    rating: 4.6,
  },
];

function getLookupTable() {
  const getById = {};
  const getByCategory = {};
  const getByBrand = {};
  for (const product of products) {
    const { id, brand, category } = product;
    getById[id] = product;
    if (!getByCategory[category]) getByCategory[category] = [];
    getByCategory[category].push(product);
    if (!getByBrand[brand]) getByBrand[brand] = [];
    getByBrand[brand].push(product);
  }

  return { getById, getByCategory, getByBrand };
}

const { getById, getByCategory, getByBrand } = getLookupTable();
function findProductsByRating(rating) {
  return products.filter((product) => product.rating >= rating);
}
function isInStock(id) {
  if (!getById[id]) return "not found 404";
  return getById[id].stock > 0 ? true : false;
}

function search(query) {
  query = query.toLowerCase();
  return products.filter((product) =>
    product.name.toLowerCase().includes(query),
  );
}

// console.log(getById[101]);
// console.log(getByBrand["Sony"]);
// console.log(getByCategory["Electronics"]);
// console.log(findProductsByRating(4.5));
// console.log(isInStock(1012));
console.log(search("wire"));