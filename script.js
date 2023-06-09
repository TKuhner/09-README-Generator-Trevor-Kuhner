const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./assets/utils/generateMarkdown.js');

// array of questions for user
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for your project.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your project.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage information for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines for your project.',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions for your project.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter test instructions for your project.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    }
]).then(function ({ title, description, installation, usage, contribution, test, license, github, email }) {
    fs.writeFile('./dist/READMETemp.md', generateMarkdown({ title, description, installation, usage, contribution, test, license, github, email }), err => {

        err ? console.log(err) : console.log('README file created successfully!');
    });
});

// function to write README file
