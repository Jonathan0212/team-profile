const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inqurier = require("inquirer");
const fs = require('fs');
const path = require('path')
const generateTeam = require('./src/pagetemplate');
const teamMembers = [];

