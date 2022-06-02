console.log("Hello from NodeJS");

const fs = require("fs");

//import inquirer
const inquirer = require("inquirer");

//What do we want to ask the user?
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projectTitle",
    // validate: (input) => {
    //   if (input.projectTitle) {
    //     return true;
    //   }
    //   return "Please enter a title for your project";
    // },
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "projectDescription",
  },
  {
    //Need to as a Y/N question and prompt for next steps
    //Need to make this conditional
    type: "input",
    message: "What is the first step to install your project?",
    name: "projectInstall",
  },
  {
    //Need to change this to a drop down of license options
    type: "list",
    message: "Please select the license for your project",
    name: "projectLicense",
    choices: [
      "Apache",
      "GNU General Public",
      "MIT",
      "BSD 2-Clause Simplified",
      "BSD 3-Clause",
      "Boost Software",
      "Creative Commons Zero",
      "Eclipse Public 2.0",
      "None",
    ],
  },
  {
    //Need to make this conditional
    type: "input",
    message: "Please enter contribution guidelines for the project",
    name: "projectContribution",
  },
  {
    //Need to make this conditional
    type: "input",
    message: "Please enter usage information for the project",
    name: "projectUsage",
  },
  {
    //Need to make this conditional
    type: "input",
    message: "Please enter information on how a user could test the project",
    name: "projectTests",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "projectUsername",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "projectEmail",
  },
];

const init = async () => {
  const readmeInfo = [];

  const answers = await inquirer.prompt(questions);

  console.log(answers);
  readmeInfo.push(answers);
};

init();

const generateReadme = (readmeInfo) => {
  const readme = `# ${generateReadme(
    projectTitle
  )} ![MIT](https://img.shields.io/badge/MIT-license-green)

    # Table of Contents
    
    - [Description](#description)
    - [Installation](#installation)
    - [License](#license)
    - [Contributions](#contributions)
    - [Usage](#usage)
    - [Tests](#tests)
    - [Questions](#questions)
    
    # Description
    
    ${generateReadme(projectDescription)}
    
    # Installation
    
    Please follow the installation instructions below:
    
    
    ${generateReadme(projectInstall)}

    
    # License
    
    ${generateReadme(projectLicense)} License
    
    # Contributions
    
    The following contributions were made:

    ${generateReadme(projectContribution)}
    
    # Usage
    
  
    ${generateReadme(projectUsage)}
  
    
    # Tests
    
    ${generateReadme(projectTests)}
    
    # Questions
    
    If you have any questions, please contact me via email: ${generateReadme(
      projectEmail
    )}
    
    My Github profile is [here](https://github.com/${generateReadme(
      projectUsername
    )})
    `;

  return readme;
};

fs.writeFileSync("GENERATEDREADME.md", readme);
