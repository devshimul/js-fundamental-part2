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
/*
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
*/

// for loop, while loop
// for(initialization; condition; update){}
/*
let sum = 0;
for (let i = 1; i <= 20; i++) {
  //   console.log(i);
  sum = sum + i;
}
// console.log(sum);
let added = 0;
for (let i = 0; i <= 100; i = i + 2) {
  added = added + i;
}
// console.log(added);

// While loop
let x = 0;
while (x <= 5) {
  console.log(x);
  x++;
}

let fruits = ["Banana", "Orange", "Mango", "Lichi", "Apple", "Juice", "Lemon"];
// console.log(fruits);
for (let i = 0; i <= fruits.length - 1; i++) {
  //   console.log(fruits[i]);
}
*/
const ages = [12, 58, 65, 12, 84, 78, 54, 23, 45, 47, 22, 11];

const newAgesEven = [];
const newAgesOdd = [];

for (let i = 0; i < ages.length; i++) {
  let singleAge = ages[i];

  if (singleAge % 2 === 0) {
    newAgesEven.push(singleAge);
  } else {
    newAgesOdd.push(singleAge);
  }
}

let total = 0;
for (let x = 0; x < newAgesEven.length; x++) {
  let singleValue = newAgesEven[x];
  total = total + singleValue;
}

// JS Function
// function logger(){}
function caclAge(birthYear) {
  let age = 2024 - birthYear;
  return age;
}
const age1 = caclAge(1985);
const age2 = caclAge(1990);
const age3 = caclAge(1997);
// console.log(age1, age2, age3);

const numbers = [12, 58, 65, 12, 84, 78, 54, 23, 45, 47, 22, 11];
let newAge = [14, 54, 84, 58, 4, 584, 95, 154];

function arrSum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum = sum + number;
  }
  return sum;
}
let total1 = arrSum(numbers);
let total2 = arrSum(newAge);
console.log(total1, total2);
