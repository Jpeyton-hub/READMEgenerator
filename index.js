const inquire = require('inquirer');
const fs = require('fs');

// needs title, description, table of contents, installation, usage, license(checkboxes, populate badge and details in license section), contributing, tests and questions(github username into link and email)


const templateGen = (input) => { 
    `># ${input.title}
    ---

    #### ${input.description}
    ---

    >## Table of Contents
    ---
    - [Installation]()
    - [Usage]()
    - [License]()
    - [Contribution]()
    - [Tests]()
    - [Questions]()
    
    >### Installation
    
    ${input.installation}
    ---
    
    >### Usage
    
    ${input.usage}
    ---

    >### License
    
    ${licenseInfo}
    ---

    >### Contribution
    
    ${input.contribution}
    ---

    >### Tests

    ${input.tests}
    ---
    
    >### Questions
    
    If you have a questions please connect with me on Github [${input.username}](https://github.com/${input.username})
    or send me an email at <${input.email}>
    ---
    
    #### Thanks for Viewing!`
}
