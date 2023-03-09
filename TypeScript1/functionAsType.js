function add1(num1, num2) {
    return num1 + num2;
}
function printvalue1(numb) {
    console.log(numb); //17
}
//printvalue1(add1(5,12));
var combineValues1; // here two number taken and return number only
combineValues1 = add1;
// combineValues=printvalue; // it gives eror because return type number is allow only. where as printvalue having void return type
console.log(combineValues1(11, 22));
