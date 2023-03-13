abstract class Department1{
    name:string;
    private id:number;
    private employees:string[]=[];



    constructor( id1:number,n:string)
    {
        this.name=n;
        this.id=id1;

    }
    describe(this:Department1)
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
    abstract show(this:Department1):void;
}

class ITDepartment extends Department1{
    
    constructor(id:number, public admins:string[]){
  super(id,'IT')
  this.admins=admins;
    }
    show(this: Department1): void {
        console.log("in it dept")
    }

}

const it=new ITDepartment(16,['max']);

console.log(it);//ITDepartment {employees: Array(0), name: 'IT', id: 16, admins: Array(1)}
it.addEmployee("swapnil");
it.addEmployee("kiran")

it.describe();//department name=IT 16
it.show();//in it dept

class AccountingDepartment extends Department1
{
    public static MarkList=676;
    private lastreport:string;
    constructor(id:number,public repotes:string[]){
        super(id,'Accounting')

        this.repotes=repotes;
        this.lastreport=repotes[0];

    }

   get  MostRecentReport()
    {
        if(this.lastreport){
        return this.lastreport;
          }
         else throw new Error("No Report found")
    }
    set MostRecentReport(value)
    {
        if(!value){
            throw new Error("enter a value in report")
        }
         this.addNewReport(value);
    }

    addNewReport(text:string)
    {
        this.repotes.push(text);
    }

    getRepotes()
    {
        console.log(this.repotes);
    }
    show(this: Department1): void {
        console.log("in accountin dept")
    }

}

const A1=new AccountingDepartment(1234,["this is silly mistake done by me"]);

//A1.MostRecentReport="";//setter  //inheritance.js:47 Uncaught Error: enter a value in report // no value given only empty string is given

A1.addEmployee("pallavi")
console.log(A1);

A1.addNewReport("This is second mistake");
A1.getRepotes();//(2) ['this is silly mistake done by me', 'This is second mistake']

console.log(A1.MostRecentReport)//getter //this is silly mistake done by me

A1.MostRecentReport="this mistake done by akshay"
//this is silly mistake done by me is replace by

console.log(AccountingDepartment.MarkList);//676
A1.show();//abstract method//in accountin dept