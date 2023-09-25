// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "projectTitle",
    },
    {
        type: "input",
        message: "Please add a description of your project.",
        name: "projectDescription",
    },
    {
        type: "input",
        message: "Please add installation instructions for your project.",
        name: "projectInstall",
    },
    {
        type: "input",
        message: "Please add usage information for your project.",
        name: "projectUsage",
    },
    {
        type: "input",
        message: "Please add contribution guidelines for your project",
        name: "projectContri",
    },
    {
        type: "input",
        message: "Please enter test instructions for your project.",
        name: "projectTest",
    },
    {
        type: "list",
        message: "Please select your license type.",
        name: "projectLicense",
        choices: [
            "none", 
            "GNU AGPLv3", 
            "GNU GPLv3", 
            "GNU LGPLv3", 
            "Mozilla Public License 2.0", 
            "Apache License 2.0", 
            "MIT License", 
            "Boost Software License 1.0", 
            "The Unlicense"
        ],
        default: 0
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "userGitName",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "userEmail",
    },
];

// TODO: Create a function to write README file
const writeToFile = ({projectTitle, projectDescription, projectContri, projectInstall, projectLicense, projectTest, projectUsage, userGitName}) => 
`# ${projectTitle} 

## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Description
${projectDescription}

## Installation
${projectInstall}

## Usage
${projectUsage}

## License
This project is covered under the following license:

${projectLicense}

## Contributing
${projectContri}

## Tests
${projectTest}

## Questions
[GitHub Profile](https://github.com/${userGitName})`

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then ((response) => {
        const readMePageContent = writeToFile(response)

        fs.writeFile("README.md", readMePageContent , 
            (err) => 
            err ? console.log(err) : console.log("ReadMe Created."))
    })
}

// Function call to initialize app
init();
