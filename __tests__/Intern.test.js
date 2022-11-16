// Engineer constructor used to link intern.js
const Intern = require("../lib/Intern");

// create school name
test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Victor", 2, "Vsoto7697@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

//The office number obtained from testing officeNumber
test("The office number obtained from testing officeNumber.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Victor", 2, "Vsoto7697@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

//// role testing to return value of Intern
test("role Testing .", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Victor", 2, "Vsoto7697@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});