// https://docs.google.com/document/d/1yB6ErFdyjXWh7INfikVXyVpZ5sTM-htDnYth5FXK0sM/edit?usp=sharing
// 1
// 2
// 3
// עשינו בכיתה

// 4
// function howManyVowels(value) {
//   let consonentCount = 0;
//   let vowelsCount = 0;
//   let vowels = "aeiouAEIOU";
//   for (i = 0; i < value.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (value[i] === vowels[j]) {
//         vowelsCount++;
//       } else consonentCount = i + 1 - vowelsCount;
//     }
//   }

//   return `in this word there is ${vowelsCount} vowes and  ${consonentCount} consonent!`;
// }
// console.log(howManyVowels("hello tester"));

// 5

// function reversValue(value) {
//   let revers = "";
//   for (let i = 0; i < value.length; i++) {
//     revers = value[i] + revers;
//     console.log(revers);
//   }
//   return revers;
// }
// console.log(reversValue("amiad"));

// 6

// function pyramid() {
//   for (i = 2; i <= 6; i++) {
//     let stick = "";
//     for (let j = 1; j < i; j++) {
//       stick += `  ${j}`;
//     }
//     console.log(stick);
//   }
// }
// console.log(pyramid());

// 7

// function sumTwoD(twoDArray) {
//   let sum = 0;
//   for (let i = 0; i < twoDArray.length; i++) {
//     let innerArray = twoDArray[i];

//     for (j = 0; j < innerArray.length; j++) {
//       let valueInnerArray = innerArray[j];
//       sum = sum + valueInnerArray;
//     }
//   }
//   return sum;
// }
// let twoDNum = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// console.log(sumTwoD(twoDNum));

// 9

// function twoArrayToOne(nestedArray) {
//   let newArray = [];
//   for (let i = 0; i < nestedArray.length; i++) {
//     let currentPlace = nestedArray[i];

//     for (let j = 0; j < currentPlace.length; j++) {
//       let isolatednumber = currentPlace[j];

//       newArray.push(isolatednumber);
//     }
//   }
//   console.log(newArray);
// }

// let twoDNum = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(twoArrayToOne(twoDNum));

// 😎

// 10
