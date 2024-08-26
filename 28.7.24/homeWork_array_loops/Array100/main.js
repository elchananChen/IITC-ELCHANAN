// // // 1

// // const fruits = [];

// // // 2

// // const numbers = [8, 6, 334, 2367, 345, 1277, 2, 3, 4];

// // // 3

// // const colors = ["red", "green", "blue"];

// // // 4

// // const mixed = [1, "baba", "a" === "b"];

// // console.log(mixed);

// // // 5

// // const seasons = ["spring", "winter", "summer", "autumn"];

// // // 6

// // console.log(numbers.length);

// // // 7

// // const emptyCheck = [];

// // if (emptyCheck.length === 0) {
// //   console.log(true);
// // }

// // // 8

// // const dynamic = ["a", "b", "c", 4, 5];
// // console.log(dynamic.length);

// // // 9

// // dynamic.push(["dghsfd", "sdfsd"]);
// // console.log(dynamic.length);

// // // 10

// // let d = dynamic.pop();
// // console.log(dynamic);
// // console.log(d);

// // // 11

// // console.log(colors[0]);

// // // 12

// // console.log(seasons[seasons.length - 1]);

// // // 13

// // console.log(numbers[Math.floor(numbers.length / 4)]);

// // // 14

// // console.log(fruits[82]);

// // // 15

// // console.log(`the second color is ${colors[1]}`);

// // // 16

// // fruits[0] = "apple";

// // // 17

// // numbers[numbers.length - 1] = 10;

// // // 18

// // numbers[2] = numbers[2] * 2;
// // console.log(numbers);

// // // 19

// // colors.forEach((color, index, arr) => {
// //   arr[index] = color.toUpperCase();
// // });
// // console.log(colors);

// // // 20
// // const last = seasons[0];
// // seasons[0] = seasons[seasons.length - 1];
// // seasons[seasons.length - 1] = last;

// // console.log(seasons);

// // // 21

// // fruits.push("orange");

// // // 22
// // console.log(fruits);

// // numbers.pop();
// // console.log(numbers);

// // // 23

// // colors.push("yellow", "gray", "black");
// // console.log(colors);

// // // 24

// // pushNumbers = [];
// // pushNumbers.push(1, 2, 3, 4, 5);
// // console.log(pushNumbers);

// // // 25

// // const names = ["dada", "baba", "yaga", "mama"];
// // const length = names.length;
// // for (let i = 0; i < length; i++) {
// //   const removed = names.pop();
// //   console.log(removed);
// // }
// // console.log(names);

// // // 26

// // fruits.unshift("mango");
// // console.log(fruits);

// // // 27

// // numbers.shift();

// // // 28

// // numbers.unshift(1, 3, 4, 5);
// // console.log(numbers);

// // // 29

// // const numberstTwo = [];

// // for (let i = 1; i <= 5; i++) {
// //   numberstTwo.unshift(i);
// // }
// // console.log(numberstTwo);

// // // 30

// // let i = numbers.length;
// // while (i > 0) {
// //   const removed = numbers.shift();
// //   console.log(removed);
// //   i--;
// // }
// // console.log(numbers);

// // // 31

// // console.log(colors.indexOf("yellow"));
// // console.log(colors);

// // // 32

// // console.log(seasons.indexOf("winter"));

// // // 33+34

// // for (let i = 0; i < colors.length; i++) {
// //   colors[i] = colors[i].toLowerCase();
// // }
// // colors.push("red");
// // console.log(colors.lastIndexOf("red"));
// // console.log(colors.indexOf("red"));

// // // 35
// // function isExists(color) {
// //   return colors.indexOf(color) !== -1;
// // }
// // console.log(isExists("brown"));

// // // 36

// // console.log(fruits.includes("apple"));

// // // 37

// // numbers[0] = 1;
// // console.log(numbers);
// // console.log(numbers.includes(1));

// // // 38

// // colors[3] = "blue";
// // console.log(colors.includes("blue", Math.floor(colors.length / 2)));
// // console.log(colors);

// // // 39

// // function isIncludes(array, value) {
// //   return array.includes(value);
// // }
// // console.log(isIncludes(colors, "red"));

// // // 40

// // if (colors.includes("red") === true) {
// //   console.log(`red exist`);
// // } else console.log("red not exist");

// // // 41
// // numbers.push(123, 532, 532, 321, 532, 777);
// // const num = numbers.slice(0, 3);
// // console.log(num);
// // console.log(numbers);

// // // 42
// // const colo = colors.slice(-3);
// // console.log(colo);

// // // 43

// // let newSeason = seasons.slice(1, 4);
// // // console.log(seasons);

// // // 44

// // newSeason = seasons.slice(0);

// // // 45
// // seasons[4] = "banana";
// // newSeason = seasons.slice(Math.floor(seasons.length / 2));
// // // console.log(newSeason);

// // // 46

// // fruits[4] = "banana";
// // console.log(fruits);
// // fruits.splice(Math.ceil(fruits.length / 2, fruits.length / 2 + 1));
// // // console.log(fruits);

// // // 47

// // // console.log(numbers);
// // numbers.splice(2, 1, 34, 90);
// // // console.log(numbers);

// // // 48

// // // colors.splice(1, 0, "wite", "red", "blue");
// // // console.log(colors);

// // // 49

// // // colors.splice(0, 1, "wite", "red");

// // // 50

// // // colors.splice(0);
// // // console.log(colors);

// // // 51

// // const fruitsColors = fruits.concat(colors);
// // // console.log(fruitsColors);

// // // 52

// // const fruitsColorsNumbers = fruits.concat(colors, numbers);
// // // console.log(fruitsColorsNumbers);

// // // 53

// // // const fruitsColors = fruits.concat(colors);
// // // console.log(fruitsColors);

// // // 54

// // const doubelFruits = fruits.concat(fruits);
// // // console.log(doubelFruits);

// // // 55

// // const moreFruits = fruits.concat("guiava", "ananas");
// // // console.log(moreFruits);

// // // // 56

// // // stringFruits = fruits.join("");
// // // // console.log(stringFruits);

// // // // 57

// // // stringNumbers = numbers.join("-");
// // // // console.log(stringNumbers);

// // // // 58

// // // function joiner(array, separator) {
// // //   return array.join(separator);
// // // }

// // // // console.log(joiner(fruits, " - "));

// // // // 59

// // stringFruits = fruits.join("");
// // console.log(stringFruits);

// // // 60
// // stringFruits = fruits.join(" ");

// // const reverserArray = stringFruits.split(" ");

// // reverserArray.reverse();
// // console.log(reverserArray);
// // reversString = reverserArray.join(" ");
// // console.log(reversString);

// // // 61

// // seasons.reverse();
// // console.log(seasons);

// // // 62

// // function isPalindrom(string) {
// //   const toRevers = string.split("");
// //   toRevers.reverse();
// //   reversString = toRevers.join("");
// //   console.log(reversString);

// //   if (reversString === string) {
// //     return `${string} is palindrom!!`;
// //   } else return `${string} is not a palindrom😝`;
// // }
// // const string = isPalindrom("natan");
// // // console.log(string);

// // // 63

// // // numbers.reverse();
// // // const squar = numbers.map((x) => x * 2);
// // // // console.log(squar);

// // // // 64

// // // let some = "something";
// // // const someArray = some.split("");
// // // someArray.reverse();
// // // const reversString = someArray.join("");
// // // console.log(reversString);

// // // // 65

// // // const arrayToRevers = ["r", "e", "v", "e"];
// // // const reverseArray = [];
// // // for (let i = 0; i < arrayToRevers.length; i++) {
// // //   reverseArray.unshift(arrayToRevers[i]);
// // // }
// // // console.log(reverseArray);

// // // 66

// // fruits.sort();
// // // console.log(fruits);

// // // 67

// // numbers.sort((a, b) => a - b);

// // // 68

// // numbers.sort((a, b) => b - a);
// // // console.log(numbers);

// // // 69

// // const wordArray = ["word", "hello", "you"];
// // wordArray.sort((a, b) => b.length - a.length);
// // // console.log(wordArray);

// // // 70

// // const numByThree = [34, 3, 2, 5, 1];
// // numByThree.sort((a, b) => (a % 3) - (b % 3));
// // // console.log(numByThree);

// // // 71

// // // colors.forEach((color) => console.log(color));

// // // 72

// // numbers.forEach((num, i, array) => {
// //   array[i] = num * 2;
// // });
// // // console.log(numbers);

// // // 73 🤔

// // // 74

// // numbers.forEach((num, i) => {
// //   if (num === 180) {
// //     console.log(i);
// //   }
// // });
// // // console.log(numbers);

// // // 75

// // let counter = 0;
// // numbers.forEach((num, i) => {
// //   if (num > 180) {
// //     counter++;
// //   }
// // });
// // // console.log(counter);

// // // 76

// // const fruitsLength = fruits.map((fruit) => fruit.length);
// // // console.log(fruitsLength);
// // // console.log(fruits);

// // // 77

// // const squereNumbers = numbers.map((number) => number * number);
// // // console.log(squereNumbers);

// // // 78

// // const isEven = numbers.map((num) => num % 2 === 0);
// // // console.log(isEven);

// // // 79

// // names.push("baba", "yosi", "david");
// // const greetingNames = names.map((name) => `${name} wellcome!! `);
// // console.log(greetingNames);

// // // 80

// // const temperaturs = [33, 25, 0, 13];
// // const temperatursFahrenheit = temperaturs.map((num) => (num * 9) / 5 + 32);
// // // console.log(temperatursFahrenheit);

// // // 81
// // numbers.unshift(3);
// // const evenNumbers = numbers.filter((num) => num % 2 === 0);
// // // console.log(evenNumbers);

// // // 82

// // const longFruits = fruits.filter((fruit) => fruit.length >= 5);
// // // console.log(longFruits);

// // // 83 🤔
// // //----- answer for the question ---
// // console.log(numbers);
// // function uniqueValues(arr) {
// //   const uniqeValues = arr.filter((value, index, self) => {
// //     return self.indexOf(value) === self.lastIndexOf(value);
// //   });
// //   return uniqeValues;
// // }
// // // console.log(uniqueValues(numbers));

// // ////------- answer for the way i understood the question -----------------

// // function uniqueValues(arr) {
// //   const uniqeValues = arr.filter((value, index, self) => {
// //     return self.indexOf(value) === self.lastIndexOf(value);
// //   });
// //   arr.forEach((value, i, self) => {
// //     if (uniqeValues.includes(self[i]) === false) {
// //       uniqeValues.push(self[i]);
// //     }
// //   });
// //   return uniqeValues;
// // }
// // // console.log(uniqueValues(numbers));

// // // 84

// // const falsyAndTruthy = ["", 0, true, false, 93];

// // const onlyTruthy = falsyAndTruthy.filter((value) => value);
// // // console.log(onlyTrusy);

// // // 85

// // // function includSubsting(arr, substring) {
// // //   const includSubsting = arr.filter((value, i) => {
// // //     if (value.toString().includes(substring) === true) {
// // //       return true;
// // //     }
// // //   });
// // //   return includSubsting;
// // // }

// // // console.log(includSubsting(colors, 3));

// // // 86

// // const firstGreterThenThree = numbers.find((check) => check > 3);
// // console.log(firstGreterThenThree);

// // // 87

// // function findFirstStartWhith(arr, starter) {
// //   const result = arr.findLastIndex((check) => {
// //     return check.toString().startsWith(starter);
// //   });

// //   return result;
// // }

// // console.log(findFirstStartWhith(numbers, 1));
// // // console.log(numbers);

// // // 88

// // numbers.shift(0);
// // numbers.push(7);

// // function findFirstPrimeNumber(arr) {
// //   const primeNumber = arr.find((currentNum) => {
// //     for (let i = 2; i < currentNum; i++) {
// //       if (currentNum % i === 0) {
// //         return false;
// //       } //else if (i === currentNum - 1) {
// //       // return true;
// //       //}
// //       return true;
// //     }
// //   });
// //   return primeNumber;
// // }

// // console.log(findFirstPrimeNumber(numbers));
// // console.log(numbers);

// // // 89

// // const specificSeasonIn = seasons.findIndex((season) => season === "winter");
// // // console.log(specificSeasonIn);
// // // console.log(seasons);

// // // 90

// // const specificSeason = seasons.find((season) => season === "winter");
// // // console.log(specificSeason);

// // // 91

// // const haveEvenNum = numbers.some((check) => check % 2 === 0);
// // // console.log(haveEvenNum);

// // // 92

// // const areAllLongElements = fruits.every((name) => name.length > 3);
// // // console.log(areAllLongElements);

// // // 93

// // const haveNegativeNum = numbers.some((check) => check < 0);
// // console.log(haveNegativeNum);

// // // 94

// // function areAllElementUniqe(arr) {
// //   //"indexOf" check from the beginning what the index of "check" . and if its' not
// //   //equle to "i" thet mean "check" show up twice because i is the corrent index.
// //   const result = arr.every((check, i, arr) => i === arr.indexOf(check));
// //   return result;
// // }
// // // console.log(areAllElementUniqe(numbers));

// // // 95

// // // 96

// // const sumNum = numbers.reduce((total, r, y, a) => {
// //   return total + r;
// // });
// // console.log(sumNum);

// // // 97

// // // const longestWordInFruits = fruits.reduce((accumulator, current) => {
// // //   if (accumulator.length < current.length) {
// // //     accumulator = current;
// // //   }
// // //   return accumulator;
// // // });
// // // console.log(longestWordInFruits);

// // // console.log(fruits);

// // // 98

// // // const occurrencesInArray = numbers.reduce((accu, cur) => {
// // //   if (!accu[cur]) {
// // //     accu[cur] = 1;
// // //   } else {
// // //     accu[cur]++;
// // //   }
// // //   return accu;
// // // }, {});
// // // console.log(occurrencesInArray);

// // // 99

const nestedArray = [
  [1, 9],
  [3, 5],
];
function flateNstedArray(arr) {
  const flatArr = arr.reduce((acuurency, current, i, arr) => {
    return acuurency.concat(arr[i]);
  }, []);
  return flatArr;
}
console.log(flateNstedArray(nestedArray));

// // 😃😃😃😃😃😃

// 100

const objectsArray = [
  { name: "banan", age: 22 },
  { name: "ganan", age: 33 },
];

function groupObjectsArrayByProrerty(arr, property) {
  const returnArry = arr.reduce((total, current) => {
    return total.concat(current[property]);
  }, []);
  return returnArry;
}

console.log(groupObjectsArrayByProrerty(objectsArray, "age"));

// console.log(objectsArray[0].age);
