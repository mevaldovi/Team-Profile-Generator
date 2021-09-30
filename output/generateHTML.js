// manager card
const createManager = function(manager) {
    return `<div class="card border-dark mb-3 col-4" style="max-width: 18rem;">
    <div class="card-header"><h2>Manager</h2></div>
    <div class="card-body text-dark">
    <h5 class="card-title">Manager: ${manager.name}</h5>
    <p class="card-text">employee id: ${manager.id}</p>
    <a href="mailto:${manager.email}">email: ${manager.email}</a>
    <p>extension number: ${manager.officeNumber}</p>
    </div>
</div>`
}

// engineer card

const createEngineer = function(engineer) {
    return `<div class="card border-dark mb-3 col-4" style="max-width: 18rem;">
    <div class="card-header"><h2>Engineer</h2></div>
    <div class="card-body text-dark">
    <h5 class="card-title">Engineer: ${engineer.name}</h5>
    <p class="card-text">employee id: ${engineer.id}</p>
    <a href="mailto:${engineer.email}">email: ${engineer.email}</a><br>
    <a href="https://github.com/${engineer.github}">github: ${engineer.github}</a>
    </div>
</div>`
}

// intern card

const createIntern = function(intern) {
    return `<div class="card border-dark mb-3 col-4" style="max-width: 18rem;">
    <div class="card-header"><h2>Intern</h2></div>
    <div class="card-body text-dark">
    <h5 class="card-title">Intern: ${intern.name}</h5>
    <p class="card-text">employee id: ${intern.id}</p>
    <a href="mailto:${intern.email}">email: ${intern.email}</a>
    <p>school affiliation: ${intern.school}</p>
    </div>
</div>`
}


//create function that organizes information for the team and returns html for each type of team member inside a html template
function generateHTML(team) {

    const managerArray = [];
    const internArray = [];
    const engineerArray = [];

    for (let i = 0; i < team.length; i++) {
        let employee = team[i];
        let role = employee.getRole();

        switch (role) {
            case "Manager":
                managerArray.push(createManager(employee))
                break;

            case "Intern":
                internArray.push(createIntern(employee))
                break;

            case "Engineer":
                engineerArray.push(createEngineer(employee))
                break;
        }
    }

    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./utils/styles.css"/>    
    <title>Employees</title>
</head>
<body>
<header>
<h1>Smoosh & Groovy</h1>
<h2>"bringin it together and makin it awesome..."</h2>
<hr>
</header>
<main>
<section class="row">
    ${managerArray.join()}
    ${engineerArray.join()}
    
    ${internArray.join()} 
</section>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>`
}

module.exports = generateHTML;