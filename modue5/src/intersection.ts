type Admin={
    name:string;
    privilage:string [];

};

type Employee={
    name:string;
    startDate:Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee={
    name:'Ajay',
    privilage:['Creat Account'],
    startDate: new Date()
};

console.log(e1)//Object

type UnknownEmp = Admin | Employee

function printEmpInfo(emp:UnknownEmp)
{
    if('privilage' in emp)
    {
        console.log('show privalage  '+emp.privilage)
    }
    if('startDate' in emp)
    console.log('Date is ='+emp.startDate)
}

printEmpInfo(e1)//show privalage  Creat Account
                //Date is =Fri Mar 10 2023 11:31:55 GMT+0530 (India Standard Time)

   printEmpInfo({name:'manu',startDate:new Date()});  //Date is =Fri Mar 10 2023 11:34:28 GMT+0530 (India Standard Time)           


class Car{
    drive()
    {
        console.log("driving car");
    }
};
class Truck{
    drive(){
        console.log("driving truck");
    }

    loadCargo(amonut:number)
    {
        console.log("loading cargp "+amonut)
    }
};

type Vehicle =Car|Truck;

const v1=new Car();
const v2=new Truck();

function useVehicle(veh:Vehicle)
{
 
    
    if( veh instanceof Car)
    {
       veh.drive()
    }
    

    if(veh instanceof Truck)
    {
        //console.log(" i am.......... "+veh.loadCargo) 
        veh.loadCargo(12334);
    }
}

useVehicle(v1);//driving car
useVehicle(v2);//loading cargp 12334

interface Bird{
    type:'bird'
    flyingSpeed:number;
}
interface Horse{
    type:'horse',
    runningSpeed:number
}

type Animal= Bird | Horse


function moveAnimal(animal:Animal){
    let speed;
    switch(animal.type)
{
     case'bird':
     speed=animal.flyingSpeed;
     break;
     
     case 'horse':
        speed=animal.runningSpeed

}
console.log('moving speed '+animal.type+"  "+speed)

}
moveAnimal({type:'bird',flyingSpeed:343})//moving speed bird  343



//Data Type Castng
//  const userInputElement=<HTMLInputElement>document.getElementById("pid")!;
const userInputElement=<HTMLParagraphElement>document.getElementById("p12")!;

console.log(userInputElement);
 userInputElement.innerText="hello my friend"


 
 

 //index properties

 interface ErrorContaine
 {
    //{email:'Not valid email', username:'Must have a valid user name'}
    // i dont know how many property like email have eror and name of that property also dont know
    // for that we uses indexing propety concept

    [prop:string]:string;
    //[property name: value type can be string ,number]: value type of eror
}
const errorBag :ErrorContaine = {
    email:"Not valid email",
  username:'Must enter captial first letter',
    //
};

// type student={
//     id:number;
// }

// type flag= typeof student[number];




//? Optional Channing

const fetchUserData={
    id:'12',
    name:'Amit',
    job:{title:'CEO',description:'My own Company'}
}
console.log(fetchUserData.job.description)//My own Company

console.log(fetchUserData.job && fetchUserData.job.description)//My own Company
// first check job exist, and then check description

console.log(fetchUserData?.job?.title)//CEO



//Nullish Coalecing

// if data type is other than undefine and 
//null then print is like empty string

const userInput=undefined;
const storeData =userInput ?? 'Defualt';

console.log(storeData);//Defualt


const userInput1=" ";
const storeData1 =userInput1 ?? 'Defualt';

console.log(storeData1);//      empty string here 



