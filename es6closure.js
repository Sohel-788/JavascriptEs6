//closure means returning a function into same function and access variable from same function
function stopWatch() {
    var count = 0;
    return function() {
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log("A line break here")
const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1()); ///calling previous function