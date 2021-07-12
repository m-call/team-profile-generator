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

function init() {

    inquirer.prompt(initialQuestions)
    .then((res) => {
        if (res.teamMember == 'Engineer') {
            engineerPrompt();
        }
    })
}

function engineerPrompt() {
    
    inquirer.prompt(engineerQuestions)
    .then((res) => {
        if (res.teamMember == 'Intern') {
            internPrompt();
        }
    })

} 

init();