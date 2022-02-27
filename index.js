const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const writeFile = require('./utils/generate-site.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager');
const team = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the manager's name",
        },
        {
            type: 'input',
            name: 'empId',
            message: "Please enter the manager's employee Id"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email address"
        },
        {
            type: 'input',
            name: 'office',
            message: "Please enter the manager's office number"
        }
    ])
    .then((response) => {
        team.push(new Manager(response.name, response.empId, response.email, response.office));
    });
};

const promptNext = () => {
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do next?',
        name: 'action',
        choices: ['Add Engineer', 'Add Intern', 'Done Entering Employees']
    })
    .then(({ action }) => {
        if (action ==='Add Engineer') {
            promptEmployee('Engineer');
        } else if (action === 'Add Intern') {
            promptEmployee('Intern');
        } else {
            let teamHTML = generatePage(team);
            writeFile(teamHTML);
        }
    });
};

const promptEmployee = newEmployee => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the " + newEmployee + "'s name"
        },
        {
            type: 'input',
            name: 'empId',
            message: "Please enter the " + newEmployee + "'s employee ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the " + newEmployee + "'s email address"
        }
    ])
    .then((response) => {
        if (newEmployee === 'Engineer') {
            inquirer.prompt({
                type: 'input',
                name: 'github',
                message: "Please enter the Engineer's Github Id"
            })
            .then((engineer) => {
                response["github"] = engineer.github;
                team.push(new Engineer(response.name, response.empId, response.email, response.github));
                promptNext();
            });
        } else {
            inquirer.prompt({
                type: 'input',
                name: 'school',
                message: "Please enter the Intern's school"
            })
            .then((intern) => {
                response["school"] = intern.school;
                team.push(new Intern(response.name, response.empId, response.email, response.school));
                promptNext();
            });
        };
    });
};

promptManager()
    .then(promptNext)
