"use strict";
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEL = document.getElementById('title');
    const priceEL = document.getElementById('price');
    const title = titleEL.value;
    const price = +priceEL.value;
    const createdCourse = new Course(title, price);
    console.log(createdCourse);
});
