// Undefined values in js
//without variable's value setting
let name;
console.log(name);
console.log("A line break here");

//without return value
function getFullName(firstName, lastName) {
    const fullName = firstName + lastName;
    /// without return value
}
const result = getFullName("Sohel", "Mahmud")
console.log(result);
console.log("A line break here");

//without return statement
function add(num1, num2) {
    console.log(num1, num2);
    return
}
const total = add(12, 23);
console.log(total);
console.log("A line break here");

//If there is no property in object
const obj = { name: "Sohel", id: 121, roll: 23213 };
console.log(obj.salary);
console.log("A line break here");

//If js reserved keyword(undefined) is the value of variable
const hisName = undefined;
console.log(hisName);
console.log("A line break here");

//If there is no array index property
const number = [1, 2, 3, 4, 5, 6, 6, 7];
console.log(number[11]);
console.log("A line break here");