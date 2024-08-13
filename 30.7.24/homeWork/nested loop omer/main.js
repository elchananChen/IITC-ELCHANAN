// https://docs.google.com/document/d/1yB6ErFdyjXWh7INfikVXyVpZ5sTM-htDnYth5FXK0sM/edit?usp=sharing
// 1
// 2
// 3
// עשינו בכיתה

// 4
// function howManyVowels(value) {
//   let vowelsCount = 0;
//   let vowels = "aeiouAEIOU";
//   for (i = 0; i < value.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (value[i] === vowels[j]) {
//         vowelsCount++;
//       } // else consonentCount = i + 1 - vowelsCount;
//     }
//   }
//   // let consonentCount = value.length - vowelsCount;

//   return `in this word there is ${vowelsCount} vowes and  ${consonentCount} consonent!`;
// }
// console.log(howManyVowels("hello tester"));

// 5

// function reversValue(value) {
//   let revers = "";
//   for (let i = 0; i < value.length; i++) {
//     revers = value[i] + revers;
//     // console.log(revers);
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
//   [3, 4],""
//   [5, 6],
// ];

// console.log(sumTwoD(twoDNum));

// 8

// function toNumberOfletter(str) {
//   let letters = {};
//   for (let i = 0; i < str.length; i++) {
//     if (!letters[str[i]]) {
//       // האם האות נבדקה כבר (אם לא - נכנס ללואה שתשווה ותוסיף 1 . אם כן לא נתייחס אליה  )
//       for (let j = 0; j < str.length; j++) {
//         if (str[i] === str[j]) {
//           // האם האות שווה לאות הנסרקת אם כן נכנס לתנאי השני
//           if (!letters[str[i]]) {
//             //אם האות לא קיימת
//             letters[str[i]] = 1; //  אם לא צור אותה ותשווה לאחד
//           } else letters[str[i]]++; // אם קיים תוסיף אחד לערך
//         }
//       }
//     }
//   }
//   return letters;
// }
// console.log(
//   toNumberOfletter(`Create an object called book with properties: title (string), author (string), and pages (number).
// Access and log the title and author of the book.
// Increase the number of pages by 50 and log the updated object.
// Hint: To increase the number of pages, you'll need to access the current value and add to it.

// Learn more: MDN Web Docs - Object basics

// Exercise 5: Animal
// Create an object called animal with properties: species (string), sound (string), and isWild (boolean).
// Access and log the species and sound of the animal.
// Change the isWild property and log the updated object.
// Hint: Boolean values in JavaScript are true or false (without quotes).

// Learn more: JavaScript.info - Object properties configuration

// Exercise 6: Smartphone
// Create an object called smartphone with properties: brand (string), model (string), and storageGB (number).
// Access and log the brand and storageGB of the smartphone.
// Update the model of the smartphone and log the updated object.
// Hint: When logging multiple properties, you can use string concatenation or template literals.

// Learn more: MDN Web Docs - Template literals`)
// );

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

// let numbers = [1, 2, 3, 4];
// let numbersTwo = [3, 4, 5, 6];

// let newArrayNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 0; j < numbersTwo.length; j++) {
//     if (numbers[i] === numbersTwo[j]) {
//       newArrayNumbers.push(numbers[i]);
//     }
//   }
// }
// console.log(newArrayNumbers);

// 13

// function findPrimeNums(startRange, endRange) {
//   if (startRange < endRange) {
//     // to avoide endles loop
//     let freakNumbers = [];
//     let primeNumbers = [];
//     for (let i = startRange; i <= endRange; i++) {
//       // to check all range
//       if (i > 1 || i < 1) {
//         // check if not 0 or 1
//         for (let j = 2; j < i; j++) {
//           // to avoid division to himselfe and to 1
//           if (i % j === 0) {
//             freakNumbers.push(i);
//             break;
//           }
//         }
//       }
//     }
//     for (let i = 0; i < freakNumbers.length; i++) {
//       //  try to get the numbers not in the freak array
//       //  by check if there a number missing before them and push him to prime array
//       if (freakNumbers[i] - freakNumbers[i - 1] !== 1) {
//         primeNumbers.push(freakNumbers[i] - 1);
//       }
//     }
//     for (let i = 2; i < primeNumbers[0]; i++) {
//       //the first number  in the freak array allweys
//       // be division so  need to check him by himsekf
//       if (primeNumbers[0] % i === 0) {
//         primeNumbers.shift();
//       }
//     }
//     console.log(primeNumbers);
//   }
// }
// console.log(findPrimeNums(1, 1000));

// //////////////////////////// 🤣🤣🤣🤣🤣🤣🤣🤣🥴🥴🥴🥴↕↕↕

function findPrimeNums(startRange, endRange) {
  if (startRange < endRange) {
    // to avoide endles loop
    let primeNumbers = [];
    for (let i = startRange; i <= endRange; i++) {
      // to check all range
      if (i > 1 || i < 1) {
        // check if not 0 or 1
        for (let j = 2; j < i; j++) {
          // to avoid division to himselfe and to 1
          if (i % j === 0) {
            break;
          } else if ((j = i - 1)) primeNumbers.push(i);
        }
      }
    }
    return primeNumbers;
  }
}
console.log(findPrimeNums(10, 20));

///////////////////////////////////////////////////
