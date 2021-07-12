// Importing the necessary files and setting them to a const variable
const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');

console.log('Please build your team');
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

function init() {

    inquirer.prompt(initialQuestions)
    .then((res) => {
        if (res.teamMember == 'Engineer') {
            engineerPrompt();
        } else if (res.teamMember == 'Intern') {
            internPrompt();
        } else {
            generateHTML();
        }
    })
}

function engineerPrompt() {
    
    inquirer.prompt(engineerQuestions)
    .then((res) => {
        if (res.teamMember == 'Intern') {
            internPrompt();
        } else if (res.teamMember == 'Engineer') {
            engineerPrompt();
        } else {
            generateHTML();
        }
    })

}

function internPrompt() {
    
    inquirer.prompt(internQuestions)
    .then((res) => {
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