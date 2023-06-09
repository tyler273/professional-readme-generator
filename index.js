// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'project_description',
        message: 'What is your project description?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are your installation instructions?',
      },
      {
        type: 'input',
        name: 'usage_information',
        message: 'What is your usage information?',
      },
      {
        type: 'input',
        name: 'contribution_guidelines',
        message: 'What are your contribution guidelines?',
      },
      {
        type: 'input',
        name: 'test_instructions',
        message: 'What are your test instructions?',
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'license',
        choices: ['None', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'Mozilla Public License 2.0', 'The Unlicense']
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      }
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => writeFile(data));
}

// Function call to initialize app
init();

// Function to write README file
function writeFile(data){
  const generatePageMarkdown = generateMarkdown(data)
  fs.writeFile('./utils/sampleREADME.md', generatePageMarkdown, (err) => err ? console.error(err) : console.log('Success!'))
}