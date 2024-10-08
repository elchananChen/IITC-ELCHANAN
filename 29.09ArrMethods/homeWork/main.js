// https://ta-at-iitc.vercel.app/

//1
// const num = [1, 2, 3, 4, 5];
// const ol = document.querySelector("ol");
// num.forEach((num) => {
//   const li = document.createElement("li");
// li.textContent = num;
//   ol.appendChild(li);
// });

// 2

// const num = [1, 2, 3, 4, 5];
// const ol = document.querySelector("ol");

// num.forEach((num) => {
//   const li = document.createElement("li");

//   li.textContent = num * 2;
//   ol.appendChild(li);
// });

// 3

// const num = [1, 2, 3, 4, 5];
// const ol = document.querySelector("ol");

// const multipelNums = [];
// num.forEach((num) => {
//   const multipelNum = num ** 2;

//   multipelNums.push(multipelNum);

//   const li = document.createElement("li");
//   li.textContent = multipelNum;
//   ol.appendChild(li);
// });
// console.log(multipelNums);

// 4

// const num = [1, 2, 3, 4, 5];
// const ol = document.querySelector("ol");
// let sum = 0;

// const multipelNums = [];
// num.forEach((num) => {
//   sum += num;
//   const li = document.createElement("li");
//   li.textContent = sum;
//   ol.appendChild(li);
// });

// 5

// const greet = ["hello", "world", "!"];
// const ol = document.querySelector("ol");

// let fullGreet = "";

// greet.forEach((word) => {
//   fullGreet += `${word} `;
// });
// const li = document.createElement("li");
// li.textContent = fullGreet;
// ol.appendChild(li);

// 6

// const nums = [1, 2, 3, 4, 5];
// const ol = document.querySelector("ol");

// const newNums = nums.map((num) => {
//   const li = document.createElement("li");
//   li.textContent = num * 2;
//   ol.appendChild(li);
//   return num * 2;
// });
// console.log(newNums);

// 7

// const fruits = ["תפוח", "בננה", "דובדבן"];
// const ol = document.querySelector("ol");
// const newFruits = fruits.map((fruit) => {
//   const li = document.createElement("li");
//   li.textContent = fruit.length;
//   ol.appendChild(li);
//   return fruit.length;
// });
// console.log(newFruits);

// 8

// const nums = [1, 4, 9, 16, 25];
// const ol = document.querySelector("ol");

// const newNums = nums.map((num) => {
//   const li = document.createElement("li");
//   li.textContent = num ** 0.5;
//   ol.appendChild(li);
//   return Math.sqrt(num);
// });
// console.log(newNums);

// 9

// const greet = ["hello", "world"];
// const ol = document.querySelector("ol");

// const upperGreet = greet.map((word) => {
//   const li = document.createElement("li");
//   li.textContent = word.toUpperCase();
//   ol.appendChild(li);
//   return word.toUpperCase();
// });

// 10

// const bool = [true, false, true];
// const ol = document.querySelector("ol");

// const opesed = bool.map((el) => {
//   el = !el;
//   const li = document.createElement("li");
//   li.textContent = el;
//   ol.appendChild(li);
//   return el;
// });

// 11

// const nums = [1, 2, 3, 4, 5, 6];
// const ol = document.querySelector("ol");

// const evenNums = nums.filter((num) => {
//   let evenNum = 0;
//   if (num % 2 === 0) {
//     evenNum = num;
//     console.log(even);
//   }

//   const li = document.createElement("li");
//   li.textContent = el;
//   ol.appendChild(li);
//   return num % 2 === 0;
// });

// 12

// const fruits = ["תפוח", "בננה", "דובדבן", "תמר", "אלדרברי"];
// const ol = document.querySelector("ol");
// const newFruits = fruits.filter((fruit) => {
//   if (fruit.length >= 5) {
//     const li = document.createElement("li");
//     li.textContent = fruit;
//     ol.appendChild(li);
//     return fruit.length >= 5;
//   }
// });
// console.log(newFruits);

// 13

// const nums = [1, 56, 3, 34, 5, 6];
// const ol = document.querySelector("ol");

// const greatersNum = nums.filter((num) => {
//   if (num > 10) {
//     console.log(num);
//     const li = document.createElement("li");
//     li.textContent = num;
//     ol.appendChild(li);
//   }
//   return num > 10;
// });
// console.log(greatersNum);

// 14

// const fruits = ["תפוח", "בננה", "דובדבן", "תמר", "אלדרברי"];
// const ol = document.querySelector("ol");
// const newFruits = fruits.filter((fruit) => {
//   if (fruit[0] === "ת") {
//     const li = document.createElement("li");
//     li.textContent = fruit;
//     ol.appendChild(li);
//     return fruit[0] === "ת";
//   }
// });
// console.log(newFruits);

// 15

// const nums = [1, 56, 3, 34, 5, 6];
// const ol = document.querySelector("ol");

// const evenIndex = nums.filter((num, i) => {
//   if (i % 2 === 0) {
//     const li = document.createElement("li");
//     li.textContent = num;
//     ol.appendChild(li);
//   }
//   return i % 2 === 0;
// });
// console.log(evenIndex);

// 16

// const nums = [1, 56, 3, 34, 5, 6];
// const ol = document.querySelector("ol");

// const total = nums.reduce((acc, num) => {
//   return acc + num;
// }, 0);
// const li = document.createElement("li");
// li.textContent = total;
// ol.appendChild(li);

// 17

// const nums = [1, 56, 3, 34, 5, 6];
// const ol = document.querySelector("ol");

// const total = nums.reduce((acc, num) => {
//   return acc * num;
// });
// const li = document.createElement("li");
// li.textContent = total;
// ol.appendChild(li);

// 18

// const nums = [1, 3, 34, 5, 6, 56];
// const ol = document.querySelector("ol");

// const total = nums.reduce((acc, num) => {
//   if (num > acc) {
//     acc = num;
//   }

//   return acc;
// }, nums[0]);
// console.log(total);

// const li = document.createElement("li");
// li.textContent = total;
// ol.appendChild(li);

// 19

// const greet = ["שלום", " ", "עולם", "!"];
// const ol = document.querySelector("ol");

// const total = greet.reduce((acc, word) => {
//   return acc + word;
// });
// const li = document.createElement("li");
// li.textContent = total;
// ol.appendChild(li);

// 20

// const nums = [1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4];
// const ol = document.querySelector("ol");

// numOnArr = [];
// let sum = 1;
// const lastNum = nums.reduce((acc, num, i, arr) => {
//   // console.log(acc);

//   if (num === acc) {
//     sum++;
//     // console.log(acc);
//   } else {
//     console.log(sum);
//     numOnArr.push(sum);
//     sum = 1;
//     acc = num;
//   }
//   return acc;
// }, nums[0]);

// console.log(numOnArr);

// const li = document.createElement("li");
// li.textContent = numOnArr;
// ol.appendChild(li);

// 21

// const nums = [1, 2, 4, 5, 8];
// const ol = document.querySelector("ol");

// const isTrue = nums.some((num) => {
//   return num > 3;
// });
// const li = document.createElement("li");
// li.textContent = isTrue;
// ol.appendChild(li);
// console.log(isTrue);

// 22
// const nums = [1, 2, 4, 5, 8];
// const ol = document.querySelector("ol");

// const isTrue = nums.every((num) => {
//   return num % 2 === 0;
// });
// const li = document.createElement("li");
// li.textContent = isTrue;
// ol.appendChild(li);
// console.log(isTrue);

// 23

// const fruits = ["תפוח", "בננה", "דובדבן"];
// const ol = document.querySelector("ol");

// const isTrue = fruits.some((fruit) => {
//   return fruit.length > 6;
// });
// const li = document.createElement("li");
// li.textContent = `are heve more then six chars - ${isTrue}`;
// ol.appendChild(li);
// console.log(isTrue);

// 24

// const enimols = ["אתון", "כלב", "פיל"];
// const ol = document.querySelector("ol");
// const li = document.createElement("li");
// let isTrue = true;
// const consonants = ["א", "ע", " י", " ו", " ה"];
// consonants.forEach((char) => {
//   const check = enimols.some((enimol) => {
//     return enimol[0] === char;
//   });

//   if (check === true) {
//     isTrue = false;
//   }
// });

// li.textContent = `ddddddddddddddddddddddddddddddd are not start with constant - ${isTrue}`;
// ol.appendChild(li);
// console.log(isTrue);

// 25

// const falses = [false, false, false, true];

// const ol = document.querySelector("ol");
// const li = document.createElement("li");

// const isTrue = falses.some((el) => {
//   console.log(el);

//   return el === true;
// });

// li.textContent = `ddddddddddddddddddddddddddddddd are contain true? ${isTrue} !`;
// ol.appendChild(li);

// 26

// const nums = [1, 2, 4, 5, 8];
// const ol = document.querySelector("ol");

// const pass = nums.find((num) => {
//   return num > 3;
// });
// const li = document.createElement("li");
// li.textContent = pass;
// ol.appendChild(li);
// console.log(pass);

// 27

// const nums = [1, 2, 4, 5, 8];
// const ol = document.querySelector("ol");

// const index = nums.findIndex((num) => {
//   return num % 2 === 0;
// });
// const li = document.createElement("li");
// li.textContent = index;
// ol.appendChild(li);
// console.log(index);

// 28

// const fruits = ["תפוח", "בננה", "דובדבן"];
// const ol = document.querySelector("ol");

// const five = fruits.find((fruit) => {
//   return fruit.length > 5;
// });
// const li = document.createElement("li");
// li.textContent = `${five} heve more then five chars`;
// ol.appendChild(li);
// console.log(five);

// 29

// const fruits = ["תפוח", "בננה", "דובדבן"];
// const ol = document.querySelector("ol");

// const index = fruits.findIndex((fruit) => {
//   return fruit === "דובדבן";
// });
// const li = document.createElement("li");
// li.textContent = `${index} דובדבן במיקום:`;
// ol.appendChild(li);

// 30

// const nums = [1, 2, 3, -4, 5, -6];
// const ol = document.querySelector("ol");

// const negative = nums.every((num) => {
//   return num < 0;
// });
// const li = document.createElement("li");
// li.textContent = negative;
// ol.appendChild(li);
// console.log(negative);

// 31

// const nums = [1, 8, 99, 21, 2, 5, 8];
// const ol = document.querySelector("ol");

// const newArr = nums.sort((a, b) => {
//   return a - b;
// });
// const li = document.createElement("li");
// li.textContent = newArr;
// ol.appendChild(li);

// 33

// const fruits = ["@תפוח", "בננה", "דובדבן"];
// const ol = document.querySelector("ol");

// const newArr = fruits.sort((a, b) => {
//   return a.localeCompare(b, "he", { ignorePunctuation: true });
// });
// const li = document.createElement("li");
// li.textContent = `${newArr}`;
// ol.appendChild(li);

// 34

// const fruits = ["תפוצח", "בננה", "דובדבן"];
// const ol = document.querySelector("ol");
// const li = document.createElement("li");

// const newArr = fruits.sort((a, b) => {
//   return a.length - b.length;
// });
// li.textContent = `${newArr}`;
// ol.appendChild(li);

// 35

// const fruits = [
//   { name: "יוחנן", age: 25 },
//   { name: "יעל", age: 30 },
//   { name: "בועז", age: 20 },
//   { name: null, age: 254 },
// ];
// const ol = document.querySelector("ol");
// const li = document.createElement("li");

// const newArr = fruits.sort((a, b) => {
//   return a.age - b.age;
// });
// const toHtml = JSON.stringify(newArr);

// li.textContent = `${toHtml}`;
// ol.appendChild(li);
// console.log(newArr);

// 36

// const nestedArr = [1, [2, 3], [4, [5, 6]]];
// const flatArr = nestedArr.flat(3);

// const ol = document.querySelector("ol");
// const li = document.createElement("li");

// li.textContent = `${flatArr}`;
// ol.appendChild(li);
// console.log(flatArr);

// 37

// const nestedArr = [1, [2, [3, [4]]]];
// const flatArr = nestedArr.flat(2);

// const ol = document.querySelector("ol");
// const li = document.createElement("li");

// li.textContent = `${flatArr}`;
// ol.appendChild(li);
// console.log(flatArr);

// 38

// const nestedArr = [1, 2, , 4, 5];
// const flatArr = nestedArr.flat(1);

// const ol = document.querySelector("ol");
// const li = document.createElement("li");

// li.textContent = `${flatArr}`;
// ol.appendChild(li);
// console.log(flatArr);

// // 39

// const nestedArr = ["א", ["ב", "ג"], "ד"];
// const flatArr = nestedArr.flat(1);

// const ol = document.querySelector("ol");
// const li = document.createElement("li");

// li.textContent = `${flatArr}`;
// ol.appendChild(li);
// console.log(flatArr);

// 40

// const nestedArr = [1, [2, [3, [4, [5]]]]];
// const flatArr = nestedArr.flat(Infinity);

// const ol = document.querySelector("ol");
// const li = document.createElement("li");

// li.textContent = `${flatArr}`;
// ol.appendChild(li);
// console.log(flatArr);

// 41

const alfabetiks = ["א", "ב", "ג", "ד"];
alfabetiks.forEach((char, i) => {
  const p = document.createElement("p");
  const div = document.createElement("div");
  p.textContent = `char- ${char} index- ${i}`;
  div.appendChild(p);
});
