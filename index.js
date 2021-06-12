const inquirer = require("inquirer");
const fs = require("fs");
// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const { inherits } = require("util");

let members = [];

function init() {
    inquirer
        .prompt([
            {
                type: 'question',
                message: `Enter Team Manager's Name`,
                name: 'name',
            },
            {
                type: 'question',
                message: `Enter Team Manager's ID`,
                name: 'id',
            },
            {
                type: 'question',
                message: `Enter email address`,
                name: 'email',
            },
            {
                type: "question",
                message: "Enter Office Number",
                name: "officeNum",
            },
        ])
        .then((res1) => {
            const manage = new Manager(res1.name, res1.id, res1.email, res1.officeNum);
            members.push(manage);
            // console.log(members);
            member();
        })
}

function member() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: `Add an Engineer, Intern, or finish building your team?`,
                name: 'add',
                choices: ["Engineer", "Intern", new inquirer.Separator(), "Finish"],
            },
        ])
        .then((response) => {
            if (response.add === "Engineer") {
                inquirer
                    .prompt([
                        {
                            type: 'question',
                            message: `Enter Employee's Name`,
                            name: 'name',
                        },
                        {
                            type: 'question',
                            message: `Enter Employee ID`,
                            name: 'id',
                        },
                        {
                            type: 'question',
                            message: `Enter email address`,
                            name: 'email',
                        },
                        {
                            type: "question",
                            message: "Enter Github Username",
                            name: "github",
                        },
                    ])
                    .then((res1) => {
                        const eng = new Engineer(res1.name, res1.id, res1.email, res1.github);
                        members.push(eng);
                        // console.log(members);
                        member();
                    })
            } else if (response.add === "Intern") {
                inquirer
                    .prompt([
                        {
                            type: 'question',
                            message: `Enter Employee's Name`,
                            name: 'name',
                        },
                        {
                            type: 'question',
                            message: `Enter Employee ID`,
                            name: 'id',
                        },
                        {
                            type: 'question',
                            message: `Enter email address`,
                            name: 'email',
                        },
                        {
                            type: "question",
                            message: "Enter School",
                            name: "school",
                        },
                    ])
                    .then((res1) => {
                        const intern = new Intern(res1.name, res1.id, res1.email, res1.school);
                        members.push(intern);
                        // console.log(members);
                        member();
                    })
            } else {
                let data1 = `<!DOCTYPE html>
                <html lang="en">
                
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet"
                        integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
                    <title>Team Profile</title>
                </head>
                
                <body>
                    <!-- Navbar for the page -->
                    <nav class="navbar navbar-light bg-dark fix">
                        <div class="container-fluid">
                            <a class="navbar-brand text-light" href="#">
                                Team Profile Generator
                            </a>
                        </div>
                    </nav>
                
                    <main>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 col-sm-12 my-5">
                                    <div class="card" style="width: 18rem;">
                                        <div class="card-header">
                                            Team Manager: ${members[0].name}
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">ID: ${members[0].id}</li>
                                            <li class="list-group-item">Email: ${members[0].email}</li>
                                            <li class="list-group-item">Office Number: ${members[0].officeNumber}</li>
                                        </ul>
                                    </div>
                                </div>`;
                if (members.length > 1) {
                    members.forEach(el => {
                        // console.log(el.constructor.name);
                        if (el.constructor.name == "Engineer") {
                            data1 += `<div class="col-lg-4 col-sm-12 my-5">
                            <div class="card" style="width: 18rem;">
                                <div class="card-header">
                                Engineer: ${el.name}
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID: ${el.id}</li>
                                    <li class="list-group-item">Email: ${el.email}</li>
                                    <li class="list-group-item">Github Username: ${el.github}</li>
                                </ul>
                            </div>
                        </div>`
                        } else if (el.constructor.name == "Intern") {
                            data1 += `<div class="col-lg-4 col-sm-12 my-5">
                            <div class="card" style="width: 18rem;">
                                <div class="card-header">
                                Intern: ${el.name}
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID: ${el.id}</li>
                                    <li class="list-group-item">Email: ${el.email}</li>
                                    <li class="list-group-item">School: ${el.school}</li>
                                </ul>
                            </div>
                        </div>`
                        }
                    });
                }
                data1 += `</div>
                </div>
        
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
                crossorigin="anonymous"></script>
        </body>
        
        </html>`


                writeToFile('sample.html', data1);
                return;
            }
        })
}

// Write html
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

init();
