"use strict";
// /*
// // 1
// let cenVote;
// let age = 17;
// if (age >= 18) {
//   cenVote = true;
// } else cenVote = false;
// console.log(cenVote);

// // 2

// let temperature = 0;
// let weather;
// if (temperature < 0) {
//   weather = "freezing";
// } else weather = "not freezing";
// console.log(weather);

// // 3
// let score = 60;
// let result;
// if (score >= 60) {
//   result = "pass";
// } else result = "fail";
// console.log(result);

// // 4

// let grade;
// let letterGrade;
// if (grade >= 90) {
//   grade = "A";
// } else if (grade >= 80) {
//   grade = "B";
// } else grade = "C";

// // 5

// let number = 1;
// let isEven;
// if (number % 2 === 0) {
//   isEven = true;
// } else isEven = !true;

// console.log(isEven);
// */

// // 6

// let year = 32;
// let isLeapYear;
// if (year % 4 === 0) {
//   isLeapYear = !false;
// } else isLeapYear = false;
// console.log(isLeapYear);

// // 7

// let hour = 4;
// let period;
// if (hour < 12) {
//   period = "AM";
// } else period = "PM";

// // 8

// let dayNumber;
// let dayName;
// if ((dayNumber = 1)) {
//   dayName = "Sunday";
// } else if ((dayNumber = 2)) {
//   dayName = "Monday";
// } else if ((dayNumber = 3)) {
//   dayName = "Tuesday";
// } else if ((dayNumber = 4)) {
//   dayName = "Wednesday";
// } else if ((dayNumber = 5)) {
//   dayName = "Thutsday";
// } else if ((dayNumber = 6)) {
//   dayName = "Friday";
// } else if ((dayNumber = 7)) {
//   dayName = "Saturday";
// } else dayName = "not a day";

// // 9

// let name;
// if (name === undefined) {
//   hasName = false;
// } else hasName = true;
// console.log(hasName);

// // 10

// let amount;
// let shipping;
// if (amount > 1000) {
//   shipping = 0;
// } else shipping = 5;

// // 11

// let passwrd;
// let isLoggedIn;
// if ((passwrd = "secret123")) {
//   passwrd = true;
// } else passwrd = false;

// // 12

// let month;
// let season;
// if ((nonth = 1)) {
//   season = "winter";
// } else if ((nonth = 2)) {
//   season = "winter";
// } else if ((nonth = 3)) {
//   season = "winter";
// } else if ((nonth = 4)) {
//   season = "spring";
// } else if ((nonth = 5)) {
//   season = "summer";
// } else if ((nonth = 6)) {
//   season = "summer";
// } else if ((nonth = 7)) {
//   season = "summer";
// } else if ((nonth = 8)) {
//   season = "summer";
// } else if ((nonth = 9)) {
//   season = "fall";
// } else if ((nonth = 10)) {
//   season = "fall";
// } else if ((nonth = 11)) {
//   season = "winter";
// } else if ((nonth = 12)) {
//   season = "winter";
// }

// // 13

// let loanApproved;
// let income = 499999;
// let creditScore = 8000;
// if (income > 50000 && creditScore > 700) {
//   loanApproved = true;
// } else loanApproved = false;

// console.log(loanApproved);

// 14

// let age = 100;
// let discount = 4;
// if (age > 65 || age < 18) {
//   discount = 0.2;
// } else discount = 0;
// console.log(discount);

// // // 15

// let inRange;
// let number = 10;
// if (number >= 1 && number <= 10) {
//   inRange = true;
// } else inRange = false;
// // console.log(inRange);

// // 16

// let dayNumber = 6;
// let dayName;

// switch (dayNumber) {
//   case 1:
//     dayName = "sunday";
//     break;
//   case 2:
//     dayName = "monday";
//     break;
//   case 3:
//     dayName = "tuesday";
//     break;
//   case 4:
//     dayName = "wednesday";
//     break;
//   case 5:
//     dayName = "thutsday";
//     break;
//   case 6:
//     dayName = "friday";
//     break;
//   case 7:
//     dayName = "saturday";
//     break;
//   default:
//     dayName = "not a day";
//     break;
// }
// console.log(dayName);

// // 17
// let grade = "F";
// let description;
// switch (grade) {
//   case "A":
//     description = "exelent";
//     break;
//   case "B":
//     description = "good";
//     break;
//   case "C":
//     description = "not good";
//     break;
//   case "D":
//     description = "descasting";
//     break;
//   case "F":
//     description = "what????";
//     break;
// }

// console.log(description);

// 18

// let sign;
// let number = 3;
// if (number > 0) {
//   sign = "+";
// } else if ((number = 0)) {
//   sign = "0";
// } else if (number < 0) {
//   sign = "-";
// } else sign = "not a number";

// console.log(sign);

// // 19

// let year = 2400;
// let isCenturyLeapYear;
// if (year % 400 === 0) {
//   isCenturyLeapYear = true;
// } else isCenturyLeapYear = false;

// console.log(isCenturyLeapYear);

// // הביטוי הרגולרי
// const pattern = /0{2}$/;

// // רשימה של מחרוזות לבדיקה
// const strings = [
//   "hello world 1000",
//   "hello world 100",
//   "test 00",
//   "end 000",
//   "final 12300",
// ];

// // נבדוק כל מחרוזת
// strings.forEach((s) => {
//   if (pattern.test(s)) {
//     console.log(`'${s}' מתאים לביטוי הרגולרי`);
//   } else {
//     console.log(`'${s}' אינו מתאים לביטוי הרגולרי`);
//   }
// });

// 20

// let month = 5;
// let daysInMonth;
// switch (month) {
//   case 1:
//     daysInMonth = 29;
//     break;
//   case 2:
//     daysInMonth = 30;
//     break;
//   case 3:
//     daysInMonth = 31;
//     break;
//   case 4:
//     daysInMonth = 29;
//     break;
//   case 5:
//     daysInMonth = 32;
//     break;
//   case 6:
//     daysInMonth = 28;
//     break;
//   case 7:
//     daysInMonth = 30;
//     break;
//   case 8:
//     daysInMonth = 31;
//     break;
//   case 9:
//     daysInMonth = 29;
//     break;
//   case 10:
//     daysInMonth = 30;
//     break;
//   case 11:
//     daysInMonth = 28;
//     break;
//   case 12:
//     daysInMonth = 32;
//     break;
// }
// console.log(daysInMonth);

// 21

// 31

// let number = 3;
// let parity = number % 2 === 0 ? "even" : "odd";
// console.log(parity);

// // 32

// let age = 4;
// let canVote = age >= 18 ? true : false;
// console.log(canVote);
