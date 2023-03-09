"use strict";
class Department1 {
    constructor(id1, n) {
        this.employees = [];
        this.name = n;
        this.id = id1;
    }
    describe() {
        console.log("department name=" + this.name + " " + this.id);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department1 {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
}
const it = new ITDepartment(16, ['max']);
console.log(it); //ITDepartment {employees: Array(0), name: 'IT', id: 16, admins: Array(1)}
it.addEmployee("swapnil");
it.addEmployee("kiran");
it.describe(); //department name=IT 16
class AccountingDepartment extends Department1 {
    constructor(id, repotes) {
        super(id, 'Accounting');
        this.repotes = repotes;
        this.repotes = repotes;
    }
    addNewReport(text) {
        this.repotes.push(text);
    }
    getRepotes() {
        console.log(this.repotes);
    }
}
const A1 = new AccountingDepartment(1234, ["this is silly mistake done by me"]);
A1.addEmployee("pallavi");
console.log(A1);
A1.addNewReport("This is second mistake");
A1.getRepotes(); //(2) ['this is silly mistake done by me', 'This is second mistake']