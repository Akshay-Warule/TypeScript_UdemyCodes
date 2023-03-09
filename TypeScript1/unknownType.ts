let userInput:unknown;

let userName:string;

userInput=3;
userInput='max var';

userName=userInput;// giving eror if userInput is any then no eror but we should avoid uses of any

//to handle that you have to first check type
if(typeof userInput==='string'){
    userName=userInput;
}