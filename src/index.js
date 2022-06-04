console.log("Hello from NodeJS");

// const fs = require("fs");

//import inquirer
const inquirer = require("inquirer");

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
    //Y/N question and prompt for next steps
    //Conditional question
    type: "confirm",
    message: "Do you want to add project installation details?",
    name: "confirmInstall",
  },
  {
    //confirm installation details
    when: "confirmInstall",
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
    type: "confirm",
    message: "Do you want to add contribution guidelines for this project?",
    name: "confirmContribution",
  },
  {
    //conditional
    when: "confirmContribution",
    type: "input",
    message: "Please enter contribution guidelines for the project",
    name: "projectContribution",
  },
  {
    //conditional
    type: "confirm",
    message: "Do you want to add usage information for this project?",
    name: "confirmUsage",
  },
  {
    //conditional
    when: "confirmUsage",
    type: "input",
    message: "Please enter usage information for the project",
    name: "projectUsage",
  },
  {
    //conditional
    type: "confirm",
    message:
      "Would you like to add details on how a user could test the project?",
    name: "confirmTests",
  },
  {
    //conditional
    when: "confirmTests",
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
};

// const generateReadme = (readmeInfo) => {
//   const readme = `# ${generateReadme(
//     projectTitle
//   )} ![MIT](https://img.shields.io/badge/MIT-license-green)

//     # Table of Contents

//     - [Description](#description)
//     - [Installation](#installation)
//     - [License](#license)
//     - [Contributions](#contributions)
//     - [Usage](#usage)
//     - [Tests](#tests)
//     - [Questions](#questions)

//     # Description

//     ${generateReadme(projectDescription)}

//     # Installation

//     Please follow the installation instructions below:

//     ${generateReadme(projectInstall)}

//     # License

//     ${generateReadme(projectLicense)} License

//     # Contributions

//     The following contributions were made:

//     ${generateReadme(projectContribution)}

//     # Usage

//     ${generateReadme(projectUsage)}

//     # Tests

//     ${generateReadme(projectTests)}

//     # Questions

//     If you have any questions, please contact me via email: ${generateReadme(
//       projectEmail
//     )}

//     My Github profile is [here](https://github.com/${generateReadme(
//       projectUsername
//     )})
//     `;

//   return readme;
// };

// fs.writeFileSync("NEWREADME.md", readme);

init();
