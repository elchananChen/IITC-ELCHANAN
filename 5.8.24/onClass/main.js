// primitive values ( numcer , string , boolean, undefined , null , simbell)

let a = 17;
let b = 17;
a === b;

let c = a;
c = 17;

a === c;

c = 71;
a !== c;

////////////////////////////////////////////////////////////////////////////

// Object value ( Object , Array , function , class)

let person_1 = { skill: "cooking" }; // 0x01
let person_2 = { skill: "cooking" }; //  0x02

// person_1 == person_2 // false

let person_3 = person_1; // 0x01
person_1 === person_3; // true
person_3.name = "baba"; // person_1 השתנה גם // mutesion

let person_4 = { ...person_1 }; // 0x03 ... מעביר את הערכים ללא הכתובת ! // person = {skill: "cooking", name = "baba"}

person_1 = { x: "2" }; // 0.04  // reassaiment (השמה מחדש) //  peraon_3 לא השתנה

// הקונספט התיאורטי הכי חשוב - יוצר מלא באגים (בריאקט בעיקר) אם לא מבינים אותו

let numbers = [1, 2, 3]; // 0x01
let anotherNumbers = numbers; // 0x01
anotherNumbers.push(4); // not realy "another numbers"
let copyNumbers = [...numbers]; // 0x02

//  shallow vs deep copy

let cat = {
  name: "flunfy",
  face: "🐱‍🐉",
  food: ["salomon", "mouse"],
};
let cat_2 = { ...cat };

cat_2.face = "🐈"; // רק הוא השתנה

cat_2.food.push("milk"); // גם המקורי השתנה כיוון ש"אוכל" הוא מערך - כתובת - ושינינו את
