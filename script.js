// Control statement
// 1. Conditional control statement
// 2. Loop control statement

let num1 = prompt("Enter first number : ");
num1 = parseInt(num1);

let num2 = prompt("Enter second number : ");
num2 = parseInt(num2);

let num3 = prompt("Enter second number : ");
num3 = parseInt(num3);
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
console.log(num1, num2, num3);
if (num1 > num2 && num1 > num3) {
  console.log("Large number 1");
} else if (num2 > num3 && num2 > num1) {
  console.log("Large number 2");
} else if (num3 > num1 && num3 > num2) {
  console.log("Large number 3");
} else {
  console.log("Invalid Number!");
}
