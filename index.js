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
        name: 'manager-name'
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'manager-id'
    },
    {
        type: 'input',
        message: "What is the team manager's e-mail?",
        name: 'manager-email'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'manager-office'
    },
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'team-memeber',
        choices: ['Engineer', 'Intern', "I don't want to add anymore team members"]
    }
    
];

function init() {

    inquirer.prompt(initialQuestions);

}

init();