console.log("Hello from NodeJS");

//import inquirer
const inquirer = require("inquirer");

//What do we want to ask the user?
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projectTitle",
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

//Title name
//Short description of what, why and how

//What is the project for?
//How do you use it?
//What are the steps to install your project?

//What was the motivation?
//Why did you build the project?
//What problem does it solve?
//What did you learn?

//How to report issues?
//How to contribute?

const questions = [
  {
    type: "input",
  },
];
