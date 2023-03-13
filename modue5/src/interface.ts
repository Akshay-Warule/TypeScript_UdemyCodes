


interface i1{
    username ?:string;//optional parameter

}
interface greetMethod{

    greet(phrase:string):void
}

class person implements i1,greetMethod
{
    username ?: string;//optional
    age=30;
constructor(n?:string)
{
    if(n){
        this.username=n;
    }
    


}

    greet(phrase:string)
    {
        if(this.username)
console.log(phrase+"  "+this.username)
else
console.log("hi");
    }
}

let u1=new person();
u1.greet("welcome");//hi

let u2=new person("Akshay");
u2.greet("welcome")//welcome  Akshay  //because username provide here