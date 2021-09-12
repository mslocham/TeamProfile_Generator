
const Employee = require('../lib/Employee.js');

test ('creates an employee object', () => {
    const employee = new Employee('John', 9, 'abc@xyz.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email.length).toBeGreaterThan(0);
});

test ('response from getName', () => {
    const employee = new Employee('John', 9, 'abc@xyz.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
})

test ('response from getId', () => {
    const employee = new Employee('John', 9, 'abc@xyz.com');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test ('response from getEmail', () => {
    const employee = new Employee('John', 9, 'abc@xyz.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
})