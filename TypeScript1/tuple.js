var person1 = {
    name: "Akshay",
    id: 2,
    hobbies: ['sports', 'reading', 'playing'],
    role: [3, 'Author']
};
console.log(person1); //
person1.role.push("Admin"); //here typscript fail , without id admin get added
console.log(person1);
person1.role = [4, "agent"];
console.log(person1);
//
