// forEach method for array
//עובד עם פונקצייה
// לא משנה את המערך המקורי

// fruits = ["annas", "banana"];
// fruits.forEach((addString) => {
//   console.log(`i am a ${addString}`);
// });

// console.log(fruits);

//////////////////////  filter method  /////////////////////////////

// לוקח מתוך אובייקטים שנמצאים במערך מה שמתנים לו ויוצר מערך חדש

fruitsTwo = ["ananas", "banana", "potteto", "tommeto", "cucumber", "apple"];
let onlyFruits = fruitsTwo.filter((item) => item.type === "fruit");
