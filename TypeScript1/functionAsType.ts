function add1(num1:number,num2:number):number// here number is return from function if you write string then it will give eror. If you return nothing then write undefine 
{
    return num1+num2;
}
function printvalue1(numb:number):void 
{
console.log(numb)//17

}

//printvalue1(add1(5,12));


let combineValues1:(a1:number,b1:number)=>number;// here two number taken and return number only

combineValues1=add1;

// combineValues=printvalue; // it gives eror because return type number is allow only. where as printvalue having void return type

console.log(combineValues1(11,22));////33
