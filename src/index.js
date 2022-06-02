console.log("Hello from NodeJS");

//import inquirer
const inquirer = require("inquirer");

//What do we want to ask the user?
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projectTitle",
    validate: (input) => {
      if (input.projectTitle) {
        return true;
      }
      return "Please enter a title for your project";
    },
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
    type: "input",
    message: "What is the license for your project?",
    name: "projectLicense",
  },
  {
    //Need to make this conditional
    type: "input",
    message: "Who contributed to this project?",
    name: "projectContribution",
  },
  {
    //Need to make this conditional
    type: "input",
    message: "What are the steps to use this project?",
    name: "projectUsage",
  },
  {
    //Need to make this conditional
    type: "input",
    message: "What are the tests?",
    name: "projectTests",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "projectUsername",
  },
  {
    type: "input",
    message: "What is your email address",
    name: "projectEmail",
  },
];

// const init = async () => {
//   let inProgress = true;
//   const readMe = [];

//   while (inProgress) {
//     const answers = await inquirer.prompt(questions);

//     console.log(answers);
//     readMe.push(answers);

//     if (!answers.continue) {
//       inProgress = false;
//     }
//   }
// };

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});
