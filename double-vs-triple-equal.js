const first = 10;
const second = 10;
if (first == second) {
    console.log("condition is true");
} else {
    console.log("Condition is false");
}
console.log("A line break here");
// double equals don't check the type
const num1 = 2;
const num2 = "2";
if (num1 == num2) {
    console.log("condition is true");
} else {
    console.log("Condition is false");
}
console.log("A line break here");

//there is a relation between 1 and true in js when we will check by double equal operator
let num3 = 1;
let num4 = true;
if (num3 == num4) {
    console.log("condition is true");
} else {
    console.log("Condition is false");
}
console.log("A line break here");

//there is a relation between 0 and false in js when we will check by double equal operator
let num5 = 0;
let num6 = false;
if (num5 == num6) {
    console.log("condition is true");
} else {
    console.log("Condition is false");
}
console.log("A line break here");


// double equals must check the type
let number1 = 1;
let number2 = "1";
if (number1 === number2) {
    console.log("condition is true");
} else {
    console.log("Condition is false");
}
console.log("A line break here");

//there is no relation between 1 and true in js when we will check by triple equal operator
let num7 = 1;
let num8 = true;
if (num7 === num8) {
    console.log("condition is true");
} else {
    console.log("Condition is false");
}
console.log("A line break here");

//there is no relation between 0 and false in js when we will check by triple equal operator
let num9 = 0;
let num10 = false;
if (num9 === num10) {
    console.log("condition is true");
} else {
    console.log("Condition is false");
}
console.log("A line break here");