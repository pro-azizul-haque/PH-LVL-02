// const set = new Set([1,2,1,3,4,5,2]) // unique collection
// const array = new Array(1,2,1,3,4,5,2) // not-unique collection

// console.log(set);
// console.log(array);

// console.log(set[0]); // undefined not work indexing
// console.log(array[0]); // 1

// set.add(55)
// array.push(55)
// console.log(set);
// console.log(array);

// console.log(set.has(3)); // O(1)
// console.log(array.indexOf(3)); // O(n)

// // convertable both

// const setToArray = new Array(...set)
// const arrayToSet = new Set(array)
// console.log(setToArray);
// console.log(arrayToSet);

// // both are iterable
// array.forEach(ele => console.log(ele))
// set.forEach(ele => console.log(ele))

// practice problems

// 1. Find unique elements from an array
const uniques = new Set([1, 2, 2, 3, 3, 4]);
// console.log(uniques);

// 2️⃣ Check if two arrays share any common value
const A = [1, 5, 7];
const B = [3, 7, 9];

const a = new Set(A);
let found   = false
for (const element of B) {
    if(a.has(element)){
        found = true
        break
    }
}
console.log(found);

//3️⃣ Count how many unique values are in an array
const a1 = [5, 5, 5, 10, 20, 20];
const s1 = new Set(a1);
console.log(a1.length - s1.size);

// 4️⃣ Remove duplicates from a string
const str1 = "banana";
const strSet = new Set(str1);
console.log(strSet);

//5️⃣ Check if all characters in a string are unique
function checkStr(str) {
  return str.length === new Set(str).size ? true : false;
}
console.log(checkStr("abcdea"));
console.log(checkStr("world"));

// 🔟 Find first duplicate element
const input = [2, 1, 3, 5, 3, 2]; // output : 3
const visited = new Set();
for (const ele of input) {
  if (!visited.has(ele)) {
    visited.add(ele);
  } else {
    console.log(ele);
    break;
  }
}
