// condisions

// function checkAge(age) {
//   if (age < 13) console.log("you are a child");
//   else if (age >= 13 && age <= 17) console.log("You are a teenager");
//   else if (age >= 18 && age <= 64) console.log("You are an adult");
//   else console.log("You are a senior");
// }

// console.log(checkAge(35));
//  (10)מחזיר תוצאה נכונה בפונקציה (שורה 6 במקרה זה ) אבל אנדפיין בשורה של הלוג🤔

// let day = "monday";
// function getDayMessage(dayOfWeek) {
//   switch (dayOfWeek) {
//     case "Monday":
//       console.log("Start of the work week");
//       break;
//     case "Monday":
//       console.log("Start of the work week");
//       break;
//     case "monday":
//       console.log("Start of the work week");
//       break;
//     case "Tuesday":
//       console.log("starting to see the end");
//       break;
//     case "Wednesday":
//       console.log("workout day");
//       break;
//     case "Thursday":
//       console.log("clim a bit");
//       break;
//     case "Friday":
//       console.log("stress day");
//       break;
//     case "Saturday":
//       console.log("a lot of sleep");
//       break;
//     case "Sunday":
//       console.log("really Start of the work week");
//       break;
//     default:
//       console.log("Invalid day");
//   }
// }
// getDayMessage(day);
// day = "Friday";
// getDayMessage(day);

// complex conditions

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

// SABSTRING EXTRACTION:

// function extractInitials(firstName, lastName) {
//   console.log(
//     firstName.charAt(0).toUpperCase(),
//     ".",
//     lastName.charAt(0).toUpperCase()
//   );
// }
// console.log(extractInitials("baba", "yonadav")); // B . Y
// 🤔 why there is space in between?

// String replacment

// function maskEmail(email) {
//   let maskedEmail = email.replace(/^[^@]+/, "*******");
//   return maskedEmail;
// }
// console.log(maskEmail("reguler@gmail.com"));

//   /^[^@]+/            ביטוי רגולרי
//    /  /               תחום הביטוי
//    ^                  "מתחילת הסטרינג/שורה"
//    []                 מסמן את קבוצת התווים שאנחנו מחפשים
//    [^]                שולל את הסימן הקיים כלומר - אנחנו מחפשים תווים שלא תואמים למה שבסוגריים
//  +                     מחפש יותר מפעם אחת - בלי ה+ יחליף רק את האות הראשונה

// nested if-else

// function gradeCalculator(score) {
//   if (score >= 90) return "A";
//   else if (score >= 80) return "B";
//   else if (score >= 70) return "C";
//   else if (score >= 60) return "D";
//   else return "F";
// }
// console.log(gradeCalculator(90));

// complex boolean conditions

// function cenVote(age, isCitizen) {
//   if (age >= 18 && isCitizen === true) return "you are  eligible to vote ";
//   else return "You are not eligible to vote.";
// }
// console.log(cenVote(50, false));

// String and Number Conversion:

// function convertToUpperCaseAndAddAge(name, age) {
//   uperName = name.toUpperCase();
//   return uperName + age;
// }
// console.log(convertToUpperCaseAndAddAge("baba", "45"));

// Capitalize First Letter:

// function capitalize(word) {
//   let reword = word.charAt(0).toUpperCase();
//   let rereword = word.substring(1);
//   return reword + rereword;
// }
// console.log(capitalize("word"));

// Check Substring:

// function containsSubstring(mainString, substring) {
//   let check = mainString.includes(substring);
//   return check;
// }
// console.log(containsSubstring("hallo world", "world"));
