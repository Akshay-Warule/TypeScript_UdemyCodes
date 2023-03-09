const person1:{

    name:string,
    id:number,
    hobbies:string[],
    role:[number,string];
}={
    name:"Akshay",
    id:2,
    hobbies:['sports','reading','playing'],
    role:[3,'Author']
};

console.log(person1);//
person1.role.push("Admin");//here typscript fail , without id admin get added
console.log(person1);
person1.role.push(4,"agent")
console.log(person1);

//
