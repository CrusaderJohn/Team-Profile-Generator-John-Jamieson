const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

class TeamProfile
{
    constructor()
    {
        this.headHTML = name;
        this.tailHTML = name;
    }
    start()
    {
        fs.writeFile("./dist/index.html",
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
            "    <main class=\"container mt-4 d-flex justify-content-center flex-wrap\">\n" +
            "        <div class=\"card shadow m-4\">\n" +
            "            <div class=\"card-header bg-primary\">\n" +
            "                Jared\n" +
            "            </div>\n" +
            "            <div class=\"card-body\">\n" +
            "                <table class=\"table table-bordered\">\n" +
            "                    <tbody>\n" +
            "                    <tr>\n" +
            "                        <td>John</td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td>Mary</td>\n" +
            "                    </tr>\n" +
            "                    </tbody>\n" +
            "                </table>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"card shadow m-4\">\n" +
            "            <div class=\"card-header bg-primary\">\n" +
            "                Jared\n" +
            "            </div>\n" +
            "            <div class=\"card-body\">\n" +
            "                <table class=\"table table-bordered\">\n" +
            "                    <tbody>\n" +
            "                    <tr>\n" +
            "                        <td>John</td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td>Mary</td>\n" +
            "                    </tr>\n" +
            "                    </tbody>\n" +
            "                </table>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </main>\n" +
            "<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js\"></script>\n" +
            "</body>\n" +
            "</html>\n",
            (error) => error ? console.log(error) : console.log('Success!'));

        // this.manager();
    }
    manager()
    {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?',
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?',
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?',
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?',
                },
            ])
            .then((data) => {
                this.save(data);
                const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

                fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
                    err ? console.log(err) : console.log('Success!')
                );
            });
    }
    save(data)
    {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    }
}

const teamProfile = new TeamProfile();
teamProfile.start();