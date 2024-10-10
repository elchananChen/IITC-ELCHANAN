// let elchanan = {
//   age: 30,
//   hige: 1.8,
// };
// console.log(elchanan);

// // 1

let person = {
  name: ["joe", 1],
  age: 38,
  isStudent: false,
};

// 2

console.log(person.age, person.name);

// 3

person.isStudent = true;
console.log(person);

// // 1

// // creat an object for cars
// car = {
//   make: "toyota",
//   model: "corola",
//   year: 2009,
// };

// 2

// console.log(car.make, car.model); //accessing to car make and model

// 3

// car.year = "2010";   //chenge the car object year
// console.log(car);

// 1

// let fruit = {
//   name: "banana",
//   color: "yellow",
//   sweetness: "medium",
// };

// console.log(fruit.name, fruit.sweetness);

// // 1
// let book = {
//   title: "my book",
//   author: "yosi",
//   pages: 123,
// };

// // 2

// console.log(book.title, book.author);

// // 3
// book.pages += 50;

// console.log(book);

// // 1

// let animal = {
//   species: "bird",
//   sound: "hige",
//   isWild: true,
// };

// console.log(animal.species, animal.sound);

//////////////////////מתודות/////////////////

// keys

// let car ={
//     make: "toyota",
//     model: "corola"
// }
// let carkey = Object.keys(car)
// // console.log(carkey);

// let car = {
//   make: "toyota",
//   model: "corola",
//   year: " 2008",
//   details: function () {
//     console.log(
//       `details of this car: ${this.make} ${this.model} ${this.year} ${this.color} ` // אפשר גם : ...log(this)
//     );
//   },
// };

// console.log(car.model);

// car.year = 2345;

// car.color = "red";

// console.log(car);

// car.details();

// let carKeys = Object.keys(car);
// console.log(carKeys);
// for (let i = 0; i < carKeys.length; i++) {
//   if (typeof car[carKeys[i]] !== "function") {
//     console.log(`${carKeys[i]}:  ${car[carKeys[i]]}`);
//   }
// }
// console.log(typeof function () {});

// let del = 2;
// delete del;
// console.log(del);
