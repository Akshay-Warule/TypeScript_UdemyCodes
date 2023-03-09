
function add(n1:number, n2:number,printResult:boolean,resultPhrse:string){
    // if(typeof n1!="number" || typeof n2!="number"){
    //   throw new Error("incorrect input!");
        
    // }
    const result=n1+n2;
    if(printResult)
    {
        console.log(resultPhrse+ result);
    }
    else{
    return n1+n2;
    }
}

const number1= 5;
const number2:number= 2.8;
const printResult=true;
const resultPhrse='Result is'

// const result = add(number1,number2,printResult,resultPhrse);
 add(number1,number2,printResult,resultPhrse);
// console.log("result is"+result);