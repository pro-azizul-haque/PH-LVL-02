const survey = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
  "E",
  "B",
  "C",
  "D",
  "D",
  "E",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
];

const grouped = survey.reduce((table, ele) => {
  if (table[ele]) {
    table[ele] += 1;
  } else if (!table[ele]) {
    table[ele] = 1;
  }
  return table;
}, {});
console.log(grouped);
// output
// {A:5,B:3,C:10,D:2,E:5}

const table = {};
survey.forEach((ele) => {
  if (table[ele]) {
    table[ele] += 1;
  } else if (!table[ele]) {
    table[ele] = 1;
  }
});
console.log(table);

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

const revenueTable = sales.reduce((acc, ele) => {
  const { category, price, quantity } = ele;
  if (acc[category]) {
    acc[category].totalRevenue += price * quantity;
    acc[category].itemCount += quantity;
  } else {
    acc[category] = {
      totalRevenue: price * quantity,
      itemCount: quantity,
    };
  }
  return acc;
}, {});

console.log(revenueTable);
//? Output
/* {
  Electronics: {
    totalRevenue: 1330,
    itemCount: 4,
  },
  Books: {
    totalRevenue: 110,
    itemCount: 3,
  },
  Home: {
    totalRevenue: 150,
    itemCount: 1,
  },
};
 */
