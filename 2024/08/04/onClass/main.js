// let students = [
//   { id: "1", name: "omer", grade: 110 },
//   { id: "2", name: "avi", grade: 80 },
//   { id: "3", name: "gaga", grade: 65 },
// ];
// function getValuesFromKey(array, key) {
//   let namesArray = [];
//   for (let i = 0; i < array.length; i++) {
//     namesArray.push(array[i][key]);
//   }
//   return namesArray;
// }

// // console.log(getValuesFromKey(students, "name"));

// function getPassStudents(array, grade) {
//   let passStudent = [];
//   for (i = 0; i < array.length; i++) {
//     if (array[i].grade > grade) {
//       passStudent[i] = array[i];
//     }
//   }
//   return passStudent;
// }
// // console.log(getPassStudents(students, 70));

// let names = ["yossy", "aaron", "baba yaga"];
// function creatPerson(names) {
//   let persons = [];
//   for (i = 0; i < names.length; i++) {
//       let person = {name: names[i]}
//     persons.push(person)
//   }
//   return persons;
// }
// console.log(creatPerson(names));

// Write a function "groupBy" that takes
//   an array of objects and a key.
//   returns an object where each key is a unique value
//   from the employees array and the corresponding value
//   is an array containing the employees that belong to that key.
//   Example:

let employees = [
  { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

function groupBy(array, key) {
  let group = [];
  for (let i = 0; i < array.length; i++) {
    group.push(array[i][key]);
  }

  return group;
}

console.log(groupBy(employees, "department"));

// department =  employees.department = employees.key

//grup {
//   Engineering: [
//     { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
//     { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
//     { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
//   ],
//   Marketing: [
//     { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
//     { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
//     { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
//   ]
// }
