//primitive data type: number , string , boolean , null , undefined
// const user: string = "azizul";
// user.substring(0,3)
// console.log(user);

// let num = 10
// num = "abc"
// console.log(num);
 

//** */ non-primitive data types/structure: Array, Object ******

// const users: string[] = ["a","b","c"]
// console.log(users);
// const users: [string,string,string] = ["a","b","as"]
// const users: (string | number)[] = ["a","b","as"]
// console.log(users);
// users.push(12)
// // users.push(true)
// console.log(users);

// object data type setting
const user:{
    readonly name:string,
    age :number,
    isStudent:boolean,
    profession:string,
    gender:"male" // literal type,
    employed?:boolean // optional
} = {
    name:"azizul",
    age:18,
    isStudent:true,
    profession:"developer",
  gender:"male"
}

// user.age = "20"
user.age = 20

console.log(user);