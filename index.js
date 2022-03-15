const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inqurier = require("inquirer");
const fs = require('fs');
const path = require('path')
const generateTeam = require('./src/pagetemplate');
const teamMembers = [];

function appMenu() {
    console.log('Creating Manager');
    inqurier.prompt([
        {
            type: 'input',
            name: 'managerName',
            messagee: "What is your manager's name?",
            validate: function (value) {
                if (value === ''){
                    return 'Please enter a valid name';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is your manager's ID?",
            validate: function (value){
                if (value === ''){
                    return 'Please enter a valid ID';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your manager's email?",
            validate: function (value){
            if (value ===''){
                return 'Please enter a valid email!';
            }
            return true;
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is your manager's office number?",
            validate: function (value){
            if (value ===''){
                return 'Please enter a office number';
            }
            return true;
            }
        },
    ])

    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        console.log(teamMembers);
        createTeam();
    })
} 
