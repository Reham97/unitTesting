log = console.log
expect = require('chai').expect
should = require('chai').should()
_ = require('lodash')

const { Employee,Developer,Manager, } = require('./index')

var emp = new Employee();
var dev = new Developer();
var mang = new Manager();
var newEmp = new Employee('reham','hussein',8000);

describe('#basic mocha chai', () => {
    it('should be true', () => {
        true.should.be.true;
    })
})

describe('#Employee', () => {
    it('when firstName and lastName change fullname function will return correct fullName', () => {
        emp.firstName="reham"
        emp.lastName="hussein"
        emp.getFullName().should.equal("reham hussein");
    })
    it('when firstName and lastName change getEmail function will return correct email', () => {
        emp.firstName="reham"
        emp.lastName="hussein"
        emp.getEmail().should.equal("reham.hussein@company.com");
    })
});

describe('#Developer', () => {
    it('when user apply raise for Developer his salary increases by his raise amount', () => {
        // dev.raiseAmount = 1.10
        dev.salary = 7000
        dev.applyRaise()
        Math.round(dev.salary).should.equal(7700);
    })
});

describe('#Manger', () => {
    it('when user apply raise for Manager his salary increases by his raise amount', () => {
        // mang.raiseAmount = 1.20
        mang.salary = 7000
        mang.applyRaise()
        Math.round(mang.salary).should.equal(8400);
    })

    it('add employee function works correctly',()=>{
        var oldEmpList = mang.employees.length
        mang.addEmployee(newEmp)
        mang.employees.length.should.equal(oldEmpList+1)
    })
    it('delete employee function works correctly',()=>{
        var oldEmpList = mang.employees.length
        mang.removeEmployee(newEmp)
        mang.employees.length.should.equal(oldEmpList-1)
    })
});
