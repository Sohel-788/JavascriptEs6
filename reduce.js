// Js array.reduce() method.
//  The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).
// Note: reduce() does not execute the function for array elements without values.
let nums = [2, 5, 5, 8];
const getTotal = function getSum(sum, count) {
    return sum + count;
}
const total = nums.reduce(getTotal);
console.log(total)
console.log("A line break here")

let nums1 = [5.3, 5.5, 3.2, 6.6];
const reduced = function getSum(total, num) {
    return total + num;
}
const sum = nums1.reduce(reduced);
console.log(Math.round(sum))
console.log("A line break here")

//reduce method in arrow function or callback function
// single line arrow function
let nums4 = [5, 5, 5, 5, 5];
const total3 = nums4.reduce((sum, count) => (sum + count), 0);
console.log(total3);
console.log('A line brak here')
//multiline arrow function
let nums3 = [3, 3, 3, 3, 12, 12]
const total2 = nums3.reduce((sum, count) => {
    console.log(sum,count)
    return sum + count;

}, 0)
console.log(total2);
console.log('A line brak here');

const friends=[
    { name:'Rashed', taka:900},
    { name:'Kashed', taka:100},
    { name:'Jashed', taka:200},
    { name:'Mashed', taka:300},
    { name:'Nashed', taka:1100}
]
const totalTk=friends.reduce((sum, friends)=>{
    return sum+ friends.taka;
},0)
console.log(totalTk);