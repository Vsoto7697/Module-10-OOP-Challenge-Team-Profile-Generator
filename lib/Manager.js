// importing Employee constructor via Employee.js
const Employee = require("./Employee");

//class Manager extends Employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // 
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // override employee's role to manager.
    getRole() {
        return "Manager";
    }
}

// use module to export manager
module.exports = Manager;