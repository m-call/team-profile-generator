// Importing the necessary files and setting them to a const variable
const inquirer = require('inquirer');
const fs = require('fs');

console.log('Please build your team');
inquirer.prompt([
    {
        type: 'input',
        message: `What is the team manager's name?`,
        name: 'manager-name'
    },
    {
        type: 'input',
        message: `What is the team manager's id?`,
        name: 'manager-id'
    },
    {
        type: 'input',
        message: `What is the team manager's e-mail?`,
        name: 'manager-email'
    },
    {
        type: 'input',
        message: `What is the team manager's office number?`,
        name: 'manager-office'
    }
]);