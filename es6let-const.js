// We can not declared more than one variable as same name by const keyword
const x = "I love Bangladesh";
// x = "Bangladesh is my country";
console.log(x);
console.log("A line break here");

// we can pup(delete) ,push(add), replace element of an array by const variable keyword but we can't fully replace the array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
numbers.pop(); // deletion of last element
numbers.push(11); // adding an element at the last of the array
numbers[9] = 10; // replacing an element by index position

console.log(numbers);
console.log("A line break here");

// we can pup(delete) ,push(add), replace element of an object by const variable keyword but we can't fully replace the array
const sohel = { name: "Sohel Mahmud", age: 25, qualification: "M degree holder", village: "Shekhertek", phone: 01937273724, skill: "Web designer and developer" };
// const sohel = { name: "S Mahmud", id: 1213, };
sohel.name = "S Mahmud"; // updating element
sohel.id = 121321; // adding element
delete sohel.id; // or delete sohel["id"];

console.log(sohel);
console.log("A line break here");

//let keyword doesn't give output outer of the loop. It's called scoping
let xx = 1;
for (let i = 0; i < 10; i++) {
    xx = xx + i;
    console.log(i)
}
// console.log(i)
console.log("A line break here")