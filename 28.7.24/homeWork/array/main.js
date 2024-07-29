// 1

let fruits = ["ananas", "pomela", "apple"];

// 2

fruits.push("banana");
console.log(fruits);

// 3

fruits.pop();
console.log(fruits);

// 4

let num = [1, 2, 3, 4, 5];

console.log(num[2]);

// 5
// fruits.incdexOf[1 = "kiwi"];
fruits[1] = "kiwi";
console.log(fruits);

// 6

const colors = [];
colors.push("red", "green", "blue");
console.log(colors);

// 7

colors.shift();
console.log(colors);

// 8

colors.unshift("yellow");
console.log(colors);

// 9

num = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i <= num.length; i++) {
  console.log((sum += i));
}

// 10

console.log(colors.indexOf("yellow"));

// 11

// let numTwo = [5, 0, 342, 5232342, 4];

// for (let i = 0; i < numTwo.length; i++) {
//   if (numTwo[i] > numTwo[i])
//     console.log(numTwo[i]);
// }

// //🤔
