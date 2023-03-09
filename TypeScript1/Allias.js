function unionOftwo(input1, input2, resultConverstion //this is Allias
) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConverstion === 'as-number') {
        result = +input1 + +input2; //+input1 to convert into number
    }
    else {
        result = input1.toString() + "   " + input2.toString();
    }
    return result;
}
var combineNumber11 = unionOftwo(30, 16, "as-number");
console.log(combineNumber11); //46
var combineNumber12 = unionOftwo(50, 16, "as-number");
console.log(combineNumber12); //56
var combineString13 = unionOftwo('Akshay', 'Warule', 'as-text');
console.log(combineString13); //Akshay   Warule
