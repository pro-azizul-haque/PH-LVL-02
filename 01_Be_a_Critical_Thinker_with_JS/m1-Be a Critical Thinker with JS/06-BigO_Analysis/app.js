const generateRandomData = (size) => {
  const dataPool = [
    "sumon",
    "meizan",
    "gaffar",
    "emran",
    "sumon",
    "meizan",
    "gaffar",
    "emran",
  ];
  const arr = [];
  for (let index = 1; index <= size; index++) {
    arr.push(dataPool[Math.floor(Math.random() * dataPool.length)]);
  }
  return arr;
};

const hugeDataSet = generateRandomData(500000);
// console.log(hugeDataSet);

/** Brute Force Algo */
const bfStartTime = performance.now();
const uniqueArr = [];
hugeDataSet.forEach((ele) => {
  if (!uniqueArr.includes(ele)) uniqueArr.push(ele);
});
console.log(uniqueArr);
const bfEndTime = performance.now();
console.log(`bfTime : ${bfEndTime - bfStartTime} ms`);

// set algo
const setStartTime = performance.now();
const setArr = new Set(hugeDataSet);
console.log(setArr);
const setEndTime = performance.now();
console.log(`setTime : ${setEndTime - setStartTime} ms`);
