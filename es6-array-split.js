// array slice method. it divides the array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const partOfNums = nums.slice(2, 5);
console.log(partOfNums);
console.log("A line break here");

//array splice method. remove some elements from an array
const removeElement = nums.splice(3, 5 /*deletion number*/ );
console.log(removeElement);
console.log("A line break here");

//join method
const nums2 = [33, 22, 11, 44, 55, 66, 77]
const together = nums2.join(",");
console.log(together);
console.log("A line break here");
const together2 = nums2.join(" ");
console.log(together2);
console.log("A line break here");
const together3 = nums2.join("ami ");
console.log(together3)