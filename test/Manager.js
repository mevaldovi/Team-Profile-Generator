//require Manager 
const Manager = require("../lib/Manager");

// for consistancy, the properties being tested will have these defaults values:

// name = "Groovy Tom" (string)
// id = 27001 (number)
// email = "groovy@gmail.com" (string)
// officeNumber = 13 (number)
// getOfficeNumber() (returns officeNumber aka 13) (number)
// getRole (returns "Manager") (string)
//--------------------------------------------------------------------------------

test("create officeNumber method prop on Manager subclass", () => {
    const officeNumberTest = 13;
    const managerTest = new Manager("Groovy Tom", 27001, "groovy@gmail.com", officeNumberTest)
    expect(managerTest.officeNumber).toEqual(officeNumberTest);
});

test("set getRole() method prop on new manager class", () => {
    const getRoleTest = "Manager";
    const managerTest = new Manager("Groovy Tom", 27001, "groovy@gmail.com", getRoleTest);
    expect(managerTest.getRole()).toBe(getRoleTest);
});

test("set getOfficeNumber() method prop on new manager class", () => {
    const getOfficeNumberTest = 13;
    const managerTest = new Manager("Groovy Tom", 27001, "groovy@gmail.com", getOfficeNumberTest);
    expect(managerTest.getOfficeNumber()).toBe(getOfficeNumberTest);
});