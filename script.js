// Control statement
// 1. Conditional control statement
// 2. Loop control statement

// let num1 = prompt("Enter first number : ");
// num1 = parseInt(num1);

// let num2 = prompt("Enter second number : ");
// num2 = parseInt(num2);

// let num3 = prompt("Enter second number : ");
// num3 = parseInt(num3);
// let num1 = 100;
// let num2 = 200;
// let num3 = 1000;
// if (num1 > num2) {
//   console.log("Largest number 1");
// } else {
//   console.log("Largest number 2");
// }

// if (num1 > num2) {
//   console.log("Number 1 large");
// } else if (num1 > num3) {
//   console.log("Number 1 large");
// } else if (num2 > num1) {
//   console.log("Number 2 Large");
// } else if (num2 > num3) {
//   console.log("Number 2 Large");
// } else {
//   console.log("Number 3 Large");
// }
// console.log(num1, num2, num3);
// if (num1 > num2 && num1 > num3) {
//   console.log("Large number 1");
// } else if (num2 > num3 && num2 > num1) {
//   console.log("Large number 2");
// } else if (num3 > num1 && num3 > num2) {
//   console.log("Large number 3");
// } else {
//   console.log("Invalid Number!");
// }

// Array
// let name = "Jolil";
// let friends = ["Jony", "Kamal", "Jamal", "Kholil"];
// console.log(friends);
// // let friend1 = "Jony";
// // let friend2 = "Kamal";
// // let friend3 = "Jamal";
// // let friend4 = "Kholil";
// const fruits = ["Banana", "Orange", "Mango", "Lichi", "Apple"];
// console.log(Array.isArray(name));
// const ages = [12, 58, 65, 12, 84, 78, 54, 23, 45, 47, 22, 11];

// console.log(ages[ages.length - 1]);
// console.log(ages.indexOf(54));
// const birthYear = 1990;
// const shimul = ["Shimul", 2024 - birthYear, true];
// console.log(2024 - birthYear);

let fruits = ["Banana", "Orange", "Mango", "Lichi", "Apple"];
fruits[2] = "Papaya";
// fruits = ["Tomato", "Potato", "Onion"];
fruits.push("Tomato");
fruits.push("Potato");
fruits.push("Onion");

console.log(fruits);
fruits.pop();
fruits.pop();
fruits.pop();
console.log(fruits);

const numbers = [100, 45, 78, 7, 25, 36];
console.log(numbers);
numbers.unshift(200);
console.log(numbers);

numbers.shift();
console.log(numbers);
