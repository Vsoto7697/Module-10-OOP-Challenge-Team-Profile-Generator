const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const generateTeam = require("./src/generatehtmltemplate.js")

teamArray = [];



function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What employee role would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No more team members are needed at this time."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }
// OOP Functions

function addManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "What is your manager's name?"
    },

    {
      type: "input",
      name: "managerId",
      message: "What is your manager's employee ID number?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "What is your manager's email address?"
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is your manager's office number?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });

}


function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's employee ID number?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is your intern's employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does your intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }

  // return to menu with option to add another team member create team

  // Would you like to add a team member?
  // Yes || No
  // If Yes --> Then select an employee role for your new team member: Manager, Engineer, Intern
  // If No --> Create Team


function htmlBuilder () {
    console.log("Thank you for your input! Your Team was created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTeam();

}

runApp();