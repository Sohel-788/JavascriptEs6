// Template means shortcut, exclusive and professional coding 
const firstName = "Sohel";
lastName = "Mahmud";
fullName = firstName + " " + lastName + " " + "is" + " " + [20 + 5] + " " + "years old."; //old method
console.log(fullName);
console.log("A line break here");

//Es6 update Template method
fullName2 = `${firstName} ${lastName} is ${10+10+5} years old.`;
console.log(fullName2);
console.log("A line break here");
// Multiline Template method
//old method
const multiline = "I love you.\n" + "I need you.\n" + "I like you.";
console.log(multiline);
//Es6 template method
console.log("A line break here")
const multiline2 = `I love you.
I miss you. 
I need you.`;
console.log(multiline2);