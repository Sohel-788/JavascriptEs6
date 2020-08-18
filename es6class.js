class Student {
    constructor(sName, sId) {
        this.sName = sName;
        this.sId = sId;
        this.school = "Dhaka Model School"; //default property
    }


}
const student1 = new Student("Somon", 12);
const student2 = new Student("Sojib", 31);
console.log(student1, student2)
console.log("A line break here");

// inheritance in js. inheritance means parent
class Parent {
    constructor() {
        this.fathersName = "Nurul Islam";
    }
}

class Child extends Parent {
    constructor(name, id) {
        super();
        this.name = name;
        this.id = id;
    }
}
const baby1 = new Child("Korim", 11);
const baby2 = new Child("Rohim", 12);
console.log(baby1, baby2);
console.log("A line break here");

// function method in class declaration
class Parents {
    constructor() {
        this.primeMinister = "Prime minister Shekh Hasina";
    }
}
class Child1 extends Parents {
    constructor(name, department) {
        super();
        this.name = name;
        this.department = department;
    }
    getFullName() {
        return this.primeMinister + " " + this.name + " " + this.department;
    }
}
const minister1 = new Child1("Taklu Kamrul", "Food Minister");
const minister2 = new Child1("Hasan Mahmud", "Information Minister");
console.log(minister1.getFullName());