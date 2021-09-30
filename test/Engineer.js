//require Engineer 
const Engineer = require("../lib/Engineer");

// for consistancy, the properties being tested will have these defaults values:

// name = "Groovy Tom" (string)
// id = 27001 (number)
// email = "groovy@gmail.com" (string)
// github = "groovytom13" (string)
// getGithub() (returns github aka "groovytom13") (string)
// getRole (returns "Engineer") (string)
//--------------------------------------------------------------------------------

test("create github method prop on Engineer subclass", () => {
    const githubTest = "groovytom13";
    const engineerTest = new Engineer("Groovy Tom", 27001, "groovy@gmail.com", githubTest)
    expect(engineerTest.github).toEqual(githubTest);
});

test("set getRole() method prop on new engineer class", () => {
    const getRoleTest = "Engineer";
    const engineerTest = new Engineer("Groovy Tom", 27001, "groovy@gmail.com", getRoleTest);
    expect(engineerTest.getRole()).toBe(getRoleTest);
});

test("set getGithub() method prop on new engineer class", () => {
    const getGithubTest = "groovytom13";
    const engineerTest = new Engineer("Groovy Tom", 27001, "groovy@gmail.com", getGithubTest);
    expect(engineerTest.getGithub()).toBe(getGithubTest);
});