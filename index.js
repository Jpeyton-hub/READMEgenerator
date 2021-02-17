const inquire = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
// prompt from inquirer

const readmePrompt = () =>
  inquire.prompt([
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
      type:'list',
      name:'license',
      message: 'Which license would you like displayed?',
      choices: ['MIT', 'Apache', 'Boost', 'Eclipse', 'WTFPL']
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

// Object storing the various license badges and info

const licenseInfo = {
    MIT : {badge : '',
           info : ''},
    Apache : {badge : '',
              info : ''},
    Boost : {badge : '',
             info : ''},
    Eclipse : {badge : '',
               info : ''},
    WTFPL : {badge : '',
             info : ''}
}

// template generator function


const templateGen = (input) =>  
`># ${input.title}
${licenseInfo[input.license].badge}
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
    
${licenseInfo[input.license].info}

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
    
#### Thanks for Viewing!`;


readmePrompt()
    .then(input => writeFileAsync('newREADME.md', templateGen(input)))
    .catch(err => console.error(err));
