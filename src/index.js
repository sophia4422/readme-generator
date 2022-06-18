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

    case "GNU General Public":
      badgeUrl = "https://img.shields.io/badge/GNU-license-green";
      break;

    case "BSD 2-Clause Simplified":
      badgeUrl = "https://img.shields.io/badge/BSD2-license-green";
      break;

    case "BSD 3-Clause":
      badgeUrl = "https://img.shields.io/badge/BSD3-license-green";
      break;

    case "Boost Software":
      badgeUrl = "https://img.shields.io/badge/Boost-license-green";
      break;

    case "Creative Commons Zero":
      badgeUrl = "https://img.shields.io/badge/CC0-license-green";
      break;

    case "Eclipse Public 2.0":
      badgeUrl = "https://img.shields.io/badge/Eclipse-license-green";
      break;

    default:
      break;
  }
  return `![${license} badge](${badgeUrl})`;
};

const generateReadMe = (answers) => {
  const installText = answers.confirmInstall
    ? `${answers.projectInstall}`
    : "No installation details";

  const contributionsText = answers.confirmContribution
    ? `The following contributions were made: ${answers.projectContribution}`
    : "No project contributions";

  const usageText = answers.confirmUsage
    ? `${answers.projectUsage}`
    : "No usage information";

  const testText = answers.confirmTests
    ? `${answers.projectTests}`
    : "No test information";

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

\`\`\`
${installText}
\`\`\`

## License
${answers.projectLicense} License

# Contributions
${contributionsText}

## Usage

\`\`\`
${usageText}
\`\`\`

## Tests

\`\`\`
${testText}
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
