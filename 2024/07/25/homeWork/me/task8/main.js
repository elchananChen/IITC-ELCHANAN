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

// function getAbsoluteValue(num) {
//   if (num < 0) return num * -1;
//   else return num;
// }
// console.log(getAbsoluteValue(-3));

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

function isPositive(num) {
  if (num > 0) return true;
  else return false;
}
console.log(isPositive(6));

// 12

function getFirstChar(str) {
  return str[1];
}
console.log(getFirstChar("drtffd"));

// 13

function areaOfRectangle(height, width) {
  return height * width;
}

// 15

function logType(input) {
  console.log(typeof input);
}
logType(3);

// 16

function invertBoolean(boolean) {
  return !boolean;
}
console.log(invertBoolean(2 === 3));

// 17

function concatenateStrings(str, strTwo) {
  return str + strTwo;
}

// 19

function greetWithDefault(name, def) {
  if (name === undefined) {
    return `welcome ${name} you are beautiful`;
  } else return (def = "guest");
}

// 20

function isLongstring(str) {
  if (str.length > 10) {
    return true;
  } else return false;
}
console.log(isLongstring("dlf342342352sd"));
