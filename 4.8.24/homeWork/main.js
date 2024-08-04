"use strict";

let person = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};

function updateCity(person, newCity) {
  person.address.city = newCity;
  return person;
}
console.log(updateCity(person, "los angeles"));

/////////////////////////////////////////////////////////////

let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

function getStudentNames(students) {
  let StudentNames = [];
  for (let i = 0; i < students.length; i++) {
    StudentNames.push(students[i].name);
  }
  return StudentNames;
}

console.log(getStudentNames(students));

////////////////////////////////////////////////////

function getStudentById(students, id) {
  // your code here
}
