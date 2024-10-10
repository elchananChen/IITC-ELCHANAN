export const baba = "baba"; // נקרא export named
const vvvvvv = "bbbbbbbb";
export { vvvvvv };

const b = 2;
export default b; // לא מצריך {} אפשר לשנות לו את השם ואפשר לייצא רק אחד

// עוד צורה לכתוב
// export default {
//     b: "m"
// }

// banana יהיה שווה לb כי הוא דיפולט
//  import banana ,{baba , vvvvvv} from ...
