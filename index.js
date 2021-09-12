const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

// const employee = new Employee('Jeetu', 5, 'Jeetu@Jeeta.com');
// console.log(employee.getName());

class createSite {
    constructor(){
        this.employee;
    }
 run() {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What  is your email?'
        }
    ])
    .then()
}
}
module.exports = createSite;