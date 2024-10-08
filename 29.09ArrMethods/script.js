// const passwords = [ "dfjsdf323", "dsfkjla", "sdl"  , "aldjskll9"]
// if (passwords.every() && passwords.some((el)=>{el.length >8 && el.fo
// });})) {

// }

// const products = [
//   { name: "baba", price: 33, quantity: 2 },
//   { name: "banana", price: 34, quantity: 90 },
//   { name: "banana", price: 50000, quantity: 90 },
//   { name: "banana", price: 34, quantity: 0 },
// ];

// const outOfStore =products.find((el) =>{
//     return el.quantity = 0
// })
// console.log(outOfStore);

// let index = 0
// const mostExpensive = products.findIndex((el , i , arr)=>{
//      if (el.price > arr[i]) {
//         index
//      }
// })

const students = [
  { name: "David", averageGrade: 85 },
  { name: "Sara", averageGrade: 90 },
  { name: "Michael", averageGrade: 85 },
  { name: "John", averageGrade: 75 },
  { name: "Anna", averageGrade: 90 },
  { name: "Ben", averageGrade: 95 },
];

const byAge = students.sort((a, b) => {
  return b.averageGrade - a.averageGrade;
});
console.log(byAge);

byAge.forEach();
