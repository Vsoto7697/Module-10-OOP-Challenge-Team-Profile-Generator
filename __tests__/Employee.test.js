// uses employee constructor 
const Employee = require("../lib/Employee");

// creates employee object 
test("creates an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

// testing name
test("Testing name.", () => {
    const name = "Victor";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

//testing ID
test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Victor", id);
    expect(employeeInstance.id).toBe(id);
})

//testing email
test("Testing email.", () => {
    const email = "Vsoto7697@gmail.com";
    const employeeInstance = new Employee("Victor", 2, email);
    expect(employeeInstance.email).toBe(email);
})

//use getname method in order to get name through
test("Uses getName method to get name through.", () => {
    const testName = "Victor";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

// uses getID in order to pass through test ID
test("uses getID in order to pass through test ID.", () => {
    const testID = 2;
    const employeeInstance = new Employee("Victor", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

// uses getEmail method in order to pass through test Email
test("uses getEmail method in order to pass through test Email.", () => {
    const testEmail = "Vsoto7697@gmail.com";
    const employeeInstance = new Employee("Victor", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

// uses role testing to return the value employee with an instance that returns first name and email
test("role Testing.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Victor", 2, "Vsoto7697@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})