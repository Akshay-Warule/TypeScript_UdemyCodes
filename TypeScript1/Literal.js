function unionOftwo(input1, input2, resultConverstion //this is lieral
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
var combineNumber = unionOftwo(30, 16, "as-number");
console.log(combineNumber); //46
var combineNumber1 = unionOftwo(50, 16, "as-number");
console.log(combineNumber1); //56
var combineString = unionOftwo('Akshay', 'Warule', 'as-text');
console.log(combineString); //AkshayWarule
