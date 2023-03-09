
function unionOftwo( input1:number|string,
    input2:number |string, 
    resultConverstion:'as-number'|'as-text'//this is lieral
    )
    {

        let result;
        if(typeof input1==='number'&&  typeof input2==='number' || resultConverstion==='as-number'){
            result=+input1  +  +input2;//+input1 to convert into number
        }
        else{
            result=input1.toString()+"   " +input2.toString();

        }
        return result;
    }


const  combineNumber=unionOftwo(30,16,"as-number");
console.log(combineNumber);//46

const  combineNumber1=unionOftwo(50,16,"as-number");
console.log(combineNumber1);//56


const  combineString=unionOftwo('Akshay','Warule','as-text');
console.log(combineString)//Akshay   Warule


