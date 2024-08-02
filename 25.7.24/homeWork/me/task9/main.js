"use strict";

// 1

function stringLength(str) {
  return str.length;
}
console.log(stringLength("sd"));

// 4

function stringCharacter(str) {
  return str.charAt(5);
}

console.log(stringCharacter("128356456"));

// 5

function extractsStrongPortion(str) {
  let portionString = str.substring(1, 7);
  return portionString;
}
console.log(extractsStrongPortion("bananas"));

// 6

function replaceInString(str) {
  let replace = str.replace("blue", "red");
  return replace;
}
console.log(replaceInString("blue car"));

// 7

function removesWhitespace(str) {
  let fixed = str.trim();
  return fixed;
}
console.log(removesWhitespace("   dfs  dfsd  "));

// 8

function startWithHello(str) {
  let check = str.startsWith("hello");
  return check;
}
console.log(startWithHello("hello world"));

// 9

function ifEndWithDot(str) {
  let check = str.endsWith(".");
  return check;
}
console.log(ifEndWithDot("i am."));

// 10

function stringIndex(str) {
  let index = str.indexOf(" ");
  return index + 1;
}
console.log(stringIndex("hello baba"));

// 11
function splitStrig(str) {
  let stringArray = str.split("o");
  return stringArray;
}
console.log(splitStrig("for you "));

// 12

function repeatString(str) {
  let repeat = str.repeat(3);
  return repeat;
}
console.log(repeatString("why????  "));

// 13
