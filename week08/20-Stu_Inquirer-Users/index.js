const inquirer = require('inquirer');
const fs = require('fs');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'language',
      choices: ['HTML', 'CSS', 'JavaScript', 'mySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'communication',
      choices: [ 'Passing notes in class', 'Screaming across the room', 'High Fives' ]
    },
  ])
  .then(answers => {
      fs.writeFile(`${answers.username}.json`, JSON.stringify(answers, null, 2), err => err ? console.error(err) : console.log('Success'));
  }
  );