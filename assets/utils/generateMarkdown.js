function generateMarkdown({ title, description, installation, usage, contribution, test, license, github, email }) {

    return `# ${title}

## Description
${description}  

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contribution)
* [Tests](#tests)
* [Contact](#contact)
* [License](#license)

## Installation
${installation} 

## Usage
${usage}

## Contribution
${contribution}

## Tests
${test}

## Contact
Contact email: ${email}
GitHub: ${github})


## License
This project is licensed under the terms of the ${license} license.
`;
}

module.exports = generateMarkdown;