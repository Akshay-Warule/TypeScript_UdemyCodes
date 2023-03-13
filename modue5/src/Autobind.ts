function Autobind(t_:any,_2:string,descriptior:PropertyDescriptor){

    const originalMethod=descriptior.value;
    const adjDescriptor:PropertyDescriptor={

        configurable:true,
        enumerable:false,

        get(){
        const boundFn=  originalMethod.bind(this);
        return boundFn;
        //here  is the autobind
        // here this is original object is taken .not event Listner object
        }

    }

}

class Printer{
message="This Workes";

@Autobind
showMessage(){
    console.log(this.message);
}

}

const p11=new Printer();//This Workes


const button=document.querySelector('button')!;

button.addEventListener('click',p11.showMessage.bind(p11));
// here we require bind method because if use this then it take eventListner this 
//to solve this problem we use autobind 