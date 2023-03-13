"use strict";
var _a;
const e1 = {
    name: 'Ajay',
    privilage: ['Creat Account'],
    startDate: new Date()
};
console.log(e1); //Object
function printEmpInfo(emp) {
    if ('privilage' in emp) {
        console.log('show privalage  ' + emp.privilage);
    }
    if ('startDate' in emp)
        console.log('Date is =' + emp.startDate);
}
printEmpInfo(e1); //show privalage  Creat Account
//Date is =Fri Mar 10 2023 11:31:55 GMT+0530 (India Standard Time)
printEmpInfo({ name: 'manu', startDate: new Date() }); //Date is =Fri Mar 10 2023 11:34:28 GMT+0530 (India Standard Time)           
class Car {
    drive() {
        console.log("driving car");
    }
}
;
class Truck {
    drive() {
        console.log("driving truck");
    }
    loadCargo(amonut) {
        console.log("loading cargp " + amonut);
    }
}
;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(veh) {
    if (veh instanceof Car) {
        veh.drive();
    }
    if (veh instanceof Truck) {
        //console.log(" i am.......... "+veh.loadCargo) 
        veh.loadCargo(12334);
    }
}
useVehicle(v1); //driving car
useVehicle(v2); //loading cargp 12334
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('moving speed ' + animal.type + "  " + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 343 }); //moving speed bird  343
//Data Type Castng
//  const userInputElement=<HTMLInputElement>document.getElementById("pid")!;
const userInputElement = document.getElementById("p12");
console.log(userInputElement);
userInputElement.innerText = "hello my friend";
const errorBag = {
    email: "Not valid email",
    username: 'Must enter captial first letter',
    //
};
// type student={
//     id:number;
// }
// type flag= typeof student[number];
//? Optional Channing
const fetchUserData = {
    id: '12',
    name: 'Amit',
    job: { title: 'CEO', description: 'My own Company' }
};
console.log(fetchUserData.job.description); //My own Company
console.log(fetchUserData.job && fetchUserData.job.description); //My own Company
// first check job exist, and then check description
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title); //CEO
//Nullish Coalecing
// if data type is other than undefine and 
//null then print is like empty string
const userInput = undefined;
const storeData = userInput !== null && userInput !== void 0 ? userInput : 'Defualt';
console.log(storeData); //Defualt
const userInput1 = " ";
const storeData1 = userInput1 !== null && userInput1 !== void 0 ? userInput1 : 'Defualt';
console.log(storeData1); //      empty string here 
