//old method to concatenate the array
const friendsAges = [11, 22, 33, 32, 23];
const teachersAges = [44, 45, 46, 47];
const allAges = friendsAges.concat(teachersAges);
// const allAges = friendsAges.concat([66, 77]).concat(teachersAges);
console.log(allAges);
console.log("A line break here");

//Es6 easy and exclusive way to concatenate array by three dots(...)
const allAges2 = [...friendsAges, (66, 77), ...teachersAges];
console.log(allAges2);
console.log("A line break here");

// another example
const businessman = 482;
minister = 322;
sochib = 453;
// const maximum = Math.max(businessman, minister, sochib);
const taka = [453, 2424, 65, 34323];
const maximum = Math.max(...taka);
console.log(maximum);
console.log("A line break here");

//three dots ... in parameter. It's called Rest parameter
function myFunc(a, b, ...args) {
    console.log(a); // 22
    console.log(b); // 98
    console.log(args); // [43, 3, 26]
};

myFunc(22, 98, 43, 3, 26);
console.log("A line break here");

//The spread operator is used to expand elements of an iterable (like an array) into places where multiple elements can fit.
function myFunc(x, y, ...params) { // used rest operator here
    console.log(x);
    console.log(y);
    console.log(params);
}

var inputs = ["a", "b", "c", "d", "e", "f"];
myFunc(...inputs); // used spread operator here
// "a"
// "b"
// ["c", "d", "e", "f"]
console.log("A line break here");

//With spread operator, Shallow-cloning (excluding prototype) or merging of objects is now possible using a shorter syntax than Object.assign().
const obj1 = { name: "Akhi", class: 9, roll: 3 };
const obj2 = { name: "Rotna", class: 9, roll: 11 };
const clonedObj = {...obj1 };
const mergedObj = {...obj1, ...obj2 };
console.log(clonedObj, mergedObj); // it is unsolved