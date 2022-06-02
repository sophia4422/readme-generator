console.log("Hello from NodeJS");

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
