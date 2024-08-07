// // 1

let fruits = ["ananas", "pomela", "apple"];

// // 2

// fruits.push("banana");
// console.log(fruits);

// // 3

// fruits.pop();
// console.log(fruits);

// // 4

let num = [1, 2, 3, 4, 5];

// console.log(num[2]);

// // 5
// // fruits.incdexOf[1 = "kiwi"];
// fruits[1] = "kiwi";
// console.log(fruits);

// // 6

const colors = [];
colors.push("red", "green", "blue", "purple");
console.log(colors);

// // 7

// colors.shift();
// console.log(colors);

// // 8

// colors.unshift("yellow");
// console.log(colors);

// // 9

// num = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i <= num.length; i++) {
//   console.log((sum += i));
// }

// // 10

// console.log(colors.indexOf("yellow"));

// // 11

// // let numTwo = [5, 0, 342, 5232342, 4];

// // for (let i = 0; i < numTwo.length; i++) {
// //   if (numTwo[i] > numTwo[i]) console.log(numTwo[i]);
// // }

// // 🤔

let numTwo = [];
for (let i = 0; i < 5; i++) {
  let randomNum = Math.floor(Math.random() * 100);
  numTwo.push(randomNum);

  console.log(numTwo);
}

let max = 0;

for (let i = 0; i < numTwo.length; i++) {
  if (max < numTwo[i]) {
    max = numTwo[i];
  }
}
console.log(max);

// // 12;
// fruitsTwo = fruits.slice(1, 3);
// console.log(fruitsTwo);

// // 13

// let arrayNumbers = [10, 343, 343, 434, 5, 100];
// console.log((arrayEvenNumbers = arrayNumbers.filter(ifEven)));
// function ifEven(modulus) {
//   return modulus % 2 === 0;
// }

// 14

// let colorString = colors.join();
// console.log(colorString);

// 15

let arrayNumberOne = [2, 8, 29, 664];
let arrayNumbertwo = [3, 92, 40, 3];

let arrayConnectedNumber = arrayNumberOne.concat(arrayNumbertwo);
console.log(arrayConnectedNumber);

// 16

fruits.reverse();
console.log(fruits);

// 17

// let arrayNames = ["yosy", "dani", "shlomi"];
// let arrayWalcomeNames = arrayNames.map(hallo);
// function hallo(greet) {
//   return "hallo, " + greet;
// }
// console.log(arrayWalcomeNames);

// // 18

// let arrayNumbersPositive = [21, 43, 0];

// let checkPositive = arrayNumbersPositive.every(ifPositive);
// function ifPositive(positive) {
//   return positive > 0;
// }
// console.log(checkPositive);

// 19

// arrayNumbers = [1, 10, 5, 4, 5, 345, 5, 1];
// let biggerThenTen = arrayNumbers.find(check);
// function check(number) {
//   return number > 10;
// }
// console.log(biggerThenTen);

// 20

// let checkBanana = fruits.some(ifBanana);
// function ifBanana(banana) {
//   return banana === "banana";
// }
// console.log(checkBanana);

// 21
// 🥴

//  22

// let arraySquer = [];

// for (let i = 0; i < 10; i++) {
//   let squer = arraySquer.push(i);
//   console.log(squer * squer);
// }

// // 23

// let arrayWords = ["long", "short", "medium"];
// console.log((arrayMoreThenFive = arrayWords.filter(ifMoreThenFive)));
// function ifMoreThenFive(five) {
//   const ifLongEnough = "check";
//   return five > ifLongEnough.length();
// }
// // at least I tried..🙄

// // 24

let includesPurple = colors.includes("purple");
console.log(includesPurple);

// 25
