// 1

// function name(a) {
//   a();
// }

// const a = () => {
//   console.log("a");
// };
// name(a);

// 2

// function greet(cb) {
//   fName = cb();
//   console.log(`wellcom ${fName}`);
// }

// const name = () => {
//   let fName = "baruce";
//   return fName;
// };

// greet(name);

// ----------------

// function greet(fName, cb) {
//   cb(fName);
// }

// const cbGreet = (fName) => {
//   console.log(`${fName}, you are the best!!`);
// };
// greet("yosi", cbGreet);

// 3

// function name(baba, cb) {
//   cb();
// }
// const baba = "baba";
// const yosi = "yosi";
// name(yosi, () => console.log(yosi));

// 4

// function multiple(num, numTwo, cb) {
//   cb(console.log(num * numTwo));
// }
// multiple(3, 10, () => {});

// 5

// const numbers = [1, 5, 2, 6, 89];
// function logNums(arr, cb) {
//   cb(
//     arr.forEach((num) => {
//       console.log(num);
//     })
//   );
// }
// logNums(numbers, () => {});

// 6

// const numbers = [1, 5, 2, 6, 89];
// function logNums(arr, cb) {
//   setTimeout(() => {
//     cb(
//       arr.forEach((num) => {
//         console.log(num);
//       })
//     );
//   }, 1000);
// }
// logNums(numbers, () => {});

// 7

// function rundomResult(cb, cbTwo) {
//   if (Math.floor(Math.random() * 100) < 50) {
//     cb();
//   } else cbTwo();
// }

// rundomResult(
//   () => {
//     console.log("Request succeeded!");
//   },
//   () => {
//     console.log("Request failed!");
//   }
// );
