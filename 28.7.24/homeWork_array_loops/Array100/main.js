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