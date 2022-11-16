// Engineer constructor used to linke engineer.js
const Engineer = require("../lib/Engineer");

test("Can establish a github.", () => {
    const testGithub = "Vsoto7697";
    const employeeInstance = new Engineer("Victor", 2, "Vsoto7697@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

//GetGithub will return github when tested.
test("GetGithub will return github when tested..", () => {
    const testGithub = "Vsoto7697";
    const employeeInstance = new Engineer("Victor", 2, "Vsoto7697@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

// role testing to return value of engneer
test("role Testing .", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Victor", 2, "Vsoto7697@gmail.com", "Vsoto7697");
    expect(employeeInstance.getRole()).toBe(returnValue);
});