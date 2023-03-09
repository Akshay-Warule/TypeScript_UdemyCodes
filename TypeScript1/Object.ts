// const person:{
// name:string;
// id:number
// }={

//     name:"Akshay",
//     id:1
// }
// console.log(person.name);



const person={
    name:'Akshay',
    age:28,
    hobbies:['Sportes','Cooking','News Paper Reading']
}

let MyActivity:string[]
MyActivity=['playing','singing','dancing'];

// for(const h1 of person.hobbies)
// {
//     console.log(h1.toUpperCase());
// }
for(let i =0;i<person.hobbies.length;i++)
{
    console.log(person.hobbies[i]);
}