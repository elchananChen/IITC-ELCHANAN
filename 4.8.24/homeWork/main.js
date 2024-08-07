// "use strict";

// // let person = {
// //   name: "John",
// //   age: 17,
// //   address: {
// //     city: "New York",
// //     zip: "10001",
// //   },
// // };

// // function updateCity(person, newCity) {
// //   person.address.city = newCity;
// //   return person;
// // }
// // console.log(updateCity(person, "los angeles"));

// /////////////////////////////////////////////////////////////✔

// // let students = [
// //   { id: 1, name: "Alice", age: 20 },
// //   { id: 2, name: "Bob", age: 22 },
// //   { id: 3, name: "Charlie", age: 19 },
// // ];

// // function getStudentNames(students) {
// //   let StudentNames = [];
// // //   for (let i = 0; i < students.length; i++) {
// // //     StudentNames.push(students[i].name);
// // //   }
// // //   return StudentNames;
// // // }

// // // console.log(getStudentNames(students));

// // // function getStudentById(students, id) {
// // //   let student = {};
// // //   for (let i = 0; i < students.length; i++) {
// // //     if (students[i].id === id) {
// // //       student = students[i];
// // //     }
// // //   }
// // //   return student;
// // // }

// // console.log(getStudentById(students, 3));

// // function addStudent(students, id, name, age) {
// //   let newStudent = { id, name, age };
// //   students.push(newStudent);
// // }

// // // addStudent(students, 4, "aviv", 30);
// // // console.log(students);

// // ////////////////////////////////////////////////////// ✔✔✔

// // let product = {
// //   name: "Laptop",
// //   price: 1200,
// //   isAvailable: true,
// //   categories: ["electronics", "computers", "tech"],
// // };

// // // function toggleAvailability(product, isAvailable) {
// // //   product.isAvailable = isAvailable;
// // // }
// // // toggleAvailability(product, false);
// // // console.log(product);

// // // function updatePrice(product, newPrice) {
// // //   product.price = newPrice;
// // // }
// // // updatePrice(product, 1000);
// // // // console.log(product);

// // // function removeCategory(product, category) {
// // //   for (let i = 0; i < product.categories.length; i++) {
// // //     if (product.categories[i] === category) {
// // //       // delete product.categories[i];
// // //       product.categories.splice(i, 1);
// // //     }
// // //   }
// // // }

// // // removeCategory(product, "tech");
// // // console.log("Updated Product:", product);

// // /////////////////////////////////////////////////////✔✔✔✔

// // // function findMostExpensiveProduct(products) {
// // //   let expensiveProduct = 0;
// // //   let indexExpensiveProduct;
// // //   for (let i = 0; i < products.length; i++) {
// // //     // for (let j = 0; j < products.length; j++) {
// // //     if (products[i]["price"] > expensiveProduct) {
// // //       expensiveProduct = products[i]["price"];
// // //       indexExpensiveProduct = [i];
// // //     }

// // //   }
// // //   return products[indexExpensiveProduct];
// // // }
// // // let expensiveProduct = findMostExpensiveProduct(products);
// // // console.log("Most Expensive Product:", expensiveProduct);
// // // let products = [
// // //   { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
// // //   { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
// // //   { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
// // // ];

// // // function getAvailableSizes(products) {
// // //   let aveilebleSizes = [];
// // //   for (let i = 0; i < products.length; i++) {
// // //     // let sizeArray = products[i]["sizes"]
// // //     if (products[i]["isAvailable"] === true) {
// // //       for (let j = 0; j < products[i].sizes.length; j++) {
// // //         if (!aveilebleSizes.includes(products[i].sizes[j])) {
// // //           aveilebleSizes.push(products[i].sizes[j]);
// // //         }
// // //       }
// // //     }
// // //   }
// // //   return aveilebleSizes;
// // // }
// // // let sizes = getAvailableSizes(products);
// // // console.log("Available Sizes:", sizes);

// // ///////////////////////////////////////////////////////✔✔✔✔

// // // let student = {
// // //   name: "Alice",
// // //   age: 20,
// // // };

// // // function addProperty(student, key, value) {
// // //   student[key] = value;
// // // }

// // // addProperty(student, "grade", "A");
// // // console.log("Updated Student:", student);

// // // /////////////////////////////////////////////////////✔✔✔✔

// // // let school = {
// // //   name: "Greenwood High",
// // //   address: {
// //     city: "Springfield",
// //     zip: "12345",
// //   },
// //   students: [
// //     { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
// //     { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
// //   ],
// // // };

// // // // // TODO: Write a function to update a student's grade in a subject
// // // function updateStudentGrade(school, studentId, subject, newGrade) {
// // //   for (let i = 0; i < school.students.length; i++) {
// // //     if (school.students[i]["id"] === studentId) {
// // //       school.students[i].grades[subject] = 90;
// // //     }
// // //   }
// // // }

// // // updateStudentGrade(school, 1, "math", 90);
// // // console.log("Updated School:", school);

// // // /////////////////////////////////////////////////////

// // //  function getDeliveredOrders(orders) {
// // //   let deliveredOrders = [];
// // //   for (let i = 0; i < orders.length; i++) {
// // //     if (orders[i].status === "delivered") {
// // //       deliveredOrders.push(orders[i].product);
// // //     }
// // //   }
// // //   return deliveredOrders;
// // // }
// // // let deliveredOrders = getDeliveredOrders(orders);
// // // console.log("Delivered Orders:", deliveredOrders);
// let orders = [
//   { id: 1, product: "Laptop", status: "delivered" },
//   { id: 2, product: "Mouse", status: "pending" },
//   { id: 3, product: "Keyboard", status: "delivered" },
//   { id: 4, product: "Monitor", status: "pending" },
//   { id: 5, product: "Laptop", status: "shipped" },
// ];

// // // TODO: Write a function to count the occurrences of each product in the orders
// function countProductOccurrences(orders) {
//   let count = {};
//   for (let i = 0; i < orders.length; i++) {
//     // currentOrder = orders[i].product;
//     if (count[orders[i]["product"]] === undefined) {
//       count[orders[i]["product"]] = 1;
//     } else count[orders[i]["product"]]++;
//   }
//   return count;
// }
// let productCounts = countProductOccurrences(orders);
// console.log("Product Counts:", productCounts);

/*
  Output:
  {
    Laptop: 2,
    Mouse: 1,
    Keyboard: 1,
    Monitor: 1
  }
  */
