//import inquirer
const inquirer = require("inquirer");

const fs = require("fs");

//What do we want to ask the user?
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projectTitle",
    validate(answers) {
      if (!answers) {
        return "Please enter a title.";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "projectDescription",
    validate(answers) {
      if (!answers) {
        return "Please enter a description.";
      }
      return true;
    },
  },
  {
    //confirm installation details
    type: "confirm",
    message: "Would you like to add project installation details?",
    name: "confirmInstall",
  },
  {
    //confirm installation details
    // when: "confirmInstall",
    type: "input",
    message: "Enter installation details here:",
    name: "projectInstall",
    when(answers) {
      return answers.confirmInstall;
    },
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
    type: "confirm",
    message: "Would you like to enter contribution guidelines for the project?",
    name: "confirmContribution",
  },
  {
    //conditional
    // when: "confirmContribution",
    type: "input",
    message: "Please enter contribution guidelines for the project",
    name: "projectContribution",
    when(answers) {
      return answers.confirmContribution;
    },
  },
  {
    //conditional
    // when: "confirmUsage",
    type: "confirm",
    message: "Would you like to add usage information for the project?",
    name: "confirmUsage",
  },
  {
    //conditional
    // when: "confirmUsage",
    type: "input",
    message: "Please enter usage information for the project",
    name: "projectUsage",
    when(answers) {
      return answers.confirmUsage;
    },
  },
  {
    //conditional
    // when: "confirmTests",
    type: "confirm",
    message:
      "Would you like to add information on how a user could test the project?",
    name: "confirmTests",
  },
  {
    //conditional
    // when: "confirmTests",
    type: "input",
    message: "Please enter information on how a user could test the project:",
    name: "projectTests",
    when(answers) {
      return answers.confirmTests;
    },
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "projectUsername",
    validate(answers) {
      if (!answers) {
        return "Please enter a your github username.";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "projectEmail",
    validate(answers) {
      if (!answers) {
        return "Please enter your email address.";
      }
      return true;
    },
  },
];

const getBadge = (license) => {
  if (license === "None") return "";

  let badgeUrl;

  switch (license) {
    case "MIT":
      badgeUrl = "https://img.shields.io/badge/MIT-license-green";
      break;

    case "Apache":
      badgeUrl = "https://img.shields.io/badge/Apache-license-green";
      break;

    default:
      break;
  }
  return `![${license} badge](${badgeUrl})`;
};

const generateReadMe = (answers) => {
  const contributionsText = answers.confirmContribution
    ? `The following contributions were made: ${answers.projectContribution}`
    : "No project contributions";
  return `# ${answers.projectTitle} ${getBadge(answers.projectLicense)}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [Contributions](#contributions)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.projectDescription}

## Installation
Please follow the installation instructions below:

\`\`\`
${answers.projectInstall}
\`\`\`

## License
${answers.projectLicense} License

# Contributions
${contributionsText}

## Usage

\`\`\`
${answers.projectUsage}
\`\`\`

## Tests

\`\`\`
${answers.projectTests}
\`\`\`

## Questions
If you have any questions, please contact me via email: ${answers.projectEmail}
My Github profile is [here](https://github.com/${answers.projectUsername})
`;
};

const init = async () => {
  //const readmeInfo = [];

  const answers = await inquirer.prompt(questions);

  const readMe = generateReadMe(answers);

  fs.writeFileSync("./GENERATEDREADME.md", readMe);

  console.log("ReadMe generated!");
};

init();
