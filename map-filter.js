//The process of square output. and it is old method
const number = [3, 4, 5, 6, 7, 3];
const output = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
console.log("A line break here");

// Es6 shortcut and exclusive method of square. That is called map method and it give an array output
const getResult = number.map(function(element) {
    return element * element;
})
console.log(getResult);
console.log("A line break here");

//we can pass one, two and three parameter in the map function method
number.map(function(element, index) {
    console.log(element, index);
});

//we can pass one, two and three parameter in the map function method
number.map(function(element, index, array) {
    console.log(element * element, index, array);
});
console.log("A line break here");

// More shortcut way to get square in arrow function
const square = number.map(x = x => x * x); // here x==element
console.log(square);
console.log("A line break here");

//filter. filter give the desired output after fullfil the condition
// const filterIt = number.filter(x => x > 3) // bigger than 3
// const filterIt = number.filter(x => x == 3) // 3==3
const filterIt = number.filter(x => x > 5) // two condition
console.log(filterIt);
console.log("A line break here");

// find. find gives the first matching element after fullfil the condition
const findIt = number.find(x => x < 5);
console.log(findIt);
console.log("A line break here");

//find on an array of objects
const students = [
        { name: "Korim", id: 3, group: "Arts" },
        { name: "Somon", id: 5, group: "Science" },
        { name: "Sohag", id: 7, group: "Commerce" },
        { name: "Sohel", id: 9, group: "Arts" }
    ]
    // const result = students.map(s => s.name);
    // const result = students.filter(s => s.id > 5);
const result = students.filter(s => s.group);
console.log(result);
console.log("A line break here")