"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

let wakeUpTime = 7;

printOut("Wake up time = " + 8);

if (wakeUpTime === 7) {
    printOut("I can catch the bus to school.");
} else if (wakeUpTime === 8) {
    printOut("I can take the train to school.");
} else {
    printOut("Otherwise I have to take the car to school.");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number = -1;

printOut("Oppgave 4 value = " + number);

if (number > 0) {
    printOut("Value is positive");
} else if (number < 0) {
    printOut("Value is negative");
} else {
    printOut("Value is zero");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const minimumSize = 4;
let imageSize = Math.floor(Math.random() * 8) + 1;

printOut("Oppgave 6 photo size = " + imageSize);

if (imageSize >= minimumSize) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const MinimumSize = 4;
let ImageSize = Math.floor(Math.random() * 8) + 1;

printOut("Oppgave 7 photo size = " + imageSize);

if (imageSize >= 6) {
    printOut("Image is too large");
} else if (imageSize >= minimumSize) {
    printOut("Thank you");
} else {
    printOut("Image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];

const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("Month is = " + monthName);

if (monthName.includes("r")) {
    printOut("You need to take vitamin D");
} else {
    printOut("You do not need to take vitamin D")
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let daysInMonth;

if (monthName === "February") {
    daysInMonth = 28;
} else if (
    monthName === "April" ||
    monthName === "Jun" ||
    monthName === "September" ||
    monthName === "November"
) {
    daysInMonth = 30;
} else {
    daysInMonth = 31;
}

printOut("It is " + daysInMonth + " days in " + monthName);

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/



if (monthName === "April") {
    printOut("The Art gallery has temporary premises in the building next door.");
} else if (monthName === "Mars" || monthName === "Mai") {
    printOut("The Art gallery is closed due to refurbish");
} else {
    printOut("The Art gallery is open in " + monthName + ", Welcome!");
}

printOut(newLine);
