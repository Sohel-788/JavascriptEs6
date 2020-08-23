// by default value setting in function parameter if we don't set one of the parameter value it will backup
// one method

function defaultValue(num1, num2 = 20 /*default value(one process)*/ ) {
    return num1 + num2;
}
const total = defaultValue(10);
console.log(total)
console.log("A line break here");

//second method
function byDefaultValue(x, y) {
    if (y == undefined) {
        y = 0; //any value can set here
    };
    return x + y;
};
const total2 = byDefaultValue(10);
console.log(total2);
console.log(total)
console.log("A line break here");

//3rd method . It's a shortcut and exclusive method
function byDefaultValueSet(x, y) {
    var y = y || 0;
    return x + y;
};
const total3 = byDefaultValueSet(20);
console.log(total3);