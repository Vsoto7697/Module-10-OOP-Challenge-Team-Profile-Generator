// Engineer constructor used to link Manager.js
const Manager = require("../lib/Manager");

// Can generate an office number
test("Can generate an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Victor", 2, "Vsoto7697@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

//The office number obtained from testing officeNumber
test("The office number obtained from testing officeNumber.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Victor", 2, "Vsoto7697@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

// role testing
test("role Testing .", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Victor", 2, "Vsoto7697@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});