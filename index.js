const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

class TeamProfile
{
    constructor()
    {
        this.headHTML =
            "<!DOCTYPE html>\n" +
            "<html lang=\"en\">\n" +
            "<head>\n" +
            "    <meta charset=\"UTF-8\">\n" +
            "    <title>Team Profile Generator</title>\n" +
            "    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n" +
            "</head>\n" +
            "<body>\n" +
            "    <header class=\"container-fluid p-5 bg-primary text-white text-center\">\n" +
            "        <h1>My Team</h1>\n" +
            "    </header>\n" +
            "    <main class=\"container mt-4 d-flex justify-content-center flex-wrap\">\n";
        this.bodyHTML = "";
        this.tailHTML =
            "    </main>\n" +
            "<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js\"></script>\n" +
            "</body>\n" +
            "</html>\n";
    }
    start()
    {
        console.log("Enter team manager’s name, employee ID, email address, and office number.")
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'ID?',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Email?',
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Office Number?',
                },
            ])
            .then((data) => {
                const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
                this.bodyHTML = this.bodyHTML +
                    "        <div class=\"card shadow m-4\">\n" +
                    "            <div class=\"card-header bg-primary\">\n" +
                    "                <h2 class=\"text-white\">" + manager.getName() + "</h2>\n" +
                    "                <h3 class=\"text-white\">" + manager.getRole() + "</h3>\n" +
                    "            </div>\n" +
                    "            <div class=\"card-body\">\n" +
                    "                <table class=\"table table-bordered\">\n" +
                    "                    <tbody>\n" +
                    "                    <tr>\n" +
                    "                        <td>ID: " + manager.getId() + "</td>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                        <td>Email: <a href = \"mailto: " + manager.getEmail() + "\">" + manager.getEmail() + "</a></td>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                        <td>Office Number: " + manager.getOfficeNumber() + "</td>\n" +
                    "                    </tr>\n" +
                    "                    </tbody>\n" +
                    "                </table>\n" +
                    "            </div>\n" +
                    "        </div>\n";
                this.mainMenu();
            });
    }
    engineer()
    {
        console.log("Enter engineer’s name, ID, email, and GitHub username.")
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'ID?',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Email?',
                },
                {
                    type: 'input',
                    name: 'gitHub',
                    message: 'GitHub Username?',
                },
            ])
            .then((data) => {
                const engineer = new Engineer(data.name, data.id, data.email, data.gitHub);
                this.bodyHTML = this.bodyHTML +
                    "        <div class=\"card shadow m-4\">\n" +
                    "            <div class=\"card-header bg-primary\">\n" +
                    "                <h2 class=\"text-white\">" + engineer.getName() + "</h2>\n" +
                    "                <h3 class=\"text-white\">" + engineer.getRole() + "</h3>\n" +
                    "            </div>\n" +
                    "            <div class=\"card-body\">\n" +
                    "                <table class=\"table table-bordered\">\n" +
                    "                    <tbody>\n" +
                    "                    <tr>\n" +
                    "                        <td>ID: " + engineer.getId() + "</td>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                        <td>Email: <a href = \"mailto: " + engineer.getEmail() + "\">" + engineer.getEmail() + "</a></td>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                        <td>GitHub: <a href=\"https://github.com/" + engineer.getGithub() + "\" target=\"_blank\" rel=\"noopener noreferrer\">" + engineer.getGithub() + "</a></td>\n" +
                    "                    </tr>\n" +
                    "                    </tbody>\n" +
                    "                </table>\n" +
                    "            </div>\n" +
                    "        </div>\n";
                this.mainMenu();
            });
    }
    intern()
    {
        console.log("Enter intern’s name, ID, email, and school.")
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'ID?',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Email?',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'School?',
                },
            ])
            .then((data) => {
                const intern = new Intern(data.name, data.id, data.email, data.school);
                this.bodyHTML = this.bodyHTML +
                    "        <div class=\"card shadow m-4\">\n" +
                    "            <div class=\"card-header bg-primary\">\n" +
                    "                <h2 class=\"text-white\">" + intern.getName() + "</h2>\n" +
                    "                <h3 class=\"text-white\">" + intern.getRole() + "</h3>\n" +
                    "            </div>\n" +
                    "            <div class=\"card-body\">\n" +
                    "                <table class=\"table table-bordered\">\n" +
                    "                    <tbody>\n" +
                    "                    <tr>\n" +
                    "                        <td>ID: " + intern.getId() + "</td>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                        <td>Email: <a href = \"mailto: " + intern.getEmail() + "\">" + intern.getEmail() + "</a></td>\n" +
                    "                    </tr>\n" +
                    "                    <tr>\n" +
                    "                        <td>School: " + intern.getSchool() + "</td>\n" +
                    "                    </tr>\n" +
                    "                    </tbody>\n" +
                    "                </table>\n" +
                    "            </div>\n" +
                    "        </div>\n";
                this.mainMenu();
            });
    }
    mainMenu()
    {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Add an engineer, an intern, or finish building team.',
                    name: 'add',
                    choices: ['Add Engineer', 'Add Intern', 'Finish Building Team'],
                },
            ])
            .then((data) => {
                if (data.add === "Add Engineer")
                {
                    this.engineer();
                }
                else if (data.add === "Add Intern")
                {
                    this.intern()
                }
                else
                {
                    this.save();
                }
            });
    }
    save()
    {
        fs.writeFile("./dist/index.html", this.headHTML + this.bodyHTML + this.tailHTML,
            (error) => error ? console.log(error) : console.log('Success!'));
    }
}

const teamProfile = new TeamProfile();
teamProfile.start();