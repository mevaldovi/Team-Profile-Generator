const Employee = require("../lib/Employee");

test("create a new employee class", () => {
    const employeeTest = new Employee();
    expect(typeof(employeeTest)).toBe("object");
});

test("set name prop on new employee class", () => {
    const nameTest = "Groovy Tom";
    const employeeTest = new Employee(nameTest);
    expect(employeeTest.name).toBe(nameTest);
});

test("set id prop on new employee class", () => {
    const idTest = 27;
    const employeeTest = new Employee("Groovy Tom", idTest);
    expect(employeeTest.id).toBe(idTest);
});

test("set email prop on new employee class", () => {
    const emailTest = "groovyTom@gmail.com";
    const employeeTest = new Employee("Groovy Tom", 1, emailTest);
    expect(employeeTest.email).toBe(emailTest);
});

test("set getName() method prop on new employee class", () => {
    const getNameTest = "Groovy Tom";
    const employeeTest = new Employee(getNameTest);
    expect(employeeTest.getName()).toBe(getNameTest);
});

test("set getId() method prop on new employee class", () => {
    const getIdTest = 27001;
    const employeeTest = new Employee("Groovy Tom", getIdTest);
    expect(employeeTest.getId()).toBe(getIdTest);
});

test("set getEmail() method prop on new employee class", () => {
    const getEmailTest = "groovyTom@gmail.com";
    const employeeTest = new Employee("Groovy Tom", 27001, getEmailTest);
    expect(employeeTest.getEmail()).toBe(getEmailTest);
});

test("set getRole() method prop on new employee class", () => {
    const getRoleTest = "Employee";
    const employeeTest = new Employee("Groovy Tom", 27001, "groovyTom@gmail.com", getRoleTest);
    expect(employeeTest.getRole()).toBe(getRoleTest);
});