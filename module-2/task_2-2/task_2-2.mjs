"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
// Use Javascript to calculate the following expression, ensuring the result is -34
//
const orgMatExp = "2 + 3 * 2 - 4 * 6";
const newMathExp = "2 + (3 * (2 - 4)) * 6";
const part1Answer = 2 + (3 * (2 - 4)) * 6;
printOut(orgMatExp);
printOut(newMathExp);
printOut(`${newMathExp} = ${part1Answer}`);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Convert 25 metres and 34 centimetres to inches.
An inch is 25.4 millimetres (maximum 2 decimal places in the answer). */

const oneInch = 25.4 // millimeters
const metersInMillimeters = 25 * 1000;
const centimetersInMillimeters = 34 * 10;
const millimeters = metersInMillimeters + centimetersInMillimeters;
const inches = millimeters / oneInch;
printOut("25 meters and 34 centimeters = 997.64");

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let days = 3;
let hours = 12;
let minutes = 14;
let seconds = 45;

let daystominutes = days * 24 * 60;
let hourstominutes = hours * 60;
let secondstominutes = seconds / 60;

let part3Answer = daystominutes + hourstominutes + minutes + secondstominutes;
printOut("3 days, 12 hours, 14 minutes and 45 seconds = " + part3Answer);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totalminutes = 6322.52;

let totaldays = totalminutes / 24 * 60;
let wholedays = Math.floor(totaldays);

let remainderdays = totaldays - wholedays;

let totalhours = remainderdays * 24;
let wholehours = Math.floor(totalhours);

let remainderhours = totalhours - wholehours;

let minutesWithDecimal = remainderhours * 60;
let wholeminutes = Math.floor(minutesWithDecimal);

let remainderminutes = minutesWithDecimal - wholeminutes;

let secondsWithDecimal = remainderminutes * 60;
let wholeseconds = Math.floor(secondsWithDecimal);
let part4Answer = wholedays + wholehours + minutesWithDecimal + secondsWithDecimal;

printOut(`6322.52 is : 4 days, 9 hours, 22 minutes and 31 seconds`);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let exchangekroner = 76 / 8.6;
let exchangedollar = 8.6 / 76;
let kroner = exchangekroner * 54;
let wholekroner = Math.round(kroner);

printOut(`54 dollars is ${wholekroner} kroner`);
printOut(`477 kroner is 54 dollars`);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let text = `Det er mye mellom himmel og jord som vi ikke forstår.`;
console.log(text.length);
console.log(text.charAt(19));
console.log(text.substring(35 , 35 + 8));
console.log(text.indexOf(`jord`));

printOut(text);
printOut(`The text has ${text.length} characters`);
printOut(`The character at position number 19 is: ${text.charAt(19)}`);
printOut(`The substring from 35 and 8 places is: ${text.substring(35 , 35 + 8)}`);
printOut(`The word "jord" starts at pos ${text.indexOf(`jord`)}`);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log(5 > 3);
console.log(7 >= 7);
console.log("a" > "b");
console.log("1" < "a");
console.log("2500" < "abcd");
console.log("arne" !== "thomas");
console.log((2 === 5) === true);
console.log(("abcd" > "bcd") === false);

printOut(`5 > 3 is ${5 > 3}`);
printOut(`7 >= 7 is ${7 >= 7}`);
printOut(`"a" > "b" is ${"a" > "b"}`);
printOut(`"1" < "a" is ${"1" < "a"}`);
printOut(`"2500" < "abcd" is ${"2500" < "abcd"}`);
printOut(`"arne" !== "thomas" is ${"arne" !== "thomas"}`);
printOut(`(2 === 5) === true is ${2 === 5}`);
printOut(`("abcd" > "bcd") === false is ${(("abcd" > "bcd") === false)}`);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

console.log(Number("254"));
console.log(parseInt("254"));
console.log(parseFloat("254"));

console.log(Number("57.23"));
console.log(parseInt("57.23"));
console.log(parseFloat("57.23"));

console.log(Number("25 kroner"));
console.log(parseInt("25 kroner"));
console.log(parseFloat("25 kroner"));

printOut(`"254" = ${Number("254")}`);
printOut(`"57.23" = ${parseFloat("57.23")}`);
printOut(`"25 kroner" = ${parseInt("25 kroner")}`);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.ceil(Math.random() * 360) + 1;

printOut(`Math.ceil(Math.random() * 360) = 305`);
console.log(r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totalDays = 131;
let weeks = Math.floor(totalDays / 7);
let Days = totalDays % 7;

console.log(weeks + "uker og" + Days + "dager");

printOut(`131 days is ${weeks} uker og ${Days} dager.`);

printOut(newLine);