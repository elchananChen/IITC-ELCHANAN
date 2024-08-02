// 1

// function greet() {
//   console.log("hello world");
// }
// greet();

// 2

function square(num) {
  return num * num;
}

console.log(square(3));

// 3

function isEven(num) {
  if (num % 2 === 0) return "even";
  else return "odd";
}
console.log(isEven(5));

// 4

function fullName(firstName, lastName) {
  return `hello ${firstName}  ${lastName}`;
}
console.log(fullName("baba", "yaga"));

// 5

function sumTwo(num, numTwo) {
  return num + numTwo;
}
console.log(sumTwo(4, 9));

// 8

function getAbsoluteValue(num) {
  if (num < 0) return num * -1;
  else return num;
}
console.log(getAbsoluteValue(-3));

// 9

function calculateAverge(num, numTwo) {
  return (num + numTwo) / 2;
}
console.log(calculateAverge(4, 1));

// 10

function convertToUppetCase(str) {
  return str.toUpperCase();
}
console.log(convertToUppetCase("rjdlkjf"));

// 11
