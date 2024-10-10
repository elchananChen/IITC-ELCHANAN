const fs = require("fs");

//reading files
fs.readFile("./blog.txt", (err, deta) => {
  if (err) {
    console.log(err);
  }
  console.log(deta);
});

// writeing files    מחליף את התוכן אם הקובץ קיים ואם לא יוצר חדש ומכניס לו את התוכן

// fs.writeFile("./blog.txt", "I am the new deta", () => {
//   console.log("secces");
// });

// fs.writeFile("./blog1.txt", "I am the new blog", () => {
//   console.log("secces");
// });

//directories

// fs.mkdir("./bloges", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
