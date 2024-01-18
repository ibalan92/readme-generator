const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "What is your Github username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project name?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a description of your project",
    },
    {
        type: 'list',
        name: 'licenses',
        message: "What kind of license should your project have?",
        choices: ['MIT License', 'Apache License 2.0', 'Boost Software License 1.0'],
    },
    {
        type: 'input',
        name: 'install',
        message: "What command should be run to install dependencies?",
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: "What command should be run to run tests?",
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'info',
        message: "What does the user need to know about using the repo?",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "What does the user need to know about contributing to the the repo?",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions)
    .then((data) =>{
        

    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
