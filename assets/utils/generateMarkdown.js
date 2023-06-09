function generateMarkdown({ title, description, installation, usage, license, contributing, tests, questions }) {

    return `# ${title}
${badge[license]}

## Description
${description}  

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
${installation} 

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## Questions
Contact email: ${email}
GitHub: ${github})
${questions}

## License
This project is licensed under the terms of the ${license} license.
`;
}

module.exports = generateMarkdown;