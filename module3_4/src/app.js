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
var hobbies = ['playing', 'dancing', 'cooking'];
var activity = ['hiking'];
// activity.push(hobbies);//give eror
activity.push.apply(activity, hobbies); //o.k
// for(let data in activity)
// {
// console.log(data);
// }
for (var i = 0; i < 5; i++) {
    console.log(activity[i]);
}
