// 1

const fruits = [];

// 2

const numbers = [8, 6, 334, 2367, 345, 1277, 2, 3, 4];

// 3

const colors = ["red", "green", "blue"];

// 4

const mixed = [1, "baba", "a" === "b"];

console.log(mixed);

// 5

const seasons = ["spring", "winter", "summer", "autumn"];

// 6

console.log(numbers.length);

// 7

const emptyCheck = [];

if (emptyCheck.length === 0) {
  console.log(true);
}

// 8

const dynamic = ["a", "b", "c", 4, 5];
console.log(dynamic.length);

// 9

dynamic.push(["dghsfd", "sdfsd"]);
console.log(dynamic.length);

// 10

let d = dynamic.pop();
console.log(dynamic);
console.log(d);

// 11

console.log(colors[0]);

// 12

console.log(seasons[seasons.length - 1]);

// 13

console.log(numbers[Math.floor(numbers.length / 4)]);

// 14

console.log(fruits[82]);

// 15

console.log(`the second color is ${colors[1]}`);

// 16

fruits[0] = "apple";

// 17

numbers[numbers.length - 1] = 10;

// 18

numbers[2] = numbers[2] * 2;
console.log(numbers);

// 19

colors.forEach((color, index, arr) => {
  arr[index] = color.toUpperCase();
});
console.log(colors);

// 20
const last = seasons[0];
seasons[0] = seasons[seasons.length - 1];
seasons[seasons.length - 1] = last;

console.log(seasons);

// 21

fruits.push("orange");

// 22
console.log(fruits);

numbers.pop();
console.log(numbers);

// 23

colors.push("yellow", "gray", "black");
console.log(colors);

// 24

pushNumbers = [];
pushNumbers.push(1, 2, 3, 4, 5);
console.log(pushNumbers);

// 25

const names = ["dada", "baba", "yaga", "mama"];
const length = names.length;
for (let i = 0; i < length; i++) {
  const removed = names.pop();
  console.log(removed);
}
console.log(names);

// 26

fruits.unshift("mango");
console.log(fruits);

// 27

numbers.shift();

// 28

numbers.unshift(1, 3, 4, 5);
console.log(numbers);

// 29

const numberstTwo = [];

for (let i = 1; i <= 5; i++) {
  numberstTwo.unshift(i);
}
console.log(numberstTwo);

// 30

let i = numbers.length;
while (i > 0) {
  const removed = numbers.shift();
  console.log(removed);
  i--;
}
console.log(numbers);

// 31

console.log(colors.indexOf("yellow"));
console.log(colors);

// 32

console.log(seasons.indexOf("winter"));

// 33+34

for (let i = 0; i < colors.length; i++) {
  colors[i] = colors[i].toLowerCase();
}
colors.push("red");
console.log(colors.lastIndexOf("red"));
console.log(colors.indexOf("red"));

// 35
function isExists(color) {
  return colors.indexOf(color) !== -1;
}
console.log(isExists("brown"));

// 36

console.log(fruits.includes("apple"));

// 37

numbers[0] = 1;
console.log(numbers);
console.log(numbers.includes(1));

// 38

colors[3] = "blue";
console.log(colors.includes("blue", Math.floor(colors.length / 2)));
console.log(colors);

// 39

function isIncludes(array, value) {
  return array.includes(value);
}
console.log(isIncludes(colors, "red"));

// 40

if (colors.includes("red") === true) {
  console.log(`red exist`);
} else console.log("red not exist");

// 41
numbers.push(123, 532, 532, 321, 532, 777);
const num = numbers.slice(0, 3);
console.log(num);
console.log(numbers);

// 42
const colo = colors.slice(-3);
console.log(colo);

// 43

let newSeason = seasons.slice(1, 4);
// console.log(seasons);

// 44

newSeason = seasons.slice(0);

// 45
seasons[4] = "banana";
newSeason = seasons.slice(Math.floor(seasons.length / 2));
// console.log(newSeason);

// 46

fruits[4] = "banana";
console.log(fruits);
fruits.splice(Math.ceil(fruits.length / 2, fruits.length / 2 + 1));
// console.log(fruits);

// 47

// console.log(numbers);
numbers.splice(2, 1, 34, 90);
// console.log(numbers);

// 48

// colors.splice(1, 0, "wite", "red", "blue");
// console.log(colors);

// 49

// colors.splice(0, 1, "wite", "red");

// 50

// colors.splice(0);
// console.log(colors);

// 51

const fruitsColors = fruits.concat(colors);
// console.log(fruitsColors);

// 52

const fruitsColorsNumbers = fruits.concat(colors, numbers);
// console.log(fruitsColorsNumbers);

// 53

// const fruitsColors = fruits.concat(colors);
// console.log(fruitsColors);

// 54

const doubelFruits = fruits.concat(fruits);
// console.log(doubelFruits);

// 55

const moreFruits = fruits.concat("guiava", "ananas");
// console.log(moreFruits);

// // 56

// stringFruits = fruits.join("");
// // console.log(stringFruits);

// // 57

// stringNumbers = numbers.join("-");
// // console.log(stringNumbers);

// // 58

// function joiner(array, separator) {
//   return array.join(separator);
// }

// // console.log(joiner(fruits, " - "));

// // 59

stringFruits = fruits.join("");
console.log(stringFruits);

// 60
stringFruits = fruits.join(" ");

const reverserArray = stringFruits.split(" ");

reverserArray.reverse();
console.log(reverserArray);
reversString = reverserArray.join(" ");
console.log(reversString);

// 61

seasons.reverse();
console.log(seasons);

// 62

function isPalindrom(string) {
  const toRevers = string.split("");
  toRevers.reverse();
  reversString = toRevers.join("");
  console.log(reversString);

  if (reversString === string) {
    return `${string} is palindrom!!`;
  } else return `${string} is not a palindrom😝`;
}
const string = isPalindrom("natan");
// console.log(string);

// 63

// numbers.reverse();
// const squar = numbers.map((x) => x * 2);
// // console.log(squar);

// // 64

// let some = "something";
// const someArray = some.split("");
// someArray.reverse();
// const reversString = someArray.join("");
// console.log(reversString);

// // 65

// const arrayToRevers = ["r", "e", "v", "e"];
// const reverseArray = [];
// for (let i = 0; i < arrayToRevers.length; i++) {
//   reverseArray.unshift(arrayToRevers[i]);
// }
// console.log(reverseArray);

// 66

fruits.sort();
// console.log(fruits);

// 67

numbers.sort((a, b) => a - b);

// 68

numbers.sort((a, b) => b - a);
// console.log(numbers);

// 69

const wordArray = ["word", "hello", "you"];
wordArray.sort((a, b) => b.length - a.length);
// console.log(wordArray);

// 70

const numByThree = [34, 3, 2, 5, 1];
numByThree.sort((a, b) => (a % 3) - (b % 3));
// console.log(numByThree);

// 71

// colors.forEach((color) => console.log(color));

// 72

numbers.forEach((num, i, array) => {
  array[i] = num * 2;
});
// console.log(numbers);

// 73 🤔

// 74

numbers.forEach((num, i) => {
  if (num === 180) {
    console.log(i);
  }
});
// console.log(numbers);

// 75

let counter = 0;
numbers.forEach((num, i) => {
  if (num > 180) {
    counter++;
  }
});
// console.log(counter);

// 76

const fruitsLength = fruits.map((fruit) => fruit.length);
// console.log(fruitsLength);
// console.log(fruits);

// 77

const squereNumbers = numbers.map((number) => number * number);
// console.log(squereNumbers);

// 78

const isEven = numbers.map((num) => num % 2 === 0);
// console.log(isEven);

// 79

names.push("baba", "yosi", "david");
const greetingNames = names.map((name) => `${name} wellcome!! `);
console.log(greetingNames);

// 80

const temperaturs = [33, 25, 0, 13];
const temperatursFahrenheit = temperaturs.map((num) => (num * 9) / 5 + 32);
console.log(temperatursFahrenheit);
