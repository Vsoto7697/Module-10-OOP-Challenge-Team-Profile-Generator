// importing Employee constructor via Employee.js
const Employee = require("./Employee");

// Employee constructor extends internship
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;        
    }
    // via input, return school
    getSchool() {
        return this.school;
    }

    // override intern's role as an employee.
    getRole () {
        return "Intern"
    }
}

// use module to export intern
module.exports = Intern;