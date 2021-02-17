const inquire = require('inquirer');
const fs = require('fs');
// prompt from inquirer

const readmePrompt = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please type a brief description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Input installation instructions you want displayed.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Input your usage instructions.',
    },
    {
      type:'checkbox',
      name:'license',
      message: 'Which license would you like displayed?',
      choices: ['MIT', ]
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Input your contribution instructions',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Input testing information',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?'  
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'  
    }
  ]);


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
    
    ${input.license}
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
};

readmePrompt()
    .then(input => fs.write('newREADME.md', templateGen(input)))
    .then(console.log('README generated!'))
    .catch(err => console.error(err));
