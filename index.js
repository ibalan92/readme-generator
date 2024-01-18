const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

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

inquirer.prompt(questions)
    .then((data) =>{
        const { username, email, title, description, licenses , install, test, info, contributing } = data;
        fs.writeFile('Readme.md',
            (`# ${title}

## Table of Contents

[Description](#description)<br>
[License](#license)<br>
[Installation](#installation)<br>
[Testing](#testing)<br>
[Usage](#usage)<br>
[Contributing](#contributing)<br>
[Questions](#questions)<br>

## Description 
${description}
## License 
This project is licensed under the ${licenses}
## Installation 
To install dependencies please run: ${install}
## Testing 
To test please run ${test}
## Info 
${info}.
## Contributing
${contributing}.
## Questions
 If you have any questions, open an issue or contact me at ${email}. You can find the rest of my work at https://github.com/${username}`),
        (err) => err ? console.error(err) : console.log('README successfully generated')
                )
            });
            
