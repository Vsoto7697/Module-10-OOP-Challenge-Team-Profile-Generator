// importing Employee constructor via Employee.js
const Employee = require("./Employee");

// employee constructor is extended by engineer constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    // return github via input
    getGithub() {
        return this.github;
    }
    //engineer role overrides employee role
    getRole() {
        return "Engineer";
    }

}
// use module to export Engineer
module.exports = Engineer;