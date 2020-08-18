// normal function
function doubleIt1(num) {
    return num * 2;
}
const result1 = doubleIt1(5);
console.log(result1)
console.log("A line break here");

// function declaration by variable
const doubleIt = function myFunc(num) {
    return num * 2;
}
const result = doubleIt(10);
console.log(result)
console.log("A line break here");

// Es6 arrow function. It's a shortcut method of the above two functions
const doubleIt2 = num => num * 3; //parentheses() is no need in one input parameter
const result2 = doubleIt2(10);
console.log(result2);
console.log("A line break here");

// parentheses is needed in more than one input parameter
const doubleIt3 = (num, num2) => (num ** num2) * 3;
const result3 = doubleIt3(10, 10);
console.log(result3);
console.log("A line break here");

// parentheses is needed without input parameter
const give5 = () => 5;
const result4 = give5();
console.log(result4);
console.log("A line break here");

//Multiline arrow function
const multilineArrowFunc = (x, y) => {
    const add = (x + y);
    const diff = x - y;
    const result = diff ** add; //** Exponentiation(es6)
    return result;
}
const output = multilineArrowFunc(5, 3);
console.log(output);
console.log("A line break here");