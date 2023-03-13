
function Logger(logstring:string){
    return function(constructor:Function){

        console.log(logstring);
        console.log(constructor);

    }
   

}

function withTemplate(template:string,hookId:string)
{
    console.log("Template Factory");
    return function<T extends{new (...args:any[]):{name:string}}>(originalConstructor:T)
    { return class extends originalConstructor{
        constructor(..._:any[]){
            super();
            console.log('rendering template ')

        const hookEl=document.getElementById(hookId);
    
    // below in @withTemplate we use app as id in index.html and this id used as hookid here 

    if(hookEl){
        hookEl.innerHTML=template;
        hookEl.querySelector('h1')!.textContent=this.name;// max
    }

        }
    }



    
}
}


// logging decorator get call first befor ctor of class is being call

//here two decorator used and they follow bottom up approach means first withTemplate get excuted 
//and then Logger get excuted 

// @Logger("Logging-peson")
@Logger("In the logger")
@withTemplate('<h1>My person Object</h1>','app')
class Person{
    name='max';

    constructor(){
        console.log("creating person object")
    }
}

const p=new Person();
console.log(p);


// last output  
//here two decorator used and they follow bottom up approach means first withTemplate get excuted 
//and then Logger get excuted 

// rendering template 
// creating person object
// In the logger


//*************** */

// property  decorator
// here we add decorator log on property title ,
//
function Log(target:any,propertyName:string | symbol){

    console.log("property decorator");
    console.log(target,propertyName);
    //in output we get class Product and title as propertyName


}
function Log2(target:any,name:string,descriptior:PropertyDescriptor)
{
    console.log("Accesoor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptior);

}

function Log3(target:any,name:string| symbol,descriptior:PropertyDescriptor){

    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptior);
}

//Log4 is parameter decorator
function Log4(target:any,name:string|symbol,position:number){

    console.log("Parameter  decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}



class Product{
     @Log // property decorator
    title:string;
    private _price:number;

    constructor(t:string,p:number){
        this.title=t;
        this._price=p;
    }
     @Log2
    set price(val:number){
        if(val>0)
        this._price=val;

        else
        throw new Error("Value should greater than 0");

    }
    @Log3
    getPriceWithTac(@Log4 tax:number){
        return this._price*(1 + tax);
    }

    
}



const p1=new Product('Book',19);
const p2= new Product('Book 2',29);











//out put
// property decorator
// {constructor: ƒ, getPriceWithTac: ƒ}

// Accesoor decorator
// {constructor: ƒ, getPriceWithTac: ƒ}
// price

// Parameter  decorator
// {constructor: ƒ, getPriceWithTac: ƒ}
// getPriceWithTac
//0   // this is intial value

// Method decorator
// {constructor: ƒ, getPriceWithTac: ƒ}
// getPriceWithTac



