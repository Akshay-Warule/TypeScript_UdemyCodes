class Department{
    name:string;
    private id:number;
    private employees:string[]=[];



    constructor( id1:number,n:string)
    {
        this.name=n;
        this.id=id1;

    }
    describe(this:Department)
    {
        console.log("department name="+this.name+" "+this.id)
    }
    addEmployee(employee:string)
    {
        this.employees.push(employee);
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting=new Department(11,"Accounting");



console.log(accounting);//Department {name: 'Accounting'}  //object 
accounting.describe();//department name=Accounting

// const accountingCopy={name:'s',describe:accounting.describe}
// accountingCopy.describe();//department name=s
// //department name=undefined if name is not define because in describe method we use this.department


accounting.addEmployee("max");
accounting.addEmployee("Simran")

//accounting.employees[2]="jagdish"// this is happen if member are public // if employees[] is private then error TS2341: Property 'employees' is private and only accessible within class 'Department'.

accounting.printEmployeeInformation();



