const fruits = ["apple", "banana", "orange", "grape", "strawberry"];
const isHave = fruits.some((e) => e === "apple");
// console.log(isHave);

const userRole = ["user", "viewer"];
const adminRole = ["admin", "editor", "viewer"];

const isUserEditor = userRole.some((ele) => {
  return adminRole.includes(ele);
});

// console.log(isUserEditor);

// const arr = Array.from(userRole,(v,indx)=> {
//      return v + indx
// })
// arr.push("admin")
// console.log(arr);

// const arr = Array.from({ length: 10 }, (ele, indx) => indx);
// console.log(arr);

const range = (start, stop, step) =>
  Array.from({ length: stop - start }, (ele,indx) => indx + 1 * step);
console.log(range(1, 11, 3));
