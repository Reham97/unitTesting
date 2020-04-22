const assert = require('assert');

class Employee {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  getEmail() {
    return `${this.firstName}.${this.lastName}@company.com`;
  }

  applyRaise() {
    this.salary *= this.raiseAmount;
  }

}

Employee.prototype.raiseAmount = 1.04;

class Manager extends Employee {
  constructor(firstName, lastName, salary, employees = []) {
    super(firstName, lastName, salary);
    this.raiseAmount = 1.20;
    this.employees = employees;
  }

  addEmployee(employee) {
    this.employees.push(employee);
    return this.employees;
  }

  removeEmployee(employee) {
    this.employees = this.employees.filter(emp => emp.getEmail() !== employee.getEmail());
    return this.employees;
  }

  printEmployees() {
    for (let emp in this.employees) {
      print(`== Fullname: ${emp.getFullName()}`);
      print(`== Email: ${emp.getEmail()}`);
    }
  }

}

class Developer extends Employee {
  constructor(firstName, lastName, salary, progLang = "JS") {
    super(firstName, lastName, salary);
    this.progLang = progLang
    this.raiseAmount = 1.10;
  }
}

module.exports = { 
    Employee, 
    Developer,
    Manager,
}


// test case confirms when firstName and lastName change fullname function will return correct fullName

// test case confirms when firstName and lastName change getEmail function will return correct email

// test case confirms when user apply raise for Developer his salary increases by his raise amount

// test case confirms when user apply raise for Manager his salary increases by his raise amount

// test case confirms add employee function works correctly 

// test case confirms delete employee function works correctly 