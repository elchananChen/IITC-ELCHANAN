// 1

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// 2

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// 3
let sum = 0;

for (let i = 0; i <= 10; i++) {
  console.log((sum += i));
}
// sum = sum + i
// sum = 0 + 0 = 0
// sum = 0 + 1 = 1
// sum = 1 + 2 = 3
// sum = 4 + 3 = 7
// 4

// for (i = 5; i <= 50; i += 5) {
//   console.log(i);
// }

// 5

// for (i = 1; i <= 10; i += i) {
//   console.log("*".repeat(i));
// }

// while loops

// // 1

// let count = 1;
// while (count <= 10) {
//   console.log(count);
//   count += 1;
// }

// // 2

// let double = 1;
// while (double <= 100) {
//   console.log(double);
//   double *= 2;
// }

// // 3

// let down = 20;
// while (down >= 0) {
//   console.log(down);
//   down -= 1;
// }

// 4

// let correntPassword = "1234";
// let enterPassword;

// while (correntPassword !== enterPassword) {
//   enterPassword = prompt("enter password");
// }

// 5

// let num = 5;
// let guess;

// while (num !== guess) {
//   guess = Math.floor(Math.random() * 10);
//   console.log(guess);
// }

// do ... while

// 1

// let i = 1;
// do {
//   console.log(++i);
// } while (i <= 5);

// ++i מבצע קודם את הפעולה ואז שואל (יוציא 6 )
// i++ מדפיס ואז מבצע את הפעולה (יוציא רק עד 5 )

// // 2

// let again = "you want to play again?";
// let answer = "yes";
// do {
//   console.log(again);
// } while (again === answer);
