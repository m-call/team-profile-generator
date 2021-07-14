// Importing the necessary files and setting them to a const variable
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Creating an object that will store arrays for each type of team member
const team = {
    manager: [],
    engineers: [],
    interns: []
}

// Displaying the welcome message to the user
console.log('Please build your team');

// The initial questions that the user will be asked to input the manager
// and at the end will ask if they want to add another team member
const initialQuestions = [

    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName'
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'managerId'
    },
    {
        type: 'input',
        message: "What is the team manager's e-mail?",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerOffice'
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'teamMember',
        choices: ['Engineer', 'Intern', "I don't want to add anymore team members"]
    }
    
];

// The questions that the user will be asked if they choose to add an engineer
// and at the end will ask if they want to add another team member
const engineerQuestions = [

    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'engineerName'
    },
    {
        type: 'input',
        message: "What is your engineer's id?",
        name: 'engineerId'
    },
    {
        type: 'input',
        message: "What is your engineer's e-mail?",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub username?",
        name: 'engineerGithub'
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'teamMember',
        choices: ['Engineer', 'Intern', "I don't want to add anymore team members"]
    }

]

// The questions that the user will be asked if they choose to add an intern
// and at the end will ask if they want to add another team member
const internQuestions = [

    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'internName'
    },
    {
        type: 'input',
        message: "What is your intern's id?",
        name: 'internId'
    },
    {
        type: 'input',
        message: "What is your intern's e-mail?",
        name: 'internEmail'
    },
    {
        type: 'input',
        message: "What is your intern's school?",
        name: 'internSchool'
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'teamMember',
        choices: ['Engineer', 'Intern', "I don't want to add anymore team members"]
    }

]

// The base HTML that will be created once the user is done building their team
const createHTML = (res) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Team Profile</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hi! My name is ${res.internName}</h1>
        <p class="lead">I am from ${res.engineerId}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My GitHub username is ${res.managerEmail}</li>
          <li class="list-group-item">LinkedIn: ${res.teamMember}</li>
        </ul>
      </div>
    </div>
    </body>
    </html>`;

// This function is the initialization of the application
// It will first prompt the user with the initial questions about creating a manager team member
// After that it will use the user's input values to create a new team manager object from the manager class
// The object is then pushed into the manager array inside of the team object
// Then, it will run another function based on whether the user is done building their team or not
function init() {

    inquirer.prompt(initialQuestions)
    .then((res) => {

        let teamManager = new Manager(res.managerName, res.managerId, res.managerEmail, res.managerOffice);
        team.manager.push(teamManager);

        if (res.teamMember == 'Engineer') {
            engineerPrompt();
        } else if (res.teamMember == 'Intern') {
            internPrompt();
        } else {
            generateHTML();
        }
    })

}

// This function prompts the user with the engineer questions
// After that it will use the user's input values to create a new team engineer object from the engineer class
// The object is then pushed into the engineer array inside of the team object
// Then, it will run another function based on whether the user is done building their team or not
function engineerPrompt() {

    inquirer.prompt(engineerQuestions)
    .then((res) => {

        let teamEngineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.engineerGithub);
        team.engineers.push(teamEngineer);

        if (res.teamMember == 'Intern') {
            internPrompt();
        } else if (res.teamMember == 'Engineer') {
            engineerPrompt();
        } else {
            generateHTML();
        }
    })

}

// This function prompts the user with the intern questions
// After that it will use the user's input values to create a new team intern object from the intern class
// The object is then pushed into the intern array inside of the team object
// Then, it will run another function based on whether the user is done building their team or not
function internPrompt() {

    inquirer.prompt(internQuestions)
    .then((res) => {

        let teamIntern = new Intern(res.internName, res.internId, res.internEmail, res.internSchool);
        team.interns.push(teamIntern);

        if (res.teamMember == "I don't want to add anymore team members") {
            generateHTML();
        } else if (res.teamMember == 'Engineer') {
            internPrompt();
        } else {
            engineerPrompt();
        }
    })

}

function generateHTML (res) {
    fs.writeFile('./dist/index.html', createHTML(res));
    console.log('create html');
}

init();