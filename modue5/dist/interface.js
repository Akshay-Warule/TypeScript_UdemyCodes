"use strict";
class person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.username = n;
        }
    }
    greet(phrase) {
        if (this.username)
            console.log(phrase + "  " + this.username);
        else
            console.log("hi");
    }
}
let u1 = new person();
u1.greet("welcome"); //hi
let u2 = new person("Akshay");
u2.greet("welcome"); //welcome  Akshay  //because username provide here
