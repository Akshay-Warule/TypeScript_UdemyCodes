
type CombineTwo= 'as-number'|'as-text'

function unionOftwo( input1:number|string,
    input2:number |string, 
    resultConverstion: CombineTwo//this is Allias
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


const  combineNumber11=unionOftwo(30,16,"as-number");
console.log(combineNumber11);//46

const  combineNumber12=unionOftwo(50,16,"as-number");
console.log(combineNumber12);//56


const  combineString13=unionOftwo('Akshay','Warule','as-text');
console.log(combineString13)//Akshay   Warule


