// team profiles
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// node modules
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const generateTeam = require("./src/generatehtmltemplate.js")

// team array
teamArray = [];


// function to run app
function runApp () {

  // create team functions that prompts user with several questions that they must answer in order to generate index.html
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

// function that allows user to input manager information given selected criteria of prompts
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

// function that allows user to input engineer information given selected criteria of prompts
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

  // function that allows user to input intern information given selected criteria of prompts
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
    
      // if user answers all the prompts, auto generate answers and create team
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }


// console log a message to user after user is done generating html document 
function htmlBuilder () {
    console.log("Thank you for your input! Your Team was created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTeam();

}

runApp();