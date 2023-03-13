"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Autobind(t_, _2, descriptior) {
    const originalMethod = descriptior.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
            //here  is the autobind
            // here this is original object is taken .not event Listner object
        }
    };
}
class Printer {
    constructor() {
        this.message = "This Workes";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p11 = new Printer(); //This Workes
const button = document.querySelector('button');
button.addEventListener('click', p11.showMessage.bind(p11));
// here we require bind method because if use this then it take eventListner this 
//to solve this problem we use autobind 
