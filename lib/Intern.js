//require Intern
const Intern = require("../lib/Intern");

// for consistancy, the properties being tested will have these defaults values:

// name = "Groovy Tom" (string)
// id = 27001 (number)
// email = "groovy@gmail.com" (string)
// school = "UT Austin" (string)
// getSchool() (returns school aka "UT Austin")(string)
// getRole (returns "Intern") (string)
//--------------------------------------------------------------------------------

test("create school method prop on Intern subclass", () => {
    const schoolTest = "UT Austin";
    const internTest = new Intern("Groovy Tom", 27001, "groovy@gmail.com", schoolTest)
    expect(internTest.school).toEqual(schoolTest);
});

test("set getRole() method prop on new intern class", () => {
    const getRoleTest = "Intern";
    const internTest = new Intern("Groovy Tom", 27001, "groovy@gmail.com", getRoleTest);
    expect(internTest.getRole()).toBe(getRoleTest);
});

test("set getSchool() method prop on new intern class", () => {
    const getSchoolTest = "UT Austin";
    const internTest = new Intern("Groovy Tom", 27001, "groovy@gmail.com", getSchoolTest);
    expect(internTest.getSchool()).toBe(getSchoolTest);
});