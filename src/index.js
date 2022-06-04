console.log("Hello from NodeJS");

//import inquirer
const inquirer = require("inquirer");

const fs = require("fs");

//What do we want to ask the user?
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projectTitle",
    // validate: (input) => {
    //   if (!input.projectTitle) {
    //     return "Please enter a title for your project";
    //   } else {
    //     return true;
    //   }
    // },
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "projectDescription",
  },
  {
    //confirm installation details
    // when: "confirmInstall",
    type: "input",
    message: "Enter installation details here:",
    name: "projectInstall",
  },
  {
    //drop down of license options
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
    //conditional
    // when: "confirmContribution",
    type: "input",
    message: "Please enter contribution guidelines for the project",
    name: "projectContribution",
  },
  {
    //conditional
    // when: "confirmUsage",
    type: "input",
    message: "Please enter usage information for the project",
    name: "projectUsage",
  },
  {
    //conditional
    // when: "confirmTests",
    type: "input",
    message: "Please enter information on how a user could test the project:",
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

  console.log(readmeInfo);
};

const generateReadme = (readmeInfo) => {
  const readMe = () => {
    `# ${readmeInfo(
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
  
      ${readmeInfo(projectDescription)}
  
      # Installation
  
      Please follow the installation instructions below:
  
      ${readmeInfo(projectInstall)}
  
      # License
  
      ${readmeInfo(projectLicense)} License
  
      # Contributions
  
      The following contributions were made:
  
      ${readmeInfo(projectContribution)}
  
      # Usage
  
      ${readmeInfo(projectUsage)}
  
      # Tests
  
      ${readmeInfo(projectTests)}
  
      # Questions
  
      If you have any questions, please contact me via email: ${readmeInfo(
        projectEmail
      )}
  
      My Github profile is [here](https://github.com/${readmeInfo(
        projectUsername
      )})
      `;

    return readMe;
  };
};

init();

fs.writeFileSync("./GENERATEDREADME.md", JSON.stringify(readmeInfo));
