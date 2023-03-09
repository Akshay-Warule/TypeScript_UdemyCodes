"use strict";
// const username='Akshay'
// console.log(username)
// const add=(a:number,b:number)=> {const output=a+b ; console.log(output);}
// add(9,8)
// const printoutput: (a:number | string)=>void=output=>console.log(output);
// printoutput(23);
// const add=(a:number,b:number=1)=>a+b;
// // const printout=(output:string|number)=>{
// //     console.log(output);
// // }
// const printout:(a:number|string)=>void=output=>console.log(output);
// printout(add(2));
// const hobbies=['playing','dancing','cooking']
// const activity=['hiking']
// // activity.push(hobbies);//give eror
// activity.push(...hobbies);//o.k
// for(let data in activity)
// {
// console.log(data);
// }
// for(let i=0;i<5;i++)
// {
//     console.log(activity[i]);
// }
//Rest Parameter
// ...num is taken lots of parameter which are number type .we need not to give exact parameter, so our work reduce
// const add=(...num:number[])=>
// {
//     return num.reduce((curResult,curValue)=>
//     {
//         return curResult+curValue;
//     },0)
// }
// const addNumber=add(2,3,4,45,65,3);
// console.log(addNumber);//122
//Array Destructuring
// const hobbies=['playing','dancing','cooking','swiming','singing']
// const[hobbies1, hobbies2,...remaninghobbies]=hobbies;
// // here hobbies1=hobbies[0]
// // here hobbies2=hobbies[2] 
// //  all other array element of hobbies stored in ...remaninghobbies
// //it will reduce our work
// console.log(hobbies,hobbies1,hobbies2);//['playing', 'dancing', 'cooking', 'swiming', 'singing'] 'playing' 'dancing
// const Person={
//     firstName:'Akshay',
//     age:"27",
//     AadharCard:"12232836"
// }
// const {firstName:username,age}=Person
// console.log(username);//Akshay
// //person information stored in array , we can just fetch it according to need
