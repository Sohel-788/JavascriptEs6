const number = [2, 3, 4, 5, 6, 7, 8, -7, -5, -8, 8, 9];
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    if (number[i] > 3) {
        break;
    }

}
console.log("A line break here")
for (let i = 0; i < number.length; i++) {
    if (number[i] < 0) {
        continue;
    }
    console.log(number[i]);

}