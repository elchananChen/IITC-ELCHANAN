// condisions
// let age = 64;
// if (age < 13) console.log("you ate a child");
// else if (age >= 13 && age <= 17) console.log("You are a teenager");
// else if (age >= 18 && age <= 64) console.log("You are an adult");
// else console.log("You are a senior");

let day = "monday";
function getDayMessage(dayOfWeek) {
  switch (dayOfWeek) {
    // case "Monday" || "monday":
    //   console.log("Start of the work week");
    case "Monday":
      console.log("Start of the work week");
      break;
    case "monday":
      console.log("Start of the work week");
      break;
    case "Tuesday":
      console.log("starting to see the end");
      break;
    case "Wednesday":
      console.log("workout day");
      break;
    case "Thursday":
      console.log("clim a bit");
      break;
    case "Friday":
      console.log("stress day");
      break;
    case "Saturday":
      console.log("a lot off sleep");
      break;
    case "Sunday":
      console.log("really Start of the work week");
      break;
    default:
      console.log("Invalid day");
  }
}
getDayMessage(day);
day = "Friday";
getDayMessage(day);
// איפה נכנס getDayMessage?

// const age = 24;
// const isStudent = false;
// function checkEligibility(age, isStudent) {
//   if (age >= 0 && age < 18 && isStudent === true)
//     console.log("You are a minor student");
//   else if (age >= 0 && age < 18 && isStudent !== true)
//     console.log("You are a minor non-student");
//   else if (age >= 18 && age < 24 && isStudent === true)
//     console.log("You are a young adult student");
//   else if (age >= 18 && age <= 24 && isStudent === false)
//     console.log("You are a young adult non-student");
//   else if (age > 24 && isStudent === true)
//     console.log("You are an adult student");
//   else if (age > 24 && isStudent === false)
//     console.log("You are an adult non-student");
//   else console.log("dosen't make any sense");
// }
// console.log(checkEligibility(age, isStudent));

// function formatName(name) {
//   if (name === "admin") console.log("welcome, admin!");
//   else console.log("hello", name.trim().toLowerCase(), "!");
// }

// formatName("   Omer  ");
// // 😎
// function checkDiscount(age, isMember) {
//   if (age < 18 && age > 0) {
//     if (isMember === true) {
//       console.log("You get a 20% discount.");
//     } else {
//       console.log("You get a 20% discount.");
//     }
//   } else if (age >= 65 && age < 110) {
//     if (isMember) {
//       console.log("You get a 30% discount.");
//     } else {
//       console.log("You get a 20% discount.");
//     }
//   } else if (age >= 18 && age < 65) {
//     if (isMember) {
//       console.log("You get a 10% discount.");
//     } else {
//       console.log("No discount available");
//     }
//   } else console.log("are you an alien? are time machine Exists?");
// }
// console.log(checkDiscount(120, true));
// // 😍

// function validateLogin(userName, password) {
//   let storedUserame = "adam";
//   let storedPassword = "SDASLD12@32";
//   if (userName === storedUserame && password === storedPassword) {
//     console.log("login successful");
//   } else {
//     console.log("Invalid username or password.");
//   }
// }
// console.log(validateLogin("adam", "SDASLD12@32"));
// // 🤣
