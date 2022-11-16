// employee constructor that classifies name, id and email
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }
// return a name based on user's input 
getName () {
    return this.name;
}

// return ID based on user's input
getId () {
    return this.id;
}

 // return email based on user's input
 getEmail () {
    return this.email;
}

// return employee type based on user's input
getRole () {
    return 'Employee'; 
}
};

// set module.export equal to employee
module.exports = Employee; 