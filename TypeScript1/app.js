function add(n1, n2, printResult, resultPhrse) {
    // if(typeof n1!="number" || typeof n2!="number"){
    //   throw new Error("incorrect input!");
    // }
    var result = n1 + n2;
    if (printResult) {
        console.log(resultPhrse + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrse = 'Result is';
// const result = add(number1,number2,printResult,resultPhrse);
add(number1, number2, printResult, resultPhrse);
// console.log("result is"+result);
