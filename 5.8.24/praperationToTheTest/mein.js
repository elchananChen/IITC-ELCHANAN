"use strict";

// 1. Write a for loop that prints the numbers from (n) to (n).
//  Hint: Use a for loop with a counter that starts at 1 and ends at 20. (edited by omer 😈)

function sum(num, numTwo) {
  if (num < numTwo) {
    let counter = num;
    for (let i = num; i <= numTwo + 1; i++) {
      console.log(counter);
      counter = counter + i;
    }
    return counter;
  }
}
console.log(sum(2, 4));

let i = { num: 4, numt: 2 };

i.num *= 2;
console.log(i);
