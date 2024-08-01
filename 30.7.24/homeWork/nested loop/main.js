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

function twoArrayToOne(nestedArray) {
  let newArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    let currentPlace = nestedArray[i];

    for (let j = 0; j < currentPlace.length; j++) {
      let isolatednumber = currentPlace[j];

      newArray.push(isolatednumber);
    }
  }
  console.log(newArray);
}

let twoDNum = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(twoArrayToOne(twoDNum));

// 10

// function metrixTransposer(nestedArray) {
//   let newArray = [];
//   let miniArrayOne = [];
//   let miniArrayTwo = [];
//   let miniArrayThree = [];

//   for (let i = 0; i < nestedArray.length; i++) {
//     let currentPlace = nestedArray[i];
//     for (let j = 0; j < currentPlace.length; j++) {
//       let isolatedNumber = currentPlace[j];
//       if (j === 0) {
//         miniArrayOne.push(isolatedNumber);
//       } else if (j === 1) {
//         miniArrayTwo.push(isolatedNumber);
//       } else if (j === 2) {
//         miniArrayThree.push(isolatedNumber);
//       }
//     }
//   }
//   newArray.push(miniArrayOne);
//   newArray.push(miniArrayTwo);
//   newArray.push(miniArrayThree);
//   return newArray;
// }

// let twoDNum = [
//   [1, 2, 6],
//   [4, 5, 6],
// ];
// console.log(metrixTransposer(twoDNum));

//  //😎

// 11

// let string = "safsart";
// for (let i = string.length; i >= 0; i--) {
//   console.log(string[i]);
// }

// let revers = "safsart";
// for (let j = 0; j < revers.length; j++) {
//   console.log(revers[j]);
// }

// function ifPalindrom(string) {
//   let straightArray = [];
//   let reversArray = [];
//   for (let i = 0; i < string.length; i++) {
//     const letter = string[i];
//     straightArray.push(letter);
//   }
//   for (let j = string.length; j > 0; j--) {
//     const reversLetter = string[j];
//     reversArray.push(reversLetter);
//   }

//   if (straightArray === reversArray) {
//     return `${string} is palindrom`;
//   } else return `${string} is not a palindrom`;
// }
// console.log(ifPalindrom("true"));

// let straightArray = [1, 2, 3];
// let reversArray = [1, 2, 3];

// console.log(straightArray === reversArray);

// 11

// fitusi

// function ispalindrom(str) {
//   for (let i=0; i < str.length;i++ ){
//       //  console.log([i]);
//     for (let j = 0; j < 1;j++ ){
//       if (str[i] !== str[str.length - 1 - i] ){return false}
//     }
//   }
//   return true
// }
// ispalindrom("natan")

// 12
