const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

class TeamProfile
{
    constructor()
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName()
    {
        return this.name;
    }
    getId()
    {
        return this.id;
    }
    getEmail()
    {
        return this.email;
    }
    getRole()
    {
        return "Employee";
    }
}