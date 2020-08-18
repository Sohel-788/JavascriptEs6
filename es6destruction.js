// destruction in js
const person = { name: "Hasan", age: 5, class: 1, id: 1212, group: "Huminities", school: "Modern School" };
// const name = person.name;
// const school = person.school;
const { name, age, school } = person;
console.log(name, school, age)
console.log("A line break here");


const friend = ["Sohel", 12, "Sojib", "Sunny", "Shuvo", "Somir"];
const [first, last, ...restFriend] = friend;
// console.log(first, last, ...restFriend);
console.log(...restFriend);
console.log("A line break here");

// complex object
const complexObject = {
    name2: "Sakhib Khan",
    info: {
        address: "Taltola",
        phone: 13131
    }

}

const { phone, address, name2 } = complexObject.info;
console.log(phone, address, name2)