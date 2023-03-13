"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logstring) {
    return function (constructor) {
        console.log(logstring);
        console.log(constructor);
    };
}
function withTemplate(template, hookId) {
    console.log("Template Factory");
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log('rendering template ');
                const hookEl = document.getElementById(hookId);
                // below in @withTemplate we use app as id in index.html and this id used as hookid here 
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name; // max
                }
            }
        };
    };
}
// logging decorator get call first befor ctor of class is being call
//here two decorator used and they follow bottom up approach means first withTemplate get excuted 
//and then Logger get excuted 
// @Logger("Logging-peson")
let Person = class Person {
    constructor() {
        this.name = 'max';
        console.log("creating person object");
    }
};
Person = __decorate([
    Logger("In the logger"),
    withTemplate('<h1>My person Object</h1>', 'app')
], Person);
const p = new Person();
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
function Log(target, propertyName) {
    console.log("property decorator");
    console.log(target, propertyName);
    //in output we get class Product and title as propertyName
}
function Log2(target, name, descriptior) {
    console.log("Accesoor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptior);
}
function Log3(target, name, descriptior) {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptior);
}
//Log4 is parameter decorator
function Log4(target, name, position) {
    console.log("Parameter  decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0)
            this._price = val;
        else
            throw new Error("Value should greater than 0");
    }
    getPriceWithTac(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log // property decorator
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTac", null);
const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);
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
