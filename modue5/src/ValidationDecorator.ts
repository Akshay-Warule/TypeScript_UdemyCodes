class Course{

    title:string;
    price:number;

    constructor(t:string,p:number){
        this.title=t;
        this.price=p;
    }

}

const courseForm=document.querySelector('form') ! as HTMLFormElement;

courseForm.addEventListener('submit', event=>{

    event.preventDefault();
    const titleEL=document.getElementById('title') as HTMLInputElement;
     
    const priceEL=document.getElementById('price') as HTMLInputElement;

    const title=titleEL.value;
    const price=+priceEL.value;

const createdCourse=new Course(title,price);
console.log(createdCourse);

});