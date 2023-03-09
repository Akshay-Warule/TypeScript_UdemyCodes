

function unionOftwo( input1:number|string,input2:number
    |string)
    {

        let result;
        if(typeof input1==='number'&&  typeof input2==='number'){
            result=input1  + input2;
        }
        else{
            result=input1.toString() +input2.toString();

        }
        return result;
    }


const  union=unionOftwo(30,16);
const  union1=unionOftwo('Akshay','Warule');
console.log(union);//46
console.log(union1)//AkshayWarule

