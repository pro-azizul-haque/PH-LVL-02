const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    stock: 120,
    rating: 4.5,
    description:
      "High-quality over-ear wireless headphones with noise cancellation and 20-hour battery life.",
    brand: "SoundMax",
    image: "https://example.com/images/headphones.jpg",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: 99.99,
    stock: 75,
    rating: 4.2,
    description:
      "Track your heart rate, steps, and sleep with this stylish fitness smartwatch.",
    brand: "FitLife",
    image: "https://example.com/images/watch.jpg",
  },
  {
    id: 3,
    name: "Gaming Mechanical Keyboard",
    category: "Computer Accessories",
    price: 79.5,
    stock: 50,
    rating: 4.8,
    description:
      "RGB backlit mechanical keyboard with customizable keys and ergonomic wrist rest.",
    brand: "KeyPro",
    image: "https://example.com/images/keyboard.jpg",
  },
  {
    id: 4,
    name: "Organic Green Tea Pack",
    category: "Food & Beverages",
    price: 15.0,
    stock: 200,
    rating: 4.6,
    description:
      "100% natural green tea leaves sourced from organic farms for a healthy lifestyle.",
    brand: "NatureLeaf",
    image: "https://example.com/images/greentea.jpg",
  },
  {
    id: 5,
    name: "USB-C Laptop Charger 65W",
    category: "Electronics",
    price: 35.99,
    stock: 90,
    rating: 4.4,
    description:
      "Fast-charging USB-C power adapter compatible with most modern laptops and tablets.",
    brand: "ChargeIt",
    image: "https://example.com/images/charger.jpg",
  },
  {
    id: 6,
    name: "Minimalist Desk Lamp",
    category: "Home & Living",
    price: 45.99,
    stock: 60,
    rating: 4.3,
    description:
      "LED desk lamp with adjustable brightness and a modern minimalist design.",
    brand: "Lightify",
    image: "https://example.com/images/desk-lamp.jpg",
  },
  {
    id: 7,
    name: "USB-C Laptop",
    category: "Electronics",
    price: 35.99,
    stock: 90,
    rating: 4.7,
    description:
      "Fast-charging USB-C power adapter compatible with most modern laptops and tablets.",
    brand: "ChargeIt",
    image: "https://example.com/images/charger.jpg",
  },
];

const table = {}
 products.forEach(ele => {
  table[ele.category] = ele
})
console.log(table);

const lookupTable = products.reduce((acc,ele)=>{
  acc[ele.category] = ele
  return acc
},{})
console.log(lookupTable);
 