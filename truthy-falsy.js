// Falsy values in js

// const name = 0;
// const name = -0;
// const name = "";
// const name = false;
// const name = null;
// const name = undefined;
// const name = NaN;
// let name;

// Truthy values in js
// const name = "0";
// const name = true;
// const name = " ";
// const name = {};
// const name = [];
// const name = -1;
// const name = "false";
// const name = 0;
let name = 10;
if (name || name == 0) {
    console.log("Condition is true")
} else {
    console.log("Condition is false")
}