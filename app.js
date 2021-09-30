// node packages aka dependencies being imported from package.json
const fs = require('fs');
const inquirer = require('inquirer');

// child class constructor functions being inported from these 3 files
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// generateHTML function being inported from this file
const generateHTML = require('./utils/generateHTML');



// empty array that will hold all objects created by the prompt questions [{manager},{engineer},{intern}]
// this is global so that this info can be referenced for creating the custom html cards and then html template file with that info
const team = [];

// since only a manager can make these cards, we start with that one and then that mgr can make the other two below
// this function returns an object with specific data outputted by the prompt questions (like an input form)
function newManager() {
    inquirer
        .prompt([{
                type: 'input',
                message: "Enter manager's name",
                name: 'name'
            },
            {
                type: 'input',
                message: "Enter manager's employee ID",
                name: 'employee'
            },
            {
                type: 'input',
                message: "Enter manager's email address",
                name: 'email'
            },
            {
                type: 'input',
                message: "Enter manager's office extension",
                name: 'office'
            },
        ])
        //
        .then((response) => {
            let name = response.name;
            let id = response.employee;
            let email = response.email;
            let office = response.office;

            let manager = new Manager(name, id, email, office);
            team.push(manager);
            newEmployee();
        })
}

function newEmployee() {
    inquirer
        .prompt([{
                type: 'list',
                name: 'role',
                message: 'Is new Employee an Engineer or Intern?',
                choices: ['Engineer', 'Intern']
            }, {
                type: 'input',
                name: "github",
                message: "Enter employee's github username",
                when: (answers) => answers.role === 'Engineer'
            },
            {
                type: 'input',
                name: "school",
                message: "Enter employee's school",
                when: (answers) => answers.role === 'Intern'
            },
            {
                type: 'input',
                message: "Enter employee's name",
                name: 'name'
            },
            {
                type: 'input',
                message: "Enter employee's ID",
                name: 'employee'
            },
            {
                type: 'input',
                message: "Enter employee's email address",
                name: 'email'
            },
            {
                type: 'confirm',
                message: "Would you like to add another employee?",
                name: "add"
            }
        ])
        .then((response) => {
            console.log(response)
            let name = response.name;
            let id = response.employee;
            let email = response.email;

            if (response.role == "Intern") {
                let school = response.school;
                let intern = new Intern(name, id, email, school);
                team.push(intern);

            } else if (response.role == "Engineer") {
                let github = response.github;
                let engineer = new Engineer(name, id, email, github);
                team.push(engineer);
            }
            console.log(team)

            if (response.add == true) { newEmployee(); } else { createHTML(); }
        })
}

const createHTML = () => {
    fs.writeFile("test.html", generateHTML(team), (err) => {
        err ? console.log("Error! file not created") : console.log("success! file created")
    })
}

newManager();